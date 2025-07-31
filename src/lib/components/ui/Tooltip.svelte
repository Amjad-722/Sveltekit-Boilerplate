<script>
	let {
		content = '',
		position = 'top',
		delay = 500,
		children,
		...props
	} = $props();

	let showTooltip = $state(false);
	let timeoutId = $state();

	const positions = {
		top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
	};

	function handleMouseEnter() {
		timeoutId = setTimeout(() => {
			showTooltip = true;
		}, delay);
	}

	function handleMouseLeave() {
		clearTimeout(timeoutId);
		showTooltip = false;
	}
</script>

<div 
	class="relative inline-block"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...props}
>
	{@render children?.()}
	
	{#if showTooltip && content}
		<div class="absolute z-50 {positions[position]} pointer-events-none">
			<div class="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap">
				{content}
			</div>
		</div>
	{/if}
</div>