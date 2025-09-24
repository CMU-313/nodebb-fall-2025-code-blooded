
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
    return "<div class=\"logger settings d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/development/logger:logger]]</h4>\n</div>\n<div class=\"d-flex align-items-center\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"card-body\">\n<p>\n[[admin/development/logger:description]]\n</p>\n<br/>\n<p>\n[[admin/development/logger:explanation]]\n</p>\n<br/>\n<form>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerStatus\" data-field=\"loggerStatus\">\n<label for=\"loggerStatus\" class=\"form-check-label\">[[admin/development/logger:enable-http]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerIOStatus\" data-field=\"loggerIOStatus\">\n<label for=\"loggerIOStatus\" class=\"form-check-label\">[[admin/development/logger:enable-socket]]</label>\n</div>\n<label class=\"form-label\" for=\"loggerPath\">[[admin/development/logger:file-path]]</label>\n<input id=\"loggerPath\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\n</form>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
