
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">\n[[topic:thread-tools.delete-posts]]\n</h5>\n<div class=\"card-body\">\n<p>\n[[topic:delete-posts-instruction]]\n</p>\n<p><strong><span id=\"pids\"></span></strong></p>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"delete_posts_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"delete_posts_confirm\" disabled>[[topic:delete]]</button>\n<button class=\"btn btn-danger btn-sm\" id=\"purge_posts_confirm\" disabled>[[topic:purge]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
