
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
    return "<div>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn btn-ghost gap-2 ff-base d-flex align-items-start justify-content-start p-2 text-start\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
      "\n<div class=\"d-flex flex-column gap-1 text-truncate\">\n<div class=\"fw-semibold text-truncate\" title=\"" + 
      __escape(guard((context != null) ? context['displayname'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['displayname'] : null)) + 
      "</div>\n<div class=\"text-xs text-muted text-truncate\">@" + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "</div>\n" + 
      (guard((context != null) ? context['section_online'] : null) ?
        "\n<div class=\"text-xs text-muted text-truncate\">\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['lastonlineISO'] : null)) + 
          "\"></span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['section_joindate'] : null) ?
        "\n<div class=\"text-xs text-muted text-truncate\">\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['joindateISO'] : null)) + 
          "\"></span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['section_sort-reputation'] : null) ?
        "\n<div class=\"text-xs text-muted text-truncate\">\n<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['reputation'] : null)])) + 
          "</span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['section_sort-posts'] : null) ?
        "\n<div class=\"text-xs text-muted text-truncate\">\n<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['postcount'] : null)])) + 
          "</span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['section_flagged'] : null) ?
        "\n<div class=\"text-xs text-muted text-truncate\">\n<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['flags'] : null)])) + 
          "</span>\n</div>\n" :
        "") + 
      "\n</div>\n</a>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
