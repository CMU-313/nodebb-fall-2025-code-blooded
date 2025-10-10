
'use strict';

const _ = require('lodash');

const db = require('../database');
const privileges = require('../privileges');
const user = require('../user');
const categories = require('../categories');
const meta = require('../meta');
const plugins = require('../plugins');

module.exports = function (Topics) {
	Topics.getSortedTopics = async function (params) {
		const data = {
			nextStart: 0,
			topicCount: 0,
			topics: [],
		};

		params.term = params.term || 'alltime';
		params.sort = params.sort || 'recent';
		params.query = params.query || {};
		if (params.hasOwnProperty('cids') && params.cids && !Array.isArray(params.cids)) {
			params.cids = [params.cids];
		}
		params.tags = params.tags || [];
		if (params.tags && !Array.isArray(params.tags)) {
			params.tags = [params.tags];
		}
		data.tids = await getTids(params);
		data.tids = await sortTids(data.tids, params);
		data.tids = await filterTids(data.tids.slice(0, meta.config.recentMaxTopics), params);
		data.topicCount = data.tids.length;
		data.topics = await getTopics(data.tids, params);
		data.nextStart = params.stop + 1;
		return data;
	};

	async function getTids(params) {
		if (plugins.hooks.hasListeners('filter:topics.getSortedTids')) {
			const result = await plugins.hooks.fire('filter:topics.getSortedTids', { params: params, tids: [] });
			return result.tids;
		}
		let tids = [];
		if (params.term !== 'alltime') {
			if (params.sort === 'posts') {
				tids = await getTidsWithMostPostsInTerm(params.cids, params.uid, params.term);
			} else {
				const cids = await getCids(params.cids, params.uid);
				tids = await Topics.getLatestTidsFromSet(
					cids.map(cid => `cid:${cid}:tids:create`), 0, -1, params.term
				);
			}

			if (params.filter === 'watched') {
				tids = await Topics.filterWatchedTids(tids, params.uid);
			}
		} else if (params.filter === 'watched') {
			tids = await getWatchedTopics(params);
		} else if (params.cids) {
			tids = await getCidTids(params);
		} else if (params.tags.length) {
			tids = await getTagTids(params);
		} else {
			const method = params.sort === 'old' ?
				'getSortedSetRange' :
				'getSortedSetRevRange';
			tids = await db[method](sortToSet(params.sort), 0, meta.config.recentMaxTopics - 1);
		}

		return tids;
	}

	function sortToSet(sort) {
		const map = {
			recent: 'topics:recent',
			old: 'topics:recent',
			create: 'topics:tid',
			posts: 'topics:posts',
			votes: 'topics:votes',
			views: 'topics:views',
			admin_replied: 'topics:recent',
			'admin-replied': 'topics:recent',
		};
		if (map.hasOwnProperty(sort)) {
			return map[sort];
		}
		return 'topics:recent';
	}

	async function getCids(cids, uid) {
		if (Array.isArray(cids)) {
			cids = await privileges.categories.filterCids('topics:read', cids, uid);
		} else {
			cids = await categories.getCidsByPrivilege('categories:cid', uid, 'topics:read');
			cids = cids.filter(cid => cid !== -1);
		}
		return cids;
	}

	async function getTidsWithMostPostsInTerm(cids, uid, term) {
		cids = await getCids(cids, uid);
		const pids = await db.getSortedSetRevRangeByScore(
			cids.map(cid => `cid:${cid}:pids`),
			0,
			1000,
			'+inf',
			Date.now() - Topics.getSinceFromTerm(term)
		);
		const postObjs = await db.getObjectsFields(pids.map(pid => `post:${pid}`), ['tid']);
		const tidToCount = {};
		postObjs.forEach((post) => {
			tidToCount[post.tid] = tidToCount[post.tid] || 0;
			tidToCount[post.tid] += 1;
		});

		return _.uniq(postObjs.map(post => String(post.tid)))
			.sort((t1, t2) => tidToCount[t2] - tidToCount[t1]);
	}

	async function getWatchedTopics(params) {
		const sortSet = ['recent', 'old'].includes(params.sort) ? 'topics:recent' : `topics:${params.sort}`;
		const method = params.sort === 'old' ? 'getSortedSetIntersect' : 'getSortedSetRevIntersect';
		return await db[method]({
			sets: [sortSet, `uid:${params.uid}:followed_tids`],
			weights: [1, 0],
			start: 0,
			stop: meta.config.recentMaxTopics - 1,
		});
	}

	async function getTagTids(params) {
		const sets = [
			sortToSet(params.sort),
			...params.tags.map(tag => `tag:${tag}:topics`),
		];
		const method = params.sort === 'old' ?
			'getSortedSetIntersect' :
			'getSortedSetRevIntersect';
		return await db[method]({
			sets: sets,
			start: 0,
			stop: meta.config.recentMaxTopics - 1,
			weights: sets.map((s, index) => (index ? 0 : 1)),
		});
	}

	async function getCidTids(params) {
		if (params.tags.length) {
			return _.intersection(...await Promise.all(params.tags.map(async (tag) => {
				const sets = params.cids.map(cid => `cid:${cid}:tag:${tag}:topics`);
				return await db.getSortedSetRevRange(sets, 0, -1);
			})));
		}

		const sets = [];
		const pinnedSets = [];
		params.cids.forEach((cid) => {
			if (params.sort === 'recent' || params.sort === 'old' || params.sort === 'admin_replied' || params.sort === 'admin-replied') {
				sets.push(`cid:${cid}:tids`);
			} else {
				sets.push(`cid:${cid}:tids${params.sort ? `:${params.sort}` : ''}`);
			}
			pinnedSets.push(`cid:${cid}:tids:pinned`);
		});
		let pinnedTids = await db.getSortedSetRevRange(pinnedSets, 0, -1);
		pinnedTids = await Topics.tools.checkPinExpiry(pinnedTids);
		const method = params.sort === 'old' ?
			'getSortedSetRange' :
			'getSortedSetRevRange';
		const tids = await db[method](sets, 0, meta.config.recentMaxTopics - 1);
		return pinnedTids.concat(tids);
	}

	async function sortTids(tids, params) {
		if (params.term === 'alltime' && !params.cids && !params.tags.length && params.filter !== 'watched' && !params.floatPinned && params.sort !== 'admin_replied') {
			return tids;
		}

		if (params.sort === 'posts' && params.term !== 'alltime') {
			return tids;
		}

		const { sortMap, fields } = await plugins.hooks.fire('filter:topics.sortOptions', {
			params,
			fields: [
				'tid', 'timestamp', 'lastposttime', 'upvotes', 'downvotes', 'postcount', 'pinned',
			],
			sortMap: {
				recent: sortRecent,
				old: sortOld,
				create: sortCreate,
				posts: sortPopular,
				votes: sortVotes,
				views: sortViews,
				admin_replied: sortAdminReplied,
				'admin-replied': sortAdminReplied,
			},
		});

		const topicData = await Topics.getTopicsFields(tids, fields);
		const sortFn = sortMap.hasOwnProperty(params.sort) && sortMap[params.sort] ?
			sortMap[params.sort] : sortRecent;

		// If sorting by admin_replied, compute the admin reply timestamps map first
		if (params.sort === 'admin_replied') {
			try {
				const map = await computeAdminReplyMap(topicData);
				sortAdminReplied._map = map;
			} catch (e) {
				sortAdminReplied._map = {};
			}
		}

		if (params.floatPinned) {
			floatPinned(topicData, sortFn);
		} else {
			topicData.sort(sortFn);
		}

		const result = topicData.map(topic => topic && topic.tid);

		return result;
	}

	function floatPinned(topicData, sortFn) {
		topicData.sort((a, b) => (a.pinned !== b.pinned ? b.pinned - a.pinned : sortFn(a, b)));
	}

	function sortRecent(a, b) {
		return b.lastposttime - a.lastposttime;
	}

	function sortOld(a, b) {
		return a.lastposttime - b.lastposttime;
	}

	function sortCreate(a, b) {
		return b.timestamp - a.timestamp;
	}

	function sortVotes(a, b) {
		if (a.votes !== b.votes) {
			return b.votes - a.votes;
		}
		return b.postcount - a.postcount;
	}

	function sortPopular(a, b) {
		if (a.postcount !== b.postcount) {
			return b.postcount - a.postcount;
		}
		return b.viewcount - a.viewcount;
	}

	function sortViews(a, b) {
		return b.viewcount - a.viewcount;
	}

	function sortAdminReplied(a, b) {
		const map = sortAdminReplied._map || {};
		const ta = map[a.tid] || 0;
		const tb = map[b.tid] || 0;
		if (ta !== tb) {
			return tb - ta;
		}
		// Fall back to recently replied if equal
		return sortRecent(a, b);
	}

	// Compute a map of tid -> latest admin reply timestamp for the provided topicData.
	// This helper batches DB requests and user admin checks.
	async function computeAdminReplyMap(topicData) {
		const tids = topicData.map(t => t && t.tid).filter(Boolean);
		if (!tids.length) {
			return {};
		}

		// For each tid, fetch the latest N pids (we'll check up to 50 latest replies per topic)
		const pidPromises = tids.map(tid => db.getSortedSetRevRange(`tid:${tid}:posts`, 0, 49));
		const pidArrays = await Promise.all(pidPromises);
		const tidToPids = {};
		const allPids = [];
		pidArrays.forEach((arr, idx) => {
			const tid = tids[idx];
			tidToPids[tid] = arr || [];
			allPids.push(...(arr || []));
		});

		const uniquePids = Array.from(new Set(allPids.filter(Boolean).map(String)));
		if (!uniquePids.length) {
			return {};
		}

		const postsData = await require('../posts').getPostsFields(uniquePids, ['pid', 'uid', 'timestamp']);
		// Map pid -> post
		const pidMap = {};
		postsData.forEach((p) => {
			if (p && p.pid) {
				pidMap[String(p.pid)] = p;
			}
		});

		// Check admin status for unique uids
		const uids = Array.from(new Set(postsData.map(p => p && p.uid).filter(Boolean)));
		const uidIsAdmin = {};
		await Promise.all(uids.map(async (uid) => {
			try {
				uidIsAdmin[String(uid)] = await require('../privileges').users.isAdministrator(uid);
			} catch (e) {
				uidIsAdmin[String(uid)] = false;
			}
		}));

		const result = {};
		for (const tid of tids) {
			let maxTs = 0;
			const pids = tidToPids[tid] || [];
			for (const pid of pids) {
				const post = pidMap[String(pid)];
				if (post && post.uid && uidIsAdmin[String(post.uid)]) {
					const ts = parseInt(post.timestamp, 10) || 0;
					if (ts > maxTs) {
						maxTs = ts;
					}
				}
			}
			result[tid] = maxTs;
		}
		return result;
	}

	async function filterTids(tids, params) {
		const { filter, uid } = params;

		if (filter === 'new') {
			tids = await Topics.filterNewTids(tids, uid);
		} else if (filter === 'unreplied') {
			tids = await Topics.filterUnrepliedTids(tids);
		} else {
			tids = await Topics.filterNotIgnoredTids(tids, uid);
		}

		tids = await privileges.topics.filterTids('topics:read', tids, uid);
		let topicData = await Topics.getTopicsFields(tids, ['uid', 'tid', 'cid', 'tags']);
		const topicCids = _.uniq(topicData.map(topic => topic.cid)).filter(Boolean);

		async function getIgnoredCids() {
			if (params.cids || filter === 'watched' || meta.config.disableRecentCategoryFilter) {
				return [];
			}
			return await categories.isIgnored(topicCids, uid);
		}
		const [ignoredCids, filtered] = await Promise.all([
			getIgnoredCids(),
			user.blocks.filter(uid, topicData),
		]);

		const isCidIgnored = _.zipObject(topicCids, ignoredCids);
		topicData = filtered;

		const cids = params.cids && params.cids.map(String);
		const { tags } = params;
		tids = topicData.filter(t => (
			t &&
			t.cid &&
			!isCidIgnored[t.cid] &&
			(cids || parseInt(t.cid, 10) !== -1) &&
			(!cids || cids.includes(String(t.cid))) &&
			(!tags.length || tags.every(tag => t.tags.find(topicTag => topicTag.value === tag)))
		)).map(t => t.tid);

		const result = await plugins.hooks.fire('filter:topics.filterSortedTids', { tids: tids, params: params });
		return result.tids;
	}

	async function getTopics(tids, params) {
		tids = tids.slice(params.start, params.stop !== -1 ? params.stop + 1 : undefined);
		const topicData = await Topics.getTopicsByTids(tids, params);
		Topics.calculateTopicIndices(topicData, params.start);
		return topicData;
	}

	Topics.calculateTopicIndices = function (topicData, start) {
		topicData.forEach((topic, index) => {
			if (topic) {
				topic.index = start + index;
			}
		});
	};
};
