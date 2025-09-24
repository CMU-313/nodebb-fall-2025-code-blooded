<div class="px-lg-4 digest">
<p class="lead">[[admin/manage/digest:lead]]</p>
<p>[[admin/manage/digest:disclaimer]]</p>
<p>[[admin/manage/digest:disclaimer-continued]]</p>
<hr />
<div class="mb-3">
<div class="mb-2"><em>[[admin/manage/digest:default-help, {default}]]</em></div>
<div class="d-flex gap-1 align-items-center">
<div>[[admin/manage/digest:manual-run]]</div>
<button class="btn btn-sm btn-outline-secondary" data-action="resend-day">[[admin/settings/user:digest-freq.daily]]</button>
<button class="btn btn-sm btn-outline-secondary" data-action="resend-week">[[admin/settings/user:digest-freq.weekly]]</button>
<button class="btn btn-sm btn-outline-secondary" data-action="resend-biweek">[[admin/settings/user:digest-freq.biweekly]]</button>
<button class="btn btn-sm btn-outline-secondary" data-action="resend-month">[[admin/settings/user:digest-freq.monthly]]</button>
</div>
</div>
<div class="table-responsive">
<table class="table">
<thead>
<th>[[admin/manage/digest:user]]</th>
<th>[[admin/manage/digest:subscription]]</th>
<th>[[admin/manage/digest:last-delivery]]</th>
<th></th>
</thead>
<tbody>
{{{ each delivery }}}
<tr>
<td>{buildAvatar(delivery, "24px", true)} <a href="{config.relative_path}/uid/{./uid}">{./username}</a></td>
<td>{{{if ./setting}}}{./setting}{{{else}}}<em>[[admin/manage/digest:default]]</em>{{{end}}}</td>
<td>{./lastDelivery}</td>
<td><button class="btn btn-sm btn-outline-secondary" data-action="resend" data-uid="{./uid}">[[admin/manage/digest:resend]]</button></td>
</tr>
{{{ end }}}
{{{ if !delivery.length }}}
<tr>
<td colspan="4">
<div class="alert alert-success">
[[admin/manage/digest:no-delivery-data]]
</div>
</td>
</tr>
{{{ end }}}
</tbody>
<tfoot>
<tr>
<td colspan="4"><div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
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
</div></td>
</tr>
</tfoot>
</table>
</div>
</div>