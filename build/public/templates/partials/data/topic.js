
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
    return "data-index=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['index'] : null)) + 
      "\" data-pid=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['uid'] : null)) + 
      "\" data-timestamp=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['timestamp'] : null)) + 
      "\" data-username=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['username'] : null)) + 
      "\" data-userslug=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) + 
      "\"" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['allowDupe'] : null) ?
        " data-allow-dupe=\"1\"" :
        "") + 
      (guard((context != null && context['posts'] != null) ? context['posts']['navigatorIgnore'] : null) ?
        " data-navigator-ignore=\"1\"" :
        "") + 
      " itemprop=\"comment\" itemtype=\"http://schema.org/Comment\" itemscope";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
