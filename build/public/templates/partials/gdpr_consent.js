
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
    return "<div class=\"mb-3\">\n<p class=\"lead\">[[user:consent.lead]]</p>\n<p>[[user:consent.intro]]</p>\n<div class=\"form-check mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\" role=\"switch\">\n<label class=\"form-check-label\" for=\"gdpr_agree_data\">[[register:gdpr-agree-data]]</label>\n</div>\n<p>\n[[user:consent.email-intro]]\n" + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\n[[user:consent.digest-frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\n" :
        "\n[[user:consent.digest-off]]\n") + 
      "\n</p>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\" role=\"switch\">\n<label class=\"form-check-label\" for=\"gdpr_agree_email\">[[register:gdpr-agree-email]]</label>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
