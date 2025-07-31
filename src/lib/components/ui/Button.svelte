<script>
	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		href = null,
		type = 'button',
		onclick = () => {},
		children,
	placeholder,
		...props
	} = $props();

	const variants = {
		primary: 'gradient-red text-white shadow-red-lg hover:shadow-red-xl transform hover:scale-105 border border-red-500/30',
		secondary: 'bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500',
		danger: 'bg-red-600 hover:bg-red-500 text-white shadow-red-lg hover:shadow-red-xl transform hover:scale-105 border border-red-400',
		success: 'bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-xl border border-green-400',
		outline: 'border-2 border-red-500 hover:bg-red-500 text-red-400 hover:text-white shadow-lg hover:shadow-red-lg transform hover:scale-105 bg-black/50 backdrop-blur-sm'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base'
	};

	const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-shadow';
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variants[variant]} {sizes[size]}"
		class:opacity-50={disabled}
		class:cursor-not-allowed={disabled}
		{...props}
	>
		{#if loading}
			<svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
		{/if}
		{placeholder}
	</a>
{:else}
	<button
		{type}
		{disabled}
		class="{baseClasses} {variants[variant]} {sizes[size]}"
		onclick={onclick}
		{...props}
	>
		{#if loading}
			<svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
		{/if}
		{placeholder}
	</button>
{/if}