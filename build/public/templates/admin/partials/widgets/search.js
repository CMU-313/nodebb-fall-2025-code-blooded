
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
    return "<div class=\"form-check mb-3\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"enableQuickSearch\" name=\"enableQuickSearch\" />\n<label class=form-check-label\" for=\"enableQuickSearch\">Enable Quick Search</label>\n</div>\n<div class=\"form-check mb-3\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"showInControl\" name=\"showInControl\" />\n<label class=form-check-label\" for=\"showInControl\">Show In Control</label>\n</div>\n<div class=\"mb-3\">\n<label class=form-label\" for=\"defaultIn\">Default In</label>\n<select class=\"form-select\" id=\"defaultIn\" name=\"defaultIn\">\n<option value=\"titles\">[[search:in-titles]]</option>\n<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n<option value=\"posts\">[[global:posts]]</option>\n<option value=\"categories\">[[global:header.categories]]</option>\n<option value=\"users\">[[global:users]]</option>\n<option value=\"tags\">[[tags:tags]]</option>\n</select>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
