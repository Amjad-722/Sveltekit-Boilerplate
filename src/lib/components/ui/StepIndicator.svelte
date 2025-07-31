<script>
	let {
		steps = [],
		currentStep = 0,
		variant = 'default',
		...props
	} = $props();

	const variants = {
		default: {
			completed: 'bg-red-600 text-white border-red-600',
			current: 'bg-red-600 text-white border-red-600',
			pending: 'bg-gray-700 text-gray-400 border-gray-600'
		},
		minimal: {
			completed: 'bg-green-600 text-white border-green-600',
			current: 'bg-red-600 text-white border-red-600',
			pending: 'bg-gray-700 text-gray-400 border-gray-600'
		}
	};

	 currentVariant = variants[variant];

	function getStepStatus(index) {
		if (index < currentStep) return 'completed';
		if (index === currentStep) return 'current';
		return 'pending';
	}
</script>

<div class="flex items-center justify-between" {...props}>
	{#each steps as step, index}
		<div class="flex items-center">
			<div class="flex flex-col items-center">
				<div 
					class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-all duration-200 {currentVariant[getStepStatus(index)]}"
				>
					{#if getStepStatus(index) === 'completed'}
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
					{:else}
						{index + 1}
					{/if}
				</div>
				<span class="mt-2 text-xs text-center text-gray-400 max-w-20">
					{step.label}
				</span>
			</div>
			
			{#if index < steps.length - 1}
				<div 
					class="w-16 h-0.5 mx-4 transition-colors duration-200"
					class:bg-red-600={index < currentStep}
					class:bg-gray-600={index >= currentStep}
				></div>
			{/if}
		</div>
	{/each}
</div>