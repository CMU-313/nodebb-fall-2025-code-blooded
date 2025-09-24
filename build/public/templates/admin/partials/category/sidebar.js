
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
    return "<div class=\"col-12 col-md-4 px-0 px-md-3 options acp-sidebar\">\n<div class=\"p-2 d-flex flex-column text-bg-light border rounded-1 gap-1\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\"><i class=\"fa fa-fw fa-chevron-left text-primary\"></i> [[admin/manage/categories:back-to-categories]]</a>\n<hr class=\"my-1\"/>\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['name'] : null) == "admin/manage/category") ?
        "\n<button class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center copy-settings\">\n<i class=\"fa fa-fw fa-files-o text-primary\"></i> [[admin/manage/categories:copy-settings]]\n</button>\n" :
        "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories/" + 
          __escape((guard((context != null) ? context['cid'] : null) || guard((context != null && context['category'] != null) ? context['category']['cid'] : null))) + 
          "\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-edit text-primary\"></i> [[admin/manage/categories:edit]]\n</a>\n") + 
      "\n<a class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories/" + 
      __escape((guard((context != null) ? context['cid'] : null) || guard((context != null && context['category'] != null) ? context['category']['cid'] : null))) + 
      "/analytics\"><i class=\"fa fa-fw fa-chart-simple text-primary\"></i> [[admin/manage/categories:analytics]]</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/privileges/" + 
      __escape((guard((context != null) ? context['cid'] : null) || guard((context != null && context['category'] != null) ? context['category']['cid'] : null))) + 
      "\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-lock text-primary\"></i> [[admin/manage/categories:privileges]]\n</a>\n<a class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories/" + 
      __escape((guard((context != null) ? context['cid'] : null) || guard((context != null && context['category'] != null) ? context['category']['cid'] : null))) + 
      "/federation\">\n<i class=\"fa fa-fw fa-globe text-primary\"></i> [[admin/manage/categories:federation]]\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape((guard((context != null) ? context['cid'] : null) || guard((context != null && context['category'] != null) ? context['category']['cid'] : null))) + 
      "\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-eye text-primary\"></i> [[admin/manage/categories:view-category]]\n</a>\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['name'] : null) == "admin/manage/category") ?
        "\n<hr class=\"my-1\"/>\n<button data-action=\"toggle\" data-disabled=\"" + 
          __escape((guard((context != null) ? context['disabled'] : null) || guard((context != null && context['category'] != null) ? context['category']['disabled'] : null))) + 
          "\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n" + 
          ((guard((context != null) ? context['disabled'] : null) || guard((context != null && context['category'] != null) ? context['category']['disabled'] : null)) ?
            "\n<i class=\"fa fa-fw fa-check text-success\"></i>\n<span class=\"label\">[[admin/manage/categories:enable]]</span>\n" :
            "\n<i class=\"fa fa-fw fa-ban text-danger\"></i>\n<span class=\"label\">[[admin/manage/categories:disable]]</span>\n") + 
          "\n</button>\n<button class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center purge\">\n<i class=\"fa fa-fw fa-trash text-danger\"></i> [[admin/manage/categories:purge]]\n</button>\n" :
        "") + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
