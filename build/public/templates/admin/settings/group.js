
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"general\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/group:general]]</h5>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"allowPrivateGroups\" data-field=\"allowPrivateGroups\">\n<label for=\"allowPrivateGroups\" class=\"form-check-label\">[[admin/settings/group:private-groups]]</label>\n<p class=\"form-text\">[[admin/settings/group:private-groups.help]]</p>\n<p class=\"form-text\">[[admin/settings/group:private-groups.warning]]</p>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"allowMultipleBadges\" data-field=\"allowMultipleBadges\">\n<label for=\"allowMultipleBadges\" class=\"form-check-label\">[[admin/settings/group:allow-multiple-badges]]</label>\n<p class=\"form-text\">[[admin/settings/group:allow-multiple-badges-help]]</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maximumGroupNameLength\">[[admin/settings/group:max-name-length]]</label>\n<input id=\"maximumGroupNameLength\" class=\"form-control\" type=\"text\" placeholder=\"255\" data-field=\"maximumGroupNameLength\" />\n</div>\n<div class=\"mb=3\">\n<label class=\"form-label\" for=\"maximumGroupTitleLength\">[[admin/settings/group:max-title-length]]</label>\n<input id=\"maximumGroupTitleLength\" class=\"form-control\" type=\"text\" placeholder=\"40\" data-field=\"maximumGroupTitleLength\" />\n</div>\n</div>\n<hr/>\n<div id=\"group-cover-image\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/group:cover-image]]</h5>\n<label class=\"form-label\" for=\"groups:defaultCovers\"><strong>[[admin/settings/group:default-cover]]</strong></label>\n<p class=\"form-text\">\n[[admin/settings/group:default-cover-help]]\n</p>\n<input type=\"text\" class=\"form-control input-lg\" id=\"groups:defaultCovers\" data-field=\"groups:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" />\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
