
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
    return (guard((context != null && context['posts'] != null) ? context['posts']['display_moderator_tools'] : null) ?
        "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/edit\" role=\"menuitem\" href=\"#\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-pencil\"></i></span> [[topic:edit]]\n</a>\n</li>\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_delete_tools'] : null) ?
            "\n<li " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "hidden" :
                "") + 
              ">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/delete\" role=\"menuitem\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "hidden" :
                "") + 
              "\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-trash-o\"></i></span> [[topic:delete]]\n</a>\n</li>\n<li " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "" :
                "hidden") + 
              ">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/restore\" role=\"menuitem\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "" :
                "hidden") + 
              "\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-history\"></i></span> [[topic:restore]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_purge_tools'] : null) ?
            "\n<li " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "" :
                "hidden") + 
              ">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/purge\" role=\"menuitem\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
                "" :
                "hidden") + 
              "\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-eraser\"></i></span> [[topic:purge]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_move_tools'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/move\" role=\"menuitem\" href=\"#\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-arrows\"></i></span> [[topic:move]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_change_owner_tools'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/change-owner\" role=\"menuitem\" href=\"#\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-user\"></i></span> [[topic:change-owner]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_manage_editors_tools'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/manage-editors\" role=\"menuitem\" href=\"#\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-user-pen\"></i></span> [[topic:manage-editors]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/copy-ip\" role=\"menuitem\" href=\"#\" data-clipboard-text=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
              "\">\n<span class=\"menu-icon\" ><i class=\"fa fa-fw text-secondary fa-copy\"></i></span> [[topic:copy-ip]] " + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
              "\n</a>\n</li>\n" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['display_ip_ban'] : null) ?
                "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/ban-ip\" role=\"menuitem\" href=\"#\" data-ip=\"" + 
                  __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
                  "\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-ban\"></i></span> [[topic:ban-ip]] " + 
                  __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
                  "\n</a>\n</li>\n" :
                "") + 
              "\n" :
            "") + 
          "\n" :
        "") + 
      "\n" + 
      compiled.blocks['posts.tools'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
        "" :
        "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_history'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/view-history\" role=\"menuitem\" href=\"#\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary fa-history\"></i></span> [[topic:view-history]]\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/bookmark\" role=\"menuitem\" href=\"#\" data-bookmarked=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null)) + 
              "\">\n<span class=\"menu-icon\">\n<i component=\"post/bookmark/on\" class=\"fa fa-fw text-secondary fa-bookmark " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null) ?
                "" :
                "hidden") + 
              "\"></i>\n<i component=\"post/bookmark/off\" class=\"fa fa-fw text-secondary fa-bookmark-o " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null) ?
                "hidden" :
                "") + 
              "\"></i>\n</span>\n<span class=\"bookmark-text\">[[topic:bookmark]]</span>\n<span component=\"post/bookmark-count\" class=\"bookmarkCount badge bg-secondary\" data-bookmarks=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarks'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarks'] : null)) + 
              "</span>&nbsp;\n</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_original_url'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\" data-clipboard-text=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['url'] : null) ?
                __escape(guard((context != null && context['posts'] != null) ? context['posts']['url'] : null)) :
                __escape(guard((context != null && context['posts'] != null) ? context['posts']['pid'] : null))) + 
              "\">\n<i class=\"fa fa-fw text-secondary fa-link\"></i> [[topic:copy-permalink]]\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" target=\"_self\" href=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['url'] : null) ?
                __escape(guard((context != null && context['posts'] != null) ? context['posts']['url'] : null)) :
                __escape(guard((context != null && context['posts'] != null) ? context['posts']['pid'] : null))) + 
              "\">\n<i class=\"fa fa-fw text-secondary fa-external-link\"></i> [[topic:go-to-original]]\n</a>\n</li>\n" :
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\" data-clipboard-text=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['absolute_url'] : null)) + 
              "\">\n<i class=\"fa fa-fw text-secondary fa-link\"></i> [[topic:copy-permalink]]\n</a>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['postSharing'] != null) ? context['postSharing']['length'] : null) ?
            "\n" + 
              (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
                "<li class=\"dropdown-divider\"></li>" :
                "") + 
              "\n<li class=\"dropdown-header\">[[topic:share-this-post]]</li>\n" :
            "") + 
          "\n<li class=\"d-flex gap-2 px-3\">\n" + 
          compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + 
          "\n</li>\n") + 
      "\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_flag_tools'] : null) ?
        "\n<li class=\"dropdown-divider\"></li>\n<li " + 
          (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagged'] : null) ?
            "hidden" :
            "") + 
          ">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/flag\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw text-secondary fa-flag\"></i> [[topic:flag-post]]</a>\n</li>\n<li " + 
          (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagged'] : null) ?
            "" :
            "hidden") + 
          " class=\"disabled text-secondary\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/already-flagged\" role=\"menuitem\" href=\"#\" data-flag-id=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['flagId'] : null)) + 
          "\"><i class=\"fa fa-fw text-secondary fa-flag\"></i> [[topic:already-flagged]]</a>\n</li>\n" + 
          ((!guard((context != null && context['posts'] != null) ? context['posts']['selfPost'] : null) && guard((context != null && context['posts'] != null) ? context['posts']['uid'] : null)) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/flagUser\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw text-secondary fa-flag\"></i> [[topic:flag-user]]</a>\n</li>\n" :
            "") + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_moderator_tools'] : null) ?
        "\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['exists'] : null) ?
            "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/flags/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagId'] : null)) + 
              "\"><i class=\"fa fa-fw text-secondary fa-exclamation-circle\"></i> [[topic:view-flag-report]]</a>\n</li>\n" + 
              ((guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['state'] : null) == "open") ?
                "\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"post/flagResolve\" data-flagId=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagId'] : null)) + 
                  "\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw text-secondary fa-check\"></i> [[topic:resolve-flag]]</a>\n</li>\n" :
                "") + 
              "\n" :
            "") + 
          "\n" :
        "");
  }

  compiled.blocks = {
    'posts.tools': function poststools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null) ? context['posts']['tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li " + 
          (guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['disabled'] : null) ?
            "class=\"disabled\" " :
            "") + 
          ">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" " + 
          (guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['action'] : null) ?
            "component=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['action'] : null)) + 
              "\"" :
            "") + 
          " role=\"menuitem\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['href'] : null) ?
            __escape(guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['href'] : null)) :
            "#") + 
          "\">\n<span class=\"menu-icon\"><i class=\"fa fa-fw text-secondary " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['icon'] : null)) + 
          "\"></i></span> " + 
          guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['html'] : null) + 
          "\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'postSharing': function postSharing(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['postSharing'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a class=\"dropdown-item rounded-1 d-flex align-items-center px-1 py-2 w-auto\" role=\"menuitem\" component=\"share/" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" href=\"#\" title=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['name'] : null)) + 
          "\"><i class=\"fa-fw text-secondary " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['class'] : null)) + 
          "\"></i></a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
