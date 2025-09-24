
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
    return "<div class=\"tag-row\">\n<div class=\"tags-container d-flex align-items-center " + 
      (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
        "haswhitelist" :
        "") + 
      "\">\n<div class=\"btn-group dropup me-2 " + 
      (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
        "" :
        "hidden") + 
      "\" component=\"composer/tag/dropdown\">\n<button class=\"btn btn-sm btn-link text-body dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\n[[tags:select-tags]]\n</button>\n<ul class=\"dropdown-menu p-1\" role=\"menu\">\n" + 
      compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<input class=\"tags\" type=\"text\" class=\"\" placeholder=\"[[tags:enter-tags-here, " + 
      __escape(guard((context != null) ? context['minimumTagLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumTagLength'] : null)) + 
      "]]\" />\n</div>\n</div>";
  }

  compiled.blocks = {
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a class=\"dropdown-item rounded-1\" href=\"#\" role=\"menuitem\">" + 
          __escape(guard(value)) + 
          "</a></li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
