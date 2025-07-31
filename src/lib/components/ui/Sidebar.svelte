<script>
	let {
		open = $bindable(true),
		position = 'left',
		width = 'md',
		overlay = true,
		children,
		...props
	} = $props();

	const widths = {
		sm: 'w-64',
		md: 'w-72',
		lg: 'w-80',
		xl: 'w-96'
	};

	const positions = {
		left: 'left-0',
		right: 'right-0'
	};

	function closeSidebar() {
		if (overlay) {
			open = false;
		}
	}
</script>

{#if overlay && open}
	<div 
		class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
		onclick={closeSidebar}
	></div>
{/if}

<aside 
	class="fixed top-0 h-full glass border-r border-gray-700 z-50 transform transition-transform duration-300 {widths[width]} {positions[position]}"
	class:-translate-x-full={!open && position === 'left'}
	class:translate-x-full={!open && position === 'right'}
	{...props}
>
	<div class="h-full overflow-y-auto">
		{@render children?.()}
	</div>
</aside>