
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" class=\"w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      " " + 
      __escape(guard((context != null) ? context['unread-class'] : null)) + 
      "\">\n<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n<div class=\"d-flex col-lg-7 gap-2 gap-lg-3\">\n<div class=\"flex-shrink-0\">\n" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "40px", "rounded-1"])) + 
      "\n</div>\n<div class=\"flex-grow-1 d-flex flex-wrap gap-1 me-0 me-lg-2\">\n<h2 class=\"title text-break fs-4 fw-semibold m-0 tracking-tight w-100\">\n" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null) ? context['link'] : null) ?
            __escape(guard((context != null) ? context['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null))) + 
          "\" itemprop=\"url\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</a>\n") + 
      "\n</h2>\n" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n<div class=\"description text-muted text-sm w-100 line-clamp-sm-5\">\n" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n<div class=\"d-flex gap-1 d-block d-lg-none w-100\">\n<span class=\"badge text-body border stats text-xs text-muted\">\n<i class=\"fa fa-fw fa-list\"></i>\n<span class=\"fw-normal\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalTopicCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n</span>\n<span class=\"badge text-body border stats text-xs text-muted\">\n<i class=\"fa-regular fa-fw fa-message\"></i>\n<span class=\"fw-normal\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalPostCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n</span>\n" + 
          (guard((context != null) ? context['teaser'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
              "\" class=\"border badge bg-transparent text-muted fw-normal timeago " + 
              ((!guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) || guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null)) ?
                "hidden" :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
              "\"></a>\n" :
            "") + 
          "\n</div>\n") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\n" + 
          (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
            "\n<ul class=\"list-unstyled category-children row row-cols-1 row-cols-md-2 g-2 my-1 w-100\">\n" + 
              compiled.blocks['./children'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n" :
            "") + 
          "\n") + 
      "\n</div>\n</div>\n" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n<div class=\"d-flex col-lg-5 col-12 align-content-stretch\">\n<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr;\">\n<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalTopicCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:topics]]</span>\n<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list\"></i>\n</div>\n<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalPostCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n<i class=\"d-xl-none fa-regular fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n</div>\n</div>\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\n<div component=\"topic/teaser\" class=\"teaser ps-5 ps-lg-0 col-lg-6 col-12 " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                "" :
                "d-none d-lg-block") + 
              "\">\n<div class=\"lastpost border-start border-2 lh-sm h-100\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "!important;\">\n" + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\n" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\n<div component=\"category/posts\" class=\"ps-2\">\n<div class=\"post-content overflow-hidden text-xs\">\n[[category:no-new-posts]]\n</div>\n</div>\n") + 
              "\n</div>\n</div>\n") + 
          "\n</div>\n") + 
      "\n</li>";
  }

  compiled.blocks = {
    './children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "" :
            "\n<li data-cid=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
              "\" class=\"category-children-item small\">\n<div class=\"d-flex gap-1\">\n<i class=\"fa fa-fw fa-caret-right text-primary\" style=\"line-height: var(--bs-body-line-height);\"></i>\n<a href=\"" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) :
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null))) + 
              "\" class=\"text-reset fw-semibold\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "</a>\n</div>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (index === 0 ?
            "\n<div component=\"category/posts\" class=\"ps-2 text-xs d-flex flex-column h-100 gap-1\">\n<div class=\"text-nowrap text-truncate\">\n<a class=\"text-decoration-none avatar-tooltip\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
              "\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n<a class=\"permalink text-muted timeago text-xs\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\" aria-label=\"[[global:lastpost]]\"></a>\n</div>\n<div class=\"post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill\">\n<a class=\"stretched-link\" tabindex=\"-1\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\" aria-label=\"[[global:lastpost]]\"></a>\n" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n</div>\n</div>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
