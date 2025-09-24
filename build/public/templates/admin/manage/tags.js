
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/tags:manage-tags]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1 flex-wrap\">\n<div class=\"input-group flex-nowrap w-auto\">\n<input class=\"form-control form-control-sm w-auto\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/>\n<span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n</div>\n<button class=\"btn btn-light btn-sm text-nowrap\" id=\"rename\"><i class=\"fa fa-pencil text-primary\"></i> [[admin/manage/tags:rename]]</button>\n<button class=\"btn btn-light btn-sm text-nowrap\" id=\"deleteSelected\"><i class=\"fa fa-trash text-danger\"></i> [[admin/manage/tags:delete]]</button>\n<button class=\"btn btn-primary btn-sm text-nowrap\" id=\"create\">[[admin/manage/tags:add-tag]]</button>\n</div>\n</div>\n<div class=\"tags\">\n<div class=\"\">\n<div class=\"tag-management\">\n<div class=\"\">\n<div class=\"alert alert-light text-sm\">\n[[admin/manage/tags:description]]\n</div>\n" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\n[[admin/manage/tags:none]]\n") + 
      "\n<div class=\"tag-list\">\n" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"create-modal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<form>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\n<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\n</div>\n</form>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\n</div>\n</div>\n</div>\n</div>\n<div class=\"rename-modal hidden\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"value\">[[admin/manage/tags:name]]</label>\n<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"tag-row p-2 me-3 mb-1\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\n<div>\n<button disabled class=\"rounded-3 btn btn-light border position-relative\">\n" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\n<span class=\"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          " <span class=\"visually-hidden\">[[tags:tags]]</span>\n</button>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
