
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
    return ((!guard((context != null) ? context['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null) ? context['widgets']['mainpost-header']['length'] : null)) ?
        "\n<div data-widget-area=\"mainpost-header\">\n" + 
          compiled.blocks['widgets.mainpost-header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['parent'] : null) && !guard((context != null) ? context['hideParent'] : null)) ?
        "\n<div component=\"post/parent\" data-collapsed=\"true\" data-parent-pid=\"" + 
          __escape(guard((context != null && context['parent'] != null) ? context['parent']['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['parent'] != null) ? context['parent']['uid'] : null)) + 
          "\" class=\"btn btn-ghost btn-sm d-flex gap-2 text-start flex-row mb-2\" style=\"font-size: 13px;\">\n<div class=\"d-flex gap-2 text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['userslug'] : null)) + 
          "\" class=\"text-decoration-none lh-1\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['parent'] != null) ? context['parent']['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
          "</a>\n<a class=\"fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['parent'] != null && context['parent']['user'] != null) ? context['parent']['user']['displayname'] : null)) + 
          "</a>\n</div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['parent'] != null) ? context['parent']['pid'] : null)])) + 
          "\" class=\"text-muted timeago text-nowrap hidden\" title=\"" + 
          __escape(guard((context != null && context['parent'] != null) ? context['parent']['timestampISO'] : null)) + 
          "\"></a>\n</div>\n<div component=\"post/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
          __escape(guard((context != null && context['parent'] != null) ? context['parent']['content'] : null)) + 
          "</div>\n</div>\n" :
        "") + 
      "\n<div class=\"d-flex align-items-start gap-3 post-container-parent\">\n<div class=\"bg-body d-none d-sm-block rounded-circle\" style=\"outline: 2px solid var(--bs-body-bg);\">\n<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\" aria-label=\"[[aria:profile-page-for, " + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "]]\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "\n" + 
      (guard((context != null && context['user'] != null) ? context['user']['isLocal'] : null) ?
        "\n<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "\"><span class=\"visually-hidden\">[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "]]</span></span>\n" :
        "\n<span component=\"user/locality\" class=\"position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small\" title=\"[[global:remote-user]]\">\n<span class=\"visually-hidden\">[[global:remote-user]]</span>\n<i class=\"fa fa-globe\"></i>\n</span>\n") + 
      "\n</a>\n</div>\n<div class=\"post-container d-flex gap-2 flex-grow-1 flex-column w-100\" style=\"min-width:0;\">\n<div class=\"d-flex align-items-start justify-content-between gap-1 flex-nowrap w-100 post-header\" itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n<div class=\"d-flex gap-1 flex-wrap align-items-center text-truncate\">\n<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "\">\n" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        "<meta itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "\">" :
        "") + 
      "\n<div class=\"d-flex flex-nowrap gap-1 align-items-center text-truncate\">\n<div class=\"bg-body d-sm-none\">\n<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "20px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "\n" + 
      (guard((context != null && context['user'] != null) ? context['user']['isLocal'] : null) ?
        "\n<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "\"><span class=\"visually-hidden\">[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "]]</span></span>\n" :
        "\n<span component=\"user/locality\" class=\"position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small\" title=\"[[global:remote-user]]\">\n<span class=\"visually-hidden\">[[global:remote-user]]</span>\n<i class=\"fa fa-globe\"></i>\n</span>\n") + 
      "\n</a>\n</div>\n<a class=\"fw-bold text-nowrap text-truncate\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\" data-username=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['username'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['displayname'] : null)) + 
      "</a>\n</div>\n" + 
      compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['banned'] : null) ?
        "\n<span class=\"badge bg-danger rounded-1\">[[user:banned]]</span>\n" :
        "") + 
      "\n<div class=\"d-flex gap-1 align-items-center\">\n<span class=\"text-muted\">" + 
      __escape(helper(context, helpers, 'generateWrote', [guard(value), guard((context != null && context['config'] != null) ? context['config']['timeagoCutoff'] : null)])) + 
      "</span>\n<i component=\"post/edit-indicator\" class=\"fa fa-edit text-muted" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
        " pointer" :
        "") + 
      " edit-icon " + 
      (guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[global:edited-timestamp, " + 
      __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null) ? context['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
      "]]\"></i>\n<span data-editor=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"visually-hidden\">[[global:last-edited-by, " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['posts'] != null) ? context['posts']['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
      "\"></span></span>\n</div>\n" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null) ? context['posts']['user']['custom_profile_info']['length'] : null) ?
        "\n<div>\n<span>\n&#124;\n" + 
          compiled.blocks['posts.user.custom_profile_info'](helpers, context, guard, iter, helper) + 
          "\n</span>\n</div>\n" :
        "") + 
      "\n</div>\n<div class=\"d-flex align-items-center gap-1 justify-content-end\">\n<span class=\"bookmarked opacity-0 text-primary\"><i class=\"fa fa-bookmark-o\"></i></span>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null) ? context['pid'] : null)])) + 
      "\" class=\"post-index text-muted d-none d-md-inline\">#" + 
      __escape(helper(context, helpers, 'increment', [guard((context != null) ? context['index'] : null), "1"])) + 
      "</a>\n</div>\n</div>\n<div class=\"content text-break\" component=\"post/content\" itemprop=\"text\">\n" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['content'] : null)) + 
      "\n</div>\n<div component=\"post/footer\" class=\"post-footer border-bottom pb-2\">\n" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null) ?
        "\n<div component=\"post/signature\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
          "\" class=\"text-xs text-muted mt-2\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null)) + 
          "</div>\n" :
        "") + 
      "\n<div class=\"d-flex flex-wrap-reverse gap-2 " + 
      ((guard((context != null) ? context['hideReplies'] : null) || !guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null)) ?
        "justify-content-end" :
        "justify-content-between") + 
      "\">\n" + 
      (guard((context != null) ? context['hideReplies'] : null) ?
        "" :
        "\n<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"d-flex gap-2 align-items-center btn btn-ghost ff-secondary border rounded-1 p-1 text-muted text-decoration-none text-xs " + 
          ((!guard((context != null) ? context['replies'] : null) || helper(context, helpers, 'shouldHideReplyContainer', [guard(value)])) ?
            "hidden" :
            "") + 
          "\">\n<span component=\"post/reply-count/avatars\" class=\"d-flex gap-1 " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "hasMore" :
            "") + 
          "\">\n" + 
          compiled.blocks['posts.replies.users'](helpers, context, guard, iter, helper) + 
          "\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "\n<span style=\"height: 20px; line-height: 20px;\"><i class=\"fa fa-ellipsis\"></i></span>\n" :
            "") + 
          "\n</span>\n<span class=\"ms-2 replies-count fw-semibold text-nowrap\" component=\"post/reply-count/text\" data-replies=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['text'] : null)) + 
          "</span>\n<span class=\"ms-2 replies-last hidden-xs fw-semibold\">[[topic:last-reply-time]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['timestampISO'] : null)) + 
          "\"></span></span>\n<i class=\"fa fa-fw fa-chevron-down\" component=\"post/replies/open\"></i>\n</a>\n") + 
      "\n<div component=\"post/actions\" class=\"d-flex flex-grow-1 align-items-center justify-content-end gap-1 post-tools\">\n<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n<a component=\"post/reply\" href=\"#\" class=\"btn btn-ghost btn-sm " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:reply]]\"><i class=\"fa fa-fw fa-reply text-primary\"></i></a>\n<a component=\"post/quote\" href=\"#\" class=\"btn btn-ghost btn-sm " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:quote]]\"><i class=\"fa fa-fw fa-quote-right text-primary\"></i></a>\n" + 
      (guard((context != null) ? context['announces'] : null) ?
        "\n<a component=\"post/announce-count\" href=\"#\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\" title=\"[[topic:announcers]]\"><i class=\"fa fa-share-alt text-primary\"></i> " + 
          __escape(guard((context != null) ? context['announces'] : null)) + 
          "</a>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n<div class=\"d-flex votes align-items-center\">\n<a component=\"post/upvote\" href=\"#\" class=\"btn btn-ghost btn-sm" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['upvoted'] : null) ?
            " upvoted" :
            "") + 
          "\" title=\"[[topic:upvote-post]]\">\n<i class=\"fa fa-fw fa-chevron-up text-primary\"></i>\n</a>\n<meta itemprop=\"upvoteCount\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['upvotes'] : null)) + 
          "\">\n<meta itemprop=\"downvoteCount\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['downvotes'] : null)) + 
          "\">\n<a href=\"#\" class=\"px-2 mx-1 btn btn-ghost btn-sm\" component=\"post/vote-count\" data-votes=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "\" title=\"[[global:voters]]\">" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "</a>\n" + 
          (guard((context != null) ? context['downvote:disabled'] : null) ?
            "" :
            "\n<a component=\"post/downvote\" href=\"#\" class=\"btn btn-ghost btn-sm" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['downvoted'] : null) ?
                " downvoted" :
                "") + 
              "\" title=\"[[topic:downvote-post]]\">\n<i class=\"fa fa-fw fa-chevron-down text-primary\"></i>\n</a>\n") + 
          "\n</div>\n") + 
      "\n<span component=\"post/tools\" class=\"dropdown bottom-sheet " + 
      (guard((context != null) ? context['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n<a class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[topic:post-tools]]\"><i class=\"fa fa-fw fa-ellipsis-v text-primary\"></i></a>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\"></ul>\n</span>\n</div>\n</div>\n<div component=\"post/replies/container\" class=\"my-2 col-11 border rounded-1 p-3 hidden-empty\"></div>\n</div>\n</div>\n</div>\n" + 
      ((!guard((context != null) ? context['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null) ? context['widgets']['mainpost-footer']['length'] : null)) ?
        "\n<div data-widget-area=\"mainpost-footer\">\n" + 
          compiled.blocks['widgets.mainpost-footer'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'widgets.mainpost-header': function widgetsmainpostheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null && context['widgets']['mainpost-header'][key0] != null) ? context['widgets']['mainpost-header'][key0]['html'] : null)) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['selectedGroups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null)) + 
                  (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text align-text-bottom\">" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts.user.custom_profile_info': function postsusercustom_profile_info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['custom_profile_info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null && context['posts']['user']['custom_profile_info'][key0] != null) ? context['posts']['user']['custom_profile_info'][key0]['content'] : null)) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts.replies.users': function postsrepliesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<span>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts']['replies'] != null && context['posts']['replies']['users'] != null) ? context['posts']['replies']['users'][key0] : null), "20px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
          "</span>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.mainpost-footer': function widgetsmainpostfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null && context['widgets']['mainpost-footer'][key0] != null) ? context['widgets']['mainpost-footer'][key0]['html'] : null)) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
