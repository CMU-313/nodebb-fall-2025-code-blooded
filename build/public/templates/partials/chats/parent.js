
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
    return "<div class=\"d-flex ms-4 mb-2 align-items-center\">\n<div component=\"chat/message/parent\" data-parent-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['mid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['fromuid'] : null)) + 
      "\" class=\"btn btn-ghost btn-sm d-flex gap-2 ff-secondary text-start flex-row w-100\">\n<div class=\"d-flex gap-2 text-sm text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
      "\" class=\"text-decoration-none lh-1\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
      "</a>\n<a class=\"chat-user fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['displayname'] : null)) + 
      "</a>\n</div>\n<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['timestampISO'] : null)) + 
      "\"></span>\n</div>\n<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['content'] : null)) + 
      "</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
