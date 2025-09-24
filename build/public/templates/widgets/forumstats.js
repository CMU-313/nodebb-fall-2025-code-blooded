
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
    return "<div class=\"d-flex forum-stats flex-wrap mb-3 gap-4\">\n<div class=\"d-flex flex-1 gap-4\">\n<div class=\"flex-1\">\n<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "</h4>\n<span class=\"text-secondary\">[[global:online]]</span>\n</div>\n</div>\n<div class=\"flex-1\">\n<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "</h4>\n<span class=\"text-secondary\">[[global:users]]</span>\n</div>\n</div>\n</div>\n<div class=\"d-flex flex-1 gap-4\">\n<div class=\"flex-1\">\n<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "</h4>\n<span class=\"text-secondary\">[[global:topics]]</span>\n</div>\n</div>\n<div class=\"flex-1\">\n<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "</h4>\n<span class=\"text-secondary\">[[global:posts]]</span>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
