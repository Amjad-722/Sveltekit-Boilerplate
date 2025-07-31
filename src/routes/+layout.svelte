<script>
	import { onMount } from 'svelte';
	import { auth } from '$lib/stores/auth.js';
	import { theme } from '$lib/stores/theme.js';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import ToastContainer from '$lib/components/ui/ToastContainer.svelte';
	import FloatingComponentButton from '$lib/components/ui/FloatingComponentButton.svelte';
	import '../app.css';

	onMount(() => {
		auth.init();
		theme.init();
	});
</script>

<div class="min-h-screen gradient-dark">
	<Navbar />
	<main class="relative">
		<!-- Background pattern -->
		<div class="absolute inset-0 opacity-5">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #dc2626 0%, transparent 50%), radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%);"></div>
		</div>
		<div class="relative z-10">
			<slot />
		</div>
	</main>
</div>

<ToastContainer />
<FloatingComponentButton />