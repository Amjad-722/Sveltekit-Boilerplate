import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Auth store with persistent state
function createAuthStore() {
	const { subscribe, set, update } = writable({
		user: null,
		isAuthenticated: false,
		loading: false
	});

	return {
		subscribe,
		login: async (email, password) => {
			update(state => ({ ...state, loading: true }));
			
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// Mock successful login
			const user = {
				id: 1,
				email,
				name: email.split('@')[0],
				avatar: `https://ui-avatars.com/api/?name=${email}&background=6366f1&color=fff`
			};
			
			const authState = { user, isAuthenticated: true, loading: false };
			set(authState);
			
			// Persist to localStorage
			if (browser) {
				localStorage.setItem('auth', JSON.stringify(authState));
			}
			
			return { success: true };
		},
		logout: () => {
			set({ user: null, isAuthenticated: false, loading: false });
			if (browser) {
				localStorage.removeItem('auth');
			}
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('auth');
				if (stored) {
					try {
						const authState = JSON.parse(stored);
						if (authState.isAuthenticated) {
							set(authState);
						}
					} catch (e) {
						console.error('Failed to parse stored auth state');
					}
				}
			}
		}
	};
}

export const auth = createAuthStore();