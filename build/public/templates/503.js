
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
    return "<div class=\"flex-fill\">\n<h2 class=\"fw-semibold tracking-tight text-center\">[[pages:maintenance.text, " + 
      __escape(guard((context != null) ? context['site_title'] : null)) + 
      "]]</h2>\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x fa-wrench\"></i>\n</div>\n" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n[[pages:maintenance.messageIntro]]\n<div class=\"text-sm text-muted\">" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</div>\n" :
        "") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
