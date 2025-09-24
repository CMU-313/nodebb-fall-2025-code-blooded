
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
    return "<div class=\"row dashboard px-lg-4\">\n<div class=\"col-8 mx-auto\">\n<div class=\"d-flex justify-content-between align-items-center mb-3\">\n<form class=\"d-flex flex-wrap gap-3 align-sm-items-center\" method=\"GET\">\n<div class=\"d-flex align-items-center gap-2\">\n<label class=\"form-label mb-0\" for=\"start\">[[admin/dashboard:start]]</label>\n<input type=\"date\" class=\"form-control form-control-sm w-auto\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard((context != null) ? context['startDate'] : null)) + 
      "\">\n</div>\n<div class=\"d-flex align-items-center gap-2\">\n<label class=\"form-label mb-0\" for=\"end\">[[admin/dashboard:end]]</label>\n<input type=\"date\" class=\"form-control form-control-sm w-auto\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard((context != null) ? context['endDate'] : null)) + 
      "\">\n</div>\n<div class=\"\">\n<button onclick=\"$('form').submit();return false;\"class=\"btn btn-primary btn-sm\" type=\"submit\">[[admin/dashboard:filter]]</button>\n</div>\n</form>\n<button id=\"clear-search-history\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-trash text-danger\"></i> [[admin/dashboard:clear-search-history]]</button>\n</div>\n<table class=\"table table-sm text-sm search-list w-100\">\n<thead>\n<th>[[admin/dashboard:search-term]]</th>\n<th class=\"text-end\">[[admin/dashboard:search-count]]</th>\n</thead>\n<tbody>\n" + 
      (guard((context != null && context['searches'] != null) ? context['searches']['length'] : null) ?
        "" :
        "\n<tr>\n<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-searches]]</em></td>\n</tr>\n") + 
      "\n" + 
      compiled.blocks['searches'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>";
  }

  compiled.blocks = {
    'searches': function searches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td class=\"w-100 text-truncate\" style=\"max-width:1px;\">" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['value'] : null)) + 
          "</td>\n<td class=\"w-0 text-end text-nowrap\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['score'] : null)])) + 
          "</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
