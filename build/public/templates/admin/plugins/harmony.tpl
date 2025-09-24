<div class="acp-page-container">
<div component="settings/main/header" class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
<div class="col-12 col-md-8 px-0 mb-1 mb-md-0">
<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
</div>
<div class="col-12 col-md-4 px-0 px-md-3">
<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
</div>
</div>
<div class="row m-0">
<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
<form role="form" class="harmony-settings">
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="enableQuickReply" name="enableQuickReply" />
<label for="enableQuickReply" class="form-check-label">[[themes/harmony:settings.enableQuickReply]]</label>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="enableBreadcrumbs" name="enableBreadcrumbs" />
<label for="enableBreadcrumbs" class="form-check-label">[[themes/harmony:settings.enableBreadcrumbs]]</label>
<p class="form-text">[[themes/harmony:settings.enableBreadcrumbs.why]]</p>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="centerHeaderElements" name="centerHeaderElements" />
<label for="centerHeaderElements" class="form-check-label">[[themes/harmony:settings.centerHeaderElements]]</label>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="mobileTopicTeasers" name="mobileTopicTeasers" />
<label for="mobileTopicTeasers" class="form-check-label">[[themes/harmony:settings.mobileTopicTeasers]]</label>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="stickyToolbar" name="stickyToolbar" />
<div for="stickyToolbar" class="form-check-label">
[[themes/harmony:settings.stickyToolbar]]
<p class="form-text">
[[themes/harmony:settings.stickyToolbar.help]]
</p>
</div>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="topicSidebarTools" name="topicSidebarTools" />
<div for="topicSidebarTools" class="form-check-label">
[[themes/harmony:settings.topicSidebarTools]]
<p class="form-text">
[[themes/harmony:settings.topicSidebarTools.help]]
</p>
</div>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="autohideBottombar" name="autohideBottombar" />
<div for="autohideBottombar" class="form-check-label">
[[themes/harmony:settings.autohideBottombar]]
<p class="form-text">
[[themes/harmony:settings.autohideBottombar.help]]
</p>
</div>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="topMobilebar" name="topMobilebar" />
<div for="topMobilebar" class="form-check-label">
[[themes/harmony:settings.topMobilebar]]
</div>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="openSidebars" name="openSidebars" />
<label for="openSidebars" class="form-check-label">[[themes/harmony:settings.openSidebars]]</label>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="chatModals" name="chatModals" />
<div for="chatModals" class="form-check-label">
[[themes/harmony:settings.chatModals]]
</div>
</div>
</form>
</div>
<div class="col-md-4 d-none d-md-block px-3 hidden" component="settings/toc">
<div class="sticky-top" style="top: 4.0rem;">
<div class="fw-bold text-xs text-muted mb-1">[[admin/settings/general:on-this-page]]</div>
<nav id="settings-navbar" class="h-100 flex-column align-items-stretch">
<nav class="nav nav-pills flex-column gap-2" component="settings/toc/list">
<!-- this is filled by public/src/admin/settings.js populateTOC function -->
</nav>
</nav>
</div>
</div>
</div>
</div>