
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
    return "<div class=\"row h-100\">\n<div class=\"h-100 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<div class=\"chats-full d-flex gap-1 h-100 mt-3 mt-md-0 py-md-3\">\n<div component=\"chat/nav-wrapper\" class=\"flex-shrink-0 d-flex flex-column h-100 gap-1\" data-loaded=\"" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "1" :
        "0") + 
      "\">\n<div>\n<button component=\"chat/create\" class=\"btn btn-primary btn-sm w-100\">[[modules:chat.create-room]]</button>\n</div>\n" + 
      (guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null) ?
        "\n<hr class=\"my-1\">\n<div class=\"d-flex flex-column gap-1\">\n<div class=\"d-flex gap-1 align-items-center justify-content-between justify-content-lg-start\">\n<button class=\"btn btn-ghost btn-sm p-1 order-1 order-lg-0\" data-bs-toggle=\"collapse\" data-bs-target=\"#public-rooms\"\nonclick=\"$(this).find('i').toggleClass('fa-rotate-180');\"><i class=\"fa fa-fw fa-chevron-up\" style=\"transition: 0.25s ease;\"></i></button>\n<label class=\"text-sm text-muted lh-1\">[[modules:chat.public-rooms, " + 
          __escape(guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null)) + 
          "]]</label>\n</div>\n<div id=\"public-rooms\" component=\"chat/public\" class=\"collapse show\">\n<div class=\"d-flex gap-1 flex-column\">\n" + 
          compiled.blocks['publicRooms'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n<hr class=\"my-1\">\n<div class=\"d-flex flex-column gap-1 overflow-auto\">\n" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['length'] : null) ?
        "\n<div class=\"d-flex gap-1 align-items-center justify-content-between justify-content-lg-start\">\n<button class=\"btn btn-ghost btn-sm p-1 order-1 order-lg-0\" data-bs-toggle=\"collapse\" data-bs-target=\"#private-rooms\"\nonclick=\"$(this).find('i').toggleClass('fa-rotate-180')\"><i class=\"fa fa-fw fa-chevron-up\" style=\"transition: 0.25s ease;\"></i></button>\n<label class=\"text-sm text-muted lh-1\">[[modules:chat.private-rooms, " + 
          __escape(guard((context != null) ? context['privateRoomCount'] : null)) + 
          "]]</label>\n</div>\n" :
        "") + 
      "\n<div id=\"private-rooms\" component=\"chat/recent\" class=\"chats-list overflow-auto mb-0 pe-1 pb-5 pb-lg-0 collapse show ghost-scrollbar\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>\n<div component=\"chat/main-wrapper\" class=\"flex-grow-1 ms-md-2 ps-md-2 border-1 border-start-md h-100\" style=\"min-width: 0;\" data-roomid=\"" + 
      __escape(guard((context != null) ? context['roomId'] : null)) + 
      "\">\n<div component=\"chat/message/window\" class=\"d-flex flex-column h-100\">\n" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['header'] != null) ? context['widgets']['header']['length'] : null) ?
        "\n<div data-widget-area=\"header\">\n" + 
          compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "\n<div component=\"chat/header\" class=\"d-flex align-items-center px-md-3 gap-3\">\n<a href=\"#\" data-action=\"close\" role=\"button\" class=\"flex-shrink-0 d-flex d-md-none btn btn-ghost border align-text-top\"><i class=\"fa fa-chevron-left\"></i></a>\n<h5 component=\"chat/header/title\" class=\"members flex-grow-1 fw-semibold tracking-tight mb-0 text-truncate text-nowrap\" style=\"line-height: initial;\">\n" + 
          (guard((context != null) ? context['roomName'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null) ? context['icon'] : null)) + 
              " text-muted\"></i> " + 
              __escape(guard((context != null) ? context['roomName'] : null)) :
            __escape(guard((context != null) ? context['chatWithMessage'] : null))) + 
          "\n</h5>\n<div class=\"d-flex gap-1 align-items-stretch\">\n<!-- search -->\n<button class=\"btn btn-ghost btn-sm\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n<i class=\"fa fa-search text-muted\"></i>\n</button>\n<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n<i class=\"fa fa-times text-muted opacity-75\"></i>\n</a>\n</div>\n<!-- notification dropdown -->\n<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n<button class=\"btn btn-ghost btn-sm position-relative\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-bell text-muted\"></i>\n<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-50\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n<i component=\"chat/notification/setting/icon\" class=\"fa " + 
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
          "\n</div>\n</div>\n<div class=\"position-relative\">\n<div component=\"chat/messages/scroll-up-alert\" class=\"py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden\" role=\"button\" style=\"z-index: 500;\"><i class=\"fa fa-fw fa-arrow-down\"></i> [[modules:chat.scroll-up-alert]]</div>\n</div>\n<hr class=\"my-1\"/>\n<div class=\"d-flex flex-grow-1 gap-1 overflow-auto\" style=\"min-width: 0px;\">\n<div component=\"chat/messages\" class=\"expanded-chat d-flex flex-column flex-grow-1\" data-roomid=\"" + 
          __escape(guard((context != null) ? context['roomId'] : null)) + 
          "\" style=\"min-width: 0px;\">\n<ul component=\"chat/message/content\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 ghost-scrollbar\">\n" + 
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
          "</div>\n</div>\n<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n</form>\n</div>\n</div>\n<div component=\"chat/user/list\" class=\"border-start hidden d-flex flex-column gap-1 p-1 overflow-auto ghost-scrollbar\" style=\"min-width:240px; width: 240px;\">\n" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<div component=\"chat/messages/pinned/container\" class=\"d-flex flex-column expanded-chat border-start hidden\" style=\"min-width:340px; width: 340px;\">\n<h3 class=\"fs-6 p-1 mb-0 text-center text-secondary\">[[modules:chat.pinned-messages]]</h3>\n<div component=\"chat/messages/pinned/empty\" class=\"text-center p-4 d-flex flex-column\">\n<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n<div class=\"text-xs fw-semibold text-muted\">[[modules:chat.no-pinned-messages]]</div>\n</div>\n<ul component=\"chat/messages/pinned\" class=\"chat-content list-unstyled d-flex flex-column gap-1 p-1 overflow-auto\">\n</ul>\n</div>\n</div>\n" :
        "\n<div class=\"d-flex flex-column align-items-center gap-3 my-auto\">\n<i class=\"fa-solid fa-wind fs-2 text-muted\"></i>\n<span class=\"text-muted text-sm\">[[modules:chat.no-active]]</span>\n</div>\n") + 
      "\n</div>\n</div>\n<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n</div>\n</div>\n<div data-widget-area=\"sidebar\" class=\"h-100 col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    'publicRooms': function publicRooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['publicRooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div component=\"chat/public/room\" class=\"btn btn-ghost btn-sm ff-sans d-flex justify-content-between hover-parent " + 
          (guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\" data-roomid=\"" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomId'] : null)) + 
          "\">\n<div class=\"d-flex gap-1 align-items-center\"><i class=\"fa " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['icon'] : null)) + 
          " text-muted\"></i> " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomName'] : null)) + 
          " <div component=\"chat/public/room/unread/count\" data-count=\"" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCount'] : null)) + 
          "\" class=\"badge border bg-light text-primary " + 
          (guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCount'] : null) ?
            "" :
            "hidden") + 
          "\">" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCountText'] : null)) + 
          "</div></div>\n<div>\n<div component=\"chat/public/room/sort/handle\" class=\"text-muted " + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "hover-d-block" :
            "d-none") + 
          "\" style=\"cursor:grab;\"><i class=\"fa fa-bars\"></i></div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          ((guard((context != null) ? context['loadingMore'] : null) && index === 0) ?
            "\n<hr class=\"my-1\" />\n" :
            "") + 
          "\n<div component=\"chat/recent/room\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\" data-full=\"1\" class=\"rounded-1 " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\">\n<div class=\"d-flex gap-1 justify-content-between\">\n<a href=\"#\" class=\"chat-room-btn position-relative d-flex flex-grow-1 gap-2 justify-content-start align-items-start btn btn-ghost btn-sm ff-sans text-start\">\n<div class=\"main-avatar\">\n" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['length'] : null) ?
            "\n" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['groupChat'] : null) ?
                "\n<div class=\"position-relative stacked-avatars\">\n<span class=\"text-decoration-none position-absolute\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['1'] != null) ? context['rooms'][key0]['users']['1']['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['1'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n<span class=\"text-decoration-none position-absolute\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['0'] != null) ? context['rooms'][key0]['users']['0']['userslug'] : null)) + 
                  "\" >" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['0'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n</div>\n" :
                "\n<span href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['0'] != null) ? context['rooms'][key0]['users']['0']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['0'] : null), "32px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n") + 
              "\n" :
            "\n<span class=\"avatar avatar-rounded text-bg-warning\" component=\"avatar/icon\" style=\"--avatar-size: 32px;\">?</span>\n") + 
          "\n</div>\n<div class=\"d-flex flex-grow-1 flex-column w-100\">\n<div component=\"chat/room/title\" class=\"room-name fw-semibold text-xs text-break\">\n" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
                "\n" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null)) + 
                  "\n" :
                "\n[[modules:chat.no-users-in-room]]\n") + 
              "\n") + 
          "\n</div>\n<div component=\"chat/room/teaser\">\n" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['teaser'] : null) ?
            "\n<div class=\"teaser-content text-sm line-clamp-3 text-break\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "align-middle"])) + 
              "\n<strong class=\"text-xs fw-semibold teaser-username\">" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null && context['rooms'][key0]['teaser']['user'] != null) ? context['rooms'][key0]['teaser']['user']['displayname'] : null)) + 
              ":</strong>\n" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['content'] : null)) + 
              "\n</div>\n<div class=\"teaser-timestamp text-muted text-xs\">" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timeagoLong'] : null) ?
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timeagoLong'] : null)) :
                "<span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>") + 
              "</div>\n" :
            "") + 
          "\n</div>\n</div>\n</a>\n<div>\n<button class=\"mark-read btn btn-ghost btn-sm d-flex align-items-center justify-content-center flex-grow-0 flex-shrink-0 p-1\" style=\"width: 1.5rem; height: 1.5rem;\">\n<i class=\"unread fa fa-2xs fa-circle text-primary " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "" :
            "hidden") + 
          "\" aria-label=\"[[unread:mark-as-read]]\"></i>\n<i class=\"read fa fa-2xs fa-circle-o text-secondary " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "hidden" :
            "") + 
          "\" aria-label=\"[[unread:mark-as-unread]]\"></i>\n</button>\n</div>\n</div>\n</div>\n" + 
          (index === length - 1 ?
            "\n" + 
              (guard((context != null) ? context['showBottomHr'] : null) ?
                "\n<hr class=\"my-1\" />\n" :
                "") + 
              "\n" :
            "\n<hr class=\"my-1\" />\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
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
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a data-index=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['index'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-ghost btn-sm d-flex ff-secondary d-flex justify-content-start align-items-center gap-2 " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['online'] : null) ?
            "online" :
            "") + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n<div>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</div>\n<div class=\"d-flex gap-1 flex-grow-1 text-nowrap text-truncate\">\n<span component=\"chat/user/list/username\" class=\"text-truncate\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "</span>\n" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['isOwner'] : null) ?
            "<span><i class=\"fa fa-star text-warning\" data-bs-toggle=\"tooltip\" title=\"[[modules:chat.owner]]\"></i></span>" :
            "") + 
          "\n</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
