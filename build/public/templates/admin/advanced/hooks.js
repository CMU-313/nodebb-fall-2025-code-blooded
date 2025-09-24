
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
    return "<div class=\"hooks-list px-lg-4\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n" + 
      compiled.blocks['hooks'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'hooks': function hooks(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hooks'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"mb-3 border rounded p-2\">\n<div class=\"\" role=\"tab\">\n<h6 class=\"mb-0 d-flex align-items-center\">\n<button class=\"btn btn-ghost btn-sm\" data-bs-toggle=\"collapse\" data-bs-parent=\"#accordion\" data-bs-target=\"#" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" aria-expanded=\"true\" aria-controls=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['hookName'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['count'] : null)) + 
          ")</button>\n</h6>\n</div>\n<div id=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" class=\"accordion-collapse collapse\" role=\"tabpanel\">\n<div class=\"d-flex flex-column mt-3 ms-3\">\n" + 
          iter(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['methods'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<div class=\"mb-3\">\n<span>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['id'] : null)) + 
              "</span>\n<span class=\"text-secondary text-sm\">Priority: " + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['priority'] : null)) + 
              "</span>\n<button class=\"btn btn-light btn-sm float-end\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\" aria-expanded=\"false\" aria-controls=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n<i class=\"fa fa-eye\"></i> Show Code\n</button>\n</div>\n<div class=\"collapse\" id=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n<pre class=\"p-3 text-bg-light border rounded\">" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['method'] : null)) + 
              "</pre>\n</div>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
