
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"tag-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/tags:tag]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"systemTags\">[[admin/settings/tags:system-tags]]</label>\n<input id=\"systemTags\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"systemTags\" data-field-type=\"tagsinput\" />\n<p class=\"form-text\">\n[[admin/settings/tags:system-tags-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"minimumTagsPerTopics\">[[admin/settings/tags:min-per-topic]]</label>\n<input id=\"minimumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"minimumTagsPerTopic\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maximumTagsPerTopics\">[[admin/settings/tags:max-per-topic]]</label>\n<input id=\"maximumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumTagsPerTopic\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"minimumTagLength\">[[admin/settings/tags:min-length]]</label>\n<input id=\"minimumTagLength\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"minimumTagLength\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maximumTagLength\">[[admin/settings/tags:max-length]]</label>\n<input id=\"maximumTagLength\" type=\"text\" class=\"form-control\" value=\"15\" data-field=\"maximumTagLength\">\n</div>\n</div>\n<hr/>\n<div id=\"related-topics\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/tags:related-topics]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maximumRelatedTopics\">[[admin/settings/tags:max-related-topics]]</label>\n<input id=\"maximumRelatedTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumRelatedTopics\">\n</div>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
