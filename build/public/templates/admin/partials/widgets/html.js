
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
    return "<div class=\"mb-3\">\n<textarea class=\"form-control\" rows=\"6\" name=\"html\" placeholder=\"Enter HTML\"></textarea>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">Category:</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n<p class=\"form-text\">Set the category IDs you want to display this widget on (separated by commas)</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">Topic:</label>\n<input type=\"text\" class=\"form-control\" name=\"tid\" placeholder=\"0\" />\n<p class=\"form-text\">Set the topic IDs you want to display this widget on (separated by commas)</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
