<script>
	import Avatar from './Avatar.svelte';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';

	let {
		user = {},
		showActions = true,
		showStatus = true,
		variant = 'default',
		onMessage = () => {},
		onFollow = () => {},
		...props
	} = $props();

	const variants = {
		default: 'glass',
		compact: 'glass p-4',
		minimal: 'bg-transparent border-none p-0'
	};
</script>

<div class="rounded-lg border border-gray-700 p-6 {variants[variant]}" {...props}>
	<div class="flex items-start space-x-4">
		<Avatar
			src={user.avatar}
			alt={user.name}
			size="lg"
			online={showStatus && user.online}
			fallback={user.name?.charAt(0)}
		/>
		
		<div class="flex-1 min-w-0">
			<div class="flex items-center space-x-2 mb-1">
				<h3 class="text-lg font-semibold text-white truncate">
					{user.name || 'Unknown User'}
				</h3>
				{#if user.verified}
					<svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
				{/if}
			</div>
			
			{#if user.title}
				<p class="text-sm text-gray-400 mb-2">{user.title}</p>
			{/if}
			
			{#if user.bio}
				<p class="text-sm text-gray-300 mb-3 line-clamp-2">{user.bio}</p>
			{/if}
			
			{#if user.tags?.length}
				<div class="flex flex-wrap gap-2 mb-3">
					{#each user.tags as tag}
						<Badge variant="outline" size="sm">{tag}</Badge>
					{/each}
				</div>
			{/if}
			
			{#if user.stats}
				<div class="flex space-x-4 text-sm text-gray-400 mb-3">
					{#if user.stats.followers !== undefined}
						<span><strong class="text-white">{user.stats.followers}</strong> followers</span>
					{/if}
					{#if user.stats.following !== undefined}
						<span><strong class="text-white">{user.stats.following}</strong> following</span>
					{/if}
					{#if user.stats.posts !== undefined}
						<span><strong class="text-white">{user.stats.posts}</strong> posts</span>
					{/if}
				</div>
			{/if}
			
			{#if showActions}
				<div class="flex space-x-2">
					<Button
						variant="primary"
						size="sm"
						onclick={() => onMessage(user)}
						placeholder="Message"
					/>
					<Button
						variant="outline"
						size="sm"
						onclick={() => onFollow(user)}
						placeholder={user.following ? 'Unfollow' : 'Follow'}
					/>
				</div>
			{/if}
		</div>
	</div>
</div>