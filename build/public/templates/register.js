
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
    return "<div data-widget-area=\"header\">\n" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row register flex-fill\">\n<div class=\"d-flex flex-column gap-2 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<h2 class=\"tracking-tight fw-semibold text-center\">[[global:register]]</h2>\n<div class=\"row justify-content-center gap-5\">\n<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n<div class=\"register-block\">\n<form component=\"register/local\" class=\"d-flex flex-column gap-3\" role=\"form\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register\" method=\"post\">\n<div class=\"mb-2 d-flex flex-column gap-2\">\n<label for=\"username\">[[register:username]]</label>\n<div class=\"d-flex flex-column\">\n<input class=\"form-control\" type=\"text\" placeholder=\"[[register:username-placeholder]]\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"nickname\" aria-required=\"true\" aria-describedby=\"username-notify\"/>\n<span class=\"register-feedback text-xs text-danger\" id=\"username-notify\" aria-live=\"polite\"></span>\n<span class=\"form-text text-xs\">[[register:help.username-restrictions, " + 
      __escape(guard((context != null) ? context['minimumUsernameLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumUsernameLength'] : null)) + 
      "]]</span>\n</div>\n</div>\n<div class=\"mb-2 d-flex flex-column gap-2\">\n<label for=\"password\">[[register:password]]</label>\n<div class=\"d-flex flex-column\">\n<input class=\"form-control\" type=\"password\" placeholder=\"[[register:password-placeholder]]\" name=\"password\" id=\"password\" autocomplete=\"new-password\" autocapitalize=\"off\" aria-required=\"true\" aria-describedby=\"password-notify\"/>\n<span class=\"register-feedback text-xs text-danger\" id=\"password-notify\" aria-live=\"polite\"></span>\n<span class=\"form-text text-xs\">[[register:help.minimum-password-length, " + 
      __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
      "]]</span>\n<p id=\"caps-lock-warning\" class=\"text-danger hidden\">\n<i class=\"fa fa-exclamation-triangle\"></i> [[login:caps-lock-enabled]]\n</p>\n</div>\n</div>\n<div class=\"mb-2 d-flex flex-column gap-2\">\n<label for=\"password-confirm\">[[register:confirm-password]]</label>\n<div>\n<input class=\"form-control\" type=\"password\" placeholder=\"[[register:confirm-password-placeholder]]\" name=\"password-confirm\" id=\"password-confirm\" autocomplete=\"new-password\" autocapitalize=\"off\" aria-required=\"true\" aria-describedby=\"password-confirm-notify\"/>\n<span class=\"register-feedback text-xs text-danger\" id=\"password-confirm-notify\" aria-live=\"polite\"></span>\n</div>\n</div>\n" + 
      compiled.blocks['regFormEntry'](helpers, context, guard, iter, helper) + 
      "\n<button class=\"btn btn-primary\" id=\"register\" type=\"submit\">[[register:register-now-button]]</button>\n<div class=\"alert alert-danger" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        " hidden") + 
      "\" id=\"register-error-notify\" role=\"alert\" aria-atomic=\"true\">\n<strong>[[error:registration-error]]</strong>\n<p class=\"mb-0\">" + 
      __escape(guard((context != null) ? context['error'] : null)) + 
      "</p>\n</div>\n<hr/>\n<span class=\"text-sm\">[[register:already-have-account]]</span>\n<a class=\"btn btn-outline-light text-body\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/login\">[[global:login]]</a>\n<input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\n<input id=\"noscript\" type=\"hidden\" name=\"noscript\" value=\"true\" />\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n</form>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\n<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n<div class=\"alt-register-block d-flex flex-column gap-2\">\n<label>[[register:alternative-registration]]</label>\n<ul class=\"alt-logins list-unstyled\">\n" + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div data-widget-area=\"footer\">\n" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'regFormEntry': function regFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['regFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"mb-2 regFormEntry d-flex flex-column gap-2 " + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\">\n<label for=\"" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['inputId'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['label'] : null)) + 
          "</label>\n<div>" + 
          guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['html'] : null) + 
          "</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          " mb-2\">\n<a class=\"btn btn-outline-light d-flex align-items-center\" rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['url'] : null)) + 
          "\">\n" + 
          (guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['svg'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['svg'] : null)) + 
              "\n" :
            "\n<i class=\"flex-shrink-0 " + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['normal'] : null)) + 
              "\" style=\"color:" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['color'] : null)) + 
              ";\"></i>\n") + 
          "\n" + 
          (guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['register'] : null) ?
            "\n<div class=\"flex-grow-1 text-body text-sm\">" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['register'] : null)) + 
              "</div>\n" :
            "") + 
          "\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
