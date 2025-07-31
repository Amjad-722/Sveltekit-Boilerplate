<script>
	let {
		checked = $bindable(false),
		label = '',
		disabled = false,
		size = 'md',
		...props
	} = $props();

	const sizes = {
		sm: { track: 'w-8 h-4', thumb: 'w-3 h-3' },
		md: { track: 'w-10 h-5', thumb: 'w-4 h-4' },
		lg: { track: 'w-12 h-6', thumb: 'w-5 h-5' }
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
			class="rounded-full transition-all duration-200 {sizes[size].track}"
			class:bg-red-600={checked}
			class:bg-gray-600={!checked}
			class:opacity-50={disabled}
		>
			<div 
				class="bg-white rounded-full shadow-lg transform transition-transform duration-200 {sizes[size].thumb}"
				class:translate-x-5={checked && size === 'md'}
				class:translate-x-4={checked && size === 'sm'}
				class:translate-x-6={checked && size === 'lg'}
				class:translate-x-0={!checked}
			></div>
		</div>
	</div>
	{#if label}
		<span class="text-gray-300 select-none" class:opacity-50={disabled}>
			{label}
		</span>
	{/if}
</label>