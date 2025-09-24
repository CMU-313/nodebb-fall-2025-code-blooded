
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
    return "<span data-editor=\"" + 
      __escape(guard((context != null && context['editor'] != null) ? context['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"visually-hidden\">[[global:last-edited-by, " + 
      __escape(guard((context != null && context['editor'] != null) ? context['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null) ? context['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
      "\"></span></span>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
