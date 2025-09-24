
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
    return "<label class=\"text-xs text-muted\">[[groups:invited.search]]</label>\n<div class=\"input-group mb-2\">\n<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\"/>\n<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n<div class=\"mb-2\">\n<label class=\"text-xs text-muted\">[[groups:bulk-invite-instructions]]</label>\n<textarea class=\"form-control\" component=\"groups/members/bulk-invite\"></textarea>\n</div>\n<div class=\"mb-2 clearfix\">\n<button type=\"button\" class=\"btn btn-primary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n</div>\n<div style=\"max-height: 500px; overflow: auto;\">\n<div component=\"groups/invited/alert\" class=\"alert alert-info " + 
      (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[groups:invited.none]]</div>\n<table component=\"groups/invited\" class=\"table table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>";
  }

  compiled.blocks = {
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n<div class=\"d-flex align-items-center gap-2\">\n<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n</div>\n<button class=\"btn btn-outline-secondary btn-sm text-nowrap\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</button>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
