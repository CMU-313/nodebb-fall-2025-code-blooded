<div class="d-flex flex-column gap-2 px-lg-4 {{{ if isStarterPlan }}}opacity-75 pe-none{{{ end }}}">
<div class="d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2">
<div class="">
<h4 class="fw-bold tracking-tight mb-0">[[admin/extend/plugins:plugins]]</h4>
</div>
<div class="d-flex align-items-center gap-1">
<input {{{ if !isStarterPlan}}} autofocus{{{ end}}} class="form-control form-control-sm" type="text" id="plugin-search" placeholder="[[admin/extend/plugins:plugin-search-placeholder]]"/><br/>
<button class="btn btn-primary btn-sm text-nowrap" id="plugin-order">[[admin/extend/plugins:order-active]]</button>
</div>
</div>
<div>
{{{ if !canChangeState }}}
<div class="alert alert-warning">[[error:plugins-set-in-configuration]]</div>
{{{ end }}}
<ul class="nav nav-pills mb-3" id="plugin-tabs">
<li class="nav-item">
<button class="nav-link" data-bs-target="#trending" data-bs-toggle="tab">
[[admin/extend/plugins:trending]]
<i class="fa fa-star"></i>
</button>
</li>
<li class="nav-item">
<button class="nav-link active" data-bs-target="#installed" data-bs-toggle="tab">
[[admin/extend/plugins:installed]]
<span class="badge text-bg-light">{installedCount}</span>
</button>
</li>
<li class="nav-item">
<button class="nav-link" data-bs-target="#active" data-bs-toggle="tab">
[[admin/extend/plugins:active]]
<span class="badge text-bg-light">{activeCount}</span>
</button>
</li>
<li class="nav-item">
<button class="nav-link" data-bs-target="#deactive" data-bs-toggle="tab">
[[admin/extend/plugins:inactive]]
<span class="badge text-bg-light">{inactiveCount}</span>
</button>
</li>
<li class="nav-item">
<button class="nav-link" data-bs-target="#upgrade" data-bs-toggle="tab">
[[admin/extend/plugins:out-of-date]]
<span class="badge text-bg-light">{upgradeCount}</span>
</button>
</li>
<li class="nav-item">
<button class="nav-link" data-bs-target="#download" data-bs-toggle="tab">[[admin/extend/plugins:find-plugins]]</button>
</li>
</ul>
<div class="plugins row px-2">
<div class="col-lg-9">
<div class="tab-content">
<div class="tab-pane fade" id="trending">
<div class="alert alert-info no-plugins {{{ if !trending.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="trending list-unstyled">
{{{ each trending }}}
{{{ if !./error }}}
<li id="{./id}" data-plugin-index="{@index}" data-plugin-id="{./id}" data-version="{./version}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 {{{ if ./active }}}active{{{ end }}}">
<div>
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
{{{ if ./outdated }}}<i class="fa fa-exclamation-triangle text-danger"></i> {{{ end }}}
<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{./version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
{{{ if ./outdated }}}
<button data-action="upgrade" class="btn btn-success btn-sm"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ end }}}
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="controls d-flex flex-column gap-1">
{{{ if ./installed }}}
{{{ if ./isTheme }}}
<a href="{config.relative_path}/admin/appearance/themes" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-arrow-up-right-from-square text-primary"></i> [[admin/extend/plugins:plugin-item.themes]]</a>
{{{ else }}}
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if !./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-danger"></i> [[admin/extend/plugins:plugin-item.deactivate]]
</button>
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if ./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
{{{ end }}}
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
{{{ if ./active }}}
{{{ if ./settingsRoute }}}
<a href="{config.relative_path}{./settingsRoute}" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-wrench text-primary"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
{{{ end }}}
{{{ end }}}
{{{ else }}}
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]</button>
{{{ end }}}
</div>
</li>
{{{ end }}}
{{{ if ./error }}}
<li data-plugin-id="{./id}" class="clearfix">
<div class="float-end">
<button class="btn btn-light btn-sm disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
</div>
<h2><strong>{./id}</strong></h2>
<p class="text-xs">
[[admin/extend/plugins:plugin-item.unknown-explanation]]
</p>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="tab-pane fade show active" id="installed">
<div class="alert alert-info no-plugins {{{ if installed.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="installed list-unstyled">
{{{ each installed }}}
{{{ if !./error }}}
<li id="{./id}" data-plugin-index="{@index}" data-plugin-id="{./id}" data-version="{./version}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 {{{ if ./active }}}active{{{ end }}}">
<div>
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
{{{ if ./outdated }}}<i class="fa fa-exclamation-triangle text-danger"></i> {{{ end }}}
<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{./version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
{{{ if ./outdated }}}
<button data-action="upgrade" class="btn btn-success btn-sm"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ end }}}
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="controls d-flex flex-column gap-1">
{{{ if ./installed }}}
{{{ if ./isTheme }}}
<a href="{config.relative_path}/admin/appearance/themes" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-arrow-up-right-from-square text-primary"></i> [[admin/extend/plugins:plugin-item.themes]]</a>
{{{ else }}}
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if !./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-danger"></i> [[admin/extend/plugins:plugin-item.deactivate]]
</button>
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if ./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
{{{ end }}}
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
{{{ if ./active }}}
{{{ if ./settingsRoute }}}
<a href="{config.relative_path}{./settingsRoute}" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-wrench text-primary"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
{{{ end }}}
{{{ end }}}
{{{ else }}}
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]</button>
{{{ end }}}
</div>
</li>
{{{ end }}}
{{{ if ./error }}}
<li data-plugin-id="{./id}" class="clearfix">
<div class="float-end">
<button class="btn btn-light btn-sm disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
</div>
<h2><strong>{./id}</strong></h2>
<p class="text-xs">
[[admin/extend/plugins:plugin-item.unknown-explanation]]
</p>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="tab-pane fade" id="active">
<div class="alert alert-info no-plugins {{{ if active.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="active list-unstyled">
{{{ each active }}}
{{{ if !./error }}}
<li id="{./id}" data-plugin-index="{@index}" data-plugin-id="{./id}" data-version="{./version}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 {{{ if ./active }}}active{{{ end }}}">
<div>
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
{{{ if ./outdated }}}<i class="fa fa-exclamation-triangle text-danger"></i> {{{ end }}}
<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{./version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
{{{ if ./outdated }}}
<button data-action="upgrade" class="btn btn-success btn-sm"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ end }}}
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="controls d-flex flex-column gap-1">
{{{ if ./installed }}}
{{{ if ./isTheme }}}
<a href="{config.relative_path}/admin/appearance/themes" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-arrow-up-right-from-square text-primary"></i> [[admin/extend/plugins:plugin-item.themes]]</a>
{{{ else }}}
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if !./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-danger"></i> [[admin/extend/plugins:plugin-item.deactivate]]
</button>
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if ./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
{{{ end }}}
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
{{{ if ./active }}}
{{{ if ./settingsRoute }}}
<a href="{config.relative_path}{./settingsRoute}" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-wrench text-primary"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
{{{ end }}}
{{{ end }}}
{{{ else }}}
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]</button>
{{{ end }}}
</div>
</li>
{{{ end }}}
{{{ if ./error }}}
<li data-plugin-id="{./id}" class="clearfix">
<div class="float-end">
<button class="btn btn-light btn-sm disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
</div>
<h2><strong>{./id}</strong></h2>
<p class="text-xs">
[[admin/extend/plugins:plugin-item.unknown-explanation]]
</p>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="tab-pane fade" id="deactive">
<div class="alert alert-info no-plugins {{{ if inactive.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="deactive list-unstyled">
{{{ each inactive }}}
{{{ if !./error }}}
<li id="{./id}" data-plugin-index="{@index}" data-plugin-id="{./id}" data-version="{./version}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 {{{ if ./active }}}active{{{ end }}}">
<div>
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
{{{ if ./outdated }}}<i class="fa fa-exclamation-triangle text-danger"></i> {{{ end }}}
<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{./version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
{{{ if ./outdated }}}
<button data-action="upgrade" class="btn btn-success btn-sm"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ end }}}
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="controls d-flex flex-column gap-1">
{{{ if ./installed }}}
{{{ if ./isTheme }}}
<a href="{config.relative_path}/admin/appearance/themes" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-arrow-up-right-from-square text-primary"></i> [[admin/extend/plugins:plugin-item.themes]]</a>
{{{ else }}}
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if !./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-danger"></i> [[admin/extend/plugins:plugin-item.deactivate]]
</button>
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if ./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
{{{ end }}}
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
{{{ if ./active }}}
{{{ if ./settingsRoute }}}
<a href="{config.relative_path}{./settingsRoute}" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-wrench text-primary"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
{{{ end }}}
{{{ end }}}
{{{ else }}}
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]</button>
{{{ end }}}
</div>
</li>
{{{ end }}}
{{{ if ./error }}}
<li data-plugin-id="{./id}" class="clearfix">
<div class="float-end">
<button class="btn btn-light btn-sm disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
</div>
<h2><strong>{./id}</strong></h2>
<p class="text-xs">
[[admin/extend/plugins:plugin-item.unknown-explanation]]
</p>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="tab-pane fade" id="upgrade">
<div class="alert alert-info no-plugins {{{ if upgrade.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="upgrade list-unstyled">
{{{ each upgrade }}}
{{{ if !./error }}}
<li id="{./id}" data-plugin-index="{@index}" data-plugin-id="{./id}" data-version="{./version}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 {{{ if ./active }}}active{{{ end }}}">
<div>
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
{{{ if ./outdated }}}<i class="fa fa-exclamation-triangle text-danger"></i> {{{ end }}}
<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{./version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
{{{ if ./outdated }}}
<button data-action="upgrade" class="btn btn-success btn-sm"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ end }}}
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="controls d-flex flex-column gap-1">
{{{ if ./installed }}}
{{{ if ./isTheme }}}
<a href="{config.relative_path}/admin/appearance/themes" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-arrow-up-right-from-square text-primary"></i> [[admin/extend/plugins:plugin-item.themes]]</a>
{{{ else }}}
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if !./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-danger"></i> [[admin/extend/plugins:plugin-item.deactivate]]
</button>
<button data-action="toggleActive" class="btn btn-light btn-sm text-nowrap {{{ if ./active }}}hidden{{{ end }}} {{{ if !canChangeState }}}disabled{{{ end }}}">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
{{{ end }}}
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
{{{ if ./active }}}
{{{ if ./settingsRoute }}}
<a href="{config.relative_path}{./settingsRoute}" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-wrench text-primary"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
{{{ end }}}
{{{ end }}}
{{{ else }}}
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap"><i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]</button>
{{{ end }}}
</div>
</li>
{{{ end }}}
{{{ if ./error }}}
<li data-plugin-id="{./id}" class="clearfix">
<div class="float-end">
<button class="btn btn-light btn-sm disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
<button data-action="toggleInstall" data-installed="1" class="btn btn-light btn-sm"><i class="fa fa-trash text-danger"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
</div>
<h2><strong>{./id}</strong></h2>
<p class="text-xs">
[[admin/extend/plugins:plugin-item.unknown-explanation]]
</p>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="tab-pane fade" id="download">
<div class="alert alert-info no-plugins {{{ if download.length }}}hide{{{ end }}}">[[admin/extend/plugins:none-found]]</div>
<ul class="download list-unstyled">
{{{ each download }}}
<li id="{./id}" data-plugin-id="{./id}" class="d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2">
<div class="">
<h6><strong>{./name}</strong></h6>
{{{ if ./description }}}
<p class="text-xs">{./description}</p>
{{{ end }}}
<small>[[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{./latest}</strong></small>
<p class="text-xs">
{{{ if ./isCompatible }}}
<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
{{{ else }}}
<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
{{{ end }}}
</p>
{{{ if ./url }}}
<p class="text-xs mb-0">[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{./url}">{./url}</a></p>
{{{ end }}}
</div>
<div class="d-flex flex-column gap-1">
<button data-action="toggleActive" class="btn btn-light btn-sm hidden text-nowrap">
<i class="fa fa-power-off text-primary"></i> [[admin/extend/plugins:plugin-item.activate]]
</button>
<button data-action="toggleInstall" data-installed="0" class="btn btn-light btn-sm text-nowrap">
<i class="fa fa-download text-primary"></i> [[admin/extend/plugins:plugin-item.install]]
</button>
</div>
</li>
{{{ end }}}
</ul>
</div>
</div>
</div>
<div class="acp-sidebar col-lg-3">
<div class="card">
<div class="card-body">
<div class="form-check form-switch text-sm">
<input id="plugin-submit-usage" class="form-check-input" type="checkbox" data-field="submitPluginUsage" {{{ if submitPluginUsage }}}checked{{{ end }}}/>
<label for="plugin-submit-usage" class="form-check-label">[[admin/extend/plugins:submit-anonymous-usage]]</label>
</div>
<hr/>
<div>
<div class="fw-semibold text-sm">[[admin/extend/plugins:dev-interested]]</div>
<p class="text-xs text-muted">
[[admin/extend/plugins:docs-info]]
</p>
</div>
</div>
</div>
</div>
<div class="modal fade" id="order-active-plugins-modal">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title">[[admin/extend/plugins:order-active]]</h4>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
</div>
<div class="modal-body">
<p>
[[admin/extend/plugins:order.description]]
</p>
<p>
[[admin/extend/plugins:order.explanation]]
</p>
<ul class="plugin-list list-unstyled d-flex flex-column gap-2"></ul>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">[[global:buttons.close]]</button>
<button type="button" class="btn btn-primary" id="save-plugin-order">[[global:save]]</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>