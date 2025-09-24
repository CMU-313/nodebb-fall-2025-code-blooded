
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"acp-page-container\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"eu-consent\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/cookies:eu-consent]]</h5>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"cookieConsentEnabled\" data-field=\"cookieConsentEnabled\">\n<label for=\"cookieConsentEnabled\" class=\"form-check-label\">[[admin/settings/cookies:consent.enabled]]</label>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cookieConsentMessage\">[[admin/settings/cookies:consent.message]]</label>\n<input class=\"form-control\" id=\"cookieConsentMessage\" type=\"text\" data-field=\"cookieConsentMessage\" />\n<p class=\"form-text\">\n[[admin/settings/cookies:consent.blank-localised-default]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cookieConsentDismiss\">[[admin/settings/cookies:consent.acceptance]]</label>\n<input class=\"form-control\" id=\"cookieConsentDismiss\" type=\"text\" data-field=\"cookieConsentDismiss\" />\n<p class=\"form-text\">\n[[admin/settings/cookies:consent.blank-localised-default]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cookieConsentLink\">[[admin/settings/cookies:consent.link-text]]</label>\n<input class=\"form-control\" id=\"cookieConsentLink\" type=\"text\" data-field=\"cookieConsentLink\" />\n<p class=\"form-text\">\n[[admin/settings/cookies:consent.blank-localised-default]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cookieConsentLinkUrl\">[[admin/settings/cookies:consent.link-url]]</label>\n<input class=\"form-control\" id=\"cookieConsentLinkUrl\" type=\"text\" data-field=\"cookieConsentLinkUrl\" />\n</div>\n</div>\n<hr/>\n<div id=\"cookie-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/cookies:settings]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cookieDomain\">[[admin/settings/cookies:cookie-domain]]</label>\n<input class=\"form-control\" id=\"cookieDomain\" type=\"text\" placeholder=\".domain.tld\" data-field=\"cookieDomain\" />\n<p class=\"form-text\">\n[[admin/settings/cookies:blank-default]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maxUserSessions\">[[admin/settings/cookies:max-user-sessions]]</label>\n<input class=\"form-control\" id=\"maxUserSessions\" type=\"number\" placeholder=\"10\" data-field=\"maxUserSessions\" />\n<p class=\"form-text\">\n[[admin/settings/cookies:blank-default]]\n</p>\n</div>\n<div class=\"mb-3\">\n<button id=\"delete-all-sessions\" class=\"btn btn-danger\">Revoke All Sessions</button>\n<p class=\"form-text\">\nThis will delete all sessions, you will be logged out and will have to login again!\n</p>\n</div>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
