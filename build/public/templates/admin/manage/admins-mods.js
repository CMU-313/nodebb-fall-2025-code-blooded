
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
    return "<div class=\"admins-mods acp-page-container px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/admins-mods:manage-admins-and-mods]]</h4>\n</div>\n</div>\n<div>\n<div class=\"d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap\">\n<h4 class=\"mb-0\">[[admin/manage/admins-mods:administrators]]</h4>\n<input id=\"admin-search\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[admin/manage/admins-mods:add-administrator]]\" />\n</div>\n<div class=\"administrator-area d-flex flex-wrap\">\n" + 
      compiled.blocks['admins.members'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<hr/>\n<div>\n<div class=\"d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap\">\n<h4 class=\"mb-0\">[[admin/manage/admins-mods:global-moderators]]</h4>\n<input id=\"global-mod-search\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[admin/manage/admins-mods:add-global-moderator]]\" />\n</div>\n<div class=\"global-moderator-area mb-2 d-flex flex-wrap\">\n" + 
      compiled.blocks['globalMods.members'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div id=\"no-global-mods-warning\" class=\"text-sm text-muted mb-0 " + 
      (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/admins-mods:no-global-moderators]]</div>\n</div>\n<hr/>\n<div>\n<div class=\"d-flex gap-2 align-items-center\">\n<h4 class=\"mb-0\" id=\"moderators-title\">[[admin/manage/admins-mods:moderators]]</h4>\n<div class=\"\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
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
      "\n</ul>\n</div>\n</div>\n</div>\n</div>\n<div class=\"mb-2\">\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n</div>\n" + 
      (guard((context != null && context['categoryMods'] != null) ? context['categoryMods']['length'] : null) ?
        "" :
        "\n<p class=\"alert alert-info\">[[admin/manage/admins-mods:no-sub-categories]]</p>\n") + 
      "\n" + 
      compiled.blocks['categoryMods'](helpers, context, guard, iter, helper) + 
      "\n<div>\n<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n</ul>\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n</li>\n<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n</li>\n<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n") + 
      "\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'admins.members': function adminsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['admins'] != null) ? context['admins']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['uid'] : null)) + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['admins'] != null && context['admins']['members'] != null) ? context['admins']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['username'] : null)) + 
          "</a>\n<button class=\"btn btn-ghost btn-sm p-0 remove-user-icon\">\n<i class=\"fa fa-fw fa-times\"></i>\n</button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'globalMods.members': function globalModsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['globalMods'] != null) ? context['globalMods']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['uid'] : null)) + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['username'] : null)) + 
          "</a>\n<button class=\"btn btn-ghost btn-sm p-0 remove-user-icon\">\n<i class=\"fa fa-fw fa-times\"></i>\n</button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
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
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'categoryMods': function categoryMods(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryMods'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (index === 0 ?
            "\n<hr>\n" :
            "") + 
          "\n<div class=\"categories category-wrapper mb-4\">\n<div class=\"d-flex gap-2 justify-content-between flex-column flex-md-row align-items-start align-items-md-center mb-2 flex-wrap\">\n<div class=\"d-flex flex-column flex-md-row gap-2 align-items-md-center\">\n<div class=\"d-flex gap-1 align-items-center\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "28px", "rounded-1"])) + 
          "\n<h5 class=\"mb-0\">" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['name'] : null)) + 
          "</h5>\n</div>\n" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null) ?
            "\n<a class=\"btn btn-light btn-sm\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/admins-mods?cid=" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
              "#moderators-title\">[[admin/manage/admins-mods:view-children, " + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null)) + 
              "]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['disabled'] : null) ?
            "<span class=\"badge text-bg-warning\">[[admin/manage/admins-mods:disabled]]</span>" :
            "") + 
          "\n</div>\n<input data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"form-control form-control-sm moderator-search w-auto\" placeholder=\"[[admin/manage/admins-mods:add-moderator]]\" />\n</div>\n<div class=\"moderator-area d-flex flex-wrap\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\">\n" + 
          iter(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['moderators'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['uid'] : null)) + 
              "\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators'][key1] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['username'] : null)) + 
              "</a>\n<button class=\"btn btn-ghost btn-sm p-0 remove-user-icon\">\n<i class=\"fa fa-fw fa-times\" role=\"button\"></i>\n</button>\n</div>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n<div data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"no-moderator-warning text-sm text-muted " + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[admin/manage/admins-mods:no-moderators]]</div>\n</div>\n<hr >\n";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n</li>\n" :
            "\n<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
