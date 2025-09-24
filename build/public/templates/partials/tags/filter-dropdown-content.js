
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
    return "<button type=\"button\" class=\"btn btn-ghost btn-sm d-flex align-items-center ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
      (guard((context != null) ? context['selectedTag'] : null) ?
        "\n<span class=\"d-inline-flex align-items-center gap-1\">\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          __escape(guard((context != null && context['selectedTag'] != null) ? context['selectedTag']['label'] : null)) + 
          "</span>\n</span>\n" :
        "\n<i class=\"fa fa-fw fa-tags text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[tags:all-tags]]</span>\n") + 
      "\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"tag/filter/search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"tag/filter/list\" class=\"list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar\" role=\"menu\" style=\"max-height: 500px;\" role=\"menu\">\n<li role=\"presentation\" data-tag=\"\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span class=\"flex-grow-1\">[[tags:all-tags]]</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
      (guard((context != null) ? context['selectedTag'] : null) ?
        "invisible" :
        "") + 
      "\"></i>\n</a>\n</li>\n" + 
      compiled.blocks['tagItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>";
  }

  compiled.blocks = {
    'tagItems': function tagItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" data-tag=\"" + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"#\">\n<span component=\"tag-markup\" class=\"flex-grow-1\">\n<div class=\"d-inline-flex align-items-center gap-1\">\n" + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\n</div>\n</span>\n<i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
