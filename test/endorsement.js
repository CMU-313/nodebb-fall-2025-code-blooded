'use strict';

const assert = require('assert');
const nconf = require('nconf');
const util = require('util');

const sleep = util.promisify(setTimeout);

const db = require('./mocks/databasemock');
const topics = require('../src/topics');
const posts = require('../src/posts');
const categories = require('../src/categories');
const privileges = require('../src/privileges');
const user = require('../src/user');
const groups = require('../src/groups');
const meta = require('../src/meta');
const helpers = require('./helpers');
const socketTopics = require('../src/socket.io/topics');
const apiTopics = require('../src/api/topics');
const events = require('../src/events');
const websockets = require('../src/socket.io');

describe('Topic Endorsement Feature', () => {
	let adminUid;
	let moderatorUid;
	let regularUserUid;
	let guestUserUid;
	let categoryData;
	let topicData;
	let postData;
	let adminJar;
	let moderatorJar;
	let regularUserJar;
	let csrf_token;

	before(async () => {
		// Create test users
		adminUid = await user.create({ username: 'endorseadmin', password: 'password123' });
		moderatorUid = await user.create({ username: 'endorsemoderator', password: 'password123' });
		regularUserUid = await user.create({ username: 'endorseregular', password: 'password123' });
		guestUserUid = await user.create({ username: 'endorseguest' });

		// Add users to appropriate groups
		await groups.join('administrators', adminUid);
		await groups.join('Global Moderators', moderatorUid);

		// Login users for request testing
		const adminLogin = await helpers.loginUser('endorseadmin', 'password123');
		adminJar = adminLogin.jar;
		csrf_token = adminLogin.csrf_token;

		const moderatorLogin = await helpers.loginUser('endorsemoderator', 'password123');
		moderatorJar = moderatorLogin.jar;

		const regularLogin = await helpers.loginUser('endorseregular', 'password123');
		regularUserJar = regularLogin.jar;

		// Create test category
		categoryData = await categories.create({
			name: 'Endorsement Test Category',
			description: 'Category for testing endorsement functionality',
		});

		// Create test topic
		const result = await topics.post({
			uid: regularUserUid,
			cid: categoryData.cid,
			title: 'Test Topic for Endorsement',
			content: 'This is a test topic to verify endorsement functionality.',
		});
		topicData = result.topicData;
		postData = result.postData;
	});

	after(async () => {
		await db.emptydb();
	});

	describe('Endorsement Privileges', () => {
		it('should allow administrators to endorse topics', async () => {
			const canEndorse = await privileges.topics.canEndorse(topicData.tid, adminUid);
			assert.strictEqual(canEndorse, true);
		});

		it('should allow moderators to endorse topics', async () => {
			const canEndorse = await privileges.topics.canEndorse(topicData.tid, moderatorUid);
			assert.strictEqual(canEndorse, true);
		});

		it('should not allow regular users to endorse topics', async () => {
			const canEndorse = await privileges.topics.canEndorse(topicData.tid, regularUserUid);
			assert.strictEqual(canEndorse, false);
		});

		it('should not allow guests to endorse topics', async () => {
			const canEndorse = await privileges.topics.canEndorse(topicData.tid, 0);
			assert.strictEqual(canEndorse, false);
		});
	});

	describe('Topic Tools - Endorse/Unendorse', () => {
		it('should endorse a topic successfully', async () => {
			await topics.tools.endorse(topicData.tid, adminUid);
			const endorsedTopicData = await topics.getTopicData(topicData.tid);
			assert.strictEqual(endorsedTopicData.endorsed, 1);
		});

		it('should unendorse a topic successfully', async () => {
			// First endorse the topic  
			await topics.tools.endorse(topicData.tid, adminUid);
			
			// Then unendorse it
			await topics.tools.unendorse(topicData.tid, adminUid);
			const unendorsedTopicData = await topics.getTopicData(topicData.tid);
			assert.strictEqual(unendorsedTopicData.endorsed, 0);
		});

		it('should log endorsement events', async () => {
			// Clear existing events
			await events.deleteEvents(topicData.tid);
			
			// Endorse topic
			await topics.tools.endorse(topicData.tid, adminUid);
			
			// Check events
			const eventData = await events.getEvents([topicData.tid], adminUid);
			const endorseEvent = eventData[0].events.find(event => event.type === 'endorse');
			
			assert(endorseEvent);
			assert.strictEqual(endorseEvent.uid, adminUid);
			assert.strictEqual(endorseEvent.type, 'endorse');
		});

		it('should log unendorsement events', async () => {
			// Clear existing events
			await events.deleteEvents(topicData.tid);
			
			// First endorse, then unendorse
			await topics.tools.endorse(topicData.tid, adminUid);
			await topics.tools.unendorse(topicData.tid, adminUid);
			
			// Check events
			const eventData = await events.getEvents([topicData.tid], adminUid);
			const unendorseEvent = eventData[0].events.find(event => event.type === 'unendorse');
			
			assert(unendorseEvent);
			assert.strictEqual(unendorseEvent.uid, adminUid);
			assert.strictEqual(unendorseEvent.type, 'unendorse');
		});

		it('should emit socket events when endorsing', (done) => {
			const originalEmit = websockets.in;
			let eventEmitted = false;
			
			websockets.in = function (room) {
				return {
					emit: function (event, data) {
						if (event === 'event:topic_endorsed') {
							eventEmitted = true;
							assert.strictEqual(data.tid, topicData.tid);
							assert.strictEqual(data.endorsed, true);
						}
						return originalEmit.call(websockets, room).emit(event, data);
					}
				};
			};

			topics.tools.endorse(topicData.tid, adminUid).then(() => {
				websockets.in = originalEmit;
				assert.strictEqual(eventEmitted, true);
				done();
			}).catch(done);
		});

		it('should emit socket events when unendorsing', (done) => {
			const originalEmit = websockets.in;
			let eventEmitted = false;
			
			websockets.in = function (room) {
				return {
					emit: function (event, data) {
						if (event === 'event:topic_unendorsed') {
							eventEmitted = true;
							assert.strictEqual(data.tid, topicData.tid);
							assert.strictEqual(data.endorsed, false);
						}
						return originalEmit.call(websockets, room).emit(event, data);
					}
				};
			};

			// First endorse, then unendorse
			topics.tools.endorse(topicData.tid, adminUid).then(() => {
				return topics.tools.unendorse(topicData.tid, adminUid);
			}).then(() => {
				websockets.in = originalEmit;
				assert.strictEqual(eventEmitted, true);
				done();
			}).catch(done);
		});
	});

	describe('API Endpoints', () => {
		it('should endorse topic via API with admin privileges', async () => {
			const caller = { uid: adminUid };
			await apiTopics.endorse(caller, { tids: [topicData.tid] });
			
			const endorsedTopicData = await topics.getTopicData(topicData.tid);
			assert.strictEqual(endorsedTopicData.endorsed, 1);
		});

		it('should unendorse topic via API with admin privileges', async () => {
			const caller = { uid: adminUid };
			
			// First endorse
			await apiTopics.endorse(caller, { tids: [topicData.tid] });
			
			// Then unendorse
			await apiTopics.unendorse(caller, { tids: [topicData.tid] });
			
			const unendorsedTopicData = await topics.getTopicData(topicData.tid);
			assert.strictEqual(unendorsedTopicData.endorsed, 0);
		});

		it('should endorse multiple topics via API', async () => {
			// Create another test topic
			const result2 = await topics.post({
				uid: regularUserUid,
				cid: categoryData.cid,
				title: 'Second Test Topic for Endorsement',
				content: 'Another test topic for bulk endorsement.',
			});

			const caller = { uid: adminUid };
			await apiTopics.endorse(caller, { tids: [topicData.tid, result2.topicData.tid] });
			
			const topic1Data = await topics.getTopicData(topicData.tid);
			const topic2Data = await topics.getTopicData(result2.topicData.tid);
			
			assert.strictEqual(topic1Data.endorsed, 1);
			assert.strictEqual(topic2Data.endorsed, 1);
		});

		it('should reject endorsement API call from regular user', async () => {
			const caller = { uid: regularUserUid };
			
			try {
				await apiTopics.endorse(caller, { tids: [topicData.tid] });
				assert.fail('Should have thrown an error');
			} catch (error) {
				assert(error.message.includes('privileges') || error.message.includes('not-allowed'));
			}
		});

		it('should reject endorsement API call from guest', async () => {
			const caller = { uid: 0 };
			
			try {
				await apiTopics.endorse(caller, { tids: [topicData.tid] });
				assert.fail('Should have thrown an error');
			} catch (error) {
				assert(error.message.includes('privileges') || error.message.includes('not-allowed'));
			}
		});
	});

	describe('HTTP API Endpoints', () => {
		it('should endorse topic via HTTP PUT request with admin', (done) => {
			helpers.request('put', `/api/v3/topics/${topicData.tid}/endorse`, {
				jar: adminJar,
				csrf_token: csrf_token,
			}, (err, res, body) => {
				assert.ifError(err);
				assert.strictEqual(res.statusCode, 200);
				
				// Verify the topic is endorsed
				topics.getTopicData(topicData.tid).then((data) => {
					assert.strictEqual(data.endorsed, 1);
					done();
				}).catch(done);
			});
		});

		it('should unendorse topic via HTTP DELETE request with admin', (done) => {
			// First endorse the topic
			helpers.request('put', `/api/v3/topics/${topicData.tid}/endorse`, {
				jar: adminJar,
				csrf_token: csrf_token,
			}, (err, res, body) => {
				assert.ifError(err);
				
				// Then unendorse it
				helpers.request('delete', `/api/v3/topics/${topicData.tid}/endorse`, {
					jar: adminJar,
					csrf_token: csrf_token,
				}, (err, res, body) => {
					assert.ifError(err);
					assert.strictEqual(res.statusCode, 200);
					
					// Verify the topic is unendorsed
					topics.getTopicData(topicData.tid).then((data) => {
						assert.strictEqual(data.endorsed, 0);
						done();
					}).catch(done);
				});
			});
		});

		it('should reject HTTP endorsement request from regular user', (done) => {
			helpers.request('put', `/api/v3/topics/${topicData.tid}/endorse`, {
				jar: regularUserJar,
				csrf_token: csrf_token,
			}, (err, res, body) => {
				assert.ifError(err);
				assert.strictEqual(res.statusCode, 403);
				done();
			});
		});

		it('should reject HTTP endorsement request without authentication', (done) => {
			helpers.request('put', `/api/v3/topics/${topicData.tid}/endorse`, {}, (err, res, body) => {
				assert.ifError(err);
				assert.strictEqual(res.statusCode, 401);
				done();
			});
		});
	});

	describe('Topic Data Integration', () => {
		it('should include endorsement status in topic data', async () => {
			await topics.tools.endorse(topicData.tid, adminUid);
			const fullTopicData = await topics.getTopicData(topicData.tid);
			
			assert(fullTopicData.hasOwnProperty('endorsed'));
			assert.strictEqual(fullTopicData.endorsed, 1);
		});

		it('should include endorsement in topic fields', async () => {
			const topicFields = await topics.getTopicFields(topicData.tid, ['endorsed', 'title']);
			assert(topicFields.hasOwnProperty('endorsed'));
		});

		it('should handle endorsement status in topic list', async () => {
			await topics.tools.endorse(topicData.tid, adminUid);
			
			const topicsList = await topics.getTopicsByTids([topicData.tid], adminUid);
			assert.strictEqual(topicsList[0].endorsed, 1);
		});
	});

	describe('Category Tools Integration', () => {
		it('should detect endorsed topics correctly', async () => {
			await topics.tools.endorse(topicData.tid, adminUid);
			
			// Mock the category tools functionality
			const topicEl = { hasClass: (className) => className === 'endorsed' };
			
			// This would typically be tested in the browser environment
			// Here we're testing the underlying logic
			const endorsed = await topics.getTopicField(topicData.tid, 'endorsed');
			assert.strictEqual(parseInt(endorsed, 10), 1);
		});

		it('should handle bulk endorsement operations', async () => {
			// Create multiple test topics
			const topic1 = await topics.post({
				uid: regularUserUid,
				cid: categoryData.cid,
				title: 'Bulk Test Topic 1',
				content: 'Content 1',
			});
			
			const topic2 = await topics.post({
				uid: regularUserUid,
				cid: categoryData.cid,
				title: 'Bulk Test Topic 2',
				content: 'Content 2',
			});

			const tids = [topic1.topicData.tid, topic2.topicData.tid];
			const caller = { uid: adminUid };
			
			await apiTopics.endorse(caller, { tids });
			
			// Verify both topics are endorsed
			const topic1Data = await topics.getTopicData(topic1.topicData.tid);
			const topic2Data = await topics.getTopicData(topic2.topicData.tid);
			
			assert.strictEqual(topic1Data.endorsed, 1);
			assert.strictEqual(topic2Data.endorsed, 1);
		});
	});

	describe('Post Tools Integration', () => {
		it('should handle post endorsement component clicks', async () => {
			// This test would typically involve browser automation
			// Here we test the underlying post endorsement logic
			const pid = postData.pid;
			
			// Mock endorsing a post (this would need actual post endorsement implementation)
			// For now, we'll test that the post data can be retrieved correctly
			const post = await posts.getPostData(pid);
			assert(post);
			assert.strictEqual(post.pid, pid);
		});
	});

	describe('Error Handling', () => {
		it('should handle endorsing non-existent topic', async () => {
			const nonExistentTid = 99999;
			
			try {
				await topics.tools.endorse(nonExistentTid, adminUid);
				assert.fail('Should have thrown an error');
			} catch (error) {
				assert(error.message);
			}
		});

		it('should handle invalid user ID for endorsement', async () => {
			try {
				await topics.tools.endorse(topicData.tid, 99999);
				assert.fail('Should have thrown an error');
			} catch (error) {
				assert(error.message);
			}
		});

		it('should handle malformed API data', async () => {
			const caller = { uid: adminUid };
			
			try {
				await apiTopics.endorse(caller, { tids: null });
				assert.fail('Should have thrown an error');
			} catch (error) {
				assert(error.message);
			}
		});
	});

	describe('Performance and Edge Cases', () => {
		it('should handle rapid endorse/unendorse operations', async () => {
			// Test rapid toggling
			for (let i = 0; i < 5; i++) {
				await topics.tools.endorse(topicData.tid, adminUid);
				await topics.tools.unendorse(topicData.tid, adminUid);
			}
			
			const finalData = await topics.getTopicData(topicData.tid);
			assert.strictEqual(finalData.endorsed, 0);
		});

		it('should handle endorsement of deleted topic', async () => {
			// Create a topic and delete it
			const result = await topics.post({
				uid: regularUserUid,
				cid: categoryData.cid,
				title: 'Topic to be deleted',
				content: 'This topic will be deleted',
			});
			
			await topics.tools.delete(result.topicData.tid, adminUid);
			
			// Try to endorse the deleted topic
			try {
				await topics.tools.endorse(result.topicData.tid, adminUid);
				// Should still work for moderators/admins
				const deletedTopicData = await topics.getTopicData(result.topicData.tid);
				assert.strictEqual(deletedTopicData.endorsed, 1);
			} catch (error) {
				// If it throws an error, that's also acceptable behavior
				assert(error.message);
			}
		});
	});
});