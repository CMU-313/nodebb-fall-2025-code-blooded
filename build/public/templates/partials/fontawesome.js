
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
    return "<div class=\"icon-container\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n</div>\n<div class=\"d-flex nbb-fa-icons flex-wrap\">\n" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<p class=\"form-text text-center\">\nFor a full list of icons, please consult:\n<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n</p>\n</div>";
  }

  compiled.blocks = {
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
