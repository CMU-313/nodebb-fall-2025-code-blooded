<li class="nav-item mx-2 order-last order-md-first" title="[[global:login]]" role="menuitem">
<a class="nav-link" href="{relative_path}/login" aria-label="[[global:login]]">
<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
<span class="position-relative">
<i class="fa fa-fw fa-sign-in"></i>
</span>
<span class="nav-text small visible-open fw-semibold">[[global:login]]</span>
</span>
</a>
</li>
<hr class="my-2 mx-2 visible-open">
{{{ if allowRegistration }}}
<li class="nav-item mx-2" title="[[global:register]]" role="menuitem">
<span class="text-xs visible-open">[[login:dont-have-account]]</span>
<a class="nav-link" href="{relative_path}/register" aria-label="[[global:register]]">
<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
<span class="position-relative">
<i class="fa fa-fw fa-user-plus"></i>
</span>
<span class="nav-text small visible-open fw-semibold">[[global:register]]</span>
</span>
</a>
</li>
<hr class="my-2 mx-2 visible-open">
{{{ end }}}
{{{ if config.searchEnabled }}}
{{{ if user.privileges.search:content }}}
<li component="sidebar/search" class="nav-item mx-2 search dropstart position-relative" title="[[global:header.search]]" role="menuitem">
<a component="search/button" id="search-button" href="#" role="button" class="nav-link d-flex gap-2 align-items-center text-truncate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[global:search]]">
<span>
<i class="fa fa-search fa-fw"></i>
</span>
<span class="nav-text small visible-open fw-semibold">[[global:search]]</span>
</a>
<div class="search-dropdown dropdown-menu p-2 shadow" role="menu">
<form component="search/form" id="search-form" class="d-flex justify-content-end align-items-center" role="search" method="GET">
<div component="search/fields" class="w-100" id="search-fields">
<div class="d-flex gap-1">
<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" aria-label="[[search:type-to-search]]">
<a class="btn btn-ghost advanced-search-link p-2" href="{config.relative_path}/search" title="[[search:advanced-search]]">
<i class="fa fa-gears text-muted"></i>
</a>
</div>
<div id="quick-search-container" class="quick-search-container d-block mt-2 hidden">
<div class="form-check filter-category mb-2 ms-2">
<input class="form-check-input" type="checkbox" checked>
<label class="form-check-label name text-sm"></label>
</div>
<div class="text-center loading-indicator"><i class="fa fa-spinner fa-spin"></i></div>
<div class="quick-search-results-container"></div>
</div>
<button type="submit" class="btn btn-outline-secondary hide">[[global:search]]</button>
</div>
</form>
</div>
</li>
{{{ else }}}
<li component="sidebar/search" class="visible-open nav-item mx-2 search">
<div class="d-flex gap-2 py-1 px-2 align-items-center" title="[[themes/harmony:login-register-to-search]]">
<i class="fa fa-fw fa-search"></i>
<span class="nav-text visible-open text-xs">[[themes/harmony:login-register-to-search]]</span>
</div>
</li>
{{{ end }}}
{{{ end }}}