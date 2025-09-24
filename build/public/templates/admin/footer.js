
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
    return "</div> <!-- #content end-->\n</div>\n<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\n<div class=\"bottombar-nav p-2 border-top text-bg-light d-flex justify-content-between align-items-center w-100\">\n<div class=\"\">\n<a href=\"#\" role=\"button\" class=\"p-2 nav-link\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\n<i class=\"fa fa-fw fa-lg fa-bars\"></i>\n</a>\n</div>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\n<div class=\"\">\n<div component=\"toaster/tray\" class=\"alert-window fixed-bottom mb-5 mb-md-2 me-2 me-md-5 ms-auto\" style=\"width:300px; z-index: 1090;\">\n<div id=\"reconnect-alert\" class=\"alert alert-dismissible alert-warning fade hide\" component=\"toaster/toast\">\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-hidden=\"true\"></button>\n<p class=\"mb-0\">[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\n</div>\n</div>\n</div>\n") + 
      "\n<script>\nif (document.readyState === 'loading') {\ndocument.addEventListener('DOMContentLoaded', prepareFooter);\n} else {\nprepareFooter();\n}\nfunction prepareFooter() {\n$(document).ready(function () {\napp.coldLoad();\n});\n}\n</script>\n</body>\n</html>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
