
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
    return "<div class=\"pagination-block d-none d-lg-block\">\n<div class=\"scroller-content d-flex gap-2 flex-column align-items-start\">\n<button class=\"pagetop btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2\" style=\"padding: 4px 8px;\"><i class=\"fa fa-fw fa-chevron-up\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span></button>\n<div class=\"scroller-container position-relative\">\n<div class=\"scroller-thumb d-flex gap-2 text-nowrap position-relative\" style=\"height: 40px;\">\n<div class=\"scroller-thumb-icon bg-primary rounded d-inline-block\" style=\"width:9px; height: 40px;\"></div>\n<div>\n<p class=\"small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0\"></p>\n<p class=\"meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none\"></p>\n</div>\n</div>\n<div class=\"unread d-inline-block position-absolute bottom-0\">\n<div class=\"meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2\">\n<a class=\"text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" tabindex=\"-1\" aria-disabled=\"true\" aria-label=\"[[topic:unread-posts-link]]\"></a>\n</div>\n</div>\n</div>\n<button class=\"pagebottom btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2\" style=\"padding: 4px 8px;\"><i class=\"fa fa-fw fa-chevron-down\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['lastposttimeISO'] : null)) + 
      "\"></span></button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
