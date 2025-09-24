
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
    return "<form>\n<div class=\"mb-3\">\n<label for=\"name\">[[admin/appearance/skins:custom-skin-name]]</label>\n<input type=\"text\" name=\"custom-skin-name\" class=\"form-control\">\n</div>\n<div class=\"mb-3\">\n<label for=\"_variables\">[[admin/appearance/skins:custom-skin-variables]]</label>\n<textarea name=\"_variables\" class=\"form-control\" rows=\"20\"></textarea>\n</div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
