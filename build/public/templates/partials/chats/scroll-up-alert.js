
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
    return "<div class=\"position-relative\">\n<div component=\"chat/messages/scroll-up-alert\" class=\"py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden\" role=\"button\" style=\"z-index: 500;\"><i class=\"fa fa-fw fa-arrow-down\"></i> [[modules:chat.scroll-up-alert]]</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
