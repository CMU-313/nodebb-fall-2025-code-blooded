
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
    return compiled.blocks['messages'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 " + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
            " deleted" :
            "") + 
          " " + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['pinned'] : null) ?
            " pinned" :
            "") + 
          " border-top pt-3\" data-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
          "\" data-self=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
          "\">\n" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['parent'] : null) ?
            "\n<div class=\"d-flex ms-4 mb-2 align-items-center\">\n<div component=\"chat/message/parent\" data-parent-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['mid'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['fromuid'] : null)) + 
              "\" class=\"btn btn-ghost btn-sm d-flex gap-2 ff-secondary text-start flex-row w-100\">\n<div class=\"d-flex gap-2 text-sm text-nowrap\">\n<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
              "\" class=\"text-decoration-none lh-1\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
              "</a>\n<a class=\"chat-user fw-semibold text-truncate\" style=\"max-width: 150px;\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['displayname'] : null)) + 
              "</a>\n</div>\n<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['timestampISO'] : null)) + 
              "\"></span>\n</div>\n<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 text-break w-100\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['content'] : null)) + 
              "</div>\n</div>\n</div>\n" :
            "") + 
          "\n<div class=\"message-header lh-1 d-flex align-items-center gap-2 text-sm pb-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
          "\" class=\"text-decoration-none\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "18px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          "</a>\n<span class=\"chat-user fw-semibold\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
          "</a></span>\n<span class=\"chat-timestamp text-muted timeago\" title=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
          "\"></span>\n<div component=\"chat/message/edited\" class=\"text-muted ms-auto " + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[global:edited-timestamp, " + 
          __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null), guard((context != null && context['config'] != null) ? context['config']['userLang'] : null)])) + 
          "]]\"><i class=\"fa fa-edit\"></i></span></div>\n</div>\n<div class=\"message-body-wrapper\">\n<div component=\"chat/message/body\" class=\"message-body ps-0 py-0 overflow-auto text-break\">\n" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
          "\n</div>\n<div component=\"chat/message/controls\" class=\"position-relative\">\n<div class=\"btn-group border shadow-sm controls position-absolute bg-body end-0\" style=\"bottom:1rem;\">\n" + 
          ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null))) ?
            "\n<button class=\"btn btn-sm btn-link\" data-action=\"edit\" title=\"[[topic:edit]]\"><i class=\"fa fa-pencil\"></i></button>\n" :
            "") + 
          "\n" + 
          ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || guard((context != null) ? context['isOwner'] : null)) ?
            "\n<button class=\"btn btn-sm btn-link\" data-action=\"pin\" title=\"[[modules:chat.pin-message]]\"><i class=\"fa fa-thumbtack\"></i></button>\n<button class=\"btn btn-sm btn-link\" data-action=\"unpin\" title=\"[[modules:chat.unpin-message]]\"><i class=\"fa fa-thumbtack fa-rotate-90\"></i></button>\n" :
            "") + 
          "\n</div>\n</div>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
