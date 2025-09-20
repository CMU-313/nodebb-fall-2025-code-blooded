<div component="post" class="post-container{{{ if posts.deleted }}} deleted{{{ end }}}{{{ if posts.endorsed }}} endorsed-post{{{ end }}}" data-pid="{posts.pid}" data-index="{posts.index}" data-uid="{posts.uid}">
	<a component="post/anchor" data-index="{posts.index}" id="{posts.index}"></a>

	<meta itemprop="datePublished" content="{posts.timestampISO}">
	<meta itemprop="dateModified" content="{posts.editedISO}">

	<div class="post-header d-flex flex-wrap gap-2 align-items-start">
		<div class="d-flex gap-2">
			<a component="user/picture" data-uid="{posts.uid}" href="{config.relative_path}/user/{posts.userslug}" class="text-decoration-none">
				{buildAvatar(posts, "24px", true, "rounded-1")}
			</a>
			<div class="d-flex flex-column">
				<div class="d-flex align-items-center gap-1">
					<a component="user/username" data-uid="{posts.uid}" href="{config.relative_path}/user/{posts.userslug}" class="text-decoration-none fw-semibold">{posts.username}</a>
					{{{ if posts.user.selectedGroups.length }}}
					{{{ each posts.user.selectedGroups }}}
					<a href="{config.relative_path}/groups/{posts.user.selectedGroups.slug}" class="text-decoration-none">
						<span class="badge rounded-1 text-uppercase" style="color:{posts.user.selectedGroups.textColor};background-color:{posts.user.selectedGroups.labelColor};">{posts.user.selectedGroups.userTitle}</span>
					</a>
					{{{ end }}}
					{{{ end }}}
					<span class="text-muted text-sm">[[global:posted-in]] <a href="{config.relative_path}/category/{posts.category.slug}">{posts.category.name}</a></span>
				</div>
				<div class="text-muted text-xs">
					<a component="post/timestamp" href="{config.relative_path}/post/{posts.pid}" class="permalink text-muted text-xs" title="[[global:posted]] {posts.timestampISO}">
						<span class="timeago" title="{posts.timestampISO}"></span>
					</a>
					{{{ if posts.edited }}}
					<span class="text-muted text-xs">[[global:edited]] <span class="timeago" title="{posts.editedISO}"></span></span>
					{{{ end }}}
				</div>
			</div>
		</div>

		<div class="d-flex flex-grow-1 align-items-center justify-content-end gap-1 post-tools">
			<!-- IMPORT partials/topic/reactions.tpl -->
			<a component="post/reply" href="#" class="btn btn-ghost btn-sm {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:reply]]"><i class="fa fa-fw fa-reply text-primary"></i></a>
			<a component="post/quote" href="#" class="btn btn-ghost btn-sm {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:quote]]"><i class="fa fa-fw fa-quote-right text-primary"></i></a>

			{{{ if ./announces }}}
			<a component="post/announce-count" href="#" class="btn btn-ghost btn-sm d-flex gap-2 align-items-center" title="[[topic:announcers]]"><i class="fa fa-share-alt text-primary"></i> {./announces}</a>
			{{{ end }}}

			{{{ if !reputation:disabled }}}
			<div class="d-flex votes align-items-center">
				<a component="post/upvote" href="#" class="btn btn-ghost btn-sm{{{ if posts.upvoted }}} upvoted{{{ end }}}" title="[[topic:upvote-post]]">
					<i class="fa fa-fw fa-chevron-up text-primary"></i>
				</a>

				<meta itemprop="upvoteCount" content="{posts.upvotes}">
				<meta itemprop="downvoteCount" content="{posts.downvotes}">
				<a href="#" class="px-2 mx-1 btn btn-ghost btn-sm" component="post/vote-count" data-votes="{posts.votes}" title="[[global:voters]]">{posts.votes}</a>

				{{{ if !downvote:disabled }}}
				<a component="post/downvote" href="#" class="btn btn-ghost btn-sm{{{ if posts.downvoted }}} downvoted{{{ end }}}" title="[[topic:downvote-post]]">
					<i class="fa fa-fw fa-chevron-down text-primary"></i>
				</a>
				{{{ end }}}
			</div>
			{{{ end }}}

			<!-- Endorse functionality - only show in Comments & Feedback category -->
			{{{ if posts.cid == 4 }}}
			{{{ if privileges.posts.endorse }}}
				<div class="d-flex align-items-center">
				{{{ if !posts.endorsed }}}
				<a component="post/endorse" href="#" class="btn btn-ghost btn-sm text-success" title="[[topic:endorse-post]]">
					<i class="fa fa-fw fa-check-circle"></i>
				</a>
				{{{ else }}}
				<a component="post/unendorse" href="#" class="btn btn-ghost btn-sm text-success" title="[[topic:unendorse-post]]">
					<i class="fa fa-fw fa-check-circle"></i>
				</a>
				{{{ end }}}
				</div>
			{{{ end }}}
			{{{ end }}}


			<!-- IMPORT partials/topic/post-menu.tpl -->
		</div>
	</div>

	<div component="post/content" class="post-content mt-2">
		{posts.content}
	</div>

	<div component="post/replies/container" class="my-2 col-11 border rounded-1 p-3 hidden-empty"></div>
</div>

{{{ if (!./index && widgets.mainpost-footer.length) }}}
<div data-widget-area="mainpost-footer">
	{{{ each widgets.mainpost-footer }}}
	{widgets.mainpost-footer.html}
	{{{ end }}}
</div>
{{{ end }}}
