
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
    return "<div class=\"flex-fill\">\n<h2 class=\"fw-semibold tracking-tight text-center\">[[global:500.title]]</h2>\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x fa-triangle-exclamation\"></i>\n</div>\n[[global:500.message]]\n" + 
      (guard((context != null) ? context['error'] : null) ?
        "<div class=\"text-sm text-muted\">" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</div>" :
        "") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
