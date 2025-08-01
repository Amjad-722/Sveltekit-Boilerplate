<script>
	import {
		// All UI Components
		Button,
		Card,
		Input,
		Select,
		Checkbox,
		Radio,
		Switch,
		Alert,
		Toast,
		Modal,
		Badge,
		Avatar,
		Spinner,
		Progress,
		Tabs,
		Accordion,
		Dropdown,
		Tooltip,
		DataTable,
		StatsCard,
		LineChart,
		BarChart,
		PieChart,
		UserCard,
		ProductCard,
		SearchForm,
		LoginForm,
		Pagination,
		Breadcrumbs,
		StepIndicator,
		ThemeSwitcher,
		LanguageSelector,
		SettingsPanel,
		Textarea,
		Sidebar,
		Drawer,
		ComponentBrowser
	} from '$lib/components/ui';
	import { toast } from '$lib/stores/toast.js';

	// State management
	let searchQuery = $state('');
	let activeCategory = $state('all');
	let showModal = $state(false);
	let showToast = $state(false);
	let showDrawer = $state(false);
	let dropdownOpen = $state(false);

	// Form states for examples
	let inputValue = $state('');
	let textareaValue = $state('');
	let selectValue = $state('');
	let checkboxValue = $state(false);
	let radioValue = $state('');
	let switchValue = $state(false);
	let progressValue = $state(75);
	let activeTab = $state(0);
	let currentPage = $state(1);
	let currentStep = $state(1);
	let settings = $state({});
	let selectedRows = $state([]);

	// Complete component examples with live demos
	const componentExamples = [
		// Interactive Components
		{
			name: 'Button',
			category: 'Interactive',
			icon: '🔘',
			description: 'Interactive buttons with multiple variants and states',
			tags: ['button', 'interactive', 'action', 'click'],
			example: () => ({
				component: 'Button',
				props: { variant: 'primary', placeholder: 'Click Me!' }
			}),
			variants: [
				{ name: 'Primary', props: { variant: 'primary', placeholder: 'Primary' } },
				{ name: 'Secondary', props: { variant: 'secondary', placeholder: 'Secondary' } },
				{ name: 'Danger', props: { variant: 'danger', placeholder: 'Danger' } },
				{ name: 'Success', props: { variant: 'success', placeholder: 'Success' } },
				{ name: 'Outline', props: { variant: 'outline', placeholder: 'Outline' } }
			]
		},

		// Form Components
		{
			name: 'Input',
			category: 'Forms',
			icon: '📝',
			description: 'Text input fields with validation and multiple types',
			tags: ['input', 'form', 'text', 'validation'],
			example: () => ({
				component: 'Input',
				props: { label: 'Email Address', placeholder: 'Enter your email', type: 'email' }
			}),
			variants: [
				{ name: 'Text', props: { label: 'Name', placeholder: 'Enter your name' } },
				{ name: 'Email', props: { label: 'Email', placeholder: 'Enter email', type: 'email' } },
				{
					name: 'Password',
					props: { label: 'Password', placeholder: 'Enter password', type: 'password' }
				}
			]
		},

		{
			name: 'Textarea',
			category: 'Forms',
			icon: '📄',
			description: 'Multi-line text input with resize options',
			tags: ['textarea', 'form', 'multiline', 'text'],
			example: () => ({
				component: 'Textarea',
				props: { label: 'Message', placeholder: 'Enter your message...', rows: 4 }
			})
		},

		{
			name: 'Select',
			category: 'Forms',
			icon: '📋',
			description: 'Dropdown selection with custom options',
			tags: ['select', 'dropdown', 'form', 'options'],
			example: () => ({
				component: 'Select',
				props: {
					label: 'Choose Option',
					options: [
						{ value: 'option1', label: 'Option 1' },
						{ value: 'option2', label: 'Option 2' },
						{ value: 'option3', label: 'Option 3' }
					]
				}
			})
		},

		{
			name: 'Checkbox',
			category: 'Forms',
			icon: '☑️',
			description: 'Custom styled checkboxes for selections',
			tags: ['checkbox', 'form', 'selection', 'toggle'],
			example: () => ({
				component: 'Checkbox',
				props: { label: 'I agree to the terms and conditions' }
			})
		},

		{
			name: 'Radio',
			category: 'Forms',
			icon: '🔘',
			description: 'Radio button groups for single selection',
			tags: ['radio', 'form', 'selection', 'group'],
			example: () => ({
				component: 'Radio',
				props: { label: 'Option 1', value: 'option1' }
			})
		},

		{
			name: 'Switch',
			category: 'Forms',
			icon: '🔄',
			description: 'Toggle switches with smooth animations',
			tags: ['switch', 'toggle', 'form', 'boolean'],
			example: () => ({
				component: 'Switch',
				props: { label: 'Enable notifications' }
			})
		},

		{
			name: 'SearchForm',
			category: 'Forms',
			icon: '🔍',
			description: 'Search input with clear functionality',
			tags: ['search', 'form', 'filter', 'find'],
			example: () => ({
				component: 'SearchForm',
				props: { placeholder: 'Search components...' }
			})
		},

		// Layout Components
		{
			name: 'Card',
			category: 'Layout',
			icon: '🃏',
			description: 'Flexible container with glass morphism effects',
			tags: ['card', 'container', 'layout', 'glass'],
			example: () => ({
				component: 'Card',
				props: { padding: 'md' },
				content: 'This is a beautiful card with glass morphism effects'
			}),
			variants: [
				{ name: 'Default', props: {} },
				{ name: 'Primary', props: { variant: 'primary' } },
				{ name: 'Outline', props: { variant: 'outline' } },
				{ name: 'Hover Effect', props: { hover: true } }
			]
		},

		// Feedback Components
		{
			name: 'Alert',
			category: 'Feedback',
			icon: '⚠️',
			description: 'Contextual alert messages with different types',
			tags: ['alert', 'notification', 'message', 'feedback'],
			example: () => ({
				component: 'Alert',
				props: { type: 'success', title: 'Success!', message: 'Operation completed successfully' }
			}),
			variants: [
				{
					name: 'Success',
					props: { type: 'success', title: 'Success!', message: 'Everything worked perfectly' }
				},
				{
					name: 'Error',
					props: { type: 'error', title: 'Error!', message: 'Something went wrong' }
				},
				{
					name: 'Warning',
					props: { type: 'warning', title: 'Warning!', message: 'Please check this' }
				},
				{
					name: 'Info',
					props: { type: 'info', title: 'Info', message: 'Here is some information' }
				}
			]
		},

		{
			name: 'Progress',
			category: 'Feedback',
			icon: '📊',
			description: 'Progress bars with labels and different variants',
			tags: ['progress', 'loading', 'status', 'bar'],
			example: () => ({
				component: 'Progress',
				props: { value: 75, showLabel: true }
			})
		},

		{
			name: 'Spinner',
			category: 'Feedback',
			icon: '⏳',
			description: 'Loading indicators with multiple sizes',
			tags: ['spinner', 'loading', 'progress', 'indicator'],
			example: () => ({
				component: 'Spinner',
				props: { size: 'md', color: 'red' }
			}),
			variants: [
				{ name: 'Small', props: { size: 'sm' } },
				{ name: 'Medium', props: { size: 'md' } },
				{ name: 'Large', props: { size: 'lg' } }
			]
		},

		// UI Elements
		{
			name: 'Badge',
			category: 'Elements',
			icon: '🏷️',
			description: 'Status and category badges with variants',
			tags: ['badge', 'label', 'status', 'tag'],
			example: () => ({
				component: 'Badge',
				props: { variant: 'primary' },
				content: 'New'
			}),
			variants: [
				{ name: 'Default', props: {}, content: 'Default' },
				{ name: 'Primary', props: { variant: 'primary' }, content: 'Primary' },
				{ name: 'Success', props: { variant: 'success' }, content: 'Success' },
				{ name: 'Warning', props: { variant: 'warning' }, content: 'Warning' },
				{ name: 'Error', props: { variant: 'error' }, content: 'Error' }
			]
		},

		{
			name: 'Avatar',
			category: 'Elements',
			icon: '👤',
			description: 'User avatars with fallbacks and online status',
			tags: ['avatar', 'profile', 'image', 'user'],
			example: () => ({
				component: 'Avatar',
				props: { fallback: 'JD', size: 'md', online: true }
			}),
			variants: [
				{ name: 'Small', props: { fallback: 'SM', size: 'sm' } },
				{ name: 'Medium', props: { fallback: 'MD', size: 'md' } },
				{ name: 'Large', props: { fallback: 'LG', size: 'lg' } },
				{ name: 'Online', props: { fallback: 'ON', size: 'md', online: true } }
			]
		},

		// Navigation Components
		{
			name: 'Tabs',
			category: 'Navigation',
			icon: '📑',
			description: 'Tabbed navigation with multiple variants',
			tags: ['tabs', 'navigation', 'switching', 'content'],
			example: () => ({
				component: 'Tabs',
				props: {
					tabs: [
						{ label: 'Tab 1', content: () => 'Content for tab 1' },
						{ label: 'Tab 2', content: () => 'Content for tab 2' },
						{ label: 'Tab 3', content: () => 'Content for tab 3' }
					]
				}
			})
		},

		{
			name: 'Breadcrumbs',
			category: 'Navigation',
			icon: '🍞',
			description: 'Hierarchical navigation trail',
			tags: ['breadcrumbs', 'navigation', 'hierarchy', 'path'],
			example: () => ({
				component: 'Breadcrumbs',
				props: {
					items: [
						{ label: 'Home', href: '/' },
						{ label: 'Components', href: '/components' },
						{ label: 'UI' }
					]
				}
			})
		},

		{
			name: 'Pagination',
			category: 'Navigation',
			icon: '📄',
			description: 'Page navigation with customizable options',
			tags: ['pagination', 'navigation', 'pages', 'paging'],
			example: () => ({
				component: 'Pagination',
				props: { currentPage: 1, totalPages: 10 }
			})
		},

		// Data Components
		{
			name: 'DataTable',
			category: 'Data',
			icon: '📋',
			description: 'Sortable, selectable data tables',
			tags: ['table', 'data', 'sorting', 'selection'],
			example: () => ({
				component: 'DataTable',
				props: {
					columns: [
						{ key: 'name', label: 'Name' },
						{ key: 'email', label: 'Email' },
						{ key: 'role', label: 'Role' }
					],
					data: [
						{ name: 'John Doe', email: 'john@example.com', role: 'Admin' },
						{ name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
					],
					sortable: true,
					selectable: true
				}
			})
		},

		{
			name: 'StatsCard',
			category: 'Data',
			icon: '📊',
			description: 'Statistics display with trends and changes',
			tags: ['stats', 'card', 'metrics', 'trends'],
			example: () => ({
				component: 'StatsCard',
				props: {
					title: 'Total Users',
					value: '12,345',
					change: 12.5,
					changeType: 'positive',
					icon: '👥'
				}
			})
		},

		// Chart Components
		{
			name: 'LineChart',
			category: 'Charts',
			icon: '📈',
			description: 'Interactive line charts with SVG',
			tags: ['chart', 'line', 'data', 'visualization'],
			example: () => ({
				component: 'LineChart',
				props: {
					data: [
						{ x: 1, y: 10 },
						{ x: 2, y: 25 },
						{ x: 3, y: 15 },
						{ x: 4, y: 30 }
					]
				}
			})
		},

		{
			name: 'BarChart',
			category: 'Charts',
			icon: '📊',
			description: 'Bar chart visualization with hover effects',
			tags: ['chart', 'bar', 'data', 'visualization'],
			example: () => ({
				component: 'BarChart',
				props: {
					data: [
						{ label: 'Jan', value: 100 },
						{ label: 'Feb', value: 150 },
						{ label: 'Mar', value: 120 }
					]
				}
			})
		},

		{
			name: 'PieChart',
			category: 'Charts',
			icon: '🥧',
			description: 'Pie chart with legend and tooltips',
			tags: ['chart', 'pie', 'data', 'visualization'],
			example: () => ({
				component: 'PieChart',
				props: {
					data: [
						{ label: 'Desktop', value: 60 },
						{ label: 'Mobile', value: 30 },
						{ label: 'Tablet', value: 10 }
					]
				}
			})
		},

		// Additional Form Components
		{
			name: 'LoginForm',
			category: 'Forms',
			icon: '🔐',
			description: 'Complete login form with validation',
			tags: ['login', 'form', 'authentication', 'validation'],
			example: () => ({
				component: 'LoginForm',
				props: { onSubmit: (data) => console.log('Login:', data) }
			})
		},

		// Navigation Components (continued)
		{
			name: 'StepIndicator',
			category: 'Navigation',
			icon: '🪜',
			description: 'Multi-step process visualization',
			tags: ['steps', 'progress', 'wizard', 'navigation'],
			example: () => ({
				component: 'StepIndicator',
				props: {
					steps: [
						{ label: 'Setup' },
						{ label: 'Configure' },
						{ label: 'Deploy' },
						{ label: 'Complete' }
					],
					currentStep: 1
				}
			})
		},

		// Overlay Components
		{
			name: 'Modal',
			category: 'Overlays',
			icon: '🪟',
			description: 'Flexible modal dialogs with backdrop',
			tags: ['modal', 'dialog', 'overlay', 'popup'],
			example: () => ({
				component: 'Modal',
				props: { title: 'Example Modal' }
			})
		},

		{
			name: 'Dropdown',
			category: 'Overlays',
			icon: '📋',
			description: 'Context menus and dropdown lists',
			tags: ['dropdown', 'menu', 'context', 'list'],
			example: () => ({
				component: 'Dropdown',
				props: {
					items: [
						{ label: 'Profile', icon: '👤' },
						{ label: 'Settings', icon: '⚙️' },
						{ divider: true },
						{ label: 'Logout', icon: '🚪' }
					]
				}
			})
		},

		{
			name: 'Tooltip',
			category: 'Overlays',
			icon: '💬',
			description: 'Hover tooltips with positioning',
			tags: ['tooltip', 'hover', 'help', 'info'],
			example: () => ({
				component: 'Tooltip',
				props: { content: 'This is a helpful tooltip' }
			})
		},

		{
			name: 'Accordion',
			category: 'Overlays',
			icon: '📂',
			description: 'Collapsible content sections',
			tags: ['accordion', 'collapse', 'expand', 'content'],
			example: () => ({
				component: 'Accordion',
				props: {
					items: [
						{
							title: 'What is this component?',
							content: () => 'This is an accordion component for collapsible content.'
						},
						{
							title: 'How do I use it?',
							content: () => 'Simply pass items with title and content properties.'
						}
					],
					multiple: true
				}
			})
		},

		{
			name: 'Drawer',
			category: 'Overlays',
			icon: '🗂️',
			description: 'Slide-out panels from any direction',
			tags: ['drawer', 'panel', 'slide', 'overlay'],
			example: () => ({
				component: 'Drawer',
				props: { title: 'Example Drawer', position: 'right' }
			})
		},

		// Content Cards
		{
			name: 'UserCard',
			category: 'Cards',
			icon: '👤',
			description: 'User profile cards with actions',
			tags: ['user', 'profile', 'card', 'social'],
			example: () => ({
				component: 'UserCard',
				props: {
					user: {
						name: 'Alex Johnson',
						title: 'Senior Developer',
						bio: 'Passionate about creating amazing user experiences.',
						verified: true,
						online: true,
						tags: ['React', 'Svelte', 'TypeScript'],
						stats: { followers: 1234, following: 567, posts: 89 }
					}
				}
			})
		},

		{
			name: 'ProductCard',
			category: 'Cards',
			icon: '🛍️',
			description: 'E-commerce product cards with ratings',
			tags: ['product', 'ecommerce', 'card', 'shopping'],
			example: () => ({
				component: 'ProductCard',
				props: {
					product: {
						name: 'Premium Headphones',
						description: 'High-quality wireless headphones with noise cancellation.',
						price: 199.99,
						originalPrice: 249.99,
						category: 'Electronics',
						rating: 4.5,
						reviews: 128,
						inStock: true,
						image: 'https://via.placeholder.com/300x200',
						badge: { text: 'Best Seller', variant: 'success' }
					}
				}
			})
		},

		// Settings Components
		{
			name: 'ThemeSwitcher',
			category: 'Settings',
			icon: '🌙',
			description: 'Dark/light theme toggle with persistence',
			tags: ['theme', 'dark', 'light', 'settings'],
			example: () => ({
				component: 'ThemeSwitcher',
				props: {}
			})
		},

		{
			name: 'LanguageSelector',
			category: 'Settings',
			icon: '🌍',
			description: 'Multi-language selection dropdown',
			tags: ['language', 'i18n', 'locale', 'settings'],
			example: () => ({
				component: 'LanguageSelector',
				props: {}
			})
		},

		{
			name: 'SettingsPanel',
			category: 'Settings',
			icon: '⚙️',
			description: 'Complete settings interface with sections',
			tags: ['settings', 'configuration', 'preferences', 'panel'],
			example: () => ({
				component: 'SettingsPanel',
				props: {
					onSave: (settings) => console.log('Settings saved:', settings),
					onReset: (settings) => console.log('Settings reset:', settings)
				}
			})
		},

		// Layout Components (continued)
		{
			name: 'Sidebar',
			category: 'Layout',
			icon: '📋',
			description: 'Collapsible navigation sidebar',
			tags: ['sidebar', 'navigation', 'layout', 'responsive'],
			example: () => ({
				component: 'Sidebar',
				props: { width: 'md', position: 'left' }
			})
		},

		// Additional Feedback
		{
			name: 'Toast',
			category: 'Feedback',
			icon: '🍞',
			description: 'Temporary notifications with auto-dismiss',
			tags: ['toast', 'notification', 'temporary', 'message'],
			example: () => ({
				component: 'Toast',
				props: {
					type: 'success',
					title: 'Success!',
					message: 'This is a toast notification!',
					duration: 5000
				}
			})
		}
	];

	// Filter components based on search and category
	const filteredComponents = $derived(() => {
		let filtered = componentExamples;

		// Filter by category
		if (activeCategory !== 'all') {
			filtered = filtered.filter(
				(comp) => comp.category.toLowerCase() === activeCategory.toLowerCase()
			);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(comp) =>
					comp.name.toLowerCase().includes(query) ||
					comp.description.toLowerCase().includes(query) ||
					comp.category.toLowerCase().includes(query) ||
					comp.tags.some((tag) => tag.toLowerCase().includes(query))
			);
		}

		return filtered;
	});

	// Get unique categories
	const categories = $derived(() => {
		const cats = ['all', ...new Set(componentExamples.map((comp) => comp.category.toLowerCase()))];
		return cats.map((cat) => ({
			id: cat,
			name: cat === 'all' ? 'All Components' : cat.charAt(0).toUpperCase() + cat.slice(1),
			count:
				cat === 'all'
					? componentExamples.length
					: componentExamples.filter((comp) => comp.category.toLowerCase() === cat).length
		}));
	});

	function showToastMessage() {
		showToast = true;
		setTimeout(() => (showToast = false), 3000);
	}

	function clearSearch() {
		searchQuery = '';
	}
