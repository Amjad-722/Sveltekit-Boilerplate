<script>
	let {
		open = $bindable(false),
		position = 'right',
		size = 'md',
		title = '',
		closable = true,
		onClose = () => {},
		children,
		...props
	} = $props();

	const sizes = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
		full: 'max-w-full'
	};

	const positions = {
		left: { 
			container: 'left-0 top-0 h-full',
			transform: open ? 'translate-x-0' : '-translate-x-full'
		},
		right: { 
			container: 'right-0 top-0 h-full',
			transform: open ? 'translate-x-0' : 'translate-x-full'
		},
		top: { 
			container: 'top-0 left-0 w-full',
			transform: open ? 'translate-y-0' : '-translate-y-full'
		},
		bottom: { 
			container: 'bottom-0 left-0 w-full',
			transform: open ? 'translate-y-0' : 'translate-y-full'
		}
	};

	function handleBackdropClick() {
		if (closable) {
			open = false;
			onClose();
		}
	}

	function handleClose() {
		open = false;
		onClose();
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50">
		<div 
			class="absolute inset-0 bg-black/50 backdrop-blur-sm"
			onclick={handleBackdropClick}
		></div>
		
		<div 
			class="absolute glass border shadow-xl {positions[position].container} {sizes[size]} transform transition-transform duration-300 {positions[position].transform}"
			{...props}
		>
			{#if title || closable}
				<div class="flex items-center justify-between p-6 border-b border-gray-700">
					{#if title}
						<h2 class="text-xl font-heading text-white">{title}</h2>
					{/if}
					{#if closable}
						<button 
							onclick={handleClose}
							class="text-gray-400 hover:text-white text-2xl"
						>
							×
						</button>
					{/if}
				</div>
			{/if}
			
			<div class="p-6 overflow-y-auto h-full">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}