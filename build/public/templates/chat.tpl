<div id="chat-modal" class="chat-modal d-flex flex-nowrap modal hide overflow-visible" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-center="false">
<div class="modal-dialog">
<div class="modal-content" component="chat/message/window">
<div class="modal-header d-flex gap-4 justify-content-between">
<div class="fs-6 flex-grow-1 fw-semibold tracking-tight text-truncate text-nowrap" component="chat/room/name" data-icon="{icon}">{{{ if ./roomName }}}<i class="fa {icon} text-muted"></i> {roomName}{{{ else }}}{./chatWithMessage}{{{ end}}}</div>
<div class="d-flex gap-1 align-items-center">
<button type="button" class="btn btn-ghost btn-sm d-none d-md-flex align-self-stretch align-items-center" data-action="maximize" title="[[modules:chat.maximize]]" data-bs-toggle="tooltip" data-bs-placement="bottom">
<i class="fa fa-fw fa-expand text-muted"></i>
</button>
<div class="d-flex gap-1 align-items-stretch">
<!-- search -->
<button class="btn btn-ghost btn-sm" component="chat/room/search/toggle" data-manual-tooltip="1" title="[[global:header.search]]">
<i class="fa fa-search text-muted"></i>
</button>
<div component="chat/room/search/container" class="position-relative hidden align-self-center">
<input component="chat/room/search" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" style="width: 150px;">
<a component="chat/room/search/clear" href="#" class="hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y">
<i class="fa fa-times text-muted opacity-75"></i>
</a>
</div>
<!-- notification dropdown -->
<div class="dropdown d-flex" data-manual-tooltip="1" title="[[modules:chat.notification-settings]]" component="chat/notification/setting">
<button class="btn btn-ghost btn-sm position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-bell text-muted"></i>
<span class="position-absolute top-0 end-0 text-xs text-muted opacity-50" style="font-size: 10px!important; padding: 1px; line-height: 10px;">
<i component="chat/notification/setting/icon" class="fa {notificationOptionsIcon}"></i>
</span>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
{{{ each notificationOptions }}}
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-value="{./value}" data-icon="{./icon}" role="menuitem">
<div class="d-flex flex-column gap-1">
<div class="d-flex align-items-center gap-2">
<div class="flex-grow-1">{./label}</div>
<i class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}hidden{{{ end }}}"></i>
</div>
{{{ if @first}}}
<div component="chat/notification/setting/sub-label" class="text-sm text-muted">{./subLabel}</div>
{{{ end }}}
</div>
</a>
</li>
{{{ if @first }}}
<li><hr class="dropdown-divider"></li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<!-- pinned messages -->
<button component="chat/pinned/messages/btn" class="btn btn-ghost btn-sm d-none d-lg-block flex-nowrap" title="[[modules:chat.pinned-messages]]" data-bs-toggle="tooltip" data-bs-placement="bottom">
<i class="fa fa-thumb-tack text-muted"></i>
</button>
<!-- manage/options dropdown -->
<div class="dropdown d-flex" data-manual-tooltip="1" title="[[modules:chat.options]]">
<button component="chat/controlsToggle" class="btn btn-ghost btn-sm" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-gear text-muted"></i>
</button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" component="chat/controls" role="menu">
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="manage" role="menuitem">
<i class="fa fa-fw text-muted fa-cog"></i> [[modules:chat.manage-room]]
</a>
</li>
{{{ if isOwner }}}
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="rename" role="menuitem">
<i class="fa fa-fw text-muted fa-edit"></i> [[modules:chat.rename-room]]
</a>
</li>
{{{ end }}}
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="leave" role="menuitem">
<i class="fa fa-fw text-muted fa-sign-out"></i> [[modules:chat.leave-room]]
</a>
</li>
{{{ if (public && isAdmin) }}}
<li>
<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="delete" role="menuitem">
<i class="fa fa-fw text-danger fa-trash"></i> [[modules:chat.delete-room]]
</a>
</li>
{{{ end }}}
</ul>
</div>
<!-- users toggle -->
{{{ if users.length }}}
<div component="chat/user/list/btn" class="btn btn-ghost btn-sm d-none d-lg-flex flex-nowrap gap-3" title="[[modules:chat.view-users-list]]" data-bs-toggle="tooltip" data-bs-placement="bottom">
<div class="d-flex text-nowrap">
{{{ if ./users.0 }}}
<span style="width: 18px; z-index: 3;" class="text-decoration-none" href="{config.relative_path}/user/{./users.0.userslug}">{buildAvatar(./users.0, "24px", true)}</span>
{{{ end }}}
{{{ if ./users.1 }}}
<span style="width: 18px; z-index: 2;" class="text-decoration-none" href="{config.relative_path}/user/{./users.1.userslug}">{buildAvatar(./users.1, "24px", true)}</span>
{{{ end }}}
{{{ if ./users.2 }}}
<span style="width: 18px; z-index: 1;" class="text-decoration-none" href="{config.relative_path}/user/{./users.2.userslug}">{buildAvatar(./users.2, "24px", true)}</span>
{{{ end }}}
</div>
{./userCount}
</div>
{{{ end }}}
</div>
<button id="chat-close-btn" type="button" class="btn-close btn btn-ghost btn-sm" aria-label="Close"></button>
</div>
</div>
<div class="position-relative">
<div component="chat/messages/scroll-up-alert" class="py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden" role="button" style="z-index: 500;"><i class="fa fa-fw fa-arrow-down"></i> [[modules:chat.scroll-up-alert]]</div>
</div>
<div class="modal-body d-flex flex-column" style="height: 500px;">
<div class="d-flex flex-grow-1 gap-1 overflow-auto" style="min-width: 0px;">
<div component="chat/messages" class="expanded-chat d-flex flex-column flex-grow-1" data-roomid="{roomId}" style="min-width: 0px;">
<ul component="chat/message/content" class="chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1">
{{{each messages}}}
{{{ if !./system }}}
<li component="chat/message" class="chat-message mx-2 pe-2 {{{ if messages.deleted }}} deleted{{{ end }}} {{{ if messages.pinned}}} pinned{{{ end }}} {{{ if messages.newSet }}}border-top pt-3{{{ end }}}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-index="{messages.index}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}" data-username="{messages.fromUser.username}" data-displayname="{messages.fromUser.displayname}">
{{{ if messages.parent }}}
<div class="d-flex ms-4 mb-2 align-items-center">
<div component="chat/message/parent" data-parent-mid="{messages.parent.mid}" data-uid="{messages.parent.fromuid}" class="btn btn-ghost btn-sm d-flex gap-2 ff-secondary text-start flex-row w-100">
<div class="d-flex gap-2 text-sm text-nowrap">
<div class="d-flex flex-nowrap gap-1 align-items-center">
<a href="{config.relative_path}/user/{messages.parent.user.userslug}" class="text-decoration-none lh-1">{buildAvatar(messages.parent.user, "14px", true, "not-responsive align-middle")}</a>
<a class="chat-user fw-semibold text-truncate" style="max-width: 150px;" href="{config.relative_path}/user/{messages.parent.user.userslug}">{messages.parent.user.displayname}</a>
</div>
<span class="chat-timestamp text-muted timeago text-nowrap hidden" title="{messages.parent.timestampISO}"></span>
</div>
<div component="chat/message/parent/content" class="text-muted line-clamp-1 text-break w-100">{messages.parent.content}</div>
</div>
</div>
{{{ end }}}
<div class="message-header lh-1 d-flex align-items-center gap-2 text-sm {{{ if !messages.newSet }}}hidden{{{ end }}} pb-2">
<a href="{config.relative_path}/user/{messages.fromUser.userslug}" class="text-decoration-none">{buildAvatar(messages.fromUser, "18px", true, "not-responsive")}</a>
<span class="chat-user fw-semibold"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.displayname}</a></span>
{{{ if messages.fromUser.banned }}}
<span class="badge bg-danger">[[user:banned]]</span>
{{{ end }}}
{{{ if messages.fromUser.deleted }}}
<span class="badge bg-danger">[[user:deleted]]</span>
{{{ end }}}
<span class="chat-timestamp text-muted timeago" title="{messages.timestampISO}"></span>
<div component="chat/message/edited" class="text-muted ms-auto {{{ if !messages.edited }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {isoTimeToLocaleString(messages.editedISO, config.userLang)}]]"><i class="fa fa-edit"></i></span></div>
</div>
<div class="message-body-wrapper">
<div component="chat/message/body" class="message-body ps-0 py-0 overflow-auto text-break">
{messages.content}
</div>
<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
<div component="chat/message/controls" class="position-relative">
<div class="btn-group border shadow-sm controls position-absolute bg-body end-0" style="bottom:1rem;">
<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
<button class="btn btn-sm btn-link" data-action="reply" title="[[topic:reply]]"><i class="fa fa-reply"></i></button>
<div class="btn-group d-inline-block">
<button class="btn btn-sm btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis" type="button"></i></button>
<ul class="dropdown-menu dropdown-menu-end p-1 text-sm list-unstyled" role="menu">
{{{ if (isAdminOrGlobalMod || (!config.disableChatMessageEditing && messages.self)) }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-action="edit" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-pencil text-muted"></i> [[topic:edit]]</span></a>
</li>
<li>
<a href="#" class="dropdown-item rounded-1" data-action="delete" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-trash text-muted"></i> [[topic:delete]]</span></a>
</li>
<li>
<a href="#" class="dropdown-item rounded-1" data-action="restore" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-repeat text-muted"></i> [[topic:restore]]</span></a>
</li>
{{{ end }}}
{{{ if (isAdminOrGlobalMod || isOwner )}}}
<li>
<a href="#" class="dropdown-item rounded-1" data-action="pin" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-thumbtack text-muted"></i> [[modules:chat.pin-message]]</span></a>
</li>
<li>
<a href="#" class="dropdown-item rounded-1" data-action="unpin" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-thumbtack fa-rotate-90 text-muted"></i> [[modules:chat.unpin-message]]</span></a>
</li>
<li class="dropdown-divider"></li>
{{{ end }}}
{{{ if isAdminOrGlobalMod }}}
<li>
<a href="#" class="dropdown-item rounded-1 chat-ip-button" role="menuitem">
<span class="d-inline-flex align-items-center gap-2 show"><i class="fa fa-fw fa-info-circle text-muted"></i> [[modules:chat.show-ip]]</span>
<span class="d-inline-flex align-items-center gap-2 copy hidden"><i class="fa fa-fw fa-copy text-muted"></i> <span class="copy-ip-text"></span></span>
</a>
</li>
{{{ end }}}
<li>
<a href="#" class="dropdown-item rounded-1" data-action="copy-text" data-mid="{messages.mid}" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-copy text-muted"></i> [[modules:chat.copy-text]]</span></a>
</li>
<li>
<a href="#" class="dropdown-item rounded-1" data-action="copy-link" data-mid="{messages.mid}" role="menuitem"><span class="d-inline-flex align-items-center gap-2"><i class="fa fa-fw fa-link text-muted"></i> [[modules:chat.copy-link]]</span></a>
</li>
</ul>
</div>
</div>
</div>
</div>
</li>
{{{ else }}}
<li component="chat/system-message" class="system-message text-muted small py-2 gap-3 d-flex align-items-center justify-content-center" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-index="{messages.index}" data-self="{messages.self}" data-break="0" data-timestamp="{messages.timestamp}">
<hr class="d-inline-block my-1" style="width: 10%;"/>
<div>
[[modules:chat.system.{messages.content}, {messages.fromUser.displayname}, {messages.timestampISO}]]
</div>
<hr class="d-inline-block my-1" style="width: 10%;"/>
</li>
{{{ end }}}
{{{end}}}
</ul>
<ul component="chat/message/search/results" class="chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 hidden">
<div component="chat/message/search/no-results" class="text-center p-4 d-flex flex-column">
<div class="p-4"><i class="fa-solid fa-wind fs-2 text-muted"></i></div>
<div class="text-xs fw-semibold text-muted">[[search:no-matches]]</div>
</div>
</ul>
<div component="chat/composer" class="d-flex flex-column border-top pt-2 align-items-start">
<div component="chat/composer/replying-to" data-tomid="" class="text-sm px-2 mb-1 d-flex gap-2 align-items-center hidden">
<div component="chat/composer/replying-to-text"></div> <button component="chat/composer/replying-to-cancel" class="btn btn-ghost btn-sm px-2 py-1"><i class="fa fa-times"></i></button>
</div>
<div class="w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end">
{{{ if canUpload }}}
<button component="chat/upload/button" class="btn btn-ghost btn-sm d-flex p-2" type="button" title="[[global:upload]]" data-bs-toggle="tooltip"><i class="fa fa-fw fa-upload"></i></button>
{{{ end }}}
<div class="flex-grow-1 align-self-center">
<textarea component="chat/input" placeholder="{{{ if roomName }}}[[modules:chat.placeholder.message-room, {roomName}]]{{{ else }}}[[modules:chat.placeholder.mobile]]{{{ end }}}" class="bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none px-1 py-0" style="min-height: 1.5rem;height:0;max-height:30vh;resize:none;"></textarea>
</div>
<div class="d-flex gap-1">
{{{ each composerActions }}}
<button data-action="{./action}" class="btn btn-ghost btn-sm d-flex p-2 {./class}" type="button" title="{./title}" data-bs-toggle="tooltip"><i class="fa {./icon}"></i></button>
{{{ end }}}
<button class="btn btn-ghost btn-sm d-flex p-2" type="button" data-action="send" title="[[modules:chat.send]]" data-bs-toggle="tooltip"><i class="fa fa-fw fa-paper-plane text-primary"></i></button>
</div>
</div>
<div class="d-flex justify-content-between align-items-center text-xs w-100 px-2 mt-1">
<div component="chat/composer/typing" class="">
<div component="chat/composer/typing/users" class="hidden"></div>
<div component="chat/composer/typing/text" class="hidden"></div>
</div>
<div component="chat/message/remaining" class="text-xs text-muted">{maximumChatMessageLength}</div>
</div>
<form class="hidden" component="chat/upload" method="post" enctype="multipart/form-data">
<input type="file" name="files[]" multiple class="hidden"/>
</form>
</div>
</div>
</div>
</div>
<div class="imagedrop"><div>[[topic:composer.drag-and-drop-images]]</div></div>
</div>
</div>
</div>