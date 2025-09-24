
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
      "\n</div>\n<div class=\"row login flex-fill\">\n<div class=\"d-flex flex-column gap-2 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<h2 class=\"tracking-tight fw-semibold text-center\">[[global:login]]</h2>\n<div class=\"row justify-content-center gap-5\">\n" + 
      (guard((context != null) ? context['allowLocalLogin'] : null) ?
        "\n<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n<div class=\"login-block\">\n<form class=\"d-flex flex-column gap-3\" role=\"form\" method=\"post\" id=\"login-form\">\n<div class=\"mb-2 d-flex flex-column gap-2\">\n<label for=\"username\">" + 
          __escape(guard((context != null) ? context['allowLoginWith'] : null)) + 
          "</label>\n<input class=\"form-control\" type=\"text\" placeholder=\"" + 
          __escape(guard((context != null) ? context['allowLoginWith'] : null)) + 
          "\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"nickname\" value=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\" aria-required=\"true\"/>\n</div>\n<div class=\"mb-2 d-flex flex-column gap-2\">\n<label for=\"password\">[[user:password]]</label>\n<div>\n<input class=\"form-control\" type=\"password\" placeholder=\"[[user:password]]\" name=\"password\" id=\"password\" autocomplete=\"current-password\" autocapitalize=\"off\" aria-required=\"true\"/>\n<p id=\"caps-lock-warning\" class=\"text-danger hidden text-sm mb-0 form-text\" aria-live=\"polite\" role=\"alert\" aria-atomic=\"true\">\n<i class=\"fa fa-exclamation-triangle\"></i> [[login:caps-lock-enabled]]\n</p>\n</div>\n" + 
          (guard((context != null) ? context['allowPasswordReset'] : null) ?
            "\n<div>\n<a id=\"reset-link\" class=\"text-sm text-reset text-decoration-underline\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/reset\">[[login:forgot-password]]</a>\n</div>\n" :
            "") + 
          "\n</div>\n" + 
          compiled.blocks['loginFormEntry'](helpers, context, guard, iter, helper) + 
          "\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n<input type=\"hidden\" name=\"noscript\" id=\"noscript\" value=\"true\" />\n<button class=\"btn btn-primary\" id=\"login\" type=\"submit\">[[global:login]]</button>\n<div class=\"form-check mb-2\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"remember\" id=\"remember\" checked />\n<label class=\"form-check-label\" for=\"remember\">[[login:remember-me]]</label>\n</div>\n<div class=\"alert alert-danger " + 
          (guard((context != null) ? context['error'] : null) ?
            "" :
            " hidden") + 
          "\" id=\"login-error-notify\" role=\"alert\" aria-atomic=\"true\">\n<strong>[[login:failed-login-attempt]]</strong>\n<p class=\"mb-0\">" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>\n</div>\n<hr/>\n" + 
          (guard((context != null) ? context['allowRegistration'] : null) ?
            "\n<span class=\"text-sm\">[[login:dont-have-account]]</span>\n<a class=\"btn btn-outline-light text-body\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/register\">[[register:register]]</a>\n" :
            "") + 
          "\n</form>\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\n<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n<div class=\"alt-login-block d-flex flex-column gap-2\">\n<label>[[login:alternative-logins]]</label>\n<ul class=\"alt-logins list-unstyled\">\n" + 
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
    'loginFormEntry': function loginFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['loginFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"mb-2 loginFormEntry d-flex flex-column gap-2 " + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['styleName'] : null)) + 
          "\">\n<label for=\"" + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['inputId'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['label'] : null)) + 
          "</label>\n<div>" + 
          guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['html'] : null) + 
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
          (guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['login'] : null) ?
            "\n<div class=\"flex-grow-1 text-body text-sm\">" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['login'] : null)) + 
              "</div>\n" :
            "") + 
          "\n</a></li>\n";
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
