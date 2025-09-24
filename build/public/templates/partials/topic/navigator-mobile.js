
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
    return "<div class=\"d-flex w-100 navigator-mobile\">\n<div class=\"pagination-block text-bg-light m-2 rounded-1 border border-gray-300 w-100\" style=\"height:30px;\">\n<div class=\"position-relative\">\n<div class=\"progress-bar rounded-1 bg-info d-block position-absolute\" style=\"height:28px;\"></div>\n</div>\n<div class=\"wrapper dropup-center d-flex align-items-center justify-content-between w-100 h-100\" style=\"padding: 5px 0px;\">\n<div class=\"d-flex\">\n<div class=\"lh-1 px-2\">\n<i class=\"fa fa-angles-left pointer fa-fw pagetop fs-5\" style=\"z-index: 1;\"></i>\n</div>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n<div class=\"lh-1 px-2\">\n<i class=\"fa fa-angle-left pointer fa-fw pageprev fs-5\" style=\"z-index: 1;\"></i>\n</div>\n" :
        "") + 
      "\n</div>\n<a href=\"#\" class=\"text-reset dropdown-toggle d-inline-block px-3 text-decoration-none\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"d-inline-flex gap-2 align-items-center pagination-text position-relative fw-bold\"></span>\n</a>\n<div class=\"d-flex\">\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n<div class=\"lh-1 px-2\">\n<i class=\"fa fa-angle-right pointer fa-fw pagenext fs-5\" style=\"z-index: 1;\"></i>\n</div>\n" :
        "") + 
      "\n<div class=\"lh-1 px-2\">\n<i class=\"fa fa-angles-right pointer fa-fw pagebottom fs-5\" style=\"z-index: 1;\"></i>\n</div>\n</div>\n<ul class=\"dropdown-menu p-0\" role=\"menu\" style=\"width: 100%;\">\n<li class=\"p-3\">\n<div class=\"row\">\n<div class=\"col-8 post-content overflow-hidden mb-3\" style=\"height: 350px;\"></div>\n<div class=\"col-4 ps-0 text-end\">\n<div class=\"scroller-content\">\n<span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n<div class=\"scroller-container border-gray-200\" style=\"height: 300px;\">\n<div class=\"scroller-thumb position-relative text-nowrap\" style=\"height: 40px;\">\n<span class=\"thumb-text text-sm fw-bold user-select-none position-relative pe-2\" style=\"top: -15px;\"></span>\n<div class=\"rounded-2 scroller-thumb-icon bg-primary d-inline-block position-relative\" style=\"width: 9px; height:40px;\"></div>\n</div>\n</div>\n<span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n</div>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-6\">\n<button id=\"myNextPostBtn\" class=\"btn btn-sm btn-ghost border form-control text-truncate\" disabled>[[topic:go-to-my-next-post]]</button>\n</div>\n<div class=\"col-6\">\n<input type=\"number\" class=\"form-control form-control-sm\" id=\"indexInput\" placeholder=\"[[global:pagination.enter-index]]\">\n</div>\n</div>\n</li>\n</ul>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
