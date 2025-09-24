<nav component="sidebar/left" class="{{{ if config.theme.openSidebars}}}open{{{ end }}} text-dark bg-light sidebar sidebar-left start-0 border-end vh-100 d-none d-lg-flex flex-column justify-content-between sticky-top">
<ul id="main-nav" class="list-unstyled d-flex flex-column w-100 gap-2 mt-2 overflow-y-auto">
{{{ each navigation }}}
{{{ if displayMenuItem(@root, @index) }}}
<li class="nav-item mx-2 {./class}{{{ if ./dropdown }}} dropend{{{ end }}}" title="{./title}">
<a class="nav-link navigation-link d-flex gap-2 justify-content-between align-items-center {{{ if ./dropdown }}}dropdown-toggle{{{ end }}}" {{{ if ./dropdown }}} href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" {{{ else }}} href="{./route}"{{{ end }}} {{{ if ./id }}}id="{./id}"{{{ end }}}{{{ if ./targetBlank }}} target="_blank"{{{ end }}} {{{ if ./text }}}aria-label="{./text}"{{{ end }}}>
<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
<span class="position-relative">
{{{ if ./iconClass }}}
<i class="fa fa-fw {./iconClass}" data-content="{./content}"></i>
<span component="navigation/count" class="visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary {{{ if !./content }}}hidden{{{ end }}}">{./content}</span>
{{{ end }}}
</span>
{{{ if ./text }}}<span class="nav-text small visible-open fw-semibold text-truncate">{./text}</span>{{{ end }}}
</span>
<span component="navigation/count" class="visible-open badge rounded-1 bg-primary {{{ if !./content }}}hidden{{{ end }}}">{./content}</span>
</a>
{{{ if ./dropdown }}}
<ul class="dropdown-menu p-1 shadow" role="menu">
{./dropdownContent}
</ul>
{{{ end }}}
</li>
{{{ end }}}
{{{ end }}}
</ul>
<div class="sidebar-toggle-container align-self-start">
{{{ if !config.disableCustomUserSkins }}}
<div class="dropend m-2" component="skinSwitcher" title="[[themes/harmony:skins]]">
<a data-bs-toggle="dropdown" href="#" role="button" class="nav-link position-relative" aria-haspopup="true" aria-expanded="false" aria-label="[[themes/harmony:skins]]">
<span class="justify-content-between w-100">
<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
<span>
<i component="skinSwitcher/icon" class="fa fa-fw fa-paintbrush"></i>
</span>
<span class="nav-text small visible-open fw-semibold">[[themes/harmony:skins]]</span>
</span>
</span>
</a>
<ul class="dropdown-menu p-1 text-sm overflow-auto p-1" role="menu">
<div class="d-flex">
<div>
<li class="dropdown-header">Light</li>
<div class="d-grid" style="grid-template-columns: 1fr 1fr;">
{{{ each bootswatchSkinOptions.light }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-value="{./value}" role="menuitem">{./name} <i class="fa fa-fw fa-check {{{ if !./selected }}} invisible {{{ end }}}"></i></a>
</li>
{{{ end }}}
</div>
</div>
<div>
<li class="dropdown-header">Dark</li>
{{{ each bootswatchSkinOptions.dark }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-value="{./value}" role="menuitem">{./name} <i class="fa fa-fw fa-check {{{ if !./selected }}} invisible {{{ end }}}"></i></a>
</li>
{{{ end }}}
</div>
</div>
<hr class="my-1"/>
<div class="d-grid" style="grid-template-columns: 1fr 1fr;">
{{{ each bootswatchSkinOptions.default }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-value="{./value}" role="menuitem">{./name} <i class="fa fa-fw fa-check {{{ if !./selected }}} invisible {{{ end }}}"></i></a>
</li>
{{{ end }}}
{{{ each bootswatchSkinOptions.custom }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-value="{./value}" role="menuitem">{./name} <i class="fa fa-fw fa-check {{{ if !./selected }}} invisible {{{ end }}}"></i></a>
</li>
{{{ end }}}
</div>
</ul>
</div>
{{{ end }}}
<div class="sidebar-toggle m-2 d-none d-lg-block">
<a href="#" role="button" component="sidebar/toggle" class="nav-link d-flex gap-2 align-items-center p-2 pointer w-100 text-nowrap" title="[[themes/harmony:expand]]" aria-label="[[themes/harmony:sidebar-toggle]]">
<i class="fa fa-fw fa-angles-right"></i>
<i class="fa fa-fw fa-angles-left"></i>
<span class="nav-text visible-open fw-semibold small lh-1">[[themes/harmony:collapse]]</span>
</a>
</div>
</div>
</nav>