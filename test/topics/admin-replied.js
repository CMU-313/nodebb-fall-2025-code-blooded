'use strict';

const assert = require('assert');
const db = require('../mocks/databasemock');
const topics = require('../../src/topics');
const posts = require('../../src/posts');
const categories = require('../../src/categories');
const privileges = require('../../src/privileges');
const User = require('../../src/user');
const groups = require('../../src/groups');

describe('Topics Admin Replied Sorting', () => {
	let category;
	let adminUid;
	let regularUid;
	let topic1;
	let topic2;
	let topic3;

	before(async () => {
		// Create users
		adminUid = await User.create({ username: 'testadmin', password: '123456' });
		regularUid = await User.create({ username: 'testuser', password: '123456' });

		// Make one user an admin
		await groups.join('administrators', adminUid);

		// Create test category
		category = await categories.create({
			name: 'Admin Reply Test Category',
			description: 'Test category for admin reply sorting',
		});

		// Create test topics
		const topic1Result = await topics.post({
			uid: regularUid,
			cid: category.cid,
			title: 'Topic with admin reply',
			content: 'This topic will have an admin reply',
		});
		topic1 = topic1Result.topicData;

		const topic2Result = await topics.post({
			uid: regularUid,
			cid: category.cid,
			title: 'Topic with no admin reply',
			content: 'This topic will have only regular user replies',
		});
		topic2 = topic2Result.topicData;

		const topic3Result = await topics.post({
			uid: regularUid,
			cid: category.cid,
			title: 'Topic with later admin reply',
			content: 'This topic will have a more recent admin reply',
		});
		topic3 = topic3Result.topicData;

		// Add replies to topics
		// Topic 1: regular reply, then admin reply
		await topics.reply({ uid: regularUid, content: 'Regular user reply', tid: topic1.tid });
		await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to ensure different timestamps
		await topics.reply({ uid: adminUid, content: 'Admin reply to topic 1', tid: topic1.tid });

		// Topic 2: only regular user replies
		await topics.reply({ uid: regularUid, content: 'Regular reply 1', tid: topic2.tid });
		await topics.reply({ uid: regularUid, content: 'Regular reply 2', tid: topic2.tid });

		// Topic 3: admin reply (more recent than topic 1)
		await new Promise(resolve => setTimeout(resolve, 200)); // Ensure this is later
		await topics.reply({ uid: adminUid, content: 'More recent admin reply', tid: topic3.tid });
	});

	describe('admin_replied sorting', () => {
		it('should sort topics with admin replies before those without', async () => {
			const data = await topics.getSortedTopics({
				cids: [category.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin_replied',
			});

			const topicTitles = data.topics.map(t => t.title);
			const adminRepliedTopics = topicTitles.filter(title =>
				title === 'Topic with admin reply' || title === 'Topic with later admin reply'
			);
			const noAdminReplyIndex = topicTitles.indexOf('Topic with no admin reply');
			const firstAdminReplyIndex = Math.min(
				...adminRepliedTopics.map(title => topicTitles.indexOf(title))
			);

			assert(firstAdminReplyIndex < noAdminReplyIndex,
				'Topics with admin replies should be sorted before those without');
		});

		it('should sort admin-replied topics by most recent admin reply timestamp', async () => {
			const data = await topics.getSortedTopics({
				cids: [category.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin_replied',
			});

			const topicTitles = data.topics.map(t => t.title);
			const laterReplyIndex = topicTitles.indexOf('Topic with later admin reply');
			const earlierReplyIndex = topicTitles.indexOf('Topic with admin reply');

			assert(laterReplyIndex < earlierReplyIndex,
				'Topic with more recent admin reply should come first');
		});

		it('should work with admin-replied alias', async () => {
			const dataHyphen = await topics.getSortedTopics({
				cids: [category.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin-replied',
			});

			const dataUnderscore = await topics.getSortedTopics({
				cids: [category.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin_replied',
			});

			const titlesHyphen = dataHyphen.topics.map(t => t.title);
			const titlesUnderscore = dataUnderscore.topics.map(t => t.title);
			assert.deepStrictEqual(titlesHyphen, titlesUnderscore,
				'admin-replied and admin_replied should produce identical results');
		});

		it('should handle empty categories gracefully', async () => {
			const emptyCategory = await categories.create({
				name: 'Empty Category',
				description: 'Empty test category',
			});

			const data = await topics.getSortedTopics({
				cids: [emptyCategory.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin_replied',
			});

			assert.strictEqual(data.topics.length, 0);
			assert.strictEqual(data.topicCount, 0);
		});

		it('should handle multiple admin replies correctly', async () => {
			const multiAdminResult = await topics.post({
				uid: regularUid,
				cid: category.cid,
				title: 'Multiple admin replies topic',
				content: 'This topic will have multiple admin replies',
			});

			await topics.reply({ uid: adminUid, content: 'First admin reply', tid: multiAdminResult.topicData.tid });
			await new Promise(resolve => setTimeout(resolve, 100));
			await topics.reply({ uid: adminUid, content: 'Latest admin reply', tid: multiAdminResult.topicData.tid });

			const data = await topics.getSortedTopics({
				cids: [category.cid],
				uid: regularUid,
				start: 0,
				stop: -1,
				sort: 'admin_replied',
			});

			const multiAdminTopic = data.topics.find(t => t.title === 'Multiple admin replies topic');
			assert(multiAdminTopic, 'Should find topic with multiple admin replies');

			// Should be first due to most recent admin reply
			assert.strictEqual(data.topics[0].title, 'Multiple admin replies topic',
				'Topic with most recent admin reply should be first');
		});
	});
});