</script>

<svelte:head>
	<title>UI Components - Live Examples</title>
	<meta name="description" content="Interactive examples of all UI components with search" />
</svelte:head>

<div class="min-h-screen">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h1 class="font-heading text-shadow-red mb-4 text-4xl text-white">
				🧩 Live Component <span class="text-red-400">Examples</span>
			</h1>
			<p class="text-shadow mx-auto mb-8 max-w-3xl text-xl text-gray-300">
				Interactive examples of every component with search functionality
			</p>
		</div>

		<!-- Search and Filter -->
		<div class="mb-8 space-y-4">
			<div class="mx-auto max-w-2xl">
				<!-- Simple input for testing -->
				<Input
					bind:value={searchQuery}
					placeholder="Search components by name, category, or tags..."
					label="Search Components"
				/>
				<!-- Debug info -->
				{#if searchQuery}
					<div class="mt-2 text-center text-xs text-gray-500">
						Debug: searchQuery = "{searchQuery}" | Found: {filteredComponents.length} components
					</div>
					<div class="mt-1 text-center text-xs text-gray-600">
						Matching: {filteredComponents.map((c) => c.name).join(', ')}
					</div>
				{/if}
			</div>

			<!-- Category Filter -->
			<div class="flex flex-wrap justify-center gap-2">
				{#each categories as category}
					<Button
						variant={activeCategory === category.id ? 'primary' : 'outline'}
						size="sm"
						onclick={() => (activeCategory = category.id)}
						placeholder="{category.name} ({category.count})"
					/>
				{/each}
			</div>
		</div>

		<!-- Results Count -->
		<div class="mb-8 text-center">
			<Badge variant="outline" size="lg">
				{filteredComponents.length} components found
			</Badge>
			{#if searchQuery}
				<div class="mt-2 text-sm text-gray-400">
					Searching for: "{searchQuery}" | Total components: {componentExamples.length}
				</div>
			{/if}
		</div>

		<!-- Component Examples Grid -->
		<div class="space-y-12">
			{#each filteredComponents as component}
				<Card class="p-8">
					<div class="mb-6">
						<div class="mb-4 flex items-center justify-between">
							<div class="flex items-center space-x-4">
								<span class="text-4xl">{component.icon}</span>
								<div>
									<h2 class="font-heading text-2xl text-white">{component.name}</h2>
									<p class="text-gray-400">{component.description}</p>
								</div>
							</div>
							<div class="flex items-center space-x-2">
								<Badge variant="primary">{component.category}</Badge>
							</div>
						</div>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each component.tags as tag}
								<Badge size="sm" variant="outline">{tag}</Badge>
							{/each}
						</div>
					</div>

					<!-- Live Example -->
					<div class="space-y-6">
						<h3 class="text-lg font-semibold text-white">Live Example:</h3>

						<div class="glass rounded-lg border border-gray-700 p-6">
							{#if component.name === 'Button'}
								<div class="space-y-4">
									<div class="flex flex-wrap gap-4">
										{#each component.variants as variant}
											<Button {...variant.props}>{variant.name}</Button>
										{/each}
									</div>
									<div class="flex gap-4">
										<Button loading placeholder="Loading..." />
										<Button disabled placeholder="Disabled" />
									</div>
								</div>
							{:else if component.name === 'Input'}
								<div class="max-w-md space-y-4">
									{#each component.variants as variant}
										<Input {...variant.props} />
									{/each}
								</div>
							{:else if component.name === 'Textarea'}
								<div class="max-w-md">
									<Textarea bind:value={textareaValue} {...component.example().props} />
								</div>
							{:else if component.name === 'Select'}
								<div class="max-w-md">
									<Select bind:value={selectValue} {...component.example().props} />
								</div>
							{:else if component.name === 'Checkbox'}
								<Checkbox bind:checked={checkboxValue} {...component.example().props} />
							{:else if component.name === 'Radio'}
								<div class="space-y-2">
									<Radio bind:group={radioValue} value="option1" label="Option 1" />
									<Radio bind:group={radioValue} value="option2" label="Option 2" />
									<Radio bind:group={radioValue} value="option3" label="Option 3" />
								</div>
							{:else if component.name === 'Switch'}
								<Switch bind:checked={switchValue} {...component.example().props} />
							{:else if component.name === 'SearchForm'}
								<div class="max-w-md">
									<SearchForm placeholder="Search example..." />
								</div>
							{:else if component.name === 'Card'}
								<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
									{#each component.variants as variant}
										<Card {...variant.props}>
											<h4 class="mb-2 font-semibold text-white">{variant.name} Card</h4>
											<p class="text-gray-300">
												This is a {variant.name.toLowerCase()} card example.
											</p>
										</Card>
									{/each}
								</div>
							{:else if component.name === 'Alert'}
								<div class="space-y-4">
									{#each component.variants as variant}
										<Alert {...variant.props} />
									{/each}
								</div>
							{:else if component.name === 'Progress'}
								<div class="space-y-4">
									<Progress value={progressValue} showLabel />
									<div class="flex space-x-2">
										<Button
											size="sm"
											onclick={() => (progressValue = Math.max(0, progressValue - 10))}
											placeholder="-10"
										/>
										<Button
											size="sm"
											onclick={() => (progressValue = Math.min(100, progressValue + 10))}
											placeholder="+10"
										/>
									</div>
								</div>
							{:else if component.name === 'Spinner'}
								<div class="flex items-center space-x-4">
									{#each component.variants as variant}
										<div class="text-center">
											<Spinner {...variant.props} />
											<p class="mt-2 text-sm text-gray-400">{variant.name}</p>
										</div>
									{/each}
								</div>
							{:else if component.name === 'Badge'}
								<div class="flex flex-wrap gap-2">
									{#each component.variants as variant}
										<Badge {...variant.props}>{variant.content}</Badge>
									{/each}
								</div>
							{:else if component.name === 'Avatar'}
								<div class="flex items-center space-x-4">
									{#each component.variants as variant}
										<div class="text-center">
											<Avatar {...variant.props} />
											<p class="mt-2 text-sm text-gray-400">{variant.name}</p>
										</div>
									{/each}
								</div>
							{:else if component.name === 'Tabs'}
								<Tabs bind:activeTab {...component.example().props} />
							{:else if component.name === 'Breadcrumbs'}
								<Breadcrumbs {...component.example().props} />
							{:else if component.name === 'Pagination'}
								<Pagination bind:currentPage {...component.example().props} />
							{:else if component.name === 'DataTable'}
								<DataTable bind:selectedRows {...component.example().props} />
							{:else if component.name === 'StatsCard'}
								<StatsCard {...component.example().props} />
							{:else if component.name === 'LineChart'}
								<LineChart {...component.example().props} />
							{:else if component.name === 'BarChart'}
								<BarChart {...component.example().props} />
							{:else if component.name === 'PieChart'}
								<PieChart {...component.example().props} />
							{:else if component.name === 'LoginForm'}
								<div class="max-w-md">
									<LoginForm {...component.example().props} />
								</div>
							{:else if component.name === 'StepIndicator'}
								<div class="space-y-4">
									<StepIndicator bind:currentStep {...component.example().props} />
									<div class="flex space-x-2">
										<Button
											size="sm"
											onclick={() => (currentStep = Math.max(0, currentStep - 1))}
											placeholder="Previous"
										/>
										<Button
											size="sm"
											onclick={() => (currentStep = Math.min(3, currentStep + 1))}
											placeholder="Next"
										/>
									</div>
								</div>
							{:else if component.name === 'Accordion'}
								<Accordion {...component.example().props} />
							{:else if component.name === 'Tooltip'}
								<div class="flex space-x-4">
									<Tooltip content="This tooltip appears on top" position="top">
										<Button variant="outline" placeholder="Hover me (top)" />
									</Tooltip>
									<Tooltip content="This tooltip appears on bottom" position="bottom">
										<Button variant="outline" placeholder="Hover me (bottom)" />
									</Tooltip>
									<Tooltip content="This tooltip appears on left" position="left">
										<Button variant="outline" placeholder="Hover me (left)" />
									</Tooltip>
									<Tooltip content="This tooltip appears on right" position="right">
										<Button variant="outline" placeholder="Hover me (right)" />
									</Tooltip>
								</div>
							{:else if component.name === 'UserCard'}
								<UserCard
									{...component.example().props}
									onMessage={(user) => toast.info(`💬 Message sent to ${user.name}`)}
									onFollow={(user) => toast.info(`👥 Following ${user.name}`)}
								/>
							{:else if component.name === 'ProductCard'}
								<ProductCard
									{...component.example().props}
									onAddToCart={(product) => toast.success(`🛒 Added ${product.name} to cart`)}
									onViewDetails={(product) => toast.info(`👀 Viewing ${product.name} details`)}
								/>
							{:else if component.name === 'ThemeSwitcher'}
								<div class="flex items-center space-x-4">
									<span class="text-white">Theme Switcher:</span>
									<ThemeSwitcher />
								</div>
							{:else if component.name === 'LanguageSelector'}
								<div class="flex items-center space-x-4">
									<span class="text-white">Language Selector:</span>
									<LanguageSelector />
								</div>
							{:else if component.name === 'SettingsPanel'}
								<div class="max-w-2xl">
									<SettingsPanel bind:settings {...component.example().props} />
								</div>
							{:else if component.name === 'Toast'}
								<div class="space-y-4">
									<p class="text-gray-300">Click the buttons below to see different toast types:</p>
									<div class="flex flex-wrap gap-2">
										<Button
											variant="success"
											size="sm"
											onclick={() => toast.success('🎉 Success toast!')}
											placeholder="Success Toast"
										/>
										<Button
											variant="danger"
											size="sm"
											onclick={() => toast.error('❌ Error toast!')}
											placeholder="Error Toast"
										/>
										<Button
											variant="secondary"
											size="sm"
											onclick={() => toast.warning('⚠️ Warning toast!')}
											placeholder="Warning Toast"
										/>
										<Button
											variant="outline"
											size="sm"
											onclick={() => toast.info('💡 Info toast!')}
											placeholder="Info Toast"
										/>
									</div>
								</div>
							{:else if component.name === 'Modal'}
								<div class="space-y-4">
									<p class="text-gray-300">Click the button to open a modal dialog:</p>
									<Button onclick={() => (showModal = true)} placeholder="🪟 Open Modal Example" />
								</div>
							{:else if component.name === 'Drawer'}
								<div class="space-y-4">
									<p class="text-gray-300">Click the button to open a drawer panel:</p>
									<Button
										onclick={() => (showDrawer = true)}
										placeholder="🗂️ Open Drawer Example"
									/>
								</div>
							{:else if component.name === 'Dropdown'}
								<div class="space-y-4">
									<p class="text-gray-300">Click the button to open a dropdown menu:</p>
									<Dropdown bind:open={dropdownOpen}>
										<Button variant="outline" placeholder="📋 Open Dropdown" />
										<div class="space-y-1 p-2">
											<button
												class="block flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-red-500/20"
											>
												<span>👤</span><span>Profile</span>
											</button>
											<button
												class="block flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-red-500/20"
											>
												<span>⚙️</span><span>Settings</span>
											</button>
											<hr class="my-1 border-gray-600" />
											<button
												class="block flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/20"
											>
												<span>🚪</span><span>Logout</span>
											</button>
										</div>
									</Dropdown>
								</div>
							{:else if component.name === 'Sidebar'}
								<div class="space-y-4">
									<p class="text-gray-300">Sidebar component is used for navigation layouts.</p>
									<div class="glass rounded-lg border border-gray-700 bg-gray-800/50 p-4">
										<div class="mb-3 flex items-center space-x-3">
											<div class="h-8 w-8 rounded bg-red-600"></div>
											<span class="font-medium text-white">Navigation Item 1</span>
										</div>
										<div class="mb-3 flex items-center space-x-3">
											<div class="h-8 w-8 rounded bg-gray-600"></div>
											<span class="text-gray-400">Navigation Item 2</span>
										</div>
										<div class="flex items-center space-x-3">
											<div class="h-8 w-8 rounded bg-gray-600"></div>
											<span class="text-gray-400">Navigation Item 3</span>
										</div>
									</div>
								</div>
							{:else}
								<div class="py-8 text-center">
									<span class="mb-4 block text-4xl">{component.icon}</span>
									<p class="text-gray-400">Live example for {component.name} component</p>
									<p class="mt-2 text-sm text-gray-500">
										This component is available in the library
									</p>
								</div>
							{/if}
						</div>

						<!-- Interactive Demo Buttons -->
						<div class="flex flex-wrap gap-2">
							<Button
								variant="outline"
								size="sm"
								onclick={showToastMessage}
								placeholder="🍞 Show Toast"
							/>
							<Button
								variant="outline"
								size="sm"
								onclick={() => (showModal = true)}
								placeholder="🪟 Open Modal"
							/>
							<Button
								variant="outline"
								size="sm"
								onclick={() => (showDrawer = true)}
								placeholder="🗂️ Open Drawer"
							/>
							<Dropdown bind:open={dropdownOpen}>
								<Button variant="outline" size="sm" placeholder="📋 Dropdown" />
								<div class="p-2">
									<button
										class="block w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-red-500/20"
									>
										Option 1
									</button>
									<button
										class="block w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-red-500/20"
									>
										Option 2
									</button>
								</div>
							</Dropdown>
						</div>
					</div>
				</Card>
			{/each}
		</div>

		<!-- No Results -->
		{#if filteredComponents.length === 0}
			<div class="py-16 text-center">
				<div class="mb-4 text-6xl">🔍</div>
				<h3 class="font-heading mb-4 text-2xl text-white">No components found</h3>
				<p class="mb-6 text-gray-400">Try adjusting your search terms or browse all categories</p>
				<Button onclick={clearSearch} placeholder="Clear Search" />
			</div>
		{/if}
	</div>
</div>

<!-- Interactive Overlays -->
{#if showToast}
	<Toast
		type="success"
		title="Success!"
		message="This is a toast notification example!"
		onClose={() => (showToast = false)}
	/>
{/if}

<Modal bind:open={showModal} title="Example Modal">
	<div class="space-y-4">
		<p class="text-gray-300">
			This is an example modal dialog showing how modals work in the component library.
		</p>
		<div class="flex justify-end space-x-2">
			<Button variant="secondary" onclick={() => (showModal = false)} placeholder="Cancel" />
			<Button variant="primary" onclick={() => (showModal = false)} placeholder="Confirm" />
		</div>
	</div>
</Modal>

<Drawer bind:open={showDrawer} title="Example Drawer" position="right">
	<div class="space-y-4">
		<p class="text-gray-300">This is an example drawer component that slides in from the side.</p>
		<Button onclick={() => (showDrawer = false)} placeholder="Close Drawer" />
	</div>
</Drawer>
