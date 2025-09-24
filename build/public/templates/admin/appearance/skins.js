
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
    return "<div id=\"skins\" class=\"d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"d-flex flex-wrap gap-3 align-items-center\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/appearance/skins:skins]]</h4>\n<ul class=\"nav nav-pills d-flex gap-1 text-sm\">\n<li class=\"nav-item\"><a href=\"#\" class=\"nav-link active px-2 py-1\" data-bs-target=\"#skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:bootswatch-skins]]</a></li>\n<li class=\"nav-item\"><a href=\"#\" class=\"nav-link px-2 py-1\" data-bs-target=\"#custom-skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:custom-skins]]</a></li>\n</ul>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<div data-type=\"bootswatch\" data-theme=\"\" data-css=\"\">\n<button data-action=\"use\" class=\"btn btn-primary btn-sm text-nowrap\" type=\"button\">[[admin/appearance/skins:revert-skin]]</button>\n</div>\n</div>\n</div>\n<div class=\"tab-content\">\n<div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"skins-tab\">\n<div class=\"skins px-2\">\n<div class=\"directory row text-center\" id=\"bootstrap_themes\">\n<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/skins:loading]]\n</div>\n</div>\n</div>\n<div class=\"tab-pane fade\" role=\"tabpanel\" id=\"custom-skins-tab\">\n<form role=\"form\" class=\"custom-skin-settings\">\n<div class=\"mb-3\" data-type=\"sorted-list\" data-sorted-list=\"custom-skin-list\" data-item-template=\"admin/partials/appearance/skins/item-custom-skin\" data-form-template=\"admin/partials/appearance/skins/form-custom-skin\">\n<input hidden=\"text\" name=\"custom-skin-list\">\n<div class=\"d-flex gap-1 mb-3 justify-content-between\">\n<button type=\"button\" data-type=\"add\" class=\"btn btn-sm btn-light\">[[admin/appearance/skins:add-skin]]</button>\n<button id=\"save-custom-skins\" class=\"btn btn-sm btn-primary\">[[admin/appearance/skins:save-custom-skins]]</button>\n</div>\n<ul data-type=\"list\" class=\"list-group mb-3\"></ul>\n</div>\n</form>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
