
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<form role=\"form\" class=\"mentions-settings\">\n<div id=\"general\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">General</h5>\n<div class=\"mb-3 form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"autofillGroups\" name=\"autofillGroups\" />\n<label for=\"autofillGroups\" class=\"form-check-label\">\n<span>Allow mentioning User Groups</span>\n</label>\n</div>\n<div class=\"mb-3 form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"overrideIgnores\" name=\"overrideIgnores\" />\n<label for=\"overrideIgnores\" class=\"form-check-label\">\n<span>Notify recipients of mentions even if topic is explictly ignored</span>\n</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"disableGroupMentions\">Select groups you wish to disable mentions</label>\n<select class=\"form-select\" id=\"disableGroupMentions\" name=\"disableGroupMentions\" multiple>\n" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"display\">Mentions will display ...</label>\n<select class=\"form-select\" id=\"display\" name=\"display\">\n<option value=\"\">... as written</option>\n<option value=\"fullname\">... as user&apos;s full name (if set)</option>\n<option value=\"username\">... as user&apos;s username</option>\n</select>\n</div>\n</div>\n<div id=\"restrictions\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">Restrictions</h5>\n<div class=\"mb-3\">\n<div class=\"mb-3 form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"disableFollowedTopics\" name=\"disableFollowedTopics\" />\n<label for=\"disableFollowedTopics\" class=\"form-check-label\">\n<span>Do not notify mentioned users in topics topics they already follow</span>\n</label>\n<p class=\"form-text\">This avoids the &quot;double notification&quot; for recipients.</p>\n</div>\n</div>\n<div class=\"mb-3\">\n<div class=\"mb-3 form-check\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"privilegedDirectReplies\" name=\"privilegedDirectReplies\" />\n<label for=\"privilegedDirectReplies\" class=\"form-check-label\">\n<span>Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>\n</label>\n</div>\n</div>\n</div>\n</form>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
