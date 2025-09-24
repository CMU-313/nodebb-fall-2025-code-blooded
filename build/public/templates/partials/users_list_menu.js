
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
    return "<div component=\"user/list/menu\" class=\"text-sm d-flex flex-wrap align-items-center gap-2\">\n<a class=\"btn btn-ghost btn-sm ff-secondary fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a>\n<a class=\"btn btn-ghost btn-sm ff-secondary fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top-posters]]</a>\n" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n<a class=\"btn btn-ghost btn-sm ff-secondary fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most-reputation]]</a>\n") + 
      "\n" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n<a class=\"btn btn-ghost btn-sm ff-secondary fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most-flags]]</a>\n<a class=\"btn btn-ghost btn-sm ff-secondary fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a>\n" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
