<script>
	let {
		value = 0,
		max = 100,
		size = 'md',
		variant = 'default',
		showLabel = false,
		...props
	} = $props();

	const sizes = {
		sm: 'h-2',
		md: 'h-3',
		lg: 'h-4'
	};

	const variants = {
		default: 'bg-red-600',
		success: 'bg-green-600',
		warning: 'bg-yellow-600',
		error: 'bg-red-600'
	};

	const percentage = Math.round((value / max) * 100);
</script>

<div class="w-full" {...props}>
	{#if showLabel}
		<div class="flex justify-between items-center mb-2">
			<span class="text-sm text-gray-300">Progress</span>
			<span class="text-sm text-gray-300">{percentage}%</span>
		</div>
	{/if}
	
	<div class="w-full bg-gray-700 rounded-full {sizes[size]} overflow-hidden">
		<div 
			class="h-full rounded-full transition-all duration-300 {variants[variant]}"
			style="width: {percentage}%"
		></div>
	</div>
</div>