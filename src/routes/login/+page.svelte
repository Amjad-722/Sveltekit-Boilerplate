<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth.js';
	import { toast } from '$lib/stores/toast.js';
	import LoginForm from '$lib/components/auth/LoginForm.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// Redirect if already authenticated
	$: if ($auth.isAuthenticated) {
		goto('/dashboard');
	}

	let showSignUp = false;
	let signUpForm = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	let loading = false;
	let errors = {};

	function validateSignUp() {
		errors = {};
		
		if (!signUpForm.name.trim()) {
			errors.name = 'Name is required';
		}
		
		if (!signUpForm.email.trim()) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(signUpForm.email)) {
			errors.email = 'Email is invalid';
		}
		
		if (!signUpForm.password) {
			errors.password = 'Password is required';
		} else if (signUpForm.password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}
		
		if (signUpForm.password !== signUpForm.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}
		
		return Object.keys(errors).length === 0;
	}

	async function handleSignUp() {
		if (!validateSignUp()) return;
		
		loading = true;
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		toast.success('🎉 Account created successfully! Please sign in.');
		showSignUp = false;
		signUpForm = { name: '', email: '', password: '', confirmPassword: '' };
		loading = false;
	}
</script>

<svelte:head>
	<title>Sign In - Svelte Boilerplate Kit</title>
	<meta name="description" content="Sign in to your account" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		{#if !showSignUp}
			<!-- Login Form -->
			<div class="text-center mb-8">
				<div class="mb-6">
					<span class="text-6xl glow-red pulse-red">🔐</span>
				</div>
				<h2 class="text-4xl font-heading text-white text-shadow-red mb-4">
					Welcome <span class="text-red-400">Back</span>
				</h2>
				<p class="text-lg text-gray-300 text-shadow">
					Sign in to your account to continue your journey
				</p>
			</div>
			
			<LoginForm />
			
			<div class="text-center">
				<p class="text-sm text-gray-300 text-shadow">
					Don't have an account?
					<button
						class="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200 hover:glow-red"
						on:click={() => showSignUp = true}
					>
						🚀 Sign up here
					</button>
				</p>
			</div>
		{:else}
			<!-- Sign Up Form -->
			<div class="text-center mb-8">
				<div class="mb-6">
					<span class="text-6xl glow-red pulse-red">🚀</span>
				</div>
				<h2 class="text-4xl font-heading text-white text-shadow-red mb-4">
					Create <span class="text-red-400">Account</span>
				</h2>
				<p class="text-lg text-gray-300 text-shadow">
					Join us and start building amazing things
				</p>
			</div>
			
			<Card title="" padding="lg">
				<form on:submit|preventDefault={handleSignUp} class="space-y-6">
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Full Name *
						</label>
						<input
							type="text"
							placeholder="Enter your full name"
							bind:value={signUpForm.name}
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm"
							class:border-red-400={errors.name}
							class:focus:border-red-400={errors.name}
							class:focus:ring-red-400={errors.name}
							class:shadow-red={errors.name}
						/>
						{#if errors.name}
							<p class="text-sm text-red-400 text-shadow flex items-center">
								<span class="mr-1">⚠️</span>
								{errors.name}
							</p>
						{/if}
					</div>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Email Address *
						</label>
						<input
							type="email"
							placeholder="your.email@example.com"
							bind:value={signUpForm.email}
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm"
							class:border-red-400={errors.email}
							class:focus:border-red-400={errors.email}
							class:focus:ring-red-400={errors.email}
							class:shadow-red={errors.email}
						/>
						{#if errors.email}
							<p class="text-sm text-red-400 text-shadow flex items-center">
								<span class="mr-1">⚠️</span>
								{errors.email}
							</p>
						{/if}
					</div>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Password *
						</label>
						<input
							type="password"
							placeholder="Create a secure password"
							bind:value={signUpForm.password}
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm"
							class:border-red-400={errors.password}
							class:focus:border-red-400={errors.password}
							class:focus:ring-red-400={errors.password}
							class:shadow-red={errors.password}
						/>
						{#if errors.password}
							<p class="text-sm text-red-400 text-shadow flex items-center">
								<span class="mr-1">⚠️</span>
								{errors.password}
							</p>
						{/if}
					</div>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Confirm Password *
						</label>
						<input
							type="password"
							placeholder="Confirm your password"
							bind:value={signUpForm.confirmPassword}
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm"
							class:border-red-400={errors.confirmPassword}
							class:focus:border-red-400={errors.confirmPassword}
							class:focus:ring-red-400={errors.confirmPassword}
							class:shadow-red={errors.confirmPassword}
						/>
						{#if errors.confirmPassword}
							<p class="text-sm text-red-400 text-shadow flex items-center">
								<span class="mr-1">⚠️</span>
								{errors.confirmPassword}
							</p>
						{/if}
					</div>
					
					<div class="flex items-center space-x-3">
						<input
							type="checkbox"
							required
							class="w-5 h-5 rounded border-2 border-gray-700 bg-gray-900/80 text-red-500 focus:ring-red-500 focus:ring-2 focus:ring-offset-0 transition-all duration-200"
						/>
						<label class="text-sm text-gray-300 text-shadow">
							I agree to the <a href="#" class="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200">Terms of Service</a> and <a href="#" class="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200">Privacy Policy</a>
						</label>
					</div>
					
					<Button type="submit" {loading} disabled={loading} size="lg" class="w-full hover-glow">
						{loading ? '⏳ Creating Account...' : '🚀 Create Account'}
					</Button>
				</form>
			</Card>
			
			<div class="text-center">
				<p class="text-sm text-gray-300 text-shadow">
					Already have an account?
					<button
						class="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200 hover:glow-red"
						on:click={() => showSignUp = false}
					>
						🔐 Sign in here
					</button>
				</p>
			</div>
		{/if}
		
		<!-- Demo Credentials -->
		<Card title="🔑 Demo Credentials" subtitle="For testing purposes" padding="md">
			<p class="text-sm text-gray-300 text-shadow mb-4">
				Use any email and password combination. The login will succeed automatically for demonstration.
			</p>
			<div class="glass p-4 rounded-lg border border-red-500/30">
				<p class="text-red-300 font-semibold text-shadow mb-2">✨ Example:</p>
				<div class="text-sm text-gray-300 text-shadow space-y-1">
					<div>📧 Email: demo@example.com</div>
					<div>🔒 Password: password123</div>
				</div>
			</div>
		</Card>
	</div>
</div>