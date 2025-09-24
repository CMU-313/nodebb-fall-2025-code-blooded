
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">\n[[topic:thread-tools.tag]]\n</h5>\n<div class=\"card-body d-flex flex-column gap-2\">\n" + 
      (guard((context != null) ? context['tagWhitelist'] : null) ?
        "\n<div class=\"d-flex flex-column gap-1\">\n<span>[[tags:tag-whitelist]]</span>\n<div>\n" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"tag-topic-cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"tag-topic-commit\">[[global:save]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<span class=\"badge bg-info\">" + 
          __escape(guard(value)) + 
          "</span>\n";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"fork-title\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></label>\n<input class=\"tags\" type=\"text\" placeholder=\"[[tags:enter-tags-here, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['maximumTagLength'] : null)) + 
          "]]\" />\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
