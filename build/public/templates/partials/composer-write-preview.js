
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
    return "<div class=\"write-preview-container d-flex gap-2 flex-grow-1 overflow-auto\">\n<div class=\"write-container d-flex d-md-flex w-50 position-relative\">\n<div component=\"composer/post-queue/alert\" class=\"m-2 alert alert-info fade pe-none position-absolute top-0 start-0 alert-dismissible\">[[modules:composer.post-queue-alert]]<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>\n<div class=\"draft-icon position-absolute end-0 top-0 mx-2 my-1 hidden-md hidden-lg\"></div>\n<textarea class=\"write shadow-none rounded-1 w-100 form-control\" placeholder=\"[[modules:composer.textarea.placeholder]]\">" + 
      __escape(guard((context != null) ? context['body'] : null)) + 
      "</textarea>\n</div>\n<div class=\"preview-container d-none d-md-flex w-50\">\n<div class=\"preview w-100 overflow-auto\"></div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
