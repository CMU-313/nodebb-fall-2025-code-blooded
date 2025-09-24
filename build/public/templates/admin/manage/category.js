
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
    return "<div class=\"category acp-page-container\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/categories:edit-category]]</h4>\n<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
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
      "\n</ul>\n</div>\n</div>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 \">\n<button id=\"save\" class=\"btn btn-primary btn-sm btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div class=\"col-12 col-md-8 px-0\" id=\"category-settings\">\n<div class=\"category-settings-form\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\">\n[[admin/manage/categories:name]]\n</label>\n<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\" type=\"text\" class=\"form-control\" data-name=\"name\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-handle\">\n[[admin/manage/categories:handle]]\n</label>\n<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-handle\" type=\"text\" class=\"form-control\" data-name=\"handle\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['handle'] : null)) + 
      "\" />\n<p class=\"form-text\">\n[[admin/manage/categories:handle.help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\">\n[[admin/manage/categories:description]]\n</label>\n<textarea id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\" data-name=\"description\" class=\"form-control category_description description\" rows=\"4\" />" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['description'] : null)) + 
      "</textarea>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-federatedDescription\">\n[[admin/manage/categories:federatedDescription]]\n</label>\n<textarea id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-federatedDescription\" data-name=\"federatedDescription\" class=\"form-control\" rows=\"2\" placeholder=\"[[admin/manage/categories:federatedDescription.default]]\" />" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['federatedDescription'] : null)) + 
      "</textarea>\n<p class=\"form-text\">\n[[admin/manage/categories:federatedDescription.help]]\n</p>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-parentCid\">[[admin/manage/categories:parent-category]]</label>\n<div id=\"parent-category-selector\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
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
      }) + 
      "\n</ul>\n</div>\n</div>\n<input data-name=\"parentCid\" id=\"parent-cid\" class=\"hidden\" type=\"text\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['parentCid'] : null)) + 
      "\"/>\n</div>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\">\n[[admin/manage/categories:num-recent-replies]]\n</label>\n<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\" type=\"text\" class=\"form-control\" placeholder=\"1\" data-name=\"numRecentReplies\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['numRecentReplies'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-subcategories-per-page\">\n[[admin/manage/categories:subcategories-per-page]]\n</label>\n<input id=\"cid-subcategories-per-page\" type=\"text\" class=\"form-control\" data-name=\"subCategoriesPerPage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['subCategoriesPerPage'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-subcategories-per-page\">\n[[admin/settings/tags:tags-per-topic]]\n</label>\n<div class=\"d-flex gap-3 align-items-center\">\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"cid-min-tags\">[[admin/admin:min]]</label>\n<input id=\"cid-min-tags\" type=\"text\" class=\"form-control\" data-name=\"minTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['minTags'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\n</div>\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"cid-max-tags\">[[admin/admin:max]]</label>\n<input id=\"cid-max-tags\" type=\"text\" class=\"form-control\" data-name=\"maxTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['maxTags'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\n</div>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"tag-whitelist\">[[admin/manage/categories:tag-whitelist]]</label>\n<input id=\"tag-whitelist\" type=\"text\" class=\"form-control\" data-name=\"tagWhitelist\" value=\"\" />\n</div>\n<div class=\"mb-3 d-flex flex-column\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\">\n[[admin/manage/categories:ext-link]]\n</label>\n<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\" type=\"text\" class=\"form-control\" placeholder=\"http://domain.com\" data-name=\"link\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['link'] : null)) + 
      "\" />\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"cid-isSection\" data-name=\"isSection\" " + 
      (guard((context != null && context['category'] != null) ? context['category']['isSection'] : null) ?
        "checked" :
        "") + 
      " />\n<label for=\"cid-isSection\" class=\"form-check-label\">[[admin/manage/categories:is-section]]</label>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['postQueueEnabled'] : null) ?
        "\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"postQueue\" data-name=\"postQueue\" " + 
          (guard((context != null && context['category'] != null) ? context['category']['postQueue'] : null) ?
            "checked" :
            "") + 
          " />\n<label for=\"postQueue\" class=\"form-check-label\">[[admin/manage/categories:post-queue]]</label>\n</div>\n</div>\n" :
        "") + 
      "\n<hr/>\n<div class=\"mb-3 d-flex flex-column\">\n<label class=\"form-label\" for=\"category-image\">\n[[admin/manage/categories:image-and-icon]]\n</label>\n<div class=\"d-flex gap-2 align-items-center\">\n<div component=\"category/preview\" class=\"category-preview rounded-1 d-flex align-items-center justify-content-center pointer\"\ndata-bs-toggle=\"tooltip\" title=\"[[admin/admin:select-icon]]\"\nstyle=\"\n" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "background-image: url(" + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
          ");" :
        "") + 
      "\n" + 
      (guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null) ?
        "background-color: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
          ";" :
        "") + 
      "\n" + 
      (guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null) ?
        "background-size: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
          ";" :
        "") + 
      "\ncolor: " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      ";\nwidth: 40px; height: 40px; font-size: 20px;\n\">\n<div class=\"icon\">\n<i data-name=\"icon\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\" class=\"fa " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\"></i>\n</div>\n</div>\n<input id=\"category-image\" type=\"text\" class=\"form-control flex-1\" placeholder=\"[[admin/manage/categories:category-image]]\" data-name=\"backgroundImage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
      "\" />\n<button type=\"button\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-light upload-button\">[[admin/manage/categories:upload]]</button>\n<button class=\"btn btn-light delete-image\">\n<i data-name=\"icon\" value=\"fa-times\" class=\"fa fa-trash text-danger\"></i>\n</button>\n</div>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label align-self-center\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\">\n[[admin/manage/categories:bg-color]]\n</label>\n<!-- added this to match the height of other blocks -->\n<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\n<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
      "\" class=\"form-control category_bgColor p-1 h-auto align-self-stretch\" style=\"max-width: 64px;\" />\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label align-self-center\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\">\n[[admin/manage/categories:text-color]]\n</label>\n<!-- added this to match the height of other blocks -->\n<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\n<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\" placeholder=\"#ffffff\" data-name=\"color\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      "\" class=\"form-control category_color p-1 h-auto align-self-stretch\" style=\"max-width: 64px;\" />\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\">\n[[admin/manage/categories:bg-image-size]]\n</label>\n<select id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\" class=\"form-select w-auto\" data-name=\"imageClass\" data-value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
      "\">\n<option value=\"auto\">auto</option>\n<option value=\"cover\">cover</option>\n<option value=\"contain\">contain</option>\n</select>\n</div>\n<div class=\"mb-3 d-flex flex-column justify-content-between\">\n<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\">\n[[admin/manage/categories:custom-class]]\n</label>\n<input list=\"customClasses\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\" type=\"text\" class=\"form-control\" placeholder=\"" + 
      (guard((context != null && context['customClasses'] != null) ? context['customClasses']['length'] : null) ?
        compiled.blocks['customClasses'](helpers, context, guard, iter, helper) :
        "col-md-6 col-6") + 
      "\" data-name=\"class\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['class'] : null)) + 
      "\" />\n<datalist id=\"customClasses\">\n" + 
      iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option>" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</datalist>\n</div>\n</div>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 options acp-sidebar\">\n<div class=\"p-2 d-flex flex-column text-bg-light border rounded-1 gap-1\">\n<a href=\"" + 
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
      "\n</div>\n</div>\n</div>\n</div>";
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
    'customClasses': function customClasses(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            __escape(guard(value)) :
            "");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
