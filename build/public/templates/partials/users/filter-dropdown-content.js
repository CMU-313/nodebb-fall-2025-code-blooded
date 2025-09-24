
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
    return "<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center gap-2 ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "\n<span class=\"fw-semibold\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['selectedUser'] : null), "20px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          " " + 
          __escape(guard((context != null && context['selectedUser'] != null) ? context['selectedUser']['username'] : null)) + 
          "</span>\n" :
        "\n<span class=\"fw-semibold\">[[users:all-users]]</span>\n") + 
      " <span class=\"caret text-primary opacity-75\"></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li role=\"presentation\" class=\"user " + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "" :
        "selected") + 
      "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allUsersUrl'] : null)) + 
      "\">\n<div class=\"flex-grow-1\">[[users:all-users]]</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "" :
        "fa-check") + 
      "\"></i>\n</a>\n</li>\n" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</ul>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"user " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['url'] : null)) + 
          "\">\n<div class=\"flex-grow-1 d-inline-flex gap-1 align-items-center\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
