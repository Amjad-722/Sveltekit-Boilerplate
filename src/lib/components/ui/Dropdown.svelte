<script>
	let {
		items = [],
		trigger = '',
		position = 'bottom-left',
		open = $bindable(false),
		children,
		...props
	} = $props();

	let dropdownRef = $state();

	const positions = {
		'bottom-left': 'top-full left-0 mt-2',
		'bottom-right': 'top-full right-0 mt-2',
		'top-left': 'bottom-full left-0 mb-2',
		'top-right': 'bottom-full right-0 mb-2'
	};

	function toggleDropdown() {
		open = !open;
	}

	function closeDropdown() {
		open = false;
	}

	function handleClickOutside(event) {
		if (dropdownRef && !dropdownRef.contains(event.target)) {
			closeDropdown();
		}
	}

	$effect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="relative inline-block" bind:this={dropdownRef} {...props}>
	<div onclick={toggleDropdown}>
		{#if children}
			{@render children()}
		{:else}
			<button class="inline-flex items-center justify-center">
				{trigger}
			</button>
		{/if}
	</div>

	{#if open}
		<div class="absolute z-50 {positions[position]} min-w-48">
			<div class="glass rounded-lg border border-gray-700 shadow-xl py-2">
				{#each items as item}
					{#if item.divider}
						<hr class="my-2 border-gray-700" />
					{:else}
						<button
							class="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-200 flex items-center space-x-2"
							onclick={() => {
								item.action?.();
								closeDropdown();
							}}
							disabled={item.disabled}
							class:opacity-50={item.disabled}
							class:cursor-not-allowed={item.disabled}
						>
							{#if item.icon}
								<span class="text-lg">{item.icon}</span>
							{/if}
							<span>{item.label}</span>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>