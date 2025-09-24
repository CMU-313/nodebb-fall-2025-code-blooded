<div component="composer" class="composer pb-3 h-100 {{{ if resizable }}} resizable{{{ end }}}{{{ if !isTopicOrMain }}} reply{{{ end }}}"{{{ if !disabled }}} style="visibility: inherit;"{{{ end }}}>
<div class="composer-container d-flex flex-column gap-1 h-100">
<form id="compose-form" method="post">
{{{ if pid }}}
<input type="hidden" name="pid" value="{pid}" />
<input type="hidden" name="thumb" value="{thumb}" />
{{{ end }}}
{{{ if tid }}}
<input type="hidden" name="tid" value="{tid}" />
{{{ end }}}
{{{ if cid }}}
<input type="hidden" name="cid" value="{cid}" />
{{{ end }}}
<input type="hidden" name="_csrf" value="{config.csrf_token}" />
</form>
<div class="title-container align-items-center gap-2 d-flex">
{{{ if isTopic }}}
<div class="category-list-container {{{ if !template.compose }}}d-none d-md-block{{{ end }}} align-self-center">
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
{{{ if showHandleInput }}}
<div data-component="composer/handle">
<input class="handle form-control h-100 border-0 shadow-none" type="text" placeholder="[[topic:composer.handle-placeholder]]" value="{handle}" />
</div>
{{{ end }}}
<div data-component="composer/title" class="position-relative flex-1" style="min-width: 0;">
{{{ if isTopicOrMain }}}
<input class="title form-control h-100 rounded-1 shadow-none" type="text" placeholder="[[topic:composer.title-placeholder]]" value="{topicTitle}" />
{{{ else }}}
<span class="{{{ if !template.compose }}}d-none d-md-block{{{ else }}}d-block{{{ end }}} title h-100 text-truncate">{{{ if isEditing }}}[[topic:composer.editing-in, "{topicTitle}"]]{{{ else }}}[[topic:composer.replying-to, "{topicTitle}"]]{{{ end }}}</span>
{{{ end }}}
<div id="quick-search-container" class="quick-search-container mt-2 dropdown-menu d-block p-2 hidden">
<div class="text-center loading-indicator"><i class="fa fa-spinner fa-spin"></i></div>
<div class="quick-search-results-container"></div>
</div>
</div>
<div class="{{{ if !template.compose }}}d-none d-md-flex{{{ else }}}d-flex{{{ end }}} action-bar gap-1 align-items-center">
<button class="btn btn-sm btn-link text-body fw-semibold composer-minimize" data-action="hide"><i class="fa fa-angle-down"></i> <span class="d-none d-md-inline">[[topic:composer.hide]]</span></button>
<button class="btn btn-sm btn-link composer-discard text-body fw-semibold" data-action="discard"><i class="fa fa-trash"></i> <span class="d-none d-md-inline">[[topic:composer.discard]]</button>
<div class="btn-group btn-group-sm" component="composer/submit/container">
<button class="btn btn-primary composer-submit fw-bold {{{ if !(submitOptions.length || canSchedule) }}}rounded-1{{{ end }}}" data-action="post" data-text-variant=" [[topic:composer.schedule]]"><i class="fa fa-check"></i> <span class="d-none d-md-inline">[[topic:composer.submit]]</span></button>
<div component="composer/submit/options/container" data-submit-options="{submitOptions.length}" class="btn-group btn-group-sm {{{ if !(submitOptions.length || canSchedule) }}}hidden{{{ end }}}">
<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-caret-down"></i>
<span class="sr-only">[[topic:composer.additional-options]]</span>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1" role="menu">
<li><a class="dropdown-item rounded-1 display-scheduler {{{ if !canSchedule }}}hidden{{{ end }}}" role="menuitem">[[topic:composer.post-later]]</a></li>
<li><a class="dropdown-item rounded-1 cancel-scheduling hidden" role="menuitem">[[modules:composer.cancel-scheduling]]</a></li>
{{{ each submitOptions }}}
<li><a class="dropdown-item rounded-1" href="#" data-action="{./action}" role="menuitem">{./text}</a></li>
{{{ end }}}
</ul>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-between gap-2 align-items-center formatting-bar m-0">
<ul class="list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto">
{{{ each formatting }}}
{{{ if ./spacer }}}
<li class="small spacer"></li>
{{{ else }}}
{{{ if (./visibility.desktop && ((isTopicOrMain && ./visibility.main) || (!isTopicOrMain && ./visibility.reply))) }}}
{{{ if ./dropdownItems.length }}}
<li class="dropdown dropdown-left bottom-sheet" title="{./title}">
<button class="btn btn-sm btn-link text-reset" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="{./title}">
<i class="{./className}"></i>
</button>
<ul class="dropdown-menu p-1" role="menu">
{{{ each ./dropdownItems }}}
<li>
<a href="#" data-format="{./name}" class="dropdown-item rounded-1 position-relative" role="menuitem">
<i class="{./className} text-secondary"></i> {./text}
{{{ if ./badge }}}
<span class="px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info"></span>
{{{ end }}}
</a>
</li>
{{{ end }}}
</ul>
</li>
{{{ else }}}
<li title="{./title}">
<button data-format="{./name}" class="btn btn-sm btn-link text-reset position-relative" aria-label="{./title}">
<i class="{./className}"></i>
{{{ if ./badge }}}
<span class="px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info"></span>
{{{ end }}}
</button>
</li>
{{{ end }}}
{{{ end }}}
{{{ end }}}
{{{ end }}}
{{{ if canUploadImage }}}
<li title="[[modules:composer.upload-picture]]">
<button data-format="picture" class="img-upload-btn btn btn-sm btn-link text-reset" aria-label="[[modules:composer.upload-picture]]">
<i class="fa fa-file-image-o"></i>
</button>
</li>
{{{ end }}}
{{{ if canUploadFile }}}
<li title="[[modules:composer.upload-file]]">
<button data-format="upload" class="file-upload-btn btn btn-sm btn-link text-reset" aria-label="[[modules:composer.upload-file]]">
<i class="fa fa-file-o"></i>
</button>
</li>
{{{ end }}}
<form id="fileForm" method="post" enctype="multipart/form-data">
<input type="file" id="files" name="files[]" multiple class="hide"/>
</form>
</ul>
<div class="d-flex align-items-center gap-1">
<div class="draft-icon m-2 hidden-xs hidden-sm"></div>
<button class="btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap" data-action="preview">
<i class="fa fa-eye"></i>
<span class="d-none d-xl-inline show-text">[[modules:composer.show-preview]]</span>
<span class="d-none d-xl-inline hide-text">[[modules:composer.hide-preview]]</span>
</button>
{{{ if composer:showHelpTab }}}
<button class="btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap" data-action="help">
<i class="fa fa-question"></i>
<span class="d-none d-xl-inline">[[modules:composer.help]]</span>
</button>
{{{ end }}}
</div>
</div>
<div class="write-preview-container d-flex gap-2 flex-grow-1 overflow-auto">
<div class="write-container d-flex d-md-flex w-50 position-relative">
<div component="composer/post-queue/alert" class="m-2 alert alert-info fade pe-none position-absolute top-0 start-0 alert-dismissible">[[modules:composer.post-queue-alert]]<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
<div class="draft-icon position-absolute end-0 top-0 mx-2 my-1 hidden-md hidden-lg"></div>
<textarea class="write shadow-none rounded-1 w-100 form-control" placeholder="[[modules:composer.textarea.placeholder]]">{body}</textarea>
</div>
<div class="preview-container d-none d-md-flex w-50">
<div class="preview w-100 overflow-auto"></div>
</div>
</div>
{{{ if isTopicOrMain }}}
<div class="tag-row">
<div class="tags-container d-flex align-items-center {{{ if tagWhitelist.length }}}haswhitelist{{{ end }}}">
<div class="btn-group dropup me-2 {{{ if !tagWhitelist.length }}}hidden{{{ end }}}" component="composer/tag/dropdown">
<button class="btn btn-sm btn-link text-body dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>
[[tags:select-tags]]
</button>
<ul class="dropdown-menu p-1" role="menu">
{{{ each tagWhitelist }}}
<li data-tag="{@value}"><a class="dropdown-item rounded-1" href="#" role="menuitem">{@value}</a></li>
{{{ end }}}
</ul>
</div>
<input class="tags" type="text" class="" placeholder="[[tags:enter-tags-here, {minimumTagLength}, {maximumTagLength}]]" />
</div>
</div>
{{{ end }}}
</div>
</div>