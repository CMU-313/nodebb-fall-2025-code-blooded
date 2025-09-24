
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
    return "<div class=\"d-flex align-items-start gap-3\">\n<div class=\"icon py-1 bg-body d-none d-sm-block\">\n<div class=\"placeholder bg-secondary rounded-circle\" style=\"width: 48px; height: 48px;\"></div>\n</div>\n<div class=\"d-flex flex-grow-1 flex-column placeholder-wave\">\n<div class=\"d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1\">\n<div class=\"placeholder bg-secondary rounded-1 col-2\">&nbsp;</div>\n</div>\n<div class=\"content mt-2 placeholder bg-secondary rounded-1 col-5\" component=\"post/content\" itemprop=\"text\">\n<p>&nbsp;</p>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
