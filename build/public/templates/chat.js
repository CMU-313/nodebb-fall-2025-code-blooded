
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
    return "<div id=\"chat-modal\" class=\"chat-modal d-flex flex-nowrap modal hide overflow-visible\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Chat\" aria-hidden=\"true\" data-center=\"false\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\" component=\"chat/message/window\">\n<div class=\"modal-header d-flex gap-4 justify-content-between\">\n<div class=\"fs-6 flex-grow-1 fw-semibold tracking-tight text-truncate text-nowrap\" component=\"chat/room/name\" data-icon=\"" + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\">" + 
      (guard((context != null) ? context['roomName'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null) ? context['icon'] : null)) + 
          " text-muted\"></i> " + 
          __escape(guard((context != null) ? context['roomName'] : null)) :
        __escape(guard((context != null) ? context['chatWithMessage'] : null))) + 
      "</div>\n<div class=\"d-flex gap-1 align-items-center\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-none d-md-flex align-self-stretch align-items-center\" data-action=\"maximize\" title=\"[[modules:chat.maximize]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n<i class=\"fa fa-fw fa-expand text-muted\"></i>\n</button>\n<div class=\"d-flex gap-1 align-items-stretch\">\n<!-- search -->\n<button class=\"btn btn-ghost btn-sm\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n<i class=\"fa fa-search text-muted\"></i>\n</button>\n<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n<i class=\"fa fa-times text-muted opacity-75\"></i>\n</a>\n</div>\n<!-- notification dropdown -->\n<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n<button class=\"btn btn-ghost btn-sm position-relative\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-bell text-muted\"></i>\n<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-50\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n<i component=\"chat/notification/setting/icon\" class=\"fa " + 
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
      "\n</div>\n<button id=\"chat-close-btn\" type=\"button\" class=\"btn-close btn btn-ghost btn-sm\" aria-label=\"Close\"></button>\n</div>\n</div>\n<div class=\"position-relative\">\n<div component=\"chat/messages/scroll-up-alert\" class=\"py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden\" role=\"button\" style=\"z-index: 500;\"><i class=\"fa fa-fw fa-arrow-down\"></i> [[modules:chat.scroll-up-alert]]</div>\n</div>\n<div class=\"modal-body d-flex flex-column\" style=\"height: 500px;\">\n<div class=\"d-flex flex-grow-1 gap-1 overflow-auto\" style=\"min-width: 0px;\">\n<div component=\"chat/messages\" class=\"expanded-chat d-flex flex-column flex-grow-1\" data-roomid=\"" + 
      __escape(guard((context != null) ? context['roomId'] : null)) + 
      "\" style=\"min-width: 0px;\">\n<ul component=\"chat/message/content\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1\">\n" + 
      compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<ul component=\"chat/message/search/results\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 hidden\">\n<div component=\"chat/message/search/no-results\" class=\"text-center p-4 d-flex flex-column\">\n<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n<div class=\"text-xs fw-semibold text-muted\">[[search:no-matches]]</div>\n</div>\n</ul>\n<div component=\"chat/composer\" class=\"d-flex flex-column border-top pt-2 align-items-start\">\n<div component=\"chat/composer/replying-to\" data-tomid=\"\" class=\"text-sm px-2 mb-1 d-flex gap-2 align-items-center hidden\">\n<div component=\"chat/composer/replying-to-text\"></div> <button component=\"chat/composer/replying-to-cancel\" class=\"btn btn-ghost btn-sm px-2 py-1\"><i class=\"fa fa-times\"></i></button>\n</div>\n<div class=\"w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end\">\n" + 
      (guard((context != null) ? context['canUpload'] : null) ?
        "\n<button component=\"chat/upload/button\" class=\"btn btn-ghost btn-sm d-flex p-2\" type=\"button\" title=\"[[global:upload]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-upload\"></i></button>\n" :
        "") + 
      "\n<div class=\"flex-grow-1 align-self-center\">\n<textarea component=\"chat/input\" placeholder=\"" + 
      (guard((context != null) ? context['roomName'] : null) ?
        "[[modules:chat.placeholder.message-room, " + 
          __escape(guard((context != null) ? context['roomName'] : null)) + 
          "]]" :
        "[[modules:chat.placeholder.mobile]]") + 
      "\" class=\"bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none px-1 py-0\" style=\"min-height: 1.5rem;height:0;max-height:30vh;resize:none;\"></textarea>\n</div>\n<div class=\"d-flex gap-1\">\n" + 
      compiled.blocks['composerActions'](helpers, context, guard, iter, helper) + 
      "\n<button class=\"btn btn-ghost btn-sm d-flex p-2\" type=\"button\" data-action=\"send\" title=\"[[modules:chat.send]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-paper-plane text-primary\"></i></button>\n</div>\n</div>\n<div class=\"d-flex justify-content-between align-items-center text-xs w-100 px-2 mt-1\">\n<div component=\"chat/composer/typing\" class=\"\">\n<div component=\"chat/composer/typing/users\" class=\"hidden\"></div>\n<div component=\"chat/composer/typing/text\" class=\"hidden\"></div>\n</div>\n<div component=\"chat/message/remaining\" class=\"text-xs text-muted\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</div>\n</div>\n<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n</form>\n</div>\n</div>\n</div>\n</div>\n<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n</div>\n</div>\n</div>";
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
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\n<li component=\"chat/system-message\" class=\"system-message text-muted small py-2 gap-3 d-flex align-items-center justify-content-center\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\n<hr class=\"d-inline-block my-1\" style=\"width: 10%;\"/>\n<div>\n[[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "]]\n</div>\n<hr class=\"d-inline-block my-1\" style=\"width: 10%;\"/>\n</li>\n" :
            "\n<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              " " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['pinned'] : null) ?
                " pinned" :
                "") + 
              " " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null) ?
                "border-top pt-3" :
                "") + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\" data-username=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "\" data-displayname=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "\">\n" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['parent'] : null) ?
                "\n<div class=\"d-flex ms-4 mb-2 align-items-center\">\n<div component=\"chat/message/parent\" data-parent-mid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['mid'] : null)) + 
                  "\" data-uid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['fromuid'] : null)) + 
                  "\" class=\"btn btn-ghost btn-sm d-flex gap-2 ff-secondary text-start flex-row w-100\">\n<div class=\"d-flex gap-2 text-sm text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none lh-1\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
                  "</a>\n<a class=\"chat-user fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['displayname'] : null)) + 
                  "</a>\n</div>\n<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['timestampISO'] : null)) + 
                  "\"></span>\n</div>\n<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['content'] : null)) + 
                  "</div>\n</div>\n</div>\n" :
                "") + 
              "\n<div class=\"message-header lh-1 d-flex align-items-center gap-2 text-sm " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null) ?
                "" :
                "hidden") + 
              " pb-2\">\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\" class=\"text-decoration-none\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "18px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\n<span class=\"chat-user fw-semibold\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span>\n" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\n<span class=\"badge bg-danger\">[[user:banned]]</span>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\n<span class=\"badge bg-danger\">[[user:deleted]]</span>\n" :
                "") + 
              "\n<span class=\"chat-timestamp text-muted timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></span>\n<div component=\"chat/message/edited\" class=\"text-muted ms-auto " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "" :
                "hidden") + 
              "\" title=\"[[global:edited-timestamp, " + 
              __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
              "]]\"><i class=\"fa fa-edit\"></i></span></div>\n</div>\n<div class=\"message-body-wrapper\">\n<div component=\"chat/message/body\" class=\"message-body ps-0 py-0 overflow-auto text-break\">\n" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\n</div>\n<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n<div component=\"chat/message/controls\" class=\"position-relative\">\n<div class=\"btn-group border shadow-sm controls position-absolute bg-body end-0\" style=\"bottom:1rem;\">\n<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n<button class=\"btn btn-sm btn-link\" data-action=\"reply\" title=\"[[topic:reply]]\"><i class=\"fa fa-reply\"></i></button>\n<div class=\"btn-group d-inline-block\">\n<button class=\"btn btn-sm btn-link dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis\" type=\"button\"></i></button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm list-unstyled\" role=\"menu\">\n" + 
              ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null))) ?
                "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"edit\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-pencil text-muted\"></i> [[topic:edit]]</span></a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"delete\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-trash text-muted\"></i> [[topic:delete]]</span></a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"restore\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-repeat text-muted\"></i> [[topic:restore]]</span></a>\n</li>\n" :
                "") + 
              "\n" + 
              ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || guard((context != null) ? context['isOwner'] : null)) ?
                "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"pin\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-thumbtack text-muted\"></i> [[modules:chat.pin-message]]</span></a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"unpin\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-thumbtack fa-rotate-90 text-muted\"></i> [[modules:chat.unpin-message]]</span></a>\n</li>\n<li class=\"dropdown-divider\"></li>\n" :
                "") + 
              "\n" + 
              (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 chat-ip-button\" role=\"menuitem\">\n<span class=\"d-inline-flex align-items-center gap-2 show\"><i class=\"fa fa-fw fa-info-circle text-muted\"></i> [[modules:chat.show-ip]]</span>\n<span class=\"d-inline-flex align-items-center gap-2 copy hidden\"><i class=\"fa fa-fw fa-copy text-muted\"></i> <span class=\"copy-ip-text\"></span></span>\n</a>\n</li>\n" :
                "") + 
              "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"copy-text\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['mid'] : null)) + 
              "\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-copy text-muted\"></i> [[modules:chat.copy-text]]</span></a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"copy-link\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['mid'] : null)) + 
              "\" role=\"menuitem\"><span class=\"d-inline-flex align-items-center gap-2\"><i class=\"fa fa-fw fa-link text-muted\"></i> [[modules:chat.copy-link]]</span></a>\n</li>\n</ul>\n</div>\n</div>\n</div>\n</div>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'composerActions': function composerActions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['composerActions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button data-action=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['action'] : null)) + 
          "\" class=\"btn btn-ghost btn-sm d-flex p-2 " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['class'] : null)) + 
          "\" type=\"button\" title=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['title'] : null)) + 
          "\" data-bs-toggle=\"tooltip\"><i class=\"fa " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['icon'] : null)) + 
          "\"></i></button>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
