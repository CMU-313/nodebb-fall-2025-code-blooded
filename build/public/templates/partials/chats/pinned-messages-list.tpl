{{{ each messages }}}
<li component="chat/message" class="chat-message mx-2 pe-2 {{{ if messages.deleted }}} deleted{{{ end }}} {{{ if messages.pinned}}} pinned{{{ end }}} border-top pt-3" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-timestamp="{messages.timestamp}" data-username="{messages.fromUser.username}" data-index="{./index}">
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
<div class="message-header lh-1 d-flex align-items-center gap-2 text-sm pb-2">
<a href="{config.relative_path}/user/{messages.fromUser.userslug}" class="text-decoration-none">{buildAvatar(messages.fromUser, "18px", true, "not-responsive")}</a>
<span class="chat-user fw-semibold"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.displayname}</a></span>
<span class="chat-timestamp text-muted timeago" title="{messages.timestampISO}"></span>
<div component="chat/message/edited" class="text-muted ms-auto {{{ if !messages.edited }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {isoTimeToLocaleString(messages.editedISO, config.userLang)}]]"><i class="fa fa-edit"></i></span></div>
</div>
<div class="message-body-wrapper">
<div component="chat/message/body" class="message-body ps-0 py-0 overflow-auto text-break">
{messages.content}
</div>
<div component="chat/message/controls" class="position-relative">
<div class="btn-group border shadow-sm controls position-absolute bg-body end-0" style="bottom:1rem;">
{{{ if (isAdminOrGlobalMod || (!config.disableChatMessageEditing && messages.self)) }}}
<button class="btn btn-sm btn-link" data-action="edit" title="[[topic:edit]]"><i class="fa fa-pencil"></i></button>
{{{ end }}}
{{{ if (isAdminOrGlobalMod || isOwner )}}}
<button class="btn btn-sm btn-link" data-action="pin" title="[[modules:chat.pin-message]]"><i class="fa fa-thumbtack"></i></button>
<button class="btn btn-sm btn-link" data-action="unpin" title="[[modules:chat.unpin-message]]"><i class="fa fa-thumbtack fa-rotate-90"></i></button>
{{{ end }}}
</div>
</div>
</div>
</li>
{{{ end }}}