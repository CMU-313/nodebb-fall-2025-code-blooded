
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
    return "<div class=\"tool-modal d-flex\">\n<div class=\"card shadow\">\n<h5 class=\"card-header\">[[topic:thread-tools.merge-topics]]</h5>\n<div class=\"card-body\">\n<p>\n[[topic:merge-topics-instruction]]\n</p>\n<p>\n<div class=\"input-group\">\n<input class=\"form-control topic-search-input\" type=\"text\">\n<span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n</div>\n<div class=\"quick-search-container dropdown-menu d-block p-2 hidden\">\n<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n<div class=\"quick-search-results-container\"></div>\n</div>\n</p>\n<p><strong>[[topic:merge-topic-list-title]]</strong></p>\n<ul class=\"topics-section\">\n" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<p>\n<strong>[[topic:merge-options]]</strong>\n</p>\n<form>\n<p>\n<input class=\"merge-main-topic-radio\" type=\"radio\" name=\"merge-topic-option\" checked=\"true\"> [[topic:merge-select-main-topic]]\n</p>\n<p>\n<select class=\"form-select merge-main-topic-select\">\n" + 
      iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</select>\n</p>\n<p>\n<input class=\"merge-new-title-radio\" type=\"radio\" name=\"merge-topic-option\"> [[topic:merge-new-title-for-topic]]\n</p>\n<p>\n<input class=\"merge-new-title-input form-control\" type=\"text\">\n</p>\n</form>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"merge_topics_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"merge_topics_confirm\" disabled>[[topic:thread-tools.merge]]</button>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"mb-1\">\n<div class=\"d-flex justify-content-between align-items-center gap-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></a>\n<button class=\"btn btn-sm btn-light\" data-remove-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\"><i class=\"fa fa-times text-danger\"></i></button>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
