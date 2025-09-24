
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
    return compiled.blocks['sessions'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"list-group-item text-break\" data-uuid=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['uuid'] : null)) + 
          "\">\n<div class=\"float-end\">\n" + 
          (guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null) ?
            "\n" + 
              (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
                "" :
                "\n<button class=\"btn btn-sm btn-outline-secondary\" type=\"button\" data-action=\"revokeSession\">[[user:revoke-session]]</button>\n") + 
              "\n" :
            "") + 
          "\n" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\n<i class=\"fa fa-circle text-" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "success" :
            "muted") + 
          "\"></i>\n</div>\n[[user:browser-version-on-platform, " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "]]<br />\n<small class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></small>\n<ul>\n<li><strong>[[global:ip-address]]</strong>: " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['ip'] : null)) + 
          "</li>\n</ul>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
