
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
    return "<div class=\"acp-page-container\">\n<div class=\"row border-bottom py-2 m-0 mb-3 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/categories:federation.title, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "]]</h4>\n<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\n" :
        "\n<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\n" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread-tools.select-category]]") + 
          "\n") + 
      "\n</span>\n</span> <span class=\"caret\"></span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\n</li>\n" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['enabled'] : null) ?
        "\n<div class=\"row settings m-0\">\n<div class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"site-settings\" class=\"mb-4\">\n<form role=\"form\">\n<h5 class=\"fw-bold settings-header\">[[admin/manage/categories:federation.syncing-header]]</h5>\n<p>[[admin/manage/categories:federation.syncing-intro]]</p>\n<p class=\"form-text\">[[admin/manage/categories:federation.syncing-caveat]]</p>\n" + 
          (guard((context != null && context['following'] != null) ? context['following']['length'] : null) ?
            "\n<table class=\"table\">\n<thead>\n<tr>\n<th>[[admin/manage/categories:federation.syncing-actorUri]]</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n" + 
              compiled.blocks['following'](helpers, context, guard, iter, helper) + 
              "\n</tbody>\n</table>\n" :
            "\n<div class=\"alert alert-info\">[[admin/manage/categories:federation.syncing-none]]</div>\n") + 
          "\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"syncing-add\">[[admin/manage/categories:federation.syncing-add]]</label>\n<div class=\"input-group\">\n<input id=\"syncing-add\" type=\"url\" class=\"form-control\" />\n<button data-action=\"follow\" type=\"button\" class=\"btn btn-primary\">[[admin/manage/categories:federation.syncing-follow]]</button>\n</div>\n</div>\n<hr />\n<div class=\"mb-3\">\n<p>[[admin/manage/categories:federation.followers]]</p>\n<table class=\"table small\">\n<tr>\n<th>[[admin/manage/categories:federation.followers-handle]]</th>\n<th>[[admin/manage/categories:federation.followers-id]]</th>\n</tr>\n" + 
          (guard((context != null && context['followers'] != null) ? context['followers']['length'] : null) ?
            "" :
            "\n<tr>\n<td class=\"text-center border-0\" colspan=\"2\">\n<em>[[admin/manage/categories:federation.followers-none]]</em>\n</td>\n</tr>\n") + 
          "\n" + 
          compiled.blocks['followers'](helpers, context, guard, iter, helper) + 
          "\n</table>\n</div>\n</form>\n</div>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 options acp-sidebar\">\n<div class=\"p-2 d-flex flex-column text-bg-light border rounded-1 gap-1\">\n<a href=\"" + 
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
          "\n</div>\n</div>\n</div>\n" :
        "\n<div class=\"alert alert-warning\">\n<p>[[admin/manage/categories:federation.disabled]]</p>\n<a class=\"btn btn-primary\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/activitypub\">[[admin/manage/categories:federation.disabled-cta]]</a>\n</div>\n") + 
      "\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n<div class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'following': function following(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['following'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td>\n<pre class=\"mb-0 mt-1\">" + 
          __escape(guard((context != null && context['following'] != null && context['following'][key0] != null) ? context['following'][key0]['id'] : null)) + 
          "</pre>\n" + 
          (guard((context != null && context['following'] != null && context['following'][key0] != null) ? context['following'][key0]['approved'] : null) ?
            "" :
            "\n<span class=\"form-text text-warning\">Pending</span>\n") + 
          "\n</td>\n<td>\n<button type=\"button\" data-action=\"unfollow\" data-actor=\"" + 
          __escape(guard((context != null && context['following'] != null && context['following'][key0] != null) ? context['following'][key0]['id'] : null)) + 
          "\" class=\"btn btn-sm btn-danger\">[[admin/manage/categories:federation.syncing-unfollow]]</button>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'followers': function followers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['followers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['followers'] != null && context['followers'][key0] != null) ? context['followers'][key0]['uid'] : null)) + 
          "\">\n<td class=\"w-100 text-truncate\" style=\"max-width: 1px;\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['followers'] != null) ? context['followers'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n" + 
          __escape(guard((context != null && context['followers'] != null && context['followers'][key0] != null) ? context['followers'][key0]['userslug'] : null)) + 
          "\n</td>\n<td class=\"w-0\">\n<div class=\"d-flex gap-2 flex-nowrap align-items-center\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm border\" data-action=\"autofill\" title=\"[[admin/manage/categories:federation.followers-autofill]]\">\n<i class=\"fa fa-exchange-alt text-primary\"></i>\n</button>\n<code>" + 
          __escape(guard((context != null && context['followers'] != null && context['followers'][key0] != null) ? context['followers'][key0]['uid'] : null)) + 
          "</code>\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
