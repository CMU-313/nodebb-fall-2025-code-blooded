
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
    return (guard((context != null && context['widgets'] != null && context['widgets']['header'] != null) ? context['widgets']['header']['length'] : null) ?
        "\n<div data-widget-area=\"header\">\n" + 
          compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n<div class=\"row flex-fill\">\n<div class=\"popular " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      " mb-3\" style=\"top: " + 
      ((guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['autohideBottombar'] : null)) ?
        "var(--panel-offset)" :
        "0") + 
      ";\">\n<nav class=\"topic-list-header d-flex flex-nowrap my-2 p-0 border-0 rounded\">\n<div class=\"d-flex flex-row p-2 text-bg-light gap-1 border rounded w-100\">\n<div component=\"category/controls\" class=\"d-flex me-auto mb-0 gap-2 flex-wrap\">\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['category'] : null) || guard((context != null && context['template'] != null) ? context['template']['world'] : null)) ?
        "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category/watching/menu\" class=\"d-flex gap-2 align-items-center " + 
              (guard((context != null) ? context['isWatched'] : null) ?
                "" :
                " hidden") + 
              "\"><i class=\"fa fa-fw fa-bell-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:watching]]</span></span>\n<span component=\"category/tracking/menu\"  class=\"d-flex gap-2 align-items-center " + 
              (guard((context != null) ? context['isTracked'] : null) ?
                "" :
                " hidden") + 
              "\"><i class=\"fa fa-fw fa-inbox text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:tracking]]</span></span>\n<span component=\"category/notwatching/menu\"  class=\"d-flex gap-2 align-items-center " + 
              (guard((context != null) ? context['isNotWatched'] : null) ?
                "" :
                " hidden") + 
              "\"><i class=\"fa fa-fw fa-clock-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:not-watching]]</span></span>\n<span component=\"category/ignoring/menu\"  class=\"d-flex gap-2 align-items-center " + 
              (guard((context != null) ? context['isIgnored'] : null) ?
                "" :
                " hidden") + 
              "\"><i class=\"fa fa-fw fa-eye-slash text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:ignoring]]</span></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm " + 
              (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
                "dropdown-menu-end" :
                "") + 
              "\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/watching\" data-state=\"watching\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/tracking\" data-state=\"tracking\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-inbox text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:tracking]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:tracking.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/tracking/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isTracked'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-clock-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:not-watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isNotWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:ignoring]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:ignoring.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isIgnored'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
            "") + 
          "\n<div component=\"tag/filter\" class=\"btn-group dropdown dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "\n<span class=\"d-inline-flex align-items-center gap-1\">\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedTag'] != null) ? context['selectedTag']['label'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[tags:all-tags]]</span>\n") + 
          "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"tag/filter/search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"tag/filter/list\" class=\"list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar\" role=\"menu\" style=\"max-height: 500px;\" role=\"menu\">\n<li role=\"presentation\" data-tag=\"\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span class=\"flex-grow-1\">[[tags:all-tags]]</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n</a>\n</li>\n" + 
          compiled.blocks['tagItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:topic-sort-option, " + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "]]\">\n<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">" + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"recently_replied\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:recently-replied]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"recently_created\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:recently-created]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_posts\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-posts]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_votes\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_views\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-views]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n</ul>\n</div>\n" :
        "") + 
      "\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['popular'] : null) || guard((context != null && context['template'] != null) ? context['template']['top'] : null)) ?
        "\n<div class=\"btn-group bottom-sheet " + 
          (guard((context != null && context['terms'] != null) ? context['terms']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-clock text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          __escape(guard((context != null && context['selectedTerm'] != null) ? context['selectedTerm']['name'] : null)) + 
          "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n" + 
          compiled.blocks['terms'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "") + 
      "\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['unread'] : null) || (guard((context != null && context['template'] != null) ? context['template']['recent'] : null) || (guard((context != null && context['template'] != null) ? context['template']['popular'] : null) || guard((context != null && context['template'] != null) ? context['template']['top'] : null)))) ?
        "\n<div class=\"btn-group bottom-sheet" + 
          (guard((context != null && context['filters'] != null) ? context['filters']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-filter text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) + 
          "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n" + 
          compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n<div component=\"category/dropdown\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n<span class=\"d-none d-md-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-list text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[unread:all-categories]]</span>") + 
          "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n<li role=\"presentation\" class=\"category\" data-cid=\"all\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n<div class=\"flex-grow-1\">[[unread:all-categories]]</div>\n<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n</a>\n</li>\n" + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n<div component=\"tag/filter\" class=\"btn-group dropdown dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "\n<span class=\"d-inline-flex align-items-center gap-1\">\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedTag'] != null) ? context['selectedTag']['label'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[tags:all-tags]]</span>\n") + 
          "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"tag/filter/search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"tag/filter/list\" class=\"list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar\" role=\"menu\" style=\"max-height: 500px;\" role=\"menu\">\n<li role=\"presentation\" data-tag=\"\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span class=\"flex-grow-1\">[[tags:all-tags]]</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n</a>\n</li>\n" + 
          iter(guard((context != null) ? context['tagItems'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<li role=\"presentation\" data-tag=\"" + 
              __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
              "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span component=\"tag-markup\" class=\"flex-grow-1\">\n<div class=\"d-inline-flex align-items-center gap-1\">\n" + 
              __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
              "\n</div>\n</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
              (guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['selected'] : null) ?
                "" :
                "invisible") + 
              "\"></i>\n</a>\n</li>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</ul>\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['unread'] : null) ?
        "\n<div class=\"markread btn-group " + 
          (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
          ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
            "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
              "\n<span class=\"fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw " + 
              (guard((context != null) ? context['selectCategoryIcon'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
                "fa-list") + 
              " text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                "[[topic:thread-tools.select-category]]") + 
              "</span>\n") + 
          "\n</span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
          iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
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
              "\">\n<a class=\"dropdown-item rounded-1 " + 
              (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
                "disabled" :
                "") + 
              "\" role=\"menuitem\" href=\"#\">" + 
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
          }) + 
          "\n</ul>\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['tag'] : null) ?
        "\n<div component=\"category/dropdown\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n<span class=\"d-none d-md-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-list text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[unread:all-categories]]</span>") + 
          "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n<li role=\"presentation\" class=\"category\" data-cid=\"all\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n<div class=\"flex-grow-1\">[[unread:all-categories]]</div>\n<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n</a>\n</li>\n" + 
          iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
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
              "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
              (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
                "disabled" :
                "") + 
              "\" role=\"menuitem\" href=\"#\">\n" + 
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
          }) + 
          "\n</ul>\n</div>\n</div>\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group bottom-sheet\" component=\"tag/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"tag/following/menu\" class=\"d-flex gap-2 align-items-center" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "" :
                " hidden") + 
              "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[tags:watching]]</span>\n</span>\n<span component=\"tag/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                " hidden" :
                "") + 
              "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[tags:not-watching]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"tag/following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[tags:watching]]</span>\n</span>\n<div class=\"help-text text-muted text-xs\">[[tags:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"tag/following/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"tag/not-following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[tags:not-watching]]</span>\n</span>\n<div class=\"help-text text-muted text-xs\">[[tags:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"tag/not-following/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "" :
                "fa-check") + 
              "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
            "") + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools dropdown-left bottom-sheet\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[topic:thread-tools.title]]</span>\n<span component=\"topic/selected/badge\" class=\"badge rounded-pill bg-secondary\"></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a component=\"topic/mark-unread-for-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-inbox text-secondary\"></i> [[topic:thread-tools.markAsUnreadForAll]]\n</a>\n</li>\n<li>\n<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack text-secondary\"></i> [[topic:thread-tools.pin]]\n</a>\n</li>\n<li>\n<a component=\"topic/unpin\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90 text-secondary\"></i> [[topic:thread-tools.unpin]]\n</a>\n</li>\n<li>\n<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-lock text-secondary\"></i> [[topic:thread-tools.lock]]\n</a>\n</li>\n<li>\n<a component=\"topic/unlock\" href=\"#\" class=\"hidden dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-unlock text-secondary\"></i> [[topic:thread-tools.unlock]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/move\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows text-secondary\"></i> [[topic:thread-tools.move]]\n</a>\n</li>\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n<li>\n<a component=\"topic/move-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows text-secondary\"></i> [[topic:thread-tools.move-all]]\n</a>\n</li>\n" :
            "") + 
          "\n<li>\n<a component=\"topic/merge\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-code-fork text-secondary\"></i> [[topic:thread-tools.merge]]\n</a>\n</li>\n<li>\n<a component=\"topic/tag\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-tag text-secondary\"></i> [[topic:thread-tools.tag]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-trash-o text-secondary\"></i> [[topic:thread-tools.delete]]\n</a>\n</li>\n<li>\n<a component=\"topic/restore\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-history text-secondary\"></i> [[topic:thread-tools.restore]]\n</a>\n</li>\n<li>\n<a component=\"topic/purge\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-eraser text-secondary\"></i> [[topic:thread-tools.purge]]\n</a>\n</li>\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "") + 
      "\n" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n<a class=\"btn btn-ghost btn-sm d-none d-lg-flex align-items-center align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\" itemprop=\"item\" title=\"[[global:rss-feed]]\"><i class=\"fa fa-rss text-primary\"></i></a>\n" :
        "") + 
      "\n<a href=\"" + 
      ((guard((context != null && context['template'] != null) ? context['template']['category'] : null) || guard((context != null && context['template'] != null) ? context['template']['world'] : null)) ?
        __escape(guard((context != null) ? context['url'] : null)) :
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['url'] : null)) + 
          __escape(guard((context != null) ? context['querystring'] : null))) + 
      "\" class=\"btn btn-secondary fw-semibold position-absolute top-100 translate-middle-x start-50 mt-1 hide\" style=\"--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;\" id=\"new-topics-alert\">\n<i class=\"fa fa-fw fa-arrow-up\"></i> [[recent:load-new-posts]]\n</a>\n</div>\n<div class=\"d-flex gap-1 align-items-center\">\n" + 
      ((guard((context != null && context['template'] != null) ? context['template']['category'] : null) || guard((context != null && context['template'] != null) ? context['template']['world'] : null)) ?
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose?cid=" + 
              __escape(guard((context != null) ? context['cid'] : null)) + 
              "\" component=\"category/post\" id=\"new_topic\" class=\"btn btn-primary btn-sm text-nowrap\" data-ajaxify=\"false\" role=\"button\">[[category:new-topic-button]]</a>\n" :
            "") + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['canPost'] : null) ?
            "\n<noscript><div class=\"dropdown\" component=\"category-selector\"></noscript>\n<button component=\"category/post\" for=\"category-dropdown-check\" class=\"btn btn-primary btn-sm text-nowrap\" id=\"new_topic\" role=\"button\">\n[[category:new-topic-button]]\n</button>\n<noscript>\n<input type=\"checkbox\" class=\"hidden\" id=\"category-dropdown-check\" aria-hidden=\"true\">\n<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n" + 
              compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n</div>\n</noscript>\n" :
            "") + 
          "\n") + 
      "\n<!-- only show login button if not logged in and doesn't have any posting privilege -->\n" + 
      ((!guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) && !guard((context != null) ? context['canPost'] : null))) ?
        "\n<a component=\"category/post/guest\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/login\" class=\"btn btn-sm btn-primary\">[[category:guest-login-post]]</a>\n" :
        "") + 
      "\n</div>\n</div>\n</nav>\n</div>\n<div class=\"category\">\n" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\n<div class=\"alert alert-info\" id=\"category-no-topics\">[[recent:no-popular-topics]]</div>\n") + 
      "\n<ul component=\"category\" class=\"topics-list list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
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
          "\n</nav>\n" :
        "") + 
      "\n</div>\n</div>\n<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div data-widget-area=\"footer\">\n" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'tagItems': function tagItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" data-tag=\"" + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span component=\"tag-markup\" class=\"flex-grow-1\">\n<div class=\"d-inline-flex align-items-center gap-1\">\n" + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\n</div>\n</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'terms': function terms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['terms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['url'] : null)) + 
          "\">\n<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['name'] : null)) + 
          "</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['url'] : null)) + 
          "\">\n<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
          "</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n</a>\n</li>\n";
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
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" role=\"menuitem\" href=\"#\">\n" + 
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
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\" role=\"menuitem\">\n<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          " text-secondary\"></i>\n" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\">\n<a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\">\n<div class=\"category-item d-inline-block\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"category/topic\" class=\"category-item hover-parent border-bottom py-3 py-lg-4 d-flex flex-column flex-lg-row align-items-start " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n<link itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" />\n<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
          "\" />\n<meta itemprop=\"itemListOrder\" content=\"descending\" />\n<meta itemprop=\"position\" content=\"" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null), "1"])) + 
          "\" />\n<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\n<div class=\"d-flex p-0 col-12 col-lg-7 gap-2 gap-lg-3 pe-1 align-items-start " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
            "mb-2 mb-lg-0" :
            "") + 
          "\">\n<div class=\"flex-shrink-0 position-relative\">\n<a class=\"d-inline-block text-decoration-none avatar-tooltip\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "40px", guard((context != null) ? context['true'] : null)])) + 
          "\n</a>\n" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n<div class=\"checkbox position-absolute top-100 start-50 translate-middle-x pt-2 m-0 d-none d-lg-flex\" style=\"max-width:max-content\">\n<i component=\"topic/select\" class=\"fa text-muted pointer fa-square-o p-1 hover-visible\"></i>\n</div>\n" :
            "") + 
          "\n</div>\n<div class=\"flex-grow-1 d-flex flex-wrap gap-1 position-relative\">\n<h3 component=\"topic/header\" class=\"title text-break fs-5 fw-semibold m-0 tracking-tight w-100 " + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "me-4 me-lg-0" :
            "") + 
          "\">\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "#" :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "")) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a>\n</h3>\n<span component=\"topic/labels\" class=\"d-flex flex-wrap gap-1 w-100\">\n<span component=\"topic/watched\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['followed'] : null) ?
            "" :
            "hidden") + 
          "\">\n<i class=\"fa fa-bell-o\"></i>\n<span>[[topic:watching]]</span>\n</span>\n<span component=\"topic/ignored\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['ignored'] : null) ?
            "" :
            "hidden") + 
          "\">\n<i class=\"fa fa-eye-slash\"></i>\n<span>[[topic:ignoring]]</span>\n</span>\n<span component=\"topic/scheduled\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
            "" :
            "hidden") + 
          "\">\n<i class=\"fa fa-clock-o\"></i>\n<span>[[topic:scheduled]]</span>\n</span>\n<span component=\"topic/pinned\" class=\"badge border border-gray-300 text-body " + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
            "hidden" :
            "") + 
          "\">\n<i class=\"fa fa-thumb-tack\"></i>\n<span>" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
              "]]" :
            "[[topic:pinned]]") + 
          "</span>\n</span>\n<span component=\"topic/locked\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            "hidden") + 
          "\">\n<i class=\"fa fa-lock\"></i>\n<span>[[topic:locked]]</span>\n</span>\n<span component=\"topic/moved\" class=\"badge border border-gray-300 text-body " + 
          ((!guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) || (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) == "-1")) ?
            "hidden" :
            "") + 
          "\">\n<i class=\"fa fa-arrow-circle-right\"></i>\n<span>[[topic:moved]]</span>\n</span>\n" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "<span class=\"lh-1\">" + 
              __escape(guard(value)) + 
              "</span>";
          }, function alt() {
            return "";
          }) + 
          "\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "" :
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null), "a", "border"])) + 
              "\n") + 
          "\n<span data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" component=\"topic/tags\" class=\"lh-1 tag-list d-flex flex-wrap gap-1 " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
              "\"><span class=\"badge border border-gray-300 fw-normal tag tag-class-" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
              "\" data-tag=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['value'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
              "</span></a>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</span>\n<div class=\"d-flex gap-1 d-block d-lg-none w-100\">\n<span class=\"badge text-body border stats text-xs text-muted\">\n<i class=\"fa-regular fa-fw fa-message\"></i>\n<span component=\"topic/post-count\" class=\"fw-normal\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n</span>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null)) ?
            "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) :
            "") + 
          "\" class=\"border badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null)) ?
            __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) :
            __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null))) + 
          "\"></a>\n</div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" class=\"d-none d-lg-block badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></a>\n</span>\n" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n<div class=\"checkbox position-absolute top-0 end-0 m-0 d-flex d-lg-none\" style=\"max-width:max-content\">\n<i component=\"topic/select\" class=\"fa fa-square-o text-muted pointer p-1\"></i>\n</div>\n" :
            "") + 
          "\n</div>\n" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
            "\n<a class=\"topic-thumbs position-relative text-decoration-none flex-shrink-0 d-none d-xl-block\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\" aria-label=\"[[topic:thumb-image]]\">\n<img class=\"topic-thumb rounded-1 bg-light\" style=\"width:auto;max-width: 5.33rem;height: 3.33rem;object-fit: contain;\" src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
              "\" alt=\"\"/>\n<span data-numthumbs=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null)) + 
              "\" class=\"px-1 position-absolute bottom-0 end-0 badge rounded-0 border fw-semibold text-bg-light\" style=\"z-index: 1; border-top-left-radius: 0.25rem!important; border-bottom-right-radius: 0.25rem!important;\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null)) + 
              "</span>\n</a>\n" :
            "") + 
          "\n</div>\n<div class=\"d-flex p-0 col-lg-5 col-12 align-content-stretch\">\n<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr 1fr;\">\n" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n<div class=\"stats-votes card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:votes]]</span>\n<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-chevron-up\"></i>\n</div>\n") + 
          "\n<div class=\"stats-postcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n<i class=\"d-xl-none fa-regular fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n</div>\n<div class=\"stats-viewcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:views]]</span>\n<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-eye\"></i>\n</div>\n</div>\n<div component=\"topic/teaser\" class=\"meta teaser ps-5 ps-lg-0 col-lg-6 col-12 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
            "" :
            "d-none d-lg-block") + 
          "\">\n<div class=\"lastpost border-start border-2 lh-sm h-100 d-flex flex-column gap-1\" style=\"border-color: " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
          "!important;\">\n" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\n<div class=\"ps-2 text-xs\">\n[[category:no-replies]]\n</div>\n" :
            "\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                "\n<div class=\"ps-2\">\n<a href=\"" + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
                    __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
                    "#") + 
                  "\" class=\"text-decoration-none avatar-tooltip\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['displayname'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
                  "</a>\n<a class=\"permalink text-muted timeago text-xs\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\" aria-label=\"[[global:lastpost]]\"></a>\n</div>\n<div class=\"post-content text-xs ps-2 line-clamp-sm-2 lh-sm text-break position-relative flex-fill\">\n<a class=\"stretched-link\" tabindex=\"-1\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\" aria-label=\"[[global:lastpost]]\"></a>\n" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                  "\n</div>\n" :
                "") + 
              "\n") + 
          "\n</div>\n</div>\n</div>\n</li>\n";
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
