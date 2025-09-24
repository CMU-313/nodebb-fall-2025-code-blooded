
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
    return (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null) ? context['link'] : null) ?
            __escape(guard((context != null) ? context['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null))) + 
          "\" itemprop=\"url\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</a>\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
