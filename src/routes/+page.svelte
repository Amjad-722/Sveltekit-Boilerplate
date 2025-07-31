<script>
	import { toast } from '$lib/stores/toast.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	function showToastDemo(type) {
		const messages = {
			success: '🎉 Success! Everything worked perfectly!',
			error: '💥 Error! Something went wrong!',
			warning: '⚠️ Warning! Please check this carefully!',
			info: '💡 Info: Here is some useful information!'
		};
		toast[type](messages[type]);
	}
</script>

<svelte:head>
	<title>Home - Svelte Boilerplate Kit</title>
	<meta name="description" content="A comprehensive Svelte boilerplate with essential components" />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="text-center mb-20">
			<div class="mb-8">
				<span class="text-8xl glow-red animate-pulse">🚀</span>
			</div>
			<h1 class="text-6xl md:text-7xl font-black text-white text-shadow-red mb-8 leading-tight">
				<span class="gradient-red bg-clip-text text-white rounded-full px-2">Svelte</span>
				<span class="text-white">Boilerplate</span>
				<br>
				<span class="text-red-400">Kit</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 text-shadow leading-relaxed">
				A <span class="text-red-400 font-semibold">stunning</span> collection of reusable components and utilities for your Svelte projects.
				Built with <span class="text-red-400 font-semibold">SvelteKit</span>, <span class="text-red-400 font-semibold">Vite</span>, and <span class="text-red-400 font-semibold">Tailwind CSS</span>.
			</p>
			<div class="flex flex-col sm:flex-row justify-center gap-6">
				<Button href="/components" size="lg" class="transform hover:scale-110 py-2 px-4 rounded-full  transform hover:scale-110 gradient-red text-white shadow-red border border-red-400' : 'text-red-300 hover:text-white hover:bg-red-500/20 hover:shadow-lg">
					Explore Components
				</Button>
				<Button href="/dashboard" variant="outline" size="lg" class=" py-2 px-4 rounded-full  transform hover:scale-110 gradient-red text-white shadow-red border border-red-400' : 'text-red-300 hover:text-white hover:bg-red-500/20 hover:shadow-lg">
					View Dashboard
				</Button>
			</div>
		</div>

		<!-- Feature Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
			<Card title="🔐 Authentication" subtitle="Complete auth system with style">
				<p class="text-gray-300 mb-6 text-shadow">
					Ready-to-use authentication with persistent state, stunning login forms, and secure user management.
				</p>
				<Button href="/login" size="sm" class="w-full">
					🚪 Try Login
				</Button>
			</Card>

			<Card title="🎨 UI Components" subtitle="Beautiful, accessible components">
				<p class="text-gray-300 mb-6 text-shadow">
					Buttons, inputs, modals, cards, dropdowns, and more. All with stunning dark theme and red accents.
				</p>
				<Button href="/components" size="sm" class="w-full">
					🧩 View Components
				</Button>
			</Card>

			<Card title="📝 Form Handling" subtitle="Advanced form components">
				<p class="text-gray-300 mb-6 text-shadow">
					Form validation, input components, and form state management with beautiful styling.
				</p>
				<Button href="/forms" size="sm" class="w-full">
					📋 See Forms
				</Button>
			</Card>

			<Card title="🍞 Toast Notifications" subtitle="Elegant notification system">
				<p class="text-gray-300 mb-6 text-shadow">
					Success, error, warning, and info toasts with glass morphism and smooth animations.
				</p>
				<div class="flex space-x-2">
					<Button size="sm" variant="success" onclick={() => showToastDemo('success')} class="flex-1">
						✅ Success
					</Button>
					<Button size="sm" variant="danger" onclick={() => showToastDemo('error')} class="flex-1">
						❌ Error
					</Button>
				</div>
			</Card>

			<Card title="📱 Responsive Design" subtitle="Mobile-first approach">
				<p class="text-gray-300 mb-6 text-shadow">
					All components are fully responsive with stunning shadows and effects on all device sizes.
				</p>
				<Button size="sm" variant="outline" class="w-full">
					📱 Responsive
				</Button>
			</Card>

			<Card title="⚡ Performance" subtitle="Optimized for speed">
				<p class="text-gray-300 mb-6 text-shadow">
					Built with Vite for lightning-fast development and optimized production builds with stunning UI.
				</p>
				<Button href="/about" size="sm" variant="outline" class="w-full">
					📖 Learn More
				</Button>
			</Card>
		</div>

		<!-- Interactive Demo Section -->
		<Card title=" Interactive Toast Demo" subtitle="Try our stunning notification system" padding="lg">
			<p class="text-gray-300 mb-8 text-shadow text-center">
				Experience our beautiful toast notification system with glass morphism effects and smooth animations.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<Button variant="success" onclick={() => showToastDemo('success')} class="h-16 text-lg">
					<div class="text-center">
						<div class="text-2xl mb-1">✅</div>
						<div>Success Toast</div>
					</div>
				</Button>
				<Button variant="danger" onclick={() => showToastDemo('error')} class="h-16 text-lg">
					<div class="text-center">
						<div class="text-2xl mb-1">❌</div>
						<div>Error Toast</div>
					</div>
				</Button>
				<Button variant="secondary" onclick={() => showToastDemo('warning')} class="h-16 text-lg">
					<div class="text-center">
						<div class="text-2xl mb-1">⚠️</div>
						<div>Warning Toast</div>
					</div>
				</Button>
				<Button variant="outline" onclick={() => showToastDemo('info')} class="h-16 text-lg">
					<div class="text-center">
						<div class="text-2xl mb-1">💡</div>
						<div>Info Toast</div>
					</div>
				</Button>
			</div>
		</Card>

		<!-- Call to Action -->
		<div class="text-center mt-20">
			<div class="glass rounded-2xl p-12 border-2 border-red-500/30 shadow-red-xl">
				<h2 class="text-4xl font-bold text-white text-shadow-red mb-6">
					Ready to Build Something <span class="text-red-400">Amazing</span>?
				</h2>
				<p class="text-xl text-gray-300 mb-8 text-shadow">
					Start with our stunning boilerplate and focus on what makes your project unique.
				</p>
				<div class="flex flex-col sm:flex-row justify-center gap-4">
					<Button href="/components" size="lg" class=" py-2 px-4 rounded-full  transform hover:scale-110 gradient-red text-white shadow-red border border-red-400' : 'text-red-300 hover:text-white hover:bg-red-500/20 hover:shadow-lg">
						 Get Started Now
					</Button>
					<Button href="/about" variant="outline" size="lg" class="py-2 px-4 rounded-full  transform hover:scale-110 gradient-red text-white shadow-red border border-red-400' : 'text-red-300 hover:text-white hover:bg-red-500/20 hover:shadow-lg">
						 Learn More
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>