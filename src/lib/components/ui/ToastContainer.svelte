<script>
	import { toast } from '$lib/stores/toast.js';
	import Toast from './Toast.svelte';
</script>

<div class="fixed top-4 right-4 z-50 space-y-2">
	{#each $toast as toastItem (toastItem.id)}
		<Toast
			type={toastItem.type}
			message={toastItem.message}
			duration={0}
			on:dismiss={() => toast.remove(toastItem.id)}
		/>
	{/each}
</div>