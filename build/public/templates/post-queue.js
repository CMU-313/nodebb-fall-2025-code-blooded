
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
    return "<div class=\"flex-fill\">\n" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n" + 
          (guard((context != null) ? context['enabled'] : null) ?
            "" :
            "\n<div class=\"alert alert-info\">\n[[post-queue:enabling-help, " + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/settings/post#post-queue]]\n</div>\n") + 
          "\n" :
        "\n<div>\n<p class=\"lead\">[[post-queue:public-intro]]</p>\n<p>[[post-queue:public-description]]</p>\n<hr />\n</div>\n") + 
      "\n" + 
      ((!guard((context != null) ? context['singlePost'] : null) && guard((context != null && context['posts'] != null) ? context['posts']['length'] : null)) ?
        "\n<div class=\"btn-toolbar justify-content-end mb-3\">\n<div class=\"me-2\">\n<div component=\"category/dropdown\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n<span class=\"d-none d-md-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-list text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[unread:all-categories]]</span>") + 
          "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n<li role=\"presentation\" class=\"category\" data-cid=\"all\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n<div class=\"flex-grow-1\">[[unread:all-categories]]</div>\n<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n</a>\n</li>\n" + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n</div>\n<div class=\"btn-group bottom-sheet\" component=\"post-queue/bulk-actions\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle d-flex align-items-center gap-2\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-clone text-primary\"></i><span class=\"fw-semibold\"> [[post-queue:bulk-actions]]</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm dropdown-menu-end\" role=\"menu\">\n" + 
          (guard((context != null) ? context['canAccept'] : null) ?
            "\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"accept-all\" role=\"menuitem\">[[post-queue:accept-all]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"accept-selected\" role=\"menuitem\">[[post-queue:accept-selected]]</a></li>\n<li class=\"dropdown-divider\"></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-all\" role=\"menuitem\">[[post-queue:reject-all]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:reject-selected]]</a></li>\n" :
            "\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-all\" role=\"menuitem\">[[post-queue:remove-all]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:remove-selected]]</a></li>\n") + 
          "\n</ul>\n</div>\n</div>\n" :
        "") + 
      "\n<div class=\"post-queue posts-list\">\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "\n<div class=\"alert alert-info d-flex align-items-md-center d-flex flex-column flex-md-row\">\n<p class=\"mb-md-0\">[[post-queue:no-single-post]]</p>\n<div class=\"d-grid ms-md-auto\">\n<a class=\"btn btn-sm btn-primary flex-shrink text-nowrap\" href=\".\">[[post-queue:back-to-list]]</a>\n</div>\n</div>\n" :
            "\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x fa-seedling\"></i>\n</div>\n[[post-queue:no-queued-posts]]\n</div>\n</div>\n") + 
          "\n") + 
      "\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
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
      "\n</nav>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" role=\"menuitem\" href=\"#\">\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n<div class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"card mb-4\" data-id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">\n<div class=\"row g-0\">\n<div class=\"col-lg-3 bg-card-cap rounded-start\">\n<ul class=\"list-unstyled ps-0 mb-0 border-end h-100\">\n<li class=\"card-body border-bottom position-relative\">\n" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "" :
            "\n<input id=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
              "\" type=\"checkbox\" class=\"form-check-input\" autocomplete=\"off\" />\n") + 
          "\n<label for=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" class=\"small stretched-link\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:reply]]" :
            "[[post-queue:topic]]") + 
          "\n</label>\n</li>\n<li class=\"card-body d-flex flex-column gap-1 border-bottom\">\n<div class=\"d-flex text-xs fw-semibold align-items-center\">\n[[post-queue:user]]\n" + 
          (((guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) || guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null)) || guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null)) ?
            "\n<div class=\"ms-auto btn-group bottom-sheet\">\n<button href=\"#\" class=\"btn btn-ghost btn-sm ff-secondary border text-xs dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">[[global:actions]]</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['view:users:info'] : null) ?
                "\n<li><a class=\"dropdown-item rounded-1\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
                  "/info\" role=\"menuitem\">[[user:account-info]]</a></li>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
                "\n<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                    "hidden" :
                    "") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"ban\" role=\"menuitem\">[[user:ban-account]]</a></li>\n<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                    "" :
                    "hidden") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unban\" role=\"menuitem\">[[user:unban-account]]</a></li>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null) ?
                "\n<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                    "hidden" :
                    "") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"mute\" role=\"menuitem\">[[user:mute-account]]</a></li>\n<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                    "" :
                    "hidden") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unmute\" role=\"menuitem\">[[user:unmute-account]]</a></li>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
                "\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-account\" role=\"menuitem\">[[user:delete-account-as-admin]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-content\" role=\"menuitem\">[[user:delete-content]]</a></li>\n<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-all\" role=\"menuitem\">[[user:delete-all]]</a></li>\n" :
                "") + 
              "\n</ul>\n</div>\n" :
            "") + 
          "\n</div>\n<div class=\"small\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            "\n<a class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              " " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "</a>\n" :
            "\n" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\n") + 
          "\n</div>\n<div>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['postcount'] : null)) + 
          "\" class=\"fw-bold\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['postcount'] : null)])) + 
          "</span>\n<span class=\"text-lowercase fw-normal\">[[global:posts]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['reputation'] : null)) + 
          "\" class=\"fw-bold\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['reputation'] : null)])) + 
          "</span>\n<span class=\"text-lowercase fw-normal\">[[global:reputation]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<span class=\"text-lowercase fw-normal\">[[user:joined]]</span>\n<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['joindateISO'] : null)) + 
          "\" class=\"timeago fw-bold\"></span>\n</span>\n</div>\n</li>\n<li class=\"card-body border-bottom\">\n<div class=\"text-xs fw-semibold mb-1\">[[post-queue:when]]</div>\n<span class=\"small timeago\" title=" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['timestampISO'] : null)) + 
          "></span>\n</li>\n<li class=\"card-body border-bottom\">\n<div class=\"text-xs fw-semibold mb-1\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:topic]]" :
            "[[post-queue:title]]") + 
          "\n</div>\n<span class=\"small topic-title text-break\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "\n<div class=\"d-flex flex-column align-items-start gap-1\">\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
              "</a>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n<span class=\"text-lowercase fw-normal\">[[global:lastpost]]</span>\n<span title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['lastposttimeISO'] : null)) + 
              "\" class=\"timeago fw-bold\"></span>\n</span>\n</div>\n" :
            "") + 
          "\n<span class=\"title-text\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
          "</span>\n</span>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "" :
            "\n<div class=\"topic-title-editable hidden\">\n<input class=\"form-control\" type=\"text\" value=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
              "\"/>\n</div>\n") + 
          "\n</li>\n<li class=\"card-body border-bottom\">\n<div class=\"text-xs fw-semibold mb-1\">\n[[post-queue:category]]\n</div>\n<div class=\"topic-category small\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">\n<div class=\"category-item d-inline-block\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n</div>\n</a>\n</div>\n</li>\n<li class=\"card-body\">\n" + 
          (guard((context != null) ? context['canAccept'] : null) ?
            "\n<div class=\"row row-cols-2 g-1\">\n<div class=\"col d-grid\">\n<button class=\"btn btn-success btn-sm\" data-action=\"accept\"><i class=\"fa fa-fw fa-check\"></i> [[post-queue:accept]] </button>\n</div>\n<div class=\"col d-grid\">\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:reject]]</button>\n</div>\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
                "" :
                "\n<div class=\"col d-grid\">\n<button class=\"btn btn-light btn-sm\" data-action=\"editTitle\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:title]]</button>\n</div>\n") + 
              "\n<div class=\"col d-grid\">\n<button class=\"btn btn-light btn-sm\" data-action=\"editContent\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:content]]</button>\n</div>\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['cid'] : null) ?
                "\n<div class=\"col d-grid\">\n<button class=\"btn btn-light btn-sm\" data-action=\"editCategory\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:category]]</button>\n</div>\n" :
                "") + 
              "\n<div class=\"col d-grid\">\n<button class=\"btn btn-light btn-sm\" data-action=\"notify\"><i class=\"fa fa-fw fa-bell-o\"></i> [[post-queue:notify]]</button>\n</div>\n</div>\n" :
            "\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:remove]]</button>\n") + 
          "\n</li>\n</ul>\n</div>\n<div class=\"col-lg-9 d-flex flex-column\">\n<div class=\"post-content mb-auto text-break p-3 pb-0 h-100\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['content'] : null)) + 
          "</div>\n<div class=\"post-content-editable flex-grow-1 hidden\">\n<textarea class=\"form-control w-100 h-100 p-3\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['rawContent'] : null)) + 
          "</textarea>\n</div>\n<div component=\"post-queue/link-container\" class=\"hidden border-top mx-3 py-3\">\n<label class=\"text-secondary form-text mb-2\">[[post-queue:links-in-this-post]]</label>\n<ul component=\"post-queue/link-container/list\" class=\"text-sm\"></ul>\n</div>\n</div>\n</div>\n</div>\n";
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
    }
  };

  return compiled;
})
