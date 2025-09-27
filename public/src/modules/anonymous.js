'use strict';


define('anonymous', ['hooks'], function (hooks) {
    const Anonymous = {};


    Anonymous.init = function () {
        // Handle composer enhancement - add anonymous checkbox
        hooks.on('action:composer.enhance', function (data) {
            Anonymous.addCheckboxToComposer(data.container);
        });


        // Listen to composer creation hooks
        hooks.on('action:composer.topic.new', function () {
            setTimeout(() => {
                const composer = $('.composer');
                if (composer.length) {
                    Anonymous.addCheckboxToComposer(composer);
                }
            }, 100);
        });


        hooks.on('action:composer.post.new', function () {
            setTimeout(() => {
                const composer = $('.composer');
                if (composer.length) {
                    Anonymous.addCheckboxToComposer(composer);
                }
            }, 100);
        });


        // Handle composer submission - add anonymous data
        hooks.on('filter:composer.submit', function (data) {
            const composerEl = data.composerEl || $('.composer');
            const checked = composerEl.find('#composer-anonymous').is(':checked');


            data.composerData = data.composerData || {};
            if (checked) {
                data.composerData.anonymous = 1;
            } else {
                delete data.composerData.anonymous;
            }


            return data;
        });
    };


    Anonymous.addCheckboxToComposer = function (container) {
        if (!container || !container.length) {
            return;
        }


        // Check if checkbox already exists
        if (container.find('#composer-anonymous').length > 0) {
            return;
        }


        // Look for the title container first, then fallback to other selectors
        const selectors = [
            '.title-container',
            '.action-bar',
            '.composer-submit',
            'form',
        ];


        for (const currentSelector of selectors) {
            const target = container.find(currentSelector).first();
            if (target.length) {
                const anonymousCheckbox = $(`
					<div class="d-flex align-items-center" id="anonymous-checkbox-wrapper" style="margin: 0 10px; flex-shrink: 0;">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" id="composer-anonymous" name="anonymous" value="1">
							<label class="form-check-label" for="composer-anonymous" style="font-size: 14px; margin-left: 5px;">Post anonymously</label>
						</div>
					</div>
				`);


                if (target.hasClass('title-container')) {
                    // Insert into the title container - before the action bar
                    const actionBar = target.find('.action-bar');
                    if (actionBar.length) {
                        actionBar.before(anonymousCheckbox);
                    } else {
                        target.append(anonymousCheckbox);
                    }
                } else if (target.hasClass('action-bar')) {
                    // Insert before the action bar
                    target.before(anonymousCheckbox);
                } else if (target.hasClass('composer-submit')) {
                    // Insert before the button's parent container
                    const buttonParent = target.parent();
                    if (buttonParent.hasClass('btn-group')) {
                        buttonParent.before(anonymousCheckbox);
                    } else {
                        target.before(anonymousCheckbox);
                    }
                } else {
                    target.append(anonymousCheckbox);
                }


                break;
            }
        }
    };


    return Anonymous;
});


