
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
    return "<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n<div class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem; z-index: 1;\">\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-posts\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['groups/details'] : null) ?
        "active" :
        "") + 
      "\">\n<div class=\"flex-grow-1\">[[global:posts]]</div>\n</button>\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-members\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2\">\n<div class=\"flex-grow-1\">[[groups:members]]</div>\n<span component=\"group/member/count\" class=\"flex-shrink-0 text-xs lh-1\" title=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)])) + 
      "</span>\n</button>\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-pending\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2\">\n<div class=\"flex-grow-1\">[[groups:details.pending]]</div>\n<span component=\"group/pending/count\" class=\"flex-shrink-0 text-xs lh-1\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null)])) + 
          "</span>\n</button>\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-invited\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold gap-2\">\n<div class=\"flex-grow-1\">[[groups:details.invited]]</div>\n<span component=\"group/invited/count\" class=\"flex-shrink-0 text-xs lh-1\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null)])) + 
          "</span>\n</button>\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-admin\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold\">\n<div class=\"flex-grow-1\">[[global:header.admin]]</div>\n</button>\n" :
        "") + 
      "\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
