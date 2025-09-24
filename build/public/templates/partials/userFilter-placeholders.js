
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
    return "<div class=\"placeholder-wave w-100 d-flex gap-2\">\n<button class=\"btn btn-light btn-sm border placeholder col-3\"></button>\n<button class=\"btn btn-light btn-sm border placeholder col-4\"></button>\n<button class=\"btn btn-light btn-sm border placeholder col-3\"></button>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
