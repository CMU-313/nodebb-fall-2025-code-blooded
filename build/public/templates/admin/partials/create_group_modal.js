
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
    return "<div class=\"modal fade\" id=\"create-modal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h4 class=\"modal-title\">[[admin/manage/groups:create]]</h4>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<div class=\"alert alert-danger hide\" id=\"create-modal-error\"></div>\n<form>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"create-group-name\">[[admin/manage/groups:name]]</label>\n<input type=\"text\" class=\"form-control\" id=\"create-group-name\" placeholder=\"[[admin/manage/groups:name]]\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"create-group-desc\">[[admin/manage/groups:description]]</label>\n<input type=\"text\" class=\"form-control\" id=\"create-group-desc\" placeholder=\"[[admin/manage/groups:description-placeholder]]\" />\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" id=\"create-group-private\" name=\"private\" type=\"checkbox\" checked>\n<label class=\"form-check-label\" for=\"create-group-private\">[[admin/manage/groups:private]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" id=\"create-group-hidden\" name=\"hidden\" type=\"checkbox\">\n<label class=\"form-check-label\" for=\"create-group-hidden\">[[admin/manage/groups:hidden]]</label>\n</div>\n</form>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">\n[[global:close]]\n</button>\n<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">\n[[admin/manage/groups:create-button]]\n</button>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
