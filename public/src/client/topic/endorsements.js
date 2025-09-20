'use strict';

define('forum/topic/endorsements', [
	'api',
	'alerts',
	'components',
	'translator',
], function (api, alerts, components, translator) {
	const Endorsements = {};

	Endorsements.init = function () {
		$(document).on('click', '[component="post/endorse"]', function (e) {
			e.preventDefault();
			const pid = $(this).parents('[data-pid]').attr('data-pid');
			Endorsements.toggle(pid);
		});

		$(document).on('click', '[component="post/unendorse"]', function (e) {
			e.preventDefault();
			const pid = $(this).parents('[data-pid]').attr('data-pid');
			Endorsements.toggle(pid);
		});
	};

	Endorsements.toggle = async function (pid) {
		const postEl = components.get('post', 'pid', pid);
		const isEndorsed = postEl.find('[component="post/endorsed"]').length > 0;

		try {
			if (isEndorsed) {
				await api.del(`/posts/${pid}/endorse`);
				Endorsements.removeEndorsement(postEl);
			} else {
				await api.post(`/posts/${pid}/endorse`);
				Endorsements.addEndorsement(postEl);
			}
		} catch (err) {
			alerts.error(err);
		}
	};

	Endorsements.addEndorsement = function (postEl) {
		const endorseBtn = postEl.find('[component="post/endorse"]');
		const unendorseBtn = postEl.find('[component="post/unendorse"]');
		
		endorseBtn.addClass('hidden');
		unendorseBtn.removeClass('hidden');
		
		// Add endorsed indicator
		if (postEl.find('[component="post/endorsed"]').length === 0) {
			const endorsedEl = $('<div component="post/endorsed" class="endorsed-indicator badge bg-success text-white ms-2"><i class="fa fa-check-circle"></i> Endorsed</div>');
			postEl.find('.post-header').append(endorsedEl);
		}
		
		// Add visual styling to the post
		postEl.addClass('endorsed-post');
	};

	Endorsements.removeEndorsement = function (postEl) {
		const endorseBtn = postEl.find('[component="post/endorse"]');
		const unendorseBtn = postEl.find('[component="post/unendorse"]');
		
		endorseBtn.removeClass('hidden');
		unendorseBtn.addClass('hidden');
		
		// Remove endorsed indicator
		postEl.find('[component="post/endorsed"]').remove();
		
		// Remove visual styling
		postEl.removeClass('endorsed-post');
	};

	return Endorsements;
});
