
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">Amount of Users to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numUsers\" placeholder=\"4\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-text\">Custom Category:</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n<p class=\"form-text\">Leave blank to to dynamically pull from current category</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
