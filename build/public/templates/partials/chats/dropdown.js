
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
    return (guard((context != null && context['rooms'] != null) ? context['rooms']['length'] : null) ?
        "" :
        "\n<li class=\"text-center p-4 d-flex flex-column\">\n<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n<div class=\"text-xs fw-semibold text-muted\">[[modules:chat.no-active]]</div>\n</li>\n") + 
      "\n" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
