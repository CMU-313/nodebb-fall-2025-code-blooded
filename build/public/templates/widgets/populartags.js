
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
    return "<div class=\"popular-tags d-flex flex-column gap-2 mb-3\">\n" + 
      ((guard((context != null) ? context['display'] : null) == "bars") ?
        "\n" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n" :
        "") + 
      "\n" + 
      ((guard((context != null) ? context['display'] : null) == "buttons") ?
        "\n<div class=\"tag-list row row-cols-2 gx-3 gy-2\">\n" + 
          iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n<div>\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
              "\" data-tag=\"" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
              "\" class=\"btn btn-ghost ff-base d-flex flex-column gap-1 align-items-start justify-content-start text-truncate p-2\">\n<div class=\"fw-semibold text-nowrap tag-item w-100 text-start text-truncate\">" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
              "</div>\n<div class=\"text-xs text-muted text-nowrap tag-topic-count\">[[global:x-topics, " + 
              __escape(helper(context, helpers, 'txEscape', [helper(context, helpers, 'formattedNumber', [guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)])])) + 
              "]]</div>\n</a>\n</div>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n" :
        "") + 
      "\n</div>\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\nfunction onLoad() {\nsetTimeout(function () {\n$('.popular-tags-bar').each(function () {\nconst bar = $(this);\nbar.css({ width: bar.attr('data-width') + '%' });\n});\n}, 100);\n}\nif (document.readyState === 'loading') {\ndocument.addEventListener('DOMContentLoaded', onLoad);\n} else {\nonLoad();\n}\n})();\n</script>";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex align-items-center gap-2\">\n<div class=\"w-75 p-1 border position-relative\" style=\"min-width: 0;\">\n<div class=\"position-absolute bg-info opacity-25 start-0 top-0\" style=\"width: 100%; height:100%; z-index: 0;\"></div>\n<div data-width=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['widthPercent'] : null)) + 
          "\" class=\"popular-tags-bar position-absolute bg-info opacity-50 start-0 top-0\" style=\"transition: width 750ms ease-out; width: 0%; height:100%; z-index: 0;\"></div>\n<a style=\"background-color: transparent!important; z-index: 1;\" class=\"d-inline-block w-100 text-decoration-none text-bg-info position-relative text-truncate align-middle\" href=\"" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "?tag=" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null))) + 
          "\"><span class=\"text-nowrap tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>\n</div>\n<div class=\"text-center fw-bold p-1 text-end w-25 tag-topic-count border rounded\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
