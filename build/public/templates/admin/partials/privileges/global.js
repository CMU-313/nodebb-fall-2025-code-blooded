
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
    return "<label>[[admin/manage/privileges:group-privileges]]</label>\n<div class=\"table-responsive\">\n<table class=\"table privilege-table text-sm\">\n<thead>\n" + 
      (guard((context != null) ? context['isAdminPriv'] : null) ?
        "" :
        "\n<tr class=\"privilege-table-header\">\n<th class=\"privilege-filters\" colspan=\"100\">\n<div component=\"privileges/groups/filters\" class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
            "\n<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n" :
            "") + 
          "\n</div>\n</th>\n</tr><tr><!-- zebrastripe reset --></tr>\n") + 
      "\n<tr>\n<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n" + 
      compiled.blocks['privileges.labelData'](helpers, context, guard, iter, helper) + 
      "\n</tr>\n</thead>\n<tbody>\n" + 
      compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
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
      compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"3\"></td>\n<td colspan=\"" + 
      __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
      "\">\n<div class=\"btn-toolbar justify-content-end\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\n<i class=\"fa fa-user\"></i>\n[[admin/manage/categories:privileges.search-user]]\n</button>\n</div>\n</td>\n</tr>\n</tfoot>\n</table>\n</div>";
  }

  compiled.blocks = {
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
          "\n</td>\n<td></td>\n<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n" + 
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
          "\n</td>\n<td>\n<!-- need this empty -->\n</td>\n<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null) ? context['cid'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['types'] : null)])) + 
          "\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
