
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
    return "<div class=\"flex-fill\">\n<div class=\"alert alert-info\">\n[[reset_password:enter-email]]\n</div>\n<div class=\"card card-body bg-light\">\n<div class=\"alert alert-success alert-dismissible hide\" id=\"success\">\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n[[reset_password:password-reset-sent]]\n</div>\n<div class=\"alert alert-danger alert-dismissible hide\" id=\"error\">\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n[[reset_password:invalid-email]]\n</div>\n<form onsubmit=\"return false;\">\n<div class=\"mb-3\">\n<input type=\"email\" class=\"form-control form-control-lg\" id=\"email\" placeholder=\"[[reset_password:enter-email-address]]\" autocomplete=\"off\">\n</div>\n<div class=\"d-grid\">\n<button class=\"btn btn-primary btn-lg\" id=\"reset\" type=\"submit\">[[reset_password:reset-password]]</button>\n</div>\n</form>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
