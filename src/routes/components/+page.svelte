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

	const faqItems = [
		{
			title: 'What is SvelteKit?',
			content: () => 'SvelteKit is a framework for building web applications with Svelte.'
		},
		{
			title: 'How do I get started?',
			content: () => 'Install SvelteKit with npm create svelte@latest my-app'
		},
		{
			title: 'Is it production ready?',
			content: () => 'Yes, SvelteKit is stable and ready for production use.'
		}
	];
</script>

<svelte:head>
	<title>Components - Svelte Boilerplate Kit</title>
	<meta name="description" content="Explore all available UI components" />
</svelte:head>

<div class="min-h-screen">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mb-6">
				<span class="float glow-red text-6xl">🧩</span>
			</div>
			<h1 class="text-responsive-xl font-heading text-shadow-red mb-6 text-white">
				UI <span class="text-red-400">Components</span>
			</h1>
			<p class="text-shadow mx-auto max-w-3xl text-xl text-gray-300">
				Explore our collection of <span class="font-semibold text-red-400">stunning</span>,
				reusable, and accessible components built with modern design principles.
			</p>
		</div>

		<div class="space-y-16">
			<Card title="🔘 Buttons" subtitle="Various button styles and interactive states">
				<div class="space-y-8">
					<div>
						<h4 class="font-heading text-shadow mb-4 text-lg text-white">Button Variants</h4>
						<div class="flex flex-wrap gap-4">
							<Button size="sm" variant="primary" class="hover-glow" placeholder="Primary" />
							<Button size="sm" variant="secondary" class="hover-glow" placeholder="Secondary" />
							<Button size="sm" variant="danger" class="hover-glow" placeholder="Danger" />
							<Button size="sm" variant="success" class="hover-glow" placeholder="Success" />
							<Button size="sm" variant="outline" class="hover-glow" placeholder="Outline" />
						</div>
					</div>

					<div>
						<h4 class="font-heading text-shadow mb-4 text-lg text-white">Button Sizes</h4>
						<div class="flex items-center gap-4">
							<Button size="sm" class="hover-glow">Small</Button>
							<Button size="md" class="hover-glow">Medium</Button>
							<Button size="lg" class="hover-glow">Large</Button>
						</div>
					</div>

					<div>
						<h4 class="font-heading text-shadow mb-4 text-lg text-white">Button States</h4>
						<div class="flex flex-wrap gap-4">
							<Button {loading} onclick={simulateLoading} class="hover-glow">
								{loading ? '⏳ Loading...' : '🎯 Click to Load'}
							</Button>
							<Button disabled placeholder="🚫 Disabled" />
							<Button variant="primary" size="lg" placeholder="🔗 Link Button" />
						</div>
					</div>
				</div>
			</Card>

			<Card title="📝 Input Fields" subtitle="Beautiful form inputs with validation">
				<div class="max-w-lg space-y-6">
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

					<Input label="Disabled Input" placeholder="This input is disabled" disabled />

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
					<p class="text-shadow text-gray-300">
						Experience our beautiful modal dialogs with backdrop blur, smooth animations, and
						keyboard navigation.
					</p>
					<Button onclick={() => (showModal = true)} class="hover-glow">
						🎭 Open Stunning Modal
					</Button>
				</div>
			</Card>showModal

			<Card title="📋 Dropdown Menus" subtitle="Interactive dropdown menus with smooth animations">
				<div class="space-y-6">
					<p class="text-shadow text-gray-300">
						Click-outside handling, keyboard navigation, and beautiful glass morphism effects
						included.
					</p>
					<Dropdown bind:open={dropdownOpen}>
						<Button variant="outline" class="hover-glow">
							🎯 Open Dropdown
							<svg
								class="ml-2 h-4 w-4 transition-transform duration-200"
								class:rotate-180={dropdownOpen}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</Button>

						<button
							class="text-shadow block w-full px-4 py-3 text-left text-sm text-white transition-all duration-200 hover:bg-red-500/20 hover:text-red-300"
							on:click={() => {
								dropdownOpen = false;
								toast.info('📄 Option 1 selected successfully!');
							}}
						>
							📄 Document Option
						</button>
						<button
							class="text-shadow block w-full px-4 py-3 text-left text-sm text-white transition-all duration-200 hover:bg-red-500/20 hover:text-red-300"
							on:click={() => {
								dropdownOpen = false;
								toast.info('⚙️ Settings option selected!');
							}}
						>
							⚙️ Settings Option
						</button>
						<hr class="my-1 border-red-500/30" />
						<button
							class="text-shadow block w-full px-4 py-3 text-left text-sm text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300"
							on:click={() => {
								dropdownOpen = false;
								toast.warning('🗑️ Danger option selected!');
							}}
						>
							🗑️ Delete Option
						</button>
					</Dropdown>
				</div>
			</Card>
			<Card title="📋 Dropdown Menus" subtitle="Interactive dropdown menus with smooth animations">
				<Accordion items={faqItems} class="mx-auto max-w-2xl pt-4" multiple={true} />
			</Card>

			<!-- Cards Section -->
			<Card title="🃏 Card Containers" subtitle="Flexible card layouts with glass morphism">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					<Card title="✨ Simple Card" padding="md">
						<p class="text-shadow text-gray-300">
							This is a beautiful card with glass morphism effects and red accent borders.
						</p>
					</Card>

					<Card
						title="🎯 Card with Subtitle"
						subtitle="Enhanced with stunning visuals"
						padding="md"
					>
						<p class="text-shadow text-gray-300">
							This card demonstrates both title and subtitle with our signature styling.
						</p>
					</Card>

					<Card padding="lg">
						<h3 class="font-heading text-shadow-red mb-3 text-xl text-white">
							🚀 Custom Content Card
						</h3>
						<p class="text-shadow mb-6 text-gray-300">
							Cards can contain any content you want with full control over styling and layout.
						</p>
						<Button size="sm" class="hover-glow">🎯 Action Button</Button>
					</Card>

					<Card title="🎨 Custom Styled Card" padding="none">
						<div class="gradient-red relative overflow-hidden p-8 text-white">
							<div class="relative z-10">
								<h3 class="font-heading text-shadow mb-3 text-xl">Custom Gradient</h3>
								<p class="text-shadow">
									With no padding, you have complete control over the visual design.
								</p>
							</div>
						</div>
					</Card>
				</div>
			</Card>

			<!-- Toast Notifications -->
			<Card
				title="🍞 Toast Notifications"
				subtitle="Beautiful notification system with glass effects"
			>
				<div class="space-y-6">
					<p class="text-shadow text-gray-300">
						Toast notifications appear with stunning glass morphism effects and auto-dismiss
						functionality.
					</p>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<Button
							variant="success"
							onclick={() => toast.success('🎉 Success! Everything worked perfectly!')}
							class="hover-glow h-16"
						>
							<div class="text-center">
								<div class="mb-1 text-2xl">✅</div>
								<div>Success Toast</div>
							</div>
						</Button>
						<Button
							variant="danger"
							onclick={() => toast.error('💥 Error! Something went wrong!')}
							class="hover-glow h-16"
						>
							<div class="text-center">
								<div class="mb-1 text-2xl">❌</div>
								<div>Error Toast</div>
							</div>
						</Button>
						<Button
							variant="secondary"
							onclick={() => toast.warning('⚠️ Warning! Please check this carefully!')}
							class="hover-glow h-16"
						>
							<div class="text-center">
								<div class="mb-1 text-2xl">⚠️</div>
								<div>Warning Toast</div>
							</div>
						</Button>
						<Button
							variant="outline"
							onclick={() => toast.info('💡 Info: Here is some useful information!')}
							class="hover-glow h-16"
						>
							<div class="text-center">
								<div class="mb-1 text-2xl">💡</div>
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
		<p class="text-shadow text-gray-300">
			This is our beautiful modal dialog with glass morphism effects. You can close it by clicking
			the backdrop, pressing the Escape key, or using the buttons below.
		</p>

		<div class="glass rounded-xl border border-red-500/30 p-6">
			<h4 class="font-heading text-shadow mb-3 text-red-300">✨ Modal Features:</h4>
			<ul class="text-shadow space-y-2 text-sm text-gray-300">
				<li class="flex items-center">
					<span class="mr-2 text-red-400">🎯</span> Backdrop click to close
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-red-400">⌨️</span> Escape key to close
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-red-400">🎪</span> Focus management
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-red-400">📏</span> Multiple sizes available
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-red-400">♿</span> Fully accessible
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-red-400">✨</span> Glass morphism effects
				</li>
			</ul>
		</div>

		<div class="flex justify-end space-x-4">
			<Button variant="outline" onclick={() => (showModal = false)} class="hover-glow">
				❌ Cancel
			</Button>
			<Button
				onclick={() => {
					showModal = false;
					toast.success('🎉 Modal action confirmed successfully!');
				}}
				class="hover-glow"
			>
				✅ Confirm
			</Button>
		</div>
	</div>
</Modal>
