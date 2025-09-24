
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
    return "<div class=\"flex-fill outgoing d-flex flex-column gap-3 align-items-center\">\n<h4>\n[[notifications:outgoing-link-message, " + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "]]\n</h4>\n<a href=\"" + 
      __escape(guard((context != null) ? context['outgoing'] : null)) + 
      "\" rel=\"nofollow noopener noreferrer\" class=\"btn btn-primary\">[[notifications:continue-to, " + 
      __escape(guard((context != null) ? context['outgoing'] : null)) + 
      "]]</a>\n<a href=\"#\" class=\"btn btn-warning\" onclick=\"history.back(); return false;\">[[notifications:return-to, " + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "]]</a>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
