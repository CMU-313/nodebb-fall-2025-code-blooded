
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
    return "<div id=\"" + 
      __escape(guard((context != null) ? context['alert_id'] : null)) + 
      "\" role=\"alert\" class=\"alert alert-dismissible alert-" + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      " fade show\" component=\"toaster/toast\">\n<div class=\"alert-progress position-absolute top-0 start-0 bottom-0 h-100 z-0\" style=\" opacity:0.1;\"></div>\n<div class=\"d-flex flex-wrap gap-2 position-relative\">\n" + 
      (guard((context != null) ? context['image'] : null) ?
        "\n<img src=\"" + 
          __escape(guard((context != null) ? context['image'] : null)) + 
          "\" height=\"80\" style=\"width: auto;\" />\n" :
        "") + 
      "\n<div class=\"d-flex flex-column gap-2\">\n" + 
      (guard((context != null) ? context['title'] : null) ?
        "\n<strong>" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "</strong>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n<p class=\"m-0\">" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</p>\n" :
        "") + 
      "\n</div>\n</div>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"close\"></button>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
