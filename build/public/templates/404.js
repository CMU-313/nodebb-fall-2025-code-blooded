
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
    return "<div class=\"flex-fill\">\n<h2 class=\"fw-semibold tracking-tight text-center\">[[global:404.title]]</h2>\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-otter") + 
      "\"></i>\n</div>\n" + 
      (guard((context != null) ? context['error'] : null) ?
        __escape(guard((context != null) ? context['error'] : null)) :
        "[[global:404.message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
