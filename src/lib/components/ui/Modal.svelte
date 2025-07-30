<script>
	import { createEventDispatcher } from 'svelte';
	
	let {
		open = $bindable(false),
		title = '',
		size = 'md',
		children
	} = $props();

	const dispatch = createEventDispatcher();

	const sizes = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl'
	};

	function closeModal() {
		open = false;
		dispatch('close');
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<div
		class="fixed inset-0 z-50 overflow-y-auto"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
			<!-- Background overlay with red tint -->
			<div
				class="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
				style="background-image: radial-gradient(circle at center, rgba(220, 38, 38, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);"
				aria-hidden="true"
				onclick={handleBackdropClick}
			></div>

			<!-- Center modal -->
			<span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

			<div
				class="inline-block transform overflow-hidden rounded-xl glass shadow-red-xl transition-all border-2 border-red-500/30 sm:my-8 sm:w-full sm:align-middle {sizes[size]} animate-in fade-in zoom-in duration-300"
			>
				<div class="glass px-6 pt-6 pb-4 sm:p-8 sm:pb-6">
					<div class="sm:flex sm:items-start">
						<div class="mt-3 w-full text-center sm:mt-0 sm:text-left">
							{#if title}
								<h3 class="text-xl font-bold leading-6 text-white text-shadow-red mb-4" id="modal-title">
									{title}
								</h3>
							{/if}
							<div class="mt-4">
								{@render children()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}