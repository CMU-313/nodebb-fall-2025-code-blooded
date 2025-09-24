
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">Amount of Topics to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">Time cutoff in months: (0 to disable)</label>\n<input type=\"text\" class=\"form-control\" name=\"cutoff\" placeholder=\"0\" />\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
