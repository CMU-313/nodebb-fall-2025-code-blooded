
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
      "/tags/" + 
      __escape(guard((context != null) ? context['valueEncoded'] : null)) + 
      "\"><span class=\"badge border border-gray-300 text-xs tag tag-class-" + 
      __escape(guard((context != null) ? context['class'] : null)) + 
      "\" data-tag=\"" + 
      __escape(guard((context != null) ? context['value'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['valueEscaped'] : null)) + 
      "</span></a>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
