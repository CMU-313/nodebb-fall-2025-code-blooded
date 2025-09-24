
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
    return "<h3>[[register:terms-of-use]]</h3>\n<hr/>\n" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null));
  }

  compiled.blocks = {
    
  };

  return compiled;
})
