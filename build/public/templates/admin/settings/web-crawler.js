
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"crawlability-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/web-crawler:crawlability-settings]]</h5>\n<div>\n<label class=\"form-label\">[[admin/settings/web-crawler:robots-txt]]</label>\n<textarea class=\"form-control\" data-field=\"robots:txt\"></textarea>\n</div>\n</div>\n<hr/>\n<div id=\"sitemap-feed-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/web-crawler:sitemap-feed-settings]]</h5>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"feeds:disableRSS\" data-field=\"feeds:disableRSS\">\n<label for=\"feeds:disableRSS\" class=\"form-check-label\">[[admin/settings/web-crawler:disable-rss-feeds]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"feeds:disableSitemap\" data-field=\"feeds:disableSitemap\">\n<label for=\"feeds:disableSitemap\" class=\"form-check-label\">[[admin/settings/web-crawler:disable-sitemap-xml]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"sitemapTopics\">[[admin/settings/web-crawler:sitemap-topics]]</label>\n<input id=\"sitemapTopics\" class=\"form-control\" type=\"text\" data-field=\"sitemapTopics\" />\n</div>\n<p>\n<button id=\"clear-sitemap-cache\" class=\"btn btn-sm btn-warning\">[[admin/settings/web-crawler:clear-sitemap-cache]]</button>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/sitemap.xml\" target=\"_blank\" class=\"btn btn-sm btn-light\">[[admin/settings/web-crawler:view-sitemap]]</a>\n</p>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
