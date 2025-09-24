
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
    return "<script type=\"application/ld+json\">{\n\"@context\": \"https://schema.org\",\n\"@type\": \"BreadcrumbList\",\n\"itemListElement\": [{\n\"@type\": \"ListItem\",\n\"position\": 1,\n\"name\": \"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "\",\n\"item\": \"" + 
      __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs']['0'] != null) ? context['breadcrumbs']['0']['url'] : null)) + 
      "\"\n}\n" + 
      compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
      "\n]}</script>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            "" :
            ",{\n\"@type\": \"ListItem\",\n\"position\": " + 
              __escape(helper(context, helpers, 'increment', [index, "1"])) + 
              ",\n\"name\": \"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)])) + 
              "\"\n" + 
              (index === length - 1 ?
                "" :
                ",\"item\": \"" + 
                  __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
                  "\"") + 
              "\n}");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
