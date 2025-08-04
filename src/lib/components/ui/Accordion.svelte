<script>
	let { items = [], multiple = false, ...props } = $props();

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

<div class="space-y-4 " {...props}>
	{#each items as item, index}
		<div class="glass overflow-hidden rounded-lg border border-gray-700 ">
			<button
				class="flex w-full items-center justify-between px-6 py-4 pt-4 text-left transition-colors duration-200 hover:bg-gray-800/50"
				onclick={() => toggleItem(index)}
			>
				<span class="font-medium text-white">{item.title}</span>
				<svg
					class="h-5 w-5 transform text-gray-400 transition-transform duration-200"
					class:rotate-180={openItems.has(index)}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{#if openItems.has(index)}
				<div class="border-t border-gray-700 px-6 pt-4 text-gray-300">
					{#if content}
						{@render item.content()}
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>
