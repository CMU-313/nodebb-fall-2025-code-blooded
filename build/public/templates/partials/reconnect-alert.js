
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
    return "<div id=\"reconnect-alert\" class=\"alert alert-dismissible alert-warning fade hide\" component=\"toaster/toast\">\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-hidden=\"true\"></button>\n<p class=\"mb-0\">[[global:reconnecting-message, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
