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
<form role="form" class="composer-default-settings mb-4">
<div class="form-check form-switch">
<input id="composeRouteEnabled" class="form-check-input" type="checkbox" name="composeRouteEnabled" />
<label for="composeRouteEnabled" class="form-check-label">Use a separate route for the composer</label>
</div>
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="hidePreviewOnOpen" name="hidePreviewOnOpen" />
<label for="hidePreviewOnOpen" class="form-check-label">Hide preview on open</label>
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