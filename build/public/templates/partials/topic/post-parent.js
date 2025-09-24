
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
    return "<div component=\"post/parent\" data-collapsed=\"true\" data-parent-pid=\"" + 
      __escape(guard((context != null && context['parent'] != null) ? context['parent']['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['parent'] != null) ? context['parent']['uid'] : null)) + 
      "\" class=\"btn btn-ghost btn-sm d-flex gap-2 text-start flex-row mb-2\" style=\"font-size: 13px;\">\n<div class=\"d-flex gap-2 text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['userslug'] : null)) + 
      "\" class=\"text-decoration-none lh-1\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['parent'] != null) ? context['parent']['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
      "</a>\n<a class=\"fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['displayname'] : null)) + 
      "</a>\n</div>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['parent'] != null) ? context['parent']['pid'] : null)])) + 
      "\" class=\"text-muted timeago text-nowrap hidden\" title=\"" + 
      __escape(guard((context != null && context['parent'] != null) ? context['parent']['timestampISO'] : null)) + 
      "\"></a>\n</div>\n<div component=\"post/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
      __escape(guard((context != null && context['parent'] != null) ? context['parent']['content'] : null)) + 
      "</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
