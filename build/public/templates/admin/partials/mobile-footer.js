
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
    return "<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\n<div class=\"bottombar-nav p-2 border-top text-bg-light d-flex justify-content-between align-items-center w-100\">\n<div class=\"\">\n<a href=\"#\" role=\"button\" class=\"p-2 nav-link\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\n<i class=\"fa fa-fw fa-lg fa-bars\"></i>\n</a>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
