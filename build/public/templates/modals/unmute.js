
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
    return "<form class=\"form\">\n<div class=\"row\">\n<div class=\"col-12\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"reason\">[[admin/manage/users:temp-ban.reason]]</label>\n<input type=\"text\" class=\"form-control\" id=\"reason\" name=\"reason\" />\n</div>\n</div>\n</div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
