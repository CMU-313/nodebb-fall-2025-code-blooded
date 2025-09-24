
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
    return "<div class=\"overflow-hidden\">\n<ul id=\"recent_posts\" class=\"list-unstyled d-flex flex-column\" data-numposts=\"" + 
      __escape(guard((context != null) ? context['numPosts'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\nfunction onLoad() {\nvar replies = $('#recent_posts');\nvar recentPostsWidget = app.widgets.recentPosts;\nvar numPosts = parseInt(replies.attr('data-numposts'), 10) || 4;\nif (!recentPostsWidget) {\nrecentPostsWidget = {};\nrecentPostsWidget.onNewPost = function(data) {\nvar cid = replies.attr('data-cid');\nvar recentPosts = $('#recent_posts');\nif (!recentPosts.length) {\nreturn;\n}\nif (cid && parseInt(cid, 10) !== parseInt(data.posts[0].topic.cid, 10)) {\nreturn;\n}\napp.parseAndTranslate('widgets/partials/posts', {\nrelative_path: config.relative_path,\nposts: data.posts\n}, function(html) {\nprocessHtml(html);\nhtml.hide()\n.prependTo(recentPosts)\n.fadeIn();\nif (recentPosts.children().length > numPosts) {\nrecentPosts.children().last().remove();\n}\n});\n};\napp.widgets.recentPosts = recentPostsWidget;\nsocket.on('event:new_post', app.widgets.recentPosts.onNewPost);\n}\nfunction processHtml(html) {\nhtml.find('img:not(.not-responsive)').addClass('img-fluid');\nif ($.timeago) {\nhtml.find('span.timeago').timeago();\n}\n}\n}\nif (document.readyState === 'loading') {\ndocument.addEventListener('DOMContentLoaded', onLoad);\n} else {\nonLoad();\n}\n})();\n</script>";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"widget-posts d-flex flex-column gap-1\">\n<div class=\"d-flex gap-2 align-items-center text-sm\">\n<a class=\"text-decoration-none avatar-tooltip\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n</a>\n<div class=\"post-author d-flex align-items-center gap-1\">\n<a class=\"lh-1 fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n</div>\n<span class=\"timeago text-muted lh-1\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n<div class=\"line-clamp-6 text-sm text-break\">\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n<div class=\"text-end text-xs post-preview-footer\">\n<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post/" + 
          __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)])) + 
          "\">[[global:read-more]]</a>\n</div>\n" + 
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
