
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
    return "<div class=\"d-flex flex-wrap gap-2 align-items-center\" component=\"search/filters\">\n<!-- category filter -->\n<div class=\"post-search-item\">\n<div component=\"category/filter\" class=\"dropdown\" data-filter-name=\"category\">\n<a component=\"category/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['label'] : null)) :
        "[[search:categories]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li class=\"px-2 py-1 mb-2 d-flex flex-column gap-2\">\n<div component=\"category-selector-search\">\n<input type=\"text\" class=\"form-control form-control-sm\" component=\"category/filter/search\" placeholder=\"[[search:type-a-category]]\">\n</div>\n</li>\n<div component=\"category/list\" class=\"overflow-auto ghost-scrollbar\" style=\"max-height: 350px;\"></div>\n<div class=\"px-3 py-1\">\n<div class=\"form-check\">\n<input id=\"search-children\" class=\"form-check-input\" type=\"checkbox\"/>\n<label class=\"form-check-label\" for=\"search-children\">[[search:search-child-categories]]</label>\n</div>\n</div>\n</ul>\n</div>\n</div>\n<!-- tag filter -->\n<div class=\"post-search-item\">\n<div component=\"tag/filter\" class=\"dropdown\" data-filter-name=\"tag\">\n<a component=\"tag/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['label'] : null)) :
        "[[search:tags]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control form-control-sm\" component=\"tag/filter/search\" placeholder=\"[[search:type-a-tag]]\">\n<div component=\"tag/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['tagFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr class=\"my-2\"/>\n<div component=\"tag/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['tagFilterResults'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</li>\n</ul>\n</div>\n</div>\n<!-- user name filter -->\n<div class=\"post-search-item\">\n<div component=\"user/filter\" class=\"dropdown\" data-filter-name=\"user\">\n<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['label'] : null)) :
        "[[search:posted-by]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control form-control-sm\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['userFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr class=\"my-2\"/>\n<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</li>\n</ul>\n</div>\n</div>\n<!-- reply count filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"replies\">\n<a id=\"reply-count-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['label'] : null)) :
        "[[search:replies]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-nowrap gap-2\">\n<select id=\"reply-count-filter\" class=\"form-select form-select-sm\">\n<option value=\"atleast\">[[search:at-least]]</option>\n<option value=\"atmost\">[[search:at-most]]</option>\n</select>\n<input id=\"reply-count\" type=\"number\" min=\"0\" class=\"form-control form-control-sm\" />\n</li>\n</ul>\n</div>\n</div>\n<!-- time filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"time\">\n<a id=\"post-time-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['label'] : null)) :
        "[[search:time]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-nowrap gap-2\">\n<select id=\"post-time-filter\" class=\"form-select form-select-sm\">\n<option value=\"newer\">[[search:newer-than]]</option>\n<option value=\"older\">[[search:older-than]]</option>\n</select>\n<select id=\"post-time-range\" class=\"form-select form-select-sm\">\n<option value=\"\">[[search:any-date]]</option>\n<option value=\"86400\">[[search:yesterday]]</option>\n<option value=\"604800\">[[search:one-week]]</option>\n<option value=\"1209600\">[[search:two-weeks]]</option>\n<option value=\"2592000\">[[search:one-month]]</option>\n<option value=\"7776000\">[[search:three-months]]</option>\n<option value=\"15552000\">[[search:six-months]]</option>\n<option value=\"31104000\">[[search:one-year]]</option>\n</select>\n</li>\n</ul>\n</div>\n</div>\n<!-- sort filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"sort\">\n<a id=\"sort-by-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['label'] : null)) :
        "[[search:sort]]") + 
      "</span>\n<span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 250px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-column gap-2\">\n<select id=\"post-sort-by\" class=\"form-select form-select-sm\">\n<option value=\"relevance\">[[search:relevance]]</option>\n<option value=\"timestamp\">[[search:post-time]]</option>\n<option value=\"votes\">[[search:votes]]</option>\n<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n<option value=\"topic.title\">[[search:topic-title]]</option>\n<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n<option value=\"topic.votes\">[[search:topic-votes]]</option>\n<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n<option value=\"user.username\">[[search:username]]</option>\n<option value=\"category.name\">[[search:category]]</option>\n</select>\n<select id=\"post-sort-direction\" class=\"form-select form-select-sm\">\n<option value=\"desc\">[[search:descending]]</option>\n<option value=\"asc\">[[search:ascending]]</option>\n</select>\n</li>\n</ul>\n</div>\n</div>\n<!-- save & reset preferences -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\">\n<a class=\"btn btn-light btn-sm border border-gray-300 dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">[[search:save]] <span class=\"caret text-primary opacity-75\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\" role=\"menu\">\n<li class=\"px-2 py-1 d-flex flex-column gap-2\">\n<button id=\"save-preferences\" class=\"btn btn-sm btn-primary\">[[search:save-preferences]]</button>\n<button id=\"clear-preferences\" class=\"btn btn-sm btn-ghost border\">[[search:clear-preferences]]</button>\n</li>\n</ul>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'tagFilterSelected': function tagFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n<div>" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "</div>\n<button component=\"tag/filter/delete\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'tagFilterResults': function tagFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      });
    },
    'userFilterSelected': function userFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['username'] : null)) + 
          "\n<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
