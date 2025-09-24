
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
    return "<form role=\"form\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"uid\">[[admin/settings/api:uid]]</label>\n<input id=\"uid\" type=\"number\" inputmode=\"numeric\" pattern=\"\\d+\" name=\"uid\" class=\"form-control\" placeholder=\"0\" value=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\" />\n<p class=\"form-text\">\n[[admin/settings/api:uid-help-text]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"description\">[[admin/settings/api:description]]</label>\n<input id=\"description\" type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" value=\"" + 
      __escape(guard((context != null) ? context['description'] : null)) + 
      "\" />\n</div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
