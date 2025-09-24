
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
    return "<div class=\"row\">\n<div class=\"col-12 col-sm-6 offset-sm-3\">\n" + 
      (guard((context != null) ? context['valid'] : null) ?
        "\n<div class=\"card card-body bg-light\">\n" + 
          (guard((context != null) ? context['displayExpiryNotice'] : null) ?
            "\n<div class=\"alert alert-warning\">\n[[reset_password:password-expired]]\n</div>\n" :
            "") + 
          "\n<div class=\"alert alert-success alert-dismissible hidden\" id=\"success\">\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n<strong>[[reset_password:password-changed.title]]</strong>\n<p>[[reset_password:password-changed.message]]</p>\n</div>\n<div class=\"alert alert-warning hidden\" id=\"notice\">\n<strong></strong>\n<p></p>\n</div>\n<form onsubmit=\"return false;\" id=\"reset-form\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"password\">[[reset_password:new-password]]</label>\n<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new-password]]\" id=\"password\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"repeat\">[[reset_password:repeat-password]]</label>\n<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat-password]]\" id=\"repeat\" />\n</div>\n<button class=\"btn btn-primary\" id=\"reset\" type=\"submit\">[[reset_password:reset-password]]</button>\n</form>\n</div>\n" :
        "\n<div class=\"card\">\n<div class=\"card-header\">\n<h5 class=\"mb-0\">[[reset_password:wrong-reset-code.title]]</h5>\n</div>\n<div class=\"card-body\">\n<p>[[reset_password:wrong-reset-code.message]]</p>\n</div>\n</div>\n") + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
