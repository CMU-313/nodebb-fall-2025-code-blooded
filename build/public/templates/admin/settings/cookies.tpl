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
<div id="eu-consent" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/cookies:eu-consent]]</h5>
<div class="mb-3">
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="cookieConsentEnabled" data-field="cookieConsentEnabled">
<label for="cookieConsentEnabled" class="form-check-label">[[admin/settings/cookies:consent.enabled]]</label>
</div>
</div>
<div class="mb-3">
<label class="form-label" for="cookieConsentMessage">[[admin/settings/cookies:consent.message]]</label>
<input class="form-control" id="cookieConsentMessage" type="text" data-field="cookieConsentMessage" />
<p class="form-text">
[[admin/settings/cookies:consent.blank-localised-default]]
</p>
</div>
<div class="mb-3">
<label class="form-label" for="cookieConsentDismiss">[[admin/settings/cookies:consent.acceptance]]</label>
<input class="form-control" id="cookieConsentDismiss" type="text" data-field="cookieConsentDismiss" />
<p class="form-text">
[[admin/settings/cookies:consent.blank-localised-default]]
</p>
</div>
<div class="mb-3">
<label class="form-label" for="cookieConsentLink">[[admin/settings/cookies:consent.link-text]]</label>
<input class="form-control" id="cookieConsentLink" type="text" data-field="cookieConsentLink" />
<p class="form-text">
[[admin/settings/cookies:consent.blank-localised-default]]
</p>
</div>
<div class="mb-3">
<label class="form-label" for="cookieConsentLinkUrl">[[admin/settings/cookies:consent.link-url]]</label>
<input class="form-control" id="cookieConsentLinkUrl" type="text" data-field="cookieConsentLinkUrl" />
</div>
</div>
<hr/>
<div id="cookie-settings" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header">[[admin/settings/cookies:settings]]</h5>
<div class="mb-3">
<label class="form-label" for="cookieDomain">[[admin/settings/cookies:cookie-domain]]</label>
<input class="form-control" id="cookieDomain" type="text" placeholder=".domain.tld" data-field="cookieDomain" />
<p class="form-text">
[[admin/settings/cookies:blank-default]]
</p>
</div>
<div class="mb-3">
<label class="form-label" for="maxUserSessions">[[admin/settings/cookies:max-user-sessions]]</label>
<input class="form-control" id="maxUserSessions" type="number" placeholder="10" data-field="maxUserSessions" />
<p class="form-text">
[[admin/settings/cookies:blank-default]]
</p>
</div>
<div class="mb-3">
<button id="delete-all-sessions" class="btn btn-danger">Revoke All Sessions</button>
<p class="form-text">
This will delete all sessions, you will be logged out and will have to login again!
</p>
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