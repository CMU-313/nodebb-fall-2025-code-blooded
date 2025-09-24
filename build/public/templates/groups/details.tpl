<div component="groups/container" class="groups details flex-fill">
<div class="cover position-absolute start-0 top-0" component="groups/cover" style="background-image: url({group.cover:url}); background-position: {group.cover:position};">
<div class="container">
{{{ if group.isOwner }}}
<div class="controls text-center">
<span class="upload p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-upload"></i></span>
<span class="resize p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-arrows"></i></span>
<span class="remove p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-times"></i></span>
</div>
<div class="save text-bg-primary">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
<div class="indicator text-bg-primary">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
{{{ end }}}
</div>
</div>
<div class="d-flex flex-column flex-md-row justify-content-md-between pb-4 mb-4 mt-2 border-bottom">
<div class="d-flex flex-column mt-1">
<div class="d-flex align-items-center gap-2">
<h3 class="mb-0">{group.displayName}</h3>
</div>
<div class="d-flex gap-2">
{group.descriptionParsed}
<div>
{{{ if group.private }}}<span class="badge text-bg-light border border-1">[[groups:details.private]]</span>{{{ end }}}
{{{ if group.hidden }}}<span class="badge text-bg-light border border-1">[[groups:details.hidden]]</span>{{{ end }}}
</div>
</div>
</div>
<div class="d-flex gap-2 align-items-start">
{{{ if loggedIn }}}
{function.membershipBtn, group}
{{{ end }}}
{{{ if isAdmin }}}
<a href="{config.relative_path}/admin/manage/groups/{group.slug}" target="_blank" class="btn btn-light"><i class="fa fa-gear"></i> [[user:edit]]</a>
{{{ end }}}
</div>
</div>
<div class="d-flex flex-column flex-md-row">
<div data-widget-area="left">
{{{each widgets.left}}}
{{widgets.left.html}}
{{{end}}}
</div>
<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
<div class="nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1" style="top: 1rem; z-index: 1;">
<button data-bs-toggle="tab" data-bs-target="#groups-posts" class="btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold {{{ if template.groups/details }}}active{{{ end }}}">
<div class="flex-grow-1">[[global:posts]]</div>
</button>
<button data-bs-toggle="tab" data-bs-target="#groups-members" class="btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2">
<div class="flex-grow-1">[[groups:members]]</div>
<span component="group/member/count" class="flex-shrink-0 text-xs lh-1" title="{group.memberCount}">{humanReadableNumber(group.memberCount)}</span>
</button>
{{{ if group.isOwner }}}
<button data-bs-toggle="tab" data-bs-target="#groups-pending" class="btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2">
<div class="flex-grow-1">[[groups:details.pending]]</div>
<span component="group/pending/count" class="flex-shrink-0 text-xs lh-1" title="{group.pending.length}">{humanReadableNumber(group.pending.length)}</span>
</button>
<button data-bs-toggle="tab" data-bs-target="#groups-invited" class="btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2">
<div class="flex-grow-1">[[groups:details.invited]]</div>
<span component="group/invited/count" class="flex-shrink-0 text-xs lh-1" title="{group.invited.length}">{humanReadableNumber(group.invited.length)}</span>
</button>
<button data-bs-toggle="tab" data-bs-target="#groups-admin" class="btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold">
<div class="flex-grow-1">[[global:header.admin]]</div>
</button>
{{{ end }}}
</div>
</div>
<div class="flex-grow-1 ps-md-2 ps-lg-5" style="min-width:0;">
<div class="tab-content">
<div class="tab-pane fade show active" id="groups-posts" role="tabpanel">
<h3 class="fw-semibold fs-5 mb-0">[[global:posts]]</h3>
{{{ if !posts.length }}}
<div class="alert alert-info my-2">[[groups:details.has-no-posts]]</div>
{{{ end }}}
<ul component="posts" class="posts-list list-unstyled" data-nextstart="{nextStart}">
{{{ each posts }}}
<li component="post" class="posts-list-item  {{{ if ./deleted }}} deleted{{{ else }}}{{{ if ./topic.deleted }}} deleted{{{ end }}}{{{ end }}}{{{ if ./topic.scheduled }}} scheduled{{{ end }}}" data-pid="{./pid}" data-uid="{./uid}">
<hr/>
<a class="topic-title fw-semibold fs-5 mb-2 text-reset text-break d-block" href="{config.relative_path}/post/{encodeURIComponent(./pid)}">
{{{ if ./isMainPost }}}<i class="fa fa-book text-muted" title="[[topic:topic]]"></i> {{{ end }}}{./topic.title}
</a>
<div class="post-body d-flex flex-column gap-1 mb-2">
<div class="d-flex gap-2 post-info text-sm align-items-center">
<div class="post-author d-flex align-items-center gap-1">
<a class="lh-1 text-decoration-none" href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(./user, "16px", true, "not-responsive")}</a>
<a class="lh-1 fw-semibold" href="{config.relative_path}/user/{./user.userslug}">{../user.displayname}</a>
</div>
<span class="timeago text-muted lh-1" title="{./timestampISO}"></span>
</div>
<div component="post/content" class="content text-sm text-break">
{./content}
</div>
</div>
<div class="mb-3 d-flex flex-wrap gap-1 w-100">
{buildCategoryLabel(./category, "a", "border")}
<span data-tid="{./topic.tid}" component="topic/tags" class="lh-1 tag-list d-flex flex-wrap gap-1 {{{ if !./topic.tags.length }}}hidden{{{ end }}}">
{{{ each ./topic.tags }}}
<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 fw-normal tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
{{{ end }}}
</span>
</div>
</li>
{{{ end }}}
</ul>
<div component="posts/loading" class="loading-indicator text-center hidden">
<i class="fa fa-refresh fa-spin"></i>
</div>
</div>
<div class="tab-pane fade" id="groups-members" role="tabpanel">
<h3 class="fw-semibold fs-5 mb-3">[[groups:details.members]]</h3>
<div class="d-flex {{{ if group.isOwner }}}justify-content-between{{{ else }}}justify-content-end{{{ end }}} mb-3">
{{{ if isAdmin }}}
<div class="flex-shrink-0">
<button component="groups/members/add" type="button" class="btn btn-primary btn-sm me-3" title="[[groups:details.add-member]]"><i class="fa fa-user-plus"></i> [[groups:details.add-member]]</button>
</div>
{{{ end }}}
<div>
<div class="input-group">
<input class="form-control form-control-sm" type="text" component="groups/members/search" placeholder="[[global:search]]"/>
<button class="btn btn-primary btn-sm search-button" type="button">
<i class="fa fa-search"></i>
</button>
</div>
</div>
</div>
<div component="groups/members" data-nextstart="{group.membersNextStart}" class="mb-5" style="max-height: 500px; overflow: auto;">
<table class="table table-hover">
<tbody>
{{{each group.members}}}
<tr class="w-100" data-uid="{group.members.uid}" data-isowner="{{{ if group.members.isOwner }}}1{{{ else }}}0{{{ end }}}">
<td class="member-name p-2 w-100 ">
<div class="d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center gap-2">
<a class="text-decoration-none" href="{config.relative_path}/user/{group.members.userslug}">{buildAvatar(group.members, "24px", true)}</a>
<a class="align-text-top" href="{config.relative_path}/user/{group.members.userslug}">{group.members.username}</a>
<i component="groups/owner/icon" title="[[groups:owner]]" class="user-owner-icon fa fa-star align-text-top text-warning {{{ if !group.members.isOwner }}}invisible{{{ end }}}"></i>
</div>
{{{ if group.isOwner }}}
<div class="owner-controls d-flex gap-1">
<a class="btn btn-light btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">
<i class="fa fa-star text-warning"></i>
</a>
<a class="btn btn-light btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">
<i class="fa fa-ban text-danger"></i>
</a>
</div>
{{{ end }}}
</div>
</td>
</tr>
{{{end}}}
</tbody>
</table>
</div>
</div>
{{{ if group.isOwner }}}
<div class="tab-pane fade" id="groups-pending" role="tabpanel">
<h3 class="fw-semibold fs-5 mb-3">[[groups:details.pending]]</h3>
{{{ if group.pending.length }}}
<div class="d-flex justify-content-end gap-2 mb-3">
<button class="btn btn-danger btn-sm" data-action="rejectAll">[[groups:pending.reject-all]]</button>
<button class="btn btn-success btn-sm" data-action="acceptAll">[[groups:pending.accept-all]]</button>
</div>
{{{ end }}}
<div style="max-height: 500px;overflow: auto;">
<div component="groups/pending/alert" class="alert alert-info {{{ if group.pending.length }}}hidden{{{ end }}}">[[groups:pending.none]]</div>
<table component="groups/pending" class="table table-hover">
<tbody>
{{{ each group.pending }}}
<tr data-uid="{group.pending.uid}" class="align-middle">
<td class="member-name p-2 d-flex align-items-center justify-content-between">
<div class="d-flex gap-2">
<a class="text-decoration-none" href="{config.relative_path}/user/{group.pending.userslug}">{buildAvatar(group.pending, "24px", true)}</a>
<a href="{config.relative_path}/user/{group.pending.userslug}">{group.pending.username}</a>
</div>
<div class="d-flex gap-2">
<button class="btn btn-danger btn-sm" data-action="reject">[[groups:pending.reject]]</a></li>
<button class="btn btn-success btn-sm" data-action="accept">[[groups:pending.accept]]</a></li>
</div>
</td>
</tr>
{{{ end }}}
</tbody>
</table>
</div>
</div>
<div class="tab-pane fade" id="groups-invited" role="tabpanel">
<h3 class="fw-semibold fs-5 mb-3">[[groups:details.invited]]</h3>
<label class="text-xs text-muted">[[groups:invited.search]]</label>
<div class="input-group mb-2">
<input class="form-control" type="text" component="groups/members/invite"/>
<span class="input-group-text search-button"><i class="fa fa-search"></i></span>
</div>
<div class="mb-2">
<label class="text-xs text-muted">[[groups:bulk-invite-instructions]]</label>
<textarea class="form-control" component="groups/members/bulk-invite"></textarea>
</div>
<div class="mb-2 clearfix">
<button type="button" class="btn btn-primary btn-sm float-end" component="groups/members/bulk-invite-button">[[groups:bulk-invite]]</button>
</div>
<div style="max-height: 500px; overflow: auto;">
<div component="groups/invited/alert" class="alert alert-info {{{ if group.invited.length }}}hidden{{{ end }}}">[[groups:invited.none]]</div>
<table component="groups/invited" class="table table-hover">
<tbody>
{{{ each group.invited }}}
<tr data-uid="{group.invited.uid}" class="align-middle">
<td class="member-name p-2 d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center gap-2">
<a class="text-decoration-none" href="{config.relative_path}/user/{group.invited.userslug}">{buildAvatar(group.invited, "24px", true)}</a>
<a href="{config.relative_path}/user/{group.invited.userslug}">{group.invited.username}</a>
</div>
<button class="btn btn-outline-secondary btn-sm text-nowrap" data-action="rescindInvite">[[groups:invited.uninvite]]</button>
</td>
</tr>
{{{ end }}}
</tbody>
</table>
</div>
</div>
<div class="tab-pane fade" id="groups-admin" role="tabpanel">
<h3 class="fw-semibold fs-5 mb-3">[[groups:details.owner-options]]</h3>
<div class="options">
<form component="groups/settings" role="form">
<div class="row">
<div class="col-12 col-lg-6">
<div class="mb-3">
<label class="form-label" for="name">[[groups:details.group-name]]</label>
<input {{{ if group.system }}}readonly{{{ end }}} class="form-control" name="name" id="name" type="text" value="{group.displayName}" />
</div>
<div class="mb-3">
<label class="form-label" for="description">[[groups:details.description]]</label>
<textarea class="form-control" name="description" id="description" type="text" maxlength="255">{group.description}</textarea>
</div>
<div class="form-check">
<label class="form-check-label" for="private">[[groups:details.private]]</label>
<input class="form-check-input" name="private" id="private" type="checkbox"{{{ if group.private }}} checked{{{ end }}}>
{{{ if !allowPrivateGroups }}}
<p class="form-text">
[[groups:details.private-system-help]]
</p>
{{{ end }}}
<p class="form-text text-xs m-0">
[[groups:details.private-help]]
</p>
</div>
<div class="form-check">
<label class="form-check-label" for="hidden">[[groups:details.hidden]]</label>
<input class="form-check-input" name="hidden" id="hidden" type="checkbox"{{{ if group.hidden }}} checked{{{ end }}}>
<p class="form-text text-xs m-0">
[[groups:details.hidden-help]]
</p>
</div>
<div class="form-check">
<label class="form-check-label" for="disableJoinRequests">[[groups:details.disableJoinRequests]]</label>
<input class="form-check-input" name="disableJoinRequests" id="disableJoinRequests" type="checkbox"{{{ if group.disableJoinRequests }}} checked{{{ end }}}>
</div>
<div class="form-check">
<label class="form-check-label" for="disableLeave">[[groups:details.disableLeave]]</label>
<input class="form-check-input" name="disableLeave" id="disableLeave" type="checkbox"{{{if group.disableLeave}}} checked{{{end}}}>
</div>
</div>
<div class="col-12 col-lg-6">
<div class="d-flex gap-2 align-items-center">
<div class="form-check">
<label class="form-check-label" for="userTitleEnabled">[[groups:details.userTitleEnabled]]</label>
<input class="form-check-input" name="userTitleEnabled" id="userTitleEnabled" type="checkbox"{{{ if group.userTitleEnabled }}} checked{{{ end }}}>
</div>
<span class="badge rounded-1 text-uppercase text-truncate rounded-1 {{{ if !group.userTitleEnabled }}} hide{{{ end }}}" style="max-width:150px; color: {group.textColor}; background-color: {group.labelColor}"><i class="fa {{{ if group.icon }}} {group.icon}{{{ if group.userTitle}}} me-1{{{ end }}}{{{ end }}}"></i><span class="badge-text">{{{ if group.userTitle }}}{group.userTitle}{{{ end }}}</span></span>
</div>
<div class="mb-2">
<label class="form-label text-xs text-muted" for="userTitle">[[groups:details.badge-text]]</label>
<div class="d-flex gap-1">
<input component="groups/userTitleOption" class="form-control" name="userTitle" id="userTitle" type="text" maxlength="40" value="{group.userTitleEscaped}"{{{ if !group.userTitleEnabled }}} disabled{{{ end }}} />
<button component="groups/userTitleOption" type="button" class="btn btn-outline-secondary text-nowrap" data-action="icon-select"{{{ if !group.userTitleEnabled }}} disabled{{{ end }}}>[[groups:details.change-icon]]</button>
<input type="hidden" name="icon" value="{{{ if group.icon }}}{group.icon}{{{ end }}}" />
<div id="icons" class="hidden">
<div class="icon-container">
<div class="row nbb-fa-icons">
<div class="icon-container">
<div class="form-group">
<label class="form-label" for="fa-filter">Type to search for icons</label>
<input type="text" class="form-control" id="fa-filter" data-action="filter" placeholder="e.g. umbrella" />
</div>
<div class="d-flex nbb-fa-icons flex-wrap">
{{{ each icons }}}
<i class="fa fa-xl fa-{icons.style} fa-{icons.id} rounded-1"></i>
{{{ end }}}
</div>
<p class="form-text text-center">
For a full list of icons, please consult:
<a href="https://fontawesome.com/v6/icons/">FontAwesome</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="mb-2">
<label class="form-label text-xs text-muted" for="labelColor" class="badge-color-label">[[groups:details.change-label-colour]]</label>
<input class="form-control" component="groups/userTitleOption" type="color" name="labelColor" id="labelColor" value="{{{ if group.labelColor }}}{group.labelColor}{{{ end }}}" />
</div>
<div class="mb-2">
<label class="form-label text-xs text-muted" for="textColor" class="badge-color-label">[[groups:details.change-text-colour]]</label>
<input class="form-control" component="groups/userTitleOption" type="color" name="textColor" id="textColor" value="{{{ if group.textColor }}}{group.textColor}{{{ end }}}" />
</div>
</div>
</div>
<hr />
<div class="mb-3">
<label class="form-label" for="memberPostCids">[[groups:details.member-post-cids]]</label>
<div class="d-flex gap-1">
<div class="member-post-cids-selector">
<div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span component="category-selector-selected">
{{{ if (selectedCategory && !showCategorySelectLabel) }}}
<span class="category-item d-inline-flex align-items-center gap-1">
{buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
<span class="fw-semibold">{selectedCategory.name}</span>
</span>
{{{ else }}}
<i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}} text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread-tools.select-category]]{{{ end }}}</span>
{{{ end }}}
</span>
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
<li component="category/no-matches" role="presentation" class="category hidden">
<a class="dropdown-item rounded-1" role="menuitem">[[search:no-matches]]</a>
</li>
{{{ each categoryItems }}}
<li role="presentation" class="category {{{ if ./disabledClass }}}disabled {{{ end }}}" data-cid="{./cid}" data-name="{./name}" data-parent-cid="{./parentCid}">
<a class="dropdown-item rounded-1 {{{ if ./disabledClass }}}disabled{{{ end }}}" role="menuitem" href="#">{./level}
<span component="category-markup" style="{{{ if ./match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-flex align-items-center gap-1">
{{{ if ./icon }}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
</a>
</li>
{{{ end }}}
</ul>
</div>
</div>
</div>
<input id="memberPostCids" type="text" class="form-control form-control-sm" value="{group.memberPostCids}">
</div>
</div>
<div class="d-flex justify-content-end gap-2">
<button class="btn btn-link text-danger" type="button" data-action="delete">[[groups:details.delete-group]]</button>
<button class="btn btn-primary" type="button" data-action="update">[[global:save-changes]]</button>
</div>
</form>
</div>
</div>
{{{ end }}}
</div>
</div>
<div data-widget-area="right">
{{{each widgets.right}}}
{{widgets.right.html}}
{{{end}}}
</div>
</div>
</div>