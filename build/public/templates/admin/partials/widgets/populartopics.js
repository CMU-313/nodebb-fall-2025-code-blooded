
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">Amount of Topics to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">Select Duration:</label>\n<select name=\"duration\" class=\"form-select\">\n<option value=\"day\">Day</option>\n<option value=\"week\">Week</option>\n<option value=\"month\">Month</option>\n<option value=\"alltime\">Alltime</option>\n</select>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
