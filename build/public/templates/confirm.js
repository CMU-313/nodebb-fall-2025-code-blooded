
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
    return (guard((context != null) ? context['error'] : null) ?
        "\n<div class=\"alert alert-warning\">\n<p>[[notifications:email-confirm-error-message]]</p>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        "\n<div class=\"alert alert-success\">\n<strong>[[notifications:email-confirmed]]</strong>\n<p>[[notifications:email-confirmed-message]]</p>\n") + 
      "\n<p class=\"mb-0\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\">[[notifications:back-to-home, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</a>\n</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
