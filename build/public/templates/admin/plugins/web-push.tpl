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
<form role="form" class="web-push-settings">
<div class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">Settings</h5>
<div class="mb-3">
<label class="form-label" for="maxLength">Maximum length</label>
<input type="number" min="0" max="4096" id="maxLength" name="maxLength" title="Maximum message length" class="form-control" placeholder="256">
<p class="form-text">
Additional characters beyond this specified length will be truncated.
Due to a software limitation, if the message body is greater than 4096 bytes, the message itself will be an attachment in the push notification.
</p>
</div>
<div class="mb-3">
<label class="form-label" for="badge">Badge URL</label>
<input type="text" id="badge" name="badge" title="Badge" class="form-control" placeholder="https://...">
<p class="form-text">
Optional — overrides the badge for messages sent (usually seen in the notification bar on mobile devices)
By default, the site's configured "touch icon" is sent.
</p>
</div>
<div class="mb-3">
<label class="form-label" for="icon">Icon URL</label>
<input type="text" id="icon" name="icon" title="Icon" class="form-control" placeholder="https://...">
<p class="form-text">
Optional — overrides the icon for messages sent (can be used for branding, etc.)
By default, the site's configured "touch icon" is sent.
</p>
</div>
</div>
</form>
<div class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">Users</h5>
<table class="table">
<thead>
<tr>
<th>User</th>
<th>Devices</th>
</tr>
</thead>
<tbody>
{{{ each users }}}
<tr>
<td>
{buildAvatar(users, "24px", false)}
{./username}
</td>
<td>{./deviceCount}</td>
</tr>
{{{ end }}}
</tbody>
</table>
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