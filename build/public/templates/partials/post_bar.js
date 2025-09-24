
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
    return "<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      " " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "d-block d-lg-none" :
        "") + 
      "\" style=\"top: " + 
      ((guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['autohideBottombar'] : null)) ?
        "var(--panel-offset)" :
        "0") + 
      ";\">\n<nav class=\"d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons\">\n<div class=\"d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center\">\n<div class=\"d-flex me-auto mb-0 gap-2 align-items-center flex-wrap\">\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<button component=\"topic/mark-unread\" class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:mark-unread]]</span>\n</button>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:watching]]</span>\n</span>\n<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:not-watching]]</span>\n</span>\n<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:ignoring]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:ignoring.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
        "") + 
      "\n<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">" + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:oldest-to-newest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:newest-to-oldest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n</ul>\n</div>\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:thread-tools.title]]</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\"></ul>\n</div>\n" :
        "") + 
      "\n" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n<a class=\"btn btn-ghost btn-sm d-none d-lg-flex align-items-center align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\" title=\"[[global:rss-feed]]\"><i class=\"fa fa-rss text-primary\"></i></a>\n" :
        "") + 
      "\n</div>\n<div component=\"topic/reply/container\" class=\"btn-group " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"d-flex " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "" :
        "px-3") + 
      " gap-2 align-items-center btn btn-sm btn-primary fw-semibold\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-fw fa-reply " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "" :
        " d-sm-block d-md-none ") + 
      "\"></i><span class=\"d-none d-md-block text-truncate text-nowrap\">[[topic:reply]]</span></a>\n<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[topic:reply-options]]\">\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\" role=\"menuitem\">[[topic:reply-as-topic]]</a></li>\n</ul>\n</div>\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<a href=\"#\" component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled " + 
          ((guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) || !guard((context != null) ? context['locked'] : null)) ?
            "hidden" :
            "") + 
          "\" disabled><i class=\"fa fa-fw fa-lock\"></i> [[topic:locked]]</a>\n" :
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary\"><i class=\"fa fa-fw fa-sign-in " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
                "" :
                " d-sm-block d-md-none ") + 
              "\"></i><span>[[topic:guest-login-reply]]</span></a>\n") + 
          "\n") + 
      "\n</div>\n</nav>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
