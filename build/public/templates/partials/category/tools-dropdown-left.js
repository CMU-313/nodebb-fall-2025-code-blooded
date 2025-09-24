
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
    return (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools dropdown-left bottom-sheet\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[topic:thread-tools.title]]</span>\n<span component=\"topic/selected/badge\" class=\"badge rounded-pill bg-secondary\"></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a component=\"topic/mark-unread-for-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-inbox text-secondary\"></i> [[topic:thread-tools.markAsUnreadForAll]]\n</a>\n</li>\n<li>\n<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack text-secondary\"></i> [[topic:thread-tools.pin]]\n</a>\n</li>\n<li>\n<a component=\"topic/unpin\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90 text-secondary\"></i> [[topic:thread-tools.unpin]]\n</a>\n</li>\n<li>\n<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-lock text-secondary\"></i> [[topic:thread-tools.lock]]\n</a>\n</li>\n<li>\n<a component=\"topic/unlock\" href=\"#\" class=\"hidden dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-unlock text-secondary\"></i> [[topic:thread-tools.unlock]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/move\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows text-secondary\"></i> [[topic:thread-tools.move]]\n</a>\n</li>\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n<li>\n<a component=\"topic/move-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows text-secondary\"></i> [[topic:thread-tools.move-all]]\n</a>\n</li>\n" :
            "") + 
          "\n<li>\n<a component=\"topic/merge\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-code-fork text-secondary\"></i> [[topic:thread-tools.merge]]\n</a>\n</li>\n<li>\n<a component=\"topic/tag\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-tag text-secondary\"></i> [[topic:thread-tools.tag]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-trash-o text-secondary\"></i> [[topic:thread-tools.delete]]\n</a>\n</li>\n<li>\n<a component=\"topic/restore\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-history text-secondary\"></i> [[topic:thread-tools.restore]]\n</a>\n</li>\n<li>\n<a component=\"topic/purge\" href=\"#\" class=\"hidden dropdown-item rounded-1\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-eraser text-secondary\"></i> [[topic:thread-tools.purge]]\n</a>\n</li>\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\" role=\"menuitem\">\n<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          " text-secondary\"></i>\n" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
