<script>
	let {
		open = $bindable(false),
		title = '',
		size = 'md',
		closable = true,
		onClose = () => {},
		children,
		...props
	} = $props();

	const sizes = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl',
		full: 'max-w-full mx-4'
	};

	function handleBackdropClick(e) {
		if (e.target === e.currentTarget && closable) {
			open = false;
			onClose();
		}
	}

	function handleKeydown(e) {
		if (e.key === 'Escape' && closable) {
			open = false;
			onClose();
		}
	}
</script>

{#if open}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		{...props}
	>
		<div class="glass rounded-xl w-full {sizes[size]} shadow-red-xl transform transition-all duration-300">
			{#if title || closable}
				<div class="flex items-center justify-between p-6 border-b border-gray-700">
					{#if title}
						<h2 class="text-xl font-heading text-white">{title}</h2>
					{/if}
					{#if closable}
						<button 
							onclick={() => { open = false; onClose(); }}
							class="text-gray-400 hover:text-white text-2xl"
						>
							×
						</button>
					{/if}
				</div>
			{/if}
			<div class="p-6">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}