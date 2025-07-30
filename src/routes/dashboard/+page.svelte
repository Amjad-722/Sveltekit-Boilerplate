<script>
	import { auth } from '$lib/stores/auth.js';
	import { toast } from '$lib/stores/toast.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';

	let showStatsModal = false;
	
	// Mock data for dashboard
	const stats = [
		{ label: 'Total Users', value: '12,345', change: '+12%', icon: '👥', color: 'text-blue-400' },
		{ label: 'Revenue', value: '$45,678', change: '+8%', icon: '💰', color: 'text-green-400' },
		{ label: 'Orders', value: '1,234', change: '+15%', icon: '📦', color: 'text-purple-400' },
		{ label: 'Conversion', value: '3.2%', change: '+0.5%', icon: '📈', color: 'text-red-400' }
	];

	const recentActivity = [
		{ action: 'New user registered', user: 'john@example.com', time: '2 minutes ago', type: 'user' },
		{ action: 'Order completed', user: 'sarah@example.com', time: '5 minutes ago', type: 'order' },
		{ action: 'Payment received', user: 'mike@example.com', time: '10 minutes ago', type: 'payment' },
		{ action: 'Support ticket created', user: 'anna@example.com', time: '15 minutes ago', type: 'support' },
		{ action: 'Product updated', user: 'admin@example.com', time: '20 minutes ago', type: 'product' }
	];

	const quickActions = [
		{ label: 'Add New User', icon: '👤', action: () => toast.info('💡 Add user feature coming soon!') },
		{ label: 'Create Order', icon: '📦', action: () => toast.info('💡 Create order feature coming soon!') },
		{ label: 'Send Newsletter', icon: '📧', action: () => toast.info('💡 Newsletter feature coming soon!') },
		{ label: 'Generate Report', icon: '📊', action: () => toast.info('💡 Report generation coming soon!') }
	];

	function getActivityIcon(type) {
		const icons = {
			user: '👤',
			order: '📦',
			payment: '💳',
			support: '🎧',
			product: '📝'
		};
		return icons[type] || '📋';
	}

	function getActivityColor(type) {
		const colors = {
			user: 'text-blue-400',
			order: 'text-green-400',
			payment: 'text-purple-400',
			support: 'text-orange-400',
			product: 'text-red-400'
		};
		return colors[type] || 'text-gray-400';
	}
</script>

