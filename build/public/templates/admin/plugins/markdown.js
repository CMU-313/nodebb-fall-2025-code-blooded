
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<form class=\"form markdown-settings\">\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">Parser</h5>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"xhtmlOut\" id=\"xhtmlOut\" />\n<label class=\"form-check-label\" for=\"xhtmlOut\">\nUse '/' to close single tags (<code>&lt;br /&gt;</code>)\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"breaks\" id=\"breaks\" />\n<label class=\"form-check-label\" for=\"breaks\">\nTreat newlines as single line breaks\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"typographer\" id=\"typographer\" />\n<label class=\"form-check-label\" for=\"typographer\">\nEnable smartypants and other sweet transforms (e.g. <code>(c)</code> &rarr; <code>&copy;</code>)\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"multimdTables\" id=\"multimdTables\" />\n<label class=\"form-check-label\" for=\"multimdTables\">\nAllow advanced table syntax\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"linkify\" id=\"linkify\" />\n<label class=\"form-check-label\" for=\"linkify\">\nAutoconvert url-like texts to links\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"allowRTLO\" id=\"allowRTLO\" />\n<label class=\"form-check-label\" for=\"allowRTLO\">\nAllow RTL override unicode in link content\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"checkboxes\" id=\"checkboxes\" />\n<label class=\"form-check-label\" for=\"checkboxes\">\nInterpret <code>[ ]</code> and <code>[x]</code> as checkboxes\n</label>\n</div>\n</div>\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">External Links</h5>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"externalMark\" id=\"externalMark\" />\n<label class=\"form-check-label\" for=\"externalMark\">\nAppend a <i class=\"fa fa-external-link small\"></i> to all external links\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"externalBlank\" id=\"externalBlank\" />\n<label class=\"form-check-label\" for=\"externalBlank\">\nOpen external links in a new tab/window\n</label>\n</div>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"nofollow\" id=\"nofollow\" />\n<label class=\"form-check-label\" for=\"nofollow\">\nTell web crawlers that external links are not to be followed\n</label>\n</div>\n</div>\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">Code Formatting</h5>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"highlight\" id=\"highlight\" />\n<label class=\"form-check-label\" for=\"highlight\">\nAutomatically detect and highlight code blocks\n</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"highlightTheme\">Use this theme for highlighted code blocks</label>\n<select class=\"form-select\" name=\"highlightTheme\" id=\"highlightTheme\">\n" + 
      compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"defaultHighlightLanguage\">\nDefault language for code blocks with no language defined\n</label>\n<input class=\"form-control\" placeholder=\"e.g. js\" type=\"text\" name=\"defaultHighlightLanguage\" id=\"defaultHighlightLanguage\" />\n<p class=\"form-text\">Leave blank to use auto-language detection</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"langPrefix\">\nPrefix for <code>code</code> blocks\n</label>\n<input class=\"form-control\" placeholder=\"language-\" type=\"text\" name=\"langPrefix\" id=\"langPrefix\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"hljsLanguages\">Apply syntax highlighting to the following languages</label>\n<select class=\"form-select\" multiple=\"true\" name=\"hljsLanguages\" id=\"hljsLanguages\" size=\"20\">\n<optgroup label=\"Pre-defined lists\">\n<option value=\"all\">All supported languages (greatest file size)</option>\n<option value=\"common\" selected>Common languages (a good compromise)</option>\n</optgroup>\n<optgroup label=\"Individual languages\">\n" + 
      compiled.blocks['hljsLanguages'](helpers, context, guard, iter, helper) + 
      "\n</optgroup>\n</select>\n<p class=\"form-text\">\nYou can use <code>ctrl</code> and <code>shift</code> to select/deselect multiple\nitems and select/deselect items in ranges. <em>(Default: \"Common languages\".)</em>\n</p>\n<p class=\"form-text\">\nYou are able to mix and match any of the items above, although \"All\" will include\neverything anyway.\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"highlightLinesLanguageList\">\nEnable line numbers for the following languages\n</label>\n<select class=\"form-select\" multiple=\"true\" name=\"highlightLinesLanguageList\" id=\"highlightLinesLanguageList\" size=\"20\">\n" + 
      iter(guard((context != null) ? context['hljsLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</select>\n<p class=\"form-text\">\nYou can use <code>ctrl</code> and <code>shift</code> to select/deselect multiple\nitems and select/deselect items in ranges.\n</p>\n</div>\n</div>\n<div class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">HTML Sanitization</h5>\n<div class=\"mb-3 form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" name=\"html\" id=\"html\" />\n<label class=\"form-check-label\" for=\"html\">\nAllow HTML\n</label>\n</div>\n<div class=\"alert alert-warning\">\n<strong><i class=\"fa fa-info-circle\"></i> History</strong>\n<p>\nAutomatic HTML sanitization is an important part of ensuring that\nyour users do not run arbitrary javascript or alter parts of the\npage that were not meant to be altered.\n</p>\n<p>\nThis used to be the sole line of defense from rogue HTML in user-generated content.\nHowever, NodeBB now comes with its own built-in HTML sanitizer so it is safe to disable this one if necessary.\n</p>\n</div>\n</div>\n</form>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'hljsLanguages': function hljsLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hljsLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
