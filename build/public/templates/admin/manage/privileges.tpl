<div class="d-flex flex-column gap-2 px-lg-4">
<div class="d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2">
<div class="">
<h4 class="fw-bold tracking-tight mb-0">[[admin/manage/privileges:manage-privileges]]</h4>
</div>
<div class="d-flex gap-1">
<button id="discard" class="btn btn-light btn-sm text-nowrap" type="button">
<i class="fa fa-rotate-left text-danger"></i> [[admin/manage/privileges:discard-changes]]
</button>
<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
</div>
</div>
<div class="row">
<div class="col-12">
<form role="form" class="category">
<div class="">
<p>
[[admin/manage/categories:privileges.description]]
</p>
<div class="lead mb-3">
[[admin/manage/categories:privileges.category-selector]]
<div component="category-selector" class="btn-group dropdown-left bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span component="category-selector-selected">
<span class="category-item d-inline-flex align-items-center gap-1">
{{{ if (selectedCategory && !showCategorySelectLabel) }}}
{buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
{selectedCategory.name}
{{{ else }}}
<i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}}"></i>
{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread-tools.select-category]]{{{ end }}}
{{{ end }}}
</span>
</span> <span class="caret"></span>
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu" role="menu">
<li component="category/no-matches" role="presentation" class="category hidden">
<a class="dropdown-item rounded-1" role="menu-item">[[search:no-matches]]</a>
</li>
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ./disabledClass }}}disabled {{{ end }}}" data-cid="{./cid}" data-name="{./name}" data-parent-cid="{./parentCid}">
<a href="#" class="dropdown-item rounded-1" role="menu-item">{./level}
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
<div class="privilege-table-container">
{{{ if cid }}}
<label>[[admin/manage/privileges:group-privileges]]</label>
<div class="table-responsive">
<table class="table privilege-table text-sm">
<thead>
<tr class="privilege-table-header">
<th class="privilege-filters" colspan="100">
<div component="privileges/groups/filters" class="btn-toolbar justify-content-end gap-1">
<button type="button" data-filter="viewing" class="btn btn-outline-secondary btn-sm">[[admin/manage/categories:privileges.section-viewing]]</button>
<button type="button" data-filter="posting" class="btn btn-outline-secondary btn-sm">[[admin/manage/categories:privileges.section-posting]]</button>
<button type="button" data-filter="moderation" class="btn btn-outline-secondary btn-sm">[[admin/manage/categories:privileges.section-moderation]]</button>
{{{ if privileges.columnCountGroupOther }}}
<button type="button" data-filter="other" class="btn btn-outline-secondary btn-sm">[[admin/manage/categories:privileges.section-other]]</button>
{{{ end }}}
</div>
</th>
</tr><tr><!-- zebrastripe reset --></tr>
<tr>
<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
<th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
{{{ each privileges.labelData }}}
<th class="text-center" data-type="{./type}">{./label}</th>
{{{ end }}}
</tr>
</thead>
<tbody>
{{{ each privileges.groups }}}
<tr data-group-name="{privileges.groups.nameEscaped}" data-private="{{{ if privileges.groups.isPrivate }}}1{{{ else }}}0{{{ end }}}">
<td>
{{{ if privileges.groups.isPrivate }}}
{{{ if (privileges.groups.name == "banned-users") }}}
<i class="fa fa-fw fa-exclamation-triangle text-muted" title="[[admin/manage/categories:privileges.inheritance-exception]]"></i>
{{{ else }}}
<i class="fa fa-fw fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
{{{ end }}}
{{{ else }}}
<i class="fa fa-fw fa-none"></i>
{{{ end }}}
{privileges.groups.name}
</td>
<td>
<div class="dropdown">
<button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
<i class="fa fa-copy"></i>
</button>
<ul class="dropdown-menu" role="menu">
<li data-action="copyToAllGroup"><a class="dropdown-item" href="#" role="menuitem">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>
<li data-action="copyToChildrenGroup"><a class="dropdown-item" href="#" role="menuitem">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>
<li data-action="copyPrivilegesFromGroup"><a class="dropdown-item" href="#" role="menuitem">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>
</ul>
</div>
</td>
<td class="">
<div class="form-check text-center">
<input autocomplete="off" type="checkbox" class="form-check-input float-none checkbox-helper">
</div>
</td>
{function.spawnPrivilegeStates, cid, privileges.groups.name, ../privileges, ../types}
</tr>
{{{ end }}}
</tbody>
<tfoot>
<tr>
<td colspan="3"></td>
<td colspan="{privileges.keys.groups.length}">
<div class="btn-toolbar justify-content-end gap-1 flex-nowrap">
<button type="button" class="btn btn-sm btn-outline-secondary text-nowrap" data-ajaxify="false" data-action="search.group">
<i class="fa fa-users"></i>
[[admin/manage/categories:privileges.search-group]]
</button>
<button type="button" class="btn btn-sm btn-outline-secondary text-nowrap" data-ajaxify="false" data-action="copyPrivilegesFrom">
<i class="fa fa-copy"></i>
[[admin/manage/categories:privileges.copy-from-category]]
</button>
<button type="button" class="btn btn-sm btn-outline-secondary text-nowrap" data-ajaxify="false" data-action="copyToChildren">
<i class="fa fa-copy"></i>
[[admin/manage/categories:privileges.copy-to-children]]
</button>
<button type="button" class="btn btn-sm btn-outline-secondary text-nowrap" data-ajaxify="false" data-action="copyToAll">
<i class="fa fa-copy"></i>
[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]
</button>
</div>
</td>
</tr>
</tfoot>
</table>
</div>
<div class="form-text">
[[admin/manage/categories:privileges.inherit]]
</div>
<hr/>
<label>[[admin/manage/privileges:user-privileges]]</label>
<div class="table-responsive">
<table class="table privilege-table text-sm">
<thead>
<tr class="privilege-table-header">
<th class="privilege-filters" colspan="100">
<div class="btn-toolbar justify-content-end gap-1 flex-nowrap">
<button type="button" data-filter="viewing" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-viewing]]</button>
<button type="button" data-filter="posting" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-posting]]</button>
<button type="button" data-filter="moderation" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-moderation]]</button>
{{{ if privileges.columnCountUserOther }}}
<button type="button" data-filter="other" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-other]]</button>
{{{ end }}}
</div>
</th>
</tr><tr><!-- zebrastripe reset --></tr>
<tr>
<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
<th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
{{{ each privileges.labelData }}}
<th class="text-center" data-type="{./type}">{./label}</th>
{{{ end }}}
</tr>
</thead>
<tbody>
{{{ each privileges.users }}}
<tr data-uid="{privileges.users.uid}"{{{ if privileges.users.banned }}} data-banned{{{ end }}}>
<td>
{buildAvatar(privileges.users, "24px", true)}
{{{ if privileges.users.banned }}}
<i class="ban fa fa-gavel text-danger" title="[[admin/manage/categories:privileges.banned-user-inheritance]]"></i>
{{{ end }}}
{privileges.users.username}
</td>
<td>
<!-- need this empty -->
</td>
<td class="">
<div class="form-check text-center">
<input autocomplete="off" type="checkbox" class="form-check-input float-none checkbox-helper">
</div>
</td>
{function.spawnPrivilegeStates, cid, privileges.users.username, ../privileges, ../types}
</tr>
{{{ end }}}
</tbody>
<tfoot>
<tr>
<td colspan="3"></td>
<td colspan="{privileges.keys.users.length}">
<div class="btn-toolbar justify-content-end">
<button type="button" class="btn btn-sm btn-outline-secondary" data-ajaxify="false" data-action="search.user">
<i class="fa fa-user"></i>
[[admin/manage/categories:privileges.search-user]]
</button>
</div>
</td>
</tr>
</tfoot>
</table>
</div>
{{{ else }}}
<label>[[admin/manage/privileges:group-privileges]]</label>
<div class="table-responsive">
<table class="table privilege-table text-sm">
<thead>
{{{ if !isAdminPriv }}}
<tr class="privilege-table-header">
<th class="privilege-filters" colspan="100">
<div component="privileges/groups/filters" class="btn-toolbar justify-content-end gap-1 flex-nowrap">
<button type="button" data-filter="viewing" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-viewing]]</button>
<button type="button" data-filter="posting" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-posting]]</button>
<button type="button" data-filter="moderation" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-moderation]]</button>
{{{ if privileges.columnCountGroupOther }}}
<button type="button" data-filter="other" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-other]]</button>
{{{ end }}}
</div>
</th>
</tr><tr><!-- zebrastripe reset --></tr>
{{{ end }}}
<tr>
<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
<th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
{{{ each privileges.labelData }}}
<th class="text-center" data-type="{./type}">{./label}</th>
{{{ end }}}
</tr>
</thead>
<tbody>
{{{ each privileges.groups }}}
<tr data-group-name="{privileges.groups.nameEscaped}" data-private="{{{ if privileges.groups.isPrivate }}}1{{{ else }}}0{{{ end }}}">
<td>
{{{ if privileges.groups.isPrivate }}}
{{{ if (privileges.groups.name == "banned-users") }}}
<i class="fa fa-fw fa-exclamation-triangle text-muted" title="[[admin/manage/categories:privileges.inheritance-exception]]"></i>
{{{ else }}}
<i class="fa fa-fw fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
{{{ end }}}
{{{ else }}}
<i class="fa fa-fw fa-none"></i>
{{{ end }}}
{privileges.groups.name}
</td>
<td></td>
<td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
{function.spawnPrivilegeStates, cid, privileges.groups.name, ../privileges, ../types}
</tr>
{{{ end }}}
</tbody>
<tfoot>
<tr>
<td colspan="3"></td>
<td colspan="{privileges.keys.groups.length}">
<div class="btn-toolbar justify-content-end">
<button type="button" class="btn btn-sm btn-outline-secondary" data-ajaxify="false" data-action="search.group">
<i class="fa fa-users"></i>
[[admin/manage/categories:privileges.search-group]]
</button>
</div>
</td>
</tr>
</tfoot>
</table>
</div>
<div class="form-text">
[[admin/manage/categories:privileges.inherit]]
</div>
<hr/>
<label>[[admin/manage/privileges:user-privileges]]</label>
<div class="table-responsive">
<table class="table privilege-table text-sm">
<thead>
{{{ if !isAdminPriv }}}
<tr class="privilege-table-header">
<th class="privilege-filters" colspan="100">
<div class="btn-toolbar justify-content-end gap-1 flex-nowrap">
<button type="button" data-filter="viewing" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-viewing]]</button>
<button type="button" data-filter="posting" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-posting]]</button>
<button type="button" data-filter="moderation" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-moderation]]</button>
{{{ if privileges.columnCountUserOther }}}
<button type="button" data-filter="other" class="btn btn-outline-secondary btn-sm text-nowrap">[[admin/manage/categories:privileges.section-other]]</button>
{{{ end }}}
</div>
</th>
</tr><tr><!-- zebrastripe reset --></tr>
{{{ end }}}
<tr>
<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
<th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
{{{ each privileges.labelData }}}
<th class="text-center" data-type="{./type}">{./label}</th>
{{{ end }}}
</tr>
</thead>
<tbody>
{{{ each privileges.users }}}
<tr data-uid="{privileges.users.uid}"{{{ if privileges.users.banned }}} data-banned{{{ end }}}>
<td>
{buildAvatar(privileges.users, "24px", true)}
{{{ if privileges.users.banned }}}
<i class="ban fa fa-gavel text-danger" title="[[admin/manage/categories:privileges.banned-user-inheritance]]"></i>
{{{ end }}}
{privileges.users.username}
</td>
<td>
<!-- need this empty -->
</td>
<td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
{function.spawnPrivilegeStates, cid, privileges.users.username, ../privileges, ../types}
</tr>
{{{ end }}}
</tbody>
<tfoot>
<tr>
<td colspan="3"></td>
<td colspan="{privileges.keys.users.length}">
<div class="btn-toolbar justify-content-end">
<button type="button" class="btn btn-sm btn-outline-secondary" data-ajaxify="false" data-action="search.user">
<i class="fa fa-user"></i>
[[admin/manage/categories:privileges.search-user]]
</button>
</div>
</td>
</tr>
</tfoot>
</table>
</div>
{{{ end }}}
</div>
</div>
</form>
</div>
</div>
</div>