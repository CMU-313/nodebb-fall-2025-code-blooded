
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
    return "<div class=\"row gy-2\">\n<div class=\"col-12 col-sm-8 col-md-6\">\n<div class=\"list-group\">\n" + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div class=\"col-12 col-sm-4 col-md-6\">\n<div class=\"list-group\">\n" + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\n<button type=\"button\" class=\"list-group-item\" data-action=\"upload\">\n[[user:upload-new-picture]]\n</button>\n" :
        "") + 
      "\n<button type=\"button\" class=\"list-group-item\" data-action=\"upload-url\">\n[[user:upload-new-picture-from-url]]\n</button>\n" + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\n<button type=\"button\" class=\"list-group-item\" data-action=\"remove-uploaded\">\n[[user:remove-uploaded-picture]]\n</button>\n" :
        "") + 
      "\n</div>\n</div>\n</div>\n<hr />\n<h4>[[user:avatar-background-colour]]</h4>\n<div class=\"d-flex gap-2\">\n<a href=\"#\" class=\"lh-1 p-1\" data-bg-color=\"transparent\"><i class=\"fa-solid fa-2x fa-ban text-secondary\"></i></a>\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button type=\"button\" class=\"list-group-item d-flex p-3\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\n<div class=\"flex-shrink-0\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['pictures'] != null) ? context['pictures'][key0] : null), "48px", guard((context != null) ? context['true'] : null)])) + 
          "\n</div>\n<div class=\"flex-grow-1 ms-3 align-self-center fs-5 text-start\">\n" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['username'] : null)) + 
          "\n</div>\n</button>\n";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"#\" class=\"lh-1 p-1\" data-bg-color=\"" + 
          __escape(guard(value)) + 
          "\" style=\"color: " + 
          __escape(guard(value)) + 
          ";\"><i class=\"fa-solid fa-2x fa-circle\"></i></a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
