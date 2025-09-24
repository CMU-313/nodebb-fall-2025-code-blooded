
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
    return "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>NodeBB Web Installer</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"bootstrap.min.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"installer.css\">\n<script type=\"text/javascript\" async defer src=\"/assets/installer.min.js\"></script>\n</head>\n<body>\n<nav class=\"navbar navbar-expand-lg bg-light\">\n<div class=\"container-fluid\">\n<a class=\"navbar-brand\" href=\"#\">NodeBB</a>\n<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbar-menu\" aria-controls=\"navbar-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n<span class=\"navbar-toggler-icon\"></span>\n</button>\n<div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n<li class=\"nav-item\"><a class=\"nav-link active\" href=\"/\">Installer</a></li>\n<li class=\"nav-item\"><a class=\"nav-link\" href=\"https://docs.nodebb.org\" target=\"_blank\">Get Help</a></li>\n<li class=\"nav-item\"><a class=\"nav-link\" href=\"https://community.nodebb.org\" target=\"_blank\">Community</a></li>\n</ul>\n</div>\n</div>\n</nav>\n" + 
      (guard((context != null) ? context['installing'] : null) ?
        "" :
        "\n<div class=\"container " + 
          (guard((context != null) ? context['success'] : null) ?
            "hide" :
            "") + 
          "\">\n<p>\n<h1>Welcome to the NodeBB Installer</h1>\nYou are just a few steps away from launching your own NodeBB forum!\n</p>\n<form id=\"install\" action=\"/\" method=\"post\" autocomplete=\"off\">\n<input type=\"hidden\" name=\"csrf_token\" value=\"" + 
          __escape(guard((context != null) ? context['csrf_token'] : null)) + 
          "\" />\n" + 
          (guard((context != null) ? context['skipGeneralSetup'] : null) ?
            "" :
            "\n<div class=\"general\">\n<p>\n<h2><small>General Instance Setup</small></h2>\n<hr />\n</p>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"install:url\">Web Address (URL)</label>\n<input id=\"install:url\" type=\"text\" class=\"form-control\" name=\"url\" value=\"" + 
              (guard((context != null) ? context['url'] : null) ?
                __escape(guard((context != null) ? context['url'] : null)) :
                "") + 
              "\" placeholder=\"http://localhost:4567\" />\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"This is the address that resolves to your NodeBB forum. If no port is specified, <code>4567</code> will be used.\"></div>\n</div>\n</div>\n") + 
          "\n<div class=\"admin\">\n<p>\n<h2><small>Create an Administrator account</small></h2>\n<hr />\n</p>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"admin:username\">Username</label>\n<input id=\"admin:username\" type=\"text\" class=\"form-control\" name=\"admin:username\" value=\"" + 
          (guard((context != null) ? context['admin:username'] : null) ?
            __escape(guard((context != null) ? context['admin:username'] : null)) :
            "") + 
          "\" placeholder=\"Username\" autocomplete=\"off\"/>\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"Enter an <strong>alphanumeric username</strong>. Spaces between words are allowed. You can always change your username later on your profile page.\"></div>\n</div>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"admin:email\">Email Address</label>\n<input id=\"admin:email\" type=\"text\" class=\"form-control\" name=\"admin:email\" value=\"" + 
          (guard((context != null) ? context['admin:email'] : null) ?
            __escape(guard((context != null) ? context['admin:email'] : null)) :
            "") + 
          "\" placeholder=\"Email Address\" autocomplete=\"off\" />\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"Please enter your email address.\"></div>\n</div>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"admin:password\">Password</label>\n<input id=\"admin:password\" type=\"password\" class=\"form-control\" name=\"admin:password\" value=\"" + 
          (guard((context != null) ? context['admin:password'] : null) ?
            __escape(guard((context != null) ? context['admin:password'] : null)) :
            "") + 
          "\" placeholder=\"Password\" data-minimum-strength=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordStrength'] : null)) + 
          "\" data-minimum-length=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          "\" autocomplete=\"off\"/>\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"Use a combination of numbers, symbols, and different cases. You can change the strictness of password creation in the Admin Control Panel. Minimum " + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          " characters.\"></div>\n</div>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"admin:passwordConfirm\">Confirm Password</label>\n<input id=\"admin:passwordConfirm\" type=\"password\" class=\"form-control\" name=\"admin:passwordConfirm\" value=\"" + 
          (guard((context != null) ? context['admin:passwordConfirm'] : null) ?
            __escape(guard((context != null) ? context['admin:passwordConfirm'] : null)) :
            "") + 
          "\" placeholder=\"Confirm Password\" autocomplete=\"off\"/>\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"Please confirm your password.\"></div>\n</div>\n</div>\n" + 
          (guard((context != null) ? context['skipDatabaseSetup'] : null) ?
            "" :
            "\n<div class=\"database mb-3\">\n<p>\n<h2><small>Configure your database</small></h2>\n<hr />\n</p>\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"install:database\">Database Type</label>\n<select id=\"install:database\" class=\"form-select\" name=\"database\">\n<option value=\"mongo\">MongoDB</option>\n<option value=\"redis\">Redis</option>\n<option value=\"postgres\">PostgreSQL</option>\n</select>\n</div>\n<div class=\"col-sm-5 form-text\" data-help=\"Leave the fields blank to use the default settings.\">" + 
              (guard((context != null) ? context['error'] : null) ?
                "There was an error connecting to your database. Please try again." :
                "") + 
              "</div>\n</div>\n<div id=\"database-config\"></div>\n</div>\n") + 
          "\n<div class=\"row\">\n<div class=\"col-sm-7 col-12\">\n<div class=\"d-flex gap-2 mb-3\">\n" + 
          (guard((context != null) ? context['skipDatabaseSetup'] : null) ?
            "" :
            "\n<button id=\"test-database\" class=\"btn btn-light\">\n<div id=\"test-database-spinner\" class=\"spinner-border spinner-border-sm text-primary hidden\" role=\"status\"></div>\n<span>Test Database</span>\n</button>\n") + 
          "\n<button id=\"submit\" type=\"submit\" class=\"btn btn-primary\">Install NodeBB <i class=\"working hide\"></i></button>\n</div>\n<div id=\"database-success\" class=\"alert alert-success hidden\" role=\"alert\">Database connection successful!</div>\n<div id=\"database-error\" class=\"alert alert-danger hidden\" role=\"alert\"></div>\n<div id=\"database-full\" class=\"alert alert-warning hidden\" role=\"alert\"><pre></pre></div>\n</div>\n</div>\n</form>\n</div>\n") + 
      "\n" + 
      (guard((context != null) ? context['installing'] : null) ?
        "\n<div id=\"installing\" class=\"container\" data-url=\"" + 
          __escape(guard((context != null) ? context['launchUrl'] : null)) + 
          "\">\n<p>\n<h1>Hang tight! Your NodeBB is being installed.</h1>\n</p>\n<p class=\"lead\">This might take a few minutes, you will be redirected once your forum is ready.</p>\n<div class=\"progress\" style=\"height: 20px;\">\n<div class=\"progress-bar\" role=\"progressbar\" data-percent=\"" + 
          __escape(guard((context != null) ? context['percentInstalled'] : null)) + 
          "\" style=\"width: " + 
          __escape(guard((context != null) ? context['percentInstalled'] : null)) + 
          "%;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>\n</div>\n" :
        "") + 
      "\n<div class=\"hide\">\n" + 
      compiled.blocks['databases'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</body>\n</html>";
  }

  compiled.blocks = {
    'databases': function databases(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['databases'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div data-database=\"" + 
          __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['name'] : null)) + 
          "\">\n" + 
          iter(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['questions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<div class=\"row input-row\">\n<div class=\"col-sm-7 col-12 input-field\">\n<label class=\"form-label\" for=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['description'] : null)) + 
              "</label>\n<input id=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" type=\"" + 
              (guard((context != null) ? context['hidden'] : null) ?
                "password" :
                "text") + 
              "\" class=\"form-control\" name=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" placeholder=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" value=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" />\n</div>\n</div>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
