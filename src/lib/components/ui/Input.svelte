<script>
	let {
		type = 'text',
		value = $bindable(''),
		placeholder = '',
		label = '',
		error = '',
		disabled = false,
		required = false,
		size = 'md',
		variant = 'default',
		...props
	} = $props();

	const sizes = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3 text-sm',
		lg: 'px-5 py-4 text-base'
	};

	const variants = {
		default: 'glass border-gray-600 focus:border-red-500 focus:ring-red-500/20',
		outline: 'border-2 border-red-500/50 bg-black/30 focus:border-red-400 focus:ring-red-500/20'
	};
</script>

<div class="space-y-2">
	{#if label}
		<label class="block text-sm font-medium text-gray-300">
			{label}
			{#if required}<span class="text-red-400">*</span>{/if}
		</label>
	{/if}
	
	<input
		{type}
		bind:value
		{placeholder}
		{disabled}
		{required}
		class="w-full rounded-lg {variants[variant]} {sizes[size]} text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
		class:border-red-500={error}
		class:ring-red-500={error}
		{...props}
	/>
	
	{#if error}
		<p class="text-sm text-red-400">{error}</p>
	{/if}
</div>