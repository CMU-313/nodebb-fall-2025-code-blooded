
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
    return compiled.blocks['themes'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-lg-4 col-md-6 col-12 mb-4\" data-type=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['type'] : null)) + 
          "\" data-theme-name=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "\" data-theme=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['id'] : null)) + 
          "\"" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null) ?
            " data-css=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null)) + 
              "\" " :
            "") + 
          ">\n<div class=\"card h-100\">\n<img src=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['screenshot_url'] : null)) + 
          "\" class=\"card-img-top\">\n<div class=\"card-body\">\n<h5 class=\"card-title\">" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "</h5>\n<p class=\"card-text\">\n" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['description'] : null)) + 
          "\n</p>\n" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null) ?
            "\n<p>\n<a href=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null)) + 
              "\" target=\"_blank\">[[admin/appearance/themes:homepage]]</a>\n</p>\n" :
            "") + 
          "\n</div>\n<div class=\"card-footer\">\n<a class=\"btn btn-primary\" data-action=\"use\">\n" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['skin'] : null) ?
            "[[admin/appearance/skins:select-skin]]" :
            "[[admin/appearance/themes:select-theme]]") + 
          "\n</a>\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
