<script>
	let {
		items = [],
		multiple = false,
		...props
	} = $props();

	let openItems = $state(new Set());

	function toggleItem(index) {
		if (multiple) {
			if (openItems.has(index)) {
				openItems.delete(index);
			} else {
				openItems.add(index);
			}
			openItems = new Set(openItems);
		} else {
			openItems = openItems.has(index) ? new Set() : new Set([index]);
		}
	}
</script>

<div class="space-y-2" {...props}>
	{#each items as item, index}
		<div class="glass rounded-lg border border-gray-700 overflow-hidden">
			<button
				class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
				onclick={() => toggleItem(index)}
			>
				<span class="font-medium text-white">{item.title}</span>
				<svg 
					class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
					class:rotate-180={openItems.has(index)}
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
				</svg>
			</button>
			
			{#if openItems.has(index)}
				<div class="px-6 pb-4 text-gray-300 border-t border-gray-700">
					{@render item.content()}
				</div>
			{/if}
		</div>
	{/each}
</div>