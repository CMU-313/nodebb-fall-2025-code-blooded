
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
    return "<form class=\"form\">\n<div class=\"row\">\n<div class=\"col-5\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"length\">[[admin/manage/users:temp-ban.length]]</label>\n<input class=\"form-control\" id=\"length\" name=\"length\" type=\"number\" min=\"0\" value=\"1\" />\n</div>\n<div class=\"form-check form-check-inline\">\n<label class=\"form-check-label\" for=\"unit-hours\">[[admin/manage/users:temp-ban.hours]]</label>\n<input class=\"form-check-input\" type=\"radio\" id=\"unit-hours\" name=\"unit\" value=\"0\" checked />\n</div>\n<div class=\"form-check form-check-inline\">\n<label class=\"form-check-label\" for=\"unit-days\">[[admin/manage/users:temp-ban.days]]</label>\n<input class=\"form-check-input\" type=\"radio\" id=\"unit-days\" name=\"unit\" value=\"1\" />\n</div>\n</div>\n<div class=\"col-7\">\n<div class=\"\">\n<label class=\"form-label\" for=\"reason\">[[admin/manage/users:temp-ban.reason]]</label>\n<input type=\"text\" class=\"form-control\" id=\"reason\" name=\"reason\" />\n</div>\n</div>\n</div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
