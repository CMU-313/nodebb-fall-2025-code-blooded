
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
    return "<div class=\"search-widget\">\n<form action=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/search\" method=\"GET\">\n<div class=\"row\">\n<div class=\"col-12\">\n<div class=\"input-group\">\n<input type=\"text\" class=\"form-control\" name=\"term\" placeholder=\"Search\"/>\n<button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n" + 
      (guard((context != null) ? context['showInControl'] : null) ?
        "\n<select name=\"in\" class=\"form-select\">\n" + 
          compiled.blocks['inOptions'](helpers, context, guard, iter, helper) + 
          "\n</select>\n" :
        "") + 
      "\n</div>\n<div class=\"position-relative\">\n<div class=\"quick-search-container dropdown-menu p-2 d-block hidden\" style=\"right: auto; z-index: 1001;\">\n<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n<div class=\"quick-search-results-container\"></div>\n</div>\n</div>\n</div>\n</div>\n</form>\n</div>\n<script>\n(function() {\nasync function prepareSearch() {\nconst isQuickSearchEnabled = " + 
      __escape(guard((context != null) ? context['enableQuickSearch'] : null)) + 
      ";\nif (isQuickSearchEnabled) {\nconst search = await app.require('search');\nconst searchWidget =  $('.search-widget');\nfunction enableQuickSearch () {\nsearch.enableQuickSearch({\nsearchElements: {\ninputEl: searchWidget.find('input[name=\"term\"]'),\nresultEl: searchWidget.find('.quick-search-container'),\n},\nsearchOptions: {\nin: searchWidget.find('select[name=\"in\"]').val(),\n},\n});\n}\nenableQuickSearch();\nsearchWidget.find('select[name=\"in\"]').on('change', function () {\nenableQuickSearch();\nsearchWidget.find('input[name=\"term\"]').trigger('refresh');\n});\n}\n}\nif (document.readyState === 'loading') {\ndocument.addEventListener('DOMContentLoaded', prepareSearch);\n} else {\nprepareSearch();\n}\n})();\n</script>";
  }

  compiled.blocks = {
    'inOptions': function inOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['inOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['selected'] : null) ?
            " selected " :
            "") + 
          ">" + 
          __escape(guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['label'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
