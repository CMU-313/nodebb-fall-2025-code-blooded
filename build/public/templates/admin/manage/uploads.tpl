<div class="acp-page-container px-lg-4">
<div class="d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2">
<div class="">
<h4 class="fw-bold tracking-tight mb-0">[[admin/manage/uploads:manage-uploads]]</h4>
</div>
<div class="d-flex gap-1">
<button id="new-folder" class="btn btn-light btn-sm"><i class="fa fa-folder"></i> [[admin/manage/uploads:new-folder]]</button>
<button id="upload" class="btn btn-primary btn-sm"><i class="fa fa-upload"></i> [[global:upload]]</button>
</div>
</div>
<div class="">
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
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>[[admin/manage/uploads:filename]]</th>
{{{ if showPids }}}<th class="text-end">[[admin/manage/uploads:usage]]</th>{{{ end }}}
<th class="text-end">[[admin/manage/uploads:size/filecount]]</th>
<th></th>
</tr>
</thead>
<tbody>
{{{ each files }}}
<tr data-path="{files.path}">
{{{ if files.isDirectory }}}
<td class="align-middle" role="button">
<i class="fa fa-fw fa-folder-o"></i> <a href="{config.relative_path}/admin/manage/uploads?dir={files.path}">{files.name}</a>
</td>
{{{ end }}}
{{{ if files.isFile }}}
<td class="align-middle">
<i class="fa fa-fw fa-file-text-o"></i> <a class="text-break" href="{config.relative_path}{files.url}" target="_blank">{files.name}</a>
</td>
{{{ end }}}
{{{ if showPids }}}
<td class="text-end align-middle">
{{{ each ./inPids }}}
<a target="_blank" href="{config.relative_path}/post/{@value}"><span class="label label-default">{@value}</span></a>
{{{ end }}}
{{{ if !./inPids.length }}}
<span class="label label-danger">[[admin/manage/uploads:orphaned]]</span>
{{{ end }}}
</td>
{{{ end }}}
<td class="text-end align-middle">{{{ if files.isFile }}}{files.sizeHumanReadable}{{{ else }}}[[admin/manage/uploads:filecount, {files.fileCount}]]{{{ end }}}</td>
<td role="button" class="align-middle text-end">
<button class="delete btn btn-sm btn-light {{{ if !files.isFile }}} hidden{{{ end }}}">
<i class="fa fa-fw fa-trash-o text-danger"></i>
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
</div>