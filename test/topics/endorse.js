'use strict';

const assert = require('assert');

const categories = require('../../src/categories');
const topics = require('../../src/topics');
const user = require('../../src/user');
const groups = require('../../src/groups');

describe('Topic Endorsements', () => {
	let adminUid;
	let fooUid;
	let topic;

	before(async () => {
		fooUid = await user.create({ username: 'endorseFoo' });
		adminUid = await user.create({ username: 'endorseAdmin', password: '123456' });
		await groups.join('administrators', adminUid);

		const categoryObj = await categories.create({
			name: 'Endorse Test Category',
			description: 'Category for endorse tests',
		});

		topic = await topics.post({
			title: 'Endorseable Topic',
			content: 'Content for endorsement tests',
			uid: fooUid,
			cid: categoryObj.cid,
		});
	});

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
});
