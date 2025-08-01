<script>
	import Input from './Input.svelte';
	import Button from './Button.svelte';
	import Checkbox from './Checkbox.svelte';

	let {
		onSubmit = () => {},
		loading = false,
		error = '',
		showRememberMe = true,
		showForgotPassword = true,
		...props
	} = $props();

	let email = $state('');
	let password = $state('');
	let rememberMe = $state(false);
	let errors = $state({});

	function validateForm() {
		const newErrors = {};
		
		if (!email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = 'Email is invalid';
		}
		
		if (!password) {
			newErrors.password = 'Password is required';
		} else if (password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}
		
		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (validateForm()) {
			onSubmit({ email, password, rememberMe });
		}
	}
</script>

<form onsubmit={handleSubmit} class="space-y-6" {...props}>
	{#if error}
		<div class="bg-red-900/50 border border-red-500 text-red-100 px-4 py-3 rounded-lg">
			{error}
		</div>
	{/if}

	<Input
		type="email"
		label="Email"
		bind:value={email}
		error={errors.email}
		placeholder="Enter your email"
		required
	/>

	<Input
		type="password"
		label="Password"
		bind:value={password}
		error={errors.password}
		placeholder="Enter your password"
		required
	/>

	{#if showRememberMe}
		<Checkbox
			bind:checked={rememberMe}
			label="Remember me"
		/>
	{/if}

	<Button
		type="submit"
		variant="primary"
		size="lg"
		{loading}
		placeholder="Sign In"
		class="w-full"
	/>
	

	{#if showForgotPassword}
		<div class="text-center">
			<a href="/forgot-password" class="text-sm text-red-400 hover:text-red-300">
				Forgot your password?
			</a>
		</div>
	{/if}
</form>