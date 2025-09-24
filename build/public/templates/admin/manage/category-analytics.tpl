<div class="px-lg-4">
<div class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
<div class="col-12 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center">
<h4 class="fw-bold tracking-tight mb-0">[[admin/manage/categories:analytics.title, {name}]]</h4>
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
<hr />
<div class="row ">
<div class="col-sm-6 text-center">
<div class="card">
<div class="card-body">
<div class="position-relative" style="aspect-ratio: 2;">
<canvas id="pageviews:hourly"></canvas>
</div>
</div>
<div class="card-footer"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>
</div>
</div>
<div class="col-sm-6 text-center">
<div class="card">
<div class="card-body">
<div class="position-relative" style="aspect-ratio: 2;">
<canvas id="pageviews:daily" height="250"></canvas>
</div>
</div>
<div class="card-footer"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>
</div>
</div>
</div>
<div class="row">
<div class="col-sm-6 text-center">
<div class="card">
<div class="card-body">
<div class="position-relative" style="aspect-ratio: 2;">
<canvas id="topics:daily" height="250"></canvas>
</div>
</div>
<div class="card-footer"><small>[[admin/manage/categories:analytics.topics-daily]]</div>
</div>
</div>
<div class="col-sm-6 text-center">
<div class="card">
<div class="card-body">
<div class="position-relative" style="aspect-ratio: 2;">
<canvas id="posts:daily" height="250"></canvas>
</div>
</div>
<div class="card-footer"><small>[[admin/manage/categories:analytics.posts-daily]]</div>
</div>
</div>
</div>
</div>