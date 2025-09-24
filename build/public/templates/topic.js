
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
    return "<script type=\"application/ld+json\">{\n\"@context\": \"https://schema.org\",\n\"@type\": \"BreadcrumbList\",\n\"itemListElement\": [{\n\"@type\": \"ListItem\",\n\"position\": 1,\n\"name\": \"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "\",\n\"item\": \"" + 
      __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs']['0'] != null) ? context['breadcrumbs']['0']['url'] : null)) + 
      "\"\n}\n" + 
      compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
      "\n]}</script>\n" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['enableBreadcrumbs'] : null) ?
        "\n" + 
          (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
            "\n<ol class=\"breadcrumb mb-0 " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
                "justify-content-center" :
                "") + 
              "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
              iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\n<li" + 
                  (index === length - 1 ?
                    " component=\"breadcrumb/current\"" :
                    "") + 
                  " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
                  (index === length - 1 ?
                    "active" :
                    "") + 
                  "\">\n<meta itemprop=\"position\" content=\"" + 
                  __escape(helper(context, helpers, 'increment', [index, "1"])) + 
                  "\" />\n" + 
                  (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
                    "<a href=\"" + 
                      __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
                      "\" itemprop=\"item\">" :
                    "") + 
                  "\n<span class=\"fw-semibold\" itemprop=\"name\">" + 
                  __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
                  "</span>\n" + 
                  (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
                    "</a>" :
                    "") + 
                  "\n</li>\n";
              }, function alt() {
                return "";
              }) + 
              "\n</ol>\n" :
            "") + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['header'] != null) ? context['widgets']['header']['length'] : null) ?
        "\n<div data-widget-area=\"header\">\n" + 
          compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n<div class=\"flex-fill\" itemid=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" itemscope itemtype=\"https://schema.org/DiscussionForumPosting\">\n<meta itemprop=\"headline\" content=\"" + 
      __escape(helper(context, helpers, 'escape', [guard((context != null) ? context['titleRaw'] : null)])) + 
      "\">\n<meta itemprop=\"text\" content=\"" + 
      __escape(helper(context, helpers, 'escape', [guard((context != null) ? context['titleRaw'] : null)])) + 
      "\">\n<meta itemprop=\"url\" content=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\">\n<meta itemprop=\"datePublished\" content=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\">\n<meta itemprop=\"dateModified\" content=\"" + 
      __escape(guard((context != null) ? context['lastposttimeISO'] : null)) + 
      "\">\n<div itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null && context['author'] != null) ? context['author']['username'] : null)) + 
      "\">\n" + 
      (guard((context != null && context['author'] != null) ? context['author']['userslug'] : null) ?
        "<meta itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['author'] != null) ? context['author']['userslug'] : null)) + 
          "\">" :
        "") + 
      "\n</div>\n<div class=\"d-flex flex-column gap-3\">\n<div class=\"d-flex gap-2 flex-wrap\">\n<div class=\"d-flex flex-column gap-3 flex-grow-1 flex-1\">\n<h1 component=\"post/header\" class=\"tracking-tight fw-semibold fs-3 mb-0 text-break " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
        "text-center" :
        "") + 
      "\">\n<span class=\"topic-title\" component=\"topic/title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</span>\n</h1>\n<div class=\"topic-info d-flex gap-2 align-items-center flex-wrap " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
        "justify-content-center" :
        "") + 
      "\">\n<span component=\"topic/labels\" class=\"d-flex gap-2 " + 
      ((!guard((context != null) ? context['scheduled'] : null) && (!guard((context != null) ? context['pinned'] : null) && (!guard((context != null) ? context['locked'] : null) && (!guard((context != null && context['icons'] != null) ? context['icons']['length'] : null) && (!guard((context != null) ? context['oldCid'] : null) || (guard((context != null) ? context['oldCid'] : null) == "-1")))))) ?
        "hidden" :
        "") + 
      "\">\n<span component=\"topic/scheduled\" class=\"badge badge border border-gray-300 text-body " + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "hidden") + 
      "\">\n<i class=\"fa fa-clock-o\"></i> [[topic:scheduled]]\n</span>\n<span component=\"topic/pinned\" class=\"badge badge border border-gray-300 text-body " + 
      ((guard((context != null) ? context['scheduled'] : null) || !guard((context != null) ? context['pinned'] : null)) ?
        "hidden" :
        "") + 
      "\">\n<i class=\"fa fa-thumb-tack\"></i> " + 
      (guard((context != null) ? context['pinExpiry'] : null) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null) ? context['pinExpiryISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\n</span>\n<span component=\"topic/locked\" class=\"badge badge border border-gray-300 text-body " + 
      (guard((context != null) ? context['locked'] : null) ?
        "" :
        "hidden") + 
      "\">\n<i class=\"fa fa-lock\"></i> [[topic:locked]]\n</span>\n<a component=\"topic/moved\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null) ? context['oldCid'] : null)) + 
      "\" class=\"badge badge border border-gray-300 text-body text-decoration-none " + 
      ((!guard((context != null) ? context['oldCid'] : null) || (guard((context != null) ? context['oldCid'] : null) == "-1")) ?
        "hidden" :
        "") + 
      "\">\n<i class=\"fa fa-arrow-circle-right\"></i> " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
        "[[topic:moved-from, " + 
          __escape(guard((context != null && context['oldCategory'] != null) ? context['oldCategory']['name'] : null)) + 
          "]]" :
        "[[topic:moved]]") + 
      "\n</a>\n" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n</span>\n" + 
      __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null) ? context['category'] : null), "a", "border"])) + 
      "\n<div data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" component=\"topic/tags\" class=\"lh-1 tags tag-list d-flex flex-wrap hidden-xs hidden-empty gap-2\">" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "</div>\n<div class=\"d-flex gap-2\"><span class=\"badge text-body border border-gray-300 stats text-xs\">\n<i class=\"fa-regular fa-fw fa-message visible-xs-inline\" title=\"[[global:posts]]\"></i>\n<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postcount'] : null)])) + 
      "</span>\n<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posts]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<i class=\"fa fa-fw fa-user visible-xs-inline\" title=\"[[global:posters]]\"></i>\n<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postercount'] : null)])) + 
      "</span>\n<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posters]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<i class=\"fa fa-fw fa-eye visible-xs-inline\" title=\"[[global:views]]\"></i>\n<span class=\"fw-bold\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['viewcount'] : null)])) + 
      "</span>\n<span class=\"hidden-xs text-lowercase fw-normal\">[[global:views]]</span>\n</span>\n" + 
      (guard((context != null) ? context['followercount'] : null) ?
        "\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<i class=\"fa fa-fw fa-bell-o visible-xs-inline\" title=\"[[global:watching]]\"></i>\n<span class=\"fw-bold\" title=\"" + 
          __escape(guard((context != null) ? context['viewcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['followercount'] : null)])) + 
          "</span>\n<span class=\"hidden-xs text-lowercase fw-normal\">[[global:watching]]</span>\n</span>\n" :
        "") + 
      "</div>\n</div>\n</div>\n<div class=\"d-flex flex-wrap gap-2 align-items-start mt-2 hidden-empty\" component=\"topic/thumb/list\">" + 
      compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
      "</div>\n</div>\n<div class=\"row mb-4 mb-lg-0\">\n<div class=\"topic " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      " " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "d-block d-lg-none" :
        "") + 
      "\" style=\"top: " + 
      ((guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topMobilebar'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['autohideBottombar'] : null)) ?
        "var(--panel-offset)" :
        "0") + 
      ";\">\n<nav class=\"d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons\">\n<div class=\"d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center\">\n<div class=\"d-flex me-auto mb-0 gap-2 align-items-center flex-wrap\">\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<button component=\"topic/mark-unread\" class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:mark-unread]]</span>\n</button>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:watching]]</span>\n</span>\n<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:not-watching]]</span>\n</span>\n<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:ignoring]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:ignoring.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
        "") + 
      "\n<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">" + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:oldest-to-newest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:newest-to-oldest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n</ul>\n</div>\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:thread-tools.title]]</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\"></ul>\n</div>\n" :
        "") + 
      "\n" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n<a class=\"btn btn-ghost btn-sm d-none d-lg-flex align-items-center align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\" title=\"[[global:rss-feed]]\"><i class=\"fa fa-rss text-primary\"></i></a>\n" :
        "") + 
      "\n</div>\n<div component=\"topic/reply/container\" class=\"btn-group " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"d-flex " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "" :
        "px-3") + 
      " gap-2 align-items-center btn btn-sm btn-primary fw-semibold\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-fw fa-reply " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "" :
        " d-sm-block d-md-none ") + 
      "\"></i><span class=\"d-none d-md-block text-truncate text-nowrap\">[[topic:reply]]</span></a>\n<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[topic:reply-options]]\">\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\" role=\"menuitem\">[[topic:reply-as-topic]]</a></li>\n</ul>\n</div>\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<a href=\"#\" component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled " + 
          ((guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) || !guard((context != null) ? context['locked'] : null)) ?
            "hidden" :
            "") + 
          "\" disabled><i class=\"fa fa-fw fa-lock\"></i> [[topic:locked]]</a>\n" :
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary\"><i class=\"fa fa-fw fa-sign-in " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
                "" :
                " d-sm-block d-md-none ") + 
              "\"></i><span>[[topic:guest-login-reply]]</span></a>\n") + 
          "\n") + 
      "\n</div>\n</nav>\n</div>\n" + 
      (guard((context != null) ? context['merger'] : null) ?
        "\n<div component=\"topic/merged/message\" class=\"alert alert-info d-flex justify-content-between flex-wrap\">\n<span>[[topic:merged-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
          "]]</span>\n<span>\n<a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
          "</strong></a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
          "\"></small>\n</span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['forker'] : null) ?
        "\n<div component=\"topic/forked/message\" class=\"alert alert-info d-flex justify-content-between flex-wrap\">\n<span>[[topic:forked-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null) ? context['forkedFromTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['forker'] != null) ? context['forker']['forkedFromTitle'] : null)) + 
          "]]</span>\n<span>\n<a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['forker'] != null) ? context['forker']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['forker'] != null) ? context['forker']['username'] : null)) + 
          "</strong></a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['forkTimestampISO'] : null)) + 
          "\"></small>\n</span>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "\n<div component=\"topic/deleted/message\" class=\"alert alert-warning d-flex justify-content-between flex-wrap" + 
          (guard((context != null) ? context['deleted'] : null) ?
            "" :
            " hidden") + 
          "\">\n<span>[[topic:deleted-message]]</span>\n<span>\n" + 
          (guard((context != null) ? context['deleter'] : null) ?
            "\n<a class=\"fw-bold\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
              "</a> <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
              "\"></small>\n" :
            "") + 
          "\n</span>\n</div>\n") + 
      "\n<div class=\"d-flex gap-0 gap-lg-5\">\n<div class=\"posts-container\" style=\"min-width: 0;\">\n<ul component=\"topic\" class=\"posts timeline list-unstyled p-0 py-3\" style=\"min-width: 0;\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n<div class=\"visible-xs\">\n<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n<hr/>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['enableQuickReply'] : null) ?
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "\n<div component=\"topic/quickreply/container\" class=\"quick-reply d-flex gap-3 mb-4\">\n<div class=\"icon hidden-xs\">\n<a class=\"d-inline-block position-relative\" href=\"" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
                "#") + 
              "\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
              "\n" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
                "<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "\"><span class=\"visually-hidden\">[[global:" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "]]</span></span>" :
                "") + 
              "\n</a>\n</div>\n<form class=\"flex-grow-1 d-flex flex-column gap-2\" method=\"post\" action=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose\">\n<input type=\"hidden\" name=\"tid\" value=\"" + 
              __escape(guard((context != null) ? context['tid'] : null)) + 
              "\" />\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\" />\n<div class=\"quickreply-message position-relative\">\n<textarea rows=\"4\" name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n</div>\n<div>\n<div class=\"d-flex justify-content-end gap-2\">\n<button type=\"button\" component=\"topic/quickreply/upload/button\" class=\"btn btn-ghost btn-sm border\"><i class=\"fa fa-upload\"></i></button>\n<button type=\"button\" component=\"topic/quickreply/expand\" class=\"btn btn-ghost btn-sm border\" title=\"[[topic:open-composer]]\"><i class=\"fa fa-expand\"></i></button>\n<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-sm btn-primary\">[[topic:post-quick-reply]]</button>\n</div>\n</div>\n</form>\n<form class=\"d-none\" component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n</form>\n</div>\n" :
            "") + 
          "\n" :
        "") + 
      "\n</div>\n<div class=\"d-flex d-none d-lg-block flex-grow-1 mt-2\">\n<div class=\"sticky-top\" style=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "top:2rem;" :
        "top:6rem; ") + 
      " z-index:1;\">\n<div class=\"d-flex flex-column gap-3 align-items-end\">\n" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "\n<div class=\"d-flex flex-column gap-2\" style=\"width: 170px;\">\n<div component=\"topic/reply/container\" class=\"btn-group " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose?tid=" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" class=\"d-flex " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
            "" :
            "px-3") + 
          " gap-2 align-items-center btn btn-sm btn-primary fw-semibold\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-fw fa-reply " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
            "" :
            " d-sm-block d-md-none ") + 
          "\"></i><span class=\"d-none d-md-block text-truncate text-nowrap\">[[topic:reply]]</span></a>\n<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[topic:reply-options]]\">\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\" role=\"menuitem\">[[topic:reply-as-topic]]</a></li>\n</ul>\n</div>\n" + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "\n<a href=\"#\" component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled " + 
              ((guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) || !guard((context != null) ? context['locked'] : null)) ?
                "hidden" :
                "") + 
              "\" disabled><i class=\"fa fa-fw fa-lock\"></i> [[topic:locked]]</a>\n" :
            "\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
                "" :
                "\n<a component=\"topic/reply/guest\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/login\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary\"><i class=\"fa fa-fw fa-sign-in " + 
                  (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
                    "" :
                    " d-sm-block d-md-none ") + 
                  "\"></i><span>[[topic:guest-login-reply]]</span></a>\n") + 
              "\n") + 
          "\n" + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "\n<button component=\"topic/mark-unread\" class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:mark-unread]]</span>\n</button>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "" :
                " hidden") + 
              "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:watching]]</span>\n</span>\n<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
              (guard((context != null) ? context['isNotFollowing'] : null) ?
                "" :
                " hidden") + 
              "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:not-watching]]</span>\n</span>\n<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
              (guard((context != null) ? context['isIgnoring'] : null) ?
                "" :
                " hidden") + 
              "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:ignoring]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isNotFollowing'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[topic:ignoring.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isIgnoring'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
            "") + 
          "\n<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "]]\">\n<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">" + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:oldest-to-newest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:newest-to-oldest]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\">\n<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n</a>\n</li>\n</ul>\n</div>\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
            "\n<div class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle text-truncate\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:thread-tools.title]]</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\"></ul>\n</div>\n" :
            "") + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "<hr class=\"my-0\" style=\"min-width: 170px;\"/>" :
        "") + 
      "\n<div class=\"pagination-block d-none d-lg-block\">\n<div class=\"scroller-content d-flex gap-2 flex-column align-items-start\">\n<button class=\"pagetop btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2\" style=\"padding: 4px 8px;\"><i class=\"fa fa-fw fa-chevron-up\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span></button>\n<div class=\"scroller-container position-relative\">\n<div class=\"scroller-thumb d-flex gap-2 text-nowrap position-relative\" style=\"height: 40px;\">\n<div class=\"scroller-thumb-icon bg-primary rounded d-inline-block\" style=\"width:9px; height: 40px;\"></div>\n<div>\n<p class=\"small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0\"></p>\n<p class=\"meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none\"></p>\n</div>\n</div>\n<div class=\"unread d-inline-block position-absolute bottom-0\">\n<div class=\"meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2\">\n<a class=\"text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" tabindex=\"-1\" aria-disabled=\"true\" aria-label=\"[[topic:unread-posts-link]]\"></a>\n</div>\n</div>\n</div>\n<button class=\"pagebottom btn btn-ghost btn-sm ff-secondary d-inline-flex border-0 align-items-center gap-2\" style=\"padding: 4px 8px;\"><i class=\"fa fa-fw fa-chevron-down\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['lastposttimeISO'] : null)) + 
      "\"></span></button>\n</div>\n</div>\n" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['topicSidebarTools'] : null) ?
        "<hr class=\"my-0\" style=\"min-width: 170px;\" />" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n<div class=\"d-flex flex-column ps-2 hidden-xs\" style=\"min-width: 170px;\">\n<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n</div>\n</div>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
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
          "\n</nav>\n" :
        "") + 
      "\n</div>\n<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>\n</div>\n<div data-widget-area=\"footer\">\n" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
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
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
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
          }) + 
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
          "\n</nav>\n</noscript>\n");
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            "" :
            ",{\n\"@type\": \"ListItem\",\n\"position\": " + 
              __escape(helper(context, helpers, 'increment', [index, "1"])) + 
              ",\n\"name\": \"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)])) + 
              "\"\n" + 
              (index === length - 1 ?
                "" :
                ",\"item\": \"" + 
                  __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
                  "\"") + 
              "\n}");
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
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<span class=\"lh-1\">" + 
          __escape(guard(value)) + 
          "</span>";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\"><span class=\"badge border border-gray-300 text-xs tag tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>";
      }, function alt() {
        return "";
      });
    },
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a class=\"d-inline-block\" href=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\">\n<img class=\"rounded-1 bg-light\" style=\"width:auto; max-width: 5.33rem; height: 3.33rem; object-fit: contain;\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\" />\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"post\" class=\"" + 
          ((guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) != guard((context != null) ? context['0'] : null)) ?
            "pt-4" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            "deleted" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['selfPost'] : null) ?
            "self-post" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['topicOwnerPost'] : null) ?
            "topic-owner-post" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-userslug=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['allowDupe'] : null) ?
            " data-allow-dupe=\"1\"" :
            "") + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['navigatorIgnore'] : null) ?
            " data-navigator-ignore=\"1\"" :
            "") + 
          " itemprop=\"comment\" itemtype=\"http://schema.org/Comment\" itemscope>\n<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" id=\"" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null), "1"])) + 
          "\"></a>\n<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null) ?
            "\n<meta itemprop=\"dateModified\" content=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
              "\">\n" :
            "") + 
          "\n" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null) ? context['widgets']['mainpost-header']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-header\">\n" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-header'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null && context['widgets']['mainpost-header'][key1] != null) ? context['widgets']['mainpost-header'][key1]['html'] : null)) + 
                  "\n";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n" + 
          ((guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['parent'] : null) && !guard((context != null) ? context['hideParent'] : null)) ?
            "\n<div component=\"post/parent\" data-collapsed=\"true\" data-parent-pid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['pid'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['uid'] : null)) + 
              "\" class=\"btn btn-ghost btn-sm d-flex gap-2 text-start flex-row mb-2\" style=\"font-size: 13px;\">\n<div class=\"d-flex gap-2 text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null && context['posts'][key0]['parent']['user'] != null) ? context['posts'][key0]['parent']['user']['userslug'] : null)) + 
              "\" class=\"text-decoration-none lh-1\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
              "</a>\n<a class=\"fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null && context['posts'][key0]['parent']['user'] != null) ? context['posts'][key0]['parent']['user']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null && context['posts'][key0]['parent']['user'] != null) ? context['posts'][key0]['parent']['user']['displayname'] : null)) + 
              "</a>\n</div>\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['pid'] : null)])) + 
              "\" class=\"text-muted timeago text-nowrap hidden\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['timestampISO'] : null)) + 
              "\"></a>\n</div>\n<div component=\"post/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['content'] : null)) + 
              "</div>\n</div>\n" :
            "") + 
          "\n<div class=\"d-flex align-items-start gap-3 post-container-parent\">\n<div class=\"bg-body d-none d-sm-block rounded-circle\" style=\"outline: 2px solid var(--bs-body-bg);\">\n<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" aria-label=\"[[aria:profile-page-for, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "]]\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['isLocal'] : null) ?
            "\n<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "\"><span class=\"visually-hidden\">[[global:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "]]</span></span>\n" :
            "\n<span component=\"user/locality\" class=\"position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small\" title=\"[[global:remote-user]]\">\n<span class=\"visually-hidden\">[[global:remote-user]]</span>\n<i class=\"fa fa-globe\"></i>\n</span>\n") + 
          "\n</a>\n</div>\n<div class=\"post-container d-flex gap-2 flex-grow-1 flex-column w-100\" style=\"min-width:0;\">\n<div class=\"d-flex align-items-start justify-content-between gap-1 flex-nowrap w-100 post-header\" itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n<div class=\"d-flex gap-1 flex-wrap align-items-center text-truncate\">\n<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            "<meta itemprop=\"url\" content=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" :
            "") + 
          "\n<div class=\"d-flex flex-nowrap gap-1 align-items-center text-truncate\">\n<div class=\"bg-body d-sm-none\">\n<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "20px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['isLocal'] : null) ?
            "\n<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "\"><span class=\"visually-hidden\">[[global:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "]]</span></span>\n" :
            "\n<span component=\"user/locality\" class=\"position-absolute top-100 start-100 lh-1 border border-white border-2 rounded-circle small\" title=\"[[global:remote-user]]\">\n<span class=\"visually-hidden\">[[global:remote-user]]</span>\n<i class=\"fa fa-globe\"></i>\n</span>\n") + 
          "\n</a>\n</div>\n<a class=\"fw-bold text-nowrap text-truncate\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n</div>\n" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/groups/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                  "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                  ";background-color: " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                  ";\"><i class=\"fa " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                        " me-1" :
                        "") :
                    "hidden") + 
                  "\"></i><span class=\"badge-text align-text-bottom\">" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) :
                    "") + 
                  "</span></a>\n" :
                "") + 
              "\n";
          }, function alt() {
            return "";
          }) + 
          "\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['banned'] : null) ?
            "\n<span class=\"badge bg-danger rounded-1\">[[user:banned]]</span>\n" :
            "") + 
          "\n<div class=\"d-flex gap-1 align-items-center\">\n<span class=\"text-muted\">" + 
          __escape(helper(context, helpers, 'generateWrote', [guard(value), guard((context != null && context['config'] != null) ? context['config']['timeagoCutoff'] : null)])) + 
          "</span>\n<i component=\"post/edit-indicator\" class=\"fa fa-edit text-muted" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
            " pointer" :
            "") + 
          " edit-icon " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[global:edited-timestamp, " + 
          __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
          "]]\"></i>\n<span data-editor=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['userslug'] : null)) + 
          "\" component=\"post/editor\" class=\"visually-hidden\">[[global:last-edited-by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
          "\"></span></span>\n</div>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['length'] : null) ?
            "\n<div>\n<span>\n&#124;\n" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['custom_profile_info'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null && context['posts'][key0]['user']['custom_profile_info'][key1] != null) ? context['posts'][key0]['user']['custom_profile_info'][key1]['content'] : null)) + 
                  "\n";
              }, function alt() {
                return "";
              }) + 
              "\n</span>\n</div>\n" :
            "") + 
          "\n</div>\n<div class=\"d-flex align-items-center gap-1 justify-content-end\">\n<span class=\"bookmarked opacity-0 text-primary\"><i class=\"fa fa-bookmark-o\"></i></span>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)])) + 
          "\" class=\"post-index text-muted d-none d-md-inline\">#" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null), "1"])) + 
          "</a>\n</div>\n</div>\n<div class=\"content text-break\" component=\"post/content\" itemprop=\"text\">\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n<div component=\"post/footer\" class=\"post-footer border-bottom pb-2\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\n<div component=\"post/signature\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"text-xs text-muted mt-2\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "</div>\n" :
            "") + 
          "\n<div class=\"d-flex flex-wrap-reverse gap-2 " + 
          ((guard((context != null) ? context['hideReplies'] : null) || !guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null)) ?
            "justify-content-end" :
            "justify-content-between") + 
          "\">\n" + 
          (guard((context != null) ? context['hideReplies'] : null) ?
            "" :
            "\n<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"d-flex gap-2 align-items-center btn btn-ghost ff-secondary border rounded-1 p-1 text-muted text-decoration-none text-xs " + 
              ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['replies'] : null) || helper(context, helpers, 'shouldHideReplyContainer', [guard(value)])) ?
                "hidden" :
                "") + 
              "\">\n<span component=\"post/reply-count/avatars\" class=\"d-flex gap-1 " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "hasMore" :
                "") + 
              "\">\n" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['users'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n<span>" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null && context['posts'][key0]['replies']['users'] != null) ? context['posts'][key0]['replies']['users'][key1] : null), "20px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
                  "</span>\n";
              }, function alt() {
                return "";
              }) + 
              "\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "\n<span style=\"height: 20px; line-height: 20px;\"><i class=\"fa fa-ellipsis\"></i></span>\n" :
                "") + 
              "\n</span>\n<span class=\"ms-2 replies-count fw-semibold text-nowrap\" component=\"post/reply-count/text\" data-replies=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['text'] : null)) + 
              "</span>\n<span class=\"ms-2 replies-last hidden-xs fw-semibold\">[[topic:last-reply-time]] <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['timestampISO'] : null)) + 
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
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['announces'] : null) ?
            "\n<a component=\"post/announce-count\" href=\"#\" class=\"btn btn-ghost btn-sm d-flex gap-2 align-items-center\" title=\"[[topic:announcers]]\"><i class=\"fa fa-share-alt text-primary\"></i> " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['announces'] : null)) + 
              "</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n<div class=\"d-flex votes align-items-center\">\n<a component=\"post/upvote\" href=\"#\" class=\"btn btn-ghost btn-sm" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                " upvoted" :
                "") + 
              "\" title=\"[[topic:upvote-post]]\">\n<i class=\"fa fa-fw fa-chevron-up text-primary\"></i>\n</a>\n<meta itemprop=\"upvoteCount\" content=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvotes'] : null)) + 
              "\">\n<meta itemprop=\"downvoteCount\" content=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvotes'] : null)) + 
              "\">\n<a href=\"#\" class=\"px-2 mx-1 btn btn-ghost btn-sm\" component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\" title=\"[[global:voters]]\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</a>\n" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n<a component=\"post/downvote\" href=\"#\" class=\"btn btn-ghost btn-sm" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    " downvoted" :
                    "") + 
                  "\" title=\"[[topic:downvote-post]]\">\n<i class=\"fa fa-fw fa-chevron-down text-primary\"></i>\n</a>\n") + 
              "\n</div>\n") + 
          "\n<span component=\"post/tools\" class=\"dropdown bottom-sheet " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['display_post_menu'] : null) ?
            "" :
            "hidden") + 
          "\">\n<a class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[topic:post-tools]]\"><i class=\"fa fa-fw fa-ellipsis-v text-primary\"></i></a>\n<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\"></ul>\n</span>\n</div>\n</div>\n<div component=\"post/replies/container\" class=\"my-2 col-11 border rounded-1 p-3 hidden-empty\"></div>\n</div>\n</div>\n</div>\n" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null) ? context['widgets']['mainpost-footer']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-footer\">\n" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-footer'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null && context['widgets']['mainpost-footer'][key1] != null) ? context['widgets']['mainpost-footer'][key1]['html'] : null)) + 
                  "\n";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n</li>\n" + 
          ((guard((context != null && context['config'] != null) ? context['config']['topicPostSort'] : null) != "most_votes") ?
            "\n" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['events'] : null), function each(key1, index, length, value) {
                var key = key1;
                return (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null) ? context['posts'][key0]['events'][key1]['items']['length'] : null) ?
                    "\n<li component=\"topic/event\" class=\"timeline-event text-muted d-flex align-items-start gap-2 pt-4 px-2 px-lg-0\">\n<div class=\"timeline-badge my-2 my-lg-1\">\n<i class=\"fa fa-fw " + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null) ?
                        __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null)) :
                        "fa-circle") + 
                      " small\"></i>\n</div>\n<div class=\"d-flex flex-column align-items-start\">\n<button class=\"btn btn-sm btn-ghost\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#event-collapse-" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                      "\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n[[topic:announcers-x, " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null) ? context['posts'][key0]['events'][key1]['items']['length'] : null)) + 
                      "]]\n</button>\n<div class=\"collapse align-self-start\" id=\"event-collapse-" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                      "\">\n<div component=\"topic/event/items\">\n" + 
                      iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['items'] : null), function each(key2, index, length, value) {
                        var key = key2;
                        return "\n<div class=\"d-flex gap-2 pt-3 pt-lg-2\" data-topic-event-id=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['id'] : null)) + 
                          "\" data-topic-event-type=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['type'] : null)) + 
                          "\">\n<span class=\"timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0\">\n" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['text'] : null)) + 
                          "\n</span>\n" + 
                          ((guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) && guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['id'] : null)) ?
                            "\n<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['id'] : null)) + 
                              "\" data-topic-event-type=\"" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null && context['posts'][key0]['events'][key1]['items'] != null && context['posts'][key0]['events'][key1]['items'][key2] != null) ? context['posts'][key0]['events'][key1]['items'][key2]['type'] : null)) + 
                              "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n" :
                            "") + 
                          "\n</div>\n";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n</div>\n</div>\n</div>\n</li>\n" :
                    "\n<li component=\"topic/event\" class=\"timeline-event text-muted d-flex align-items-start align-items-lg-center gap-2 pt-4 px-2 px-lg-0\" data-topic-event-id=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                      "\" data-topic-event-type=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                      "\">\n<div class=\"timeline-badge\">\n<i class=\"fa fa-fw " + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null) ?
                        __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null)) :
                        "fa-circle") + 
                      " small\"></i>\n</div>\n<span class=\"timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0\">\n" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['text'] : null)) + 
                      "\n</span>\n" + 
                      ((guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) && guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) ?
                        "\n<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                          "\" data-topic-event-type=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                          "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n" :
                        "") + 
                      "\n</li>\n") + 
                  "\n";
              }, function alt() {
                return "";
              }) + 
              "\n" :
            "") + 
          "\n";
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
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
