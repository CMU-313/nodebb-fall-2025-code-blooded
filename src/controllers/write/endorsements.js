'use strict';

const api = require('../../api');
const helpers = require('../helpers');
const posts = require('../../posts');

const Endorsements = module.exports;

async function mock(req) {
	const tid = await posts.getTidFromPid(req.params.pid);
	return { pid: req.params.pid, room_id: `topic_${tid}` };
}

Endorsements.endorse = async (req, res) => {
	const data = await mock(req);
	await api.endorsements.endorse(req, data);
	helpers.formatApiResponse(200, res);
};

Endorsements.unendorse = async (req, res) => {
	const data = await mock(req);
	await api.endorsements.unendorse(req, data);
	helpers.formatApiResponse(200, res);
};

Endorsements.getEndorsement = async (req, res) => {
	const data = await api.endorsements.getEndorsement(req, { pid: req.params.pid });
	helpers.formatApiResponse(200, res, data);
};
