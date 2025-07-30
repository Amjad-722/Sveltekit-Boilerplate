<script>
	import { toast } from '$lib/stores/toast.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const features = [
		{
			icon: '🎨',
			title: 'Stunning UI Components',
			description: 'Pre-built, customizable components with glass morphism effects, red accents, and dark theme support.'
		},
		{
			icon: '🔐',
			title: 'Authentication System',
			description: 'Complete auth flow with persistent state, beautiful form validation, and secure user management.'
		},
		{
			icon: '📱',
			title: 'Responsive Design',
			description: 'Mobile-first approach with stunning shadows and effects that look amazing on all devices.'
		},
		{
			icon: '⚡',
			title: 'Performance Optimized',
			description: 'Built with Vite for lightning-fast development and optimized production builds with stunning UI.'
		},
		{
			icon: '🌙',
			title: 'Dark Theme',
			description: 'Beautiful black and red theme with glass morphism effects and smooth animations.'
		},
		{
			icon: '🧪',
			title: 'Testing Ready',
			description: 'Configured with Vitest and Playwright for comprehensive testing with beautiful UI components.'
		}
	];

	const techStack = [
		{ name: 'SvelteKit', description: 'Full-stack web framework', icon: '🚀' },
		{ name: 'Vite', description: 'Build tool and dev server', icon: '⚡' },
		{ name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨' },
		{ name: 'Orbitron Font', description: 'Modern heading typography', icon: '🔤' },
		{ name: 'Vitest', description: 'Unit testing framework', icon: '🧪' },
		{ name: 'Playwright', description: 'End-to-end testing', icon: '🎭' }
	];

	function handleGetStarted() {
		toast.success('🚀 Ready to start building! Check out the components page.');
	}
</script>

<svelte:head>
	<title>About - Svelte Boilerplate Kit</title>
	<meta name="description" content="Learn about the Svelte Boilerplate Kit and its features" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Hero Section -->
		<div class="text-center mb-20">
			<div class="mb-8">
				<span class="text-8xl float glow-red pulse-red">ℹ️</span>
			</div>
			<h1 class="text-6xl font-heading text-white text-shadow-red mb-8">
				About <span class="text-red-400">Svelte</span> Boilerplate Kit
			</h1>
			<p class="text-xl text-gray-300 max-w-4xl mx-auto mb-10 text-shadow leading-relaxed">
				A <span class="text-red-400 font-semibold">comprehensive</span>, production-ready boilerplate that provides everything you need to build 
				<span class="text-red-400 font-semibold">stunning</span> modern web applications with Svelte. Save time and focus on what matters most - your unique features.
			</p>
			<Button onclick={handleGetStarted} size="lg" class="hover-glow transform hover:scale-110">
				🚀 Get Started Now
			</Button>
		</div>

		<!-- Mission Section -->
		<Card title="🎯 Our Mission" subtitle="Why we built this stunning boilerplate" padding="lg">
			<div class="space-y-6">
				<p class="text-gray-300 text-lg leading-relaxed text-shadow">
					Every web project starts with the same foundational components: authentication, forms, modals, notifications, and responsive layouts. Instead of rebuilding these from scratch every time, we created a <span class="text-red-400 font-semibold">comprehensive boilerplate</span> that includes all the essential pieces you need.
				</p>
				<p class="text-gray-300 text-lg leading-relaxed text-shadow">
					Our goal is to help developers ship faster by providing <span class="text-red-400 font-semibold">battle-tested components</span>, sensible defaults, and modern development practices. Whether you're building a startup MVP or an enterprise application, this boilerplate gives you a <span class="text-red-400 font-semibold">stunning foundation</span> to build upon.
				</p>
			</div>
		</Card>

		<!-- Features Grid -->
		<div class="mt-20">
			<h2 class="text-4xl font-heading text-white text-shadow-red text-center mb-16">
				✨ Key <span class="text-red-400">Features</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each features as feature}
					<Card padding="lg" class="hover-glow">
						<div class="text-center">
							<div class="text-5xl mb-6 glow-red">{feature.icon}</div>
							<h3 class="text-xl font-heading text-white text-shadow-red mb-4">
								{feature.title}
							</h3>
							<p class="text-gray-300 text-shadow">
								{feature.description}
							</p>
						</div>
					</Card>
				{/each}
			</div>
		</div>

		<!-- Tech Stack -->
		<div class="mt-20">
			<h2 class="text-4xl font-heading text-white text-shadow-red text-center mb-16">
				🛠️ Technology <span class="text-red-400">Stack</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each techStack as tech}
					<div class="glass rounded-xl p-6 border border-red-500/30 hover:shadow-red-lg transition-all duration-300 hover-glow">
						<div class="flex items-center space-x-4">
							<span class="text-3xl glow-red">{tech.icon}</span>
							<div>
								<h3 class="text-lg font-heading text-white text-shadow-red">
									{tech.name}
								</h3>
								<p class="text-sm text-gray-300 text-shadow">
									{tech.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Getting Started -->
		<div class="mt-20">
			<Card title="🚀 Getting Started" subtitle="How to use this stunning boilerplate" padding="lg">
				<div class="space-y-8">
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="text-center">
							<div class="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-red-500/30 glow-red">
								<span class="text-2xl">1️⃣</span>
							</div>
							<h3 class="text-lg font-heading text-white text-shadow-red mb-3">
								Clone & Install
							</h3>
							<p class="text-gray-300 text-shadow text-sm">
								Clone the repository and install dependencies with npm install
							</p>
						</div>
						
						<div class="text-center">
							<div class="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-red-500/30 glow-red">
								<span class="text-2xl">2️⃣</span>
							</div>
							<h3 class="text-lg font-heading text-white text-shadow-red mb-3">
								Customize
							</h3>
							<p class="text-gray-300 text-shadow text-sm">
								Modify components, colors, and layouts to match your brand
							</p>
						</div>
						
						<div class="text-center">
							<div class="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-red-500/30 glow-red">
								<span class="text-2xl">3️⃣</span>
							</div>
							<h3 class="text-lg font-heading text-white text-shadow-red mb-3">
								Build & Deploy
							</h3>
							<p class="text-gray-300 text-shadow text-sm">
								Add your features and deploy to your favorite platform
							</p>
						</div>
					</div>
					
					<div class="glass rounded-xl p-8 border border-red-500/30">
						<h4 class="text-lg font-heading text-red-300 text-shadow mb-6">
							📋 Quick Commands
						</h4>
						<div class="space-y-3 font-mono text-sm">
							<div class="bg-black/50 text-green-400 p-3 rounded-lg border border-red-500/20">
								<span class="text-red-400">$</span> npm run dev
							</div>
							<div class="bg-black/50 text-green-400 p-3 rounded-lg border border-red-500/20">
								<span class="text-red-400">$</span> npm run build
							</div>
							<div class="bg-black/50 text-green-400 p-3 rounded-lg border border-red-500/20">
								<span class="text-red-400">$</span> npm run test
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>

		<!-- Call to Action -->
		<div class="mt-20 text-center">
			<Card padding="lg">
				<h2 class="text-4xl font-heading text-white text-shadow-red mb-6">
					Ready to Build Something <span class="text-red-400">Amazing</span>?
				</h2>
				<p class="text-xl text-gray-300 text-shadow mb-10">
					Start with our <span class="text-red-400 font-semibold">stunning boilerplate</span> and focus on what makes your project unique.
				</p>
				<div class="flex flex-col sm:flex-row justify-center gap-6">
					<Button href="/components" size="lg" class="hover-glow transform hover:scale-110">
						🧩 Explore Components
					</Button>
					<Button href="/dashboard" variant="outline" size="lg" class="hover-glow transform hover:scale-110">
						📊 View Dashboard
					</Button>
				</div>
			</Card>
		</div>
	</div>
</div>
</div>