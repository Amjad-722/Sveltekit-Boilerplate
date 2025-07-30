<script>
	import { createEventDispatcher } from 'svelte';
	
	let {
		open = $bindable(false),
		trigger,
		children
	} = $props();

	const dispatch = createEventDispatcher();
	let dropdownRef;

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

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeDropdown();
		}
	}

	function handleTriggerKeydown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleDropdown();
		}
	}
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<div class="relative inline-block text-left" bind:this={dropdownRef}>
	<div
		role="button"
		tabindex="0"
		onclick={toggleDropdown}
		onkeydown={handleTriggerKeydown}
		aria-expanded={open}
		aria-haspopup="true"
	>
		{@render trigger()}
	</div>

	{#if open}
		<div class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl glass shadow-red-xl border-2 border-red-500/30 focus:outline-none backdrop-blur-sm animate-in fade-in zoom-in duration-200" role="menu" aria-orientation="vertical">
			<div class="py-2" role="none">
				{@render children()}
			</div>
		</div>
	{/if}
</div>