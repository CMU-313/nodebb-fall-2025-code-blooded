
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
    return "<div class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-gear fa-fw\"></i>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/info\" role=\"menuitem\">[[user:account-info]]</a>\n</li>\n" + 
      ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
        "\n<li role=\"separator\" class=\"dropdown-divider\"></li>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['canBan'] : null) ?
        "\n<li class=\"" + 
          (guard((context != null) ? context['banned'] : null) ?
            "hide" :
            "") + 
          "\">\n<a class=\"dropdown-item rounded-1\" component=\"account/ban\" href=\"#\" role=\"menuitem\">[[user:ban-account]]</a>\n</li>\n<li class=\"" + 
          (guard((context != null) ? context['banned'] : null) ?
            "" :
            "hide") + 
          "\">\n<a class=\"dropdown-item rounded-1\" component=\"account/unban\" href=\"#\" role=\"menuitem\">[[user:unban-account]]</a>\n</li>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['canMute'] : null) ?
        "\n<li class=\"" + 
          (guard((context != null) ? context['muted'] : null) ?
            "hide" :
            "") + 
          "\">\n<a class=\"dropdown-item rounded-1\" component=\"account/mute\" href=\"#\" role=\"menuitem\">[[user:mute-account]]</a>\n</li>\n<li class=\"" + 
          (guard((context != null) ? context['muted'] : null) ?
            "" :
            "hide") + 
          "\">\n<a class=\"dropdown-item rounded-1\" component=\"account/unmute\" href=\"#\" role=\"menuitem\">[[user:unmute-account]]</a>\n</li>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n<li>\n<a component=\"account/delete-account\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-account-as-admin]]</a>\n<a component=\"account/delete-content\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-content]]</a>\n<a component=\"account/delete-all\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-all]]</a>\n</li>\n" :
        "") + 
      "\n</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
