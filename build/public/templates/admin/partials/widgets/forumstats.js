
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">Stats Class:</label>\n<input type=\"text\" class=\"form-control\" name=\"statsClass\" placeholder=\"card card-header p-3 mb-3\" />\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
