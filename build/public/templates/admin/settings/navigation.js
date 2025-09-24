
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
    return "<div class=\"navigation d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/settings/navigation:navigation]]</h4>\n</div>\n<div class=\"d-flex gap-1\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row\" id=\"navigation\">\n<div class=\"col-lg-9\">\n<div class=\"clearfix\">\n<ul id=\"active-navigation\" class=\"nav border\">\n" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<hr/>\n<ul id=\"enabled\">\n" + 
      compiled.blocks['enabled'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"col-lg-3\">\n<div class=\"card\">\n<div class=\"card-header\">[[admin/settings/navigation:available-menu-items]]</div>\n<div class=\"card-body\">\n<ul id=\"available\">\n<li data-id=\"custom\" class=\"clearfix d-flex align-items-center gap-3 mb-3\">\n<div data-id=\"custom\" class=\"drag-item alert p-2 mb-0 alert-success\">\n<i class=\"fa fa-fw fa-plus-circle\"></i>\n</div>\n<p>\n<strong>[[admin/settings/navigation:custom-route]]</strong>\n</p>\n</li>\n" + 
      compiled.blocks['available'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-index=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['index'] : null)) + 
          "\" class=\"float-start nav-item " + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
          " " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['selected'] : null) ?
            " active " :
            "") + 
          "\">\n<a href=\"#\" title=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
          "\" id=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
          "\" class=\"nav-link p-3 " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['enabled'] : null) ?
            "" :
            "text-muted") + 
          "\">\n<i class=\"nav-icon fa fa-fw " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) :
            "") + 
          "\"></i><i class=\"dropdown-icon fa fa-caret-down" + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'enabled': function enabled(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['enabled'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-index=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"card card-body text-bg-light border-0 " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\">\n<form>\n<div class=\"row mb-3\">\n<div class=\"col-sm-1\">\n<label class=\"form-label\">[[admin/settings/navigation:icon]]</label>\n<span class=\"iconPicker\"><i class=\"fa fa-2x " + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\"></i>\n<a class=\"change-icon-link " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null) ?
            "hidden" :
            "") + 
          "\" href=\"#\">[[admin/settings/navigation:change-icon]]</a>\n<input class=\"form-control\" type=\"hidden\" name=\"iconClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\" />\n</span>\n</div>\n<div class=\"col-sm-3\">\n<label class=\"form-label\" for=\"nav:route\">[[admin/settings/navigation:route]]</label>\n<input id=\"nav:route\" class=\"form-control\" type=\"text\" name=\"route\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['route'] : null)) + 
          "\" />\n</div>\n<div class=\"col-sm-4\">\n<label class=\"form-label\" for=\"nav:class\">[[admin/settings/navigation:class]]</label>\n<input id=\"nav:class\" class=\"form-control\" type=\"text\" name=\"class\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['class'] : null)) + 
          "\" />\n</div>\n<div class=\"col-sm-4\">\n<label class=\"form-label\" for=\"nav:id\">[[admin/settings/navigation:id]]</label>\n<input id=\"nav:id\" class=\"form-control\" type=\"text\" name=\"id\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['id'] : null)) + 
          "\" />\n</div>\n</div>\n<div class=\"row mb-3\">\n<div class=\"col-sm-4\">\n<label class=\"form-label\" for=\"nav:text\">[[admin/settings/navigation:text]]</label>\n<input id=\"nav:text\" class=\"form-control unescape\" type=\"text\" name=\"text\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['text'] : null)) + 
          "\" />\n</div>\n<div class=\"col-sm-4\">\n<label class=\"form-label\" for=\"nav:text-class\">[[admin/settings/navigation:text-class]]</label>\n<input id=\"nav:text-class\" class=\"form-control\" type=\"text\" name=\"textClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['textClass'] : null)) + 
          "\" />\n</div>\n<div class=\"col-sm-4\">\n<label class=\"form-label\" for=\"nav:tooltip\">[[admin/settings/navigation:tooltip]]</label>\n<input id=\"nav:tooltip\" class=\"form-control unescape\" type=\"text\" name=\"title\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['title'] : null)) + 
          "\" />\n</div>\n</div>\n<div class=\"row mb-3\">\n<div class=\"col-12\">\n<label class=\"form-label\">[[admin/settings/navigation:show-to-groups]]</label>\n<select name=\"groups\" class=\"form-select\" size=\"10\" multiple>\n" + 
          iter(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['groups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<option value=\"" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "\"" + 
              (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['selected'] : null) ?
                " selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "</option>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</select>\n</div>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"targetBlank\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['targetBlank'] : null) ?
            "checked" :
            "") + 
          "/>\n<label for=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:open-new-window]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"dropdown\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdown'] : null) ?
            "checked" :
            "") + 
          "/>\n<label for=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:dropdown]]</label>\n</div>\n<div class=\"mb-3\">\n<p class=\"form-text\">\n[[admin/settings/navigation:dropdown-placeholder]]\n</p>\n<textarea name=\"dropdownContent\" rows=\"5\" class=\"form-control\">" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdownContent'] : null)) + 
          "</textarea>\n</div>\n<div class=\"row\">\n<div class=\"col-sm-12 text-end\">\n<button class=\"btn btn-light btn-sm toggle disable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-ban text-danger\"></i> [[admin/settings/navigation:btn.disable]]</button>\n<button class=\"btn btn-light btn-sm toggle enable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-check text-success\"></i> [[admin/settings/navigation:btn.enable]]</button>\n<button class=\"btn btn-danger btn-sm delete\">[[admin/settings/navigation:btn.delete]]</button>\n<input type=\"hidden\" name=\"enabled\" value=\"" + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "on" :
            "") + 
          "\" />\n</div>\n</div>\n</form>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'available': function available(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['available'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-id=\"" + 
          __escape(index) + 
          "\" class=\"clearfix d-flex align-items-center gap-3 mb-3\">\n<div data-id=\"" + 
          __escape(index) + 
          "\" class=\"drag-item alert p-2 mb-0 " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            "alert-warning" :
            "alert-info") + 
          "\">\n<i class=\"fa fa-fw " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null)) :
            "fa-navicon") + 
          "\"></i>\n</div>\n<div class=\"d-flex flex-column\">\n<p class=\"mb-0\">\n<strong>" + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['text'] : null)) + 
          "</strong>\n</p>\n<p class=\"mb-0\">\n" + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            "\n<span class=\"badge bg-primary-subtle text-primary\">[[admin/settings/navigation:core]]</span>\n" :
            "\n<span class=\"badge bg-secondary-subtle text-secondary\">[[admin/settings/navigation:plugin]]</span>\n") + 
          "\n<span class=\"badge text-bg-none\"><code>" + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['route'] : null)) + 
          "</code></span>\n</p>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
