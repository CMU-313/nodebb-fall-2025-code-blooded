
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
    return (guard((context != null && context['items'] != null) ? context['items']['length'] : null) ?
        "\n<li component=\"topic/event\" class=\"timeline-event text-muted d-flex align-items-start gap-2 pt-4 px-2 px-lg-0\">\n<div class=\"timeline-badge my-2 my-lg-1\">\n<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['icon'] : null) ?
            __escape(guard((context != null) ? context['icon'] : null)) :
            "fa-circle") + 
          " small\"></i>\n</div>\n<div class=\"d-flex flex-column align-items-start\">\n<button class=\"btn btn-sm btn-ghost\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#event-collapse-" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n[[topic:announcers-x, " + 
          __escape(guard((context != null && context['items'] != null) ? context['items']['length'] : null)) + 
          "]]\n</button>\n<div class=\"collapse align-self-start\" id=\"event-collapse-" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\">\n<div component=\"topic/event/items\">\n" + 
          compiled.blocks['./items'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</div>\n</div>\n</li>\n" :
        "\n<li component=\"topic/event\" class=\"timeline-event text-muted d-flex align-items-start align-items-lg-center gap-2 pt-4 px-2 px-lg-0\" data-topic-event-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-topic-event-type=\"" + 
          __escape(guard((context != null) ? context['type'] : null)) + 
          "\">\n<div class=\"timeline-badge\">\n<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['icon'] : null) ?
            __escape(guard((context != null) ? context['icon'] : null)) :
            "fa-circle") + 
          " small\"></i>\n</div>\n<span class=\"timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0\">\n" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "\n</span>\n" + 
          ((guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) && guard((context != null) ? context['id'] : null)) ?
            "\n<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
              __escape(guard((context != null) ? context['id'] : null)) + 
              "\" data-topic-event-type=\"" + 
              __escape(guard((context != null) ? context['type'] : null)) + 
              "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n" :
            "") + 
          "\n</li>\n");
  }

  compiled.blocks = {
    './items': function items(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['items'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex gap-2 pt-3 pt-lg-2\" data-topic-event-id=\"" + 
          __escape(guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['id'] : null)) + 
          "\" data-topic-event-type=\"" + 
          __escape(guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['type'] : null)) + 
          "\">\n<span class=\"timeline-text small d-flex align-items-center gap-1 flex-wrap flex-grow-1 flex-lg-grow-0\">\n" + 
          __escape(guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['text'] : null)) + 
          "\n</span>\n" + 
          ((guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) && guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['id'] : null)) ?
            "\n<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
              __escape(guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['id'] : null)) + 
              "\" data-topic-event-type=\"" + 
              __escape(guard((context != null && context['items'] != null && context['items'][key0] != null) ? context['items'][key0]['type'] : null)) + 
              "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n" :
            "") + 
          "\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
