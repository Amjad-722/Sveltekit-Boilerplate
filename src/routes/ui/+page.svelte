<script>
	import { ComponentBrowser, Button, Card, Badge } from '$lib/components/ui';
	import { toast } from '$lib/stores/toast.js';

	let componentBrowserOpen = $state(false);

	const quickAccessComponents = [
		{ name: 'Button', icon: '🔘', category: 'Interactive', route: '/components-demo#buttons' },
		{ name: 'Card', icon: '🃏', category: 'Layout', route: '/components-demo#layout' },
		{ name: 'Modal', icon: '🪟', category: 'Overlays', route: '/components-demo#overlays' },
		{ name: 'DataTable', icon: '📋', category: 'Data', route: '/components-demo#data' },
		{ name: 'Charts', icon: '📊', category: 'Charts', route: '/components-demo#data' },
		{ name: 'Forms', icon: '📝', category: 'Forms', route: '/components-demo#forms' }
	];

	function handleQuickAccess(component) {
		toast.info(`🧩 Navigating to ${component.name} components`);
		window.location.href = component.route;
	}
</script>

<svelte:head>
	<title>UI Components - Svelte Kit</title>
	<meta name="description" content="Comprehensive UI component library with modern design" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Hero Section -->
		<div class="text-center mb-16">
			<div class="mb-6">
				<span class="text-6xl float glow-red">🧩</span>
			</div>
			<h1 class="text-responsive-xl font-heading text-white text-shadow-red mb-6">
				UI <span class="text-red-400">Component Library</span>
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto text-shadow mb-8">
				Discover our comprehensive collection of <span class="text-red-400 font-semibold">40+ components</span> 
				built with modern design principles, accessibility, and Svelte 5 runes.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button 
					variant="primary" 
					size="lg"
					onclick={() => componentBrowserOpen = true}
					class="hover-glow"
					placeholder="🧩 Browse All Components"
				/>
				<Button 
					variant="outline" 
					size="lg"
					href="/components-demo"
					class="hover-glow"
					placeholder="🎯 Live Demo"
				/>
			</div>
		</div>

		<!-- Quick Access Grid -->
		<div class="mb-16">
			<h2 class="text-2xl font-heading text-white text-shadow mb-8 text-center">
				🚀 Quick Access
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each quickAccessComponents as component}
					<Card 
						hover 
						class="cursor-pointer group"
						onclick={() => handleQuickAccess(component)}
					>
						<div class="text-center">
							<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
								{component.icon}
							</div>
							<h3 class="text-lg font-semibold text-white mb-2">{component.name}</h3>
							<Badge variant="outline" size="sm">{component.category}</Badge>
						</div>
					</Card>
				{/each}
			</div>
		</div>

		<!-- Features Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
			<Card>
				<div class="text-center">
					<div class="text-4xl mb-4">⚡</div>
					<h3 class="text-xl font-heading text-white mb-3">Modern & Fast</h3>
					<p class="text-gray-300 text-shadow">
						Built with Svelte 5 runes for optimal performance and reactivity
					</p>
				</div>
			</Card>
			
			<Card>
				<div class="text-center">
					<div class="text-4xl mb-4">♿</div>
					<h3 class="text-xl font-heading text-white mb-3">Accessible</h3>
					<p class="text-gray-300 text-shadow">
						ARIA compliant with keyboard navigation and screen reader support
					</p>
				</div>
			</Card>
			
			<Card>
				<div class="text-center">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-xl font-heading text-white mb-3">Customizable</h3>
					<p class="text-gray-300 text-shadow">
						Multiple variants, sizes, and themes with glass morphism effects
					</p>
				</div>
			</Card>
		</div>

		<!-- Component Categories -->
		<div class="mb-16">
			<h2 class="text-2xl font-heading text-white text-shadow mb-8 text-center">
				📦 Component Categories
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each [
					{ name: 'Interactive', icon: '🔘', count: 1 },
					{ name: 'Forms', icon: '📝', count: 9 },
					{ name: 'Layout', icon: '📦', count: 3 },
					{ name: 'Navigation', icon: '🧭', count: 4 },
					{ name: 'Feedback', icon: '💬', count: 4 },
					{ name: 'Data', icon: '📊', count: 2 },
					{ name: 'Charts', icon: '📈', count: 3 },
					{ name: 'Cards', icon: '🗂️', count: 3 },
					{ name: 'Overlays', icon: '🪟', count: 4 },
					{ name: 'Elements', icon: '🎨', count: 2 },
					{ name: 'Settings', icon: '⚙️', count: 3 }
				] as category}
					<Card 
						hover 
						class="cursor-pointer text-center"
						onclick={() => componentBrowserOpen = true}
					>
						<div class="text-2xl mb-2">{category.icon}</div>
						<div class="text-sm font-medium text-white">{category.name}</div>
						<Badge size="sm" variant="outline" class="mt-1">{category.count}</Badge>
					</Card>
				{/each}
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<Card class="max-w-2xl mx-auto">
				<div class="text-center">
					<div class="text-4xl mb-4">🚀</div>
					<h3 class="text-2xl font-heading text-white mb-4">Ready to Build?</h3>
					<p class="text-gray-300 text-shadow mb-6">
						Start building amazing user interfaces with our comprehensive component library
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							variant="primary"
							onclick={() => componentBrowserOpen = true}
							class="hover-glow"
							placeholder="🧩 Explore Components"
						/>
						<Button 
							variant="outline"
							href="/components-demo"
							class="hover-glow"
							placeholder="📖 View Documentation"
						/>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>

<!-- Component Browser -->
<ComponentBrowser 
	bind:open={componentBrowserOpen}
	onComponentSelect={(component) => {
		console.log('Selected component:', component);
		toast.info(`🧩 Navigating to ${component.name} component`);
	}}
/>