<div class="admins-mods acp-page-container px-lg-4">
<div class="d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2">
<div class="">
<h4 class="fw-bold tracking-tight mb-0">[[admin/manage/admins-mods:manage-admins-and-mods]]</h4>
</div>
</div>
<div>
<div class="d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap">
<h4 class="mb-0">[[admin/manage/admins-mods:administrators]]</h4>
<input id="admin-search" class="form-control form-control-sm w-auto" placeholder="[[admin/manage/admins-mods:add-administrator]]" />
</div>
<div class="administrator-area d-flex flex-wrap">
{{{ each admins.members }}}
<div class="badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center" data-uid="{admins.members.uid}">
{buildAvatar(admins.members, "24px", true)}
<a href="{config.relative_path}/user/{admins.members.userslug}">{admins.members.username}</a>
<button class="btn btn-ghost btn-sm p-0 remove-user-icon">
<i class="fa fa-fw fa-times"></i>
</button>
</div>
{{{ end }}}
</div>
</div>
<hr/>
<div>
<div class="d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap">
<h4 class="mb-0">[[admin/manage/admins-mods:global-moderators]]</h4>
<input id="global-mod-search" class="form-control form-control-sm w-auto" placeholder="[[admin/manage/admins-mods:add-global-moderator]]" />
</div>
<div class="global-moderator-area mb-2 d-flex flex-wrap">
{{{ each globalMods.members }}}
<div class="badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center" data-uid="{globalMods.members.uid}">
{buildAvatar(globalMods.members, "24px", true)}
<a href="{config.relative_path}/user/{globalMods.members.userslug}">{globalMods.members.username}</a>
<button class="btn btn-ghost btn-sm p-0 remove-user-icon">
<i class="fa fa-fw fa-times"></i>
</button>
</div>
{{{ end }}}
</div>
<div id="no-global-mods-warning" class="text-sm text-muted mb-0 {{{ if globalMods.members.length }}}hidden{{{ end }}}">[[admin/manage/admins-mods:no-global-moderators]]</div>
</div>
<hr/>
<div>
<div class="d-flex gap-2 align-items-center">
<h4 class="mb-0" id="moderators-title">[[admin/manage/admins-mods:moderators]]</h4>
<div class="">
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
</div>
<div class="mb-2">
{{{ if breadcrumbs.length }}}
<ol class="breadcrumb mb-0" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
{{{ each breadcrumbs }}}
<li{{{ if @last }}} component="breadcrumb/current"{{{ end }}} itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item {{{ if @last }}}active{{{ end }}}">
<meta itemprop="position" content="{@index}" />
{{{ if ./url }}}<a href="{./url}" itemprop="item">{{{ end }}}
<span class="fw-semibold" itemprop="name">{./text}</span>
{{{ if ./url }}}</a>{{{ end }}}
</li>
{{{ end }}}
</ol>
{{{ end }}}
</div>
{{{ if !categoryMods.length }}}
<p class="alert alert-info">[[admin/manage/admins-mods:no-sub-categories]]</p>
{{{ end }}}
{{{ each categoryMods }}}
{{{ if @first }}}
<hr>
{{{ end }}}
<div class="categories category-wrapper mb-4">
<div class="d-flex gap-2 justify-content-between flex-column flex-md-row align-items-start align-items-md-center mb-2 flex-wrap">
<div class="d-flex flex-column flex-md-row gap-2 align-items-md-center">
<div class="d-flex gap-1 align-items-center">
{buildCategoryIcon(@value, "28px", "rounded-1")}
<h5 class="mb-0">{categoryMods.name}</h5>
</div>
{{{ if categoryMods.subCategoryCount }}}
<a class="btn btn-light btn-sm" href="{config.relative_path}/admin/manage/admins-mods?cid={categoryMods.cid}#moderators-title">[[admin/manage/admins-mods:view-children, {categoryMods.subCategoryCount}]]</a>
{{{ end }}}
{{{if categoryMods.disabled}}}<span class="badge text-bg-warning">[[admin/manage/admins-mods:disabled]]</span>{{{end}}}
</div>
<input data-cid="{categoryMods.cid}" class="form-control form-control-sm moderator-search w-auto" placeholder="[[admin/manage/admins-mods:add-moderator]]" />
</div>
<div class="moderator-area d-flex flex-wrap" data-cid="{categoryMods.cid}">
{{{ each categoryMods.moderators }}}
<div class="badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center" data-uid="{categoryMods.moderators.uid}">
{buildAvatar(categoryMods.moderators, "24px", true)}
<a href="{config.relative_path}/user/{categoryMods.moderators.userslug}">{categoryMods.moderators.username}</a>
<button class="btn btn-ghost btn-sm p-0 remove-user-icon">
<i class="fa fa-fw fa-times" role="button"></i>
</button>
</div>
{{{ end }}}
</div>
<div data-cid="{categoryMods.cid}" class="no-moderator-warning text-sm text-muted {{{ if categoryMods.moderators.length }}}hidden{{{ end }}}">[[admin/manage/admins-mods:no-moderators]]</div>
</div>
<hr >
{{{ end }}}
<div>
<div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
<li class="page-item previous float-start{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
</li>
{{{each pagination.pages}}}
{{{ if pagination.pages.separator }}}
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link rounded fw-secondary px-3" href="#"><i class="fa fa-ellipsis-h"></i></a>
</li>
{{{ else }}}
<li class="page-item page{{{ if pagination.pages.active }}} active{{{ end }}}" >
<a class="page-link rounded fw-secondary px-3" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
</li>
{{{ end }}}
{{{end}}}
<li class="page-item next float-end {{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
</li>
</ul>
{{{ if !template.topic }}}
<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
</li>
<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
</li>
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link fw-secondary"  href="#">{pagination.currentPage} / {pagination.pageCount}</a>
</li>
<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
</li>
<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
</li>
</ul>
{{{ end }}}
</div>
</div>
</div>
</div>