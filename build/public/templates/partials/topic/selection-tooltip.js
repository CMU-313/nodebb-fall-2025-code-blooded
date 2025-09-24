
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
    return "<div component=\"selection/tooltip\" class=\"selection-tooltip-container position-absolute card card-body p-1 rounded-1 mt-2\" style=\"z-index: 1;\">\n<button component=\"selection/tooltip/quote\" class=\"btn btn-sm btn-primary quote-tooltip-btn\">[[topic:quote]]</button>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
