
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
    return "<ul data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" class=\"m-0 p-0 list-unstyled user-select-none\">\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "disabled" :
            "") + 
          "\">\n<hr/>\n<div class=\"category-row d-flex justify-content-between mb-1\">\n<div class=\"flex-grow-1 align-items-start d-flex gap-2\">\n<div class=\"d-flex gap-2\">\n<div class=\"toggle text-center text-sm\">\n<i class=\"fa fa-chevron-down\"></i>\n</div>\n<div class=\"information flex-1 align-items-start d-flex gap-2\">\n<div>\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "28px", "rounded-1"])) + 
          "\n</div>\n<div class=\"d-grid gap-0\">\n<div class=\"title fw-semibold\">\n<a class=\"category-header text-reset\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "</a> " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "<a class=\"text-xs text-muted\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "\"><i class=\"fa fa-link\"></i> " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "</a>" :
            "") + 
          "\n</div>\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n<div class=\"description text-muted text-xs w-100\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "</div>\n" :
            "") + 
          "\n</div>\n</div>\n</div>\n</div>\n<div class=\"flex-shrink-0 d-flex gap-1 align-items-start\">\n<a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" class=\"btn btn-light btn-sm d-none d-sm-block\" target=\"_blank\">[[admin/admin:view]]</a>\n<a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"btn btn-light btn-sm d-none d-sm-block\">[[admin/manage/categories:edit]]</a>\n<div class=\"category-tools\">\n<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" type=\"button\"><i class=\"fa fa-fw fa-gear text-primary\"></i></button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1\" role=\"menu\">\n<li>\n<a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" class=\"dropdown-item rounded-1 d-block d-sm-none\" target=\"_blank\" role=\"menuitem\">[[admin/admin:view]]</a>\n</li>\n<li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"dropdown-item rounded-1 d-block d-sm-none\" role=\"menuitem\">[[admin/manage/categories:edit]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "/analytics\" role=\"menuitem\">[[admin/manage/categories:analytics]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/privileges/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" role=\"menuitem\">[[admin/manage/categories:privileges]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "/federation\" role=\"menuitem\">[[admin/manage/categories:federation]]</a></li>\n<li><a href=\"#\" class=\"set-order dropdown-item rounded-1\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-order=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['order'] : null)) + 
          "\" role=\"menuitem\">[[admin/manage/categories:set-order]]</a></li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a class=\"dropdown-item rounded-1\" href=\"#\" data-disable-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-action=\"toggle\" data-disabled=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null)) + 
          "\" role=\"menuitem\">\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "\n[[admin/manage/categories:enable]]\n" :
            "\n[[admin/manage/categories:disable]]\n") + 
          "\n</a>\n</li>\n</ul>\n</div>\n</div>\n</div>\n<ul class=\"list-unstyled has-more-categories mt-2 " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['hasMoreSubCategories'] : null) ?
            "" :
            "hidden") + 
          "\" data-hasmore=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['hasMoreSubCategories'] : null) ?
            "1" :
            "0") + 
          "\">\n<li class=\"d-flex gap-2\">\n<div class=\"invisible toggle text-center text-sm\">\n<i class=\"fa fa-chevron-down\"></i>\n</div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "&page=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['showMorePage'] : null)) + 
          "\" class=\"btn btn-sm btn-light\">[[category:x-more-categories, " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['subCategoriesLeft'] : null)) + 
          "]]</a>\n</li>\n</ul>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
