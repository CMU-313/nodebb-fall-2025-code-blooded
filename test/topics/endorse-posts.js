'use strict';

const assert = require('assert');

const categories = require('../../src/categories');
const topics = require('../../src/topics');
const user = require('../../src/user');
const groups = require('../../src/groups');
const privileges = require('../../src/privileges');
const db = require('../mocks/databasemock');
const api = require('../../src/api');

describe('Topic Endorsements', () => {
	let adminUid;
	let moderatorUid;
	let fooUid;
	let barUid;
	let topic;
	let topic2;
	let categoryObj;

	before(async () => {
		fooUid = await user.create({ username: 'endorseFoo' });
		barUid = await user.create({ username: 'endorseBar' });
		adminUid = await user.create({ username: 'endorseAdmin', password: '123456' });
		moderatorUid = await user.create({ username: 'endorseModerator', password: '123456' });
		await groups.join('administrators', adminUid);

		categoryObj = await categories.create({
			name: 'Endorse Test Category',
			description: 'Category for endorse tests',
		});

		await groups.create({
			name: 'Test Moderators',
			description: 'Moderators for testing',
		});
		await groups.join('Test Moderators', moderatorUid);
		await privileges.categories.give(['groups:moderate'], categoryObj.cid, 'Test Moderators');

		topic = await topics.post({
			title: 'Endorseable Topic',
			content: 'Content for endorsement tests',
			uid: fooUid,
			cid: categoryObj.cid,
		});

		topic2 = await topics.post({
			title: 'Second Topic for Testing',
			content: 'Another topic for endorsement tests',
			uid: barUid,
			cid: categoryObj.cid,
		});
	});

	describe('Basic Endorsement Functionality', () => {
		it('should endorse topic and log endorse event', async () => {
			const result = await topics.tools.endorse(topic.topicData.tid, adminUid);
			assert(result);
			assert.strictEqual(result.endorsed, true);

			const events = await topics.events.get(topic.topicData.tid);
			const hasEndorse = events.some(e => e.type === 'endorse');
			assert.strictEqual(hasEndorse, true, 'endorse event should be logged');
		});

		it('should unendorse topic and log unendorse event', async () => {
			const result = await topics.tools.unendorse(topic.topicData.tid, adminUid);
			assert(result);
			assert.strictEqual(result.endorsed, false);

			const events = await topics.events.get(topic.topicData.tid);
			const hasUnendorse = events.some(e => e.type === 'unendorse');
			assert.strictEqual(hasUnendorse, true, 'unendorse event should be logged');
		});

		it('should retrieve endorsed field from topic data', async () => {
			await topics.tools.endorse(topic.topicData.tid, adminUid);
			const topicData = await topics.getTopicData(topic.topicData.tid);
			assert.strictEqual(topicData.endorsed, 1);
		});

		it('should retrieve unendorsed field from topic data', async () => {
			await topics.tools.unendorse(topic.topicData.tid, adminUid);
			const topicData = await topics.getTopicData(topic.topicData.tid);
			assert.strictEqual(topicData.endorsed, 0);
		});
	});

	describe('Permission Checks', () => {
		it('should allow admin to endorse topic', async () => {
			const result = await topics.tools.endorse(topic2.topicData.tid, adminUid);
			assert(result);
			assert.strictEqual(result.endorsed, true);
		});

		it('should allow moderator to endorse topic', async () => {
			await topics.tools.unendorse(topic2.topicData.tid, adminUid);
			const result = await topics.tools.endorse(topic2.topicData.tid, moderatorUid);
			assert(result);
			assert.strictEqual(result.endorsed, true);
		});

		it('should not allow regular user to endorse topic', async () => {
			try {
				await topics.tools.endorse(topic.topicData.tid, fooUid);
				assert.fail('Should have thrown an error');
			} catch (err) {
				assert.strictEqual(err.message, '[[error:no-privileges]]');
			}
		});

		it('should not allow regular user to unendorse topic', async () => {
			try {
				await topics.tools.unendorse(topic2.topicData.tid, barUid);
				assert.fail('Should have thrown an error');
			} catch (err) {
				assert.strictEqual(err.message, '[[error:no-privileges]]');
			}
		});

		it('should allow system user to endorse topic', async () => {
			const result = await topics.tools.endorse(topic.topicData.tid, 'system');
			assert(result);
			assert.strictEqual(result.endorsed, true);
		});
	});

	describe('API Endpoints', () => {
		it('should endorse topic via API', async () => {
			await api.topics.endorse({ uid: adminUid }, { tids: [topic.topicData.tid] });
			const topicData = await topics.getTopicData(topic.topicData.tid);
			assert.strictEqual(topicData.endorsed, 1);
		});

		it('should unendorse topic via API', async () => {
			await api.topics.unendorse({ uid: adminUid }, { tids: [topic.topicData.tid] });
			const topicData = await topics.getTopicData(topic.topicData.tid);
			assert.strictEqual(topicData.endorsed, 0);
		});

		it('should endorse multiple topics via API', async () => {
			await api.topics.endorse({ uid: adminUid }, { tids: [topic.topicData.tid, topic2.topicData.tid] });
			const topicData1 = await topics.getTopicData(topic.topicData.tid);
			const topicData2 = await topics.getTopicData(topic2.topicData.tid);
			assert.strictEqual(topicData1.endorsed, 1);
			assert.strictEqual(topicData2.endorsed, 1);
		});

		it('should unendorse multiple topics via API', async () => {
			await api.topics.unendorse({ uid: adminUid }, { tids: [topic.topicData.tid, topic2.topicData.tid] });
			const topicData1 = await topics.getTopicData(topic.topicData.tid);
			const topicData2 = await topics.getTopicData(topic2.topicData.tid);
			assert.strictEqual(topicData1.endorsed, 0);
			assert.strictEqual(topicData2.endorsed, 0);
		});
	});

	describe('Event Logging', () => {
		it('should log correct user ID in endorse event', async () => {
			await topics.tools.endorse(topic.topicData.tid, adminUid);
			const events = await topics.events.get(topic.topicData.tid);
			const endorseEvent = events.find(e => e.type === 'endorse');
			assert(endorseEvent);
			assert.strictEqual(endorseEvent.uid, adminUid);
		});

		it('should log correct user ID in unendorse event', async () => {
			await topics.tools.unendorse(topic.topicData.tid, adminUid);
			const events = await topics.events.get(topic.topicData.tid);
			const unendorseEvent = events.find(e => e.type === 'unendorse');
			assert(unendorseEvent);
			assert.strictEqual(unendorseEvent.uid, adminUid);
		});

		it('should maintain event history when toggling endorsement', async () => {
			await topics.tools.endorse(topic.topicData.tid, adminUid);
			await topics.tools.unendorse(topic.topicData.tid, moderatorUid);
			await topics.tools.endorse(topic.topicData.tid, adminUid);

			const events = await topics.events.get(topic.topicData.tid);
			const endorseEvents = events.filter(e => e.type === 'endorse');
			const unendorseEvents = events.filter(e => e.type === 'unendorse');

			assert(endorseEvents.length >= 2, 'Should have multiple endorse events');
			assert(unendorseEvents.length >= 1, 'Should have at least one unendorse event');
		});
	});

	describe('Consistency with Topic Fields', () => {
		it('should include endorsed field in topic fields list', async () => {
			const fields = require('../../src/topics/data').topicDataFields;
			assert(fields.includes('endorsed'), 'endorsed should be in topic data fields');
		});

		it('should preserve other topic fields when endorsing', async () => {
			const beforeData = await topics.getTopicData(topic.topicData.tid);
			await topics.tools.endorse(topic.topicData.tid, adminUid);
			const afterData = await topics.getTopicData(topic.topicData.tid);

			assert.strictEqual(beforeData.tid, afterData.tid);
			assert.strictEqual(beforeData.title, afterData.title);
			assert.strictEqual(beforeData.uid, afterData.uid);
			assert.strictEqual(beforeData.cid, afterData.cid);
		});

		it('should preserve other topic fields when unendorsing', async () => {
			const beforeData = await topics.getTopicData(topic.topicData.tid);
			await topics.tools.unendorse(topic.topicData.tid, adminUid);
			const afterData = await topics.getTopicData(topic.topicData.tid);

			assert.strictEqual(beforeData.tid, afterData.tid);
			assert.strictEqual(beforeData.title, afterData.title);
			assert.strictEqual(beforeData.uid, afterData.uid);
			assert.strictEqual(beforeData.cid, afterData.cid);
		});
	});
});
