
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">[[topic:thread-tools.manage-editors]]</h5>\n<div class=\"card-body\">\n<p>\n[[topic:manage-editors-instruction]]\n</p>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"username\"><strong>[[user:username]]</strong></label>\n<div class=\"input-group\">\n<input id=\"username\" type=\"text\" class=\"form-control\" name=\"username\">\n<span class=\"input-group-text\" type=\"button\">\n<i class=\"fa fa-search\"></i>\n</span>\n</div>\n</div>\n<div class=\"d-flex flex-wrap\" component=\"topic/editors\">\n" + 
      compiled.blocks['editors'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"manage_editors_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"manage_editors_commit\">[[global:save]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    'editors': function editors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['editors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
          __escape(guard((context != null && context['editors'] != null && context['editors'][key0] != null) ? context['editors'][key0]['uid'] : null)) + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['editors'] != null && context['editors'][key0] != null) ? context['editors'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['editors'] != null && context['editors'][key0] != null) ? context['editors'][key0]['username'] : null)) + 
          "</a>\n<button class=\"btn btn-ghost btn-sm p-0 remove-user-icon\">\n<i class=\"fa fa-fw fa-times\"></i>\n</button>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
