
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
    return "<div class=\"info\">\n<div class=\"card\">\n<h5 class=\"card-header\">\n[[admin/development/info:you-are-on, " + 
      __escape(guard((context != null) ? context['host'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['port'] : null)) + 
      "]] &bull; [[admin/development/info:ip, " + 
      __escape(guard((context != null) ? context['ip'] : null)) + 
      "]]\n</h5>\n<div class=\"card-body\">\n<span>[[admin/development/info:nodes-responded, " + 
      __escape(guard((context != null) ? context['nodeCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timeout'] : null)) + 
      "]]</span>\n<div class=\"table-responsive\">\n<table class=\"table table-sm text-sm\">\n<thead>\n<tr>\n<td class=\"fw-bold\">[[admin/development/info:host]]</td>\n<td class=\"fw-bold text-center\">[[admin/development/info:primary]]</td>\n<td class=\"fw-bold\">[[admin/development/info:nodejs]]</td>\n<td class=\"fw-bold\">[[admin/development/info:online]]</td>\n<td class=\"fw-bold\">[[admin/development/info:git]]</td>\n<td class=\"fw-bold\">[[admin/development/info:cpu-usage]]</td>\n<td class=\"fw-bold\">[[admin/development/info:process-memory]]</td>\n<td class=\"fw-bold\">[[admin/development/info:system-memory]]</td>\n<td class=\"fw-bold\">[[admin/development/info:load]]</td>\n<td class=\"fw-bold text-end\">[[admin/development/info:uptime]]</td>\n</tr>\n</thead>\n<tbody class=\"text-xs\">\n" + 
      compiled.blocks['info'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n<div class=\"card\">\n<h5 class=\"card-header\">\n[[admin/development/info:info]]\n</h5>\n<div class=\"card-body\">\n<div class=\"p-3 text-bg-light border border-secondary rounded\">\n<pre>" + 
      __escape(guard((context != null) ? context['infoJSON'] : null)) + 
      "</pre>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'info': function info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr>\n<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['hostname'] : null)) + 
          ":" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['port'] : null)) + 
          "</td>\n<td class=\"text-center\">\n" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['isPrimary'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          " /\n" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['runJobs'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          "\n</td>\n<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['version'] : null)) + 
          "</td>\n<td>\n<span title=\"[[admin/development/info:registered]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineRegisteredCount'] : null)) + 
          "</span> /\n<span title=\"[[admin/development/info:guests]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineGuestCount'] : null)) + 
          "</span> /\n<span title=\"[[admin/development/info:sockets]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['socketCount'] : null)) + 
          "</span> /\n<span title=\"[[admin/development/info:connection-count]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['connectionCount'] : null)) + 
          "</span>\n</td>\n<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['branch'] : null)) + 
          "@<a href=\"https://github.com/NodeBB/NodeBB/commit/" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hash'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hashShort'] : null)) + 
          "</a></td>\n<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['cpuUsage'] : null)) + 
          "%</td>\n<td>\n<span title=\"[[admin/development/info:used-memory-process]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null && context['info'][key0]['process']['memoryUsage'] != null) ? context['info'][key0]['process']['memoryUsage']['humanReadable'] : null)) + 
          " gb</span>\n</td>\n<td>\n<span title=\"[[admin/development/info:used-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['usedmem'] : null)) + 
          " gb</span> /\n<span title=\"[[admin/development/info:total-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['totalmem'] : null)) + 
          " gb</span>\n</td>\n<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['load'] : null)) + 
          "</td>\n<td class=\"text-end\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['uptimeHumanReadable'] : null)) + 
          "</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
