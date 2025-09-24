
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
    return "<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/groups/" + 
      __escape(guard((context != null) ? context['slug'] : null)) + 
      "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
      __escape(guard((context != null) ? context['textColor'] : null)) + 
      ";background-color: " + 
      __escape(guard((context != null) ? context['labelColor'] : null)) + 
      ";\"><i class=\"fa " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) + 
          (guard((context != null) ? context['userTitle'] : null) ?
            " me-1" :
            "") :
        "hidden") + 
      "\"></i><span class=\"badge-text align-text-bottom\">" + 
      (guard((context != null) ? context['userTitle'] : null) ?
        __escape(guard((context != null) ? context['userTitle'] : null)) :
        "") + 
      "</span></a>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
