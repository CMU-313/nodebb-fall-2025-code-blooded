<div class="{{{ if config.theme.stickyToolbar }}}sticky-tools{{{ end }}} mb-3" style="top: {{{ if (config.theme.topMobilebar && !config.theme.autohideBottombar) }}}var(--panel-offset){{{ else }}}0{{{ end }}};">
<nav class="topic-list-header d-flex flex-nowrap my-2 p-0 border-0 rounded">
<div class="d-flex flex-row p-2 text-bg-light gap-1 border rounded w-100">
<div component="category/controls" class="d-flex me-auto mb-0 gap-2 flex-wrap">
{{{ if (template.category || template.world) }}}
{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="topic/watch">
<button class="btn btn-ghost btn-sm ff-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span component="category/watching/menu" class="d-flex gap-2 align-items-center {{{ if !./isWatched }}} hidden{{{ end }}}"><i class="fa fa-fw fa-bell-o text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold">[[category:watching]]</span></span>
<span component="category/tracking/menu"  class="d-flex gap-2 align-items-center {{{ if !./isTracked }}} hidden{{{ end }}}"><i class="fa fa-fw fa-inbox text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold">[[category:tracking]]</span></span>
<span component="category/notwatching/menu"  class="d-flex gap-2 align-items-center {{{ if !./isNotWatched }}} hidden{{{ end }}}"><i class="fa fa-fw fa-clock-o text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold">[[category:not-watching]]</span></span>
<span component="category/ignoring/menu"  class="d-flex gap-2 align-items-center {{{ if !./isIgnored }}} hidden{{{ end }}}"><i class="fa fa-fw fa-eye-slash text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold">[[category:ignoring]]</span></span>
</button>
<ul class="dropdown-menu p-1 text-sm {{{ if template.account/categories }}}dropdown-menu-end{{{ end }}}" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/watching" data-state="watching" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[category:watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[category:watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="category/watching/check" class="fa fa-fw {{{ if ./isWatched }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/tracking" data-state="tracking" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-inbox text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[category:tracking]]</span>
</span>
<div class="help-text text-secondary text-xs">[[category:tracking.description]]</div>
</div>
<span class="flex-shrink-0"><i component="category/tracking/check" class="fa fa-fw {{{ if ./isTracked }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/notwatching" data-state="notwatching" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-clock-o text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[category:not-watching]]</span>
</span>
<div class="help-text text-secondary text-xs">[[category:not-watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="category/notwatching/check" class="fa fa-fw {{{ if ./isNotWatched }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/ignoring" data-state="ignoring" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-eye-slash text-secondary"></i>
<span class="flex-grow-1 fw-semibold">[[category:ignoring]]</span>
</span>
<div class="help-text text-secondary text-xs">[[category:ignoring.description]]</div>
</div>
<span class="flex-shrink-0"><i component="category/ignoring/check" class="fa fa-fw {{{ if ./isIgnored }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
</ul>
</div>
{{{ end }}}
<div component="tag/filter" class="btn-group dropdown dropdown-left bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedTag }}}
<span class="d-inline-flex align-items-center gap-1">
<i class="fa fa-fw fa-tags text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTag.label}</span>
</span>
{{{ else }}}
<i class="fa fa-fw fa-tags text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">[[tags:all-tags]]</span>
{{{ end }}}
</button>
<div class="dropdown-menu p-1">
<div component="tag/filter/search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="tag/filter/list" class="list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar" role="menu" style="max-height: 500px;" role="menu">
<li role="presentation" data-tag="">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
<span class="flex-grow-1">[[tags:all-tags]]</span>
<i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedTag }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{ each tagItems }}}
<li role="presentation" data-tag="{./valueEscaped}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
<span component="tag-markup" class="flex-grow-1">
<div class="d-inline-flex align-items-center gap-1">
{./valueEscaped}
</div>
</span>
<i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{ end }}}
</ul>
</div>
</div>
<div class="btn-group bottom-sheet" component="thread/sort">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false" aria-label="[[aria:topic-sort-option, {sortOptionLabel}]]">
<i class="fa fa-fw fa-arrow-down-wide-short text-primary"></i>
<span class="d-none d-md-inline fw-semibold">{sortOptionLabel}</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-sort="recently_replied" role="menuitem">
<span class="flex-grow-1">[[topic:recently-replied]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-sort="recently_created" role="menuitem">
<span class="flex-grow-1">[[topic:recently-created]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-sort="most_posts" role="menuitem">
<span class="flex-grow-1">[[topic:most-posts]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-sort="most_votes" role="menuitem">
<span class="flex-grow-1">[[topic:most-votes]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-sort="most_views" role="menuitem">
<span class="flex-grow-1">[[topic:most-views]]</span>
<i class="flex-shrink-0 fa fa-fw text-secondary"></i>
</a>
</li>
</ul>
</div>
{{{ end }}}
{{{ if (template.popular || template.top)}}}
<div class="btn-group bottom-sheet {{{ if !terms.length }}}hidden{{{ end }}}">
<button type="button" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-clock text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTerm.name}</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
{{{each terms}}}
<li role="presentation" class="category">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="{config.relative_path}/{terms.url}">
<div class="flex-grow-1">{terms.name}</div>
<i class="flex-shrink-0 fa fa-fw {{{ if terms.selected }}}fa-check{{{ end }}}"></i>
</a>
</li>
{{{end}}}
</ul>
</div>
{{{ end }}}
{{{ if (template.unread || (template.recent || (template.popular || template.top))) }}}
<div class="btn-group bottom-sheet{{{ if !filters.length }}} hidden{{{ end }}}">
<button type="button" class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-filter text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedFilter.name}</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
{{{each filters}}}
<li role="presentation" class="category {{{if filters.selected}}}selected{{{end}}}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="{config.relative_path}/{filters.url}">
<div class="flex-grow-1">{filters.name}</div>
<i class="flex-shrink-0 fa fa-fw {{{ if filters.selected }}}fa-check{{{ end }}}"></i>
</a>
</li>
{{{end}}}
</ul>
</div>
<div component="category/dropdown" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedCategory }}}
<span class="category-item d-inline-flex align-items-center gap-1">
{buildCategoryIcon(selectedCategory, "18px", "rounded-circle")}
<span class="d-none d-md-inline fw-semibold">{selectedCategory.name}</span>
</span>
{{{ else }}}
<i class="fa fa-fw fa-list text-primary"></i>
<span class="d-none d-md-inline fw-semibold">[[unread:all-categories]]</span>{{{ end }}}
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
<li role="presentation" class="category" data-cid="all">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="{{{ if allCategoriesUrl }}}{config.relative_path}/{allCategoriesUrl}{{{ else }}}#{{{ end }}}">
<div class="flex-grow-1">[[unread:all-categories]]</div>
<i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i>
</a>
</li>
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ./disabledClass }}}disabled{{{ end }}}" data-cid="{./cid}" data-parent-cid="{./parentCid}" data-name="{./name}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 {{{ if ./disabledClass }}}disabled{{{ end }}}" role="menuitem" href="#">
{./level}
<span component="category-markup" class="flex-grow-1" style="{{{ if ./match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-flex align-items-center gap-1">
{{{ if ./icon }}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
<i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{end}}}
</ul>
</div>
</div>
<div component="tag/filter" class="btn-group dropdown dropdown-left bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedTag }}}
<span class="d-inline-flex align-items-center gap-1">
<i class="fa fa-fw fa-tags text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTag.label}</span>
</span>
{{{ else }}}
<i class="fa fa-fw fa-tags text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">[[tags:all-tags]]</span>
{{{ end }}}
</button>
<div class="dropdown-menu p-1">
<div component="tag/filter/search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="tag/filter/list" class="list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar" role="menu" style="max-height: 500px;" role="menu">
<li role="presentation" data-tag="">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
<span class="flex-grow-1">[[tags:all-tags]]</span>
<i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedTag }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{ each tagItems }}}
<li role="presentation" data-tag="{./valueEscaped}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
<span component="tag-markup" class="flex-grow-1">
<div class="d-inline-flex align-items-center gap-1">
{./valueEscaped}
</div>
</span>
<i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{ end }}}
</ul>
</div>
</div>
{{{ end }}}
{{{ if template.unread }}}
<div class="markread btn-group {{{ if !topics.length }}}hidden{{{ end }}}">
<div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span component="category-selector-selected">
{{{ if (selectedCategory && !showCategorySelectLabel) }}}
<span class="category-item d-inline-flex align-items-center gap-1">
{buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
<span class="fw-semibold">{selectedCategory.name}</span>
</span>
{{{ else }}}
<i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}} text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread-tools.select-category]]{{{ end }}}</span>
{{{ end }}}
</span>
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
<li component="category/no-matches" role="presentation" class="category hidden">
<a class="dropdown-item rounded-1" role="menuitem">[[search:no-matches]]</a>
</li>
{{{ each categoryItems }}}
<li role="presentation" class="category {{{ if ./disabledClass }}}disabled {{{ end }}}" data-cid="{./cid}" data-name="{./name}" data-parent-cid="{./parentCid}">
<a class="dropdown-item rounded-1 {{{ if ./disabledClass }}}disabled{{{ end }}}" role="menuitem" href="#">{./level}
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
{{{ end }}}
{{{ if template.tag }}}
<div component="category/dropdown" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedCategory }}}
<span class="category-item d-inline-flex align-items-center gap-1">
{buildCategoryIcon(selectedCategory, "18px", "rounded-circle")}
<span class="d-none d-md-inline fw-semibold">{selectedCategory.name}</span>
</span>
{{{ else }}}
<i class="fa fa-fw fa-list text-primary"></i>
<span class="d-none d-md-inline fw-semibold">[[unread:all-categories]]</span>{{{ end }}}
</button>
<div class="dropdown-menu p-1">
<div component="category-selector-search" class="p-1 hidden">
<input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
<hr class="mt-2 mb-0"/>
</div>
<ul component="category/list" class="list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
<li role="presentation" class="category" data-cid="all">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="{{{ if allCategoriesUrl }}}{config.relative_path}/{allCategoriesUrl}{{{ else }}}#{{{ end }}}">
<div class="flex-grow-1">[[unread:all-categories]]</div>
<i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i>
</a>
</li>
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ./disabledClass }}}disabled{{{ end }}}" data-cid="{./cid}" data-parent-cid="{./parentCid}" data-name="{./name}">
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 {{{ if ./disabledClass }}}disabled{{{ end }}}" role="menuitem" href="#">
{./level}
<span component="category-markup" class="flex-grow-1" style="{{{ if ./match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-flex align-items-center gap-1">
{{{ if ./icon }}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
<i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
</a>
</li>
{{{end}}}
</ul>
</div>
</div>
{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="tag/watch">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span component="tag/following/menu" class="d-flex gap-2 align-items-center{{{ if !isFollowing }}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold">[[tags:watching]]</span>
</span>
<span component="tag/not-following/menu" class="d-flex gap-2 align-items-center{{{ if isFollowing}}} hidden{{{ end }}}">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary"></i>
<span class="d-none d-md-inline fw-semibold">[[tags:not-watching]]</span>
</span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="tag/following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-o"></i>
<span class="flex-grow-1 fw-semibold">[[tags:watching]]</span>
</span>
<div class="help-text text-muted text-xs">[[tags:watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="tag/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="tag/not-following" role="menuitem">
<div class="flex-grow-1 d-flex flex-column">
<span class="d-flex align-items-center gap-2">
<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o"></i>
<span class="flex-grow-1 fw-semibold">[[tags:not-watching]]</span>
</span>
<div class="help-text text-muted text-xs">[[tags:not-watching.description]]</div>
</div>
<span class="flex-shrink-0"><i component="tag/not-following/check" class="fa fa-fw {{{ if !isFollowing }}}fa-check{{{ end }}}"></i></span>
</a>
</li>
</ul>
</div>
{{{ end }}}
{{{ end }}}
{{{ if showTopicTools }}}
<div class="btn-group thread-tools dropdown-left bottom-sheet">
<button class="btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-gear text-primary"></i>
<span class="visible-md-inline visible-lg-inline fw-semibold">[[topic:thread-tools.title]]</span>
<span component="topic/selected/badge" class="badge rounded-pill bg-secondary"></span>
</button>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li>
<a component="topic/mark-unread-for-all" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-inbox text-secondary"></i> [[topic:thread-tools.markAsUnreadForAll]]
</a>
</li>
<li>
<a component="topic/pin" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-thumb-tack text-secondary"></i> [[topic:thread-tools.pin]]
</a>
</li>
<li>
<a component="topic/unpin" href="#" class="hidden dropdown-item rounded-1" role="menuitem">
<i class="fa fa-fw fa-thumb-tack fa-rotate-90 text-secondary"></i> [[topic:thread-tools.unpin]]
</a>
</li>
<li>
<a component="topic/lock" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-lock text-secondary"></i> [[topic:thread-tools.lock]]
</a>
</li>
<li>
<a component="topic/unlock" href="#" class="hidden dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-unlock text-secondary"></i> [[topic:thread-tools.unlock]]
</a>
</li>
<li class="dropdown-divider"></li>
<li>
<a component="topic/move" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-arrows text-secondary"></i> [[topic:thread-tools.move]]
</a>
</li>
{{{if template.category}}}
<li>
<a component="topic/move-all" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-arrows text-secondary"></i> [[topic:thread-tools.move-all]]
</a>
</li>
{{{end}}}
<li>
<a component="topic/merge" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-code-fork text-secondary"></i> [[topic:thread-tools.merge]]
</a>
</li>
<li>
<a component="topic/tag" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-tag text-secondary"></i> [[topic:thread-tools.tag]]
</a>
</li>
<li class="dropdown-divider"></li>
<li>
<a component="topic/delete" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem">
<i class="fa fa-fw fa-trash-o text-secondary"></i> [[topic:thread-tools.delete]]
</a>
</li>
<li>
<a component="topic/restore" href="#" class="hidden dropdown-item rounded-1" role="menuitem">
<i class="fa fa-fw fa-history text-secondary"></i> [[topic:thread-tools.restore]]
</a>
</li>
<li>
<a component="topic/purge" href="#" class="hidden dropdown-item rounded-1" role="menuitem">
<i class="fa fa-fw fa-eraser text-secondary"></i> [[topic:thread-tools.purge]]
</a>
</li>
{{{each thread_tools}}}
<li>
<a href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2 {thread_tools.class}" role="menuitem">
<i class="fa fa-fw {thread_tools.icon} text-secondary"></i>
{thread_tools.title}</a>
</li>
{{{end}}}
</ul>
</div>
{{{ end }}}
{{{ if (!feeds:disableRSS && rssFeedUrl) }}}
<a class="btn btn-ghost btn-sm d-none d-lg-flex align-items-center align-self-stretch" target="_blank" href="{rssFeedUrl}" itemprop="item" title="[[global:rss-feed]]"><i class="fa fa-rss text-primary"></i></a>
{{{ end }}}
<a href="{{{ if (template.category || template.world) }}}{url}{{{ else }}}{config.relative_path}/{selectedFilter.url}{querystring}{{{ end }}}" class="btn btn-secondary fw-semibold position-absolute top-100 translate-middle-x start-50 mt-1 hide" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" id="new-topics-alert">
<i class="fa fa-fw fa-arrow-up"></i> [[recent:load-new-posts]]
</a>
</div>
<div class="d-flex gap-1 align-items-center">
{{{ if (template.category || template.world) }}}
{{{ if privileges.topics:create }}}
<a href="{config.relative_path}/compose?cid={cid}" component="category/post" id="new_topic" class="btn btn-primary btn-sm text-nowrap" data-ajaxify="false" role="button">[[category:new-topic-button]]</a>
{{{ end }}}
{{{ else }}}
{{{ if canPost }}}
<noscript><div class="dropdown" component="category-selector"></noscript>
<button component="category/post" for="category-dropdown-check" class="btn btn-primary btn-sm text-nowrap" id="new_topic" role="button">
[[category:new-topic-button]]
</button>
<noscript>
<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">
<ul component="category/list" class="dropdown-menu p-1 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
{{{each categories}}}
<li role="presentation" class="category {{{if categories.disabledClass}}}disabled{{{end}}}">
<a role="menu-item" href="{config.relative_path}/compose?cid={categories.cid}">{categories.level}
<span component="category-markup">
<div class="category-item d-inline-block">
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{categories.name}
</div>
</span>
</a>
</li>
{{{end}}}
</ul>
</div>
</noscript>
{{{ end }}}
{{{ end }}}
<!-- only show login button if not logged in and doesn't have any posting privilege -->
{{{ if (!loggedIn && (!privileges.topics:create && !canPost))}}}
<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[category:guest-login-post]]</a>
{{{ end }}}
</div>
</div>
</nav>
</div>