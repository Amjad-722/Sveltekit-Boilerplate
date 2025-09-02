<script>
	import { page } from '$app/stores';
	import { auth } from '$lib/stores/auth.js';
	import { theme } from '$lib/stores/theme.js';
	import { toast } from '$lib/stores/toast.js';
	import Button from '../ui/Button.svelte';
	import Dropdown from '../ui/Dropdown.svelte';
	import ComponentBrowser from '../ui/ComponentBrowser.svelte';

	let dropdownOpen = false;
	let componentBrowserOpen = $state(false);

	function handleLogout() {
		auth.logout();
		toast.success(' Successfully logged out!') ;
	}

	const navItems = [
		{ href: '/', label: 'Home'},
		{ href: '/components', label: 'Components' },
		{ href: '/forms', label: 'Forms',  },
		{ href: '/dashboard', label: 'Dashboard' },
		{ href: '/about', label: 'About' },
		{ href: '/ui', label: 'ui' }
	];
</script>

<nav class="glass border-b-2 border-red-500/30 shadow-red-lg backdrop-blur-md sticky top-0 z-40">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-3 group">
					<span class="text-xl font-bold text-white text-shadow-red">
						SvelteKit
					</span>
				</a>
			</div>

			<div class="hidden md:flex items-center space-x-2">
				{#each navItems as item}
					<a
						href={item.href}
						class="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-shadow {$page.url.pathname === item.href ? 'gradient-red text-white shadow-red border border-red-400' : 'text-red-300 hover:text-white hover:bg-red-500/20 hover:shadow-lg'}"
					>
						<span>{item.label}</span>
					</a>
				{/each}
			</div>

			<div class="flex items-center space-x-4">
				
				
				<Button variant="outline" size="sm" placeholder="🌙" onclick={() => theme.toggle()}/>
					

				{#if $auth.isAuthenticated}
					<Dropdown bind:open={dropdownOpen}>
						<Button variant="outline"  size="sm">
							<img src={$auth.user.avatar} alt="Avatar" class="w-6 h-6 rounded-full mr-2 border border-red-400" />
							<span class="text-shadow">{$auth.user.name}</span>
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</Button>
						
						<a
							href="/profile"
							class="block px-4 py-3 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							onclick={() => { dropdownOpen = false; }}
						>
							👤 Profile
						</a>
						<a
							href="/settings"
							class="block px-4 py-3 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							onclick={() => { dropdownOpen = false; }}
						>
							⚙️ Settings
						</a>
						<hr class="my-1 border-red-500/30" />
						<Button placeholder=" Sign out"
							class="block w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-shadow"
							onclick={() => { handleLogout(); dropdownOpen = false; }}
						/>
							
						
					</Dropdown>
				{:else}
					<Button href="/login" placeholder=" Sign In"/>
					
					
				{/if}
			</div>
		</div>

		<div class="md:hidden border-t border-red-500/30 pt-4 pb-3">
			<div class="flex flex-wrap gap-2 mb-3">
				{#each navItems as item}
					<a
						href={item.href}
						class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-shadow {$page.url.pathname === item.href ? 'gradient-red text-white shadow-red' : 'text-red-300 hover:text-white hover:bg-red-500/20'}"
					>
						<span>{item.icon}</span>
						<span>{item.label}</span>
					</a>
				{/each}
			</div>
			
			<div class="flex justify-center">
				<Button 
					variant="primary" 
					size="sm" 
					placeholder="🧩 Browse Components" 
					onclick={() => componentBrowserOpen = true}
					class="hover-glow w-full"
				/>
			</div>
		</div>
	</div>
</nav>

<!-- Component Browser -->
<ComponentBrowser 
	bind:open={componentBrowserOpen}
	onComponentSelect={(component) => {
		console.log('Selected component:', component);
		toast.info(`🧩 Navigating to ${component.name} component`);
	}}
/>