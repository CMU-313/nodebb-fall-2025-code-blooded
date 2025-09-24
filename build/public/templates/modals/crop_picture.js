
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
    return "<div id=\"crop-picture-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"crop-picture\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h3 id=\"crop-picture\">[[user:crop-picture]]</h3>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<div id=\"upload-progress-box\" class=\"progress hide\">\n<div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\n</div>\n</div>\n<div class=\"cropper\">\n<img id=\"cropped-image\" class=\"mw-100\" crossorigin=\"anonymous\" src=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" alt=\"\">\n</div>\n<hr />\n<div class=\"btn-group\">\n<button class=\"btn btn-primary rotate\" data-degrees=\"-45\"><i class=\"fa fa-rotate-left\"></i></button>\n<button class=\"btn btn-primary rotate\" data-degrees=\"45\"><i class=\"fa fa-rotate-right\"></i></button>\n</div>\n<div class=\"btn-group\">\n<button class=\"btn btn-primary flip\" data-option=\"-1\" data-method=\"scaleX\"><i class=\"fa fa-arrows-h\"></i></button>\n<button class=\"btn btn-primary flip\" data-option=\"-1\" data-method=\"scaleY\"><i class=\"fa fa-arrows-v\"></i></button>\n</div>\n<div class=\"btn-group\">\n<button class=\"btn btn-primary reset\"><i class=\"fa fa-refresh\"></i></button>\n</div>\n</div>\n<div class=\"modal-footer\">\n<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n<button class=\"btn btn-primary upload-btn " + 
      (guard((context != null) ? context['allowSkippingCrop'] : null) ?
        "" :
        "hidden") + 
      "\">[[user:upload-picture]]</button>\n<button class=\"btn btn-primary crop-btn\">[[user:upload-cropped-picture]]</button>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
