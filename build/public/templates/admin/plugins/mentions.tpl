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
<form role="form" class="mentions-settings">
<div id="general" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">General</h5>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="autofillGroups" name="autofillGroups" />
<label for="autofillGroups" class="form-check-label">
<span>Allow mentioning User Groups</span>
</label>
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="overrideIgnores" name="overrideIgnores" />
<label for="overrideIgnores" class="form-check-label">
<span>Notify recipients of mentions even if topic is explictly ignored</span>
</label>
</div>
<div class="mb-3">
<label class="form-label" for="disableGroupMentions">Select groups you wish to disable mentions</label>
<select class="form-select" id="disableGroupMentions" name="disableGroupMentions" multiple>
<!-- BEGIN groups -->
<option value="{groups.displayName}">{groups.displayName}</option>
<!-- END groups -->
</select>
</div>
<div class="mb-3">
<label class="form-label" for="display">Mentions will display ...</label>
<select class="form-select" id="display" name="display">
<option value="">... as written</option>
<option value="fullname">... as user&apos;s full name (if set)</option>
<option value="username">... as user&apos;s username</option>
</select>
</div>
</div>
<div id="restrictions" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">Restrictions</h5>
<div class="mb-3">
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="disableFollowedTopics" name="disableFollowedTopics" />
<label for="disableFollowedTopics" class="form-check-label">
<span>Do not notify mentioned users in topics topics they already follow</span>
</label>
<p class="form-text">This avoids the &quot;double notification&quot; for recipients.</p>
</div>
</div>
<div class="mb-3">
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="privilegedDirectReplies" name="privilegedDirectReplies" />
<label for="privilegedDirectReplies" class="form-check-label">
<span>Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>
</label>
</div>
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