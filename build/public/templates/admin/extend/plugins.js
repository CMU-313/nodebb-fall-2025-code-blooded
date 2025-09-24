
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4 " + 
      (guard((context != null) ? context['isStarterPlan'] : null) ?
        "opacity-75 pe-none" :
        "") + 
      "\">\n<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n<div class=\"\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/plugins:plugins]]</h4>\n</div>\n<div class=\"d-flex align-items-center gap-1\">\n<input " + 
      (guard((context != null) ? context['isStarterPlan'] : null) ?
        "" :
        " autofocus") + 
      " class=\"form-control form-control-sm\" type=\"text\" id=\"plugin-search\" placeholder=\"[[admin/extend/plugins:plugin-search-placeholder]]\"/><br/>\n<button class=\"btn btn-primary btn-sm text-nowrap\" id=\"plugin-order\">[[admin/extend/plugins:order-active]]</button>\n</div>\n</div>\n<div>\n" + 
      (guard((context != null) ? context['canChangeState'] : null) ?
        "" :
        "\n<div class=\"alert alert-warning\">[[error:plugins-set-in-configuration]]</div>\n") + 
      "\n<ul class=\"nav nav-pills mb-3\" id=\"plugin-tabs\">\n<li class=\"nav-item\">\n<button class=\"nav-link\" data-bs-target=\"#trending\" data-bs-toggle=\"tab\">\n[[admin/extend/plugins:trending]]\n<i class=\"fa fa-star\"></i>\n</button>\n</li>\n<li class=\"nav-item\">\n<button class=\"nav-link active\" data-bs-target=\"#installed\" data-bs-toggle=\"tab\">\n[[admin/extend/plugins:installed]]\n<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['installedCount'] : null)) + 
      "</span>\n</button>\n</li>\n<li class=\"nav-item\">\n<button class=\"nav-link\" data-bs-target=\"#active\" data-bs-toggle=\"tab\">\n[[admin/extend/plugins:active]]\n<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['activeCount'] : null)) + 
      "</span>\n</button>\n</li>\n<li class=\"nav-item\">\n<button class=\"nav-link\" data-bs-target=\"#deactive\" data-bs-toggle=\"tab\">\n[[admin/extend/plugins:inactive]]\n<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['inactiveCount'] : null)) + 
      "</span>\n</button>\n</li>\n<li class=\"nav-item\">\n<button class=\"nav-link\" data-bs-target=\"#upgrade\" data-bs-toggle=\"tab\">\n[[admin/extend/plugins:out-of-date]]\n<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['upgradeCount'] : null)) + 
      "</span>\n</button>\n</li>\n<li class=\"nav-item\">\n<button class=\"nav-link\" data-bs-target=\"#download\" data-bs-toggle=\"tab\">[[admin/extend/plugins:find-plugins]]</button>\n</li>\n</ul>\n<div class=\"plugins row px-2\">\n<div class=\"col-lg-9\">\n<div class=\"tab-content\">\n<div class=\"tab-pane fade\" id=\"trending\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['trending'] != null) ? context['trending']['length'] : null) ?
        "" :
        "hide") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"trending list-unstyled\">\n" + 
      compiled.blocks['trending'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"tab-pane fade show active\" id=\"installed\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['installed'] != null) ? context['installed']['length'] : null) ?
        "hide" :
        "") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"installed list-unstyled\">\n" + 
      compiled.blocks['installed'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"tab-pane fade\" id=\"active\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['active'] != null) ? context['active']['length'] : null) ?
        "hide" :
        "") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"active list-unstyled\">\n" + 
      compiled.blocks['active'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"tab-pane fade\" id=\"deactive\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['inactive'] != null) ? context['inactive']['length'] : null) ?
        "hide" :
        "") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"deactive list-unstyled\">\n" + 
      compiled.blocks['inactive'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"tab-pane fade\" id=\"upgrade\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['upgrade'] != null) ? context['upgrade']['length'] : null) ?
        "hide" :
        "") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"upgrade list-unstyled\">\n" + 
      compiled.blocks['upgrade'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"tab-pane fade\" id=\"download\">\n<div class=\"alert alert-info no-plugins " + 
      (guard((context != null && context['download'] != null) ? context['download']['length'] : null) ?
        "hide" :
        "") + 
      "\">[[admin/extend/plugins:none-found]]</div>\n<ul class=\"download list-unstyled\">\n" + 
      compiled.blocks['download'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n<div class=\"acp-sidebar col-lg-3\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"form-check form-switch text-sm\">\n<input id=\"plugin-submit-usage\" class=\"form-check-input\" type=\"checkbox\" data-field=\"submitPluginUsage\" " + 
      (guard((context != null) ? context['submitPluginUsage'] : null) ?
        "checked" :
        "") + 
      "/>\n<label for=\"plugin-submit-usage\" class=\"form-check-label\">[[admin/extend/plugins:submit-anonymous-usage]]</label>\n</div>\n<hr/>\n<div>\n<div class=\"fw-semibold text-sm\">[[admin/extend/plugins:dev-interested]]</div>\n<p class=\"text-xs text-muted\">\n[[admin/extend/plugins:docs-info]]\n</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"order-active-plugins-modal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<div class=\"modal-header\">\n<h4 class=\"modal-title\">[[admin/extend/plugins:order-active]]</h4>\n<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n</div>\n<div class=\"modal-body\">\n<p>\n[[admin/extend/plugins:order.description]]\n</p>\n<p>\n[[admin/extend/plugins:order.explanation]]\n</p>\n<ul class=\"plugin-list list-unstyled d-flex flex-column gap-2\"></ul>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">[[global:buttons.close]]</button>\n<button type=\"button\" class=\"btn btn-primary\" id=\"save-plugin-order\">[[global:save]]</button>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'trending': function trending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['trending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n<div>\n<h6><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['name'] : null)) + 
              "</strong></h6>\n" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null) ?
                "\n<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null)) + 
                  "</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['latest'] : null)) + 
              "</strong></small>\n" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isCompatible'] : null) ?
                    "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n" :
                    "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
                  "\n</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null) ?
                "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "</a></p>\n" :
                "") + 
              "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['installed'] : null) ?
                "\n" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isTheme'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                    "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
                  "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                    "\n" + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null) ?
                        "\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                        "") + 
                      "\n" :
                    "") + 
                  "\n" :
                "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
              "\n</div>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'installed': function installed(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['installed'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n<div>\n<h6><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['name'] : null)) + 
              "</strong></h6>\n" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null) ?
                "\n<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null)) + 
                  "</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['latest'] : null)) + 
              "</strong></small>\n" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isCompatible'] : null) ?
                    "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n" :
                    "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
                  "\n</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null) ?
                "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "</a></p>\n" :
                "") + 
              "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['installed'] : null) ?
                "\n" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isTheme'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                    "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
                  "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                    "\n" + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null) ?
                        "\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                        "") + 
                      "\n" :
                    "") + 
                  "\n" :
                "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
              "\n</div>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'active': function active(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n<div>\n<h6><strong>" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['name'] : null)) + 
              "</strong></h6>\n" + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['description'] : null) ?
                "\n<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['description'] : null)) + 
                  "</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['latest'] : null)) + 
              "</strong></small>\n" + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['outdated'] : null) ?
                "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
                  (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['isCompatible'] : null) ?
                    "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n" :
                    "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
                  "\n</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['url'] : null) ?
                "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['url'] : null)) + 
                  "</a></p>\n" :
                "") + 
              "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
              (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['installed'] : null) ?
                "\n" + 
                  (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['isTheme'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                    "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
                  "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
                  (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['active'] : null) ?
                    "\n" + 
                      (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['settingsRoute'] : null) ?
                        "\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                        "") + 
                      "\n" :
                    "") + 
                  "\n" :
                "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
              "\n</div>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
              __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
              "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'inactive': function inactive(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['inactive'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n<div>\n<h6><strong>" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['name'] : null)) + 
              "</strong></h6>\n" + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['description'] : null) ?
                "\n<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['description'] : null)) + 
                  "</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['latest'] : null)) + 
              "</strong></small>\n" + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['outdated'] : null) ?
                "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
                  (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['isCompatible'] : null) ?
                    "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n" :
                    "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
                  "\n</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['url'] : null) ?
                "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['url'] : null)) + 
                  "</a></p>\n" :
                "") + 
              "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
              (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['installed'] : null) ?
                "\n" + 
                  (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['isTheme'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                    "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
                  "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
                  (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['active'] : null) ?
                    "\n" + 
                      (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['settingsRoute'] : null) ?
                        "\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                        "") + 
                      "\n" :
                    "") + 
                  "\n" :
                "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
              "\n</div>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
              __escape(guard((context != null && context['inactive'] != null && context['inactive'][key0] != null) ? context['inactive'][key0]['id'] : null)) + 
              "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'upgrade': function upgrade(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['upgrade'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n<div>\n<h6><strong>" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['name'] : null)) + 
              "</strong></h6>\n" + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['description'] : null) ?
                "\n<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['description'] : null)) + 
                  "</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['latest'] : null)) + 
              "</strong></small>\n" + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['outdated'] : null) ?
                "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
                  (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['isCompatible'] : null) ?
                    "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n" :
                    "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
                  "\n</p>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['url'] : null) ?
                "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['url'] : null)) + 
                  "</a></p>\n" :
                "") + 
              "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
              (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['installed'] : null) ?
                "\n" + 
                  (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['isTheme'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                    "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
                  "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
                  (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['active'] : null) ?
                    "\n" + 
                      (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['settingsRoute'] : null) ?
                        "\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                        "") + 
                      "\n" :
                    "") + 
                  "\n" :
                "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
              "\n</div>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
              __escape(guard((context != null && context['upgrade'] != null && context['upgrade'][key0] != null) ? context['upgrade'][key0]['id'] : null)) + 
              "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'download': function download(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['download'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2\">\n<div class=\"\">\n<h6><strong>" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['name'] : null)) + 
          "</strong></h6>\n" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null) ?
            "\n<p class=\"text-xs\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null)) + 
              "</p>\n" :
            "") + 
          "\n<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['latest'] : null)) + 
          "</strong></small>\n<p class=\"text-xs\">\n" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['isCompatible'] : null) ?
            "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
              __escape(guard((context != null) ? context['version'] : null)) + 
              "]]\n" :
            "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
          "\n</p>\n" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null) ?
            "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "</a></p>\n" :
            "") + 
          "\n</div>\n<div class=\"d-flex flex-column gap-1\">\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm hidden text-nowrap\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\">\n<i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]\n</button>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
