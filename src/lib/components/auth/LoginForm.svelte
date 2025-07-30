<script>
	import { auth } from '$lib/stores/auth.js';
	import { toast } from '$lib/stores/toast.js';
	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';
	import Card from '../ui/Card.svelte';

	let email = '';
	let password = '';
	let loading = false;
	let errors = {};

	function validateForm() {
		errors = {};
		
		if (!email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email is invalid';
		}
		
		if (!password) {
			errors.password = 'Password is required';
		} else if (password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}
		
		return Object.keys(errors).length === 0;
	}

	async function handleSubmit() {
		if (!validateForm()) return;
		
		loading = true;
		
		try {
			const result = await auth.login(email, password);
			if (result.success) {
				toast.success('🎉 Successfully logged in! Welcome back!');
			}
		} catch (error) {
			toast.error('💥 Login failed. Please try again.');
		} finally {
			loading = false;
		}
	}
</script>

<Card title="🔐 Sign In" subtitle="Welcome back! Please sign in to your account." padding="lg">
	<form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<Input
			type="email"
			label="Email Address"
			placeholder="Enter your email address"
			bind:value={email}
			error={errors.email}
			required
		/>
		
		<Input
			type="password"
			label="Password"
			placeholder="Enter your password"
			bind:value={password}
			error={errors.password}
			required
		/>
		
		<div class="flex items-center justify-between">
			<label class="flex items-center space-x-3">
				<input 
					type="checkbox" 
					class="w-5 h-5 rounded border-2 border-gray-700 bg-gray-900/80 text-red-500 focus:ring-red-500 focus:ring-2 focus:ring-offset-0 transition-all duration-200" 
				/>
				<span class="text-sm text-gray-300 text-shadow">Remember me</span>
			</label>
			
			<a href="#" class="text-sm text-red-400 hover:text-red-300 font-semibold transition-colors duration-200 hover:glow-red">
				Forgot password?
			</a>
		</div>
		
		<Button type="submit" {loading} disabled={loading} size="lg" class="w-full hover-glow">
			{loading ? '⏳ Signing in...' : '🚀 Sign In'}
		</Button>
		
		<div class="text-center">
			<span class="text-sm text-gray-300 text-shadow">
				Don't have an account?
				<a href="#" class="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200 hover:glow-red ml-1">Sign up</a>
			</span>
		</div>
	</form>
</Card>