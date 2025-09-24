
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
    return "<a component=\"header/avatar\" id=\"user_dropdown\" href=\"#\" role=\"button\" class=\"nav-link d-flex gap-2 align-items-center text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[user:user-menu]]\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "20px", guard((context != null) ? context['true'] : null)])) + 
      "\n<span id=\"user-header-name\" class=\"nav-text small visible-open fw-semibold\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n</a>\n<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"overscroll-behavior-contain user-dropdown dropdown-menu shadow p-1 text-sm ff-base\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\" role=\"menuitem\" aria-label=\"[[user:profile]]\">\n<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status " + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
      "\"><span class=\"visually-hidden\">[[global:" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
      "]]</span></span>\n<span class=\"fw-semibold\" component=\"header/username\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li><h6 class=\"dropdown-header text-xs\">[[global:status]]</h6></li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"online\" role=\"menuitem\">\n<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status online\"></span>\n<span class=\"flex-grow-1\">[[global:online]]</span>\n<i class=\"fa-solid fa-check text-secondary flex-shrink-0\" aria-label=\"[[global:selected]]\"></i>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"away\" role=\"menuitem\">\n<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status away\"></span>\n<span class=\"flex-grow-1\">[[global:away]]</span>\n<i class=\"fa-solid fa-check text-secondary flex-shrink-0\"><span class=\"visually-hidden\">[[global:selected]]</span></i>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"dnd\" role=\"menuitem\">\n<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status dnd\"></span>\n<span class=\"flex-grow-1\">[[global:dnd]]</span>\n<i class=\"fa-solid fa-check text-secondary flex-shrink-0\"></i>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"offline\" role=\"menuitem\">\n<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status offline\"></span>\n<span class=\"flex-grow-1\">[[global:invisible]]</span>\n<i class=\"fa-solid fa-check text-secondary flex-shrink-0\"></i>\n</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/bookmarks\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-bookmark text-secondary\"></i> <span>[[user:bookmarks]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/edit\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/edit\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-edit text-secondary\"></i> <span>[[user:edit-profile]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/settings\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/settings\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-gear text-secondary\"></i> <span>[[user:settings]]</span>\n</a>\n</li>\n" + 
      (guard((context != null) ? context['showModMenu'] : null) ?
        "\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li><h6 class=\"dropdown-header text-xs\">[[pages:moderator-tools]]</h6></li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/flags\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-flag text-secondary\"></i> <span>[[pages:flagged-content]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt text-secondary\"></i> <span>[[pages:post-queue]]</span>\n</a>\n</li>\n" + 
          (guard((context != null) ? context['registrationQueueEnabled'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/registration-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt text-secondary\"></i> <span>[[pages:registration-queue]]</span>\n</a>\n</li>\n" :
            "") + 
          "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/ip-blacklist\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-ban text-secondary\"></i> <span>[[pages:ip-blacklist]]</span>\n</a>\n</li>\n" :
        "\n" + 
          (guard((context != null) ? context['postQueueEnabled'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt text-secondary\"></i> <span>[[pages:post-queue]]</span>\n</a>\n</li>\n" :
            "") + 
          "\n") + 
      "\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li component=\"user/logout\">\n<form method=\"post\" action=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/logout\" role=\"menuitem\">\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\">\n<input type=\"hidden\" name=\"noscript\" value=\"true\">\n<button type=\"submit\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n<i class=\"fa fa-fw fa-sign-out text-secondary\"></i><span>[[global:logout]]</span>\n</button>\n</form>\n</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
