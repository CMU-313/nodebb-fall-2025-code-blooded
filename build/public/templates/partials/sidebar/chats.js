
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
    return "<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link d-flex gap-2 justify-content-between align-items-center position-relative\" component=\"chat/dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[global:header.chats]]\">\n<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n<span class=\"position-relative\">\n<i component=\"chat/icon\" class=\"fa fa-fw " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
        "fa-comment" :
        "fa-comment-o") + 
      " unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
      "\"></i>\n<span component=\"chat/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
      "</span>\n</span>\n<span class=\"nav-text small visible-open fw-semibold\">[[global:header.chats]]</span>\n</span>\n<span component=\"chat/count\" class=\"visible-open badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
      "</span>\n</a>\n<ul class=\"chats-dropdown dropdown-menu p-1 shadow\" role=\"menu\">\n<li>\n<div component=\"chat/list\" class=\"list-container chats-list overscroll-behavior-contain p-0 pe-1 ff-base ghost-scrollbar\">\n<div class=\"rounded-1\">\n<div class=\"d-flex gap-1 justify-content-between\">\n<div class=\"dropdown-item p-2 d-flex gap-2 placeholder-wave\">\n<div class=\"main-avatar\">\n<div class=\"placeholder\" style=\"width: 32px; height: 32px;\"></div>\n</div>\n<div class=\"d-flex flex-grow-1 flex-column w-100\">\n<div class=\"text-xs\"><div class=\"placeholder col-3\"></div></div>\n<div class=\"text-sm\"><div class=\"placeholder col-11\"></div></div>\n<div class=\"text-xs\"><div class=\"placeholder col-4\"></div></div>\n</div>\n</div>\n<div>\n<button class=\"mark-read btn btn-ghost btn-sm d-flex align-items-center justify-content-center flex-grow-0 flex-shrink-0 p-1\" style=\"width: 1.5rem; height: 1.5rem;\">\n<i class=\"unread fa fa-2xs fa-circle text-primary\"></i>\n</button>\n</div>\n</div>\n</div>\n</div>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n<a component=\"chats/mark-all-read\" role=\"button\" href=\"#\" class=\"btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark-all-read]]</a>\n<!-- on md and up see all chats button goes to last room -->\n<a class=\"d-none d-md-inline btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/chats" + 
      (guard((context != null && context['user'] != null) ? context['user']['lastRoomId'] : null) ?
        "/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['lastRoomId'] : null)) :
        "") + 
      "\"><i class=\"fa fa-list\"></i> [[modules:chat.see-all]]</a>\n<!-- on xs&sm the see all chats button goes to the list of chats -->\n<a class=\"d-inline d-md-none btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/chats\"><i class=\"fa fa-list\"></i> [[modules:chat.see-all]]</a>\n</div>\n</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
