<div class="notifications flex-fill">
<div class="btn-toolbar justify-content-end" role="toolbar">
<button class="btn btn-sm btn-light" component="notifications/mark_all">[[notifications:mark-all-read]]</button>
</div>
<hr class="text-muted opacity-25"/>
<div class="d-flex flex-column flex-md-row">
<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
<div class="nav sticky-top d-flex flex-row flex-md-column flex-wrap gap-1" style="z-index: 1;">
{{{ each filters }}}
{{{ if ./separator }}}
<hr/>
{{{ else }}}
<a class="btn btn-ghost d-flex gap-2 text-start text-sm ff-secondary fw-semibold {{{ if ./selected }}}active{{{ end }}}" href="{config.relative_path}/notifications?filter={./filter}">
<div class="flex-grow-1">{filters.name}</div>
<span class="flex-shrink-0 text-xs" title="{./count}">{humanReadableNumber(./count)}</span>
</a>
{{{ end }}}
{{{ end }}}
</div>
</div>
<div class="flex-grow-1 ps-md-2 ps-lg-5">
<ul component="notifications/list" class="notifications-list list-unstyled" data-nextstart="{nextStart}">
{{{ if !notifications.length }}}
<div class="no-notifs text-center p-4 d-flex flex-column">
<div class="p-4"><i class="fa-solid fa-wind fs-2 text-muted"></i></div>
<div class="text-xs fw-semibold text-muted">[[notifications:no-notifs]]</div>
</div>
{{{ end }}}
{{{ each notifications }}}
<div class="{./readClass}" data-nid="{./nid}" data-path="{./path}" {{{ if ./pid }}}data-pid="{./pid}"{{{ end }}}{{{ if ./tid }}}data-tid="{./tid}"{{{ end }}}>
<div class="d-flex gap-1 justify-content-between">
<div class="btn btn-ghost btn-sm d-flex gap-2 flex-grow-1 text-start align-items-start">
<a class="flex-grow-0 flex-shrink-0" href="{{{ if ./user.userslug}}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
{{{ if (./image && ./from) }}}
<img class="avatar avatar-rounded" style="--avatar-size: 32px;" src="{./image}" />
{{{ else }}}
{{{ if ./icon }}}
<div class="avatar avatar-rounded" style="--avatar-size: 32px;"><i class="text-secondary fa {./icon}"></i></div>
{{{ else }}}
<div class="avatar avatar-rounded" style="--avatar-size: 32px; background-color: {./user.icon:bgColor};">{./user.icon:text}</div>
{{{ end }}}
{{{ end }}}
</a>
<div class="d-flex flex-grow-1 flex-column align-items-start position-relative">
<a href="{./path}" class="text-decoration-none d-inline-block text-reset text-break text-sm ff-sans stretched-link" component="notifications/item/link">
{./bodyShort}
</a>
<div class="text-xs text-muted">{{{ if ./timeagoLong }}}{./timeagoLong}{{{ else }}}<span class="timeago" title="{./datetimeISO}"></span>{{{ end }}}</div>
</div>
</div>
<div>
{{{ if ./nid }}}
<button class="mark-read btn btn-ghost btn-sm d-flex align-items-center justify-content-center flex-grow-0 flex-shrink-0 p-1" style="width: 1.5rem; height: 1.5rem;">
<i class="unread fa fa-2xs fa-circle text-primary {{{ if ./read }}}hidden{{{ end }}}" aria-label="[[unread:mark-as-read]]"></i>
<i class="read fa fa-2xs fa-circle-o text-secondary {{{ if !./read }}}hidden{{{ end }}}" aria-label="[[unread:mark-as-unread]]"></i>
</button>
{{{ end }}}
</div>
</div>
</div>
{{{ if !@last }}}
<hr class="my-1" />
{{{ end }}}
{{{ end }}}
</ul>
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
</div>
</div>