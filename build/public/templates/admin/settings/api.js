
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
    return "<div component=\"settings/main/header\" class=\"d-flex flex-wrap justify-content-between border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center mb-3\">\n<div class=\"px-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"px-0 px-md-3\">\n<div class=\"d-flex gap-1\">\n<button type=\"button\" class=\"btn btn-sm btn-primary text-nowrap\" data-action=\"create\">\n<i class=\"fa fa-plus\"></i>\n[[admin/settings/api:create-token]]\n</button>\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n</div>\n<form role=\"form\" class=\"core-api-settings px-lg-4\">\n<p class=\"lead\">[[admin/settings/api:lead-text]]</p>\n<p>[[admin/settings/api:intro]]</p>\n<p class=\"text-danger\">[[admin/settings/api:warning]]</p>\n<div class=\"d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2 mb-3\">\n<a class=\"\" href=\"https://docs.nodebb.org/api\">\n<i class=\"fa fa-external-link\"></i>\n[[admin/settings/api:docs]]\n</a>\n</div>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch mb-3\">\n<input id=\"requireHttps\" class=\"form-check-input\" type=\"checkbox\" id=\"requireHttps\" name=\"requireHttps\" />\n<label for=\"requireHttps\" class=\"form-check-label\">[[admin/settings/api:require-https]]</label>\n<p class=\"form-text\">[[admin/settings/api:require-https-caveat]]</p>\n</div>\n</div>\n<div class=\"table-responsive mb-3\">\n<table class=\"table table-sm text-sm\" data-component=\"acp/tokens\">\n<thead>\n<tr>\n<th>[[admin/settings/api:token]]</th>\n<th>[[admin/settings/api:description]]</th>\n<th>[[admin/settings/api:uid]]</th>\n<th>[[admin/settings/api:last-seen]]</th>\n<th>[[admin/settings/api:created]]</th>\n<th>[[admin/settings/api:actions]]</th>\n</tr>\n</thead>\n<tbody>\n" + 
      compiled.blocks['tokens'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n</ul>\n" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n</li>\n<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n</li>\n<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n</li>\n<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n") + 
      "\n</div>\n</form>";
  }

  compiled.blocks = {
    'tokens': function tokens(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tokens'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-token=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\" class=\"\">\n<td class=\"text-nowrap\">\n<button type=\"button\" class=\"btn btn-link\" data-action=\"copy\" data-clipboard-text=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\"><i class=\"fa fa-fw fa-clipboard\" aria-hidden=\"true\"></i></button>\n<div class=\"vr me-3\" aria-hidden=\"true\"></div>\n<span class=\"user-select-all\">" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "</span>\n</td>\n<td class=\"align-middle\">\n" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null)) + 
              "\n" :
            "\n<em class=\"text-secondary\">[[admin/settings/api:no-description]]</em>\n") + 
          "\n</td>\n<td class=\"align-middle\">\n" + 
          ((guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null) == "0") ?
            "\n<em>[[admin/settings/api:master-token]]</em>\n" :
            "\n" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null)) + 
              "\n") + 
          "\n</td>\n<td class=\"align-middle\">\n" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeen'] : null) ?
            "\n<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeenISO'] : null)) + 
              "\"></span>\n" :
            "\n<em class=\"text-secondary\">[[admin/settings/api:last-seen-never]]</em>\n") + 
          "\n</td>\n<td class=\"align-middle\">\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</td>\n<td class=\"text-nowrap\">\n<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"edit\" title=\"[[admin/settings/api:edit]]\">\n<i class=\"fa fa-edit text-primary\"></i>\n</button>\n<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"roll\" title=\"[[admin/settings/api:roll]]\">\n<i class=\"fa fa-refresh text-primary\"></i>\n</button>\n<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"delete\">\n<i class=\"fa fa-trash text-danger\"></i>\n</button>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n</li>\n" :
            "\n<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
