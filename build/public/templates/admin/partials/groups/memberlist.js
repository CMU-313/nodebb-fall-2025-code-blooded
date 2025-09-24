
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
    return "<div class=\"d-flex justify-content-between mb-2\">\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm text-nowrap\" title=\"[[groups:details.add-member]]\">[[groups:details.add-member]]</button>\n" :
        "") + 
      "\n<div>\n<div class=\"input-group\">\n<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n<span class=\"input-group-text search-button px-2\"><i class=\"fa fa-fw fa-search\"></i></span>\n</div>\n</div>\n</div>\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"overflow-auto\" style=\"max-height: 500px;\">\n<table  class=\"table table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
