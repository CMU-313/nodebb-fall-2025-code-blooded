
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"[[flags:modal-title]]\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h5 class=\"modal-title\">[[flags:modal-title]]</h5>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<p class=\"lead\">\n[[flags:modal-body, " + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "]]\n</p>\n<div>\n<div class=\"radio mb-2\">\n<label for=\"flag-reason-spam\">\n<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-spam\" value=\"[[flags:modal-reason-spam]]\">\n[[flags:modal-reason-spam]]\n</label>\n</div>\n<div class=\"radio mb-2\">\n<label for=\"flag-reason-offensive\">\n<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-offensive\" value=\"[[flags:modal-reason-offensive]]\">\n[[flags:modal-reason-offensive]]\n</label>\n</div>\n<div class=\"radio mb-2\">\n<label for=\"flag-reason-other\">\n<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-other\" value=\"[[flags:modal-reason-other]]\">\n[[flags:modal-reason-other]]\n</label>\n</div>\n</div>\n<div class=\"mb-2\">\n<textarea class=\"form-control\" id=\"flag-reason-custom\" placeholder=\"[[flags:modal-reason-custom]]\" disabled=\"disabled\"></textarea>\n</div>\n" + 
      (guard((context != null) ? context['remote'] : null) ?
        "\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"flag-notify-remote\" checked=\"checked\">\n<label class=\"form-check-label text-sm\" for=\"flag-notify-remote\">\n[[flags:modal-notify-remote, " + 
          __escape(guard((context != null) ? context['remote'] : null)) + 
          "]]\n</label>\n</div>\n" :
        "") + 
      "\n<button type=\"button\" class=\"btn btn-primary\" id=\"flag-post-commit\" disabled>[[flags:modal-submit]]</button>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
