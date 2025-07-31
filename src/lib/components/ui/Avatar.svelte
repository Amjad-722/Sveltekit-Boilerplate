<script>
	let {
		src = '',
		alt = '',
		size = 'md',
		fallback = '',
		online = false,
		...props
	} = $props();

	const sizes = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-12 h-12',
		xl: 'w-16 h-16',
		'2xl': 'w-20 h-20'
	};

	let imageError = $state(false);

	function handleImageError() {
		imageError = true;
	}
</script>

<div class="relative inline-block">
	<div class="rounded-full overflow-hidden {sizes[size]} bg-gray-700 flex items-center justify-center" {...props}>
		{#if src && !imageError}
			<img 
				{src} 
				{alt} 
				class="w-full h-full object-cover"
				onerror={handleImageError}
			/>
		{:else if fallback}
			<span class="text-gray-300 font-medium text-sm">
				{fallback}
			</span>
		{:else}
			<svg class="w-1/2 h-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
			</svg>
		{/if}
	</div>
	
	{#if online}
		<div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
	{/if}
</div>