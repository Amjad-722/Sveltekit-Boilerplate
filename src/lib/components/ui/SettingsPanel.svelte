<script>
	import Switch from './Switch.svelte';
	import Select from './Select.svelte';
	import Input from './Input.svelte';
	import Button from './Button.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import LanguageSelector from './LanguageSelector.svelte';

	let {
		settings = $bindable({}),
		onSave = () => {},
		onReset = () => {},
		sections = [
			{
				title: 'Appearance',
				settings: [
					{ key: 'theme', type: 'theme', label: 'Theme' },
					{ key: 'language', type: 'language', label: 'Language' },
					{ key: 'animations', type: 'switch', label: 'Enable Animations', default: true },
					{ key: 'compactMode', type: 'switch', label: 'Compact Mode', default: false }
				]
			},
			{
				title: 'Notifications',
				settings: [
					{ key: 'emailNotifications', type: 'switch', label: 'Email Notifications', default: true },
					{ key: 'pushNotifications', type: 'switch', label: 'Push Notifications', default: true },
					{ key: 'soundEnabled', type: 'switch', label: 'Sound Effects', default: true },
					{ 
						key: 'notificationFrequency', 
						type: 'select', 
						label: 'Notification Frequency',
						options: [
							{ value: 'instant', label: 'Instant' },
							{ value: 'hourly', label: 'Hourly' },
							{ value: 'daily', label: 'Daily' },
							{ value: 'weekly', label: 'Weekly' }
						],
						default: 'instant'
					}
				]
			},
			{
				title: 'Privacy',
				settings: [
					{ key: 'profileVisible', type: 'switch', label: 'Public Profile', default: true },
					{ key: 'showOnlineStatus', type: 'switch', label: 'Show Online Status', default: true },
					{ key: 'allowMessages', type: 'switch', label: 'Allow Direct Messages', default: true },
					{ key: 'dataCollection', type: 'switch', label: 'Allow Analytics', default: false }
				]
			},
			{
				title: 'Account',
				settings: [
					{ key: 'username', type: 'input', label: 'Username', placeholder: 'Enter username' },
					{ key: 'email', type: 'input', inputType: 'email', label: 'Email', placeholder: 'Enter email' },
					{ key: 'autoSave', type: 'switch', label: 'Auto-save Changes', default: true },
					{ key: 'twoFactorAuth', type: 'switch', label: 'Two-Factor Authentication', default: false }
				]
			}
		],
		...props
	} = $props();

	// Initialize settings with defaults
	$effect(() => {
		sections.forEach(section => {
			section.settings.forEach(setting => {
				if (settings[setting.key] === undefined && setting.default !== undefined) {
					settings[setting.key] = setting.default;
				}
			});
		});
	});

	function handleSave() {
		onSave(settings);
	}

	function handleReset() {
		const resetSettings = {};
		sections.forEach(section => {
			section.settings.forEach(setting => {
				if (setting.default !== undefined) {
					resetSettings[setting.key] = setting.default;
				}
			});
		});
		settings = resetSettings;
		onReset(resetSettings);
	}
</script>

<div class="space-y-8" {...props}>
	{#each sections as section}
		<div class="glass rounded-lg p-6 border border-gray-700">
			<h3 class="text-lg font-heading text-white mb-6">{section.title}</h3>
			
			<div class="space-y-6">
				{#each section.settings as setting}
					<div class="flex items-center justify-between">
						<div class="flex-1">
							<label class="block text-sm font-medium text-gray-300 mb-1">
								{setting.label}
							</label>
							{#if setting.description}
								<p class="text-xs text-gray-400">{setting.description}</p>
							{/if}
						</div>
						
						<div class="ml-4">
							{#if setting.type === 'switch'}
								<Switch
									bind:checked={settings[setting.key]}
									label=""
								/>
							{:else if setting.type === 'select'}
								<Select
									bind:value={settings[setting.key]}
									options={setting.options}
									label=""
								/>
							{:else if setting.type === 'input'}
								<Input
									type={setting.inputType || 'text'}
									bind:value={settings[setting.key]}
									placeholder={setting.placeholder}
									label=""
									class="w-48"
								/>
							{:else if setting.type === 'theme'}
								<ThemeSwitcher
									bind:currentTheme={settings[setting.key]}
								/>
							{:else if setting.type === 'language'}
								<LanguageSelector
									bind:currentLanguage={settings[setting.key]}
								/>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
	
	<div class="flex justify-end space-x-4">
		<Button
			variant="secondary"
			onclick={handleReset}
			placeholder="Reset to Defaults"
		/>
		<Button
			variant="primary"
			onclick={handleSave}
			placeholder="Save Changes"
		/>
	</div>
</div>