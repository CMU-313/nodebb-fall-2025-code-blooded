
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/widgets:widgets]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div id=\"widgets\" class=\"row px-2\">\n<div class=\"col-12 col-md-9\" id=\"active-widgets\">\n<div class=\"d-flex justify-content-between\">\n<div class=\"dropdown mb-3\">\n<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu " + 
      (guard((context != null && context['config'] != null) ? context['config']['isRTL'] : null) ?
        "dropdown-menu-end" :
        "") + 
      " p-1\" role=\"menu\">\n" + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div>\n<button id=\"hide-drafts\" class=\"btn btn-light btn-sm hidden\">[[admin/extend/widgets:hide-drafts]]</button>\n<button id=\"show-drafts\" class=\"btn btn-light btn-sm\">[[admin/extend/widgets:show-drafts]]</button>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-12\" component=\"widgets-container\">\n<div class=\"tab-content\">\n" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\n" + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\n<h5>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <span class=\"fs-6 text-secondary\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</span></h5>\n<div class=\"card card-body text-bg-light widget-area " + 
              ((guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null) == "drafts") ?
                " overflow-auto" :
                "") + 
              "\" " + 
              ((guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null) == "drafts") ?
                "style=\"max-height: calc(100vh - 200px);\"" :
                "") + 
              ">\n</div>\n</div>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</div>\n</div>\n<div class=\"col-12 col-md-6 hidden\" component=\"drafts-container\">\n</div>\n</div>\n</div>\n<div class=\"col-12 col-md-3\">\n<div class=\"card mb-3\">\n<div class=\"card-header\">[[admin/extend/widgets:available]]</div>\n<div class=\"card-body pt-0\">\n<div class=\"available-widgets\">\n<p class=\"text-sm\">[[admin/extend/widgets:explanation]]</p>\n" + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\n<div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\n") + 
      "\n<p>\n<select id=\"widget-selector\" class=\"form-select\">\n" + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</p>\n<div class=\"row\">\n" + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-12\">\n<div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"card widget-panel  pointer hide\">\n<div class=\"card-header\">\n<strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\n<small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\n</div>\n<div class=\"card-body hidden\">\n<form>\n" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\n</form>\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</div>\n<div class=\"btn-group\" component=\"clone\">\n<button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\n<button type=\"button\" class=\"btn btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (index === 0 ?
            "" :
            "\n<li><a class=\"dropdown-item\" href=\"#\" role=\"menuitem\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\n") + 
          "\n";
      }, function alt() {
        return "";
      }) + 
      "\n</ul>\n</div>\n</div>\n</div>\n</div>\n<div class=\"card\">\n<div class=\"card-header\">[[admin/extend/widgets:containers.available]]</div>\n<div class=\"card-body pt-0\">\n<p class=\"text-sm\">[[admin/extend/widgets:containers.explanation]]</p>\n<div class=\"available-containers\">\n<div class=\"containers\">\n<div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\n[[admin/extend/widgets:containers.none]]\n</div>\n<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3 pointer\" data-container-html='<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3\">" + 
      "{{body}}</div>'>\n[[admin/extend/widgets:container.well]]\n</div>\n<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3 pointer\" data-container-html='<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3\">" + 
      "{{body}}</div>'>\n[[admin/extend/widgets:container.jumbotron]]\n</div>\n<div class=\"mb-3 pointer\" data-container-html='<h5>" + 
      "{{title}}</h5><hr/><div>" + 
      "{{body}}</div>'>\n<h5>[[admin/extend/widgets:container.title]]</h5>\n<hr/>\n<div class=\"\">\n[[admin/extend/widgets:container.body]]\n</div>\n</div>\n<div class=\"card mb-3\" data-container-html='<div class=\"card\"><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\n<div class=\"card-body pointer\">\n[[admin/extend/widgets:container.card]]\n</div>\n</div>\n<div class=\"card mb-3 pointer\" data-container-html='<div class=\"card\"><h5 class=\"card-header\">" + 
      "{{title}}</h5><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\n<div class=\"card-header d-flex justify-content-between text-nowrap flex-wrap align-items-center\">\n[[admin/extend/widgets:container.card-header]]\n<div class=\"d-flex gap-1 color-selector\" style=\"height: 18px;\">\n<button data-class=\"text-bg-primary\" class=\"btn btn-sm btn-primary\"></button>\n<button data-class=\"\" class=\"btn btn-sm btn-secondary\"></button>\n<button data-class=\"text-bg-success\" class=\"btn btn-sm btn-success\"></button>\n<button data-class=\"text-bg-info\" class=\"btn btn-sm btn-info\"></button>\n<button data-class=\"text-bg-warning\" class=\"btn btn-sm btn-warning\"></button>\n<button data-class=\"text-bg-danger\" class=\"btn btn-sm btn-danger\"></button>\n</div>\n</div>\n<div class=\"card-body\">\n[[admin/extend/widgets:container.card-body]]\n</div>\n</div>\n<div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\n<div class=\"d-flex justify-content-between text-nowrap flex-wrap align-items-center\">\n[[admin/extend/widgets:container.alert]]\n<div class=\"d-flex gap-1 color-selector\" style=\"height: 18px;\">\n<button data-class=\"alert-success\" class=\"btn btn-sm btn-success\"></button>\n<button data-class=\"alert-info\" class=\"btn btn-sm btn-info\"></button>\n<button data-class=\"alert-warning\" class=\"btn btn-sm btn-warning\"></button>\n<button data-class=\"alert-danger\" class=\"btn btn-sm btn-danger\"></button>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li><a class=\"dropdown-item rounded-1 d-flex justify-content-between align-items-center gap-3\" href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          " <span class=\"badge text-bg-light border\" style=\"min-width: 2.15em;\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['widgetCount'] : null)) + 
          "</span></a></li>\n";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
