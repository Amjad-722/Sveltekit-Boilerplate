<script>
	let {
		title = '',
		subtitle = '',
		padding = 'md',
		children
	} = $props();

	const paddings = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8',
		none: ''
	};
</script>

<div class="glass rounded-xl shadow-red-lg hover:shadow-red-xl transition-all duration-300 transform hover:scale-[1.02] border border-red-500/20">
	{#if title || subtitle}
		<div class="border-b border-red-500/20 px-6 py-4 bg-gradient-to-r from-red-900/20 to-black/20">
			{#if title}
				<h3 class="text-lg font-bold text-white text-shadow-red">{title}</h3>
			{/if}
			{#if subtitle}
				<p class="text-sm text-red-300 mt-1 text-shadow">{subtitle}</p>
			{/if}
		</div>
	{/if}
	
	<div class="{paddings[padding]}">
		{@render children()}
	</div>
</div>