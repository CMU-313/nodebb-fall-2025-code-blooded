
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">Amount of Topics to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">Custom Category:</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n<p class=\"form-text\">Leave blank to dynamically pull from current category. If placed on a page other than a category will pull from all recent posts</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
