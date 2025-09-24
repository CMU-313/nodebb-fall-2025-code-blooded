
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n<div class=\"d-flex flex-column gap-3\">\n<div component=\"flags/filters\" class=\"d-flex flex-wrap gap-2 pb-3 border-bottom\">\n<div class=\"btn-group bottom-sheet\">\n<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null) ?
        "[[flags:filter-quick-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null)) + 
          "]]" :
        "[[flags:quick-filters]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\" role=\"menuitem\">[[flags:filter-quick-mine]]</a>\n</li>\n</ul>\n</div>\n<div component=\"category/dropdown\" class=\"btn-group category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"filter-btn btn btn-light btn-sm border dropdown-toggle " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['cid'] : null) ?
        "active-filter" :
        "") + 
      "\" data-bs-toggle=\"dropdown\">\n" + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
          "\n<span class=\"visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>\n</span>\n" :
        "\n<span class=\"visible-md-inline visible-lg-inline\">[[unread:all-categories]]</span>\n") + 
      "\n<span class=\"caret text-primary opacity-75\"></span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n<div class=\"btn-group bottom-sheet\">\n<a class=\"filter-btn btn btn-light btn-sm border " + 
      ((guard((context != null) ? context['sort'] : null) != "newest") ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      ((guard((context != null) ? context['sort'] : null) != "newest") ?
        "[[flags:sort-" + 
          __escape(guard((context != null) ? context['sort'] : null)) + 
          "]]" :
        "[[flags:sort]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li><h6 class=\"dropdown-header\">[[flags:sort-all]]</h6></li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"newest\" role=\"menuitem\">[[flags:sort-newest]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"oldest\" role=\"menuitem\">[[flags:sort-oldest]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"reports\" role=\"menuitem\">[[flags:sort-reports]]</li>\n<li><h6 class=\"dropdown-header\">[[flags:sort-posts-only]]</h6></li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"downvotes\" role=\"menuitem\">[[flags:sort-downvotes]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"upvotes\" role=\"menuitem\">[[flags:sort-upvotes]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"replies\" role=\"menuitem\">[[flags:sort-replies]]</li>\n</ul>\n</div>\n<div class=\"btn-group bottom-sheet\">\n<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['state'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['state'] : null) ?
        "[[flags:state-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['state'] : null)) + 
          "]]" :
        "[[flags:filter-state]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"open\" role=\"menuitem\">[[flags:state-open]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"wip\" role=\"menuitem\">[[flags:state-wip]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"resolved\" role=\"menuitem\">[[flags:state-resolved]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"rejected\" role=\"menuitem\">[[flags:state-rejected]]</li>\n</ul>\n</div>\n<div class=\"btn-group bottom-sheet\">\n<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['type'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['type'] : null) ?
        "[[flags:filter-type-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['type'] : null)) + 
          "]]" :
        "[[flags:filter-type]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"all\" role=\"menuitem\">[[flags:filter-type-all]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"post\" role=\"menuitem\">[[flags:filter-type-post]]</li>\n<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"user\" role=\"menuitem\">[[flags:filter-type-user]]</li>\n</ul>\n</div>\n<div component=\"flags/filter/assignee\" class=\"dropdown bottom-sheet\" data-filter-name=\"assignee\">\n<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['assignee'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">[[flags:filter-assignee]]</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['selected.assignee'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr/>\n<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</li>\n</ul>\n</div>\n<div component=\"flags/filter/reporterId\" class=\"dropdown bottom-sheet\" data-filter-name=\"reporterId\">\n<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['reporterId'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">[[flags:filter-reporterId]]</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['selected.reporterId'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr/>\n<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</div>\n</li>\n</ul>\n</div>\n<div component=\"flags/filter/targetUid\" class=\"dropdown bottom-sheet\" data-filter-name=\"targetUid\">\n<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['targetUid'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">[[flags:filter-targetUid]]</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column\">\n<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['selected.targetUid'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr/>\n<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</div>\n</li>\n</ul>\n</div>\n<div component=\"flags/filters/reset\" class=\"ms-auto\">\n<a class=\"filter-btn btn btn-warning btn-sm border " + 
      (guard((context != null) ? context['hasFilter'] : null) ?
        "" :
        "btn-light disabled") + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags\" role=\"button\">\n<span class=\"filter-label\">[[flags:filter-reset]]</span>\n</a>\n</div>\n<div class=\"dropdown\" component=\"flags/bulk-actions\">\n<button class=\"filter-btn btn btn-light btn-sm border\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\n<span class=\"filter-label\">[[flags:bulk-actions]]</span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-assign\" role=\"menuitem\">[[flags:assign-to-me]]</a></li>\n<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-mark-resolved\" role=\"menuitem\">[[flags:bulk-resolve]]</a></li>\n</ul>\n</div>\n<form role=\"form\">\n<input type=\"hidden\" name=\"sort\" value=\"" + 
      __escape(guard((context != null) ? context['sort'] : null)) + 
      "\" />\n<input type=\"hidden\" name=\"state\" value=\"" + 
      __escape(guard((context != null && context['filters'] != null) ? context['filters']['state'] : null)) + 
      "\" />\n<input type=\"hidden\" name=\"type\" value=\"" + 
      __escape(guard((context != null && context['filters'] != null) ? context['filters']['type'] : null)) + 
      "\" />\n</form>\n</div>\n<div class=\"card card-header text-xs px-2 py-1 fw-semibold border-0 align-self-start\">\n[[flags:x-flags-found, " + 
      __escape(guard((context != null) ? context['count'] : null)) + 
      "]]\n</div>\n<table class=\"table table-hover\" component=\"flags/list\">\n<thead>\n<tr>\n<th></th>\n<th class=\"text-xs text-muted\">[[flags:reports]]</th>\n<th class=\"text-xs text-muted\">[[flags:first-reported]]</th>\n<th class=\"text-xs text-muted\">[[flags:state]]</th>\n<th>\n<input type=\"checkbox\" data-action=\"toggle-all\" autocomplete=\"off\" />\n</th>\n</tr>\n</thead>\n<tbody>\n" + 
      compiled.blocks['flags'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\" aria-label=\"[[global:pagination]]\">\n<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n<li class=\"page-item previous " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n<li class=\"page-item next " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n</ul>\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\" aria-label=\"[[global:pagination.firstpage]]\"><i class=\"fa fa-fast-backward\"></i> </a>\n</li>\n<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link fw-secondary\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n</li>\n<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n") + 
      "\n</nav>\n</div>";
  }

  compiled.blocks = {
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
          __escape(helper(context, helpers, 'increment', [index, "1"])) + 
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
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
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
          "\n</div>\n</span>\n<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'selected.assignee': function selectedassignee(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['assignee'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['username'] : null)) + 
          "\n<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      });
    },
    'selected.reporterId': function selectedreporterId(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['reporterId'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['username'] : null)) + 
          "\n<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'selected.targetUid': function selectedtargetUid(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['targetUid'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['username'] : null)) + 
          "\n<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'flags': function flags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-flag-id=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n<td>\n<a class=\"text-reset text-decoration-underline\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/flags/" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['target_readable'] : null)) + 
          "\n</a>\n</td>\n<td>\n" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['heat'] : null)) + 
          "\n</td>\n<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['datetimeISO'] : null)) + 
          "\"></span></td>\n<td><span class=\"badge bg-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['labelClass'] : null)) + 
          "\">[[flags:state-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['state'] : null)) + 
          "]]</span></td>\n<td>\n<input type=\"checkbox\" autocomplete=\"off\" />\n</td>\n</tr>\n";
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
            "\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\"><i class=\"fa fa-ellipsis-h\"></i></a>\n</li>\n" :
            "\n<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.page-x, " + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "]]\">" + 
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
