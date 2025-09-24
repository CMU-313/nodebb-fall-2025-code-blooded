<div component="settings/main/header" class="d-flex flex-wrap justify-content-between border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center mb-3">
<div class="px-0">
<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
</div>
<div class="px-0 px-md-3">
<div class="d-flex gap-1">
<button type="button" class="btn btn-sm btn-primary text-nowrap" data-action="create">
<i class="fa fa-plus"></i>
[[admin/settings/api:create-token]]
</button>
<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary text-nowrap">[[admin/admin:save-changes]]</button>
</div>
</div>
</div>
<form role="form" class="core-api-settings px-lg-4">
<p class="lead">[[admin/settings/api:lead-text]]</p>
<p>[[admin/settings/api:intro]]</p>
<p class="text-danger">[[admin/settings/api:warning]]</p>
<div class="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2 mb-3">
<a class="" href="https://docs.nodebb.org/api">
<i class="fa fa-external-link"></i>
[[admin/settings/api:docs]]
</a>
</div>
<div class="mb-3">
<div class="form-check form-switch mb-3">
<input id="requireHttps" class="form-check-input" type="checkbox" id="requireHttps" name="requireHttps" />
<label for="requireHttps" class="form-check-label">[[admin/settings/api:require-https]]</label>
<p class="form-text">[[admin/settings/api:require-https-caveat]]</p>
</div>
</div>
<div class="table-responsive mb-3">
<table class="table table-sm text-sm" data-component="acp/tokens">
<thead>
<tr>
<th>[[admin/settings/api:token]]</th>
<th>[[admin/settings/api:description]]</th>
<th>[[admin/settings/api:uid]]</th>
<th>[[admin/settings/api:last-seen]]</th>
<th>[[admin/settings/api:created]]</th>
<th>[[admin/settings/api:actions]]</th>
</tr>
</thead>
<tbody>
{{{ each tokens }}}
<tr data-token="{./token}" class="">
<td class="text-nowrap">
<button type="button" class="btn btn-link" data-action="copy" data-clipboard-text="{./token}"><i class="fa fa-fw fa-clipboard" aria-hidden="true"></i></button>
<div class="vr me-3" aria-hidden="true"></div>
<span class="user-select-all">{./token}</span>
</td>
<td class="align-middle">
{{{ if ./description }}}
{./description}
{{{ else }}}
<em class="text-secondary">[[admin/settings/api:no-description]]</em>
{{{ end }}}
</td>
<td class="align-middle">
{{{ if (./uid == "0") }}}
<em>[[admin/settings/api:master-token]]</em>
{{{ else }}}
{./uid}
{{{ end }}}
</td>
<td class="align-middle">
{{{ if ./lastSeen }}}
<span class="timeago" title="{./lastSeenISO}"></span>
{{{ else }}}
<em class="text-secondary">[[admin/settings/api:last-seen-never]]</em>
{{{ end }}}
</td>
<td class="align-middle">
<span class="timeago" title="{./timestampISO}"></span>
</td>
<td class="text-nowrap">
<button type="button" class="btn btn-light btn-sm" data-action="edit" title="[[admin/settings/api:edit]]">
<i class="fa fa-edit text-primary"></i>
</button>
<button type="button" class="btn btn-light btn-sm" data-action="roll" title="[[admin/settings/api:roll]]">
<i class="fa fa-refresh text-primary"></i>
</button>
<button type="button" class="btn btn-light btn-sm" data-action="delete">
<i class="fa fa-trash text-danger"></i>
</button>
</td>
</tr>
{{{ end }}}
</tbody>
</table>
</div>
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
</form>