<script>
	import { toast } from '$lib/stores/toast.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	let contactForm = {
		name: '',
		email: '',
		subject: '',
		message: '',
		newsletter: false,
		priority: 'medium'
	};

	let profileForm = {
		firstName: '',
		lastName: '',
		username: '',
		bio: '',
		website: '',
		location: ''
	};

	let errors = {};
	let loading = false;

	function validateContactForm() {
		errors = {};
		
		if (!contactForm.name.trim()) {
			errors.name = 'Name is required';
		}
		
		if (!contactForm.email.trim()) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
			errors.email = 'Email is invalid';
		}
		
		if (!contactForm.subject.trim()) {
			errors.subject = 'Subject is required';
		}
		
		if (!contactForm.message.trim()) {
			errors.message = 'Message is required';
		} else if (contactForm.message.length < 10) {
			errors.message = 'Message must be at least 10 characters';
		}
		
		return Object.keys(errors).length === 0;
	}

	async function handleContactSubmit() {
		if (!validateContactForm()) return;
		
		loading = true;
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		toast.success('🎉 Message sent successfully!');
		contactForm = { name: '', email: '', subject: '', message: '', newsletter: false, priority: 'medium' };
		loading = false;
	}

	async function handleProfileSubmit() {
		loading = true;
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		toast.success('✅ Profile updated successfully!');
		loading = false;
	}
</script>

<svelte:head>
	<title>Forms - Svelte Boilerplate Kit</title>
	<meta name="description" content="Form examples with validation and different input types" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="text-center mb-16">
			<div class="mb-6">
				<span class="text-6xl float glow-red">📝</span>
			</div>
			<h1 class="text-responsive-xl font-heading text-white text-shadow-red mb-6">
				Form <span class="text-red-400">Examples</span>
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto text-shadow">
				Comprehensive form examples with <span class="text-red-400 font-semibold">validation</span>, different input types, and <span class="text-red-400 font-semibold">stunning</span> error handling.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Contact Form -->
			<Card title="📧 Contact Form" subtitle="Beautiful form with validation and error handling">
				<form on:submit|preventDefault={handleContactSubmit} class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Input
							label="Full Name"
							placeholder="Enter your full name"
							bind:value={contactForm.name}
							error={errors.name}
							required
						/>
						
						<Input
							type="email"
							label="Email Address"
							placeholder="your.email@example.com"
							bind:value={contactForm.email}
							error={errors.email}
							required
						/>
					</div>
					
					<Input
						label="Subject"
						placeholder="What is this about?"
						bind:value={contactForm.subject}
						error={errors.subject}
						required
					/>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Priority Level
						</label>
						<select
							bind:value={contactForm.priority}
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm"
						>
							<option value="low">🟢 Low Priority</option>
							<option value="medium">🟡 Medium Priority</option>
							<option value="high">🟠 High Priority</option>
							<option value="urgent">🔴 Urgent</option>
						</select>
					</div>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Message *
						</label>
						<textarea
							bind:value={contactForm.message}
							placeholder="Tell us more about your inquiry..."
							rows="4"
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm resize-none"
							class:border-red-400={errors.message}
							class:focus:border-red-400={errors.message}
							class:focus:ring-red-400={errors.message}
							class:shadow-red={errors.message}
						></textarea>
						{#if errors.message}
							<p class="text-sm text-red-400 text-shadow flex items-center">
								<span class="mr-1">⚠️</span>
								{errors.message}
							</p>
						{/if}
					</div>
					
					<div class="flex items-center space-x-3">
						<input
							type="checkbox"
							bind:checked={contactForm.newsletter}
							class="w-5 h-5 rounded border-2 border-gray-700 bg-gray-900/80 text-red-500 focus:ring-red-500 focus:ring-2 focus:ring-offset-0 transition-all duration-200"
						/>
						<label class="text-sm text-gray-300 text-shadow">
							📧 Subscribe to our newsletter for updates
						</label>
					</div>
					
					<Button type="submit" {loading} disabled={loading} size="lg" class="w-full hover-glow">
						{loading ? '⏳ Sending Message...' : '🚀 Send Message'}
					</Button>
				</form>
			</Card>

			<!-- Profile Form -->
			<Card title="👤 Profile Settings" subtitle="Stunning user profile information form">
				<form on:submit|preventDefault={handleProfileSubmit} class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Input
							label="First Name"
							placeholder="John"
							bind:value={profileForm.firstName}
						/>
						
						<Input
							label="Last Name"
							placeholder="Doe"
							bind:value={profileForm.lastName}
						/>
					</div>
					
					<Input
						label="Username"
						placeholder="johndoe"
						bind:value={profileForm.username}
					/>
					
					<Input
						type="url"
						label="Website"
						placeholder="https://yourwebsite.com"
						bind:value={profileForm.website}
					/>
					
					<Input
						label="Location"
						placeholder="City, Country"
						bind:value={profileForm.location}
					/>
					
					<div class="space-y-2">
						<label class="block text-sm font-semibold text-red-300 text-shadow">
							Bio
						</label>
						<textarea
							bind:value={profileForm.bio}
							placeholder="Tell us about yourself..."
							rows="3"
							class="block w-full rounded-lg bg-gray-900/80 border-2 border-gray-700 shadow-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-gray-900 transition-all duration-200 backdrop-blur-sm resize-none"
						></textarea>
					</div>
					
					<div class="flex space-x-4">
						<Button type="submit" {loading} disabled={loading} class="flex-1 hover-glow">
							{loading ? '⏳ Saving...' : '✅ Save Profile'}
						</Button>
						<Button type="button" variant="outline" class="flex-1 hover-glow">
							❌ Cancel
						</Button>
					</div>
				</form>
			</Card>
		</div>

		<!-- Form Examples Section -->
		<div class="mt-16">
			<Card title="📋 Form Input Showcase" subtitle="Different types of stunning form inputs and their usage">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-6">
						<h4 class="text-lg font-heading text-white text-shadow-red">✨ Text Inputs</h4>
						<Input label="Text Input" placeholder="Regular text input" />
						<Input type="email" label="Email Input" placeholder="email@example.com" />
						<Input type="password" label="Password Input" placeholder="Enter secure password" />
						<Input type="url" label="URL Input" placeholder="https://example.com" />
						<Input type="tel" label="Phone Input" placeholder="+1 (555) 123-4567" />
					</div>
					
					<div class="space-y-6 p-2">
						<h4 class="text-lg font-heading text-white text-shadow-red">🔢 Number & Date Inputs</h4>
						<Input type="number" label="Number Input" placeholder="123" />
						<Input type="date" label="Date Input" />
						<Input type="time" label="Time Input" />
						<Input type="datetime-local" label="DateTime Input" />
						<Input type="range" label="Range Input"  className="p-2"/>
					</div>
				</div>
				
				<div class="mt-12">
					<h4 class="text-lg font-heading text-white text-shadow-red mb-6">🎯 Input States</h4>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Input label="Normal Input" placeholder="Normal state" />
						<Input label="Required Input" placeholder="Required field" required />
						<Input label="Disabled Input" placeholder="Disabled state" disabled />
						<Input label="Error Input" placeholder="Input with error" error="⚠️ This field has a validation error" />
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
