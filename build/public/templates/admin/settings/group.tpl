<div class="acp-page-container">
<div component="settings/main/header" class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
<div class="col-12 col-md-8 px-0 mb-1 mb-md-0">
<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
</div>
<div class="col-12 col-md-4 px-0 px-md-3">
<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
</div>
</div>
<div class="row settings m-0">
<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
<div id="general" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/group:general]]</h5>
<div class="form-check form-switch mb-3">
<input class="form-check-input" type="checkbox" id="allowPrivateGroups" data-field="allowPrivateGroups">
<label for="allowPrivateGroups" class="form-check-label">[[admin/settings/group:private-groups]]</label>
<p class="form-text">[[admin/settings/group:private-groups.help]]</p>
<p class="form-text">[[admin/settings/group:private-groups.warning]]</p>
</div>
<div class="form-check form-switch mb-3">
<input class="form-check-input" type="checkbox" id="allowMultipleBadges" data-field="allowMultipleBadges">
<label for="allowMultipleBadges" class="form-check-label">[[admin/settings/group:allow-multiple-badges]]</label>
<p class="form-text">[[admin/settings/group:allow-multiple-badges-help]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="maximumGroupNameLength">[[admin/settings/group:max-name-length]]</label>
<input id="maximumGroupNameLength" class="form-control" type="text" placeholder="255" data-field="maximumGroupNameLength" />
</div>
<div class="mb=3">
<label class="form-label" for="maximumGroupTitleLength">[[admin/settings/group:max-title-length]]</label>
<input id="maximumGroupTitleLength" class="form-control" type="text" placeholder="40" data-field="maximumGroupTitleLength" />
</div>
</div>
<hr/>
<div id="group-cover-image" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/group:cover-image]]</h5>
<label class="form-label" for="groups:defaultCovers"><strong>[[admin/settings/group:default-cover]]</strong></label>
<p class="form-text">
[[admin/settings/group:default-cover-help]]
</p>
<input type="text" class="form-control input-lg" id="groups:defaultCovers" data-field="groups:defaultCovers" data-field-type="tagsinput" value="/assets/images/cover-default.png" />
</div>
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