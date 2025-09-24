
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
    return "<div class=\"title-container align-items-center gap-2 d-flex\">\n" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n<div class=\"category-list-container " + 
          (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
            "" :
            "d-none d-md-block") + 
          " align-self-center\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
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
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['showHandleInput'] : null) ?
        "\n<div data-component=\"composer/handle\">\n<input class=\"handle form-control h-100 border-0 shadow-none\" type=\"text\" placeholder=\"[[topic:composer.handle-placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['handle'] : null)) + 
          "\" />\n</div>\n" :
        "") + 
      "\n<div data-component=\"composer/title\" class=\"position-relative flex-1\" style=\"min-width: 0;\">\n" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n<input class=\"title form-control h-100 rounded-1 shadow-none\" type=\"text\" placeholder=\"[[topic:composer.title-placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['topicTitle'] : null)) + 
          "\" />\n" :
        "\n<span class=\"" + 
          (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
            "d-block" :
            "d-none d-md-block") + 
          " title h-100 text-truncate\">" + 
          (guard((context != null) ? context['isEditing'] : null) ?
            "[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]" :
            "[[topic:composer.replying-to, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]") + 
          "</span>\n") + 
      "\n<div id=\"quick-search-container\" class=\"quick-search-container mt-2 dropdown-menu d-block p-2 hidden\">\n<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n<div class=\"quick-search-results-container\"></div>\n</div>\n</div>\n<div class=\"" + 
      (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
        "d-flex" :
        "d-none d-md-flex") + 
      " action-bar gap-1 align-items-center\">\n<button class=\"btn btn-sm btn-link text-body fw-semibold composer-minimize\" data-action=\"hide\"><i class=\"fa fa-angle-down\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.hide]]</span></button>\n<button class=\"btn btn-sm btn-link composer-discard text-body fw-semibold\" data-action=\"discard\"><i class=\"fa fa-trash\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.discard]]</button>\n<div class=\"btn-group btn-group-sm\" component=\"composer/submit/container\">\n<button class=\"btn btn-primary composer-submit fw-bold " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "rounded-1") + 
      "\" data-action=\"post\" data-text-variant=\" [[topic:composer.schedule]]\"><i class=\"fa fa-check\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.submit]]</span></button>\n<div component=\"composer/submit/options/container\" data-submit-options=\"" + 
      __escape(guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null)) + 
      "\" class=\"btn-group btn-group-sm " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "hidden") + 
      "\">\n<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-caret-down\"></i>\n<span class=\"sr-only\">[[topic:composer.additional-options]]</span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1\" role=\"menu\">\n<li><a class=\"dropdown-item rounded-1 display-scheduler " + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        "hidden") + 
      "\" role=\"menuitem\">[[topic:composer.post-later]]</a></li>\n<li><a class=\"dropdown-item rounded-1 cancel-scheduling hidden\" role=\"menuitem\">[[modules:composer.cancel-scheduling]]</a></li>\n" + 
      compiled.blocks['submitOptions'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n</div>";
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
      });
    },
    'submitOptions': function submitOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['submitOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['action'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['text'] : null)) + 
          "</a></li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
