
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
    return "<div component=\"groups/container\" class=\"groups details flex-fill\">\n<div class=\"cover position-absolute start-0 top-0\" component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\n<div class=\"container\">\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<div class=\"controls text-center\">\n<span class=\"upload p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-upload\"></i></span>\n<span class=\"resize p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-arrows\"></i></span>\n<span class=\"remove p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-times\"></i></span>\n</div>\n<div class=\"save text-bg-primary\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n<div class=\"indicator text-bg-primary\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"d-flex flex-column flex-md-row justify-content-md-between pb-4 mb-4 mt-2 border-bottom\">\n<div class=\"d-flex flex-column mt-1\">\n<div class=\"d-flex align-items-center gap-2\">\n<h3 class=\"mb-0\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h3>\n</div>\n<div class=\"d-flex gap-2\">\n" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "\n<div>\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"badge text-bg-light border border-1\">[[groups:details.private]]</span>" :
        "") + 
      "\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"badge text-bg-light border border-1\">[[groups:details.hidden]]</span>" :
        "") + 
      "\n</div>\n</div>\n</div>\n<div class=\"d-flex gap-2 align-items-start\">\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['slug'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-light\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"d-flex flex-column flex-md-row\">\n<div data-widget-area=\"left\">\n" + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n<div class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem; z-index: 1;\">\n<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-posts\" class=\"btn btn-ghost btn-sm text-start d-flex align-items-center ff-secondary fw-semibold " + 
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
      "\n</div>\n</div>\n<div class=\"flex-grow-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n<div class=\"tab-content\">\n<div class=\"tab-pane fade show active\" id=\"groups-posts\" role=\"tabpanel\">\n<h3 class=\"fw-semibold fs-5 mb-0\">[[global:posts]]</h3>\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n<div class=\"alert alert-info my-2\">[[groups:details.has-no-posts]]</div>\n") + 
      "\n<ul component=\"posts\" class=\"posts-list list-unstyled\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n</div>\n<div class=\"tab-pane fade\" id=\"groups-members\" role=\"tabpanel\">\n<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.members]]</h3>\n<div class=\"d-flex " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "justify-content-between" :
        "justify-content-end") + 
      " mb-3\">\n" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n<div class=\"flex-shrink-0\">\n<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm me-3\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i> [[groups:details.add-member]]</button>\n</div>\n" :
        "") + 
      "\n<div>\n<div class=\"input-group\">\n<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n<button class=\"btn btn-primary btn-sm search-button\" type=\"button\">\n<i class=\"fa fa-search\"></i>\n</button>\n</div>\n</div>\n</div>\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"mb-5\" style=\"max-height: 500px; overflow: auto;\">\n<table class=\"table table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<div class=\"tab-pane fade\" id=\"groups-pending\" role=\"tabpanel\">\n<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.pending]]</h3>\n" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\n<div class=\"d-flex justify-content-end gap-2 mb-3\">\n<button class=\"btn btn-danger btn-sm\" data-action=\"rejectAll\">[[groups:pending.reject-all]]</button>\n<button class=\"btn btn-success btn-sm\" data-action=\"acceptAll\">[[groups:pending.accept-all]]</button>\n</div>\n" :
            "") + 
          "\n<div style=\"max-height: 500px;overflow: auto;\">\n<div component=\"groups/pending/alert\" class=\"alert alert-info " + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[groups:pending.none]]</div>\n<table component=\"groups/pending\" class=\"table table-hover\">\n<tbody>\n" + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"tab-pane fade\" id=\"groups-invited\" role=\"tabpanel\">\n<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.invited]]</h3>\n<label class=\"text-xs text-muted\">[[groups:invited.search]]</label>\n<div class=\"input-group mb-2\">\n<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\"/>\n<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n<div class=\"mb-2\">\n<label class=\"text-xs text-muted\">[[groups:bulk-invite-instructions]]</label>\n<textarea class=\"form-control\" component=\"groups/members/bulk-invite\"></textarea>\n</div>\n<div class=\"mb-2 clearfix\">\n<button type=\"button\" class=\"btn btn-primary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n</div>\n<div style=\"max-height: 500px; overflow: auto;\">\n<div component=\"groups/invited/alert\" class=\"alert alert-info " + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[groups:invited.none]]</div>\n<table component=\"groups/invited\" class=\"table table-hover\">\n<tbody>\n" + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"tab-pane fade\" id=\"groups-admin\" role=\"tabpanel\">\n<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.owner-options]]</h3>\n<div class=\"options\">\n<form component=\"groups/settings\" role=\"form\">\n<div class=\"row\">\n<div class=\"col-12 col-lg-6\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"name\">[[groups:details.group-name]]</label>\n<input " + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "readonly" :
            "") + 
          " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
          "\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"description\">[[groups:details.description]]</label>\n<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
          "</textarea>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"private\">[[groups:details.private]]</label>\n<input class=\"form-check-input\" name=\"private\" id=\"private\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
            " checked" :
            "") + 
          ">\n" + 
          (guard((context != null) ? context['allowPrivateGroups'] : null) ?
            "" :
            "\n<p class=\"form-text\">\n[[groups:details.private-system-help]]\n</p>\n") + 
          "\n<p class=\"form-text text-xs m-0\">\n[[groups:details.private-help]]\n</p>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"hidden\">[[groups:details.hidden]]</label>\n<input class=\"form-check-input\" name=\"hidden\" id=\"hidden\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
            " checked" :
            "") + 
          ">\n<p class=\"form-text text-xs m-0\">\n[[groups:details.hidden-help]]\n</p>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableJoinRequests\">[[groups:details.disableJoinRequests]]</label>\n<input class=\"form-check-input\" name=\"disableJoinRequests\" id=\"disableJoinRequests\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableLeave\">[[groups:details.disableLeave]]</label>\n<input class=\"form-check-input\" name=\"disableLeave\" id=\"disableLeave\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n</div>\n<div class=\"col-12 col-lg-6\">\n<div class=\"d-flex gap-2 align-items-center\">\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"userTitleEnabled\">[[groups:details.userTitleEnabled]]</label>\n<input class=\"form-check-input\" name=\"userTitleEnabled\" id=\"userTitleEnabled\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n<span class=\"badge rounded-1 text-uppercase text-truncate rounded-1 " + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " hide") + 
          "\" style=\"max-width:150px; color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
          "\"><i class=\"fa " + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            " " + 
              __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
              (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
                " me-1" :
                "") :
            "") + 
          "\"></i><span class=\"badge-text\">" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
            "") + 
          "</span></span>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"userTitle\">[[groups:details.badge-text]]</label>\n<div class=\"d-flex gap-1\">\n<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
          "\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          " />\n<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-outline-secondary text-nowrap\" data-action=\"icon-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change-icon]]</button>\n<input type=\"hidden\" name=\"icon\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\" />\n<div id=\"icons\" class=\"hidden\">\n<div class=\"icon-container\">\n<div class=\"row nbb-fa-icons\">\n<div class=\"icon-container\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n</div>\n<div class=\"d-flex nbb-fa-icons flex-wrap\">\n" + 
          compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<p class=\"form-text text-center\">\nFor a full list of icons, please consult:\n<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change-label-colour]]</label>\n<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" id=\"labelColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
            "") + 
          "\" />\n</div>\n<div class=\"mb-2\">\n<label class=\"form-label text-xs text-muted\" for=\"textColor\" class=\"badge-color-label\">[[groups:details.change-text-colour]]</label>\n<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" id=\"textColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
            "") + 
          "\" />\n</div>\n</div>\n</div>\n<hr />\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n<div class=\"d-flex gap-1\">\n<div class=\"member-post-cids-selector\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
          ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
            "\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
              "\n<span class=\"fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw " + 
              (guard((context != null) ? context['selectCategoryIcon'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
                "fa-list") + 
              " text-primary\"></i>\n<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                "[[topic:thread-tools.select-category]]") + 
              "</span>\n") + 
          "\n</span>\n</button>\n<div class=\"dropdown-menu p-1\">\n<div component=\"category-selector-search\" class=\"p-1 hidden\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n<hr class=\"mt-2 mb-0\"/>\n</div>\n<ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n</div>\n<input id=\"memberPostCids\" type=\"text\" class=\"form-control form-control-sm\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
          "\">\n</div>\n</div>\n<div class=\"d-flex justify-content-end gap-2\">\n<button class=\"btn btn-link text-danger\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n</div>\n</form>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<div data-widget-area=\"right\">\n" + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"post\" class=\"posts-list-item  " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n<hr/>\n<a class=\"topic-title fw-semibold fs-5 mb-2 text-reset text-break d-block\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(helper(context, helpers, 'encodeURIComponent', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)])) + 
          "\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "<i class=\"fa fa-book text-muted\" title=\"[[topic:topic]]\"></i> " :
            "") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n</a>\n<div class=\"post-body d-flex flex-column gap-1 mb-2\">\n<div class=\"d-flex gap-2 post-info text-sm align-items-center\">\n<div class=\"post-author d-flex align-items-center gap-1\">\n<a class=\"lh-1 text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          "</a>\n<a class=\"lh-1 fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n</div>\n<span class=\"timeago text-muted lh-1\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n<div component=\"post/content\" class=\"content text-sm text-break\">\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n</div>\n<div class=\"mb-3 d-flex flex-wrap gap-1 w-100\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "a", "border"])) + 
          "\n<span data-tid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tid'] : null)) + 
          "\" component=\"topic/tags\" class=\"lh-1 tag-list d-flex flex-wrap gap-1 " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null) ? context['posts'][key0]['topic']['tags']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
              "\"><span class=\"badge border border-gray-300 fw-normal tag tag-class-" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['class'] : null)) + 
              "\" data-tag=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['value'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
              "</span></a>\n";
          }, function alt() {
            return "";
          }) + 
          "\n</span>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr class=\"w-100\" data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\" data-isowner=\"" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "1" :
            "0") + 
          "\">\n<td class=\"member-name p-2 w-100 \">\n<div class=\"d-flex align-items-center justify-content-between\">\n<div class=\"d-flex align-items-center gap-2\">\n<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a class=\"align-text-top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a>\n<i component=\"groups/owner/icon\" title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star align-text-top text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n</div>\n" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n<div class=\"owner-controls d-flex gap-1\">\n<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n<i class=\"fa fa-star text-warning\"></i>\n</a>\n<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n<i class=\"fa fa-ban text-danger\"></i>\n</a>\n</div>\n" :
            "") + 
          "\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n<div class=\"d-flex gap-2\">\n<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n</div>\n<div class=\"d-flex gap-2\">\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n<button class=\"btn btn-success btn-sm\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n<div class=\"d-flex align-items-center gap-2\">\n<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n</div>\n<button class=\"btn btn-outline-secondary btn-sm text-nowrap\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</button>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1 " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" role=\"menuitem\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n<div class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
