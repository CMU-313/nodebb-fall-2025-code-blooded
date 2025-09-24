
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
    return "<div class=\"d-flex justify-content-between gap-2 align-items-center formatting-bar m-0\">\n<ul class=\"list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto\">\n" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null) ? context['canUploadImage'] : null) ?
        "\n<li title=\"[[modules:composer.upload-picture]]\">\n<button data-format=\"picture\" class=\"img-upload-btn btn btn-sm btn-link text-reset\" aria-label=\"[[modules:composer.upload-picture]]\">\n<i class=\"fa fa-file-image-o\"></i>\n</button>\n</li>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['canUploadFile'] : null) ?
        "\n<li title=\"[[modules:composer.upload-file]]\">\n<button data-format=\"upload\" class=\"file-upload-btn btn btn-sm btn-link text-reset\" aria-label=\"[[modules:composer.upload-file]]\">\n<i class=\"fa fa-file-o\"></i>\n</button>\n</li>\n" :
        "") + 
      "\n<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\n<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"hide\"/>\n</form>\n</ul>\n<div class=\"d-flex align-items-center gap-1\">\n<div class=\"draft-icon m-2 hidden-xs hidden-sm\"></div>\n<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"preview\">\n<i class=\"fa fa-eye\"></i>\n<span class=\"d-none d-xl-inline show-text\">[[modules:composer.show-preview]]</span>\n<span class=\"d-none d-xl-inline hide-text\">[[modules:composer.hide-preview]]</span>\n</button>\n" + 
      (guard((context != null) ? context['composer:showHelpTab'] : null) ?
        "\n<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"help\">\n<i class=\"fa fa-question\"></i>\n<span class=\"d-none d-xl-inline\">[[modules:composer.help]]</span>\n</button>\n" :
        "") + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['formatting'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['spacer'] : null) ?
            "\n<li class=\"small spacer\"></li>\n" :
            "\n" + 
              ((guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['desktop'] : null) && ((guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['main'] : null)) || (!guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['reply'] : null)))) ?
                "\n" + 
                  (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null) ? context['formatting'][key0]['dropdownItems']['length'] : null) ?
                    "\n<li class=\"dropdown dropdown-left bottom-sheet\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n<button class=\"btn btn-sm btn-link text-reset\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n</button>\n<ul class=\"dropdown-menu p-1\" role=\"menu\">\n" + 
                      iter(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['dropdownItems'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\n<li>\n<a href=\"#\" data-format=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['name'] : null)) + 
                          "\" class=\"dropdown-item rounded-1 position-relative\" role=\"menuitem\">\n<i class=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['className'] : null)) + 
                          " text-secondary\"></i> " + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['text'] : null)) + 
                          "\n" + 
                          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['badge'] : null) ?
                            "\n<span class=\"px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info\"></span>\n" :
                            "") + 
                          "\n</a>\n</li>\n";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n</ul>\n</li>\n" :
                    "\n<li title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n<button data-format=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['name'] : null)) + 
                      "\" class=\"btn btn-sm btn-link text-reset position-relative\" aria-label=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n" + 
                      (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['badge'] : null) ?
                        "\n<span class=\"px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info\"></span>\n" :
                        "") + 
                      "\n</button>\n</li>\n") + 
                  "\n" :
                "") + 
              "\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
