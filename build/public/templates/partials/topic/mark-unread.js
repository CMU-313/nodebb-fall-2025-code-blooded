
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
    return (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<button component=\"topic/mark-unread\" class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center\">\n<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold text-truncate text-nowrap\">[[topic:mark-unread]]</span>\n</button>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
