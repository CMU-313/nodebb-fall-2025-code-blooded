
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
    return "<div class=\"px-lg-4 digest\">\n<p class=\"lead\">[[admin/manage/digest:lead]]</p>\n<p>[[admin/manage/digest:disclaimer]]</p>\n<p>[[admin/manage/digest:disclaimer-continued]]</p>\n<hr />\n<div class=\"mb-3\">\n<div class=\"mb-2\"><em>[[admin/manage/digest:default-help, " + 
      __escape(guard((context != null) ? context['default'] : null)) + 
      "]]</em></div>\n<div class=\"d-flex gap-1 align-items-center\">\n<div>[[admin/manage/digest:manual-run]]</div>\n<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\n<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\n<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-biweek\">[[admin/settings/user:digest-freq.biweekly]]</button>\n<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\n</div>\n</div>\n<div class=\"table-responsive\">\n<table class=\"table\">\n<thead>\n<th>[[admin/manage/digest:user]]</th>\n<th>[[admin/manage/digest:subscription]]</th>\n<th>[[admin/manage/digest:last-delivery]]</th>\n<th></th>\n</thead>\n<tbody>\n" + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null && context['delivery'] != null) ? context['delivery']['length'] : null) ?
        "" :
        "\n<tr>\n<td colspan=\"4\">\n<div class=\"alert alert-success\">\n[[admin/manage/digest:no-delivery-data]]\n</div>\n</td>\n</tr>\n") + 
      "\n</tbody>\n<tfoot>\n<tr>\n<td colspan=\"4\"><div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</div></td>\n</tr>\n</tfoot>\n</table>\n</div>\n</div>";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['delivery'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['delivery'] != null) ? context['delivery'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          " <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['username'] : null)) + 
          "</a></td>\n<td>" + 
          (guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null) ?
            __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null)) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\n<td>" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['lastDelivery'] : null)) + 
          "</td>\n<td><button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">[[admin/manage/digest:resend]]</button></td>\n</tr>\n";
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
