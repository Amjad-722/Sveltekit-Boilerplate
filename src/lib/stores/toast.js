import { writable } from 'svelte/store';

function createToastStore() {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		add: (toast) => {
			const id = Math.random().toString(36).substr(2, 9);
			const newToast = { id, ...toast };
			
			update(toasts => [...toasts, newToast]);
			
			// Auto remove after duration
			if (toast.duration !== 0) {
				setTimeout(() => {
					update(toasts => toasts.filter(t => t.id !== id));
				}, toast.duration || 5000);
			}
			
			return id;
		},
		remove: (id) => {
			update(toasts => toasts.filter(t => t.id !== id));
		},
		clear: () => {
			update(() => []);
		},
		success: (message, options = {}) => {
			return createToastStore().add({ type: 'success', message, ...options });
		},
		error: (message, options = {}) => {
			return createToastStore().add({ type: 'error', message, ...options });
		},
		warning: (message, options = {}) => {
			return createToastStore().add({ type: 'warning', message, ...options });
		},
		info: (message, options = {}) => {
			return createToastStore().add({ type: 'info', message, ...options });
		}
	};
}

export const toast = createToastStore();