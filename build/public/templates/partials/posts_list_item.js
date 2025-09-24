
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
    return "<li component=\"post\" class=\"posts-list-item  " + 
      (guard((context != null) ? context['deleted'] : null) ?
        " deleted" :
        (guard((context != null && context['topic'] != null) ? context['topic']['deleted'] : null) ?
            " deleted" :
            "")) + 
      (guard((context != null && context['topic'] != null) ? context['topic']['scheduled'] : null) ?
        " scheduled" :
        "") + 
      "\" data-pid=\"" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n<hr/>\n<a class=\"topic-title fw-semibold fs-5 mb-2 text-reset text-break d-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null) ? context['pid'] : null)])) + 
      "\">\n" + 
      (guard((context != null) ? context['isMainPost'] : null) ?
        "<i class=\"fa fa-book text-muted\" title=\"[[topic:topic]]\"></i> " :
        "") + 
      __escape(guard((context != null && context['topic'] != null) ? context['topic']['title'] : null)) + 
      "\n</a>\n<div class=\"post-body d-flex flex-column gap-1 mb-2\">\n<div class=\"d-flex gap-2 post-info text-sm align-items-center\">\n<div class=\"post-author d-flex align-items-center gap-1\">\n<a class=\"lh-1 text-decoration-none\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\n<a class=\"lh-1 fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "</a>\n</div>\n<span class=\"timeago text-muted lh-1\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\n</div>\n<div component=\"post/content\" class=\"content text-sm text-break\">\n" + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "\n</div>\n</div>\n<div class=\"mb-3 d-flex flex-wrap gap-1 w-100\">\n" + 
      __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null) ? context['category'] : null), "a", "border"])) + 
      "\n<span data-tid=\"" + 
      __escape(guard((context != null && context['topic'] != null) ? context['topic']['tid'] : null)) + 
      "\" component=\"topic/tags\" class=\"lh-1 tag-list d-flex flex-wrap gap-1 " + 
      (guard((context != null && context['topic'] != null && context['topic']['tags'] != null) ? context['topic']['tags']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['./topic.tags'](helpers, context, guard, iter, helper) + 
      "\n</span>\n</div>\n</li>";
  }

  compiled.blocks = {
    './topic.tags': function topictags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['topic'] != null) ? context['topic']['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['topic'] != null && context['topic']['tags'] != null && context['topic']['tags'][key0] != null) ? context['topic']['tags'][key0]['valueEncoded'] : null)) + 
          "\"><span class=\"badge border border-gray-300 fw-normal tag tag-class-" + 
          __escape(guard((context != null && context['topic'] != null && context['topic']['tags'] != null && context['topic']['tags'][key0] != null) ? context['topic']['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['topic'] != null && context['topic']['tags'] != null && context['topic']['tags'][key0] != null) ? context['topic']['tags'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topic'] != null && context['topic']['tags'] != null && context['topic']['tags'][key0] != null) ? context['topic']['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
