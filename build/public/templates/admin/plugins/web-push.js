
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
    return "<div class=\"acp-page-container\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<form role=\"form\" class=\"web-push-settings\">\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">Settings</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maxLength\">Maximum length</label>\n<input type=\"number\" min=\"0\" max=\"4096\" id=\"maxLength\" name=\"maxLength\" title=\"Maximum message length\" class=\"form-control\" placeholder=\"256\">\n<p class=\"form-text\">\nAdditional characters beyond this specified length will be truncated.\nDue to a software limitation, if the message body is greater than 4096 bytes, the message itself will be an attachment in the push notification.\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"badge\">Badge URL</label>\n<input type=\"text\" id=\"badge\" name=\"badge\" title=\"Badge\" class=\"form-control\" placeholder=\"https://...\">\n<p class=\"form-text\">\nOptional — overrides the badge for messages sent (usually seen in the notification bar on mobile devices)\nBy default, the site's configured \"touch icon\" is sent.\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"icon\">Icon URL</label>\n<input type=\"text\" id=\"icon\" name=\"icon\" title=\"Icon\" class=\"form-control\" placeholder=\"https://...\">\n<p class=\"form-text\">\nOptional — overrides the icon for messages sent (can be used for branding, etc.)\nBy default, the site's configured \"touch icon\" is sent.\n</p>\n</div>\n</div>\n</form>\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">Users</h5>\n<table class=\"table\">\n<thead>\n<tr>\n<th>User</th>\n<th>Devices</th>\n</tr>\n</thead>\n<tbody>\n" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td>\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "24px", guard((context != null) ? context['false'] : null)])) + 
          "\n" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\n</td>\n<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['deviceCount'] : null)) + 
          "</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
