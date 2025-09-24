
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
    return "<div class=\"emoji-dialog\" id=\"emoji-dialog\">\n<div class=\"emoji-tabs p-1\">\n<div class=\"emoji-dialog-search-container p-1\">\n<div class=\"input-group\">\n<input type=\"text\" class=\"form-control emoji-dialog-search shadow-none\" placeholder=\"[[emoji:search.placeholder]]\">\n<button type=\"button\" class=\"close btn btn-outline-secondary\" aria-label=\"[[global:close]]\">\n<span aria-hidden=\"true\">&times;</span>\n</button>\n</div>\n</div>\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n<li role=\"presentation\" class=\"emoji-dialog-search-results hidden nav-item m-0\">\n<a href=\"#emoji-tab-search\" class=\"nav-link\" aria-controls=\"search\" role=\"tab\" data-bs-toggle=\"tab\" data-ajaxify=\"false\">\n<i class=\"fa fa-fw fa-search text-muted pe-none\"></i>\n</a>\n</li>\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n<li role=\"presentation\" class=\"nav-item hidden\">\n<button href=\"#emoji-tab-legal\" class=\"nav-link text-bg-info\" aria-controls=\"legal\" role=\"tab\" data-bs-toggle=\"tab\" data-ajaxify=\"false\">\n[[emoji:modal.legal]]\n</button>\n</li>\n</ul>\n<!-- Tab panes -->\n<div class=\"tab-content\">\n<div role=\"tabpanel\" class=\"tab-pane emoji-dialog-search-results hidden\" id=\"emoji-tab-search\">\n<!-- search results emoji go here -->\n</div>\n" + 
      iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div role=\"tabpanel\" class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" id=\"emoji-tab-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n" + 
          iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['emojis'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<a class=\"emoji-link\" name=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['emojis'] != null && context['categories'][key0]['emojis'][key1] != null) ? context['categories'][key0]['emojis'][key1]['name'] : null)) + 
              "\" href=\"#\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['emojis'] != null && context['categories'][key0]['emojis'][key1] != null) ? context['categories'][key0]['emojis'][key1]['html'] : null)) + 
              "</a>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n";
      }, function alt() {
        return "";
      }) + 
      "\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"emoji-tab-legal\">\n<div class=\"row\">\n<div class=\"col-12 mb-3\">\n<p class=\"lead\">\n[[emoji:modal.legal.header]]\n</p>\n</div>\n" + 
      compiled.blocks['packs'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"nav-item m-0\">\n" + 
          ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) != "modifier") ?
            "\n<a href=\"#emoji-tab-" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\" class=\"nav-link " + 
              (index === 0 ?
                "active" :
                "") + 
              "\" aria-controls=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\" role=\"tab\" data-ajaxify=\"false\" title=\"[[emoji:categories." + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "]]\">\n<!-- [[emoji:categories." + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "]] -->\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "people") ?
                "<i class=\"fa fa-fw fa-smile text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "nature") ?
                "<i class=\"fa fa-fw fa-leaf text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "food") ?
                "<i class=\"fa fa-fw fa-burger text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "activity") ?
                "<i class=\"fa fa-fw fa-football text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "travel") ?
                "<i class=\"fa fa-fw fa-plane-departure text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "objects") ?
                "<i class=\"fa-regular fa-fw fa-lightbulb text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "symbols") ?
                "<i class=\"fa fa-fw fa-peace text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "flags") ?
                "<i class=\"fa fa-fw fa-flag text-muted pe-none\"></i>" :
                "") + 
              "\n" + 
              ((guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null) == "custom") ?
                "<i class=\"fa fa-fw fa-superpowers text-muted pe-none\"></i>" :
                "") + 
              "\n</a>\n" :
            "") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'packs': function packs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['packs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-12 mb-3\">\n<h3>[[emoji:modal.legal.set.header, " + 
          __escape(guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['name'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['id'] : null)) + 
          "]]</h3>\n" + 
          (guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['attribution'] : null) ?
            "\n<div class=\"mb-3\">\n<h4>[[emoji:modal.legal.set.attribution]]</h4>\n<div class=\"card card-body text-bg-light\">\n" + 
              __escape(guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['attribution'] : null)) + 
              "\n</div>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['license'] : null) ?
            "\n<div class=\"mb-3\">\n<h4>[[emoji:modal.legal.set.license]]</h4>\n<div class=\"card card-body text-bg-light\">\n" + 
              __escape(guard((context != null && context['packs'] != null && context['packs'][key0] != null) ? context['packs'][key0]['license'] : null)) + 
              "\n</div>\n</div>\n" :
            "") + 
          "\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
