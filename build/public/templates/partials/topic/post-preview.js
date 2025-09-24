
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
    return "<div id=\"post-tooltip\" class=\"card card-body shadow bg-body text-body z-1 position-absolute\">\n<div class=\"d-flex flex-column gap-2\">\n<div class=\"d-flex gap-2 align-items-center\">\n<div>\n<a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['post'] != null) ? context['post']['user'] : null), "20px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "</a>\n<a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">" + 
      __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['username'] : null)) + 
      "</a>\n</div>\n<div>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['pid'] : null)) + 
      "\" class=\"timeago text-xs text-secondary lh-1\" style=\"vertical-align: middle;\" title=\"" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['timestampISO'] : null)) + 
      "\"></a>\n</div>\n</div>\n<div class=\"content ghost-scrollbar\" style=\"max-height: 300px; overflow-y:auto;\">" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['content'] : null)) + 
      "</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
