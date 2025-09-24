
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
    return "<div component=\"topic/merged/message\" class=\"alert alert-info d-flex justify-content-between flex-wrap\">\n<span>[[topic:merged-message, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/topic/" + 
      __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
      ", " + 
      __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
      "]]</span>\n<span>\n<a class=\"fw-bold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
      "</strong></a> <small class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
      "\"></small>\n</span>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
