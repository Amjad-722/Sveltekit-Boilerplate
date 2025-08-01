<script>
	import { toast } from '$lib/stores/toast.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import Accordion from '$lib/components/ui/Accordion.svelte';

	let showModal = false;
	let dropdownOpen = false;
	let inputValue = '';
	let loading = false;

	function simulateLoading() {
		loading = true;
		setTimeout(() => {
			loading = false;
			toast.success('🎉 Action completed successfully!');
		}, 2000);
	}
</script>

<svelte:head>
	<title>Components - Svelte Boilerplate Kit</title>
	<meta name="description" content="Explore all available UI components" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="text-center mb-16">
			<div class="mb-6">
				<span class="text-6xl float glow-red">🧩</span>
			</div>
			<h1 class="text-responsive-xl font-heading text-white text-shadow-red mb-6">
				UI <span class="text-red-400">Components</span>
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto text-shadow">
				Explore our collection of <span class="text-red-400 font-semibold">stunning</span>, reusable, and accessible components built with modern design principles.
			</p>
		</div>

		<div class="space-y-16">
			<Accordion/>
			<!-- Buttons Section -->
			<Card title="🔘 Buttons" subtitle="Various button styles and interactive states">
				<div class="space-y-8">
					<div>
						<h4 class="text-lg font-heading text-white text-shadow mb-4">Button Variants</h4>
						<div class="flex flex-wrap gap-4">
							<Button variant="primary" class="hover-glow">🚀 Primary</Button>
							<Button variant="secondary" class="hover-glow">⚙️ Secondary</Button>
							<Button variant="danger" class="hover-glow">💥 Danger</Button>
							<Button variant="success" class="hover-glow">✅ Success</Button>
							<Button variant="outline" class="hover-glow">🔥 Outline</Button>
						</div>
					</div>

					<div>
						<h4 class="text-lg font-heading text-white text-shadow mb-4">Button Sizes</h4>
						<div class="flex items-center gap-4">
							<Button size="sm" class="hover-glow">Small</Button>
							<Button size="md" class="hover-glow">Medium</Button>
							<Button size="lg" class="hover-glow">Large</Button>
						</div>
					</div>

					<div>
						<h4 class="text-lg font-heading text-white text-shadow mb-4">Button States</h4>
						<div class="flex flex-wrap gap-4">
							<Button {loading} onclick={simulateLoading} class="hover-glow">
								{loading ? '⏳ Loading...' : '🎯 Click to Load'}
							</Button>
							<Button disabled>🚫 Disabled</Button>
							<Button href="/about" class="hover-glow">🔗 Link Button</Button>
						</div>
					</div>
				</div>
			</Card>

			<!-- Inputs Section -->
			<Card title="📝 Input Fields" subtitle="Beautiful form inputs with validation">
				<div class="space-y-6 max-w-lg">
					<Input
						label="Email Address"
						type="email"
						placeholder="Enter your email address"
						bind:value={inputValue}
						required
					/>
					
					<Input
						label="Password"
						type="password"
						placeholder="Enter your secure password"
						required
					/>
					
					<Input
						label="Disabled Input"
						placeholder="This input is disabled"
						disabled
					/>
					
					<Input
						label="Input with Error"
						placeholder="This field has validation error"
						error="⚠️ This field is required and cannot be empty"
					/>
				</div>
			</Card>

			<!-- Modal Section -->
			<Card title="🪟 Modal Dialogs" subtitle="Stunning modal dialogs with glass morphism">
				<div class="space-y-6">
					<p class="text-gray-300 text-shadow">
						Experience our beautiful modal dialogs with backdrop blur, smooth animations, and keyboard navigation.
					</p>
					<Button onclick={() => showModal = true} class="hover-glow">
						🎭 Open Stunning Modal
					</Button>
				</div>
			</Card>

			<!-- Dropdown Section -->
			<Card title="📋 Dropdown Menus" subtitle="Interactive dropdown menus with smooth animations">
				<div class="space-y-6">
					<p class="text-gray-300 text-shadow">
						Click-outside handling, keyboard navigation, and beautiful glass morphism effects included.
					</p>
					<Dropdown bind:open={dropdownOpen}>
						<Button variant="outline" class="hover-glow">
							🎯 Open Dropdown
							<svg class="ml-2 h-4 w-4 transition-transform duration-200" class:rotate-180={dropdownOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</Button>
						
						<button
							class="block w-full text-left px-4 py-3 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							on:click={() => { dropdownOpen = false; toast.info('📄 Option 1 selected successfully!'); }}
						>
							📄 Document Option
						</button>
						<button
							class="block w-full text-left px-4 py-3 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							on:click={() => { dropdownOpen = false; toast.info('⚙️ Settings option selected!'); }}
						>
							⚙️ Settings Option
						</button>
						<hr class="my-1 border-red-500/30" />
						<button
							class="block w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							on:click={() => { dropdownOpen = false; toast.warning('🗑️ Danger option selected!'); }}
						>
							🗑️ Delete Option
						</button>
					</Dropdown>
				</div>
			</Card>

			<!-- Cards Section -->
			<Card title="🃏 Card Containers" subtitle="Flexible card layouts with glass morphism">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card title="✨ Simple Card" padding="md">
						<p class="text-gray-300 text-shadow">
							This is a beautiful card with glass morphism effects and red accent borders.
						</p>
					</Card>
					
					<Card title="🎯 Card with Subtitle" subtitle="Enhanced with stunning visuals" padding="md">
						<p class="text-gray-300 text-shadow">
							This card demonstrates both title and subtitle with our signature styling.
						</p>
					</Card>
					
					<Card padding="lg">
						<h3 class="text-xl font-heading text-white text-shadow-red mb-3">
							🚀 Custom Content Card
						</h3>
						<p class="text-gray-300 text-shadow mb-6">
							Cards can contain any content you want with full control over styling and layout.
						</p>
						<Button size="sm" class="hover-glow">🎯 Action Button</Button>
					</Card>
					
					<Card title="🎨 Custom Styled Card" padding="none">
						<div class="p-8 gradient-red text-white relative overflow-hidden">
							<div class="relative z-10">
								<h3 class="text-xl font-heading text-shadow mb-3">Custom Gradient</h3>
								<p class="text-shadow">With no padding, you have complete control over the visual design.</p>
							</div>
						</div>
					</Card>
				</div>
			</Card>

			<!-- Toast Notifications -->
			<Card title="🍞 Toast Notifications" subtitle="Beautiful notification system with glass effects">
				<div class="space-y-6">
					<p class="text-gray-300 text-shadow">
						Toast notifications appear with stunning glass morphism effects and auto-dismiss functionality.
					</p>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						<Button variant="success" onclick={() => toast.success('🎉 Success! Everything worked perfectly!')} class="hover-glow h-16">
							<div class="text-center">
								<div class="text-2xl mb-1">✅</div>
								<div>Success Toast</div>
							</div>
						</Button>
						<Button variant="danger" onclick={() => toast.error('💥 Error! Something went wrong!')} class="hover-glow h-16">
							<div class="text-center">
								<div class="text-2xl mb-1">❌</div>
								<div>Error Toast</div>
							</div>
						</Button>
						<Button variant="secondary" onclick={() => toast.warning('⚠️ Warning! Please check this carefully!')} class="hover-glow h-16">
							<div class="text-center">
								<div class="text-2xl mb-1">⚠️</div>
								<div>Warning Toast</div>
							</div>
						</Button>
						<Button variant="outline" onclick={() => toast.info('💡 Info: Here is some useful information!')} class="hover-glow h-16">
							<div class="text-center">
								<div class="text-2xl mb-1">💡</div>
								<div>Info Toast</div>
							</div>
						</Button>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>

<!-- Demo Modal -->
<Modal bind:open={showModal} title="🎭 Stunning Modal Example" size="md">
	<div class="space-y-6">
		<p class="text-gray-300 text-shadow">
			This is our beautiful modal dialog with glass morphism effects. You can close it by clicking the backdrop, 
			pressing the Escape key, or using the buttons below.
		</p>
		
		<div class="glass p-6 rounded-xl border border-red-500/30">
			<h4 class="text-red-300 font-heading text-shadow mb-3">✨ Modal Features:</h4>
			<ul class="text-gray-300 text-sm space-y-2 text-shadow">
				<li class="flex items-center"><span class="text-red-400 mr-2">🎯</span> Backdrop click to close</li>
				<li class="flex items-center"><span class="text-red-400 mr-2">⌨️</span> Escape key to close</li>
				<li class="flex items-center"><span class="text-red-400 mr-2">🎪</span> Focus management</li>
				<li class="flex items-center"><span class="text-red-400 mr-2">📏</span> Multiple sizes available</li>
				<li class="flex items-center"><span class="text-red-400 mr-2">♿</span> Fully accessible</li>
				<li class="flex items-center"><span class="text-red-400 mr-2">✨</span> Glass morphism effects</li>
			</ul>
		</div>
		
		<div class="flex justify-end space-x-4">
			<Button variant="outline" onclick={() => showModal = false} class="hover-glow">
				❌ Cancel
			</Button>
			<Button onclick={() => { showModal = false; toast.success('🎉 Modal action confirmed successfully!'); }} class="hover-glow">
				✅ Confirm
			</Button>
		</div>
	</div>
</Modal>