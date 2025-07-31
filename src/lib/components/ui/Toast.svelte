<script>
	let {
		type = 'info',
		title = '',
		message = '',
		duration = 5000,
		position = 'top-right',
		onClose = () => {},
		...props
	} = $props();

	let visible = $state(true);

	const types = {
		success: 'bg-green-600 border-green-400',
		error: 'bg-red-600 border-red-400',
		warning: 'bg-yellow-600 border-yellow-400',
		info: 'bg-blue-600 border-blue-400'
	};

	const positions = {
		'top-right': 'fixed top-4 right-4 z-50',
		'top-left': 'fixed top-4 left-4 z-50',
		'bottom-right': 'fixed bottom-4 right-4 z-50',
		'bottom-left': 'fixed bottom-4 left-4 z-50'
	};

	if (duration > 0) {
		setTimeout(() => {
			visible = false;
			setTimeout(onClose, 300);
		}, duration);
	}

	function close() {
		visible = false;
		setTimeout(onClose, 300);
	}
</script>

{#if visible}
	<div 
		class="glass rounded-lg p-4 border text-white shadow-xl transform transition-all duration-300 {types[type]} {positions[position]}"
		class:translate-x-full={!visible && position.includes('right')}
		class:-translate-x-full={!visible && position.includes('left')}
		{...props}
	>
		<div class="flex items-start justify-between">
			<div class="flex-1">
				{#if title}
					<h4 class="font-semibold mb-1">{title}</h4>
				{/if}
				<p class="text-sm opacity-90">{message}</p>
			</div>
			<button onclick={close} class="ml-3 text-xl opacity-70 hover:opacity-100">
				×
			</button>
		</div>
	</div>
{/if}