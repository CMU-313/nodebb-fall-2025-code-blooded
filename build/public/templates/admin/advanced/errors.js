
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
    return "<div class=\"errors d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/errors:errors]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"clear\">\n<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/errors:clear-error-log]]\n</button>\n<a class=\"btn btn-sm btn-light text-nowrap\" target=\"_top\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/advanced/errors/export\">\n<i class=\"fa fa-download text-primary\"></i> [[admin/advanced/errors:export-error-log]]\n</a>\n</div>\n</div>\n<div class=\"px-2\">\n<div class=\"row\">\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\" >\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"not-found\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>\n<strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash;\n[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\n</small></div>\n</div>\n</div>\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"toobusy\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>\n<strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash;\n[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\n</small></div>\n</div>\n</div>\n</div>\n<div class=\"card\">\n<div class=\"card-header\">\n<i class=\"fa fa-exclamation-triangle\"></i> [[admin/advanced/errors:error.404]]\n</div>\n<div class=\"card-body\">\n<div class=\"table-responsive\">\n<table class=\"table text-sm\">\n<thead>\n<th>[[admin/advanced/errors:route]]</th>\n<th class=\"text-end\">[[admin/advanced/errors:count]]</th>\n</thead>\n<tbody>\n" + 
      compiled.blocks['not-found'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null && context['not-found'] != null) ? context['not-found']['length'] : null) ?
        "" :
        "\n<tr>\n<td colspan=\"2\">\n<div class=\"alert alert-success\">\n[[admin/advanced/errors:no-routes-not-found]]\n</div>\n</td>\n</tr>\n") + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'not-found': function notfound(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['not-found'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td class=\"text-break\">" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['value'] : null)) + 
          "</td>\n<td class=\"text-end\">" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['score'] : null)) + 
          "</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
