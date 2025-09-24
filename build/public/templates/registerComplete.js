
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
    return "<div class=\"row\">\n<div class=\"col-12 col-sm-8 offset-sm-2\">\n<h1 class=\"text-center fs-5\">\n" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:interstitial.intro-new]]" :
        "[[register:interstitial.intro]]") + 
      "\n</h1>\n" + 
      (guard((context != null && context['errors'] != null) ? context['errors']['length'] : null) ?
        "\n<div class=\"alert alert-warning\">\n<p>\n[[register:interstitial.errors-found]]\n</p>\n<ul>\n" + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/complete\" enctype=\"multipart/form-data\">\n<input type=\"hidden\" name=\"csrf_token\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n" + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\n<div class=\"row mt-3\">\n<div class=\"col-12 col-sm-8 offset-sm-2 d-grid\">\n<button class=\"btn btn-primary\">[[topic:composer.submit]]</button>\n<button class=\"btn btn-link\" formaction=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/abort\">" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:cancel-registration]]" :
        "[[modules:bootbox.cancel]]") + 
      "</button>\n</div>\n</div>\n</form>";
  }

  compiled.blocks = {
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['errors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>" + 
          __escape(guard(value)) + 
          "</li>\n";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sections'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"row mb-3\">\n<div class=\"col-12 col-sm-8 offset-sm-2\">\n<div class=\"card\">\n<div class=\"card-body\">\n" + 
          __escape(guard(value)) + 
          "\n</div>\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
