
/* eslint-disable strict */
//var request = require('request');

const translatorApi = module.exports;

// translatorApi.translate = function (postData) {
// return ['is_english',postData];
// };

translatorApi.translate = async function (postData) {
	//  Edit the translator URL below
	const TRANSLATOR_API = 'http://translation-service:5000/';
	const encodedContent = encodeURIComponent(postData.content);
	const url = `${TRANSLATOR_API}?content=${encodedContent}`;
	console.log('FETCHING: ' + url);
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Translation API error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log('DATA: ' + JSON.stringify(data));
		return [data.is_english, data.translated_content];
	} catch (error) {
		console.error('FETCH ERROR: ', error);
		throw error;
	}
};
