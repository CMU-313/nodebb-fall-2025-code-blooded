'use strict';

const posts = require('../posts');
const helpers = require('./helpers');

const endorsementsAPI = module.exports;

endorsementsAPI.endorse = async (caller, data) => {
	if (!data || !data.pid) {
		throw new Error('[[error:invalid-data]]');
	}

	return await posts.endorse(data.pid, caller.uid);
};

endorsementsAPI.unendorse = async (caller, data) => {
	if (!data || !data.pid) {
		throw new Error('[[error:invalid-data]]');
	}

	return await posts.unendorse(data.pid, caller.uid);
};

endorsementsAPI.getEndorsement = async (caller, data) => {
	if (!data || !data.pid) {
		throw new Error('[[error:invalid-data]]');
	}

	const canRead = await helpers.require('posts:read', data.pid, caller.uid);
	if (!canRead) {
		throw new Error('[[error:no-privileges]]');
	}

	return await posts.getEndorsement(data.pid);
};
