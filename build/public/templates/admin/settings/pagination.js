
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"pagination\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header hidden\">[[admin/settings/pagination:pagination]]</h5>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"usePagination\" data-field=\"usePagination\">\n<label for=\"usePagination\" class=\"form-check-label\">[[admin/settings/pagination:enable]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/settings/pagination:posts-per-page]]</label>\n<input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"postsPerPage\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/settings/pagination:max-posts-per-page]]</label>\n<input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxPostsPerPage\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/settings/pagination:topics-per-page]]</label>\n<input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"topicsPerPage\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/settings/pagination:max-topics-per-page]]</label>\n<input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxTopicsPerPage\">\n</div>\n<div>\n<label class=\"form-label\">[[admin/settings/pagination:categories-per-page]]</label>\n<input type=\"text\" class=\"form-control\" value=\"50\" data-field=\"categoriesPerPage\">\n</div>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
