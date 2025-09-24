
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
    return "<form role=\"form\">\n<fieldset>\n<div class=\"alert alert-danger hidden\">[[admin/dashboard:page-views-custom-error]]</div>\n<div class=\"row\">\n<div class=\"col-6\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"startRange\">[[admin/dashboard:page-views-custom-start]]</label>\n<input class=\"form-control\" type=\"date\" id=\"startRange\" name=\"startRange\" />\n</div>\n</div>\n<div class=\"col-6\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"endRange\">[[admin/dashboard:page-views-custom-end]]</label>\n<input class=\"form-control\" type=\"date\" id=\"endRange\" name=\"endRange\" />\n</div>\n</div>\n</div>\n<p class=\"form-text\">[[admin/dashboard:page-views-custom-help]]</p>\n</fieldset>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
