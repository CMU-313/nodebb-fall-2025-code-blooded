
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
    return "<div class=\"row ip-blacklist\">\n<div class=\"col-lg-12\">\n<p class=\"lead\">\n[[ip-blacklist:lead]]\n</p>\n<p>\n[[ip-blacklist:description]]\n</p>\n<div class=\"row\">\n<div class=\"col-sm-6 d-flex flex-column\">\n<div class=\"card mb-3 flex-grow-1\">\n<div class=\"card-header\">[[ip-blacklist:active-rules]]</div>\n<div class=\"card-body d-flex flex-column\">\n<textarea id=\"blacklist-rules\" class=\"flex-grow-1 mb-3 w-100 d-block border px-2 py-1\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea>\n<div>\n<button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\n<i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\n</button>\n<button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\n<i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\n</button>\n</div>\n</div>\n</div>\n<div class=\"card flex-shrink-1\">\n<div class=\"card-header\">[[ip-blacklist:hints]]</div>\n<div class=\"card-body\">\n<p>\n[[ip-blacklist:hint-1]]\n</p>\n<p>\n[[ip-blacklist:hint-2]]\n</p>\n</div>\n</div>\n</div>\n<div class=\"col-sm-6\">\n<div class=\"card mb-3\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2; max-height: initial;\">\n<canvas id=\"blacklist:hourly\" style=\"max-height: initial;\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\n</div>\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2; max-height: initial;\">\n<canvas id=\"blacklist:daily\" style=\"max-height: initial;\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
