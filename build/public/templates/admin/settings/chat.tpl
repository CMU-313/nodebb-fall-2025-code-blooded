<div class="acp-page-container">
<div component="settings/main/header" class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
<div class="col-12 col-md-8 px-0 mb-1 mb-md-0">
<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
</div>
<div class="col-12 col-md-4 px-0 px-md-3">
<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
</div>
</div>
<div class="row settings m-0">
<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
<div id="chat-settings" class="mb-4">
<h5 class="fw-bold tracking-tight settings-header hidden">[[admin/settings/chat:chat-settings]]</h5>
<div class="mb-3">
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="disableChat" data-field="disableChat">
<label for="disableChat" class="form-check-label">[[admin/settings/chat:disable]]</label>
</div>
</div>
<div class="mb-3">
<div class="form-check form-switch">
<input type="checkbox" class="form-check-input" id="disableChatMessageEditing" data-field="disableChatMessageEditing">
<label for="disableChatMessageEditing" class="form-check-label">[[admin/settings/chat:disable-editing]]</label>
</div>
<p class="form-text">[[admin/settings/chat:disable-editing-help]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="chatEditDuration">[[admin/settings/chat:restrictions.seconds-edit-after]]</label>
<input id="chatEditDuration" type="text" class="form-control" value="0" data-field="chatEditDuration">
<p class="form-text">[[admin/settings/chat:zero-is-disabled]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="chatDeleteDuration">[[admin/settings/chat:restrictions.seconds-delete-after]]</label>
<input id="chatDeleteDuration" type="text" class="form-control" value="0" data-field="chatDeleteDuration">
<p class="form-text">[[admin/settings/chat:zero-is-disabled]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="maximumChatRoomNameLength">[[admin/settings/chat:max-chat-room-name-length]]</label>
<input id="maximumChatRoomNameLength" type="text" class="form-control" value="50" data-field="maximumChatRoomNameLength">
<p class="form-text">[[admin/settings/chat:zero-is-disabled]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="maximumChatMessageLength">[[admin/settings/chat:max-length]]</label>
<input id="maximumChatMessageLength" type="text" class="form-control" value="1000" data-field="maximumChatMessageLength">
</div>
<div class="mb-3">
<label class="form-label" for="maximumRemoteChatMessageLength">[[admin/settings/chat:max-length-remote]]</label>
<input id="maximumRemoteChatMessageLength" type="text" class="form-control" value="5000" data-field="maximumRemoteChatMessageLength">
<p class="form-text">[[admin/settings/chat:max-length-remote-help]]</p>
</div>
<div class="mb-3">
<label class="form-label" for="maximumUsersInChatRoom">[[admin/settings/chat:max-room-size]]</label>
<input id="maximumUsersInChatRoom" type="text" class="form-control" value="0" data-field="maximumUsersInChatRoom">
</div>
<div class="mb-3">
<label class="form-label" for="chatMessageDelay">[[admin/settings/chat:delay]]</label>
<input id="chatMessageDelay" type="text" class="form-control" data-field="chatMessageDelay">
</div>
<div class="mb-3">
<label class="form-label" for="notificationSendDelay">[[admin/settings/chat:notification-delay]]</label>
<input id="notificationSendDelay" type="text" class="form-control" value="60" data-field="notificationSendDelay">
<p class="form-text">[[admin/settings/chat:notification-delay-help]]</p>
</div>
</div>
</div>
<div class="col-md-4 d-none d-md-block px-3 hidden" component="settings/toc">
<div class="sticky-top" style="top: 4.0rem;">
<div class="fw-bold text-xs text-muted mb-1">[[admin/settings/general:on-this-page]]</div>
<nav id="settings-navbar" class="h-100 flex-column align-items-stretch">
<nav class="nav nav-pills flex-column gap-2" component="settings/toc/list">
<!-- this is filled by public/src/admin/settings.js populateTOC function -->
</nav>
</nav>
</div>
</div>
</div>
</div>