<svelte:head>
	<title>Dashboard - Svelte Boilerplate Kit</title>
	<meta name="description" content="User dashboard with stats and activity" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Welcome Section -->
		<div class="text-center mb-16">
			<div class="mb-6">
				<span class="text-6xl float glow-red">📊</span>
			</div>
			<h1 class="text-5xl font-heading text-white text-shadow-red mb-4">
				Welcome back, <span class="text-red-400">{$auth.user?.name || 'User'}</span>! 👋
			</h1>
			<p class="text-xl text-gray-300 text-shadow">
				Here's what's happening with your account today - looking <span class="text-red-400 font-semibold">stunning</span> as always.
			</p>
		</div>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
			{#each stats as stat}
				<Card padding="lg" class="hover-glow">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-semibold text-red-300 text-shadow">
								{stat.label}
							</p>
							<p class="text-3xl font-heading text-white text-shadow-red mb-2">
								{stat.value}
							</p>
							<p class="text-sm text-green-400 text-shadow flex items-center">
								<span class="mr-1">📈</span>
								{stat.change} from last month
							</p>
						</div>
						<div class="text-4xl glow-red {stat.color}">
							{stat.icon}
						</div>
					</div>
				</Card>
			{/each}
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Recent Activity -->
			<div class="lg:col-span-2">
				<Card title="📋 Recent Activity" subtitle="Latest actions and updates">
					<div class="space-y-4">
						{#each recentActivity as activity}
							<div class="flex items-center space-x-4 p-4 rounded-lg hover:bg-red-500/10 transition-all duration-200 border border-transparent hover:border-red-500/20">
								<div class="text-2xl glow-red">
									{getActivityIcon(activity.type)}
								</div>
								<div class="flex-1 min-w-0">
									<p class="text-sm font-semibold text-white text-shadow">
										{activity.action}
									</p>
									<p class="text-sm {getActivityColor(activity.type)} text-shadow">
										{activity.user}
									</p>
								</div>
								<div class="text-sm text-gray-400 text-shadow">
									{activity.time}
								</div>
							</div>
						{/each}
					</div>
					<div class="mt-8 pt-6 border-t border-red-500/30">
						<Button variant="outline" size="sm" class="hover-glow">
							👁️ View All Activity
						</Button>
					</div>
				</Card>
			</div>

			<!-- Quick Actions -->
			<div>
				<Card title="⚡ Quick Actions" subtitle="Common tasks and shortcuts">
					<div class="space-y-4">
						{#each quickActions as action}
							<Button
								variant="outline"
								size="sm"
								onclick={action.action}
								class="w-full justify-start hover-glow"
							>
								<span class="mr-3 text-lg">{action.icon}</span>
								{action.label}
							</Button>
						{/each}
					</div>
					
					<div class="mt-8 pt-6 border-t border-red-500/30">
						<Button onclick={() => showStatsModal = true} size="sm" class="w-full hover-glow">
							📊 View Detailed Stats
						</Button>
					</div>
				</Card>

				<!-- User Profile Card -->
				<div class="mt-8">
					<Card title="👤 Profile" subtitle="Your account information" padding="lg">
						<div class="text-center">
							<img
								src={$auth.user?.avatar}
								alt="Profile"
								class="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-red-500 shadow-red-lg"
							/>
							<h3 class="text-xl font-heading text-white text-shadow-red mb-2">
								{$auth.user?.name}
							</h3>
							<p class="text-sm text-red-300 text-shadow mb-6">
								{$auth.user?.email}
							</p>
							<div class="space-y-3">
								<Button href="/profile" variant="outline" size="sm" class="w-full hover-glow">
									✏️ Edit Profile
								</Button>
								<Button href="/settings" variant="outline" size="sm" class="w-full hover-glow">
									⚙️ Settings
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>

		<!-- Charts Section -->
		<div class="mt-16">
			<Card title="📈 Performance Overview" subtitle="Your account metrics over time">
				<div class="h-80 flex items-center justify-center glass rounded-xl border border-red-500/30">
					<div class="text-center">
						<div class="text-8xl mb-6 glow-red pulse-red">📊</div>
						<h3 class="text-2xl font-heading text-white text-shadow-red mb-4">
							Charts Coming Soon
						</h3>
						<p class="text-gray-300 text-shadow mb-6 max-w-md">
							Interactive charts and graphs with stunning visualizations will be displayed here
						</p>
						<Button onclick={() => toast.info('💡 Chart integration coming in next update!')} variant="outline" size="sm" class="hover-glow">
							🚀 Learn More
						</Button>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>

<!-- Stats Modal -->
<Modal bind:open={showStatsModal} title="📊 Detailed Statistics" size="lg">
	<div class="space-y-6">
		<div class="grid grid-cols-2 gap-4">
			{#each stats as stat}
				<div class="glass p-6 rounded-lg border border-red-500/30">
					<div class="flex items-center justify-between mb-3">
						<span class="text-3xl glow-red {stat.color}">{stat.icon}</span>
						<span class="text-sm text-green-400 text-shadow">{stat.change}</span>
					</div>
					<h4 class="text-2xl font-heading text-white text-shadow-red mb-2">
						{stat.value}
					</h4>
					<p class="text-sm text-red-300 text-shadow">
						{stat.label}
					</p>
				</div>
			{/each}
		</div>
		
		<div class="glass p-6 rounded-lg border border-red-500/30">
			<h4 class="text-red-300 font-heading text-shadow mb-4">
				📈 Growth Insights
			</h4>
			<ul class="text-gray-300 text-sm space-y-2 text-shadow">
				<li class="flex items-center"><span class="text-green-400 mr-2">📈</span> User growth is up 12% this month</li>
				<li class="flex items-center"><span class="text-green-400 mr-2">💰</span> Revenue increased by 8% compared to last month</li>
				<li class="flex items-center"><span class="text-green-400 mr-2">📦</span> Order volume is showing strong growth at +15%</li>
				<li class="flex items-center"><span class="text-green-400 mr-2">🎯</span> Conversion rate improved by 0.5 percentage points</li>
			</ul>
		</div>
		
		<div class="flex justify-end space-x-4">
			<Button variant="outline" onclick={() => showStatsModal = false} class="hover-glow">
				❌ Close
			</Button>
			<Button onclick={() => { showStatsModal = false; toast.success('📊 Report exported successfully!'); }} class="hover-glow">
				📥 Export Report
			</Button>
		</div>
	</div>
</Modal>