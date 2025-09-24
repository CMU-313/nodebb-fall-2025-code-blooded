
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
    return "<div class=\"category\">\n" + 
      (guard((context != null) ? context['sidebar'] : null) ?
        "\n<ul class=\"list-unstyled d-flex flex-column\">\n" + 
          compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "\n<ul component=\"category\" class=\"topics-list list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
          __escape(guard((context != null) ? context['nextStart'] : null)) + 
          "\" data-set=\"" + 
          __escape(guard((context != null) ? context['set'] : null)) + 
          "\">\n" + 
          iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<li component=\"category/topic\" class=\"category-item hover-parent border-bottom py-3 py-lg-4 d-flex flex-column flex-lg-row align-items-start " + 
              __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
              "\" data-tid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
              "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n<link itemprop=\"url\" content=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" />\n<meta itemprop=\"name\" content=\"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
              "\" />\n<meta itemprop=\"itemListOrder\" content=\"descending\" />\n<meta itemprop=\"position\" content=\"" + 
              __escape(helper(context, helpers, 'increment', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null), "1"])) + 
              "\" />\n<a id=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" component=\"topic/anchor\"></a>\n<div class=\"d-flex p-0 col-12 col-lg-7 gap-2 gap-lg-3 pe-1 align-items-start " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                "mb-2 mb-lg-0" :
                "") + 
              "\">\n<div class=\"flex-shrink-0 position-relative\">\n<a class=\"d-inline-block text-decoration-none avatar-tooltip\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
              "\" href=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                "#") + 
              "\">\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "40px", guard((context != null) ? context['true'] : null)])) + 
              "\n</a>\n" + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "\n<div class=\"checkbox position-absolute top-100 start-50 translate-middle-x pt-2 m-0 d-none d-lg-flex\" style=\"max-width:max-content\">\n<i component=\"topic/select\" class=\"fa text-muted pointer fa-square-o p-1 hover-visible\"></i>\n</div>\n" :
                "") + 
              "\n</div>\n<div class=\"flex-grow-1 d-flex flex-wrap gap-1 position-relative\">\n<h3 component=\"topic/header\" class=\"title text-break fs-5 fw-semibold m-0 tracking-tight w-100 " + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "me-4 me-lg-0" :
                "") + 
              "\">\n<a class=\"text-reset\" href=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
                "#" :
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                    "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                    "")) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a>\n</h3>\n<span component=\"topic/labels\" class=\"d-flex flex-wrap gap-1 w-100\">\n<span component=\"topic/watched\" class=\"badge border border-gray-300 text-body " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['followed'] : null) ?
                "" :
                "hidden") + 
              "\">\n<i class=\"fa fa-bell-o\"></i>\n<span>[[topic:watching]]</span>\n</span>\n<span component=\"topic/ignored\" class=\"badge border border-gray-300 text-body " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['ignored'] : null) ?
                "" :
                "hidden") + 
              "\">\n<i class=\"fa fa-eye-slash\"></i>\n<span>[[topic:ignoring]]</span>\n</span>\n<span component=\"topic/scheduled\" class=\"badge border border-gray-300 text-body " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
                "" :
                "hidden") + 
              "\">\n<i class=\"fa fa-clock-o\"></i>\n<span>[[topic:scheduled]]</span>\n</span>\n<span component=\"topic/pinned\" class=\"badge border border-gray-300 text-body " + 
              ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
                "hidden" :
                "") + 
              "\">\n<i class=\"fa fa-thumb-tack\"></i>\n<span>" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
                "[[topic:pinned-with-expiry, " + 
                  __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
                  "]]" :
                "[[topic:pinned]]") + 
              "</span>\n</span>\n<span component=\"topic/locked\" class=\"badge border border-gray-300 text-body " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
                "" :
                "hidden") + 
              "\">\n<i class=\"fa fa-lock\"></i>\n<span>[[topic:locked]]</span>\n</span>\n<span component=\"topic/moved\" class=\"badge border border-gray-300 text-body " + 
              ((!guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) || (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) == "-1")) ?
                "hidden" :
                "") + 
              "\">\n<i class=\"fa fa-arrow-circle-right\"></i>\n<span>[[topic:moved]]</span>\n</span>\n" + 
              iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "<span class=\"lh-1\">" + 
                  __escape(guard(value)) + 
                  "</span>";
              }, function alt() {
                return "";
              }) + 
              "\n" + 
              (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
                "" :
                "\n" + 
                  __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null), "a", "border"])) + 
                  "\n") + 
              "\n<span data-tid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
              "\" component=\"topic/tags\" class=\"lh-1 tag-list d-flex flex-wrap gap-1 " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
                "" :
                "hidden") + 
              "\">\n" + 
              iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/tags/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
                  "\"><span class=\"badge border border-gray-300 fw-normal tag tag-class-" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
                  "\" data-tag=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['value'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
                  "</span></a>\n";
              }, function alt() {
                return "";
              }) + 
              "\n</span>\n<div class=\"d-flex gap-1 d-block d-lg-none w-100\">\n<span class=\"badge text-body border stats text-xs text-muted\">\n<i class=\"fa-regular fa-fw fa-message\"></i>\n<span component=\"topic/post-count\" class=\"fw-normal\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n</span>\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              ((guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null)) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) :
                "") + 
              "\" class=\"border badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
              ((guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) && !guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null)) ?
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) :
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null))) + 
              "\"></a>\n</div>\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" class=\"d-none d-lg-block badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
              "\"></a>\n</span>\n" + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "\n<div class=\"checkbox position-absolute top-0 end-0 m-0 d-flex d-lg-none\" style=\"max-width:max-content\">\n<i component=\"topic/select\" class=\"fa fa-square-o text-muted pointer p-1\"></i>\n</div>\n" :
                "") + 
              "\n</div>\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                "\n<a class=\"topic-thumbs position-relative text-decoration-none flex-shrink-0 d-none d-xl-block\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                    "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                    "") + 
                  "\" aria-label=\"[[topic:thumb-image]]\">\n<img class=\"topic-thumb rounded-1 bg-light\" style=\"width:auto;max-width: 5.33rem;height: 3.33rem;object-fit: contain;\" src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                  "\" alt=\"\"/>\n<span data-numthumbs=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null)) + 
                  "\" class=\"px-1 position-absolute bottom-0 end-0 badge rounded-0 border fw-semibold text-bg-light\" style=\"z-index: 1; border-top-left-radius: 0.25rem!important; border-bottom-right-radius: 0.25rem!important;\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null)) + 
                  "</span>\n</a>\n" :
                "") + 
              "\n</div>\n<div class=\"d-flex p-0 col-lg-5 col-12 align-content-stretch\">\n<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr 1fr;\">\n" + 
              (guard((context != null) ? context['reputation:disabled'] : null) ?
                "" :
                "\n<div class=\"stats-votes card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null), guard((context != null) ? context['0'] : null)])) + 
                  "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:votes]]</span>\n<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-chevron-up\"></i>\n</div>\n") + 
              "\n<div class=\"stats-postcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n<i class=\"d-xl-none fa-regular fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n</div>\n<div class=\"stats-viewcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:views]]</span>\n<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-eye\"></i>\n</div>\n</div>\n<div component=\"topic/teaser\" class=\"meta teaser ps-5 ps-lg-0 col-lg-6 col-12 " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                "" :
                "d-none d-lg-block") + 
              "\">\n<div class=\"lastpost border-start border-2 lh-sm h-100 d-flex flex-column gap-1\" style=\"border-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
              "!important;\">\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
                "\n<div class=\"ps-2 text-xs\">\n[[category:no-replies]]\n</div>\n" :
                "\n" + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                    "\n<div class=\"ps-2\">\n<a href=\"" + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
                        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
                        "#") + 
                      "\" class=\"text-decoration-none avatar-tooltip\" title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['displayname'] : null)) + 
                      "\">" + 
                      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
                      "</a>\n<a class=\"permalink text-muted timeago text-xs\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                      "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                      "\" aria-label=\"[[global:lastpost]]\"></a>\n</div>\n<div class=\"post-content text-xs ps-2 line-clamp-sm-2 lh-sm text-break position-relative flex-fill\">\n<a class=\"stretched-link\" tabindex=\"-1\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                      "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                      "\" aria-label=\"[[global:lastpost]]\"></a>\n" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                      "\n</div>\n" :
                    "") + 
                  "\n") + 
              "\n</div>\n</div>\n</div>\n</li>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</ul>\n") + 
      "\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"widget-topics\">\n<div class=\"d-flex flex-column gap-2\">\n<a class=\"topic-title fw-semibold fs-6 text-reset text-break d-block\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a>\n<div class=\"d-flex gap-2 align-items-center text-sm\">\n<a class=\"text-decoration-none avatar-tooltip\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n</a>\n<div class=\"post-author d-flex align-items-center gap-1\">\n<a class=\"lh-1 fw-semibold text-nowrap\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['displayname'] : null)) + 
          "</a>\n</div>\n<span class=\"timeago text-muted lh-1 text-nowrap\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
          "\"></span>\n</div>\n<div class=\"d-flex justify-content-between\">\n<div class=\"btn btn-link btn-sm text-body pe-none\"><i class=\"fa-fw fa-heart text-xs fa-regular text-muted\"></i> " + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)])) + 
          "</div>\n<div class=\"btn btn-link btn-sm text-body pe-none\"><i class=\"fa-fw fa-regular fa-message text-xs text-muted\"></i> " + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)])) + 
          "</div>\n<div class=\"btn btn-link btn-sm text-body pe-none\"><i class=\"fa-fw fa-regular fa-eye text-xs text-muted\"></i> " + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)])) + 
          "</div>\n</div>\n</div>\n" + 
          (index === length - 1 ?
            "" :
            "\n<hr/>\n") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
