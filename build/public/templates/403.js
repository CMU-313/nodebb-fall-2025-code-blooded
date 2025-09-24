
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
    return "<div class=\"flex-fill\">\n<h2 class=\"fw-semibold tracking-tight text-center\">[[global:403.title]]</h2>\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x fa-key\"></i>\n</div>\n" + 
      (guard((context != null) ? context['error'] : null) ?
        __escape(guard((context != null) ? context['error'] : null)) :
        "[[global:403.message]]") + 
      "\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "" :
        "\n[[global:403.login, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]\n") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
