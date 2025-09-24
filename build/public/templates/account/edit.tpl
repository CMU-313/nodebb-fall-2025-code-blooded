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
<div class="d-flex justify-content-between py-1 mb-3 align-items-center position-sticky top-0 bg-body z-1">
<h3 class="fw-semibold fs-5 mb-0">{{{ if isSelf }}}[[user:edit-profile]]{{{ else }}}[[pages:account/edit, {username}]]{{{ end }}}</h3>
<button id="submitBtn" class="btn btn-sm btn-primary">[[global:save-changes]]</button>
</div>
<div class="row">
<div class="col-xl-6 col-12">
<form role="form" component="profile/edit/form">
<div class="mb-3">
<label class="form-label fw-bold" for="fullname">[[user:fullname]]</label>
<input class="form-control" type="text" id="fullname" name="fullname" placeholder="[[user:fullname]]" value="{fullname}">
</div>
<div class="mb-3">
<label class="form-label fw-bold" for="birthday">[[user:birthday]]</label>
<input class="form-control" type="date" id="birthday" name="birthday" value="{birthday}" placeholder="mm/dd/yyyy">
</div>
{{{ each customUserFields }}}
<div class="mb-3">
<label class="form-label fw-bold" for="{./key}">{./name}</label>
{{{ if ((./type == "input-text") || (./type == "input-link")) }}}
<input class="form-control" type="text" id="{./key}" name="{./key}" value="{./value}">
{{{ end }}}
{{{ if (./type == "input-number") }}}
<input class="form-control" type="number" id="{./key}" name="{./key}" value="{./value}">
{{{ end }}}
{{{ if (./type == "input-date") }}}
<input class="form-control" type="date" id="{./key}" name="{./key}" value="{./value}">
{{{ end }}}
{{{ if ((./type == "select") || (./type == "select-multi")) }}}
<select class="form-select" id="{./key}" name="{./key}" {{{ if (./type == "select-multi") }}} multiple{{{ end }}}>
{{{ each ./select-options}}}
<option value="{./value}" {{{ if ./selected }}}selected{{{ end }}}>{./value}</option>
{{{ end }}}
</select>
{{{ end }}}
</div>
{{{ end }}}
{{{ if groups.length }}}
<div class="mb-3">
<label class="form-label fw-bold" for="groupTitle">[[user:grouptitle]]</label>
<div class="d-flex flex-column gap-2" component="group/badge/list">
{{{ each groups }}}
<div component="group/badge/item" class="d-flex gap-2 justify-content-between align-items-center" data-value="{./displayName}" data-selected="{./selected}">
<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
<div class="d-flex gap-1">
<button component="group/toggle/hide" type="button" class="btn btn-ghost btn-sm {{{ if !./selected }}}hidden{{{ end }}}" title="[[user:hide-group-title]]"><i class="fa fa-fw fa-eye"></i></button>
<button component="group/toggle/show" type="button" class="btn btn-ghost btn-sm {{{ if ./selected }}}hidden{{{ end }}}" title="[[user:show-group-title]]"><i class="fa fa-fw fa-eye-slash"></i></button>
{{{ if allowMultipleBadges }}}
<button component="group/order/up" type="button" class="btn btn-ghost btn-sm" title="[[user:order-group-up]]"><i class="fa fa-fw fa-chevron-up"></i></button>
<button component="group/order/down" type="button" class="btn btn-ghost btn-sm" title="[[user:order-group-down]]"><i class="fa fa-fw fa-chevron-down"></i></button>
{{{ end }}}
</div>
</div>
{{{ end }}}
</div>
</div>
{{{ end }}}
{{{ if allowAboutMe }}}
<div class="mb-3">
<label class="form-label fw-bold" for="aboutme">[[user:aboutme]]</label> <small><label id="aboutMeCharCountLeft"></label></small>
<textarea class="form-control" id="aboutme" name="aboutme" rows="5">{aboutme}</textarea>
</div>
{{{ end }}}
{{{ if (allowSignature && !disableSignatures) }}}
<div class="mb-3">
<label class="form-label fw-bold" for="signature">[[user:signature]]</label> <small><label id="signatureCharCountLeft"></label></small>
<textarea class="form-control" id="signature" name="signature" rows="5">{signature}</textarea>
</div>
{{{ end }}}
</form>
<hr class="visible-xs visible-sm"/>
</div>
<div class="col-xl-6 col-12">
<div class="text-center">
<ul class="list-group mb-3 text-sm text-nowrap">
{{{ if allowProfilePicture }}}
<li class="list-group-item"><a component="profile/change/picture" href="#" class="text-decoration-none text-reset">[[user:change-picture]]</a></li>
{{{ end }}}
{{{ if !username:disableEdit }}}
<li class="list-group-item"><a href="{config.relative_path}/user/{userslug}/edit/username" class="text-decoration-none text-reset">[[user:change-username]]</a></li>
{{{ end }}}
{{{ if !email:disableEdit }}}
<li class="list-group-item"><a href="{config.relative_path}/user/{userslug}/edit/email" class="text-decoration-none text-reset">[[user:change-email]]</a></li>
{{{ end }}}
{{{ if canChangePassword }}}
<li class="list-group-item"><a href="{config.relative_path}/user/{userslug}/edit/password" class="text-decoration-none text-reset">[[user:change-password]]</a></li>
{{{ end }}}
{{{ each editButtons }}}
<li class="list-group-item"><a href="{config.relative_path}{./link}" class="text-decoration-none text-reset">{./text}</a></li>
{{{ end }}}
</ul>
{{{ if config.requireEmailConfirmation }}}
{{{ if (email && isSelf) }}}
<a id="confirm-email" href="#" class="btn btn-warning {{{ if email:confirmed }}}hide{{{ end }}}">[[user:confirm-email]]</a><br/><br/>
{{{ end }}}
{{{ end }}}
</div>
{{{ if sso.length }}}
<label class="form-label text-sm fw-semibold">[[user:sso.title]]</label>
<div class="list-group">
{{{ each sso }}}
<div class="list-group-item d-flex align-items-center justify-content-between">
<a class="text-sm text-reset text-decoration-none" data-component="{./component}" href="{{{ if ./url }}}{./url}{{{ else }}}#{{{ end }}}" target="{{{ if ./associated }}}_blank{{{ else }}}_top{{{ end }}}">
{{{ if ./icon }}}<i class="fa {./icon}"></i>{{{ end }}}
{{{ if ./associated }}}[[user:sso.associated]]{{{ else }}}[[user:sso.not-associated]]{{{ end }}}
{./name}
</a>
{{{ if ./deauthUrl }}}
<a data-component="{./component}" class="btn btn-outline-secondary btn-sm" href="{./deauthUrl}">[[user:sso.dissociate]]</a>
{{{ end }}}
</div>
{{{ end }}}
</div>
{{{ end }}}
<hr/>
{{{ if (allowAccountDelete && isSelf) }}}
<div class="d-flex justify-content-center">
<button id="deleteAccountBtn" class="btn btn-danger">[[user:delete-account]]</button>
</div>
{{{ end }}}
</div>
</div>
</div>
</div>
</div>