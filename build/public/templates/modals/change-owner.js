
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">[[topic:thread-tools.change-owner]]</h5>\n<div class=\"card-body\">\n<p>\n[[topic:change-owner-instruction]]\n</p>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"username\"><strong>[[user:username]]</strong></label>\n<div class=\"input-group\">\n<input id=\"username\" type=\"text\" class=\"form-control\">\n<span class=\"input-group-text\" type=\"button\">\n<i class=\"fa fa-search\"></i>\n</span>\n</div>\n</div>\n<p>\n<strong><span id=\"pids\"></span></strong>\n</p>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"change_owner_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"change_owner_commit\" disabled>[[topic:change-owner]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
