
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
    return "<div component=\"topic/deleted/message\" class=\"alert alert-warning d-flex justify-content-between flex-wrap" + 
      (guard((context != null) ? context['deleted'] : null) ?
        "" :
        " hidden") + 
      "\">\n<span>[[topic:deleted-message]]</span>\n<span>\n" + 
      (guard((context != null) ? context['deleter'] : null) ?
        "\n<a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
          "</a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
          "\"></small>\n" :
        "") + 
      "\n</span>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
