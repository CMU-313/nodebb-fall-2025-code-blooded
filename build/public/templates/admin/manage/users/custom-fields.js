
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
    return "<div class=\"manage-users d-flex flex-column gap-2 px-lg-4 h-100\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/user-custom-fields:title]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<button id=\"new\" class=\"btn btn-light btn-sm text-nowrap\" type=\"button\">\n<i class=\"fa fa-fw fa-plus\"></i> [[admin/manage/user-custom-fields:create-field]]\n</button>\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row flex-grow-1\">\n<div class=\"col-lg-12 d-flex flex-column gap-2\">\n<div class=\"table-responsive flex-grow-1\">\n<table class=\"table text-sm\">\n<thead>\n<tr>\n<th></th>\n<th class=\"text-muted\">[[admin/manage/user-custom-fields:key]]</th>\n<th class=\"text-muted\">[[admin/manage/user-custom-fields:name]]</th>\n<th class=\"text-muted\">[[admin/manage/user-custom-fields:type]]</th>\n<th class=\"text-muted\">[[admin/manage/user-custom-fields:visibility]]</th>\n<th class=\"text-muted text-end\">[[admin/manage/user-custom-fields:min-rep]]</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n" + 
      compiled.blocks['fields'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'fields': function fields(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['fields'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-key=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['key'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['name'] : null)) + 
          "\" data-icon=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['icon'] : null)) + 
          "\" data-type=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['type'] : null)) + 
          "\" data-min-rep=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['min:rep'] : null)) + 
          "\" data-select-options=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['select-options'] : null)) + 
          "\" data-visibility=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['visibility'] : null)) + 
          "\" class=\"align-middle\">\n<td style=\"width: 32px;\">\n<a href=\"#\" component=\"sort/handle\" class=\"btn btn-light btn-sm d-none d-md-block ui-sortable-handle\" style=\"cursor:grab;\"><i class=\"fa fa-arrows-up-down text-muted\"></i></a>\n</td>\n<td class=\"text-nowrap\">" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['key'] : null)) + 
          "</td>\n<td class=\"text-nowrap\">" + 
          (guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['icon'] : null) ?
            "<i class=\"text-muted " + 
              __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['name'] : null)) + 
          "</td>\n<td>\n" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['type'] : null)) + 
          "\n" + 
          (((guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['type'] : null) == "select") || (guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['type'] : null) == "select-multi")) ?
            "\n<div class=\"text-muted\">\n(" + 
              __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['selectOptionsFormatted'] : null)) + 
              ")\n</div>\n" :
            "") + 
          "\n</td>\n<td>\n" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['visibility'] : null)) + 
          "\n</td>\n<td class=\"text-end\">\n" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['min:rep'] : null)) + 
          "\n</td>\n<td>\n<div class=\"d-flex justify-content-end gap-1\">\n<button data-action=\"edit\" data-key=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['key'] : null)) + 
          "\" class=\"btn btn-light btn-sm\">[[admin/admin:edit]]</button>\n<button data-action=\"delete\" data-key=\"" + 
          __escape(guard((context != null && context['fields'] != null && context['fields'][key0] != null) ? context['fields'][key0]['key'] : null)) + 
          "\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i></button>\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
