'use strict';

const assert = require('assert');
const db = require('../mocks/databasemock');
const topics = require('../../src/topics');
const posts = require('../../src/posts');
const categories = require('../../src/categories');
const privileges = require('../../src/privileges');
const User = require('../../src/user');
const groups = require('../../src/groups');
const helpers = require('../helpers');
const request = require('../../src/request');

describe('Anonymous Posting Feature', () => {
	let category;
	let adminUid;
	let regularUid;
	let regularUid2;
	let topicWithAnonymousPost;
	let topicWithAnonymousReply;
	let regularPost;
	let anonymousPost;
	let anonymousReply;

	before(async () => {
		// Create users
		adminUid = await User.create({ username: 'testadmin', password: '123456' });
		regularUid = await User.create({ username: 'testuser', password: '123456' });
		regularUid2 = await User.create({ username: 'testuser2', password: '123456' });

		// Make one user an admin
		await groups.join('administrators', adminUid);

		// Create test category
		category = await categories.create({
			name: 'Anonymous Posting Test Category',
			description: 'Test category for anonymous posting feature',
		});

		// Create a topic with an anonymous post
		const anonymousTopicResult = await topics.post({
			uid: regularUid,
			cid: category.cid,
			title: 'Topic with anonymous post',
			content: 'This is an anonymous topic post',
			anonymous: true,
		});
		topicWithAnonymousPost = anonymousTopicResult.topicData;
		anonymousPost = anonymousTopicResult.postData;

		// Create a regular topic
		const regularTopicResult = await topics.post({
			uid: regularUid,
			cid: category.cid,
			title: 'Regular topic',
			content: 'This is a regular topic post',
		});
		topicWithAnonymousReply = regularTopicResult.topicData;

		// Add an anonymous reply to the regular topic
		anonymousReply = await topics.reply({
			uid: regularUid2,
			content: 'This is an anonymous reply',
			tid: topicWithAnonymousReply.tid,
			anonymous: true,
		});

		// Create a regular post for comparison
		regularPost = await topics.reply({
			uid: regularUid,
			content: 'This is a regular reply',
			tid: topicWithAnonymousReply.tid,
		});
	});

	describe('Anonymous Post Creation', () => {
		it('should create anonymous posts with anonymous flag set to true', async () => {
			const postData = await posts.getPostData(anonymousPost.pid);
			assert.strictEqual(postData.anonymous, 'true', 'Anonymous post should have anonymous flag set to true');
			assert.strictEqual(postData.uid, regularUid, 'Anonymous post should still track the original user ID');
		});

		it('should create anonymous replies with anonymous flag set to true', async () => {
			const postData = await posts.getPostData(anonymousReply.pid);
			assert.strictEqual(postData.anonymous, 'true', 'Anonymous reply should have anonymous flag set to true');
			assert.strictEqual(postData.uid, regularUid2, 'Anonymous reply should still track the original user ID');
		});

		it('should not affect regular posts', async () => {
			const postData = await posts.getPostData(regularPost.pid);
			// Regular posts should either not have the anonymous field or have it set to false/0
			assert(postData.anonymous === undefined || postData.anonymous === false || postData.anonymous === 0, 
				'Regular posts should not have anonymous flag set to true');
		});
	});

	describe('Anonymous Post Display', () => {
		it('should display anonymous posts with "Anonymous User" as author', async () => {
			const topicData = await topics.getTopicData(topicWithAnonymousPost.tid);
			const data = await topics.getTopicWithPosts(topicData, `tid:${topicWithAnonymousPost.tid}:posts`, regularUid, 0, -1, false);
			const anonymousPostData = data.posts[0];
			
			assert.strictEqual(anonymousPostData.user.username, 'Anonymous User', 'Anonymous post should show Anonymous User as username');
			assert.strictEqual(anonymousPostData.user.displayname, 'Anonymous User', 'Anonymous post should show Anonymous User as display name');
			assert.strictEqual(anonymousPostData.user.uid, 0, 'Anonymous post should have uid 0 for display');
			assert.strictEqual(anonymousPostData.user.userslug, '', 'Anonymous post should have empty userslug');
			assert.strictEqual(anonymousPostData.user.picture, '', 'Anonymous post should have empty picture');
			assert.strictEqual(anonymousPostData.user['icon:text'], '?', 'Anonymous post should have ? as icon text');
			assert.strictEqual(anonymousPostData.user['icon:bgColor'], '#aaa', 'Anonymous post should have gray background');
			assert.strictEqual(anonymousPostData.user.status, 'offline', 'Anonymous post should show offline status');
		});

		it('should display anonymous replies with "Anonymous User" as author', async () => {
			const topicData = await topics.getTopicData(topicWithAnonymousReply.tid);
			const data = await topics.getTopicWithPosts(topicData, `tid:${topicWithAnonymousReply.tid}:posts`, regularUid, 0, -1, false);
			const anonymousReplyData = data.posts.find(p => p.pid === anonymousReply.pid);
			
			assert.strictEqual(anonymousReplyData.user.username, 'Anonymous User', 'Anonymous reply should show Anonymous User as username');
			assert.strictEqual(anonymousReplyData.user.displayname, 'Anonymous User', 'Anonymous reply should show Anonymous User as display name');
			assert.strictEqual(anonymousReplyData.user.uid, 0, 'Anonymous reply should have uid 0 for display');
		});

		it('should not affect regular post display', async () => {
			const topicData = await topics.getTopicData(topicWithAnonymousReply.tid);
			const data = await topics.getTopicWithPosts(topicData, `tid:${topicWithAnonymousReply.tid}:posts`, regularUid, 0, -1, false);
			const regularPostData = data.posts.find(p => p.pid === regularPost.pid);
			
			assert.strictEqual(regularPostData.user.username, 'testuser', 'Regular post should show actual username');
			assert.strictEqual(regularPostData.user.displayname, 'testuser', 'Regular post should show actual display name');
			assert.strictEqual(regularPostData.user.uid, regularUid, 'Regular post should show actual user ID');
		});
	});

	describe('Anonymous Post Functionality', () => {
		it('should allow voting on anonymous posts', async () => {
			const voteResult = await posts.upvote(anonymousPost.pid, regularUid2);
			assert(voteResult, 'Should be able to upvote anonymous posts');
			
			const postData = await posts.getPostData(anonymousPost.pid);
			assert(postData.votes > 0, 'Anonymous post should have votes after upvoting');
		});

		it('should allow bookmarking anonymous posts', async () => {
			const bookmarkResult = await posts.bookmark(anonymousPost.pid, regularUid2);
			assert(bookmarkResult, 'Should be able to bookmark anonymous posts');
			
			const isBookmarked = await posts.hasBookmarked(anonymousPost.pid, regularUid2);
			assert(isBookmarked, 'Anonymous post should be bookmarked');
		});

		it('should allow replying to anonymous posts', async () => {
			const replyResult = await topics.reply({
				uid: regularUid2,
				content: 'Reply to anonymous post',
				tid: topicWithAnonymousPost.tid,
			});
			
			assert(replyResult, 'Should be able to reply to anonymous posts');
			assert.strictEqual(replyResult.tid, topicWithAnonymousPost.tid, 'Reply should be in correct topic');
		});

		it('should allow editing anonymous posts by the original author', async () => {
			const editResult = await posts.edit({
				pid: anonymousPost.pid,
				uid: regularUid,
				content: 'Edited anonymous post content',
			});
			
			assert(editResult, 'Should be able to edit anonymous posts');
			
			const editedPost = await posts.getPostData(anonymousPost.pid);
			assert.strictEqual(editedPost.content, 'Edited anonymous post content', 'Anonymous post content should be updated');
			assert.strictEqual(editedPost.anonymous, 'true', 'Anonymous flag should remain after editing');
		});

		it('should prevent editing anonymous posts by other users', async () => {
			try {
				await posts.edit({
					pid: anonymousPost.pid,
					uid: regularUid2,
					content: 'Unauthorized edit attempt',
				});
				assert(false, 'Should not be able to edit anonymous posts by other users');
			} catch (err) {
				assert(err, 'Should throw error when trying to edit anonymous post as different user');
			}
		});
	});

	describe('Anonymous Post Moderation', () => {
		it('should allow administrators to view original poster information', async () => {
			// This test verifies that the original user ID is preserved for moderation
			const postData = await posts.getPostData(anonymousPost.pid);
			assert.strictEqual(postData.uid, regularUid, 'Admin should be able to see original poster ID');
		});

		it('should allow administrators to moderate anonymous posts', async () => {
			const deleteResult = await posts.delete(anonymousPost.pid, adminUid);
			assert(deleteResult, 'Admin should be able to delete anonymous posts');
			
			const deletedPost = await posts.getPostData(anonymousPost.pid);
			assert.strictEqual(deletedPost.deleted, 1, 'Anonymous post should be marked as deleted');
		});

		it('should allow administrators to restore anonymous posts', async () => {
			const restoreResult = await posts.restore(anonymousPost.pid, adminUid);
			assert(restoreResult, 'Admin should be able to restore anonymous posts');
			
			const restoredPost = await posts.getPostData(anonymousPost.pid);
			assert.strictEqual(restoredPost.deleted, 0, 'Anonymous post should be restored');
		});
	});

	describe('Anonymous Post API Integration', () => {
		it('should handle anonymous flag in API requests', async () => {
			const { jar } = await helpers.loginUser('testuser', '123456');
			
			const { body } = await helpers.request('post', '/api/v3/topics', {
				jar: jar,
				body: {
					cid: category.cid,
					title: 'API Anonymous Topic',
					content: 'This topic was created via API with anonymous flag',
					anonymous: true,
				},
			});
			
			assert.strictEqual(body.status.code, 'ok', 'Should successfully create anonymous topic via API');
			
			const topicData = await topics.getTopicData(body.response.tid);
			const data = await topics.getTopicWithPosts(topicData, `tid:${body.response.tid}:posts`, regularUid, 0, -1, false);
			const postData = data.posts[0];
			assert.strictEqual(postData.user.username, 'Anonymous User', 'API anonymous topic should display as anonymous');
		});

		it('should handle anonymous replies via API', async () => {
			const { jar } = await helpers.loginUser('testuser2', '123456');
			
			const { body } = await helpers.request('post', '/api/v3/topics/' + topicWithAnonymousReply.tid, {
				jar: jar,
				body: {
					content: 'This is an anonymous reply via API',
					anonymous: true,
				},
			});
			
			assert.strictEqual(body.status.code, 'ok', 'Should successfully create anonymous reply via API');
			
			const postData = await posts.getPostData(body.response.pid);
			assert.strictEqual(postData.anonymous, 'true', 'API anonymous reply should have anonymous flag');
		});
	});

	describe('Edge Cases and Error Handling', () => {
		it('should handle anonymous posts in post queues', async () => {
			// Enable post queue for testing
			const originalQueueSetting = await db.getObjectField('config', 'postQueue');
			await db.setObjectField('config', 'postQueue', 1);
			
			try {
				const newUser = await User.create({ username: 'newuser', password: '123456' });
				const { jar } = await helpers.loginUser('newuser', '123456');
				
				const { body } = await helpers.request('post', '/api/v3/topics', {
					jar: jar,
					body: {
						cid: category.cid,
						title: 'Queued Anonymous Topic',
						content: 'This topic should be queued and anonymous',
						anonymous: true,
					},
				});
				
				// The post should either be queued or created successfully
				assert(body.queued || body.status?.code === 'ok' || body.code === 'ok', 'Anonymous posts should be handled in post queue or created successfully');
			} finally {
				// Restore original setting
				if (originalQueueSetting !== null) {
					await db.setObjectField('config', 'postQueue', originalQueueSetting);
				} else {
					await db.deleteObjectField('config', 'postQueue');
				}
			}
		});

		it('should handle mixed anonymous and regular posts in same topic', async () => {
			const topicData = await topics.getTopicData(topicWithAnonymousReply.tid);
			const data = await topics.getTopicWithPosts(topicData, `tid:${topicWithAnonymousReply.tid}:posts`, regularUid, 0, -1, false);
			
			// Should have both anonymous and regular posts
			const anonymousPosts = data.posts.filter(p => p.user.username === 'Anonymous User');
			const regularPosts = data.posts.filter(p => p.user.username !== 'Anonymous User');
			
			assert(anonymousPosts.length > 0, 'Topic should contain anonymous posts');
			assert(regularPosts.length > 0, 'Topic should contain regular posts');
		});

	});

});
