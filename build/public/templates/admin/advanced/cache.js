
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
    return "<div class=\"post-cache settings d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/cache:cache]]</h4>\n</div>\n<div class=\"d-flex align-items-center\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row px-2\">\n" + 
      compiled.blocks['caches'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    'caches': function caches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['caches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-xl-3\">\n<div class=\"card\">\n<div class=\"card-header\">\n<div class=\"d-flex gap-2 justify-content-between align-items-center\">\n<div class=\"d-flex gap-1 align-items-center\">\n<div class=\"form-check form-switch text-sm\" data-name=\"" + 
          __escape(key) + 
          "\" style=\"min-height: initial;\">\n<input class=\"form-check-input\" type=\"checkbox\" " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['enabled'] : null) ?
            "checked" :
            "") + 
          ">\n</div>\n[[admin/advanced/cache:" + 
          __escape(key) + 
          "-cache]]\n</div>\n<div class=\"d-flex gap-1\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/advanced/cache/dump?name=" + 
          __escape(key) + 
          "\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-download\"></i></a>\n<a class=\"btn btn-sm btn-danger clear\" data-name=\"" + 
          __escape(key) + 
          "\"><i class=\"fa fa-trash\"></i></a>\n</div>\n</div>\n</div>\n<div class=\"card-body\">\n<div class=\"progress mb-3\" style=\"height:20px;\">\n<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "%;\">\n[[admin/advanced/cache:percent-full, " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "]]\n</div>\n</div>\n<div class=\"mb-2\">\n<label>Size:</label> <span class=\"fw-bold\">" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['itemCount'] : null))) + 
          " / " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['maxSize'] : null))) + 
          "</span>\n</div>\n<div class=\"mb-2\">\n<label>Hits:</label> <span class=\"fw-bold\">" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hits'] : null)) + 
          "</span>\n</div>\n<div class=\"mb-2\">\n<label>Misses:</label> <span class=\"fw-bold\">" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['misses'] : null)) + 
          "</span>\n</div>\n<div class=\"mb-2\">\n<label>Hit Ratio:</label> <span class=\"fw-bold\">" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitRatio'] : null)) + 
          "</span>\n</div>\n<div class=\"mb-2\">\n<label>Hits / Sec:</label> <span class=\"fw-bold\">" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitsPerSecond'] : null)) + 
          "</span>\n</div>\n" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null) ?
            "\n<div class=\"mb-2\">\n<label>TTL:</label> <span class=\"fw-bold\">" + 
              __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null)) + 
              "</span>\n</div>\n" :
            "") + 
          "\n" + 
          ((key == "post") ?
            "\n<hr/>\n<div class=\"mb-3\">\n<label for=\"postCacheSize\">[[admin/advanced/cache:post-cache-size]]</label>\n<input id=\"postCacheSize\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"postCacheSize\">\n</div>\n" :
            "") + 
          "\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
