
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
    return "<div class=\"d-flex gap-1 align-items-stretch\">\n<!-- search -->\n<button class=\"btn btn-ghost btn-sm\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n<i class=\"fa fa-search text-muted\"></i>\n</button>\n<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n<i class=\"fa fa-times text-muted opacity-75\"></i>\n</a>\n</div>\n<!-- notification dropdown -->\n<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n<button class=\"btn btn-ghost btn-sm position-relative\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-bell text-muted\"></i>\n<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-50\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n<i component=\"chat/notification/setting/icon\" class=\"fa " + 
      __escape(guard((context != null) ? context['notificationOptionsIcon'] : null)) + 
      "\"></i>\n</span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n" + 
      compiled.blocks['notificationOptions'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<!-- pinned messages -->\n<button component=\"chat/pinned/messages/btn\" class=\"btn btn-ghost btn-sm d-none d-lg-block flex-nowrap\" title=\"[[modules:chat.pinned-messages]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n<i class=\"fa fa-thumb-tack text-muted\"></i>\n</button>\n<!-- manage/options dropdown -->\n<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.options]]\">\n<button component=\"chat/controlsToggle\" class=\"btn btn-ghost btn-sm\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-gear text-muted\"></i>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" component=\"chat/controls\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"manage\" role=\"menuitem\">\n<i class=\"fa fa-fw text-muted fa-cog\"></i> [[modules:chat.manage-room]]\n</a>\n</li>\n" + 
      (guard((context != null) ? context['isOwner'] : null) ?
        "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"rename\" role=\"menuitem\">\n<i class=\"fa fa-fw text-muted fa-edit\"></i> [[modules:chat.rename-room]]\n</a>\n</li>\n" :
        "") + 
      "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"leave\" role=\"menuitem\">\n<i class=\"fa fa-fw text-muted fa-sign-out\"></i> [[modules:chat.leave-room]]\n</a>\n</li>\n" + 
      ((guard((context != null) ? context['public'] : null) && guard((context != null) ? context['isAdmin'] : null)) ?
        "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"delete\" role=\"menuitem\">\n<i class=\"fa fa-fw text-danger fa-trash\"></i> [[modules:chat.delete-room]]\n</a>\n</li>\n" :
        "") + 
      "\n</ul>\n</div>\n<!-- users toggle -->\n" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n<div component=\"chat/user/list/btn\" class=\"btn btn-ghost btn-sm d-none d-lg-flex flex-nowrap gap-3\" title=\"[[modules:chat.view-users-list]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n<div class=\"d-flex text-nowrap\">\n" + 
          (guard((context != null && context['users'] != null) ? context['users']['0'] : null) ?
            "\n<span style=\"width: 18px; z-index: 3;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['0'] != null) ? context['users']['0']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['0'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['users'] != null) ? context['users']['1'] : null) ?
            "\n<span style=\"width: 18px; z-index: 2;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['1'] != null) ? context['users']['1']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['1'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['users'] != null) ? context['users']['2'] : null) ?
            "\n<span style=\"width: 18px; z-index: 1;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['2'] != null) ? context['users']['2']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['2'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n" :
            "") + 
          "\n</div>\n" + 
          __escape(guard((context != null) ? context['userCount'] : null)) + 
          "\n</div>\n" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    'notificationOptions': function notificationOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-value=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['value'] : null)) + 
          "\" data-icon=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['icon'] : null)) + 
          "\" role=\"menuitem\">\n<div class=\"d-flex flex-column gap-1\">\n<div class=\"d-flex align-items-center gap-2\">\n<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['label'] : null)) + 
          "</div>\n<i class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n</div>\n" + 
          (index === 0 ?
            "\n<div component=\"chat/notification/setting/sub-label\" class=\"text-sm text-muted\">" + 
              __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['subLabel'] : null)) + 
              "</div>\n" :
            "") + 
          "\n</div>\n</a>\n</li>\n" + 
          (index === 0 ?
            "\n<li><hr class=\"dropdown-divider\"></li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
