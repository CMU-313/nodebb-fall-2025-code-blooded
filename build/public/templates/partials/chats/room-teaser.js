
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
    return "<div component=\"chat/room/teaser\">\n" + 
      (guard((context != null) ? context['teaser'] : null) ?
        "\n<div class=\"teaser-content text-sm line-clamp-3 text-break\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['teaser'] != null) ? context['teaser']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "align-middle"])) + 
          "\n<strong class=\"text-xs fw-semibold teaser-username\">" + 
          __escape(guard((context != null && context['teaser'] != null && context['teaser']['user'] != null) ? context['teaser']['user']['displayname'] : null)) + 
          ":</strong>\n" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['content'] : null)) + 
          "\n</div>\n<div class=\"teaser-timestamp text-muted text-xs\">" + 
          (guard((context != null && context['teaser'] != null) ? context['teaser']['timeagoLong'] : null) ?
            __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timeagoLong'] : null)) :
            "<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
              "\"></span>") + 
          "</div>\n" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
