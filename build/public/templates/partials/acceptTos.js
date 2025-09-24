
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
    return "<div>\n<label class=\"form-label\">[[register:terms-of-use]]</label>\n<div class=\"tos\">" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null)) + 
      "</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"agree-terms\" id=\"agree-terms\">\n<label class=\"form-check-label\" for=\"agree-terms\">[[register:agree-to-terms-of-use]]</label>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
