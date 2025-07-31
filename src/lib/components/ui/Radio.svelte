<script>
	let {
		value = '',
		group = $bindable(''),
		label = '',
		disabled = false,
		size = 'md',
		...props
	} = $props();

	const sizes = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6'
	};

  const checked = group === value;
</script>

<label class="flex items-center space-x-3 cursor-pointer" class:cursor-not-allowed={disabled}>
	<div class="relative">
		<input
			type="radio"
			{value}
			bind:group
			{disabled}
			class="sr-only"
			{...props}
		/>
		<div 
			class="border-2 rounded-full {sizes[size]} transition-all duration-200 flex items-center justify-center"
			class:border-red-500={checked}
			class:border-gray-600={!checked}
			class:opacity-50={disabled}
		>
			{#if checked}
				<div class="w-2 h-2 bg-red-500 rounded-full"></div>
			{/if}
		</div>
	</div>
	{#if label}
		<span class="text-gray-300 select-none" class:opacity-50={disabled}>
			{label}
		</span>
	{/if}
</label>