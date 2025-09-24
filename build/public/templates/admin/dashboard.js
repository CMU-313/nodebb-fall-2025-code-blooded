
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
    return "<div class=\"row dashboard px-lg-4\">\n<div class=\"col-lg-8 col-xl-9\">\n<div class=\"card mb-3\" id=\"analytics-panel\">\n<div class=\"card-header\">\n<div class=\"d-flex justify-content-between\">\n[[admin/dashboard:forum-traffic]]\n<div class=\"d-flex gap-1\">\n<a class=\"btn btn-sm btn-light lh-sm\" target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:view-as-json]]\"><i class=\"fa fa-fw fa-xs fa-terminal text-primary\"></i></a>\n<a class=\"btn btn-sm btn-light lh-sm\" id=\"expand-analytics\" href=\"#\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:expand-analytics]]\"><i class=\"fa fa-fw fa-xs fa-expand text-primary\"></i></a>\n</div>\n</div>\n</div>\n<div class=\"card-body\">\n<div class=\"graph-container position-relative\" id=\"analytics-traffic-container\" style=\"aspect-ratio: 2;\">\n<canvas id=\"analytics-traffic\" ></canvas>\n</div>\n<hr/>\n<div class=\"row\">\n<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\n<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n</div>\n<div class=\"col-sm-3 text-center pageview-stats\">\n<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\n<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n</div>\n<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\n<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n</div>\n<div class=\"col-sm-3 text-center pageview-stats\">\n<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"table-responsive mb-3\">\n<table class=\"table\">\n<thead class=\"text-xs\">\n<tr>\n<th></th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.yesterday]]</th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.today]]</th>\n<th></th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.last-week]]</th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.this-week]]</th>\n<th></th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.last-month]]</th>\n<th class=\"text-end text-nowrap\">[[admin/dashboard:stats.this-month]]</th>\n<th></th>\n" + 
      (guard((context != null) ? context['hideAllTime'] : null) ?
        "" :
        "\n<th class=\"text-end\">[[admin/dashboard:stats.all]]</th>\n") + 
      "\n</tr>\n</thead>\n<tbody class=\"text-sm\">\n" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n<div class=\"row\">\n<div class=\"col-lg-4\">\n<div class=\"card\">\n<div class=\"card-header\">[[admin/dashboard:guest-registered-users]]</div>\n<div class=\"card-body\">\n<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n<canvas id=\"analytics-registered\"></canvas>\n</div>\n<ul class=\"graph-legend list-unstyled\" id=\"analytics-legend\">\n<li><div class=\"registered\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:registered]]</span></li>\n<li><div class=\"guest\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:guest]]</span></li>\n</ul>\n</div>\n</div>\n</div>\n<div class=\"col-lg-4\">\n<div class=\"card\">\n<div class=\"card-header\">[[admin/dashboard:user-presence]]</div>\n<div class=\"card-body\">\n<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n<canvas id=\"analytics-presence\"></canvas>\n</div>\n<ul class=\"graph-legend list-unstyled\" id=\"analytics-presence-legend\">\n<li><div class=\"reading-posts\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:reading-posts]]</span></li>\n<li><div class=\"on-categories\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:on-categories]]</span></li>\n<li><div class=\"browsing-topics\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:browsing-topics]]</span></li>\n<li><div class=\"recent\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:recent]]</span></li>\n<li><div class=\"unread\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:unread]]</span></li>\n</ul>\n</div>\n</div>\n</div>\n<div class=\"col-lg-4\">\n<div class=\"card\">\n<div class=\"card-header\">[[admin/dashboard:high-presence-topics]]</div>\n<div class=\"card-body\">\n<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n<canvas id=\"analytics-topics\"></canvas>\n</div>\n<ul class=\"graph-legend list-unstyled\" id=\"topics-legend\"></ul>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"col-lg-4 col-xl-3\">\n<div class=\"card mb-3\">\n<div class=\"card-body\">\n<div class=\"text-sm shadow-sm alert " + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "alert-danger" :
        (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            (guard((context != null) ? context['currentPrerelease'] : null) ?
                "alert-info" :
                "alert-success"))) + 
      " version-check\">\n<p class=\"\">[[admin/dashboard:running-version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</p>\n<p class=\"mb-0\">\n" + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "\n[[admin/dashboard:latest-lookup-failed]]\n" :
        "\n" + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\n" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n[[admin/dashboard:prerelease-upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n" :
                "\n[[admin/dashboard:upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n") + 
              "\n" :
            "\n" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n[[admin/dashboard:prerelease-warning]]\n" :
                "\n[[admin/dashboard:up-to-date]]\n") + 
              "\n") + 
          "\n") + 
      "\n</p>\n</div>\n<p class=\"form-text\">\n[[admin/dashboard:keep-updated]]\n</p>\n<hr/>\n" + 
      (guard((context != null) ? context['showSystemControls'] : null) ?
        "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/advanced\" class=\"d-block mb-2 btn btn-info btn-sm\" data-bs-placement=\"bottom\" data-bs-toggle=\"tooltip\" title=\"[[admin/dashboard:maintenance-mode-title]]\">[[admin/dashboard:maintenance-mode]]</a>\n<div class=\"form-check form-switch\">\n<label for=\"toggle-realtime\" class=\"form-check-label text-sm\">[[admin/dashboard:realtime-chart-updates]]</label>\n<input id=\"toggle-realtime\" class=\"form-check-input\" type=\"checkbox\">\n</div>\n<div class=\"form-check form-switch\">\n<label for=\"toggle-dark-mode\" class=\"form-check-label text-sm\">[[admin/dashboard:dark-mode]]</label>\n<input id=\"toggle-dark-mode\" class=\"form-check-input\" type=\"checkbox\">\n</div>\n" :
        "") + 
      "\n<hr/>\n<h6>[[admin/dashboard:notices]]</h6>\n" + 
      compiled.blocks['notices'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div class=\"card mb-3\">\n<div class=\"card-header\">[[admin/dashboard:active-users]]</div>\n<div class=\"card-body\">\n<div id=\"active-users\" class=\"stats\">\n<table class=\"table table-sm text-sm\">\n<tbody>\n<tr>\n<td>[[admin/dashboard:active-users.users]]</td>\n<td id=\"active-users-loggedin\" class=\"text-end\" style=\"width: 1px;\"></td>\n</tr>\n<tr>\n<td>[[admin/dashboard:active-users.guests]]</td>\n<td id=\"active-users-guests\" class=\"text-end\" style=\"width: 1px;\"></td>\n</tr>\n<tr>\n<td>[[admin/dashboard:active-users.total]]</td>\n<td id=\"active-users-total\" class=\"text-end\" style=\"width: 1px;\"></td>\n</tr>\n<tr>\n<td>[[admin/dashboard:active-users.connections]]</td>\n<td id=\"active-users-connections\" class=\"text-end\" style=\"width: 1px;\"></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div>\n</div>\n<div class=\"card\">\n<div class=\"card-header d-flex justify-content-between\">[[admin/dashboard:popular-searches]] <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard/searches\" class=\"text-xs\">[[admin/dashboard:view-all]]</a></div>\n<div class=\"card-body\">\n<table class=\"table table-sm text-sm search-list w-100\">\n<tbody>\n" + 
      compiled.blocks['popularSearches'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td class=\"fw-bold text-nowrap\">\n" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\n" :
            "\n" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\n") + 
          "\n</td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)])) + 
          "</td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)])) + 
          "</td>\n<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)])) + 
          "</td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)])) + 
          "</td>\n<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)])) + 
          "</td>\n<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)])) + 
          "</td>\n<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\n" + 
          (guard((context != null) ? context['hideAllTime'] : null) ?
            "" :
            "\n<td class=\"text-end\">" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)])) + 
              "</td>\n") + 
          "\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'notices': function notices(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notices'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"text-sm\">\n" + 
          (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['done'] : null) ?
            "\n<i class=\"fa fa-fw fa-check text-success\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['doneText'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null)) + 
                  "\" data-bs-toggle=\"tooltip\" title=\"" + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['tooltip'] : null)) + 
                  "\">" :
                "") + 
              "\n<i class=\"fa fa-fw fa-times text-danger\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['notDoneText'] : null)) + 
              "\n" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "</a>" :
                "") + 
              "\n") + 
          "\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'popularSearches': function popularSearches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularSearches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td class=\"w-100 text-truncate\" style=\"max-width:1px;\">" + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['value'] : null)) + 
          "</td>\n<td class=\"w-0 text-end text-nowrap\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['score'] : null)])) + 
          "</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
