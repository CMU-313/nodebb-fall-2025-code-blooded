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
<div class="d-flex flex-column gap-3">
<div component="flags/filters" class="d-flex flex-wrap gap-2 pb-3 border-bottom">
<div class="btn-group bottom-sheet">
<a class="filter-btn btn btn-light btn-sm border {{{ if filters.quick }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.quick }}}[[flags:filter-quick-{./filters.quick}]]{{{ else }}}[[flags:quick-filters]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1" href="{config.relative_path}/flags?quick=mine" role="menuitem">[[flags:filter-quick-mine]]</a>
</li>
</ul>
</div>
<div component="category/dropdown" class="btn-group category-dropdown-container bottom-sheet">
<button type="button" class="filter-btn btn btn-light btn-sm border dropdown-toggle {{{ if filters.cid }}}active-filter{{{ end }}}" data-bs-toggle="dropdown">
{{{ if selectedCategory }}}
<span class="category-item d-inline-flex align-items-center gap-1">
{buildCategoryIcon(selectedCategory, "18px", "rounded-circle")}
<span class="visible-md-inline visible-lg-inline">{selectedCategory.name}</span>
</span>
{{{ else }}}
<span class="visible-md-inline visible-lg-inline">[[unread:all-categories]]</span>
{{{ end }}}
<span class="caret text-primary opacity-75"></span>
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
{../level}
<span component="category-markup" class="flex-grow-1" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-flex align-items-center gap-1">
{{{ if ./icon }}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
<i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{end}}}
</ul>
</div>
</div>
<div class="btn-group bottom-sheet">
<a class="filter-btn btn btn-light btn-sm border {{{ if (sort != "newest") }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if (sort != "newest") }}}[[flags:sort-{./sort}]]{{{ else }}}[[flags:sort]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li><h6 class="dropdown-header">[[flags:sort-all]]</h6></li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="newest" role="menuitem">[[flags:sort-newest]]</li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="oldest" role="menuitem">[[flags:sort-oldest]]</li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="reports" role="menuitem">[[flags:sort-reports]]</li>
<li><h6 class="dropdown-header">[[flags:sort-posts-only]]</h6></li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="downvotes" role="menuitem">[[flags:sort-downvotes]]</li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="upvotes" role="menuitem">[[flags:sort-upvotes]]</li>
<li class="dropdown-item rounded-1" data-name="sort" data-value="replies" role="menuitem">[[flags:sort-replies]]</li>
</ul>
</div>
<div class="btn-group bottom-sheet">
<a class="filter-btn btn btn-light btn-sm border {{{ if filters.state }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.state }}}[[flags:state-{./filters.state}]]{{{ else }}}[[flags:filter-state]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li class="dropdown-item rounded-1" data-name="state" data-value="open" role="menuitem">[[flags:state-open]]</li>
<li class="dropdown-item rounded-1" data-name="state" data-value="wip" role="menuitem">[[flags:state-wip]]</li>
<li class="dropdown-item rounded-1" data-name="state" data-value="resolved" role="menuitem">[[flags:state-resolved]]</li>
<li class="dropdown-item rounded-1" data-name="state" data-value="rejected" role="menuitem">[[flags:state-rejected]]</li>
</ul>
</div>
<div class="btn-group bottom-sheet">
<a class="filter-btn btn btn-light btn-sm border {{{ if filters.type }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.type }}}[[flags:filter-type-{./filters.type}]]{{{ else }}}[[flags:filter-type]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li class="dropdown-item rounded-1" data-name="type" data-value="all" role="menuitem">[[flags:filter-type-all]]</li>
<li class="dropdown-item rounded-1" data-name="type" data-value="post" role="menuitem">[[flags:filter-type-post]]</li>
<li class="dropdown-item rounded-1" data-name="type" data-value="user" role="menuitem">[[flags:filter-type-user]]</li>
</ul>
</div>
<div component="flags/filter/assignee" class="dropdown bottom-sheet" data-filter-name="assignee">
<a component="user/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.assignee }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-assignee]]</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="min-width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.assignee }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
<div component="flags/filter/reporterId" class="dropdown bottom-sheet" data-filter-name="reporterId">
<a component="user/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.reporterId }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-reporterId]]</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="min-width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.reporterId }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
<div component="flags/filter/targetUid" class="dropdown bottom-sheet" data-filter-name="targetUid">
<a component="user/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.targetUid }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-targetUid]]</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="min-width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.targetUid }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
<div component="flags/filters/reset" class="ms-auto">
<a class="filter-btn btn btn-warning btn-sm border {{{ if !hasFilter }}}btn-light disabled{{{ end }}}" href="{config.relative_path}/flags" role="button">
<span class="filter-label">[[flags:filter-reset]]</span>
</a>
</div>
<div class="dropdown" component="flags/bulk-actions">
<button class="filter-btn btn btn-light btn-sm border" data-bs-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false" disabled="disabled">
<span class="filter-label">[[flags:bulk-actions]]</span>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
<li><a href="#" class="dropdown-item rounded-1" data-action="bulk-assign" role="menuitem">[[flags:assign-to-me]]</a></li>
<li><a href="#" class="dropdown-item rounded-1" data-action="bulk-mark-resolved" role="menuitem">[[flags:bulk-resolve]]</a></li>
</ul>
</div>
<form role="form">
<input type="hidden" name="sort" value="{./sort}" />
<input type="hidden" name="state" value="{./filters.state}" />
<input type="hidden" name="type" value="{./filters.type}" />
</form>
</div>
<div class="card card-header text-xs px-2 py-1 fw-semibold border-0 align-self-start">
[[flags:x-flags-found, {count}]]
</div>
<table class="table table-hover" component="flags/list">
<thead>
<tr>
<th></th>
<th class="text-xs text-muted">[[flags:reports]]</th>
<th class="text-xs text-muted">[[flags:first-reported]]</th>
<th class="text-xs text-muted">[[flags:state]]</th>
<th>
<input type="checkbox" data-action="toggle-all" autocomplete="off" />
</th>
</tr>
</thead>
<tbody>
{{{ each flags }}}
<tr data-flag-id="{./flagId}">
<td>
<a class="text-reset text-decoration-underline" href="{config.relative_path}/flags/{./flagId}">
{./target_readable}
</a>
</td>
<td>
{./heat}
</td>
<td><span class="timeago" title="{./datetimeISO}"></span></td>
<td><span class="badge bg-{./labelClass}">[[flags:state-{./state}]]</span></td>
<td>
<input type="checkbox" autocomplete="off" />
</td>
</tr>
{{{end}}}
</tbody>
</table>
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
</div>