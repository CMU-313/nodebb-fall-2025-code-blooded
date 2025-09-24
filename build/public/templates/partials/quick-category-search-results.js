
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
    return ((guard((context != null) ? context['multiplePages'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null)) ?
        "\n<div class=\"show-more-container\">\n<div class=\"text-center d-block d-md-none\">\n<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"btn btn-sm btn-primary\">[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]</a>\n</div>\n<li role=\"separator\" class=\"dropdown-divider d-block d-md-none\"></li>\n</div>\n" :
        "") + 
      "\n<ul id=\"quick-search-results\" class=\"quick-search-results list-unstyled mb-0 p-0 pe-1 overflow-auto overscroll-behavior-contain ff-base ghost-scrollbar\" style=\"max-width: " + 
      __escape(guard((context != null && context['dropdown'] != null) ? context['dropdown']['maxWidth'] : null)) + 
      "; max-height: " + 
      __escape(guard((context != null && context['dropdown'] != null) ? context['dropdown']['maxHeight'] : null)) + 
      ";\">\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n" + 
      (guard((context != null) ? context['multiplePages'] : null) ?
        "\n<div class=\"text-center mt-2 d-none d-md-block\">\n<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"btn btn-sm btn-primary\">[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]</a>\n</div>\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['multiplePages'] : null) && guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null)) ?
        "\n<div class=\"text-center mt-2 d-block d-md-none\">\n<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"btn btn-sm btn-primary\">[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]</a>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "" :
        "\n<div class=\"text-center no-results py-2 py-md-0\">[[search:no-matches]]</li>\n<li role=\"separator\" class=\"dropdown-divider d-block d-md-none\"></li>\n");
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"d-flex flex-column gap-1\">\n<div class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center rounded-1 text-start text-reset d-block text-truncate px-2 py-1 position-relative\">\n<div class=\"flex-shrink-0\">" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "40px", "rounded-1"])) + 
          "</div>\n<div class=\"flex-grow-1\">\n<a class=\"stretched-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
          "\"></a>\n<span class=\"quick-search-title fw-semibold text-sm\">\n" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['inbox'] : null) ?
            "\n(<i class=\"fa fa-globe\"></i> " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
              ")\n" :
            "") + 
          "\n</span>\n<br/>\n<div class=\"snippet text-xs text-break text-wrap mb-0 text-sm text-secondary line-clamp-1\">\n" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
          "\n</div>\n</div>\n</div>\n</li>\n" + 
          (index === length - 1 ?
            "" :
            "\n<li role=\"separator\" class=\"dropdown-divider\"></li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
