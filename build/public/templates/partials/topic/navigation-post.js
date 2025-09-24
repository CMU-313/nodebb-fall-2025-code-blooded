
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
    return "<div class=\"d-flex gap-2 mb-2 align-items-center flex-nowrap text-sm\">\n<div>\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['post'] != null) ? context['post']['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
      "\n</div>\n<div class=\"text-truncate\">\n<a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">" + 
      __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['displayname'] : null)) + 
      "</a>\n</div>\n<span class=\"timeago text-nowrap text-muted\" title=\"" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['timestampISO'] : null)) + 
      "\"></span>\n</div>\n<div class=\"text-sm\">" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['content'] : null)) + 
      "</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
