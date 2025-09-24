
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
    return "<div class=\"position-fixed bottom-0 w-100 px-3 px-md-0 pb-5 mb-5 pb-lg-0 mb-lg-0\" style=\"z-index: 2;\">\n<div class=\"cookie-consent d-flex flex-column flex-lg-row gap-2 text-bg-info col-12 col-sm-8 col-lg-6 p-3 mx-auto rounded mb-5 mb-md-3 justify-content-between align-items-center\">\n<span>" + 
      __escape(guard((context != null) ? context['message'] : null)) + 
      " <a class=\"fw-bold\" target=\"_blank\" rel=\"noopener\" href=\"" + 
      __escape(guard((context != null) ? context['link_url'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['link'] : null)) + 
      "</a></span>\n<button class=\"btn btn-primary text-nowrap\">" + 
      __escape(guard((context != null) ? context['dismiss'] : null)) + 
      "</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
