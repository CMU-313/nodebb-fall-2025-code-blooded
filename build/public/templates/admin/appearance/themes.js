
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/appearance/themes:themes]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<button id=\"revert_theme\" class=\"btn btn-primary btn-sm text-nowrap\">[[admin/appearance/themes:revert-theme]]</button>\n</div>\n</div>\n<div id=\"themes\" class=\"themes px-2\">\n<div class=\"directory row text-center\" id=\"installed_themes\">\n<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/themes:checking-for-installed]]\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
