<script>
	let {
		items = [],
		separator = '/',
		...props
	} = $props();
</script>

<nav class="flex items-center space-x-2 text-sm" {...props}>
	{#each items as item, index}
		{#if index > 0}
			<span class="text-gray-500">{separator}</span>
		{/if}
		
		{#if item.href && index < items.length - 1}
			<a 
				href={item.href}
				class="text-gray-400 hover:text-red-400 transition-colors duration-200"
			>
				{item.label}
			</a>
		{:else}
			<span 
				class="text-white font-medium"
				class:text-gray-400={index < items.length - 1}
			>
				{item.label}
			</span>
		{/if}
	{/each}
</nav>