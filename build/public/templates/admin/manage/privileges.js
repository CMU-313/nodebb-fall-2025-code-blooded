
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/privileges:manage-privileges]]</h4>\n</div>\n<div class=\"d-flex gap-1\">\n<button id=\"discard\" class=\"btn btn-light btn-sm text-nowrap\" type=\"button\">\n<i class=\"fa fa-rotate-left text-danger\"></i> [[admin/manage/privileges:discard-changes]]\n</button>\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-12\">\n<form role=\"form\" class=\"category\">\n<div class=\"\">\n<p>\n[[admin/manage/categories:privileges.description]]\n</p>\n<div class=\"lead mb-3\">\n[[admin/manage/categories:privileges.category-selector]]\n<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
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
      "\n</ul>\n</div>\n</div>\n</div>\n<div class=\"privilege-table-container\">\n" + 
      (guard((context != null) ? context['cid'] : null) ?
        "\n<label>[[admin/manage/privileges:group-privileges]]</label>\n<div class=\"table-responsive\">\n<table class=\"table privilege-table text-sm\">\n<thead>\n<tr class=\"privilege-table-header\">\n<th class=\"privilege-filters\" colspan=\"100\">\n<div component=\"privileges/groups/filters\" class=\"btn-toolbar justify-content-end gap-1\">\n<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-viewing]]</button>\n<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-posting]]</button>\n<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-moderation]]</button>\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
            "\n<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-other]]</button>\n" :
            "") + 
          "\n</div>\n</th>\n</tr><tr><!-- zebrastripe reset --></tr>\n<tr>\n<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n" + 
          compiled.blocks['privileges.labelData'](helpers, context, guard, iter, helper) + 
          "\n</tr>\n</thead>\n<tbody>\n" + 
          compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"3\"></td>\n<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"search.group\">\n<i class=\"fa fa-users\"></i>\n[[admin/manage/categories:privileges.search-group]]\n</button>\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\n<i class=\"fa fa-copy\"></i>\n[[admin/manage/categories:privileges.copy-from-category]]\n</button>\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\n<i class=\"fa fa-copy\"></i>\n[[admin/manage/categories:privileges.copy-to-children]]\n</button>\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToAll\">\n<i class=\"fa fa-copy\"></i>\n[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n</button>\n</div>\n</td>\n</tr>\n</tfoot>\n</table>\n</div>\n<div class=\"form-text\">\n[[admin/manage/categories:privileges.inherit]]\n</div>\n<hr/>\n<label>[[admin/manage/privileges:user-privileges]]</label>\n<div class=\"table-responsive\">\n<table class=\"table privilege-table text-sm\">\n<thead>\n<tr class=\"privilege-table-header\">\n<th class=\"privilege-filters\" colspan=\"100\">\n<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
            "\n<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n" :
            "") + 
          "\n</div>\n</th>\n</tr><tr><!-- zebrastripe reset --></tr>\n<tr>\n<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</tr>\n</thead>\n<tbody>\n" + 
          compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"3\"></td>\n<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n<div class=\"btn-toolbar justify-content-end\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\n<i class=\"fa fa-user\"></i>\n[[admin/manage/categories:privileges.search-user]]\n</button>\n</div>\n</td>\n</tr>\n</tfoot>\n</table>\n</div>\n" :
        "\n<label>[[admin/manage/privileges:group-privileges]]</label>\n<div class=\"table-responsive\">\n<table class=\"table privilege-table text-sm\">\n<thead>\n" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\n<tr class=\"privilege-table-header\">\n<th class=\"privilege-filters\" colspan=\"100\">\n<div component=\"privileges/groups/filters\" class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
                "\n<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n" :
                "") + 
              "\n</div>\n</th>\n</tr><tr><!-- zebrastripe reset --></tr>\n") + 
          "\n<tr>\n<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</tr>\n</thead>\n<tbody>\n" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<tr data-group-name=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
              "\" data-private=\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "1" :
                "0") + 
              "\">\n<td>\n" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "\n" + 
                  ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                    "\n<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n" :
                    "\n<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n") + 
                  "\n" :
                "\n<i class=\"fa fa-fw fa-none\"></i>\n") + 
              "\n" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
              "\n</td>\n<td></td>\n<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null) ? context['cid'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['types'] : null)])) + 
              "\n</tr>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"3\"></td>\n<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n<div class=\"btn-toolbar justify-content-end\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.group\">\n<i class=\"fa fa-users\"></i>\n[[admin/manage/categories:privileges.search-group]]\n</button>\n</div>\n</td>\n</tr>\n</tfoot>\n</table>\n</div>\n<div class=\"form-text\">\n[[admin/manage/categories:privileges.inherit]]\n</div>\n<hr/>\n<label>[[admin/manage/privileges:user-privileges]]</label>\n<div class=\"table-responsive\">\n<table class=\"table privilege-table text-sm\">\n<thead>\n" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\n<tr class=\"privilege-table-header\">\n<th class=\"privilege-filters\" colspan=\"100\">\n<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
                "\n<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n" :
                "") + 
              "\n</div>\n</th>\n</tr><tr><!-- zebrastripe reset --></tr>\n") + 
          "\n<tr>\n<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</tr>\n</thead>\n<tbody>\n" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<tr data-uid=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
              "\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                " data-banned" :
                "") + 
              ">\n<td>\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\n" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                "\n<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n" :
                "") + 
              "\n" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\n</td>\n<td>\n<!-- need this empty -->\n</td>\n<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null) ? context['cid'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['types'] : null)])) + 
              "\n</tr>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"3\"></td>\n<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n<div class=\"btn-toolbar justify-content-end\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\n<i class=\"fa fa-user\"></i>\n[[admin/manage/categories:privileges.search-user]]\n</button>\n</div>\n</td>\n</tr>\n</tfoot>\n</table>\n</div>\n") + 
      "\n</div>\n</div>\n</form>\n</div>\n</div>\n</div>";
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
    'privileges.labelData': function privilegeslabelData(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<th class=\"text-center\" data-type=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
          "</th>\n";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\n<td>\n" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\n" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\n<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n" :
                "\n<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n") + 
              "\n" :
            "\n<i class=\"fa fa-fw fa-none\"></i>\n") + 
          "\n" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\n</td>\n<td>\n<div class=\"dropdown\">\n<button class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n<i class=\"fa fa-copy\"></i>\n</button>\n<ul class=\"dropdown-menu\" role=\"menu\">\n<li data-action=\"copyToAllGroup\"><a class=\"dropdown-item\" href=\"#\" role=\"menuitem\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n<li data-action=\"copyToChildrenGroup\"><a class=\"dropdown-item\" href=\"#\" role=\"menuitem\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n<li data-action=\"copyPrivilegesFromGroup\"><a class=\"dropdown-item\" href=\"#\" role=\"menuitem\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n</ul>\n</div>\n</td>\n<td class=\"\">\n<div class=\"form-check text-center\">\n<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\n</div>\n</td>\n" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null) ? context['cid'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['types'] : null)])) + 
          "\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\n<td>\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\n<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\n</td>\n<td>\n<!-- need this empty -->\n</td>\n<td class=\"\">\n<div class=\"form-check text-center\">\n<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\n</div>\n</td>\n" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null) ? context['cid'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['types'] : null)])) + 
          "\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
