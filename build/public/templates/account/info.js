
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
    return "<div class=\"account w-100 mx-auto\">\n<div class=\"cover position-absolute start-0 top-0 w-100\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n<div class=\"container\">\n" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n" + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n<div class=\"controls text-center\">\n<a href=\"#\" class=\"upload p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-upload\"></i></a>\n<a href=\"#\" class=\"resize p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-arrows\"></i></a>\n<a href=\"#\" class=\"remove p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-times\"></i></a>\n</div>\n<a href=\"#\" class=\"save text-bg-primary\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></a>\n<div class=\"indicator text-bg-primary\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n" :
            "") + 
          "\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom\">\n<div " + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "component=\"profile/change/picture\"" :
        "") + 
      " class=\"avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent\" style=\"margin-top: -75px;\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "142px", guard((context != null) ? context['true'] : null)])) + 
      "\n" + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "\n<a href=\"#\" component=\"profile/change/picture\" class=\"d-none d-md-block pointer p-2 rounded-1 text-bg-light position-absolute top-50 start-50 translate-middle hover-opacity-75\">\n<span class=\"upload\"><i class=\"fa fa-fw fa-upload\"></i></span>\n</a>\n" :
        "") + 
      "\n</div>\n<div class=\"d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2\">\n<div class=\"d-flex flex-grow-1 flex-row gap-2\">\n<div class=\"d-flex flex-column gap-1\">\n<h2 class=\"fullname fw-semibold fs-2 tracking-tight mb-0\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h2>\n<div class=\"d-flex flex-wrap gap-1 text-sm align-items-center\">\n<span class=\"username fw-bold\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\n<div class=\"d-flex align-items-center gap-1 p-1 flex-wrap\">\n" + 
      (guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['length'] : null) ?
        "\n" + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"d-flex gap-2\" component=\"user/badges\"></div>\n" + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\n" + 
          (guard((context != null) ? context['banned'] : null) ?
            "\n<div class=\"text-xm text-muted\">\n" + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\n[[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\n" :
                "\n[[user:info.banned-permanently]]\n") + 
              "\n</div>\n" :
            "") + 
          "\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end\">\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-outline-warning flex-fill" + 
              ((!guard((context != null) ? context['isFollowing'] : null) && !guard((context != null) ? context['isFollowPending'] : null)) ?
                " hide" :
                "") + 
              "\">[[user:" + 
              (guard((context != null) ? context['isFollowPending'] : null) ?
                "cancel-follow" :
                "unfollow") + 
              "]]</a>\n<a component=\"account/follow\" href=\"#\" class=\"btn btn-primary flex-fill" + 
              ((guard((context != null) ? context['isFollowing'] : null) || guard((context != null) ? context['isFollowPending'] : null)) ?
                " hide" :
                "") + 
              "\">[[user:follow]]</a>\n") + 
          "\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['canChat'] : null) && !guard((context != null) ? context['banned'] : null)) ?
        "\n<div class=\"btn-group flex-fill\">\n<a " + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "component=\"account/chat\"" :
            "component=\"account/new-chat\"") + 
          " href=\"#\" class=\"btn btn-light\" role=\"button\">[[user:chat]]</a>\n" + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "\n<button type=\"button\" class=\"btn btn-light dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-caret-down\"></i>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"account/new-chat\" role=\"menuitem\"s>[[user:new-chat-with, " + 
              __escape(guard((context != null) ? context['username'] : null)) + 
              "]]</a></li>\n</ul>\n" :
            "") + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n" + 
          ((guard((context != null) ? context['isAdmin'] : null) || (guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null))) ?
            "\n<div class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-gear fa-fw\"></i>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1\" href=\"" + 
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
              "\n</ul>\n</div>\n" :
            "") + 
          "\n") + 
      "\n</div>\n</div>\n</div>\n<div data-widget-area=\"header\">\n" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"d-flex flex-column flex-md-row\">\n<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n<div class=\"sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem;z-index: 1;\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['account/profile'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[global:about]]</div>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/posts'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/best'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/controversial'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/upvoted'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/downvoted'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/bookmarks'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[global:posts]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</span>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/topics'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/watched'] : null) ?
        "active" :
        "") + 
      "\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/ignored'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[global:topics]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)])) + 
      "</span>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/shares\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/shares'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[user:shares]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['shares'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['shares'] : null)])) + 
      "</span>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/groups'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[global:header.groups]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)])) + 
      "</span>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/followers'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[user:followers]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</span>\n</a>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/following'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[user:following]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</span>\n</a>\n" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "active" :
            "") + 
          "\">\n<div class=\"flex-grow-1\">[[user:watched-categories]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span>\n</a>\n" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/tags\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
              (guard((context != null && context['template'] != null) ? context['template']['account/tags'] : null) ?
                "active" :
                "") + 
              "\">\n<div class=\"flex-grow-1\">[[user:watched-tags]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)) + 
              "</span>\n</a>\n" :
            "") + 
          "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/blocks'] : null) ?
            "active" :
            "") + 
          "\">\n<div class=\"flex-grow-1\">[[user:blocked-users]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)])) + 
          "</span>\n</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\" class=\"btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/uploads'] : null) ?
            "active" :
            "") + 
          "\">\n<div class=\"flex-grow-1\">[[global:uploads]]</div>\n<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)])) + 
          "</span>\n</a>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['remoteUrl'] : null) ?
        "\n<hr class=\"w-100 my-2\"/>\n<a href=\"" + 
          __escape(guard((context != null) ? context['remoteUrl'] : null)) + 
          "\" target=\"_self\" component=\"account/view-remote\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start\">\n<i class=\"flex-shrink-0 fa-solid fa-globe\"></i>\n<div class=\"flex-grow-1 text-nowrap\">[[user:view-remote]]</div>\n</a>\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null) ? context['isSelf'] : null) && !guard((context != null) ? context['banned'] : null))) ?
        "\n<hr class=\"w-100 my-2\"/>\n<a href=\"#\" component=\"account/flag\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start " + 
          (guard((context != null) ? context['flagId'] : null) ?
            "hidden" :
            "") + 
          "\">\n<i class=\"flex-shrink-0 fa-solid fa-flag text-danger\"></i>\n<div class=\"flex-grow-1 text-nowrap\">[[user:flag-profile]]</div>\n</a>\n<a href=\"#\" component=\"account/already-flagged\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start " + 
          (guard((context != null) ? context['flagId'] : null) ?
            "" :
            "hidden") + 
          "\" data-flag-id=\"" + 
          __escape(guard((context != null) ? context['flagId'] : null)) + 
          "\">\n<i class=\"flex-shrink-0 fa-solid fa-flag text-danger\"></i>\n<div class=\"flex-grow-1 text-nowrap\">[[user:profile-flagged]]</div>\n</a>\n<a href=\"#\" component=\"account/block\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "hidden" :
            "") + 
          "\">\n<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n<div class=\"flex-grow-1 text-nowrap\">[[user:block-user]]</div>\n</a>\n<a href=\"#\" component=\"account/unblock\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "" :
            "hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n<div class=\"flex-grow-1 text-nowrap\">[[user:unblock-user]]</div>\n</a>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n<hr class=\"w-100 my-2\"/>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\" class=\"btn btn-ghost btn-sm ff-secondary text-xs text-start\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/edit'] : null) ?
            "active" :
            "") + 
          "\">\n<div class=\"flex-grow-1\">[[user:edit-profile]]</div>\n</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\" class=\"btn btn-ghost btn-sm ff-secondary text-xs text-start\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/settings'] : null) ?
            "active" :
            "") + 
          "\">\n<div class=\"flex-grow-1\">[[user:settings]]</div>\n</a>\n" :
        "") + 
      "\n" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div class=\"account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4\" style=\"min-width: 0;\">\n" + 
      (guard((context != null && context['sessions'] != null) ? context['sessions']['length'] : null) ?
        "\n<div class=\"mb-3\">\n<h4>[[global:sessions]]</h4>\n<ul class=\"list-group\" component=\"user/sessions\">\n" + 
          compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "") + 
      "\n<div class=\"row\">\n<div class=\"col-sm-6 mb-3\">\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[global:recentips]]\n</h5>\n<div class=\"card-body\">\n<ul>\n" + 
      compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[user:info.username-history]]\n</h5>\n<div class=\"card-body\">\n<ul class=\"list-unstyled mb-0\">\n" + 
      compiled.blocks['usernames'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[user:info.email-history]]\n</h5>\n<div class=\"card-body\">\n<ul class=\"list-unstyled mb-0\">\n" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['isAdminOrGlobalModerator'] : null) ?
        "\n<div class=\"card\">\n<h5 class=\"card-header\">\n[[user:info.moderation-note]]\n</h5>\n<div class=\"card-body\">\n<textarea component=\"account/moderation-note\" class=\"form-control mb-3\" aria-label=\"[[user:info.moderation-note]]\"></textarea>\n<button class=\"btn btn-sm float-end btn-success\" component=\"account/save-moderation-note\">[[user:info.moderation-note.add]]</button>\n<br/>\n<div component=\"account/moderation-note/list\">\n" + 
          compiled.blocks['moderationNotes'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\" aria-label=\"[[global:pagination]]\">\n<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n<li class=\"page-item previous " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n" + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\n<li class=\"page-item next " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n</ul>\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
            "" :
            "\n<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n<li class=\"page-item first" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
              "\" data-page=\"1\" aria-label=\"[[global:pagination.firstpage]]\"><i class=\"fa fa-fast-backward\"></i> </a>\n</li>\n<li class=\"page-item previous" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link fw-secondary\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\">" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "</a>\n</li>\n<li class=\"page-item next" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n<a class=\"page-link fw-secondary\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n<li class=\"page-item last" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n") + 
          "\n</nav>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n<div class=\"col-sm-6 mb-3\">\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[user:info.latest-flags]]\n</h5>\n<div class=\"card-body\">\n" + 
      (guard((context != null && context['history'] != null && context['history']['flags'] != null) ? context['history']['flags']['length'] : null) ?
        "\n<ul class=\"recent-flags list-unstyled\">\n" + 
          compiled.blocks['history.flags'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "\n<div class=\"alert alert-success\">[[user:info.no-flags]]</div>\n") + 
      "\n</div>\n</div>\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[user:info.ban-history]]\n" + 
      ((!guard((context != null) ? context['banned'] : null) && !guard((context != null) ? context['isSelf'] : null)) ?
        "\n<button class=\"btn btn-sm float-end btn-danger\" component=\"account/ban\">[[user:ban-account]]</button>\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['banned'] : null) && !guard((context != null) ? context['isSelf'] : null)) ?
        "\n<button class=\"btn btn-sm float-end btn-success\" component=\"account/unban\">[[user:unban-account]]</button>\n" :
        "") + 
      "\n</h5>\n<div class=\"card-body\">\n" + 
      (guard((context != null && context['history'] != null && context['history']['bans'] != null) ? context['history']['bans']['length'] : null) ?
        "\n<ul class=\"ban-history list-unstyled\">\n" + 
          compiled.blocks['history.bans'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "\n<div class=\"alert alert-success\">[[user:info.no-ban-history]]</div>\n") + 
      "\n</div>\n</div>\n<div class=\"card mb-3\">\n<h5 class=\"card-header\">\n[[user:info.mute-history]]\n" + 
      (guard((context != null) ? context['muted'] : null) ?
        "\n" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n<button class=\"btn btn-sm float-end btn-success\" component=\"account/unmute\">[[user:unmute-account]]</button>\n") + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n<button class=\"btn btn-sm float-end btn-danger\" component=\"account/mute\">[[user:mute-account]]</button>\n") + 
          "\n") + 
      "\n</h5>\n<div class=\"card-body\">\n" + 
      (guard((context != null && context['history'] != null && context['history']['mutes'] != null) ? context['history']['mutes']['length'] : null) ?
        "\n<ul class=\"ban-history list-unstyled\">\n" + 
          compiled.blocks['history.mutes'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "\n<div class=\"alert alert-success\">[[user:info.no-mute-history]]</div>\n") + 
      "\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedGroup'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null)) + 
                  (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text align-text-bottom\">" + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n" :
            "") + 
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
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\" class=\"btn btn-ghost btn-sm ff-secondary text-xs text-start plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          " " + 
          ((guard((context != null) ? context['url'] : null) == guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['url'] : null)) ?
            "active" :
            "") + 
          "\" id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\">\n<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"list-group-item text-break\" data-uuid=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['uuid'] : null)) + 
          "\">\n<div class=\"float-end\">\n" + 
          (guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null) ?
            "\n" + 
              (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
                "" :
                "\n<button class=\"btn btn-sm btn-outline-secondary\" type=\"button\" data-action=\"revokeSession\">[[user:revoke-session]]</button>\n") + 
              "\n" :
            "") + 
          "\n" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\n<i class=\"fa fa-circle text-" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "success" :
            "muted") + 
          "\"></i>\n</div>\n[[user:browser-version-on-platform, " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "]]<br />\n<small class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></small>\n<ul>\n<li><strong>[[global:ip-address]]</strong>: " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['ip'] : null)) + 
          "</li>\n</ul>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['ips'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>" + 
          __escape(guard(value)) + 
          "</li>\n";
      }, function alt() {
        return "";
      });
    },
    'usernames': function usernames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['usernames'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"d-flex justify-content-between mb-1\">\n<span class=\"text-sm\">" + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['value'] : null)) + 
          "</span>\n<div>\n" + 
          (guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['byUid'] : null) ?
            "\n<a class=\"lh-1\" href=\"" + 
              (guard((context != null && context['usernames'] != null && context['usernames'][key0] != null && context['usernames'][key0]['byUser'] != null) ? context['usernames'][key0]['byUser']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null && context['usernames'][key0]['byUser'] != null) ? context['usernames'][key0]['byUser']['userslug'] : null)) :
                "#") + 
              "\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['byUser'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n" :
            "") + 
          "\n<span class=\"timeago text-sm lh-1 align-middle\" title=\"" + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['emails'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"d-flex justify-content-between mb-1\">\n<span class=\"text-sm\">" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['value'] : null)) + 
          "</span>\n<div>\n" + 
          (guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['byUid'] : null) ?
            "\n<a class=\"lh-1\" href=\"" + 
              (guard((context != null && context['emails'] != null && context['emails'][key0] != null && context['emails'][key0]['byUser'] != null) ? context['emails'][key0]['byUser']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null && context['emails'][key0]['byUser'] != null) ? context['emails'][key0]['byUser']['userslug'] : null)) :
                "#") + 
              "\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['byUser'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n" :
            "") + 
          "\n<span class=\"timeago text-sm lh-1 align-middle\" title=\"" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'moderationNotes': function moderationNotes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderationNotes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<hr/>\n<div data-id=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['id'] : null)) + 
          "\">\n<div class=\"mb-1\">\n<a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" class=\"fw-bold\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "</a>\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n<div component=\"account/moderation-note/content-area\" class=\"d-flex flex-column\">\n<div class=\"content\">\n" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['note'] : null)) + 
          "\n</div>\n<button component=\"account/moderation-note/edit\" class=\"btn btn-sm btn-link align-self-end\">[[topic:edit]]</button>\n</div>\n<div component=\"account/moderation-note/edit-area\" class=\"d-flex flex-column gap-2\">\n<textarea class=\"form-control w-100 overflow-hidden\">" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['rawNote'] : null)) + 
          "</textarea>\n<div class=\"align-self-end\">\n<button component=\"account/moderation-note/cancel-edit\" class=\"btn btn-sm btn-link text-danger align-self-end\">[[global:cancel]]</button>\n<button component=\"account/moderation-note/save-edit\" class=\"btn btn-sm btn-primary align-self-end\">[[global:save]]</button>\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\"><i class=\"fa fa-ellipsis-h\"></i></a>\n</li>\n" :
            "\n<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.page-x, " + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "]]\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'history.flags': function historyflags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"mb-4 border-bottom\">\n<div class=\"mb-1 d-flex align-items-center justify-content-between\">\n<div>\n" + 
          ((guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['type'] : null) == "user") ?
            "\n<span class=\"badge text-bg-info\">[[user:info.profile]]</span>\n" :
            "\n<span class=\"badge text-bg-info\">[[user:info.post]]</span>\n") + 
          "\n<span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/flags/" + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['flagId'] : null)) + 
          "\" class=\"badge badge border border-gray-300 text-body\">[[user:info.view-flag]]</a>\n</div>\n" + 
          ((guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['type'] : null) == "post") ?
            "\n<p class=\"mb-1\">\n" + 
              (guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['targetPurged'] : null) ?
                "\n<div>[[flags:target-purged]]</div>\n" :
                "\n<a class=\"title\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/post/" + 
                  __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['pid'] : null)])) + 
                  "\">" + 
                  __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['title'] : null)) + 
                  "</a>\n") + 
              "\n</p>\n" :
            "") + 
          "\n<div class=\"d-flex gap-2 align-items-center mb-3\">\n<span class=\"text-sm\">[[user:info.reported-by]]</span>\n<div class=\"d-flex text-nowrap\">\n" + 
          iter(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['reports'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<a style=\"width: 18px; z-index: 3;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null && context['history']['flags'][key0]['reports'] != null && context['history']['flags'][key0]['reports'][key1] != null && context['history']['flags'][key0]['reports'][key1]['reporter'] != null) ? context['history']['flags'][key0]['reports'][key1]['reporter']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null && context['history']['flags'][key0]['reports'] != null && context['history']['flags'][key0]['reports'][key1] != null) ? context['history']['flags'][key0]['reports'][key1]['reporter'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'history.bans': function historybans(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['bans'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"mb-4 border-bottom\">\n<div class=\"mb-1 d-flex align-items-center justify-content-between\">\n<div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<strong>\n<a href=\"" + 
          (guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null && context['history']['bans'][key0]['user'] != null) ? context['history']['bans'][key0]['user']['username'] : null)) + 
          "</a>\n</strong>\n<span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n" + 
          ((guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['type'] : null) != "unban") ?
            "\n<span class=\"badge text-bg-danger\">[[user:banned]]</span>\n" :
            "\n<span class=\"badge text-bg-success\">[[user:unbanned]]</span>\n") + 
          "\n</div>\n<p class=\"mb-1\">\n<span class=\"reason\">[[user:info.banned-reason-label]]: <strong>" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['reason'] : null)) + 
          "</strong></span>\n</p>\n<p>\n" + 
          (guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['until'] : null) ?
            "\n<span class=\"expiry\">[[user:info.banned-until, " + 
              __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['untilISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
              "]]</span>\n" :
            "\n" + 
              ((guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['type'] : null) != "unban") ?
                "\n<span class=\"expiry\">[[user:info.banned-permanently]]</span>\n" :
                "") + 
              "\n") + 
          "\n</p>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'history.mutes': function historymutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['mutes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"mb-4 border-bottom\">\n<div class=\"mb-1 d-flex align-items-center justify-content-between\">\n<div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<strong>\n<a href=\"" + 
          (guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null && context['history']['mutes'][key0]['user'] != null) ? context['history']['mutes'][key0]['user']['username'] : null)) + 
          "</a>\n</strong>\n<span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n" + 
          ((guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['type'] : null) != "unmute") ?
            "\n<span class=\"badge text-bg-danger\">[[user:muted]]</span>\n" :
            "\n<span class=\"badge text-bg-success\">[[user:unmuted]]</span>\n") + 
          "\n</div>\n<p class=\"mb-1\">\n<span class=\"reason\">[[user:info.banned-reason-label]]: <strong>" + 
          __escape(guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['reason'] : null)) + 
          "</strong></span>\n</p>\n<p>\n" + 
          (guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['until'] : null) ?
            "\n<span class=\"expiry\">[[user:info.muted-until, " + 
              __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['history'] != null && context['history']['mutes'] != null && context['history']['mutes'][key0] != null) ? context['history']['mutes'][key0]['untilISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
              "]]</span>\n" :
            "") + 
          "\n</p>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
