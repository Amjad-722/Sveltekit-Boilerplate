<script>
	let {
		tabs = [],
		activeTab = $bindable(0),
		variant = 'default',
		...props
	} = $props();

	const variants = {
		default: {
			container: 'border-b border-gray-700',
			tab: 'px-4 py-2 text-sm font-medium transition-colors duration-200',
			active: 'text-red-400 border-b-2 border-red-400',
			inactive: 'text-gray-400 hover:text-gray-300'
		},
		pills: {
			container: 'bg-gray-800 rounded-lg p-1',
			tab: 'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
			active: 'bg-red-600 text-white shadow-lg',
			inactive: 'text-gray-400 hover:text-gray-300 hover:bg-gray-700'
		}
	};

	const currentVariant = variants[variant];
</script>

<div {...props}>
	<div class="flex {currentVariant.container}">
		{#each tabs as tab, index}
			<button
				class="{currentVariant.tab} {activeTab === index ? currentVariant.active : currentVariant.inactive}"
				onclick={() => activeTab = index}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	
	<div class="mt-4">
		{#if tabs[activeTab]?.content}
			{@render tabs[activeTab].content()}
		{/if}
	</div>
</div>