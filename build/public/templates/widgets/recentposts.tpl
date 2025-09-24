<div class="overflow-hidden">
<ul id="recent_posts" class="list-unstyled d-flex flex-column" data-numposts="{numPosts}" data-cid="{cid}">
{{{ each posts }}}
<li data-pid="{./pid}" class="widget-posts d-flex flex-column gap-1">
<div class="d-flex gap-2 align-items-center text-sm">
<a class="text-decoration-none avatar-tooltip" title="{./user.displayname}" href="{{{ if ./user.userslug }}}{relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
{buildAvatar(./user, "24px", true)}
</a>
<div class="post-author d-flex align-items-center gap-1">
<a class="lh-1 fw-semibold" href="{config.relative_path}/user/{./user.userslug}">{../user.displayname}</a>
</div>
<span class="timeago text-muted lh-1" title="{./timestampISO}"></span>
</div>
<div class="line-clamp-6 text-sm text-break">
{./content}
</div>
<div class="text-end text-xs post-preview-footer">
<a href="{relative_path}/post/{encodeURIComponent(./pid)}">[[global:read-more]]</a>
</div>
{{{ if !@last}}}
<hr/>
{{{ end }}}
</li>
{{{ end }}}
</ul>
</div>
<script>
'use strict';
/* globals app, socket*/
(function() {
function onLoad() {
var replies = $('#recent_posts');
var recentPostsWidget = app.widgets.recentPosts;
var numPosts = parseInt(replies.attr('data-numposts'), 10) || 4;
if (!recentPostsWidget) {
recentPostsWidget = {};
recentPostsWidget.onNewPost = function(data) {
var cid = replies.attr('data-cid');
var recentPosts = $('#recent_posts');
if (!recentPosts.length) {
return;
}
if (cid && parseInt(cid, 10) !== parseInt(data.posts[0].topic.cid, 10)) {
return;
}
app.parseAndTranslate('widgets/partials/posts', {
relative_path: config.relative_path,
posts: data.posts
}, function(html) {
processHtml(html);
html.hide()
.prependTo(recentPosts)
.fadeIn();
if (recentPosts.children().length > numPosts) {
recentPosts.children().last().remove();
}
});
};
app.widgets.recentPosts = recentPostsWidget;
socket.on('event:new_post', app.widgets.recentPosts.onNewPost);
}
function processHtml(html) {
html.find('img:not(.not-responsive)').addClass('img-fluid');
if ($.timeago) {
html.find('span.timeago').timeago();
}
}
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', onLoad);
} else {
onLoad();
}
})();
</script>