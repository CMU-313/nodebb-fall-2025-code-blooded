<div class="search flex-fill">
<div id="advanced-search" class="d-flex flex-column flex-md-row">
<!-- sidebar -->
<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3" style="flex-basis: 240px!important;">
<form action="{config.relative_path}/search" method="get" class="nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-3 pe-md-3" style="top: 1rem; z-index: 1;">
<h2 class="fw-semibold tracking-tight mb-0">[[global:search]]</h2>
<input id="search-input" name="term" type="text" class="form-control fw-semibold py-2 ps-2 pe-3" id="search-input" placeholder="[[search:type-to-search]]">
<select id="search-in" name="in" class="form-select text-sm py-2 ps-2 pe-3">
<option value="titlesposts">[[search:in-titles-posts]]</option>
<option value="titles">[[search:in-titles]]</option>
<option value="posts">[[search:in-posts]]</option>
<option value="bookmarks">[[search:in-bookmarks]]</option>
<option value="categories">[[search:in-categories]]</option>
{{{if privileges.search:users}}}
<option value="users">[[search:in-users]]</option>
{{{end}}}
{{{if privileges.search:tags}}}
<option value="tags">[[search:in-tags]]</option>
{{{end}}}
</select>
<select id="match-words-filter" name="matchWords" class="post-search-item form-select text-sm py-2 ps-2 pe-3">
<option value="all">[[search:match-all-words]]</option>
<option value="any">[[search:match-any-word]]</option>
</select>
<select id="show-results-as" name="showAs" class="post-search-item form-select text-sm py-2 ps-2 pe-3">
<option value="posts" selected>[[search:show-results-as-posts]]</option>
<option value="topics">[[search:show-results-as-topics]]</option>
</select>
<button type="submit" class="btn btn-primary fw-semibold form-control py-2 px-3">[[global:search]]</button>
</form>
</div>
<!-- filters and search results -->
<div class="flex-grow-1 ps-md-2 ps-lg-5" style="min-width:0;">
<div class="d-flex flex-column gap-3">
<div class="d-flex flex-wrap gap-2 align-items-center" component="search/filters">
<!-- category filter -->
<div class="post-search-item">
<div component="category/filter" class="dropdown" data-filter-name="category">
<a component="category/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.categories.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.categories.active }}}{filters.categories.label}{{{ else }}}[[search:categories]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" role="menu">
<li class="px-2 py-1 mb-2 d-flex flex-column gap-2">
<div component="category-selector-search">
<input type="text" class="form-control form-control-sm" component="category/filter/search" placeholder="[[search:type-a-category]]">
</div>
</li>
<div component="category/list" class="overflow-auto ghost-scrollbar" style="max-height: 350px;"></div>
<div class="px-3 py-1">
<div class="form-check">
<input id="search-children" class="form-check-input" type="checkbox"/>
<label class="form-check-label" for="search-children">[[search:search-child-categories]]</label>
</div>
</div>
</ul>
</div>
</div>
<!-- tag filter -->
<div class="post-search-item">
<div component="tag/filter" class="dropdown" data-filter-name="tag">
<a component="tag/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.tags.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.tags.active }}}{filters.tags.label}{{{ else }}}[[search:tags]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 350px;" role="menu">
<li class="px-2 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control form-control-sm" component="tag/filter/search" placeholder="[[search:type-a-tag]]">
<div component="tag/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each tagFilterSelected }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
<div>{./valueEscaped}</div>
<button component="tag/filter/delete" data-tag="{./valueEscaped}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr class="my-2"/>
<div component="tag/filter/results" class="d-flex flex-wrap gap-2">
{{{ each tagFilterResults }}}
<button class="btn btn-light btn-sm border" data-tag="{./valueEscaped}">{./valueEscaped}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
</div>
<!-- user name filter -->
<div class="post-search-item">
<div component="user/filter" class="dropdown" data-filter-name="user">
<a component="user/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.users.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.users.active }}}{filters.users.label}{{{ else }}}[[search:posted-by]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 350px;" role="menu">
<li class="px-2 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control form-control-sm" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each userFilterSelected }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr class="my-2"/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
</div>
<!-- reply count filter -->
<div class="post-search-item">
<div class="dropdown" data-filter-name="replies">
<a id="reply-count-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.replies.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.replies.active }}}{filters.replies.label}{{{ else }}}[[search:replies]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 300px;" role="menu">
<li class="px-2 py-1 d-flex flex-nowrap gap-2">
<select id="reply-count-filter" class="form-select form-select-sm">
<option value="atleast">[[search:at-least]]</option>
<option value="atmost">[[search:at-most]]</option>
</select>
<input id="reply-count" type="number" min="0" class="form-control form-control-sm" />
</li>
</ul>
</div>
</div>
<!-- time filter -->
<div class="post-search-item">
<div class="dropdown" data-filter-name="time">
<a id="post-time-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.time.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.time.active }}}{filters.time.label}{{{ else }}}[[search:time]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 350px;" role="menu">
<li class="px-2 py-1 d-flex flex-nowrap gap-2">
<select id="post-time-filter" class="form-select form-select-sm">
<option value="newer">[[search:newer-than]]</option>
<option value="older">[[search:older-than]]</option>
</select>
<select id="post-time-range" class="form-select form-select-sm">
<option value="">[[search:any-date]]</option>
<option value="86400">[[search:yesterday]]</option>
<option value="604800">[[search:one-week]]</option>
<option value="1209600">[[search:two-weeks]]</option>
<option value="2592000">[[search:one-month]]</option>
<option value="7776000">[[search:three-months]]</option>
<option value="15552000">[[search:six-months]]</option>
<option value="31104000">[[search:one-year]]</option>
</select>
</li>
</ul>
</div>
</div>
<!-- sort filter -->
<div class="post-search-item">
<div class="dropdown" data-filter-name="sort">
<a id="sort-by-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.sort.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">{{{ if filters.sort.active }}}{filters.sort.label}{{{ else }}}[[search:sort]]{{{ end }}}</span>
<span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 250px;" role="menu">
<li class="px-2 py-1 d-flex flex-column gap-2">
<select id="post-sort-by" class="form-select form-select-sm">
<option value="relevance">[[search:relevance]]</option>
<option value="timestamp">[[search:post-time]]</option>
<option value="votes">[[search:votes]]</option>
<option value="topic.lastposttime">[[search:last-reply-time]]</option>
<option value="topic.title">[[search:topic-title]]</option>
<option value="topic.postcount">[[search:number-of-replies]]</option>
<option value="topic.viewcount">[[search:number-of-views]]</option>
<option value="topic.votes">[[search:topic-votes]]</option>
<option value="topic.timestamp">[[search:topic-start-date]]</option>
<option value="user.username">[[search:username]]</option>
<option value="category.name">[[search:category]]</option>
</select>
<select id="post-sort-direction" class="form-select form-select-sm">
<option value="desc">[[search:descending]]</option>
<option value="asc">[[search:ascending]]</option>
</select>
</li>
</ul>
</div>
</div>
<!-- save & reset preferences -->
<div class="post-search-item">
<div class="dropdown">
<a class="btn btn-light btn-sm border border-gray-300 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">[[search:save]] <span class="caret text-primary opacity-75"></span>
</a>
<ul class="dropdown-menu p-1 text-sm" style="width: 300px;" role="menu">
<li class="px-2 py-1 d-flex flex-column gap-2">
<button id="save-preferences" class="btn btn-sm btn-primary">[[search:save-preferences]]</button>
<button id="clear-preferences" class="btn btn-sm btn-ghost border">[[search:clear-preferences]]</button>
</li>
</ul>
</div>
</div>
</div>
{{{ if matchCount }}}
<div class="card card-header text-xs px-2 py-1 fw-semibold border-0 align-self-start">[[search:results-matching, {matchCount}, {search_query}, {time}]] </div>
{{{ else }}}
{{{ if search_query }}}
<div class="badge text-bg-warning align-self-start">[[search:no-matches]]</div>
{{{ end }}}
{{{ end }}}
<div id="results" class="search-results" data-search-query="{search_query}">
{{{ if showAsPosts }}}
{{{ if posts.length }}}
<ul component="posts" class="posts-list list-unstyled" data-nextstart="{nextStart}">
{{{ each posts }}}
<li component="post" class="posts-list-item  {{{ if ./deleted }}} deleted{{{ else }}}{{{ if ./topic.deleted }}} deleted{{{ end }}}{{{ end }}}{{{ if ./topic.scheduled }}} scheduled{{{ end }}}" data-pid="{./pid}" data-uid="{./uid}">
<hr/>
<a class="topic-title fw-semibold fs-5 mb-2 text-reset text-break d-block" href="{config.relative_path}/post/{encodeURIComponent(./pid)}">
{{{ if ./isMainPost }}}<i class="fa fa-book text-muted" title="[[topic:topic]]"></i> {{{ end }}}{./topic.title}
</a>
<div class="post-body d-flex flex-column gap-1 mb-2">
<div class="d-flex gap-2 post-info text-sm align-items-center">
<div class="post-author d-flex align-items-center gap-1">
<a class="lh-1 text-decoration-none" href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(./user, "16px", true, "not-responsive")}</a>
<a class="lh-1 fw-semibold" href="{config.relative_path}/user/{./user.userslug}">{../user.displayname}</a>
</div>
<span class="timeago text-muted lh-1" title="{./timestampISO}"></span>
</div>
<div component="post/content" class="content text-sm text-break">
{./content}
</div>
</div>
<div class="mb-3 d-flex flex-wrap gap-1 w-100">
{buildCategoryLabel(./category, "a", "border")}
<span data-tid="{./topic.tid}" component="topic/tags" class="lh-1 tag-list d-flex flex-wrap gap-1 {{{ if !./topic.tags.length }}}hidden{{{ end }}}">
{{{ each ./topic.tags }}}
<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 fw-normal tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
{{{ end }}}
</span>
</div>
</li>
{{{ end }}}
</ul>
<div component="posts/loading" class="loading-indicator text-center hidden">
<i class="fa fa-refresh fa-spin"></i>
</div>
{{{ end }}}
{{{ end }}}
{{{ if showAsTopics }}}
{{{ each posts }}}
<hr/>
<div class="topic-row  mb-3">
<a class="topic-title fw-semibold fs-5 text-reset text-break" href="{config.relative_path}/post/{encodeURIComponent(./pid)}">
{{{ if !./isMainPost }}}RE: {{{ end }}}{./topic.title}
</a>
<div class="post-body d-flex flex-column gap-1">
<div class="d-flex gap-3 post-info">
<div class="post-author d-flex gap-1">
<a class="lh-1 text-decoration-none" href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(./user, "16px", true, "not-responsive")}</a>
<a class="fw-semibold text-sm" href="{config.relative_path}/user/{./user.userslug}">{../user.displayname}</a>
</div>
<span class="timeago text-sm text-muted" title="{./timestampISO}"></span>
</div>
</div>
</div>
{{{ end }}}
{{{ end }}}
{{{ if users.length }}}
<div id="users-container" class="users-container row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4">
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
{{{ end }}}
{{{ if tags.length }}}
<div class="tag-list row row-cols-2 row-cols-lg-3 row-cols-xl-4 gx-3 gy-2">
{{{each tags}}}
<div>
<a href="{config.relative_path}/tags/{./valueEncoded}" data-tag="{./valueEscaped}" class="btn btn-ghost ff-base d-flex flex-column gap-1 align-items-start justify-content-start text-truncate p-2">
<div class="fw-semibold text-nowrap tag-item w-100 text-start text-truncate">{./valueEscaped}</div>
<div class="text-xs text-muted text-nowrap tag-topic-count">[[global:x-topics, {txEscape(formattedNumber(./score))}]]</div>
</a>
</div>
{{{end}}}
</div>
{{{ end }}}
{{{ if categories.length }}}
<ul class="categories list-unstyled">
{{{each categories}}}
<li component="categories/category" data-cid="{./cid}" class="w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-{./cid} {./unread-class}">
<meta itemprop="name" content="{./name}">
<div class="d-flex col-lg-7 gap-2 gap-lg-3">
<div class="flex-shrink-0">
{buildCategoryIcon(@value, "40px", "rounded-1")}
</div>
<div class="flex-grow-1 d-flex flex-wrap gap-1 me-0 me-lg-2">
<h2 class="title text-break fs-4 fw-semibold m-0 tracking-tight w-100">
{{{ if ./isSection }}}
{./name}
{{{ else }}}
<a class="text-reset" href="{{{ if ./link }}}{./link}{{{ else }}}{config.relative_path}/category/{./slug}{{{ end }}}" itemprop="url">{../name}</a>
{{{ end }}}
</h2>
{{{ if ./descriptionParsed }}}
<div class="description text-muted text-sm w-100 line-clamp-sm-5">
{./descriptionParsed}
</div>
{{{ end }}}
{{{ if !./link }}}
<div class="d-flex gap-1 d-block d-lg-none w-100">
<span class="badge text-body border stats text-xs text-muted">
<i class="fa fa-fw fa-list"></i>
<span class="fw-normal">{humanReadableNumber(./totalTopicCount, 0)}</span>
</span>
<span class="badge text-body border stats text-xs text-muted">
<i class="fa-regular fa-fw fa-message"></i>
<span class="fw-normal">{humanReadableNumber(./totalPostCount, 0)}</span>
</span>
{{{ if ./teaser }}}
<a href="{config.relative_path}{./teaser.url}" class="border badge bg-transparent text-muted fw-normal timeago {{{ if (!./teaser.timestampISO || config.theme.mobileTopicTeasers) }}}hidden{{{ end }}}" title="{./teaser.timestampISO}"></a>
{{{ end }}}
</div>
{{{ end }}}
{{{ if !config.hideSubCategories }}}
{{{ if ./children.length }}}
<ul class="list-unstyled category-children row row-cols-1 row-cols-md-2 g-2 my-1 w-100">
{{{ each ./children }}}
{{{ if !./isSection }}}
<li data-cid="{./cid}" class="category-children-item small">
<div class="d-flex gap-1">
<i class="fa fa-fw fa-caret-right text-primary" style="line-height: var(--bs-body-line-height);"></i>
<a href="{{{ if ./link }}}{./link}{{{ else }}}{config.relative_path}/category/{./slug}{{{ end }}}" class="text-reset fw-semibold">{./name}</a>
</div>
</li>
{{{ end }}}
{{{ end }}}
</ul>
{{{ end }}}
{{{ end }}}
</div>
</div>
{{{ if !./link }}}
<div class="d-flex col-lg-5 col-12 align-content-stretch">
<div class="meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted" style="grid-template-columns: 1fr 1fr;">
<div class="card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
<span class="fs-5 ff-secondary lh-1" title="{./totalTopicCount}">{humanReadableNumber(./totalTopicCount, 0)}</span>
<span class="d-none d-xl-flex text-lowercase text-xs">[[global:topics]]</span>
<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list"></i>
</div>
<div class="card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
<span class="fs-5 ff-secondary lh-1" title="{./totalPostCount}">{humanReadableNumber(./totalPostCount, 0)}</span>
<span class="d-none d-xl-flex text-lowercase text-xs">[[global:posts]]</span>
<i class="d-xl-none fa-regular fa-fw text-xs text-muted opacity-75 fa-message"></i>
</div>
</div>
{{{ if !config.hideCategoryLastPost }}}
<div component="topic/teaser" class="teaser ps-5 ps-lg-0 col-lg-6 col-12 {{{ if !config.theme.mobileTopicTeasers }}}d-none d-lg-block{{{ end }}}">
<div class="lastpost border-start border-2 lh-sm h-100" style="border-color: {./bgColor}!important;">
{{{ each ./posts }}}
{{{ if @first }}}
<div component="category/posts" class="ps-2 text-xs d-flex flex-column h-100 gap-1">
<div class="text-nowrap text-truncate">
<a class="text-decoration-none avatar-tooltip" title="{./user.displayname}" href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(posts.user, "18px", true)}</a>
<a class="permalink text-muted timeago text-xs" href="{config.relative_path}/topic/{./topic.slug}{{{ if ./index }}}/{./index}{{{ end }}}" title="{./timestampISO}" aria-label="[[global:lastpost]]"></a>
</div>
<div class="post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill">
<a class="stretched-link" tabindex="-1" href="{config.relative_path}/topic/{./topic.slug}{{{ if ./index }}}/{./index}{{{ end }}}" aria-label="[[global:lastpost]]"></a>
{./content}
</div>
</div>
{{{ end }}}
{{{ end }}}
{{{ if !./posts.length }}}
<div component="category/posts" class="ps-2">
<div class="post-content overflow-hidden text-xs">
[[category:no-new-posts]]
</div>
</div>
{{{ end }}}
</div>
</div>
{{{ end }}}
</div>
{{{ end }}}
</li>
{{{end}}}
</ul>
{{{ end }}}
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
</div>
</div>