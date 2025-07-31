<script>
	let {
		value = $bindable(''),
		options = [],
		placeholder = 'Select an option',
		label = '',
		error = '',
		disabled = false,
		required = false,
		...props
	} = $props();

</script>

<div class="space-y-2">
	{#if label}
		<label class="block text-sm font-medium text-gray-300">
			{label}
			{#if required}<span class="text-red-400">*</span>{/if}
		</label>
	{/if}
	
	<select
		bind:value
		{disabled}
		{required}
		class="w-full rounded-lg glass border-gray-600 focus:border-red-500 focus:ring-red-500/20 px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
		class:border-red-500={error}
		class:ring-red-500={error}
		{...props}
	>
		{#if placeholder}
			<option value="" disabled>{placeholder}</option>
		{/if}
		{#each options as option}
			<option value={option.value} class="bg-gray-800">
				{option.label}
			</option>
		{/each}
	</select>
	
	{#if error}
		<p class="text-sm text-red-400">{error}</p>
	{/if}
</div>