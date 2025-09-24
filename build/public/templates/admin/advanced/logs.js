
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
    return "<div class=\"logs settings d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/logs:logs]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"clear\">\n<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/logs:clear]]\n</button>\n<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"reload\">\n<i class=\"fa fa-refresh text-primary\"></i> [[admin/advanced/logs:reload]]\n</button>\n</div>\n</div>\n<div class=\"card\">\n<div class=\"card-body\">\n<pre class=\"text-break\" style=\"height: 600px; white-space: break-spaces;\">" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
