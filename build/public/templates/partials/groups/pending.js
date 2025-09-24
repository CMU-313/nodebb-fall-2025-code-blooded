
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
    return (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "\n<div class=\"d-flex justify-content-end gap-2 mb-3\">\n<button class=\"btn btn-danger btn-sm\" data-action=\"rejectAll\">[[groups:pending.reject-all]]</button>\n<button class=\"btn btn-success btn-sm\" data-action=\"acceptAll\">[[groups:pending.accept-all]]</button>\n</div>\n" :
        "") + 
      "\n<div style=\"max-height: 500px;overflow: auto;\">\n<div component=\"groups/pending/alert\" class=\"alert alert-info " + 
      (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[groups:pending.none]]</div>\n<table component=\"groups/pending\" class=\"table table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>";
  }

  compiled.blocks = {
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n<div class=\"d-flex gap-2\">\n<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n</div>\n<div class=\"d-flex gap-2\">\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n<button class=\"btn btn-success btn-sm\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
