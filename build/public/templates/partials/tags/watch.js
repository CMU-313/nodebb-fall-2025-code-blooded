
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"tag/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"tag/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[tags:watching]]</span>\n</span>\n<span component=\"tag/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            " hidden" :
            "") + 
          "\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o text-primary\"></i>\n<span class=\"d-none d-md-inline fw-semibold\">[[tags:not-watching]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"tag/following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[tags:watching]]</span>\n</span>\n<div class=\"help-text text-muted text-xs\">[[tags:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"tag/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"tag/not-following\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[tags:not-watching]]</span>\n</span>\n<div class=\"help-text text-muted text-xs\">[[tags:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"tag/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "fa-check") + 
          "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
