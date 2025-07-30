<script>
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	
	let {
		type = 'info',
		message = '',
		duration = 5000,
		dismissible = true
	} = $props();

	const dispatch = createEventDispatcher();

	const types = {
		success: {
			bg: 'glass border-green-500/30',
			text: 'text-green-300',
			icon: '✅',
			shadow: 'shadow-lg shadow-green-500/20'
		},
		error: {
			bg: 'glass border-red-500/50',
			text: 'text-red-300',
			icon: '❌',
			shadow: 'shadow-red-lg'
		},
		warning: {
			bg: 'glass border-yellow-500/30',
			text: 'text-yellow-300',
			icon: '⚠️',
			shadow: 'shadow-lg shadow-yellow-500/20'
		},
		info: {
			bg: 'glass border-blue-500/30',
			text: 'text-blue-300',
			icon: 'ℹ️',
			shadow: 'shadow-lg shadow-blue-500/20'
		}
	};

	function dismiss() {
		dispatch('dismiss');
	}

	// Auto dismiss
	if (duration > 0) {
		setTimeout(dismiss, duration);
	}
</script>

<div
	class="rounded-xl border-2 p-4 {types[type].bg} {types[type].shadow} backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
	transition:fly={{ y: -50, duration: 300 }}
>
	<div class="flex items-center">
		<div class="flex-shrink-0">
			<span class="text-xl glow-red">{types[type].icon}</span>
		</div>
		<div class="ml-3 flex-1">
			<p class="text-sm font-medium text-white text-shadow">{message}</p>
		</div>
		{#if dismissible}
			<div class="ml-auto pl-3">
				<button
					type="button"
					class="inline-flex rounded-lg p-1 text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
					onclick={dismiss}
				>
					<span class="sr-only">Dismiss</span>
					<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>