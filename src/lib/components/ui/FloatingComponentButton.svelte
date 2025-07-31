<script>
	import { ComponentBrowser, Button, Tooltip } from '$lib/components/ui';
	import { toast } from '$lib/stores/toast.js';

	let componentBrowserOpen = $state(false);
	let isVisible = $state(true);
	let lastScrollY = $state(0);

	// Hide/show button on scroll
	function handleScroll() {
		const currentScrollY = window.scrollY;
		isVisible = currentScrollY < lastScrollY || currentScrollY < 100;
		lastScrollY = currentScrollY;
	}

	// Add scroll listener
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', handleScroll, { passive: true });
	}
</script>

<!-- Floating Action Button -->
<div 
	class="fixed bottom-6 right-6 z-50 transition-all duration-300"
	class:translate-y-20={!isVisible}
	class:opacity-0={!isVisible}
>
	<Tooltip content="Browse all components" position="left">
		<Button
			variant="primary"
			size="lg"
			onclick={() => componentBrowserOpen = true}
			class="rounded-full w-16 h-16 shadow-red-xl hover:shadow-red-xl hover:scale-110 transition-all duration-300 glow-red"
			placeholder="🧩"
		/>
	</Tooltip>
</div>

<!-- Component Browser -->
<ComponentBrowser 
	bind:open={componentBrowserOpen}
	onComponentSelect={(component) => {
		console.log('Selected component:', component);
		toast.info(`🧩 Navigating to ${component.name} component`);
	}}
/>