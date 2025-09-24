
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
    return (guard((context != null) ? context['error'] : null) ?
        "" :
        "\n<li id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-plugin-index=\"" + 
          __escape(index) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-version=\"" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
          (guard((context != null) ? context['active'] : null) ?
            "active" :
            "") + 
          "\">\n<div>\n<h6><strong>" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</strong></h6>\n" + 
          (guard((context != null) ? context['description'] : null) ?
            "\n<p class=\"text-xs\">" + 
              __escape(guard((context != null) ? context['description'] : null)) + 
              "</p>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
            "") + 
          "\n<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null) ? context['latest'] : null)) + 
          "</strong></small>\n" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "\n<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n<p class=\"text-xs\">\n" + 
              (guard((context != null) ? context['isCompatible'] : null) ?
                "\n<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                  __escape(guard((context != null) ? context['version'] : null)) + 
                  "]]\n" :
                "\n<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n") + 
              "\n</p>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['url'] : null) ?
            "\n<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "</a></p>\n" :
            "") + 
          "\n</div>\n<div class=\"controls d-flex flex-column gap-1\">\n" + 
          (guard((context != null) ? context['installed'] : null) ?
            "\n" + 
              (guard((context != null) ? context['isTheme'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n" :
                "\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                  (guard((context != null) ? context['active'] : null) ?
                    "" :
                    "hidden") + 
                  " " + 
                  (guard((context != null) ? context['canChangeState'] : null) ?
                    "" :
                    "disabled") + 
                  "\">\n<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n</button>\n<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                  (guard((context != null) ? context['active'] : null) ?
                    "hidden" :
                    "") + 
                  " " + 
                  (guard((context != null) ? context['canChangeState'] : null) ?
                    "" :
                    "disabled") + 
                  "\">\n<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n</button>\n") + 
              "\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n" + 
              (guard((context != null) ? context['active'] : null) ?
                "\n" + 
                  (guard((context != null) ? context['settingsRoute'] : null) ?
                    "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      __escape(guard((context != null) ? context['settingsRoute'] : null)) + 
                      "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n" :
                    "") + 
                  "\n" :
                "") + 
              "\n" :
            "\n<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n") + 
          "\n</div>\n</li>\n") + 
      "\n" + 
      (guard((context != null) ? context['error'] : null) ?
        "\n<li data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" class=\"clearfix\">\n<div class=\"float-end\">\n<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n</div>\n<h2><strong>" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "</strong></h2>\n<p class=\"text-xs\">\n[[admin/extend/plugins:plugin-item.unknown-explanation]]\n</p>\n</li>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
