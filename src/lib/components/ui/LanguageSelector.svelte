<script>
	import Dropdown from './Dropdown.svelte';
	import Button from './Button.svelte';

	let {
		languages = [
			{ code: 'en', name: 'English', flag: '🇺🇸' },
			{ code: 'es', name: 'Español', flag: '🇪🇸' },
			{ code: 'fr', name: 'Français', flag: '🇫🇷' },
			{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
			{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
			{ code: 'pt', name: 'Português', flag: '🇵🇹' },
			{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
			{ code: 'ja', name: '日本語', flag: '🇯🇵' },
			{ code: 'ko', name: '한국어', flag: '🇰🇷' },
			{ code: 'zh', name: '中文', flag: '🇨🇳' }
		],
		currentLanguage = $bindable('en'),
		onLanguageChange = () => {},
		showFlag = true,
		showName = true,
		...props
	} = $props();

	const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

	function handleLanguageChange(language) {
		currentLanguage = language.code;
		onLanguageChange(language);
		
		// Update document language
		document.documentElement.lang = language.code;
		
		// Save to localStorage
		localStorage.setItem('language', language.code);
	}

	const dropdownItems = languages.map(language => ({
		label: `${showFlag ? language.flag + ' ' : ''}${language.name}`,
		action: () => handleLanguageChange(language)
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
			placeholder={`${showFlag ? currentLang.flag + ' ' : ''}${showName ? currentLang.name : currentLang.code.toUpperCase()}`}
		/>
	{/snippet}
</Dropdown>