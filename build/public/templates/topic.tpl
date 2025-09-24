<script type="application/ld+json">{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [{
"@type": "ListItem",
"position": 1,
"name": "{config.siteTitle}",
"item": "{breadcrumbs.0.url}"
}
{{{ each breadcrumbs }}}{{{ if !@first}}},{
"@type": "ListItem",
"position": {increment(@index, "1")},
"name": "{stripTags(./text)}"
{{{ if !@last }}},"item": "{./url}"{{{ end }}}
}{{{ end }}}{{{ end }}}
]}</script>
{{{ if config.theme.enableBreadcrumbs }}}
{{{ if breadcrumbs.length }}}
<ol class="breadcrumb mb-0 {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
{{{ each breadcrumbs }}}
<li{{{ if @last }}} component="breadcrumb/current"{{{ end }}} itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item {{{ if @last }}}active{{{ end }}}">
<meta itemprop="position" content="{increment(@index, "1")}" />
{{{ if ./url }}}<a href="{./url}" itemprop="item">{{{ end }}}
<span class="fw-semibold" itemprop="name">{./text}</span>
{{{ if ./url }}}</a>{{{ end }}}
</li>
{{{ end }}}
</ol>
{{{ end }}}
{{{ end }}}
{{{ if widgets.header.length }}}
<div data-widget-area="header">
{{{each widgets.header}}}
{{widgets.header.html}}
{{{end}}}
</div>
{{{ end }}}
<div class="flex-fill" itemid="{url}" itemscope itemtype="https://schema.org/DiscussionForumPosting">
<meta itemprop="headline" content="{escape(titleRaw)}">
<meta itemprop="text" content="{escape(titleRaw)}">
<meta itemprop="url" content="{url}">
<meta itemprop="datePublished" content="{timestampISO}">
<meta itemprop="dateModified" content="{lastposttimeISO}">
<div itemprop="author" itemscope itemtype="https://schema.org/Person">
<meta itemprop="name" content="{author.username}">
{{{ if author.userslug }}}<meta itemprop="url" content="{config.relative_path}/user/{author.userslug}">{{{ end }}}
</div>
<div class="d-flex flex-column gap-3">
<div class="d-flex gap-2 flex-wrap">
<div class="d-flex flex-column gap-3 flex-grow-1 flex-1">
<h1 component="post/header" class="tracking-tight fw-semibold fs-3 mb-0 text-break {{{ if config.theme.centerHeaderElements }}}text-center{{{ end }}}">
<span class="topic-title" component="topic/title">{title}</span>
</h1>
<div class="topic-info d-flex gap-2 align-items-center flex-wrap {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}">
<span component="topic/labels" class="d-flex gap-2 {{{ if (!scheduled && (!pinned && (!locked && (!icons.length && (!oldCid || (oldCid == "-1")))))) }}}hidden{{{ end }}}">
<span component="topic/scheduled" class="badge badge border border-gray-300 text-body {{{ if !scheduled }}}hidden{{{ end }}}">
<i class="fa fa-clock-o"></i> [[topic:scheduled]]
</span>
<span component="topic/pinned" class="badge badge border border-gray-300 text-body {{{ if (scheduled || !pinned) }}}hidden{{{ end }}}">
<i class="fa fa-thumb-tack"></i> {{{ if !pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {isoTimeToLocaleString(./pinExpiryISO, config.userLang)}]]{{{ end }}}
</span>
<span component="topic/locked" class="badge badge border border-gray-300 text-body {{{ if !locked }}}hidden{{{ end }}}">
<i class="fa fa-lock"></i> [[topic:locked]]
</span>
<a component="topic/moved" href="{config.relative_path}/category/{oldCid}" class="badge badge border border-gray-300 text-body text-decoration-none {{{ if (!oldCid || (oldCid == "-1")) }}}hidden{{{ end }}}">
<i class="fa fa-arrow-circle-right"></i> {{{ if privileges.isAdminOrMod }}}[[topic:moved-from, {oldCategory.name}]]{{{ else }}}[[topic:moved]]{{{ end }}}
</a>
{{{each icons}}}<span class="lh-1">{@value}</span>{{{end}}}
</span>
{buildCategoryLabel(category, "a", "border")}
<div data-tid="{./tid}" component="topic/tags" class="lh-1 tags tag-list d-flex flex-wrap hidden-xs hidden-empty gap-2">{{{ each tags }}}<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 text-xs tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>{{{ end }}}</div>
<div class="d-flex gap-2"><span class="badge text-body border border-gray-300 stats text-xs">
<i class="fa-regular fa-fw fa-message visible-xs-inline" title="[[global:posts]]"></i>
<span component="topic/post-count" title="{postcount}" class="fw-bold">{humanReadableNumber(postcount)}</span>
<span class="hidden-xs text-lowercase fw-normal">[[global:posts]]</span>
</span>
<span class="badge text-body border border-gray-300 stats text-xs">
<i class="fa fa-fw fa-user visible-xs-inline" title="[[global:posters]]"></i>
<span title="{postercount}" class="fw-bold">{humanReadableNumber(postercount)}</span>
<span class="hidden-xs text-lowercase fw-normal">[[global:posters]]</span>
</span>
<span class="badge text-body border border-gray-300 stats text-xs">
<i class="fa fa-fw fa-eye visible-xs-inline" title="[[global:views]]"></i>
<span class="fw-bold" title="{viewcount}">{humanReadableNumber(viewcount)}</span>
<span class="hidden-xs text-lowercase fw-normal">[[global:views]]</span>
</span>
{{{ if ./followercount }}}
<span class="badge text-body border border-gray-300 stats text-xs">
<i class="fa fa-fw fa-bell-o visible-xs-inline" title="[[global:watching]]"></i>
<span class="fw-bold" title="{viewcount}">{humanReadableNumber(followercount)}</span>
<span class="hidden-xs text-lowercase fw-normal">[[global:watching]]</span>
</span>
{{{ end }}}</div>
</div>
</div>
<div class="d-flex flex-wrap gap-2 align-items-start mt-2 hidden-empty" component="topic/thumb/list">{{{ each thumbs }}}
<a class="d-inline-block" href="{./url}">
<img class="rounded-1 bg-light" style="width:auto; max-width: 5.33rem; height: 3.33rem; object-fit: contain;" src="{./url}" />
</a>
{{{ end }}}</div>
</div>
<div class="row mb-4 mb-lg-0">
<div class="topic {{{ if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
<div class="{{{ if config.theme.stickyToolbar }}}sticky-tools{{{ end }}} {{{ if config.theme.topicSidebarTools }}}d-block d-lg-none{{{ end }}}" style="top: {{{ if (config.theme.topMobilebar && !config.theme.autohideBottombar) }}}var(--panel-offset){{{ else }}}0{{{ end }}};">
<nav class="d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons">
<div class="d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center">
<div class="d-flex me-auto mb-0 gap-2 align-items-center flex-wrap">
{{{ if loggedIn }}}
<button component="topic/mark-unread" class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center">
<i class="fa fa-fw fa-inbox text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:mark-unread]]</span>
</button>
{{{ end }}}
{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="topic/watch">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 dropdown-toggle text-truncate" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span component="topic/following/menu" class="d-flex gap-2 align-items-center{{{ if !isFollowing }}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:watching]]</span>
</span>
<span component="topic/not-following/menu" class="d-flex gap-2 align-items-center{{{ if !isNotFollowing}}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:not-watching]]</span>
</span>
<span component="topic/ignoring/menu" class="d-flex gap-2 align-items-center{{{ if !isIgnoring }}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-eye-slash text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:ignoring]]</span>
</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/not-following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:not-watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:not-watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/not-following/check" class="fa fa-fw {{{ if isNotFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/ignoring" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-eye-slash text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:ignoring]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:ignoring.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/ignoring/check" class="fa fa-fw {{{ if isIgnoring }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
</ul>
</div>
{{{ end }}}
<div class="btn-group bottom-sheet" component="thread/sort">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[aria:post-sort-option, {sortOptionLabel}]]">
<i class="fa fa-fw fa-arrow-down-wide-short text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">{sortOptionLabel}</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="oldest_to_newest" data-sort="oldest_to_newest" role="menuitem">
<span class="flex-grow-1">[[topic:oldest-to-newest]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="newest_to_oldest" data-sort="newest_to_oldest" role="menuitem">
<span class="flex-grow-1">[[topic:newest-to-oldest]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_votes" data-sort="most_votes" role="menuitem">
<span class="flex-grow-1">[[topic:most-votes]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
</ul>
</div>
{{{ if privileges.view_thread_tools }}}
<div class="btn-group thread-tools bottom-sheet">
<button class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle text-truncate" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-gear text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:thread-tools.title]]</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu"></ul>
</div>
{{{ end }}}
{{{ if (!feeds:disableRSS && rssFeedUrl) }}}
<a class="btn btn-ghost btn-sm d-none d-lg-flex align-items-center align-self-stretch" target="_blank" href="{rssFeedUrl}" title="[[global:rss-feed]]"><i class="fa fa-rss text-primary"></i></a>
{{{ end }}}
</div>
<div component="topic/reply/container" class="btn-group {{{ if !privileges.topics:reply }}}hidden{{{ end }}}">
<a href="{config.relative_path}/compose?tid={tid}" class="d-flex {{{ if !config.theme.topicSidebarTools}}}px-3{{{ end }}} gap-2 align-items-center btn btn-sm btn-primary fw-semibold" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-fw fa-reply {{{ if !config.theme.topicSidebarTools}}} d-sm-block d-md-none {{{ end }}}"></i><span class="d-none d-md-block text-truncate text-nowrap">[[topic:reply]]</span></a>
<button type="button" class="btn btn-sm btn-primary dropdown-toggle flex-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[topic:reply-options]]">
<span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
<li><a class="dropdown-item rounded-1" href="#" component="topic/reply-as-topic" role="menuitem">[[topic:reply-as-topic]]</a></li>
</ul>
</div>
{{{ if loggedIn }}}
<a href="#" component="topic/reply/locked" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled {{{ if (privileges.topics:reply || !locked) }}}hidden{{{ end }}}" disabled><i class="fa fa-fw fa-lock"></i> [[topic:locked]]</a>
{{{ else }}}
{{{ if !privileges.topics:reply }}}
<a component="topic/reply/guest" href="{config.relative_path}/login" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary"><i class="fa fa-fw fa-sign-in {{{ if !config.theme.topicSidebarTools}}} d-sm-block d-md-none {{{ end }}}"></i><span>[[topic:guest-login-reply]]</span></a>
{{{ end }}}
{{{ end }}}
</div>
</nav>
</div>
{{{ if merger }}}
<div component="topic/merged/message" class="alert alert-info d-flex justify-content-between flex-wrap">
<span>[[topic:merged-message, {config.relative_path}/topic/{mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
<span>
<a class="fw-bold" href="{config.relative_path}/user/{merger.userslug}">{merger.username}</strong></a> <small class="timeago" title="{mergedTimestampISO}"></small>
</span>
</div>
{{{ end }}}
{{{ if forker }}}
<div component="topic/forked/message" class="alert alert-info d-flex justify-content-between flex-wrap">
<span>[[topic:forked-message, {config.relative_path}/topic/{forkedFromTid}, {forker.forkedFromTitle}]]</span>
<span>
<a class="fw-bold" href="{config.relative_path}/user/{forker.userslug}">{forker.username}</strong></a> <small class="timeago" title="{forkTimestampISO}"></small>
</span>
</div>
{{{ end }}}
{{{ if !scheduled }}}
<div component="topic/deleted/message" class="alert alert-warning d-flex justify-content-between flex-wrap{{{ if !deleted }}} hidden{{{ end }}}">
<span>[[topic:deleted-message]]</span>
<span>
{{{ if deleter }}}
<a class="fw-bold" href="{config.relative_path}/user/{deleter.userslug}">{deleter.username}</a> <small class="timeago" title="{deletedTimestampISO}"></small>
{{{ end }}}
</span>
</div>
{{{ end }}}
<div class="d-flex gap-0 gap-lg-5">
<div class="posts-container" style="min-width: 0;">
<ul component="topic" class="posts timeline list-unstyled p-0 py-3" style="min-width: 0;" data-tid="{tid}" data-cid="{cid}">
{{{ each posts }}}
<li component="post" class="{{{ if (./index != 0) }}}pt-4{{{ end }}} {{{ if posts.deleted }}}deleted{{{ end }}} {{{ if posts.selfPost }}}self-post{{{ end }}} {{{ if posts.topicOwnerPost }}}topic-owner-post{{{ end }}}" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}"{{{ if posts.allowDupe }}} data-allow-dupe="1"{{{ end }}}{{{ if posts.navigatorIgnore }}} data-navigator-ignore="1"{{{ end }}} itemprop="comment" itemtype="http://schema.org/Comment" itemscope>
<a component="post/anchor" data-index="{./index}" id="{increment(./index, "1")}"></a>
<meta itemprop="datePublished" content="{./timestampISO}">
{{{ if ./editedISO }}}
<meta itemprop="dateModified" content="{./editedISO}">
{{{ end }}}
{{{ if (!./index && widgets.mainpost-header.length) }}}
<div data-widget-area="mainpost-header">
{{{ each widgets.mainpost-header }}}
{widgets.mainpost-header.html}
{{{ end }}}
</div>
{{{ end }}}
{{{ if (./parent && !hideParent) }}}
<div component="post/parent" data-collapsed="true" data-parent-pid="{./parent.pid}" data-uid="{./parent.uid}" class="btn btn-ghost btn-sm d-flex gap-2 text-start flex-row mb-2" style="font-size: 13px;">
<div class="d-flex gap-2 text-nowrap">
<div class="d-flex flex-nowrap gap-1 align-items-center">
<a href="{config.relative_path}/user/{./parent.user.userslug}" class="text-decoration-none lh-1">{buildAvatar(./parent.user, "16px", true, "not-responsive align-middle")}</a>
<a class="fw-semibold text-truncate" style="max-width: 150px;" href="{config.relative_path}/user/{./parent.user.userslug}">{./parent.user.displayname}</a>
</div>
<a href="{config.relative_path}/post/{encodeURIComponent(./parent.pid)}" class="text-muted timeago text-nowrap hidden" title="{./parent.timestampISO}"></a>
</div>
<div component="post/parent/content" class="text-muted line-clamp-1 text-break w-100">{./parent.content}</div>
</div>
{{{ end }}}
<div class="d-flex align-items-start gap-3 post-container-parent">
<div class="bg-body d-none d-sm-block rounded-circle" style="outline: 2px solid var(--bs-body-bg);">
<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" aria-label="[[aria:profile-page-for, {./user.displayname}]]">
{buildAvatar(posts.user, "48px", true, "", "user/picture")}
{{{ if ./user.isLocal }}}
<span component="user/status" class="position-absolute top-100 start-100 border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
{{{ else }}}
<span component="user/locality" class="position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small" title="[[global:remote-user]]">
<span class="visually-hidden">[[global:remote-user]]</span>
<i class="fa fa-globe"></i>
</span>
{{{ end }}}
</a>
</div>
<div class="post-container d-flex gap-2 flex-grow-1 flex-column w-100" style="min-width:0;">
<div class="d-flex align-items-start justify-content-between gap-1 flex-nowrap w-100 post-header" itemprop="author" itemscope itemtype="https://schema.org/Person">
<div class="d-flex gap-1 flex-wrap align-items-center text-truncate">
<meta itemprop="name" content="{./user.displayname}">
{{{ if ./user.userslug }}}<meta itemprop="url" content="{config.relative_path}/user/{./user.userslug}">{{{ end }}}
<div class="d-flex flex-nowrap gap-1 align-items-center text-truncate">
<div class="bg-body d-sm-none">
<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
{buildAvatar(posts.user, "20px", true, "", "user/picture")}
{{{ if ./user.isLocal }}}
<span component="user/status" class="position-absolute top-100 start-100 border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
{{{ else }}}
<span component="user/locality" class="position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small" title="[[global:remote-user]]">
<span class="visually-hidden">[[global:remote-user]]</span>
<i class="fa fa-globe"></i>
</span>
{{{ end }}}
</a>
</div>
<a class="fw-bold text-nowrap text-truncate" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
</div>
{{{ each posts.user.selectedGroups }}}
{{{ if posts.user.selectedGroups.slug }}}
<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
{{{ end }}}
{{{ end }}}
{{{ if posts.user.banned }}}
<span class="badge bg-danger rounded-1">[[user:banned]]</span>
{{{ end }}}
<div class="d-flex gap-1 align-items-center">
<span class="text-muted">{generateWrote(@value, config.timeagoCutoff)}</span>
<i component="post/edit-indicator" class="fa fa-edit text-muted{{{ if privileges.posts:history }}} pointer{{{ end }}} edit-icon {{{ if !posts.editor.username }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {isoTimeToLocaleString(./editedISO, config.userLang)}]]"></i>
<span data-editor="{posts.editor.userslug}" component="post/editor" class="visually-hidden">[[global:last-edited-by, {posts.editor.username}]] <span class="timeago" title="{isoTimeToLocaleString(posts.editedISO, config.userLang)}"></span></span>
</div>
{{{ if posts.user.custom_profile_info.length }}}
<div>
<span>
&#124;
{{{ each posts.user.custom_profile_info }}}
{posts.user.custom_profile_info.content}
{{{ end }}}
</span>
</div>
{{{ end }}}
</div>
<div class="d-flex align-items-center gap-1 justify-content-end">
<span class="bookmarked opacity-0 text-primary"><i class="fa fa-bookmark-o"></i></span>
<a href="{config.relative_path}/post/{encodeURIComponent(./pid)}" class="post-index text-muted d-none d-md-inline">#{increment(./index, "1")}</a>
</div>
</div>
<div class="content text-break" component="post/content" itemprop="text">
{posts.content}
</div>
<div component="post/footer" class="post-footer border-bottom pb-2">
{{{ if posts.user.signature }}}
<div component="post/signature" data-uid="{posts.user.uid}" class="text-xs text-muted mt-2">{posts.user.signature}</div>
{{{ end }}}
<div class="d-flex flex-wrap-reverse gap-2 {{{ if (hideReplies || !posts.replies.count) }}}justify-content-end{{{ else }}}justify-content-between{{{ end }}}">
{{{ if !hideReplies }}}
<a component="post/reply-count" data-target-component="post/replies/container" href="#" class="d-flex gap-2 align-items-center btn btn-ghost ff-secondary border rounded-1 p-1 text-muted text-decoration-none text-xs {{{ if (!./replies || shouldHideReplyContainer(@value)) }}}hidden{{{ end }}}">
<span component="post/reply-count/avatars" class="d-flex gap-1 {{{ if posts.replies.hasMore }}}hasMore{{{ end }}}">
{{{each posts.replies.users}}}
<span>{buildAvatar(posts.replies.users, "20px", true, "avatar-tooltip")}</span>
{{{end}}}
{{{ if posts.replies.hasMore}}}
<span style="height: 20px; line-height: 20px;"><i class="fa fa-ellipsis"></i></span>
{{{ end }}}
</span>
<span class="ms-2 replies-count fw-semibold text-nowrap" component="post/reply-count/text" data-replies="{posts.replies.count}">{posts.replies.text}</span>
<span class="ms-2 replies-last hidden-xs fw-semibold">[[topic:last-reply-time]] <span class="timeago" title="{posts.replies.timestampISO}"></span></span>
<i class="fa fa-fw fa-chevron-down" component="post/replies/open"></i>
</a>
{{{ end }}}
<div component="post/actions" class="d-flex flex-grow-1 align-items-center justify-content-end gap-1 post-tools">
<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
<a component="post/reply" href="#" class="btn btn-ghost btn-sm {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:reply]]"><i class="fa fa-fw fa-reply text-primary"></i></a>
<a component="post/quote" href="#" class="btn btn-ghost btn-sm {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:quote]]"><i class="fa fa-fw fa-quote-right text-primary"></i></a>
{{{ if ./announces }}}
<a component="post/announce-count" href="#" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center" title="[[topic:announcers]]"><i class="fa fa-share-alt text-primary"></i> {./announces}</a>
{{{ end }}}
{{{ if !reputation:disabled }}}
<div class="d-flex votes align-items-center">
<a component="post/upvote" href="#" class="btn btn-ghost btn-sm{{{ if posts.upvoted }}} upvoted{{{ end }}}" title="[[topic:upvote-post]]">
<i class="fa fa-fw fa-chevron-up text-primary"></i>
</a>
<meta itemprop="upvoteCount" content="{posts.upvotes}">
<meta itemprop="downvoteCount" content="{posts.downvotes}">
<a href="#" class="px-2 mx-1 btn btn-ghost btn-sm" component="post/vote-count" data-votes="{posts.votes}" title="[[global:voters]]">{posts.votes}</a>
{{{ if !downvote:disabled }}}
<a component="post/downvote" href="#" class="btn btn-ghost btn-sm{{{ if posts.downvoted }}} downvoted{{{ end }}}" title="[[topic:downvote-post]]">
<i class="fa fa-fw fa-chevron-down text-primary"></i>
</a>
{{{ end }}}
</div>
{{{ end }}}
<span component="post/tools" class="dropdown bottom-sheet {{{ if !./display_post_menu }}}hidden{{{ end }}}">
<a class="btn btn-ghost btn-sm ff-secondary dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[topic:post-tools]]"><i class="fa fa-fw fa-ellipsis-v text-primary"></i></a>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu"></ul>
</span>
</div>
</div>
<div component="post/replies/container" class="my-2 col-11 border rounded-1 p-3 hidden-empty"></div>
</div>
</div>
</div>
{{{ if (!./index && widgets.mainpost-footer.length) }}}
<div data-widget-area="mainpost-footer">
{{{ each widgets.mainpost-footer }}}
{widgets.mainpost-footer.html}
{{{ end }}}
</div>
{{{ end }}}
</li>
{{{ if (config.topicPostSort != "most_votes") }}}
{{{ each ./events}}}{{{ if ./items.length }}}
<li component="topic/event" class="timeline-event text-muted d-flex align-items-start gap-2 pt-4 px-2 px-lg-0">
<div class="timeline-badge my-2 my-lg-1">
<i class="fa fa-fw {{{ if ./icon }}}{./icon}{{{ else }}}fa-circle{{{ end }}} small"></i>
</div>
<div class="d-flex flex-column align-items-start">
<button class="btn btn-sm btn-ghost" type="button" data-bs-toggle="collapse" data-bs-target="#event-collapse-{./id}" aria-expanded="false" aria-controls="collapseExample">
[[topic:announcers-x, {./items.length}]]
</button>
<div class="collapse align-self-start" id="event-collapse-{./id}">
<div component="topic/event/items">
{{{ each ./items }}}
<div class="d-flex gap-2 pt-3 pt-lg-2" data-topic-event-id="{./id}" data-topic-event-type="{./type}">
<span class="timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0">
{./text}
</span>
{{{ if (privileges.isAdminOrMod && ./id) }}}
<span component="topic/event/delete" data-topic-event-id="{./id}" data-topic-event-type="{./type}" class="timeline-text pointer" title="[[topic:delete-event]]"><i class="fa fa-trash"></i></span>
{{{ end }}}
</div>
{{{ end }}}
</div>
</div>
</div>
</li>
{{{ else }}}
<li component="topic/event" class="timeline-event text-muted d-flex align-items-start align-items-lg-center gap-2 pt-4 px-2 px-lg-0" data-topic-event-id="{./id}" data-topic-event-type="{./type}">
<div class="timeline-badge">
<i class="fa fa-fw {{{ if ./icon }}}{./icon}{{{ else }}}fa-circle{{{ end }}} small"></i>
</div>
<span class="timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0">
{./text}
</span>
{{{ if (privileges.isAdminOrMod && ./id) }}}
<span component="topic/event/delete" data-topic-event-id="{./id}" data-topic-event-type="{./type}" class="timeline-text pointer" title="[[topic:delete-event]]"><i class="fa fa-trash"></i></span>
{{{ end }}}
</li>
{{{ end }}}
{{{ end }}}
{{{ end }}}
{{{ end }}}
</ul>
{{{ if browsingUsers }}}
<div class="visible-xs">
<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
<hr/>
</div>
{{{ end }}}
{{{ if config.theme.enableQuickReply }}}
{{{ if privileges.topics:reply }}}
<div component="topic/quickreply/container" class="quick-reply d-flex gap-3 mb-4">
<div class="icon hidden-xs">
<a class="d-inline-block position-relative" href="{{{ if loggedInUser.userslug }}}{config.relative_path}/user/{loggedInUser.userslug}{{{ else }}}#{{{ end }}}">
{buildAvatar(loggedInUser, "48px", true, "", "user/picture")}
{{{ if loggedInUser.status }}}<span component="user/status" class="position-absolute top-100 start-100 border border-white border-2 rounded-circle status {loggedInUser.status}"><span class="visually-hidden">[[global:{loggedInUser.status}]]</span></span>{{{ end }}}
</a>
</div>
<form class="flex-grow-1 d-flex flex-column gap-2" method="post" action="{config.relative_path}/compose">
<input type="hidden" name="tid" value="{tid}" />
<input type="hidden" name="_csrf" value="{config.csrf_token}" />
<div class="quickreply-message position-relative">
<textarea rows="4" name="content" component="topic/quickreply/text" class="form-control mousetrap" placeholder="[[modules:composer.textarea.placeholder]]"></textarea>
<div class="imagedrop"><div>[[topic:composer.drag-and-drop-images]]</div></div>
</div>
<div>
<div class="d-flex justify-content-end gap-2">
<button type="button" component="topic/quickreply/upload/button" class="btn btn-ghost btn-sm border"><i class="fa fa-upload"></i></button>
<button type="button" component="topic/quickreply/expand" class="btn btn-ghost btn-sm border" title="[[topic:open-composer]]"><i class="fa fa-expand"></i></button>
<button type="submit" component="topic/quickreply/button" class="btn btn-sm btn-primary">[[topic:post-quick-reply]]</button>
</div>
</div>
</form>
<form class="d-none" component="topic/quickreply/upload" method="post" enctype="multipart/form-data">
<input type="file" name="files[]" multiple class="hidden"/>
</form>
</div>
{{{ end }}}
{{{ end }}}
</div>
<div class="d-flex d-none d-lg-block flex-grow-1 mt-2">
<div class="sticky-top" style="{{{ if config.theme.topicSidebarTools }}}top:2rem;{{{ else }}}top:6rem; {{{ end }}} z-index:1;">
<div class="d-flex flex-column gap-3 align-items-end">
{{{ if config.theme.topicSidebarTools }}}
<div class="d-flex flex-column gap-2" style="width: 170px;">
<div component="topic/reply/container" class="btn-group {{{ if !privileges.topics:reply }}}hidden{{{ end }}}">
<a href="{config.relative_path}/compose?tid={tid}" class="d-flex {{{ if !config.theme.topicSidebarTools}}}px-3{{{ end }}} gap-2 align-items-center btn btn-sm btn-primary fw-semibold" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-fw fa-reply {{{ if !config.theme.topicSidebarTools}}} d-sm-block d-md-none {{{ end }}}"></i><span class="d-none d-md-block text-truncate text-nowrap">[[topic:reply]]</span></a>
<button type="button" class="btn btn-sm btn-primary dropdown-toggle flex-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[topic:reply-options]]">
<span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
<li><a class="dropdown-item rounded-1" href="#" component="topic/reply-as-topic" role="menuitem">[[topic:reply-as-topic]]</a></li>
</ul>
</div>
{{{ if loggedIn }}}
<a href="#" component="topic/reply/locked" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled {{{ if (privileges.topics:reply || !locked) }}}hidden{{{ end }}}" disabled><i class="fa fa-fw fa-lock"></i> [[topic:locked]]</a>
{{{ else }}}
{{{ if !privileges.topics:reply }}}
<a component="topic/reply/guest" href="{config.relative_path}/login" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary"><i class="fa fa-fw fa-sign-in {{{ if !config.theme.topicSidebarTools}}} d-sm-block d-md-none {{{ end }}}"></i><span>[[topic:guest-login-reply]]</span></a>
{{{ end }}}
{{{ end }}}
{{{ if loggedIn }}}
<button component="topic/mark-unread" class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center">
<i class="fa fa-fw fa-inbox text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:mark-unread]]</span>
</button>
{{{ end }}}
{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="topic/watch">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 dropdown-toggle text-truncate" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span component="topic/following/menu" class="d-flex gap-2 align-items-center{{{ if !isFollowing }}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:watching]]</span>
</span>
<span component="topic/not-following/menu" class="d-flex gap-2 align-items-center{{{ if !isNotFollowing}}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:not-watching]]</span>
</span>
<span component="topic/ignoring/menu" class="d-flex gap-2 align-items-center{{{ if !isIgnoring }}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-eye-slash text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:ignoring]]</span>
</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/not-following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:not-watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:not-watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/not-following/check" class="fa fa-fw {{{ if isNotFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/ignoring" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-eye-slash text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[topic:ignoring]]</span>
</span>
<div class="help-text text-secondary text-xs">[[topic:ignoring.description]]</div>
</div>
<span class="flex-shrink-0"><i component="topic/ignoring/check" class="fa fa-fw {{{ if isIgnoring }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
</ul>
</div>
{{{ end }}}
<div class="btn-group bottom-sheet" component="thread/sort">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[aria:post-sort-option, {sortOptionLabel}]]">
<i class="fa fa-fw fa-arrow-down-wide-short text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">{sortOptionLabel}</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="oldest_to_newest" data-sort="oldest_to_newest" role="menuitem">
<span class="flex-grow-1">[[topic:oldest-to-newest]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="newest_to_oldest" data-sort="newest_to_oldest" role="menuitem">
<span class="flex-grow-1">[[topic:newest-to-oldest]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_votes" data-sort="most_votes" role="menuitem">
<span class="flex-grow-1">[[topic:most-votes]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
</ul>
</div>
{{{ if privileges.view_thread_tools }}}
<div class="btn-group thread-tools bottom-sheet">
<button class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle text-truncate" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-gear text-primary"></i>
<span class="d-none d-md-inline fw-semibold text-truncate text-nowrap">[[topic:thread-tools.title]]</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu"></ul>
</div>
{{{ end }}}
</div>
{{{ end }}}
{{{ if config.theme.topicSidebarTools }}}<hr class="my-0" style="min-width: 170px;"/>{{{ end }}}
<div class="pagination-block d-none d-lg-block">
<div class="scroller-content d-flex gap-2 flex-column align-items-start">
<button class="pagetop btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2" style="padding: 4px 8px;"><i class="fa fa-fw fa-chevron-up"></i> <span class="timeago text-xs text-muted text-nowrap" title="{./timestampISO}"></span></button>
<div class="scroller-container position-relative">
<div class="scroller-thumb d-flex gap-2 text-nowrap position-relative" style="height: 40px;">
<div class="scroller-thumb-icon bg-primary rounded d-inline-block" style="width:9px; height: 40px;"></div>
<div>
<p class="small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0"></p>
<p class="meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none"></p>
</div>
</div>
<div class="unread d-inline-block position-absolute bottom-0">
<div class="meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2">
<a class="text-decoration-none" href="{url}" tabindex="-1" aria-disabled="true" aria-label="[[topic:unread-posts-link]]"></a>
</div>
</div>
</div>
<button class="pagebottom btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2" style="padding: 4px 8px;"><i class="fa fa-fw fa-chevron-down"></i> <span class="timeago text-xs text-muted text-nowrap" title="{./lastposttimeISO}"></span></button>
</div>
</div>
{{{ if config.theme.topicSidebarTools }}}<hr class="my-0" style="min-width: 170px;" />{{{ end }}}
{{{ if browsingUsers }}}
<div class="d-flex flex-column ps-2 hidden-xs" style="min-width: 170px;">
<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
</div>
{{{ end }}}
</div>
</div>
</div>
</div>
{{{ if config.usePagination }}}
<nav component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}" aria-label="[[global:pagination]]">
<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
<li class="page-item previous {{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
{{{each pagination.pages}}}
{{{ if ./separator }}}
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link rounded fw-secondary px-3" href="#" aria-label="[[global:pagination.go-to-page]]"><i class="fa fa-ellipsis-h"></i></a>
</li>
{{{ else }}}
<li class="page-item page{{{ if ./active }}} active{{{ end }}}" >
<a class="page-link rounded fw-secondary px-3" href="?{./qs}" data-page="{./page}" aria-label="[[global:pagination.page-x, {./page}]]">{./page}</a>
</li>
{{{ end }}}
{{{end}}}
<li class="page-item next {{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"> <i class="fa fa-chevron-right"></i></a>
</li>
</ul>
{{{ if !template.topic }}}
<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.first.qs}" data-page="1" aria-label="[[global:pagination.firstpage]]"><i class="fa fa-fast-backward"></i> </a>
</li>
<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link fw-secondary" href="#" aria-label="[[global:pagination.go-to-page]]">{pagination.currentPage} / {pagination.pageCount}</a>
</li>
<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"> <i class="fa fa-chevron-right"></i></a>
</li>
<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}" aria-label="[[global:pagination.lastpage]]"><i class="fa fa-fast-forward"></i> </a>
</li>
</ul>
{{{ end }}}
</nav>
{{{ end }}}
</div>
<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
{{{each widgets.sidebar}}}
{{widgets.sidebar.html}}
{{{end}}}
</div>
</div>
</div>
</div>
<div data-widget-area="footer">
{{{each widgets.footer}}}
{{widgets.footer.html}}
{{{end}}}
</div>
{{{ if !config.usePagination }}}
<noscript>
<nav component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}" aria-label="[[global:pagination]]">
<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
<li class="page-item previous {{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
{{{each pagination.pages}}}
{{{ if ./separator }}}
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link rounded fw-secondary px-3" href="#" aria-label="[[global:pagination.go-to-page]]"><i class="fa fa-ellipsis-h"></i></a>
</li>
{{{ else }}}
<li class="page-item page{{{ if ./active }}} active{{{ end }}}" >
<a class="page-link rounded fw-secondary px-3" href="?{./qs}" data-page="{./page}" aria-label="[[global:pagination.page-x, {./page}]]">{./page}</a>
</li>
{{{ end }}}
{{{end}}}
<li class="page-item next {{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"> <i class="fa fa-chevron-right"></i></a>
</li>
</ul>
{{{ if !template.topic }}}
<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.first.qs}" data-page="1" aria-label="[[global:pagination.firstpage]]"><i class="fa fa-fast-backward"></i> </a>
</li>
<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link fw-secondary" href="#" aria-label="[[global:pagination.go-to-page]]">{pagination.currentPage} / {pagination.pageCount}</a>
</li>
<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"> <i class="fa fa-chevron-right"></i></a>
</li>
<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}" aria-label="[[global:pagination.lastpage]]"><i class="fa fa-fast-forward"></i> </a>
</li>
</ul>
{{{ end }}}
</nav>
</noscript>
{{{ end }}}