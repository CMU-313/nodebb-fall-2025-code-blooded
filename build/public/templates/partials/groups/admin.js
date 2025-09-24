
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
    return "<div class=\"options\">\n<form component=\"groups/settings\" role=\"form\">\n<div class=\"row\">\n<div class=\"col-12 col-lg-6\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"name\">[[groups:details.group-name]]</label>\n<input " + 
      (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
        "readonly" :
        "") + 
      " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"description\">[[groups:details.description]]</label>\n<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
      "</textarea>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"private\">[[groups:details.private]]</label>\n<input class=\"form-check-input\" name=\"private\" id=\"private\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        " checked" :
        "") + 
      ">\n" + 
      (guard((context != null) ? context['allowPrivateGroups'] : null) ?
        "" :
        "\n<p class=\"form-text\">\n[[groups:details.private-system-help]]\n</p>\n") + 
      "\n<p class=\"form-text text-xs m-0\">\n[[groups:details.private-help]]\n</p>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"hidden\">[[groups:details.hidden]]</label>\n<input class=\"form-check-input\" name=\"hidden\" id=\"hidden\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        " checked" :
        "") + 
      ">\n<p class=\"form-text text-xs m-0\">\n[[groups:details.hidden-help]]\n</p>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableJoinRequests\">[[groups:details.disableJoinRequests]]</label>\n<input class=\"form-check-input\" name=\"disableJoinRequests\" id=\"disableJoinRequests\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
        " checked" :
        "") + 
      ">\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableLeave\">[[groups:details.disableLeave]]</label>\n<input class=\"form-check-input\" name=\"disableLeave\" id=\"disableLeave\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
        " checked" :
        "") + 
      ">\n</div>\n</div>\n<div class=\"col-12 col-lg-6\">\n<div class=\"d-flex gap-2 align-items-center\">\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"userTitleEnabled\">[[groups:details.userTitleEnabled]]</label>\n<input class=\"form-check-input\" name=\"userTitleEnabled\" id=\"userTitleEnabled\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        " checked" :
        "") + 
      ">\n</div>\n<span class=\"badge rounded-1 text-uppercase text-truncate rounded-1 " + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " hide") + 
      "\" style=\"max-width:150px; color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
      "; background-color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
      "\"><i class=\"fa " + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        " " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            " me-1" :
            "") :
        "") + 
      "\"></i><span class=\"badge-text\">" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
        "") + 
      "</span></span>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"userTitle\">[[groups:details.badge-text]]</label>\n<div class=\"d-flex gap-1\">\n<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
      "\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      " />\n<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-outline-secondary text-nowrap\" data-action=\"icon-select\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      ">[[groups:details.change-icon]]</button>\n<input type=\"hidden\" name=\"icon\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
        "") + 
      "\" />\n<div id=\"icons\" class=\"hidden\">\n<div class=\"icon-container\">\n<div class=\"row nbb-fa-icons\">\n<div class=\"icon-container\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n</div>\n<div class=\"d-flex nbb-fa-icons flex-wrap\">\n" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<p class=\"form-text text-center\">\nFor a full list of icons, please consult:\n<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change-label-colour]]</label>\n<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" id=\"labelColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
        "") + 
      "\" />\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"textColor\" class=\"badge-color-label\">[[groups:details.change-text-colour]]</label>\n<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" id=\"textColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
        "") + 
      "\" />\n</div>\n</div>\n</div>\n<hr />\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n<div class=\"d-flex gap-1\">\n<div class=\"member-post-cids-selector\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
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
      "\n</ul>\n</div>\n</div>\n</div>\n<input id=\"memberPostCids\" type=\"text\" class=\"form-control form-control-sm\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
      "\">\n</div>\n</div>\n<div class=\"d-flex justify-content-end gap-2\">\n<button class=\"btn btn-link text-danger\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n</div>\n</form>\n</div>";
  }

  compiled.blocks = {
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n";
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
    }
  };

  return compiled;
})
