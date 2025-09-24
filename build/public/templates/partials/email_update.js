
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
    return "<div>\n" + 
      (guard((context != null) ? context['hasPending'] : null) ?
        "\n<div class=\"alert alert-info\">\n<p>[[user:emailUpdate.pending]]</p>\n</div>\n" :
        "") + 
      "\n<p>[[user:emailUpdate.intro]]</p>\n" + 
      (guard((context != null) ? context['requireEmailAddress'] : null) ?
        "\n<p>[[user:emailUpdate.required]]</p>\n" :
        "\n<p>[[user:emailUpdate.optional]]</p>\n") + 
      "\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email\">[[global:email]]</label>\n<input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" placeholder=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" value=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" />\n<p class=\"form-text\">[[user:emailUpdate.change-instructions]]</p>\n</div>\n" + 
      (guard((context != null) ? context['issuePasswordChallenge'] : null) ?
        "\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"password\">[[register:password]]</label>\n<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" />\n<p class=\"form-text\">[[user:emailUpdate.password-challenge]]</p>\n</div>\n" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
