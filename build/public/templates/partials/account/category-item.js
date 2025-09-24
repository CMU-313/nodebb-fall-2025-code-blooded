
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-parent-cid=\"" + 
      __escape(guard((context != null) ? context['parentCid'] : null)) + 
      "\" class=\"category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n<div class=\"content depth-" + 
      __escape(guard((context != null) ? context['depth'] : null)) + 
      " d-flex gap-2\">\n<div class=\"flex-grow-1 align-items-start d-flex gap-2\">\n<div>\n" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-1"])) + 
      "\n</div>\n<div class=\"d-grid gap-0\">\n<div class=\"title fw-semibold\">\n" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null) ? context['link'] : null) ?
            __escape(guard((context != null) ? context['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null))) + 
          "\" itemprop=\"url\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</a>\n") + 
      "\n</div>\n" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n<div class=\"description text-muted text-xs w-100\">" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "</div>\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"flex-shrink-0\">\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-ghost btn-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category/watching/menu\" class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-bell-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:watching]]</span></span>\n<span component=\"category/tracking/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-inbox text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:tracking]]</span></span>\n<span component=\"category/notwatching/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-clock-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:not-watching]]</span></span>\n<span component=\"category/ignoring/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-eye-slash text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:ignoring]]</span></span>\n</button>\n<ul class=\"dropdown-menu p-1 text-sm " + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "dropdown-menu-end" :
            "") + 
          "\" role=\"menu\">\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/watching\" data-state=\"watching\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/tracking\" data-state=\"tracking\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-inbox text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:tracking]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:tracking.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/tracking/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-clock-o text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:not-watching]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:not-watching.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\" role=\"menuitem\">\n<div class=\"flex-grow-1 d-flex flex-column\">\n<span class=\"d-flex align-items-center gap-2\">\n<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n<span class=\"flex-grow-1 fw-semibold\">[[category:ignoring]]</span>\n</span>\n<div class=\"help-text text-secondary text-xs\">[[category:ignoring.description]]</div>\n</div>\n<span class=\"flex-shrink-0\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n</a>\n</li>\n</ul>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<hr />\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
