
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
      ";\">\n<li role=\"separator\" class=\"dropdown-divider d-none d-md-block\"></li>\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
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
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n<div class=\"text-center no-results py-2 py-md-0\">[[search:no-matches]]</li>\n<li role=\"separator\" class=\"dropdown-divider d-block d-md-none\"></li>\n");
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-tid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tid'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"d-flex flex-column gap-1\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)])) + 
          "\"\nclass=\"btn btn-ghost btn-sm ff-secondary rounded-1 text-start text-reset d-block text-truncate px-2 py-1\">\n<span class=\"quick-search-title fw-semibold text-sm\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</span>\n<br/>\n<p class=\"snippet text-xs text-break text-wrap mb-0\">\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['snippet'] : null)) + 
          "\n</p>\n</a>\n<div class=\"d-flex gap-2 post-info px-2 text-xs\">\n<div class=\"category-item d-inline-block ff-secondary\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "span"])) + 
          "\n</div>\n<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n</li>\n" + 
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
