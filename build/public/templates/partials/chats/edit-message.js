
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
    return "<div class=\"d-flex flex-column gap-1 mb-1\">\n<textarea class=\"form-control w-100\" style=\"height:0; max-height: 30vh; resize: none;\">" + 
      __escape(guard((context != null) ? context['rawContent'] : null)) + 
      "</textarea>\n<div class=\"align-self-end d-flex gap-2\">\n<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"cancel\">[[global:cancel]]</button>\n<button class=\"btn btn-sm btn-success\" data-action=\"save\">[[global:save]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
