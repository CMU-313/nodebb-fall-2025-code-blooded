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
<div id="tag-settings" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/tags:tag]]</h5>
<div class="mb-3">
<label class="form-label" for="systemTags">[[admin/settings/tags:system-tags]]</label>
<input id="systemTags" type="text" class="form-control" value="" data-field="systemTags" data-field-type="tagsinput" />
<p class="form-text">
[[admin/settings/tags:system-tags-help]]
</p>
</div>
<div class="mb-3">
<label class="form-label" for="minimumTagsPerTopics">[[admin/settings/tags:min-per-topic]]</label>
<input id="minimumTagsPerTopics" type="text" class="form-control" value="0" data-field="minimumTagsPerTopic">
</div>
<div class="mb-3">
<label class="form-label" for="maximumTagsPerTopics">[[admin/settings/tags:max-per-topic]]</label>
<input id="maximumTagsPerTopics" type="text" class="form-control" value="5" data-field="maximumTagsPerTopic">
</div>
<div class="mb-3">
<label class="form-label" for="minimumTagLength">[[admin/settings/tags:min-length]]</label>
<input id="minimumTagLength" type="text" class="form-control" value="3" data-field="minimumTagLength">
</div>
<div class="mb-3">
<label class="form-label" for="maximumTagLength">[[admin/settings/tags:max-length]]</label>
<input id="maximumTagLength" type="text" class="form-control" value="15" data-field="maximumTagLength">
</div>
</div>
<hr/>
<div id="related-topics" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/tags:related-topics]]</h5>
<div class="mb-3">
<label class="form-label" for="maximumRelatedTopics">[[admin/settings/tags:max-related-topics]]</label>
<input id="maximumRelatedTopics" type="text" class="form-control" value="5" data-field="maximumRelatedTopics">
</div>
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