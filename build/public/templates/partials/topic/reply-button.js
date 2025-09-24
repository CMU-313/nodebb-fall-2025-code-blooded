
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
    return "<div component=\"topic/reply/container\" class=\"btn-group " + 
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
          "\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
