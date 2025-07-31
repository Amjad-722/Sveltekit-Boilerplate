<script>
	let {
		variant = 'default',
		hover = false,
		padding = 'md',
		children,
		...props
	} = $props();

	const variants = {
		default: 'glass border-gray-700',
		primary: 'glass border-red-500/30 shadow-red',
		secondary: 'bg-gray-800 border-gray-600',
		outline: 'border-2 border-red-500/50 bg-black/30'
	};

	const paddings = {
		none: '',
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8'
	};
</script>

<div 
	class="rounded-lg border {variants[variant]} {paddings[padding]} transition-all duration-300"
	class:hover-glow={hover}
	class:transform={hover}
	class:hover:scale-105={hover}
	{...props}
>
	{@render children?.()}
</div>