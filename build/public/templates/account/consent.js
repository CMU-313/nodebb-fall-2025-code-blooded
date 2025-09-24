
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
      "\n</div>\n</div>\n<div class=\"account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4\" style=\"min-width: 0;\">\n<h3 class=\"fw-semibold fs-5\">[[user:consent.title]]</h3>\n<p class=\"lead\">[[user:consent.lead]]</p>\n<p>[[user:consent.intro]]</p>\n<hr />\n<div class=\"row\">\n<div class=\"col-sm-6\">\n" + 
      (guard((context != null) ? context['gdpr_consent'] : null) ?
        "\n<div class=\"alert alert-success d-flex gap-3\">\n[[user:consent.received]]\n<i class=\"fa fa-check fa-3x\"></i>\n</div>\n" :
        "\n<div class=\"alert alert-warning\">\n[[user:consent.not-received]]\n<br /><br />\n<div class=\"text-center\">\n<button class=\"btn btn-warning\" data-action=\"consent\">[[user:consent.give]]</button>\n</div>\n</div>\n") + 
      "\n<div class=\"card\">\n<div class=\"card-body\">\n<p>[[user:consent.email-intro]]</p>\n" + 
      (guard((context != null && context['digest'] != null) ? context['digest']['enabled'] : null) ?
        "\n<p>[[user:consent.digest-frequency, " + 
          __escape(guard((context != null && context['digest'] != null) ? context['digest']['frequency'] : null)) + 
          "]]</p>\n" :
        "\n<p>[[user:consent.digest-off]]</p>\n") + 
      "\n<div class=\"d-grid\">\n<a class=\"btn btn-outline-secondary\" href=\"./settings\">\n<i class=\"fa fa-cog\"></i>\n[[pages:account/settings]]\n</a>\n</div>\n</div>\n</div>\n</div>\n<div class=\"col-sm-6\">\n<div class=\"card\">\n<div class=\"card-body\">\n<p><strong>[[user:consent.right-of-access]]</strong></p>\n<p>[[user:consent.right-of-access-description]]</p>\n<p><strong>[[user:consent.right-to-rectification]]</strong></p>\n<p>[[user:consent.right-to-rectification-description]]</p>\n<p><strong>[[user:consent.right-to-erasure]]</strong></p>\n<p>[[user:consent.right-to-erasure-description]]</p>\n<p><strong>[[user:consent.right-to-data-portability]]</strong></p>\n<p>[[user:consent.right-to-data-portability-description]]</p>\n<hr />\n<div class=\"btn-group-vertical d-grid\">\n<a data-action=\"export-profile\" class=\"btn btn-outline-secondary\">\n<i class=\"fa fa-download\"></i> [[user:consent.export-profile]]\n</a>\n<a data-action=\"export-posts\" class=\"btn btn-outline-secondary\">\n<i class=\"fa fa-download\"></i> [[user:consent.export-posts]]\n</a>\n<a data-action=\"export-uploads\" class=\"btn btn-outline-secondary\">\n<i class=\"fa fa-download\"></i> [[user:consent.export-uploads]]\n</a>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>";
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
    }
  };

  return compiled;
})
