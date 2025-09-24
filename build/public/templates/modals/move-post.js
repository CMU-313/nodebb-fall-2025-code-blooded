
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">\n[[topic:thread-tools.move-posts]]\n</h5>\n<div class=\"card-body\">\n<p>\n[[topic:move-posts-instruction]]\n</p>\n<div>\n<label class=\"form-label\" for=\"topicId\"><strong>[[topic:topic-id]]</strong></label>\n<input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\n</div>\n<p>\n<strong><span id=\"pids\"></span></strong>\n</p>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
