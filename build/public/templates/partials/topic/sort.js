
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
    return "<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">" + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:oldest-to-newest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:newest-to-oldest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
