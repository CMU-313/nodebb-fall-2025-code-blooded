
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
    return ((guard((context != null) ? context['brand:logo'] : null) || (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) || guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null) ? context['widgets']['brand-header']['length'] : null))) ?
        "\n<div class=\"container-lg px-md-4 brand-container\">\n<div class=\"col-12 d-flex border-bottom pb-3 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\">\n" + 
          ((guard((context != null) ? context['brand:logo'] : null) || guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null)) ?
            "\n<div component=\"brand/wrapper\" class=\"d-flex align-items-center gap-3 p-2 rounded-1 align-content-stretch \">\n" + 
              (guard((context != null) ? context['brand:logo'] : null) ?
                "\n<a component=\"brand/anchor\" href=\"" + 
                  (guard((context != null) ? context['brand:logo:url'] : null) ?
                    __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
                    __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/") + 
                  "\" title=\"[[global:header.brand-logo]]\">\n<img component=\"brand/logo\" alt=\"" + 
                  (guard((context != null) ? context['brand:logo:alt'] : null) ?
                    __escape(guard((context != null) ? context['brand:logo:alt'] : null)) :
                    "[[global:header.brand-logo]]") + 
                  "\" class=\"" + 
                  __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
                  "\" src=\"" + 
                  __escape(guard((context != null) ? context['brand:logo'] : null)) + 
                  "?" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
                  "\" />\n</a>\n" :
                "") + 
              "\n" + 
              (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
                "\n<a component=\"siteTitle\" class=\"text-truncate align-self-stretch align-items-center d-flex\" href=\"" + 
                  (guard((context != null) ? context['title:url'] : null) ?
                    __escape(guard((context != null) ? context['title:url'] : null)) :
                    __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/") + 
                  "\">\n<h1 class=\"fs-6 fw-bold text-body mb-0\">" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
                  "</h1>\n</a>\n" :
                "") + 
              "\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null) ? context['widgets']['brand-header']['length'] : null) ?
            "\n<div data-widget-area=\"brand-header\" class=\"flex-fill gap-3 p-2 align-self-center\">\n" + 
              compiled.blocks['widgets.brand-header'](helpers, context, guard, iter, helper) + 
              "\n</div>\n" :
            "") + 
          "\n</div>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'widgets.brand-header': function widgetsbrandheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['brand-header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null && context['widgets']['brand-header'][key0] != null) ? context['widgets']['brand-header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
