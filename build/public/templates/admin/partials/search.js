
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
    return (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div component=\"acp/search\" class=\"my-1 acp-search\">\n<div class=\"dropdown\">\n<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\n<li role=\"presentation\" class=\"no-results\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.no-results]]</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\n<li role=\"presentation\" class=\"search-forum\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\n[[admin/menu:search.search-forum]]\n</a>\n</li>\n<li role=\"presentation\" class=\"keep-typing\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.keep-typing]]</a>\n</li>\n<li role=\"presentation\" class=\"start-typing\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.start-typing]]</a>\n</li>\n</ul>\n</div>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
