<div class="acp-page-container">
<div class="row border-bottom py-2 m-0 mb-3 sticky-top acp-page-main-header align-items-center">
<div class="col-12 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center">
<h4 class="fw-bold tracking-tight mb-0">[[admin/manage/categories:federation.title, {name}]]</h4>
<div component="category-selector" class="btn-group dropdown-right category-dropdown-container bottom-sheet">
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
</div>
{{{ if !enabled }}}
<div class="alert alert-warning">
<p>[[admin/manage/categories:federation.disabled]]</p>
<a class="btn btn-primary" href="{config.relative_path}/admin/settings/activitypub">[[admin/manage/categories:federation.disabled-cta]]</a>
</div>
{{{ else }}}
<div class="row settings m-0">
<div class="col-12 col-md-8 px-0 mb-4" tabindex="0">
<div id="site-settings" class="mb-4">
<form role="form">
<h5 class="fw-bold settings-header">[[admin/manage/categories:federation.syncing-header]]</h5>
<p>[[admin/manage/categories:federation.syncing-intro]]</p>
<p class="form-text">[[admin/manage/categories:federation.syncing-caveat]]</p>
{{{ if !following.length }}}
<div class="alert alert-info">[[admin/manage/categories:federation.syncing-none]]</div>
{{{ else }}}
<table class="table">
<thead>
<tr>
<th>[[admin/manage/categories:federation.syncing-actorUri]]</th>
<th></th>
</tr>
</thead>
<tbody>
{{{ each following }}}
<tr>
<td>
<pre class="mb-0 mt-1">{./id}</pre>
{{{ if !./approved }}}
<span class="form-text text-warning">Pending</span>
{{{ end }}}
</td>
<td>
<button type="button" data-action="unfollow" data-actor="{./id}" class="btn btn-sm btn-danger">[[admin/manage/categories:federation.syncing-unfollow]]</button>
</td>
</tr>
{{{ end }}}
</tbody>
</table>
{{{ end }}}
<div class="mb-3">
<label class="form-label" for="syncing-add">[[admin/manage/categories:federation.syncing-add]]</label>
<div class="input-group">
<input id="syncing-add" type="url" class="form-control" />
<button data-action="follow" type="button" class="btn btn-primary">[[admin/manage/categories:federation.syncing-follow]]</button>
</div>
</div>
<hr />
<div class="mb-3">
<p>[[admin/manage/categories:federation.followers]]</p>
<table class="table small">
<tr>
<th>[[admin/manage/categories:federation.followers-handle]]</th>
<th>[[admin/manage/categories:federation.followers-id]]</th>
</tr>
{{{ if !followers.length}}}
<tr>
<td class="text-center border-0" colspan="2">
<em>[[admin/manage/categories:federation.followers-none]]</em>
</td>
</tr>
{{{ end }}}
{{{ each followers }}}
<tr data-uid="{./uid}">
<td class="w-100 text-truncate" style="max-width: 1px;">
{buildAvatar(followers, "24px", true)}
{./userslug}
</td>
<td class="w-0">
<div class="d-flex gap-2 flex-nowrap align-items-center">
<button type="button" class="btn btn-ghost btn-sm border" data-action="autofill" title="[[admin/manage/categories:federation.followers-autofill]]">
<i class="fa fa-exchange-alt text-primary"></i>
</button>
<code>{./uid}</code>
</div>
</td>
</tr>
{{{ end }}}
</table>
</div>
</form>
</div>
</div>
<div class="col-12 col-md-4 px-0 px-md-3 options acp-sidebar">
<div class="p-2 d-flex flex-column text-bg-light border rounded-1 gap-1">
<a href="{config.relative_path}/admin/manage/categories" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center"><i class="fa fa-fw fa-chevron-left text-primary"></i> [[admin/manage/categories:back-to-categories]]</a>
<hr class="my-1"/>
{{{ if (template.name == "admin/manage/category") }}}
<button class="btn btn-ghost btn-sm d-flex gap-2 align-items-center copy-settings">
<i class="fa fa-fw fa-files-o text-primary"></i> [[admin/manage/categories:copy-settings]]
</button>
{{{ else }}}
<a href="{config.relative_path}/admin/manage/categories/{(cid || category.cid)}" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center">
<i class="fa fa-fw fa-edit text-primary"></i> [[admin/manage/categories:edit]]
</a>
{{{ end }}}
<a class="btn btn-ghost btn-sm d-flex gap-2 align-items-center" href="{config.relative_path}/admin/manage/categories/{(cid || category.cid)}/analytics"><i class="fa fa-fw fa-chart-simple text-primary"></i> [[admin/manage/categories:analytics]]</a>
<a href="{config.relative_path}/admin/manage/privileges/{(cid || category.cid)}" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center">
<i class="fa fa-fw fa-lock text-primary"></i> [[admin/manage/categories:privileges]]
</a>
<a class="btn btn-ghost btn-sm d-flex gap-2 align-items-center" href="{config.relative_path}/admin/manage/categories/{(cid || category.cid)}/federation">
<i class="fa fa-fw fa-globe text-primary"></i> [[admin/manage/categories:federation]]
</a>
<a href="{config.relative_path}/category/{(cid || category.cid)}" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center">
<i class="fa fa-fw fa-eye text-primary"></i> [[admin/manage/categories:view-category]]
</a>
{{{ if (template.name == "admin/manage/category") }}}
<hr class="my-1"/>
<button data-action="toggle" data-disabled="{(disabled || category.disabled)}" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center">
{{{ if (disabled || category.disabled) }}}
<i class="fa fa-fw fa-check text-success"></i>
<span class="label">[[admin/manage/categories:enable]]</span>
{{{ else }}}
<i class="fa fa-fw fa-ban text-danger"></i>
<span class="label">[[admin/manage/categories:disable]]</span>
{{{ end }}}
</button>
<button class="btn btn-ghost btn-sm d-flex gap-2 align-items-center purge">
<i class="fa fa-fw fa-trash text-danger"></i> [[admin/manage/categories:purge]]
</button>
{{{ end }}}
</div>
</div>
</div>
{{{ end }}}
</div>