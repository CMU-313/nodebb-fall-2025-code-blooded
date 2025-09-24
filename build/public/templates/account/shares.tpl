<div class="account w-100 mx-auto">
<div class="cover position-absolute start-0 top-0 w-100" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
<div class="container">
{{{ if allowCoverPicture }}}
{{{ if canEdit }}}
<div class="controls text-center">
<a href="#" class="upload p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-upload"></i></a>
<a href="#" class="resize p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-arrows"></i></a>
<a href="#" class="remove p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-times"></i></a>
</div>
<a href="#" class="save text-bg-primary">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></a>
<div class="indicator text-bg-primary">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
{{{ end }}}
{{{ end }}}
</div>
</div>
<div class="d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom">
<div {{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}component="profile/change/picture"{{{ end }}} class="avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent" style="margin-top: -75px;">
{buildAvatar(@value, "142px", true)}
{{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}
<a href="#" component="profile/change/picture" class="d-none d-md-block pointer p-2 rounded-1 text-bg-light position-absolute top-50 start-50 translate-middle hover-opacity-75">
<span class="upload"><i class="fa fa-fw fa-upload"></i></span>
</a>
{{{ end }}}
</div>
<div class="d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2">
<div class="d-flex flex-grow-1 flex-row gap-2">
<div class="d-flex flex-column gap-1">
<h2 class="fullname fw-semibold fs-2 tracking-tight mb-0">{{{ if fullname }}}{fullname}{{{ else }}}{username}{{{ end }}}</h2>
<div class="d-flex flex-wrap gap-1 text-sm align-items-center">
<span class="username fw-bold">{{{ if !banned }}}@{username}{{{ else }}}[[user:banned]]{{{ end }}}</span>
<div class="d-flex align-items-center gap-1 p-1 flex-wrap">
{{{ if selectedGroup.length }}}
{{{ each selectedGroup }}}
{{{ if ./slug }}}
<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
{{{ end }}}
{{{ end }}}
{{{ end }}}
</div>
</div>
<div class="d-flex gap-2" component="user/badges"></div>
{{{ if isAdminOrGlobalModeratorOrModerator }}}
{{{ if banned }}}
<div class="text-xm text-muted">
{{{ if banned_until }}}
[[user:info.banned-until, {banned_until_readable}]]
{{{ else }}}
[[user:info.banned-permanently]]
{{{ end }}}
</div>
{{{ end }}}
{{{ end }}}
</div>
</div>
<div class="flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end">
{{{ if loggedIn }}}
{{{ if !isSelf }}}
<a component="account/unfollow" href="#" class="btn btn-outline-warning flex-fill{{{ if (!isFollowing && !isFollowPending) }}} hide{{{ end }}}">[[user:{{{ if isFollowPending }}}cancel-follow{{{ else }}}unfollow{{{ end }}}]]</a>
<a component="account/follow" href="#" class="btn btn-primary flex-fill{{{ if (isFollowing || isFollowPending) }}} hide{{{ end }}}">[[user:follow]]</a>
{{{ end }}}
{{{ end }}}
{{{ if (canChat && !banned) }}}
<div class="btn-group flex-fill">
<a {{{ if hasPrivateChat }}}component="account/chat"{{{ else }}}component="account/new-chat"{{{ end }}} href="#" class="btn btn-light" role="button">[[user:chat]]</a>
{{{ if hasPrivateChat}}}
<button type="button" class="btn btn-light dropdown-toggle flex-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-caret-down"></i>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
<li><a class="dropdown-item rounded-1" href="#" component="account/new-chat" role="menuitem"s>[[user:new-chat-with, {username}]]</a></li>
</ul>
{{{ end }}}
</div>
{{{ end }}}
{{{ if !isSelf }}}
{{{ if (isAdmin || (canBan || canMute ))}}}
<div class="btn-group bottom-sheet">
<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-gear fa-fw"></i>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links" role="menu">
<li>
<a class="dropdown-item rounded-1" href="{config.relative_path}/user/{userslug}/info" role="menuitem">[[user:account-info]]</a>
</li>
{{{ if (canBan || canMute) }}}
<li role="separator" class="dropdown-divider"></li>
{{{ end }}}
{{{ if canBan }}}
<li class="{{{ if banned }}}hide{{{ end }}}">
<a class="dropdown-item rounded-1" component="account/ban" href="#" role="menuitem">[[user:ban-account]]</a>
</li>
<li class="{{{ if !banned }}}hide{{{ end }}}">
<a class="dropdown-item rounded-1" component="account/unban" href="#" role="menuitem">[[user:unban-account]]</a>
</li>
{{{ end }}}
{{{ if canMute }}}
<li class="{{{ if muted }}}hide{{{ end }}}">
<a class="dropdown-item rounded-1" component="account/mute" href="#" role="menuitem">[[user:mute-account]]</a>
</li>
<li class="{{{ if !muted }}}hide{{{ end }}}">
<a class="dropdown-item rounded-1" component="account/unmute" href="#" role="menuitem">[[user:unmute-account]]</a>
</li>
{{{ end }}}
{{{ if isAdmin }}}
<li>
<a component="account/delete-account" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-account-as-admin]]</a>
<a component="account/delete-content" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-content]]</a>
<a component="account/delete-all" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-all]]</a>
</li>
{{{ end }}}
</ul>
</div>
{{{ end }}}
{{{ end }}}
</div>
</div>
</div>
<div data-widget-area="header">
{{{each widgets.header}}}
{{widgets.header.html}}
{{{end}}}
</div>
<div class="d-flex flex-column flex-md-row">
<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
<div class="sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1" style="top: 1rem;z-index: 1;">
<a href="{config.relative_path}/user/{userslug}" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold {{{ if template.account/profile }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:about]]</div>
</a>
<a href="{config.relative_path}/user/{userslug}/posts"class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/posts }}}active{{{ end }}}
{{{ if template.account/best }}}active{{{ end }}}
{{{ if template.account/controversial }}}active{{{ end }}}
{{{ if template.account/upvoted }}}active{{{ end }}}
{{{ if template.account/downvoted }}}active{{{ end }}}
{{{ if template.account/bookmarks }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:posts]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.posts}">{humanReadableNumber(counts.posts)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/topics" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/topics }}}active{{{ end }}}
{{{ if template.account/watched }}}active{{{ end }}}
{{{ if template.account/ignored }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:topics]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.topics}">{humanReadableNumber(counts.topics)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/shares" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/shares }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:shares]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.shares}">{humanReadableNumber(counts.shares)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/groups" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/groups }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:header.groups]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.groups}">{humanReadableNumber(counts.groups)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/followers" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/followers }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:followers]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.followers}">{humanReadableNumber(counts.followers)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/following" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/following }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:following]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.following}">{humanReadableNumber(counts.following)}</span>
</a>
{{{ if canEdit }}}
<a href="{config.relative_path}/user/{userslug}/categories" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/categories }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:watched-categories]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.categoriesWatched}">{counts.categoriesWatched}</span>
</a>
{{{ if isSelf }}}
<a href="{config.relative_path}/user/{userslug}/tags" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/tags }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:watched-tags]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.tagsWatched}">{counts.tagsWatched}</span>
</a>
{{{ end }}}
<a href="{config.relative_path}/user/{userslug}/blocks" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/blocks }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:blocked-users]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.blocks}">{humanReadableNumber(counts.blocks)}</span>
</a>
<a href="{config.relative_path}/user/{userslug}/uploads" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
{{{ if template.account/uploads }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:uploads]]</div>
<span class="flex-shrink-0 text-xs" title="{counts.uploaded}">{humanReadableNumber(counts.uploaded)}</span>
</a>
{{{ end }}}
{{{ if remoteUrl }}}
<hr class="w-100 my-2"/>
<a href="{remoteUrl}" target="_self" component="account/view-remote" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start">
<i class="flex-shrink-0 fa-solid fa-globe"></i>
<div class="flex-grow-1 text-nowrap">[[user:view-remote]]</div>
</a>
{{{ end }}}
{{{ if (loggedIn && (!isSelf && !banned)) }}}
<hr class="w-100 my-2"/>
<a href="#" component="account/flag" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{if flagId }}}hidden{{{end}}}">
<i class="flex-shrink-0 fa-solid fa-flag text-danger"></i>
<div class="flex-grow-1 text-nowrap">[[user:flag-profile]]</div>
</a>
<a href="#" component="account/already-flagged" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{if !flagId }}}hidden{{{end}}}" data-flag-id="{flagId}">
<i class="flex-shrink-0 fa-solid fa-flag text-danger"></i>
<div class="flex-grow-1 text-nowrap">[[user:profile-flagged]]</div>
</a>
<a href="#" component="account/block" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{ if isBlocked }}}hidden{{{ end }}}">
<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
<div class="flex-grow-1 text-nowrap">[[user:block-user]]</div>
</a>
<a href="#" component="account/unblock" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{ if !isBlocked }}}hidden{{{ end }}}">
<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
<div class="flex-grow-1 text-nowrap">[[user:unblock-user]]</div>
</a>
{{{ end }}}
{{{ if canEdit }}}
<hr class="w-100 my-2"/>
<a href="{config.relative_path}/user/{userslug}/edit" class="btn btn-ghost btn-sm ff-secondary text-xs text-start
{{{ if template.account/edit }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:edit-profile]]</div>
</a>
<a href="{config.relative_path}/user/{userslug}/settings" class="btn btn-ghost btn-sm ff-secondary text-xs text-start
{{{ if template.account/settings }}}active{{{ end }}}">
<div class="flex-grow-1">[[user:settings]]</div>
</a>
{{{ end }}}
{{{ each profile_links }}}
<a href="{config.relative_path}/user/{userslug}/{./route}" class="btn btn-ghost btn-sm ff-secondary text-xs text-start plugin-link {{{ if ./public }}}public{{{ else }}}private{{{ end }}} {{{ if (url == ./url) }}}active{{{ end }}}" id="{./id}">
<div class="flex-grow-1">{./name}</div>
</a>
{{{end}}}
</div>
</div>
<div class="account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4" style="min-width: 0;">
<div class="d-flex justify-content-between align-items-center mb-3">
<div class="d-flex gap-1">
<h3 class="fw-semibold fs-5">[[pages:account/shares, {username}]]</h3>
</div>
</div>
{{{ if !topics.length }}}
<div class="alert alert-warning text-center">{noItemsFoundKey}</div>
{{{ end }}}
<div class="category">
<ul component="category" class="topics-list list-unstyled" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">
{{{ each topics }}}
<li component="category/topic" class="category-item hover-parent border-bottom py-3 py-lg-4 d-flex flex-column flex-lg-row align-items-start {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<link itemprop="url" content="{config.relative_path}/topic/{./slug}" />
<meta itemprop="name" content="{function.stripTags, ./title}" />
<meta itemprop="itemListOrder" content="descending" />
<meta itemprop="position" content="{increment(./index, "1")}" />
<a id="{./index}" data-index="{./index}" component="topic/anchor"></a>
<div class="d-flex p-0 col-12 col-lg-7 gap-2 gap-lg-3 pe-1 align-items-start {{{ if config.theme.mobileTopicTeasers }}}mb-2 mb-lg-0{{{ end }}}">
<div class="flex-shrink-0 position-relative">
<a class="d-inline-block text-decoration-none avatar-tooltip" title="{./user.displayname}" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
{buildAvatar(./user, "40px", true)}
</a>
{{{ if showSelect }}}
<div class="checkbox position-absolute top-100 start-50 translate-middle-x pt-2 m-0 d-none d-lg-flex" style="max-width:max-content">
<i component="topic/select" class="fa text-muted pointer fa-square-o p-1 hover-visible"></i>
</div>
{{{ end }}}
</div>
<div class="flex-grow-1 d-flex flex-wrap gap-1 position-relative">
<h3 component="topic/header" class="title text-break fs-5 fw-semibold m-0 tracking-tight w-100 {{{ if showSelect }}}me-4 me-lg-0{{{ end }}}">
<a class="text-reset" href="{{{ if topics.noAnchor }}}#{{{ else }}}{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}{{{ end }}}">{./title}</a>
</h3>
<span component="topic/labels" class="d-flex flex-wrap gap-1 w-100">
<span component="topic/watched" class="badge border border-gray-300 text-body {{{ if !./followed }}}hidden{{{ end }}}">
<i class="fa fa-bell-o"></i>
<span>[[topic:watching]]</span>
</span>
<span component="topic/ignored" class="badge border border-gray-300 text-body {{{ if !./ignored }}}hidden{{{ end }}}">
<i class="fa fa-eye-slash"></i>
<span>[[topic:ignoring]]</span>
</span>
<span component="topic/scheduled" class="badge border border-gray-300 text-body {{{ if !./scheduled }}}hidden{{{ end }}}">
<i class="fa fa-clock-o"></i>
<span>[[topic:scheduled]]</span>
</span>
<span component="topic/pinned" class="badge border border-gray-300 text-body {{{ if (./scheduled || !./pinned) }}}hidden{{{ end }}}">
<i class="fa fa-thumb-tack"></i>
<span>{{{ if !./pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {isoTimeToLocaleString(./pinExpiryISO, config.userLang)}]]{{{ end }}}</span>
</span>
<span component="topic/locked" class="badge border border-gray-300 text-body {{{ if !./locked }}}hidden{{{ end }}}">
<i class="fa fa-lock"></i>
<span>[[topic:locked]]</span>
</span>
<span component="topic/moved" class="badge border border-gray-300 text-body {{{ if (!./oldCid || (./oldCid == "-1")) }}}hidden{{{ end }}}">
<i class="fa fa-arrow-circle-right"></i>
<span>[[topic:moved]]</span>
</span>
{{{each ./icons}}}<span class="lh-1">{@value}</span>{{{end}}}
{{{ if !template.category }}}
{buildCategoryLabel(./category, "a", "border")}
{{{ end }}}
<span data-tid="{./tid}" component="topic/tags" class="lh-1 tag-list d-flex flex-wrap gap-1 {{{ if !./tags.length }}}hidden{{{ end }}}">
{{{ each ./tags }}}
<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 fw-normal tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
{{{ end }}}
</span>
<div class="d-flex gap-1 d-block d-lg-none w-100">
<span class="badge text-body border stats text-xs text-muted">
<i class="fa-regular fa-fw fa-message"></i>
<span component="topic/post-count" class="fw-normal">{humanReadableNumber(./postcount, 0)}</span>
</span>
<a href="{config.relative_path}/topic/{./slug}{{{ if (./teaser.timestampISO && !config.theme.mobileTopicTeasers) }}}/{./teaser.index}{{{ end }}}" class="border badge bg-transparent text-muted fw-normal timeago" title="{{{ if (./teaser.timestampISO && !config.theme.mobileTopicTeasers) }}}{./teaser.timestampISO}{{{ else }}}{./timestampISO}{{{ end }}}"></a>
</div>
<a href="{config.relative_path}/topic/{./slug}" class="d-none d-lg-block badge bg-transparent text-muted fw-normal timeago" title="{./timestampISO}"></a>
</span>
{{{ if showSelect }}}
<div class="checkbox position-absolute top-0 end-0 m-0 d-flex d-lg-none" style="max-width:max-content">
<i component="topic/select" class="fa fa-square-o text-muted pointer p-1"></i>
</div>
{{{ end }}}
</div>
{{{ if ./thumbs.length }}}
<a class="topic-thumbs position-relative text-decoration-none flex-shrink-0 d-none d-xl-block" href="{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}" aria-label="[[topic:thumb-image]]">
<img class="topic-thumb rounded-1 bg-light" style="width:auto;max-width: 5.33rem;height: 3.33rem;object-fit: contain;" src="{./thumbs.0.url}" alt=""/>
<span data-numthumbs="{./thumbs.length}" class="px-1 position-absolute bottom-0 end-0 badge rounded-0 border fw-semibold text-bg-light" style="z-index: 1; border-top-left-radius: 0.25rem!important; border-bottom-right-radius: 0.25rem!important;">{./thumbs.length}</span>
</a>
{{{ end }}}
</div>
<div class="d-flex p-0 col-lg-5 col-12 align-content-stretch">
<div class="meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted" style="grid-template-columns: 1fr 1fr 1fr;">
{{{ if !reputation:disabled }}}
<div class="stats-votes card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
<span class="fs-5 ff-secondary lh-1" title="{./votes}">{humanReadableNumber(./votes, 0)}</span>
<span class="d-none d-xl-flex text-lowercase text-xs">[[global:votes]]</span>
<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-chevron-up"></i>
</div>
{{{ end }}}
<div class="stats-postcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
<span class="fs-5 ff-secondary lh-1" title="{./postcount}">{humanReadableNumber(./postcount, 0)}</span>
<span class="d-none d-xl-flex text-lowercase text-xs">[[global:posts]]</span>
<i class="d-xl-none fa-regular fa-fw text-xs text-muted opacity-75 fa-message"></i>
</div>
<div class="stats-viewcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
<span class="fs-5 ff-secondary lh-1" title="{./viewcount}">{humanReadableNumber(./viewcount, 0)}</span>
<span class="d-none d-xl-flex text-lowercase text-xs">[[global:views]]</span>
<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-eye"></i>
</div>
</div>
<div component="topic/teaser" class="meta teaser ps-5 ps-lg-0 col-lg-6 col-12 {{{ if !config.theme.mobileTopicTeasers }}}d-none d-lg-block{{{ end }}}">
<div class="lastpost border-start border-2 lh-sm h-100 d-flex flex-column gap-1" style="border-color: {./category.bgColor}!important;">
{{{ if ./unreplied }}}
<div class="ps-2 text-xs">
[[category:no-replies]]
</div>
{{{ else }}}
{{{ if ./teaser.pid }}}
<div class="ps-2">
<a href="{{{ if ./teaser.user.userslug }}}{config.relative_path}/user/{./teaser.user.userslug}{{{ else }}}#{{{ end }}}" class="text-decoration-none avatar-tooltip" title="{./teaser.user.displayname}">{buildAvatar(./teaser.user, "18px", true)}</a>
<a class="permalink text-muted timeago text-xs" href="{config.relative_path}/topic/{./slug}/{./teaser.index}" title="{./teaser.timestampISO}" aria-label="[[global:lastpost]]"></a>
</div>
<div class="post-content text-xs ps-2 line-clamp-sm-2 lh-sm text-break position-relative flex-fill">
<a class="stretched-link" tabindex="-1" href="{config.relative_path}/topic/{./slug}/{./teaser.index}" aria-label="[[global:lastpost]]"></a>
{./teaser.content}
</div>
{{{ end }}}
{{{ end }}}
</div>
</div>
</div>
</li>
{{{end}}}
</ul>
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
</div>
</div>
</div>