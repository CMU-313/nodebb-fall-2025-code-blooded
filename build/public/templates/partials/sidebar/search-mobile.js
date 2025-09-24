
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
    return "<a component=\"search/button\" id=\"search-button\" href=\"#\" role=\"button\" class=\"nav-link text-truncate\" data-bs-toggle=\"dropdown\" title=\"[[global:header.search]]\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-search fa-fw\"></i>\n<span class=\"nav-text visible-open px-2 fw-semibold\">[[global:search]]</span>\n</a>\n<div class=\"search-dropdown dropdown-menu p-2 shadow\" role=\"menu\">\n<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n<div component=\"search/fields\" class=\"d-flex flex-column w-100 " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null) ?
        "flex-column-reverse gap-2" :
        "") + 
      "\" id=\"search-fields\">\n<div id=\"quick-search-container\" class=\"quick-search-container d-block hidden\">\n<div class=\"form-check filter-category mb-2 ms-2\">\n<input class=\"form-check-input\" type=\"checkbox\" checked>\n<label class=\"form-check-label name\"></label>\n</div>\n<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n<div class=\"quick-search-results-container\"></div>\n</div>\n<div class=\"d-flex gap-1 input-container\">\n<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\" aria-label=\"[[search:type-to-search]]\">\n<a class=\"nav-link d-flex justify-content-center align-items-center advanced-search-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/search\" title=\"[[search:advanced-search]]\">\n<i class=\"fa fa-gears fa-fw text-muted\"></i>\n</a>\n</div>\n<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n</div>\n</form>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
