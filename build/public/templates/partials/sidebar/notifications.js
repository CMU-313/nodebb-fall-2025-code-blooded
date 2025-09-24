
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
    return "<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link d-flex gap-2 justify-content-between align-items-center position-relative\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[global:header.notifications]]\">\n<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n<span class=\"position-relative\">\n<i component=\"notifications/icon\" class=\"fa fa-fw " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "fa-bell" :
        "fa-bell-o") + 
      " unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "\"></i>\n<span component=\"notifications/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "</span>\n</span>\n<span class=\"nav-text small visible-open fw-semibold truncate-text\">[[global:header.notifications]]</span>\n</span>\n<span component=\"notifications/count\" class=\"visible-open badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "</span>\n</a>\n<ul class=\"notifications-dropdown dropdown-menu p-1 shadow\" role=\"menu\">\n<li>\n<div component=\"notifications/list\" class=\"list-container notification-list overscroll-behavior-contain pe-1 ff-base ghost-scrollbar\">\n<div class=\"mb-2 p-1\">\n<div class=\"d-flex gap-1 justify-content-between\">\n<div class=\"d-flex gap-2 flex-grow-1 placeholder-wave\">\n<div class=\"placeholder\" style=\"width: 32px; height: 32px;\"></div>\n<div class=\"flex-grow-1\">\n<div class=\"d-flex flex-column\">\n<div class=\"text-sm\">\n<span class=\"placeholder placeholder-sm col-4\"></span>\n<span class=\"placeholder placeholder-sm col-6\"></span>\n<span class=\"placeholder placeholder-sm col-7\"></span>\n<span class=\"placeholder placeholder-sm col-2\"></span>\n<span class=\"placeholder placeholder-sm col-5\"></span>\n</div>\n<div class=\"text-xs\">\n<div class=\"placeholder placeholder-xs col-6\"></div>\n</div>\n</div>\n</div>\n</div>\n<div>\n<button class=\"mark-read btn btn-ghost btn-sm d-flex align-items-center justify-content-center flex-grow-0 flex-shrink-0 p-1\" style=\"width: 1.5rem; height: 1.5rem;\">\n<i class=\"unread fa fa-2xs fa-circle text-primary\"></i>\n</button>\n</div>\n</div>\n</div>\n</div>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n<a role=\"button\" href=\"#\" class=\"btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary\"><i class=\"fa fa-check-double\"></i> [[notifications:mark-all-read]]</a>\n<a class=\"btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see-all]]</a>\n</div>\n</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
