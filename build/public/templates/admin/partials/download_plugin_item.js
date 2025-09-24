
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
    return "<li id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" data-plugin-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2\">\n<div class=\"\">\n<h6><strong>" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "</strong></h6>\n" + 
      (guard((context != null) ? context['description'] : null) ?
        "\n<p class=\"text-xs\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</p>\n" :
        "") + 
      "\n<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
      __escape(guard((context != null) ? context['latest'] : null)) + 
      "</strong></small>\n<p class=\"text-xs\">\n" + 
      (guard((context != null) ? context['isCompatible'] : null) ?
        "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]\n" :
        "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
      "\n</p>\n" + 
      (guard((context != null) ? context['url'] : null) ?
        "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "</a></p>\n" :
        "") + 
      "\n</div>\n<div class=\"d-flex flex-column gap-1\">\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm hidden text-nowrap\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\">\n<i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]\n</button>\n</div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
