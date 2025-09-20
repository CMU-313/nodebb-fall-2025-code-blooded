'use strict';

const db = require('../database');
const user = require('../user');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');

module.exports = function (Posts) {
	Posts.endorse = async function (pid, uid) {
		const canEndorse = await privileges.posts.can('posts:endorse', pid, uid);
		if (!canEndorse) {
			throw new Error('[[error:no-privileges]]');
		}

		const postData = await Posts.getPostFields(pid, ['pid', 'uid', 'tid', 'cid']);
		if (!postData.pid) {
			throw new Error('[[error:invalid-pid]]');
		}

		// Check if already endorsed
		const isEndorsed = await Posts.isEndorsed(pid);
		if (isEndorsed) {
			throw new Error('[[error:already-endorsed]]');
		}

		// Check if there's already an endorsed post in this topic
		const topicEndorsed = await Posts.getTopicEndorsedPost(postData.tid);
		if (topicEndorsed && topicEndorsed !== pid) {
			throw new Error('[[error:topic-already-has-endorsed-post]]');
		}

		const now = Date.now();
		await Promise.all([
			db.setAdd(`pid:${pid}:endorsed`, uid),
			db.setObject(`post:${pid}:endorsement`, {
				endorsed: true,
				endorsedBy: uid,
				endorsedAt: now,
			}),
			db.sortedSetAdd(`topic:${postData.tid}:endorsed`, now, pid),
		]);

		// Fire hook for notifications
		plugins.hooks.fire('action:post.endorse', {
			pid: postData.pid,
			uid: uid,
			owner: postData.uid,
			tid: postData.tid,
		});

		return {
			pid: postData.pid,
			endorsed: true,
			endorsedBy: uid,
		};
	};

	Posts.unendorse = async function (pid, uid) {
		const canEndorse = await privileges.posts.can('posts:endorse', pid, uid);
		if (!canEndorse) {
			throw new Error('[[error:no-privileges]]');
		}

		const postData = await Posts.getPostFields(pid, ['pid', 'uid', 'tid']);
		if (!postData.pid) {
			throw new Error('[[error:invalid-pid]]');
		}

		await Promise.all([
			db.setRemove(`pid:${pid}:endorsed`, uid),
			db.delete(`post:${pid}:endorsement`),
			db.sortedSetRemove(`topic:${postData.tid}:endorsed`, pid),
		]);

		// Fire hook for notifications
		plugins.hooks.fire('action:post.unendorse', {
			pid: postData.pid,
			uid: uid,
			owner: postData.uid,
			tid: postData.tid,
		});

		return {
			pid: postData.pid,
			endorsed: false,
		};
	};

	Posts.isEndorsed = async function (pid) {
		const endorsement = await db.getObject(`post:${pid}:endorsement`);
		return endorsement && endorsement.endorsed;
	};

	Posts.getEndorsement = async function (pid) {
		return await db.getObject(`post:${pid}:endorsement`);
	};

	Posts.getTopicEndorsedPost = async function (tid) {
		const endorsed = await db.sortedSetRange(`topic:${tid}:endorsed`, 0, 0);
		return endorsed.length > 0 ? endorsed[0] : null;
	};

	Posts.getEndorsedPosts = async function (tids) {
		const endorsedPosts = {};
		await Promise.all(tids.map(async (tid) => {
			const endorsed = await Posts.getTopicEndorsedPost(tid);
			if (endorsed) {
				endorsedPosts[tid] = endorsed;
			}
		}));
		return endorsedPosts;
	};

	// Add endorsement data to post objects
	Posts.addEndorsementData = async function (posts, uid) {
		if (!Array.isArray(posts) || !posts.length) {
			return posts;
		}

		const pids = posts.map(p => p.pid);
		const [endorsements, topicEndorsed] = await Promise.all([
			db.getObjects(pids.map(pid => `post:${pid}:endorsement`)),
			Posts.getEndorsedPosts([...new Set(posts.map(p => p.tid))]),
		]);

		posts.forEach((post, index) => {
			post.endorsed = endorsements[index] && endorsements[index].endorsed;
			post.endorsement = endorsements[index];
			post.isTopicEndorsed = topicEndorsed[post.tid] === post.pid;
		});

		return posts;
	};
};



