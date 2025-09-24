
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
    return "<div class=\"form-group\">\n<label class=\"form-label\" for=\"expiry\">[[topic:pin-modal-expiry]]</label>\n<div class=\"d-flex gap-1\">\n<input id=\"expiry-date\" type=\"date\" class=\"form-control\" />\n<input id=\"expiry-time\" type=\"time\" class=\"form-control\" />\n</div>\n<p class=\"form-text\">[[topic:pin-modal-help]]</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
