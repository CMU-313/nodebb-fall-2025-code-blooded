
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-file\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h5 class=\"modal-title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h5>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<form class=\"mb-3\" id=\"uploadForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\n<div>\n" + 
      (guard((context != null) ? context['description'] : null) ?
        "\n<label class=\"form-label\" for=\"fileInput\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</label>\n" :
        "") + 
      "\n<input type=\"file\" id=\"fileInput\" name=\"files[]\" " + 
      (guard((context != null) ? context['accept'] : null) ?
        "accept=\"" + 
          __escape(guard((context != null) ? context['accept'] : null)) + 
          "\"" :
        "") + 
      ">\n" + 
      (guard((context != null) ? context['showHelp'] : null) ?
        "\n<p class=\"form-text\">\n" + 
          (guard((context != null) ? context['accept'] : null) ?
            "\n[[global:allowed-file-types, " + 
              __escape(guard((context != null) ? context['accept'] : null)) + 
              "]]\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['fileSize'] : null) ?
            "<span id=\"file-size-block\">([[uploads:maximum-file-size, " + 
              __escape(guard((context != null) ? context['fileSize'] : null)) + 
              "]])</span>" :
            "") + 
          "\n</p>\n" :
        "") + 
      "\n</div>\n<input type=\"hidden\" id=\"params\" name=\"params\" />\n</form>\n<div id=\"upload-progress-box\" class=\"progress progress-striped hide mb-3\">\n<div id=\"upload-progress-bar\" class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\n<span class=\"sr-only\"> [[success:success]]</span>\n</div>\n</div>\n<div id=\"alert-status\" class=\"alert alert-info hide\"></div>\n<div id=\"alert-success\" class=\"alert alert-success hide\"></div>\n<div id=\"alert-error\" class=\"alert alert-danger hide\"></div>\n</div>\n<div class=\"modal-footer\">\n<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n<button id=\"fileUploadSubmitBtn\" class=\"btn btn-primary\">" + 
      __escape(guard((context != null) ? context['button'] : null)) + 
      "</button>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
