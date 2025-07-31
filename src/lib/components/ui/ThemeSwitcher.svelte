<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Dropdown from './Dropdown.svelte';

	let {
		themes = [
			{ id: 'dark', name: 'Dark', icon: '🌙' },
			{ id: 'light', name: 'Light', icon: '☀️' },
			{ id: 'auto', name: 'Auto', icon: '🔄' }
		],
		currentTheme = $bindable('dark'),
		onThemeChange = () => {},
		...props
	} = $props();

	let mounted = $state(false);

	onMount(() => {
		// Load theme from localStorage
		const savedTheme = localStorage.getItem('theme') || 'dark';
		currentTheme = savedTheme;
		applyTheme(savedTheme);
		mounted = true;
	});

	function applyTheme(theme) {
		const root = document.documentElement;
		
		if (theme === 'auto') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme = prefersDark ? 'dark' : 'light';
		}
		
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		
		// Update meta theme-color
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		if (metaThemeColor) {
			metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
		}
	}

	function handleThemeChange(theme) {
		currentTheme = theme.id;
		localStorage.setItem('theme', theme.id);
		applyTheme(theme.id);
		onThemeChange(theme.id);
	}

	 if (mounted && currentTheme) {
		applyTheme(currentTheme);
	}

	const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

	const dropdownItems = themes.map(theme => ({
		label: theme.name,
		icon: theme.icon,
		action: () => handleThemeChange(theme)
	}));
</script>

<Dropdown
	items={dropdownItems}
	position="bottom-right"
	{...props}
>
	{#snippet trigger()}
		<Button
			variant="outline"
			size="sm"
			placeholder={`${currentThemeData.icon} ${currentThemeData.name}`}
		/>
	{/snippet}
</Dropdown>