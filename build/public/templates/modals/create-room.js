
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
    return "<div class=\"mb-3\">\n<div class=\"mb-3\">\n<label class=\"form-label text-nowrap\">[[modules:chat.room-name-optional]]</label>\n<input component=\"chat/room/name\" class=\"form-control\" />\n</div>\n<div class=\"mb-3\">\n<div class=\"dropdown\">\n<label class=\"form-label\">[[modules:chat.add-user]]</label>\n<input component=\"chat/search\" class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"/>\n<ul component=\"chat/search/list\" class=\"dropdown-menu p-1 overflow-auto\" style=\"max-height: 400px;\" role=\"menu\">\n<li component=\"chat/search/start-typing\"><a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.start-typing]]</a></li>\n<li component=\"chat/search/no-users\" class=\"hidden\"><a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[users:no-users-found]]</a></li>\n" + 
      compiled.blocks['searchUsers'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<ul component=\"chat/room/users\" class=\"list-group mt-2\">\n" + 
      compiled.blocks['selectedUsers'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n" + 
      (guard((context != null && context['user'] != null) ? context['user']['isAdmin'] : null) ?
        "\n<select component=\"chat/room/type\" class=\"form-select mb-3\">\n<option value=\"private\">[[modules:chat.private.option]]</option>\n<option value=\"public\">[[modules:chat.public.option]]</option>\n</select>\n<div component=\"chat/room/public/options\" class=\"hidden\">\n<select component=\"chat/room/groups\" class=\"form-select\" multiple size=\"10\">\n" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n</select>\n<p class=\"form-text\">\n[[modules:chat.public.groups-help]]\n</p>\n</div>\n" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    'searchUsers': function searchUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searchUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"chat/search/user\" data-uid=\"" + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['uid'] : null)) + 
          "\"><a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['username'] : null)) + 
          "</a></li>\n";
      }, function alt() {
        return "";
      });
    },
    'selectedUsers': function selectedUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"list-group-item d-flex gap-2 align-items-center justify-content-between\" component=\"chat/user\" data-uid=\"" + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['uid'] : null)) + 
          "\">\n<a href=\"#\" class=\"text-reset text-decoration-none\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['username'] : null)) + 
          "</a>\n<button component=\"chat/room/users/remove\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-times text-danger\"></i></button>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
