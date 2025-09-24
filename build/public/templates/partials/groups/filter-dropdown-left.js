
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
    return "<div class=\"dropdown dropdown-left bottom-sheet " + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n<div class=\"dropdown bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "\n<span class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['displayName'] : null)) + 
          "</span>\n" :
        "\n<span class=\"fw-semibold\">[[groups:all-groups]]</span>\n") + 
      " <span class=\"caret text-primary opacity-75\"></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li role=\"presentation\" class=\"user " + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "" :
        "selected") + 
      "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allGroupsUrl'] : null)) + 
      "\">\n<div class=\"flex-grow-1\">[[groups:all-groups]]</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "" :
        "fa-check") + 
      "\"></i>\n</a>\n</li>\n" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"user " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['url'] : null)) + 
          "\">\n<div class=\"flex-grow-1 d-inline-flex gap-1 align-items-center\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</div>\n<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
