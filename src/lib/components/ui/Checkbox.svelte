<script>
	let {
		checked = $bindable(false),
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
</script>

<label class="flex items-center space-x-3 cursor-pointer" class:cursor-not-allowed={disabled}>
	<div class="relative">
		<input
			type="checkbox"
			bind:checked
			{disabled}
			class="sr-only"
			{...props}
		/>
		<div 
			class="border-2 rounded {sizes[size]} transition-all duration-200 flex items-center justify-center"
			class:border-red-500={checked}
			class:bg-red-600={checked}
			class:border-gray-600={!checked}
			class:bg-transparent={!checked}
			class:opacity-50={disabled}
		>
			{#if checked}
				<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
				</svg>
			{/if}
		</div>
	</div>
	{#if label}
		<span class="text-gray-300 select-none" class:opacity-50={disabled}>
			{label}
		</span>
	{/if}
</label>