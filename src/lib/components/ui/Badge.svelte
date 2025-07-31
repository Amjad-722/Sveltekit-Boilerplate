<script>
	let {
		variant = 'default',
		size = 'md',
		children,
		...props
	} = $props();

	const variants = {
		default: 'bg-gray-700 text-gray-200',
		primary: 'gradient-red text-white',
		secondary: 'bg-gray-600 text-gray-100',
		success: 'bg-green-600 text-white',
		warning: 'bg-yellow-600 text-white',
		error: 'bg-red-600 text-white',
		outline: 'border border-red-500 text-red-400 bg-transparent'
	};

	const sizes = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1 text-sm',
		lg: 'px-4 py-2 text-base'
	};
</script>

<span 
	class="inline-flex items-center rounded-full font-medium {variants[variant]} {sizes[size]}"
	{...props}
>
	{@render children?.()}
</span>