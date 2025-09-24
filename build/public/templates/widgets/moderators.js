
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
    return "<div class=\"d-flex flex-column gap-1 mb-2\">\n" + 
      compiled.blocks['moderators'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'moderators': function moderators(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderators'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['userslug'] : null)) + 
          "\" class=\"btn btn-ghost d-flex gap-2 ff-secondary align-items-start text-start p-2 ff-base flex-grow-1\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n<div class=\"d-flex flex-column gap-1 text-truncate\">\n<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['displayname'] : null)) + 
          "</div>\n<div class=\"text-xs text-muted text-truncate\">@" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['username'] : null)) + 
          "</div>\n</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
