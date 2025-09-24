<div data-widget-area="header">
{{{each widgets.header}}}
{{widgets.header.html}}
{{{end}}}
</div>
<div class="groups list flex-fill">
<h3 class="fw-semibold">[[pages:groups]]</h3>
<div class="d-flex flex-wrap justify-content-between">
<div class="mb-2 mb-md-0">
<div class="text-sm d-flex flex-wrap align-items-center gap-2">
[[topic:sort-by]]
<div class="d-flex flex-wrap gap-2">
<a href="?sort=alpha" class="btn btn-ghost btn-sm ff-secondary fw-semibold text-nowrap {{{ if (sort == "alpha") }}}active{{{ end }}}">[[groups:details.group-name]]</a>
<a href="?sort=count" class="btn btn-ghost btn-sm ff-secondary fw-semibold text-nowrap {{{ if (sort == "count") }}}active{{{ end }}}">[[groups:details.member-count]]</a>
<a href="?sort=date" class="btn btn-ghost btn-sm ff-secondary fw-semibold text-nowrap {{{ if (sort == "date") }}}active{{{ end }}}">[[groups:details.creation-date]]</a>
</div>
</div>
</div>
<div>
<div class="d-flex justify-content-end gap-2">
<div>
{{{ if allowGroupCreation }}}
<button class="btn btn-primary btn-sm text-nowrap" data-action="new"><i class="fa fa-users"></i> [[groups:new-group]]</button>
{{{ end }}}
<select class="form-select hidden" id="search-sort">
<option value="alpha">[[groups:details.group-name]]</option>
<option value="count">[[groups:details.member-count]]</option>
<option value="date">[[groups:details.creation-date]]</option>
</select>
</div>
<div>
<div class="input-group">
<input type="text" class="form-control form-control-sm" placeholder="[[global:search]]" name="query" id="search-text">
<button id="search-button" class="btn btn-primary btn-sm" aria-label="[[global:search]]">
<i class="fa fa-search"></i>
</button>
</div>
</div>
</div>
</div>
</div>
<hr />
<div component="groups/container" class="row" id="groups-list">
{{{ if groups.length }}}
{{{ each groups }}}
<div class="col-xl-4 col-lg-6 col-sm-12 mb-3" component="groups/summary" data-slug="{./slug}">
<div class="card h-100 group-hover-bg border-0">
<a href="{config.relative_path}/groups/{./slug}" class="card-header border-bottom-0 pointer d-block list-cover" style="{{{ if ./cover:thumb:url }}}background-image: url({./cover:thumb:url});background-size: cover; min-height: 125px; background-position: {./cover:position}{{{ end }}}" aria-label="[[aria:group-page-link-for, {./displayName}]]"></a>
<a href="{config.relative_path}/groups/{./slug}" class="d-block h-100 text-reset text-decoration-none">
<div class="card-body d-flex flex-column gap-1 border border-top-0 rounded-bottom h-100">
<div class="d-flex">
<div class="flex-grow-1 fs-6 fw-semibold">{./displayName}</div>
<div class="flex-shrink-0 text-sm"><i class="text-muted fa-solid fa-user"></i> {formattedNumber(./memberCount)}</div>
</div>
<div class="text-sm">{./description}</div>
</div>
</a>
</div>
</div>
{{{ end }}}
{{{ else }}}
<div class="col-12">
<div class="alert alert-warning">
[[groups:no-groups-found]]
</div>
</div>
{{{ end }}}
</div>
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