
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
    return "<form>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:type-of-input]]</label>\n<select class=\"form-select\" id=\"type-select\" name=\"type\">\n<option value=\"input-text\" " + 
      ((guard((context != null) ? context['type'] : null) == "input-text") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-text]]</option>\n<option value=\"input-link\" " + 
      ((guard((context != null) ? context['type'] : null) == "input-link") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-link]]</option>\n<option value=\"input-number\" " + 
      ((guard((context != null) ? context['type'] : null) == "input-number") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-number]]</option>\n<option value=\"input-date\" " + 
      ((guard((context != null) ? context['type'] : null) == "input-date") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-date]]</option>\n<option value=\"select\" " + 
      ((guard((context != null) ? context['type'] : null) == "select") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-select]]</option>\n<option value=\"select-multi\" " + 
      ((guard((context != null) ? context['type'] : null) == "select-multi") ?
        "selected" :
        "") + 
      ">[[admin/manage/user-custom-fields:input-type-select-multi]]</option>\n</select>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:key]]</label>\n<input class=\"form-control\" type=\"text\" name=\"key\" value=\"" + 
      __escape(guard((context != null) ? context['key'] : null)) + 
      "\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:name]]</label>\n<input class=\"form-control\" type=\"text\" name=\"name\" value=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:icon]]</label>\n<div class=\" d-flex gap-1\">\n<input class=\"form-control\" type=\"text\" name=\"icon\" value=\"" + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\">\n<button id=\"icon-select\" class=\"btn btn-light\"><i class=\"fa fa-search text-primary\"></i></button>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:visibility]]</label>\n<select name=\"visibility\" class=\"form-select\">\n<option value=\"all\">[[admin/manage/user-custom-fields:visibility-all]]</option>\n<option value=\"loggedin\">[[admin/manage/user-custom-fields:visibility-loggedin]]</option>\n<option value=\"privileged\">[[admin/manage/user-custom-fields:visibility-privileged]]</option>\n</select>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/manage/user-custom-fields:minimum-reputation]]</label>\n<input class=\"form-control\" type=\"number\" name=\"min:rep\" value=\"" + 
      __escape(guard((context != null) ? context['min:rep'] : null)) + 
      "\" placeholder=\"0\">\n<p class=\"form-text\">[[admin/manage/user-custom-fields:minimum-reputation-help]]</p>\n</div>\n<div class=\"mb-3 " + 
      (((guard((context != null) ? context['type'] : null) != "select") && (guard((context != null) ? context['type'] : null) != "select-multi")) ?
        "hidden" :
        "") + 
      "\" data-input-type data-input-type-select data-input-type-select-multi>\n<label class=\"form-label\">[[admin/manage/user-custom-fields:select-options]]</label>\n<textarea class=\"form-control\" name=\"select-options\" rows=\"6\">" + 
      __escape(guard((context != null) ? context['select-options'] : null)) + 
      "</textarea>\n<p class=\"form-text\">[[admin/manage/user-custom-fields:select-options-help]]</p>\n</div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
