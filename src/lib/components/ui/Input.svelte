<script>
	let {
		type = 'text',
		placeholder = '',
		value = $bindable(''),
		label = '',
		error = '',
		disabled = false,
		required = false,
		id = '',
		...props
	} = $props();

	const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="space-y-2">
	{#if label}
		<label for={inputId} class="block text-sm font-semibold text-red-300 text-shadow">
			{label}
			{#if required}
				<span class="text-red-400 glow-red">*</span>
			{/if}
		</label>
	{/if}
	
	<input
		{type}
		{placeholder}
		{disabled}
		{required}
		id={inputId}
		bind:value
		class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm disabled:bg-gray-800 disabled:text-gray-500 disabled:border-gray-600"
		class:border-red-400={error}
		class:focus:border-red-400={error}
		class:focus:ring-red-400={error}
		class:shadow-red={error}
		{...props}
	/>
	
	{#if error}
		<p class="text-sm text-red-400 text-shadow flex items-center">
			<span class="mr-1">⚠️</span>
			{error}
		</p>
	{/if}
</div>