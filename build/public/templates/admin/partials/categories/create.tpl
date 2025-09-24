<form type="form">
<div class="mb-3">
<label class="form-label" for="name">[[admin/manage/categories:name]]</label>
<input type="text" class="form-control" name="name" id="name" />
</div>
<div class="mb-3" id="parentCidGroup">
<label class="form-label" for="parentCid">[[admin/manage/categories:optional-parent-category]]</label>
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
<div class="mb-3" id="cloneFromCidGroup">
<div class="mb-3">
<label class="form-label" for="cloneFromCid">[[admin/manage/categories:optional-clone-settings]]</label>
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
<div class="form-check form-switch">
<input class="form-check-input "id="cloneChildren" name="cloneChildren" type="checkbox">
<label for="cloneChildren" class="form-check-label">[[admin/manage/categories:clone-children]]</label>
</div>
</div>
<div class="mb-3">
<div class="form-check form-switch">
<input class="form-check-input "id="disabled" name="disabled" type="checkbox">
<label for="disabled" class="form-check-label">[[admin/manage/categories:disable-on-create]]</label>
</div>
</div>
</form>