
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\n<div component=\"topic/quickreply/container\" class=\"quick-reply d-flex gap-3 mb-4\">\n<div class=\"icon hidden-xs\">\n<a class=\"d-inline-block position-relative\" href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
            "<span component=\"user/status\" class=\"position-absolute top-100 start-100 border border-white border-2 rounded-circle status " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "\"><span class=\"visually-hidden\">[[global:" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "]]</span></span>" :
            "") + 
          "\n</a>\n</div>\n<form class=\"flex-grow-1 d-flex flex-column gap-2\" method=\"post\" action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose\">\n<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n<div class=\"quickreply-message position-relative\">\n<textarea rows=\"4\" name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n</div>\n<div>\n<div class=\"d-flex justify-content-end gap-2\">\n<button type=\"button\" component=\"topic/quickreply/upload/button\" class=\"btn btn-ghost btn-sm border\"><i class=\"fa fa-upload\"></i></button>\n<button type=\"button\" component=\"topic/quickreply/expand\" class=\"btn btn-ghost btn-sm border\" title=\"[[topic:open-composer]]\"><i class=\"fa fa-expand\"></i></button>\n<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-sm btn-primary\">[[topic:post-quick-reply]]</button>\n</div>\n</div>\n</form>\n<form class=\"d-none\" component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n</form>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
