<script>
	let {
		type = 'info',
		title = '',
		message = '',
		dismissible = false,
		onDismiss = () => {},
		icon = true,
		...props
	} = $props();

	const types = {
		success: 'bg-green-900/50 border-green-500 text-green-100',
		error: 'bg-red-900/50 border-red-500 text-red-100',
		warning: 'bg-yellow-900/50 border-yellow-500 text-yellow-100',
		info: 'bg-blue-900/50 border-blue-500 text-blue-100'
	};

	const icons = {
		success: '✓',
		error: '✕',
		warning: '⚠',
		info: 'ℹ'
	};
</script>

<div class="glass rounded-lg p-4 border {types[type]} shadow-lg" {...props}>
	<div class="flex items-start">
		{#if icon}
			<div class="flex-shrink-0 mr-3">
				<span class="text-xl">{icons[type]}</span>
			</div>
		{/if}
		<div class="flex-1">
			{#if title}
				<h3 class="font-semibold mb-1">{title}</h3>
			{/if}
			<p class="text-sm opacity-90">{message}</p>
		</div>
		{#if dismissible}
			<button onclick={onDismiss} class="ml-3 text-xl opacity-70 hover:opacity-100">
				×
			</button>
		{/if}
	</div>
</div>