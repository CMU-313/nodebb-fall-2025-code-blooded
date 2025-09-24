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
<div class="users flex-fill">
<div id="users-container" class="users-container row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
{{{ each users }}}
<div>
<a href="{config.relative_path}/user/{./userslug}" class="btn btn-ghost gap-2 ff-base d-flex align-items-start justify-content-start p-2 text-start">
{buildAvatar(@value, "48px", true, "flex-shrink-0")}
<div class="d-flex flex-column gap-1 text-truncate">
<div class="fw-semibold text-truncate" title="{./displayname}">{./displayname}</div>
<div class="text-xs text-muted text-truncate">@{./username}</div>
{{{ if section_online }}}
<div class="text-xs text-muted text-truncate">
<span class="timeago" title="{./lastonlineISO}"></span>
</div>
{{{ end }}}
{{{ if section_joindate }}}
<div class="text-xs text-muted text-truncate">
<span class="timeago" title="{./joindateISO}"></span>
</div>
{{{ end }}}
{{{ if section_sort-reputation }}}
<div class="text-xs text-muted text-truncate">
<span>{formattedNumber(./reputation)}</span>
</div>
{{{ end }}}
{{{ if section_sort-posts }}}
<div class="text-xs text-muted text-truncate">
<span>{formattedNumber(./postcount)}</span>
</div>
{{{ end }}}
{{{ if section_flagged }}}
<div class="text-xs text-muted text-truncate">
<span>{formattedNumber(./flags)}</span>
</div>
{{{ end }}}
</div>
</a>
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