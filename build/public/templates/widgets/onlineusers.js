
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
    return "<div class=\"" + 
      (guard((context != null) ? context['sidebar'] : null) ?
        "row row-cols-1 px-3" :
        "row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4") + 
      " mb-2\">\n" + 
      compiled.blocks['online_users'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'online_users': function online_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['online_users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['userslug'] : null)) + 
          "\" class=\"btn btn-ghost d-flex gap-2 ff-secondary align-items-start text-start p-2 ff-base\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n<div class=\"d-flex flex-column gap-1 text-truncate\">\n<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['displayname'] : null)) + 
          "</div>\n<div class=\"text-xs text-muted text-truncate\">\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['lastonlineISO'] : null)) + 
          "\"></span>\n</div>\n</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
