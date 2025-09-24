
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
    return "<div class=\"dropdown\" component=\"flags/bulk-actions\">\n<button class=\"filter-btn btn btn-light btn-sm border\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\n<span class=\"filter-label\">[[flags:bulk-actions]]</span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-assign\" role=\"menuitem\">[[flags:assign-to-me]]</a></li>\n<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-mark-resolved\" role=\"menuitem\">[[flags:bulk-resolve]]</a></li>\n</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
