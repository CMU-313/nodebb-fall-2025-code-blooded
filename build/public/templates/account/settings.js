
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
      "\n</div>\n</div>\n<div class=\"account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4\" style=\"min-width: 0;\">\n<div class=\"d-flex justify-content-between py-1 mb-3 align-items-center position-sticky top-0 bg-body\">\n<h3 class=\"fw-semibold fs-5 mb-0\">" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "[[pages:account/settings]]" :
        "[[pages:account/settings-of, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]") + 
      "</h3>\n<button id=\"submitBtn\" class=\"btn btn-sm btn-primary\">[[global:save-changes]]</button>\n</div>\n<div class=\"row\">\n<div class=\"col-12 col-md-6\">\n" + 
      (guard((context != null) ? context['disableCustomUserSkins'] : null) ?
        "" :
        "\n<label for=\"bootswatchSkin\" class=\"form-label fw-bold\">[[user:select-skin]]</label>\n<select class=\"form-select form-select-sm\" id=\"bootswatchSkin\" data-property=\"bootswatchSkin\">\n" + 
          compiled.blocks['bootswatchSkinOptions'](helpers, context, guard, iter, helper) + 
          "\n</select>\n<hr/>\n") + 
      "\n" + 
      (guard((context != null) ? context['allowUserHomePage'] : null) ?
        "\n<label for=\"homePageRoute\" class=\"form-label fw-bold\">[[user:select-homepage]]</label>\n<div class=\"mb-2\">\n<select class=\"form-select form-select-sm\" id=\"homePageRoute\" data-property=\"homePageRoute\">\n<option value=\"none\">None</option>\n" + 
          compiled.blocks['homePageRoutes'](helpers, context, guard, iter, helper) + 
          "\n</select>\n<p class=\"form-text text-xs\">[[user:homepage-description]]</p>\n</div>\n<div id=\"homePageCustomContainer\" class=\"mb-2\" style=\"display: none;\">\n<label class=\"form-label fw-bold\" for=\"homePageCustom\">[[user:custom-route]]</label>\n<input type=\"text\" class=\"form-control form-control-sm\" data-property=\"homePageCustom\" id=\"homePageCustom\" value=\"" + 
          __escape(guard((context != null && context['settings'] != null) ? context['settings']['homePageRoute'] : null)) + 
          "\"/>\n<p class=\"form-text text-xs\">[[user:custom-route-help]]</p>\n</div>\n<hr/>\n" :
        "") + 
      "\n<h6 class=\"fw-bold\">[[global:privacy]]</h6>\n" + 
      (guard((context != null) ? context['hideEmail'] : null) ?
        "" :
        "\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"showemail\" data-property=\"showemail\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showemail'] : null) ?
            "checked " :
            "") + 
          "/>\n<label class=\"form-check-label text-sm\" for=\"showemail\">[[user:show-email]]</label>\n</div>\n") + 
      "\n" + 
      (guard((context != null) ? context['hideFullname'] : null) ?
        "" :
        "\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"showfullname\" data-property=\"showfullname\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showfullname'] : null) ?
            "checked" :
            "") + 
          "/>\n<label class=\"form-check-label text-sm\" for=\"showfullname\">[[user:show-fullname]]</label>\n</div>\n") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
        "" :
        "\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"disableIncomingChats\" data-property=\"disableIncomingChats\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['disableIncomingChats'] : null) ?
            "checked" :
            "") + 
          "/>\n<label class=\"form-check-label text-sm\" for=\"disableIncomingChats\">[[user:disable-incoming-chats]]</label>\n</div>\n<div class=\"d-flex flex-column mb-3\">\n<label class=\"form-label text-sm\" for=\"chatAllowListAdd\">[[user:chat-allow-list]]</label>\n<div component=\"chat/allow/list\" class=\"d-flex flex-wrap gap-2 mb-2\">\n" + 
          compiled.blocks['settings.chatAllowListUsers'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<input type=\"text\" class=\"form-control form-control-sm\" id=\"chatAllowListAdd\" placeholder=\"[[user:chat-list-add-user]]\"/>\n</div>\n<div class=\"d-flex flex-column mb-3\">\n<label class=\"form-label text-sm\" for=\"chatAllowListAdd\">[[user:chat-deny-list]]</label>\n<div component=\"chat/deny/list\" class=\"d-flex flex-wrap gap-2 mb-2\">\n" + 
          compiled.blocks['settings.chatDenyListUsers'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<input type=\"text\" class=\"form-control form-control-sm\" id=\"chatDenyListAdd\" placeholder=\"[[user:chat-list-add-user]]\"/>\n</div>\n") + 
      "\n<hr/>\n<h6 class=\"fw-bold\">[[user:browsing]]</h6>\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"openOutgoingLinksInNewTab\" data-property=\"openOutgoingLinksInNewTab\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['openOutgoingLinksInNewTab'] : null) ?
        "checked" :
        "") + 
      "/>\n<label class=\"form-check-label text-sm\" for=\"openOutgoingLinksInNewTab\">[[user:open-links-in-new-tab]]</label>\n</div>\n" + 
      (guard((context != null) ? context['inTopicSearchAvailable'] : null) ?
        "\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"topicSearchEnabled\" data-property=\"topicSearchEnabled\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['topicSearchEnabled'] : null) ?
            "checked" :
            "") + 
          "/>\n<label class=\"form-check-label text-sm\" for=\"topicSearchEnabled\">[[user:enable-topic-searching]]</label>\n</div>\n<p class=\"form-text text-xs\">[[user:topic-search-help]]</p>\n" :
        "") + 
      "\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"updateUrlWithPostIndex\" data-property=\"updateUrlWithPostIndex\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['updateUrlWithPostIndex'] : null) ?
        "checked" :
        "") + 
      "/>\n<label class=\"form-check-label text-sm\" for=\"updateUrlWithPostIndex\">[[user:update-url-with-post-index]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"scrollToMyPost\" data-property=\"scrollToMyPost\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['scrollToMyPost'] : null) ?
        "checked" :
        "") + 
      "/>\n<label class=\"form-check-label text-sm\" for=\"scrollToMyPost\">[[user:scroll-to-my-post]]</label>\n</div>\n<hr/>\n<h6 class=\"fw-bold\">[[global:pagination]]</h6>\n<div class=\"mb-2 form-check form-switch\">\n<input type=\"checkbox\" role=\"switch\" id=\"usePagination\" class=\"form-check-input\" data-property=\"usePagination\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['usePagination'] : null) ?
        "checked" :
        "") + 
      ">\n<label class=\"form-check-label text-sm\" for=\"usePagination\">[[user:paginate-description]]</label>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-sm\" for=\"topicsPerPage\">[[user:topics-per-page]] ([[user:max-items-per-page, " + 
      __escape(guard((context != null) ? context['maxTopicsPerPage'] : null)) + 
      "]])</label>\n<input type=\"text\" class=\"form-control form-control-sm\" id=\"topicsPerPage\" data-property=\"topicsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['topicsPerPage'] : null)) + 
      "\">\n</div>\n<div>\n<label class=\"form-label text-sm\" for=\"postsPerPage\">[[user:posts-per-page]] ([[user:max-items-per-page, " + 
      __escape(guard((context != null) ? context['maxPostsPerPage'] : null)) + 
      "]])</label>\n<input type=\"text\" class=\"form-control form-control-sm\" id=\"postsPerPage\" data-property=\"postsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['postsPerPage'] : null)) + 
      "\">\n</div>\n<hr/>\n<h6 class=\"fw-bold\">[[global:sort]]</h6>\n<div class=\"mb-2\">\n<label class=\"form-label text-sm\" for=\"categoryTopicSort\">[[user:category-topic-sort]]</label>\n<select class=\"form-select form-select-sm\" id=\"categoryTopicSort\" data-property=\"categoryTopicSort\">\n<option value=\"recently_replied\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['categoryTopicSort'] : null) == "recently_replied") ?
        "selected" :
        "") + 
      ">[[topic:recently-replied]]</option>\n<option value=\"recently_created\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['categoryTopicSort'] : null) == "recently_created") ?
        "selected" :
        "") + 
      ">[[topic:recently-created]]</option>\n<option value=\"most_posts\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['categoryTopicSort'] : null) == "most_posts") ?
        "selected" :
        "") + 
      ">[[topic:most-posts]]</option>\n<option value=\"most_votes\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['categoryTopicSort'] : null) == "most_votes") ?
        "selected" :
        "") + 
      ">[[topic:most-votes]]</option>\n<option value=\"most_views\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['categoryTopicSort'] : null) == "most_views") ?
        "selected" :
        "") + 
      ">[[topic:most-views]]</option>\n</select>\n</div>\n<div>\n<label class=\"form-label text-sm\" for=\"topicPostSort\">[[user:topic-post-sort]]</label>\n<select class=\"form-select form-select-sm\" id=\"topicPostSort\" data-property=\"topicPostSort\">\n<option value=\"oldest_to_newest\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['topicPostSort'] : null) == "oldest_to_newest") ?
        "selected" :
        "") + 
      ">[[topic:oldest-to-newest]]</option>\n<option value=\"newest_to_oldest\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['topicPostSort'] : null) == "newest_to_oldest") ?
        "selected" :
        "") + 
      ">[[topic:newest-to-oldest]]</option>\n<option value=\"most_votes\" " + 
      ((guard((context != null && context['settings'] != null) ? context['settings']['topicPostSort'] : null) == "most_votes") ?
        "selected" :
        "") + 
      ">[[topic:most-votes]]</option>\n</select>\n</div>\n" + 
      (guard((context != null) ? context['disableEmailSubscriptions'] : null) ?
        "" :
        "\n<hr/>\n<h6 class=\"fw-bold\">[[global:email]]</h6>\n<div>\n<div class=\"mb-2\">\n<label class=\"form-label text-sm\" for=\"dailyDigestFreq\">[[user:digest-label]]</label>\n<select class=\"form-select form-select-sm\" id=\"dailyDigestFreq\" data-property=\"dailyDigestFreq\" autocomplete=\"off\">\n" + 
          compiled.blocks['dailyDigestFreqOptions'](helpers, context, guard, iter, helper) + 
          "\n</select>\n<p class=\"form-text text-xs\">[[user:digest-description]]</p>\n</div>\n</div>\n") + 
      "\n" + 
      compiled.blocks['customSettings'](helpers, context, guard, iter, helper) + 
      "\n<hr class=\"d-block d-md-none\"/>\n</div>\n<div class=\"col-12 col-md-6\">\n<label class=\"form-label fw-bold\" for=\"userLang\">[[global:language]]</label>\n<select id=\"userLang\" data-property=\"userLang\" class=\"form-select form-select-sm mb-2\">\n" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n</select>\n<hr/>\n" + 
      ((guard((context != null) ? context['isAdmin'] : null) && guard((context != null) ? context['isSelf'] : null)) ?
        "\n<label class=\"form-label fw-bold\" for=\"acpLang\">[[user:acp-language]]</label>\n<select id=\"acpLang\" data-property=\"acpLang\" class=\"form-select form-select-sm\">\n" + 
          compiled.blocks['acpLanguages'](helpers, context, guard, iter, helper) + 
          "\n</select>\n<hr/>\n" :
        "") + 
      "\n<h6 class=\"fw-bold\">[[topic:watch]]</h6>\n<div>\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"followTopicsOnCreate\" data-property=\"followTopicsOnCreate\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnCreate'] : null) ?
        "checked" :
        "") + 
      "/>\n<label class=\"form-check-label text-sm\" for=\"followTopicsOnCreate\">[[user:follow-topics-you-create]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"followTopicsOnReply\" data-property=\"followTopicsOnReply\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnReply'] : null) ?
        "checked" :
        "") + 
      "/>\n<label class=\"form-check-label text-sm\" for=\"followTopicsOnReply\">[[user:follow-topics-you-reply-to]]</label>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-sm\" for=\"categoryWatchState\">[[user:default-category-watch-state]]</label>\n<select class=\"form-select form-select-sm\" id=\"categoryWatchState\" data-property=\"categoryWatchState\">\n<option value=\"tracking\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['tracking'] : null) ?
        "selected" :
        "") + 
      ">[[category:tracking]]</option>\n<option value=\"notwatching\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['notwatching'] : null) ?
        "selected" :
        "") + 
      ">[[category:not-watching]]</option>\n<option value=\"ignoring\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['ignoring'] : null) ?
        "selected" :
        "") + 
      ">[[category:ignoring]]</option>\n</select>\n</div>\n</div>\n<hr/>\n<h6 class=\"fw-bold\">[[user:notifications]]</h6>\n<div>\n" + 
      compiled.blocks['notificationSettings'](helpers, context, guard, iter, helper) + 
      "\n<div class=\"row align-items-center\">\n<div class=\"col-7\">\n<label class=\"text-sm\" for=\"upvote-notif-freq\">[[user:upvote-notif-freq]]</label>\n</div>\n<div class=\"col-5\">\n<select class=\"form-select form-select-sm\" id=\"upvote-notif-freq\" name=\"upvote-notif-freq\" data-property=\"upvoteNotifFreq\">\n" + 
      compiled.blocks['upvoteNotifFreq'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>";
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
    'bootswatchSkinOptions': function bootswatchSkinOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['bootswatchSkinOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['name'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'homePageRoutes': function homePageRoutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['homePageRoutes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['route'] : null)) + 
          "\" " + 
          (guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['name'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'settings.chatAllowListUsers': function settingschatAllowListUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['settings'] != null) ? context['settings']['chatAllowListUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div component=\"chat/allow/list/user\" data-uid=\"" + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatAllowListUsers'] != null && context['settings']['chatAllowListUsers'][key0] != null) ? context['settings']['chatAllowListUsers'][key0]['uid'] : null)) + 
          "\" class=\"d-flex px-2 py-1 rounded-1 text-bg-light gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatAllowListUsers'] != null && context['settings']['chatAllowListUsers'][key0] != null) ? context['settings']['chatAllowListUsers'][key0]['username'] : null)) + 
          "\n<button component=\"chat/allow/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatAllowListUsers'] != null && context['settings']['chatAllowListUsers'][key0] != null) ? context['settings']['chatAllowListUsers'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-light btn-sm py-0\"><i class=\"fa fa-times fa-xs text-danger\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'settings.chatDenyListUsers': function settingschatDenyListUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['settings'] != null) ? context['settings']['chatDenyListUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div component=\"chat/deny/list/user\" data-uid=\"" + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatDenyListUsers'] != null && context['settings']['chatDenyListUsers'][key0] != null) ? context['settings']['chatDenyListUsers'][key0]['uid'] : null)) + 
          "\" class=\"d-flex px-2 py-1 rounded-1 text-bg-light gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatDenyListUsers'] != null && context['settings']['chatDenyListUsers'][key0] != null) ? context['settings']['chatDenyListUsers'][key0]['username'] : null)) + 
          "\n<button component=\"chat/deny/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['settings'] != null && context['settings']['chatDenyListUsers'] != null && context['settings']['chatDenyListUsers'][key0] != null) ? context['settings']['chatDenyListUsers'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-light btn-sm py-0\"><i class=\"fa fa-times fa-xs text-danger\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'dailyDigestFreqOptions': function dailyDigestFreqOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['dailyDigestFreqOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['name'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'customSettings': function customSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<hr/>\n<h6 class=\"fw-bold\">" + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['title'] : null)) + 
          "</h6>\n<div>\n" + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['content'] : null)) + 
          "\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\n";
      }, function alt() {
        return "";
      });
    },
    'acpLanguages': function acpLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['acpLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          ")</option>\n";
      }, function alt() {
        return "";
      });
    },
    'notificationSettings': function notificationSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"row mb-3 align-items-center\">\n<div class=\"col-7\">\n<label class=\"text-sm\" for=\"" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['name'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['label'] : null)) + 
          "</label>\n</div>\n<div class=\"col-5\">\n<select class=\"form-select form-select-sm\" id=\"" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['name'] : null)) + 
          "\" data-property=\"" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['name'] : null)) + 
          "\">\n<option value=\"none\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['none'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:none]]</option>\n<option value=\"notification\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notification'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification-only]]</option>\n<option value=\"email\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['email'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:email-only]]</option>\n<option value=\"notificationemail\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notificationemail'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification-and-email]]</option>\n</select>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'upvoteNotifFreq': function upvoteNotifFreq(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['upvoteNotifFreq'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "\" " + 
          (guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">\n[[user:upvote-notif-freq." + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "]]\n</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
