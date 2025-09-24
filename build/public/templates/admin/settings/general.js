
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"site-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:site-settings]]\n</h5>\n<form>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"site-title\">[[admin/settings/general:title]]</label>\n<input id=\"site-title\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/settings/general:title.name]]\" data-field=\"title\" />\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"showSiteTitle\" data-field=\"showSiteTitle\" name=\"showSiteTitle\" />\n<label for=\"showSiteTitle\" class=\"form-check-label\">[[admin/settings/general:title.show-in-header]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"title:short\">[[admin/settings/general:title.short]]</label>\n<input id=\"title:short\" type=\"text\" class=\"form-control\" data-field=\"title:short\" />\n<p class=\"form-text\">[[admin/settings/general:title.short-placeholder]]</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"title:url\">[[admin/settings/general:title.url]]</label>\n<input id =\"title:url\" type=\"text\" class=\"form-control\" data-field=\"title:url\" />\n<p class=\"form-text\">\n[[admin/settings/general:title.url-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"browserTitle\">[[admin/settings/general:browser-title]]</label>\n<input id=\"browserTitle\" class=\"form-control\" type=\"text\" data-field=\"browserTitle\" />\n<p class=\"form-text\">\n[[admin/settings/general:browser-title-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"titleLayout\">[[admin/settings/general:title-layout]]</label>\n<input id=\"titleLayout\" class=\"form-control\" type=\"text\" data-field=\"titleLayout\" />\n<p class=\"form-text\">\n[[admin/settings/general:title-layout-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"description\">[[admin/settings/general:description]]</label>\n<input id=\"description\" type=\"text\" class=\"form-control\" data-field=\"description\" />\n<p class=\"form-text\">\n[[admin/settings/general:description.placeholder]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"keywords\">[[admin/settings/general:keywords]]</label>\n<input id=\"keywords\" type=\"text\" class=\"form-control\" data-field=\"keywords\" data-field-type=\"tagsinput\" />\n<p class=\"form-text\">[[admin/settings/general:keywords-placeholder]]</p>\n</div>\n<div class=\"mb-3\">\n<div class=\"mb-2\">\n<label class=\"form-label\" for=\"language\">[[admin/settings/general:default-language]]</label>\n<select id=\"language\" data-field=\"defaultLang\" class=\"form-select\">\n" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<p class=\"form-text\">\n[[admin/settings/general:default-language-help]]\n</p>\n<div class=\"\">\n<div class=\"form-check form-switch\">\n<input id=\"autoDetectLang\" class=\"form-check-input\" type=\"checkbox\" data-field=\"autoDetectLang\" " + 
      (guard((context != null) ? context['autoDetectLang'] : null) ?
        "checked" :
        "") + 
      "/>\n<label for=\"autoDetectLang\" class=\"form-check-label\">[[admin/settings/general:auto-detect]]</label>\n</div>\n</div>\n</div>\n</form>\n</div>\n<hr/>\n<div id=\"logo-and-icons\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:logo-and-icons]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"logoUrl\">[[admin/settings/general:logo.image]]</label>\n<div class=\"d-flex gap-1\">\n<input id=\"logoUrl\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/settings/general:logo.image-placeholder]]\" data-field=\"brand:logo\" />\n<input data-action=\"upload\" data-target=\"logoUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadlogo\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:logo.upload]]\" />\n<button data-action=\"removeLogo\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"brand:logo:url\">[[admin/settings/general:logo.url]]</label>\n<input id =\"brand:logo:url\" type=\"text\" class=\"form-control\" data-field=\"brand:logo:url\" />\n<p class=\"form-text\">\n[[admin/settings/general:logo.url-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"brand:logo:alt\">[[admin/settings/general:logo.alt-text]]</label>\n<input id =\"brand:logo:alt\" type=\"text\" class=\"form-control\" data-field=\"brand:logo:alt\" />\n<p class=\"form-text\">[[admin/settings/general:log.alt-text-placeholder]]</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"og_image\">og:image</label>\n<div class=\"d-flex gap-1\">\n<input id=\"og_image\" type=\"text\" class=\"form-control\" placeholder=\"\" data-field=\"og:image\" />\n<input data-action=\"upload\" data-target=\"og_image\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadOgImage\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:logo.upload]]\" />\n<button data-action=\"removeOgImage\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"og_image\">[[admin/settings/general:favicon]]</label>\n<div class=\"d-flex gap-1\">\n<input id=\"faviconUrl\" type=\"text\" class=\"form-control\" placeholder=\"favicon.ico\" data-field=\"brand:favicon\" data-action=\"upload\" data-target=\"faviconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadfavicon\" readonly />\n<input data-action=\"upload\" data-target=\"faviconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadfavicon\" data-help=\"0\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:favicon.upload]]\" />\n<button data-action=\"removeFavicon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"touchIconUrl\">[[admin/settings/general:touch-icon]]</label>\n<div class=\"d-flex gap-1\">\n<input id=\"touchIconUrl\" type=\"text\" class=\"form-control\" data-field=\"brand:touchIcon\" data-action=\"upload\" data-target=\"touchIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadTouchIcon\" readonly />\n<input data-action=\"upload\" data-target=\"touchIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadTouchIcon\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:touch-icon.upload]]\" />\n<button data-action=\"removeTouchIcon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n<p class=\"form-text\">\n[[admin/settings/general:touch-icon.help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"maskableIconUrl\">[[admin/settings/general:maskable-icon]]</label>\n<div class=\"d-flex gap-1\">\n<input id=\"maskableIconUrl\" type=\"text\" class=\"form-control\" data-field=\"brand:maskableIcon\" data-action=\"upload\" data-target=\"maskableIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadMaskableIcon\" readonly />\n<input data-action=\"upload\" data-target=\"maskableIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadMaskableIcon\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:touch-icon.upload]]\" />\n<button data-action=\"removeMaskableIcon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n<p class=\"form-text\">\n[[admin/settings/general:maskable-icon.help]]\n</p>\n</div>\n</div>\n<hr/>\n<div id=\"home-page\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:home-page]]</h5>\n<div class=\"\">\n<p>\n[[admin/settings/general:home-page-description]]\n</p>\n<form class=\"row\">\n<div class=\"col-sm-12\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"homePageRoute\">[[admin/settings/general:home-page-route]]</label>\n<select id=\"homePageRoute\" class=\"form-select\" data-field=\"homePageRoute\">\n" + 
      compiled.blocks['routes'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<div id=\"homePageCustom\" class=\"mb-3\" style=\"display: none;\">\n<label class=\"form-label\" for=\"homePageCustomInput\">[[admin/settings/general:custom-route]]</label>\n<input id=\"homePageCustomInput\" type=\"text\" class=\"form-control\" data-field=\"homePageCustom\"/>\n<p class=\"form-text\">[[user:custom-route-help]]</p>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"allowUserHomePage\" data-field=\"allowUserHomePage\">\n<label for=\"allowUserHomePage\" class=\"form-check-label\">[[admin/settings/general:allow-user-home-pages]]</label>\n</div>\n<div>\n<label class=\"form-label\" for=\"homePageTitle\">[[admin/settings/general:home-page-title]]</label>\n<input id=\"homePageTitle\" class=\"form-control\" type=\"text\" data-field=\"homePageTitle\">\n</div>\n</div>\n</form>\n</div>\n</div>\n<hr/>\n<div id=\"search-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:search]]</h5>\n<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n<label class=\"form-label\" for=\"searchDefaultIn\">[[admin/settings/general:search-default-in]]</label>\n<select id=\"searchDefaultIn\" class=\"form-select w-auto\" data-field=\"searchDefaultIn\">\n<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n<option value=\"titles\">[[search:in-titles]]</option>\n<option value=\"posts\">[[search:in-posts]]</option>\n<option value=\"categories\">[[search:in-categories]]</option>\n<option value=\"users\">[[search:in-users]]</option>\n<option value=\"tags\">[[search:in-tags]]</option>\n</select>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n<label class=\"form-label\" for=\"searchDefaultInQuick\">[[admin/settings/general:search-default-in-quick]]</label>\n<select id=\"searchDefaultInQuick\" class=\"form-select w-auto\" data-field=\"searchDefaultInQuick\">\n<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n<option value=\"titles\">[[search:in-titles]]</option>\n<option value=\"posts\">[[search:in-posts]]</option>\n</select>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n<label class=\"form-label\" for=\"post-sort-by\">[[admin/settings/general:search-default-sort-by]]</label>\n<select id=\"post-sort-by\" class=\"form-select w-auto\" data-field=\"searchDefaultSortBy\">\n<option value=\"relevance\">[[search:relevance]]</option>\n<option value=\"timestamp\">[[search:post-time]]</option>\n<option value=\"votes\">[[search:votes]]</option>\n<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n<option value=\"topic.title\">[[search:topic-title]]</option>\n<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n<option value=\"topic.votes\">[[search:topic-votes]]</option>\n<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n<option value=\"user.username\">[[search:username]]</option>\n<option value=\"category.name\">[[search:category]]</option>\n</select>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n<label class=\"form-label\" for=\"userSearchResultsPerPage\">[[admin/settings/user:user-search-results-per-page]]</label>\n<input id=\"userSearchResultsPerPage\" type=\"text\" class=\"form-control\" value=\"24\" data-field=\"userSearchResultsPerPage\" style=\"max-width: 64px;\">\n</div>\n</div>\n<hr/>\n<div id=\"outgoing-links\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:outgoing-links]]</h5>\n<form>\n<div class=\"form-check form-switch mb-3\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"useOutgoingLinksPage\" data-field=\"useOutgoingLinksPage\">\n<label for=\"useOutgoingLinksPage\" class=\"form-check-label\">[[admin/settings/general:outgoing-links.warning-page]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"outgoingLinks:whitelist\">[[admin/settings/general:outgoing-links.whitelist]]</label>\n<input id=\"outgoingLinks:whitelist\" type=\"text\" class=\"form-control\" data-field=\"outgoingLinks:whitelist\" data-field-type=\"tagsinput\" />\n</div>\n</form>\n</div>\n<hr/>\n<div id=\"site-colors\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:site-colors]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"themeColor\">[[admin/settings/general:theme-color]]</label>\n<input id=\"themeColor\" type=\"text\" class=\"form-control\" placeholder=\"#ffffff\" data-field=\"themeColor\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"backgroundColor\">[[admin/settings/general:background-color]]</label>\n<input id=\"backgroundColor\" type=\"text\" class=\"form-control\" placeholder=\"#ffffff\" data-field=\"backgroundColor\" />\n<p class=\"form-text\">\n[[admin/settings/general:background-color-help]]\n</p>\n</div>\n</div>\n<hr/>\n<div id=\"topic-tools\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:topic-tools]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"undoTimeout\">[[admin/settings/general:undo-timeout]]</label>\n<input id=\"undoTimeout\" type=\"text\" class=\"form-control\" data-field=\"undoTimeout\" />\n<p class=\"form-text\">\n[[admin/settings/general:undo-timeout-help]]\n</p>\n</div>\n</div>\n<hr/>\n<div id=\"post-sharing\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:post-sharing]]</h5>\n<div class=\"mb-3\">\n<div class=\"form-group\" id=\"postSharingNetworks\">\n" + 
      compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + 
      "\n<p class=\"form-text\">[[admin/settings/general:info-plugins-additional]]</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\n";
      }, function alt() {
        return "";
      });
    },
    'routes': function routes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['routes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['name'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'postSharing': function postSharing(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['postSharing'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"form-check form-switch mb-3\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" data-field=\"post-sharing-" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" name=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" " + 
          (guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['activated'] : null) ?
            "checked" :
            "") + 
          " />\n<label for=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" class=\"form-check-label\">\n<i class=\"fa-fw " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['class'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['name'] : null)) + 
          "\n</label>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
