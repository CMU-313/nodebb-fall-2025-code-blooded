
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
    return "<div class=\"acp-page-container px-lg-4\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/groups:edit-group]]</h4>\n<div component=\"group-selector\" class=\"btn-group\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle w-100\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"group-selector-selected\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</span> <span class=\"caret\"></span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"group-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"group-list\" class=\"list-unstyled mb-0 text-sm dropdown-menu-end group-dropdown-menu overflow-auto ghost-scrollbar\" role=\"menu\" style=\"max-height: 500px;\">\n<li component=\"group-no-matches\" role=\"presentation\" class=\"group hidden\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
      compiled.blocks['groupNames'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 \">\n<button id=\"save\" class=\"btn btn-primary btn-sm btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\" data-groupname=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "\">\n<div class=\"col-12 col-md-8 px-0\">\n<div class=\"group-settings-form\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"change-group-name\">[[admin/manage/groups:edit.name]]</label>\n<input type=\"text\" class=\"form-control\" id=\"change-group-name\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "\" maxlength=\"" + 
      __escape(guard((context != null) ? context['maximumGroupNameLength'] : null)) + 
      "\" data-property " + 
      (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
        "readonly" :
        "") + 
      "/>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"change-group-desc\">[[admin/manage/groups:edit.description]]</label>\n<input type=\"text\" class=\"form-control\" id=\"change-group-desc\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
      "\" maxlength=\"255\" data-property />\n</div>\n<div class=\"mb-3 d-flex flex-column gap-1\">\n<div class=\"d-flex gap-2\">\n<label class=\"form-label\" for=\"category-image\">\n[[admin/manage/groups:icon-and-title]]\n</label>\n<span id=\"group-label-preview\" class=\"badge\" style=\"color:" + 
      (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
        "#ffffff") + 
      "; background:" + 
      (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
        "#000000") + 
      ";\"><i id=\"group-icon-preview\" class=\"fa " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
      " " + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        "" :
        "hidden") + 
      "\"></i> <span id=\"group-label-preview-text\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) + 
      "</span></span>\n</div>\n<div class=\"d-flex gap-2 align-items-center\">\n<div class=\"pointer border rounded-1 p-1 d-flex align-items-center justify-content-center\" id=\"group-icon-container\" style=\"width:40px; height:40px;\" data-bs-toggle=\"tooltip\" title=\"[[admin/admin:select-icon]]\">\n<i id=\"group-icon\" class=\"fa fa-2x " + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
        "") + 
      "\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
      "\"></i>\n</div>\n<div class=\"w-100\">\n<input type=\"text\" class=\"form-control\" id=\"change-group-user-title\" placeholder=\"The title of users if they are a member of this group\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
      "\" maxlength=\"" + 
      __escape(guard((context != null) ? context['maximumGroupTitleLength'] : null)) + 
      "\" data-property />\n</div>\n</div>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label text-nowrap\" for=\"change-group-label-color\">[[admin/manage/groups:edit.label-color]]</label>\n<!-- added this to match the height of other blocks -->\n<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\n<input type=\"color\" id=\"change-group-label-color\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
      "\" class=\"form-control p-1 h-auto align-self-stretch\" data-property style=\"max-width: 64px;\" />\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label text-nowrap\" for=\"change-group-text-color\">[[admin/manage/groups:edit.text-color]]</label>\n<!-- added this to match the height of other blocks -->\n<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\n<input type=\"color\" id=\"change-group-text-color\" placeholder=\"#ffffff\" data-name=\"textColor\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
      "\" class=\"form-control p-1 h-auto align-self-stretch\" data-property style=\"max-width: 64px;\"/>\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" id=\"group-userTitleEnabled\" name=\"userTitleEnabled\" data-property type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        " checked" :
        "") + 
      ">\n<label class=\"form-check-label\" for=\"group-userTitleEnabled\">[[admin/manage/groups:edit.show-badge]]</label>\n</div>\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" id=\"group-private\" name=\"private\" data-property type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        " checked" :
        "") + 
      ">\n<label class=\"form-check-label\" for=\"group-private\">[[groups:details.private]]</label>\n</div>\n<p class=\"form-text\">\n[[admin/manage/groups:edit.private-details]]\n</p>\n" + 
      (guard((context != null) ? context['allowPrivateGroups'] : null) ?
        "" :
        "\n<p class=\"form-text\">\n[[admin/manage/groups:edit.private-override]]\n</p>\n") + 
      "\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" id=\"group-disableJoinRequests\" name=\"disableJoinRequests\" data-property type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
        " checked" :
        "") + 
      ">\n<label class=\"form-check-label\" for=\"group-disableJoinRequests\">[[admin/manage/groups:edit.disable-join]]</label>\n</div>\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" id=\"group-disableLeave\" name=\"disableLeave\" data-property type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
        " checked" :
        "") + 
      ">\n<label class=\"form-check-label\" for=\"group-disableLeave\">[[admin/manage/groups:edit.disable-leave]]</label>\n</div>\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" id=\"group-hidden\" name=\"hidden\" data-property type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        " checked" :
        "") + 
      ">\n<label class=\"form-check-label\" for=\"group-hidden\">[[admin/manage/groups:edit.hidden]]</label>\n<p class=\"form-text\">\n[[admin/manage/groups:edit.hidden-details]]\n</p>\n</div>\n</div>\n<hr />\n<div class=\"d-flex flex-column gap-1 mb-3\">\n<label class=\"form-label\" for=\"memberPostCids\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n<div class=\"d-flex gap-1 align-items-center\">\n<div class=\"member-post-cids-selector\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
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
      "\n</ul>\n</div>\n</div>\n</div>\n<input id=\"memberPostCids\" type=\"text\" class=\"form-control form-control-sm\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
      "\">\n</div>\n</div>\n<hr />\n<div class=\"d-flex flex-column gap-2\">\n<label class=\"form-label\">[[admin/manage/groups:edit.members]]</label>\n<div class=\"\">\n<div class=\"d-flex justify-content-between mb-2\">\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm text-nowrap\" title=\"[[groups:details.add-member]]\">[[groups:details.add-member]]</button>\n" :
        "") + 
      "\n<div>\n<div class=\"input-group\">\n<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n<span class=\"input-group-text search-button px-2\"><i class=\"fa fa-fw fa-search\"></i></span>\n</div>\n</div>\n</div>\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"overflow-auto\" style=\"max-height: 500px;\">\n<table  class=\"table table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 acp-sidebar\">\n<div class=\"p-2 d-flex flex-column text-bg-light border rounded-1 gap-1\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/groups\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\"><i class=\"fa fa-fw fa-chevron-left text-primary\"></i> [[admin/manage/groups:back-to-groups]]</a>\n<hr class=\"my-1\"/>\n<div class=\"edit-privileges-selector w-100\">\n<div component=\"category-selector\" class=\"btn-group w-100\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center flex-fill dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-lock text-primary\"></i> <span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu dropdown-menu-end ghost-scrollbar\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/groups/" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
      "/csv\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-file-csv text-primary\"></i>[[admin/manage/groups:members-csv]]</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/groups/" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['slug'] : null)) + 
      "\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-eye text-primary\"></i> [[admin/manage/groups:view-group]]\n</a>\n<hr class=\"my-1\"/>\n<button data-action=\"delete\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-trash text-danger\"></i> [[admin/manage/groups:delete]]\n</button>\n</div>\n</div>\n</form>\n</div>\n<div id=\"icons\" style=\"display:none;\">\n<div class=\"icon-container\">\n<div class=\"row nbb-fa-icons\">\n<div class=\"icon-container\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n</div>\n<div class=\"d-flex nbb-fa-icons flex-wrap\">\n" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<p class=\"form-text text-center\">\nFor a full list of icons, please consult:\n<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n</p>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'groupNames': function groupNames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groupNames'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"group\" data-name=\"" + 
          __escape(guard((context != null && context['groupNames'] != null && context['groupNames'][key0] != null) ? context['groupNames'][key0]['displayName'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['groupNames'] != null && context['groupNames'][key0] != null) ? context['groupNames'][key0]['slug'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['groupNames'] != null && context['groupNames'][key0] != null) ? context['groupNames'][key0]['displayName'] : null)) + 
          "</a>\n</li>\n";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\n<td class=\"member-name d-flex justify-content-between align-items-center\">\n<div class=\"d-flex align-items-center gap-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</div>\n" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n<div class=\"owner-controls d-flex gap-1\">\n<a class=\"btn btn-light btn-sm\" href=\"#\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n<i class=\"fa fa-star text-warning\"></i>\n</a>\n<a class=\"btn btn-light btn-sm\" href=\"#\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n<i class=\"fa fa-ban text-danger\"></i>\n</a>\n</div>\n" :
            "") + 
          "\n</td>\n</tr>\n";
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
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">" + 
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
    }
  };

  return compiled;
})
