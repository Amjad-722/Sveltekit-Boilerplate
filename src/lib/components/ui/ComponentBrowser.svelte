<script>
	import { SearchForm, Button, Badge, Card, Drawer } from '$lib/components/ui';

	let {
		open = $bindable(false),
		onComponentSelect = () => {},
		...props
	} = $props();

	let searchQuery = $state('');

	// Complete component catalog with metadata
	const componentCatalog = [
		// Layout & Structure
		{
			name: 'Sidebar',
			category: 'Layout',
			icon: '📋',
			description: 'Collapsible navigation sidebar with responsive behavior',
			tags: ['navigation', 'layout', 'responsive'],
			complexity: 'medium',
			route: '/components-demo#layout'
		},
		{
			name: 'Drawer',
			category: 'Layout',
			icon: '🗂️',
			description: 'Slide-out panels from any direction with backdrop',
			tags: ['overlay', 'panel', 'modal'],
			complexity: 'medium',
			route: '/components-demo#overlays'
		},
		{
			name: 'Card',
			category: 'Layout',
			icon: '🃏',
			description: 'Flexible container with glass morphism effects',
			tags: ['container', 'glass', 'layout'],
			complexity: 'easy',
			route: '/components-demo#layout'
		},

		// Navigation
		{
			name: 'Tabs',
			category: 'Navigation',
			icon: '📑',
			description: 'Tabbed navigation with multiple variants',
			tags: ['navigation', 'tabs', 'switching'],
			complexity: 'medium',
			route: '/components-demo#navigation'
		},
		{
			name: 'StepIndicator',
			category: 'Navigation',
			icon: '🪜',
			description: 'Multi-step process visualization',
			tags: ['steps', 'progress', 'wizard'],
			complexity: 'medium',
			route: '/components-demo#navigation'
		},
		{
			name: 'Breadcrumbs',
			category: 'Navigation',
			icon: '🍞',
			description: 'Hierarchical navigation trail',
			tags: ['navigation', 'hierarchy', 'path'],
			complexity: 'easy',
			route: '/components-demo#navigation'
		},
		{
			name: 'Pagination',
			category: 'Navigation',
			icon: '📄',
			description: 'Page navigation with customizable options',
			tags: ['pagination', 'navigation', 'pages'],
			complexity: 'medium',
			route: '/components-demo#navigation'
		},

		// Input & Forms
		{
			name: 'Input',
			category: 'Forms',
			icon: '📝',
			description: 'Text input with validation and variants',
			tags: ['input', 'form', 'validation'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Textarea',
			category: 'Forms',
			icon: '📄',
			description: 'Multi-line text input with resize options',
			tags: ['textarea', 'form', 'multiline'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Select',
			category: 'Forms',
			icon: '📋',
			description: 'Dropdown selection with custom styling',
			tags: ['select', 'dropdown', 'form'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Checkbox',
			category: 'Forms',
			icon: '☑️',
			description: 'Custom styled checkboxes',
			tags: ['checkbox', 'form', 'selection'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Radio',
			category: 'Forms',
			icon: '🔘',
			description: 'Radio button groups with custom styling',
			tags: ['radio', 'form', 'selection'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Switch',
			category: 'Forms',
			icon: '🔄',
			description: 'Toggle switches with smooth animations',
			tags: ['switch', 'toggle', 'form'],
			complexity: 'easy',
			route: '/components-demo#forms'
		},
		{
			name: 'Button',
			category: 'Interactive',
			icon: '🔘',
			description: 'Interactive buttons with multiple variants',
			tags: ['button', 'interactive', 'action'],
			complexity: 'easy',
			route: '/components-demo#buttons'
		},
		{
			name: 'SearchForm',
			category: 'Forms',
			icon: '🔍',
			description: 'Search input with clear functionality',
			tags: ['search', 'form', 'filter'],
			complexity: 'medium',
			route: '/components-demo#forms'
		},
		{
			name: 'LoginForm',
			category: 'Forms',
			icon: '🔐',
			description: 'Complete login form with validation',
			tags: ['login', 'form', 'authentication'],
			complexity: 'hard',
			route: '/components-demo#forms'
		},

		// Feedback & Notifications
		{
			name: 'Alert',
			category: 'Feedback',
			icon: '⚠️',
			description: 'Contextual alert messages with variants',
			tags: ['alert', 'notification', 'message'],
			complexity: 'easy',
			route: '/components-demo#feedback'
		},
		{
			name: 'Toast',
			category: 'Feedback',
			icon: '🍞',
			description: 'Temporary notifications with auto-dismiss',
			tags: ['toast', 'notification', 'temporary'],
			complexity: 'medium',
			route: '/components-demo#feedback'
		},
		{
			name: 'Spinner',
			category: 'Feedback',
			icon: '⏳',
			description: 'Loading indicators with multiple sizes',
			tags: ['spinner', 'loading', 'progress'],
			complexity: 'easy',
			route: '/components-demo#feedback'
		},
		{
			name: 'Progress',
			category: 'Feedback',
			icon: '📊',
			description: 'Progress bars with labels and variants',
			tags: ['progress', 'loading', 'status'],
			complexity: 'easy',
			route: '/components-demo#feedback'
		},

		// Data & Visualization
		{
			name: 'LineChart',
			category: 'Charts',
			icon: '📈',
			description: 'Interactive line charts with SVG',
			tags: ['chart', 'line', 'data', 'visualization'],
			complexity: 'hard',
			route: '/components-demo#data'
		},
		{
			name: 'BarChart',
			category: 'Charts',
			icon: '📊',
			description: 'Bar chart visualization with hover effects',
			tags: ['chart', 'bar', 'data', 'visualization'],
			complexity: 'hard',
			route: '/components-demo#data'
		},
		{
			name: 'PieChart',
			category: 'Charts',
			icon: '🥧',
			description: 'Pie chart with legend and tooltips',
			tags: ['chart', 'pie', 'data', 'visualization'],
			complexity: 'hard',
			route: '/components-demo#data'
		},
		{
			name: 'DataTable',
			category: 'Data',
			icon: '📋',
			description: 'Sortable, selectable data tables',
			tags: ['table', 'data', 'sorting', 'selection'],
			complexity: 'hard',
			route: '/components-demo#data'
		},
		{
			name: 'StatsCard',
			category: 'Data',
			icon: '📊',
			description: 'Statistics display with trends and changes',
			tags: ['stats', 'card', 'metrics', 'trends'],
			complexity: 'medium',
			route: '/components-demo#data'
		},

		// Content Cards
		{
			name: 'UserCard',
			category: 'Cards',
			icon: '👤',
			description: 'User profile cards with actions',
			tags: ['user', 'profile', 'card', 'social'],
			complexity: 'medium',
			route: '/components-demo#cards'
		},
		{
			name: 'ProductCard',
			category: 'Cards',
			icon: '🛍️',
			description: 'E-commerce product cards with ratings',
			tags: ['product', 'ecommerce', 'card', 'shopping'],
			complexity: 'medium',
			route: '/components-demo#cards'
		},

		// Overlays & Modals
		{
			name: 'Modal',
			category: 'Overlays',
			icon: '🪟',
			description: 'Flexible modal dialogs with backdrop',
			tags: ['modal', 'dialog', 'overlay', 'popup'],
			complexity: 'medium',
			route: '/components-demo#overlays'
		},
		{
			name: 'Dropdown',
			category: 'Overlays',
			icon: '📋',
			description: 'Context menus and dropdown lists',
			tags: ['dropdown', 'menu', 'context', 'list'],
			complexity: 'medium',
			route: '/components-demo#overlays'
		},
		{
			name: 'Tooltip',
			category: 'Overlays',
			icon: '💬',
			description: 'Hover tooltips with positioning',
			tags: ['tooltip', 'hover', 'help', 'info'],
			complexity: 'medium',
			route: '/components-demo#overlays'
		},
		{
			name: 'Accordion',
			category: 'Overlays',
			icon: '📂',
			description: 'Collapsible content sections',
			tags: ['accordion', 'collapse', 'expand', 'content'],
			complexity: 'medium',
			route: '/components-demo#overlays'
		},

		// UI Elements
		{
			name: 'Badge',
			category: 'Elements',
			icon: '🏷️',
			description: 'Status and category badges',
			tags: ['badge', 'label', 'status', 'tag'],
			complexity: 'easy',
			route: '/components-demo#elements'
		},
		{
			name: 'Avatar',
			category: 'Elements',
			icon: '👤',
			description: 'User avatars with fallbacks and status',
			tags: ['avatar', 'profile', 'image', 'user'],
			complexity: 'easy',
			route: '/components-demo#elements'
		},

		// Theme & Settings
		{
			name: 'ThemeSwitcher',
			category: 'Settings',
			icon: '🌙',
			description: 'Dark/light theme toggle with persistence',
			tags: ['theme', 'dark', 'light', 'settings'],
			complexity: 'medium',
			route: '/components-demo#settings'
		},
		{
			name: 'LanguageSelector',
			category: 'Settings',
			icon: '🌍',
			description: 'Multi-language selection dropdown',
			tags: ['language', 'i18n', 'locale', 'settings'],
			complexity: 'medium',
			route: '/components-demo#settings'
		},
		{
			name: 'SettingsPanel',
			category: 'Settings',
			icon: '⚙️',
			description: 'Complete settings interface with sections',
			tags: ['settings', 'configuration', 'preferences', 'panel'],
			complexity: 'hard',
			route: '/components-demo#settings'
		}
	];

	// Filter components based on search query
	const filteredComponents = $derived(() => {
		if (!searchQuery.trim()) return componentCatalog;
		
		const query = searchQuery.toLowerCase();
		return componentCatalog.filter(component => 
			component.name.toLowerCase().includes(query) ||
			component.description.toLowerCase().includes(query) ||
			component.category.toLowerCase().includes(query) ||
			component.tags.some(tag => tag.toLowerCase().includes(query))
		);
	});

	// Group components by category
	const groupedComponents = $derived(() => {
		const groups = {};
		filteredComponents.forEach(component => {
			if (!groups[component.category]) {
				groups[component.category] = [];
			}
			groups[component.category].push(component);
		});
		return groups;
	});

	const complexityColors = {
		easy: 'success',
		medium: 'warning', 
		hard: 'error'
	};

	function handleComponentClick(component) {
		onComponentSelect(component);
		// Navigate to the component
		if (component.route) {
			window.location.href = component.route;
		}
		open = false;
	}

	function clearSearch() {
		searchQuery = '';
	}
</script>

<Drawer bind:open position="right" size="xl" title="🧩 Component Browser" {...props}>
	<div class="space-y-6">
		<!-- Search -->
		<div class="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-4 -m-4 mb-2 border-b border-gray-700">
			<SearchForm 
				bind:value={searchQuery} 
				placeholder="Search components, categories, or tags..."
				onClear={clearSearch}
			/>
			<div class="mt-3 flex items-center justify-between text-sm text-gray-400">
				<span>{filteredComponents.length} components found</span>
				<div class="flex items-center space-x-2">
					<Badge size="sm" variant="success">Easy</Badge>
					<Badge size="sm" variant="warning">Medium</Badge>
					<Badge size="sm" variant="error">Hard</Badge>
				</div>
			</div>
		</div>

		<!-- Component Categories -->
		<div class="space-y-8">
			{#each Object.entries(groupedComponents) as [category, components]}
				<div>
					<h3 class="text-lg font-heading text-white mb-4 flex items-center">
						<span class="text-xl mr-2">{components[0]?.icon || '📦'}</span>
						{category}
						<Badge size="sm" variant="outline" class="ml-2">{components.length}</Badge>
					</h3>
					
					<div class="grid grid-cols-1 gap-3">
						{#each components as component}
							<Card 
								hover 
								class="cursor-pointer transition-all duration-200 hover:border-red-500/50"
								onclick={() => handleComponentClick(component)}
							>
								<div class="flex items-start justify-between">
									<div class="flex-1">
										<div class="flex items-center space-x-3 mb-2">
											<span class="text-2xl">{component.icon}</span>
											<div>
												<h4 class="font-semibold text-white">{component.name}</h4>
												<p class="text-sm text-gray-400">{component.description}</p>
											</div>
										</div>
										
										<div class="flex flex-wrap gap-1 mt-3">
											{#each component.tags as tag}
												<Badge size="sm" variant="outline" class="text-xs">
													{tag}
												</Badge>
											{/each}
										</div>
									</div>
									
									<div class="flex flex-col items-end space-y-2">
										<Badge size="sm" variant={complexityColors[component.complexity]}>
											{component.complexity}
										</Badge>
										<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
										</svg>
									</div>
								</div>
							</Card>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- No Results -->
		{#if filteredComponents.length === 0}
			<div class="text-center py-12">
				<div class="text-6xl mb-4">🔍</div>
				<h3 class="text-xl font-heading text-white mb-2">No components found</h3>
				<p class="text-gray-400 mb-4">
					Try searching for different keywords or browse all categories
				</p>
				<Button onclick={clearSearch} placeholder="Clear Search" />
			</div>
		{/if}

		<!-- Quick Stats -->
		<div class="border-t border-gray-700 pt-6 mt-8">
			<div class="grid grid-cols-3 gap-4 text-center">
				<div>
					<div class="text-2xl font-bold text-red-400">{componentCatalog.length}</div>
					<div class="text-sm text-gray-400">Total Components</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-red-400">{Object.keys(groupedComponents).length}</div>
					<div class="text-sm text-gray-400">Categories</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-red-400">
						{componentCatalog.reduce((acc, c) => acc + c.tags.length, 0)}
					</div>
					<div class="text-sm text-gray-400">Total Tags</div>
				</div>
			</div>
		</div>
	</div>
</Drawer>