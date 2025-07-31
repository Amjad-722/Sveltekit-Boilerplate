<script>
	let {
		value = $bindable(''),
		placeholder = 'Search...',
		onSearch = () => {},
		onClear = () => {},
		loading = false,
		size = 'md',
		...props
	} = $props();

	const sizes = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3 text-sm',
		lg: 'px-5 py-4 text-base'
	};

	function handleSubmit(e) {
		e.preventDefault();
		onSearch(value);
	}

	function handleClear() {
		value = '';
		onClear();
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			handleClear();
		}
	}
</script>

<form onsubmit={handleSubmit} class="relative" {...props}>
	<div class="relative">
		<input
			bind:value
			{placeholder}
			onkeydown={handleKeydown}
			class="w-full glass border-gray-600 focus:border-red-500 focus:ring-red-500/20 {sizes[size]} pl-10 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 rounded-lg"
		/>
		
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			{#if loading}
				<svg class="animate-spin w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			{:else}
				<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
				</svg>
			{/if}
		</div>
		
		{#if value}
			<button
				type="button"
				onclick={handleClear}
				class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
				</svg>
			</button>
		{/if}
	</div>
</form>