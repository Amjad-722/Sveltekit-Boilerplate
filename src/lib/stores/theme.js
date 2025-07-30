import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set } = writable('light');

	return {
		subscribe,
		toggle: () => {
			if (browser) {
				const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
				const newTheme = current === 'light' ? 'dark' : 'light';
				
				document.documentElement.classList.toggle('dark', newTheme === 'dark');
				localStorage.setItem('theme', newTheme);
				set(newTheme);
			}
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme');
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const theme = stored || (prefersDark ? 'dark' : 'light');
				
				document.documentElement.classList.toggle('dark', theme === 'dark');
				set(theme);
			}
		}
	};
}

export const theme = createThemeStore();