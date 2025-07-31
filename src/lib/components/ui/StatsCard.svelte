<script>
	let {
		title = '',
		value = '',
		change = null,
		changeType = 'neutral',
		icon = '',
		trend = [],
		...props
	} = $props();

	const changeTypes = {
		positive: 'text-green-400',
		negative: 'text-red-400',
		neutral: 'text-gray-400'
	};

	function generateTrendPath(data, width = 60, height = 20) {
		if (!data.length) return '';
		
		const max = Math.max(...data);
		const min = Math.min(...data);
		const range = max - min || 1;
		
		let path = '';
		data.forEach((value, index) => {
			const x = (index / (data.length - 1)) * width;
			const y = height - ((value - min) / range) * height;
			path += index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
		});
		
		return path;
	}

	const trendPath = generateTrendPath(trend);
	const  trendColor = changeType === 'positive' ? '#10b981' : changeType === 'negative' ? '#ef4444' : '#6b7280';
</script>

<div class="glass rounded-lg p-6 hover-glow" {...props}>
	<div class="flex items-start justify-between">
		<div class="flex-1">
			<p class="text-sm font-medium text-gray-400 mb-1">{title}</p>
			<p class="text-2xl font-bold text-white mb-2">{value}</p>
			
			{#if change !== null}
				<div class="flex items-center space-x-2">
					<span class="text-sm font-medium {changeTypes[changeType]}">
						{change > 0 ? '+' : ''}{change}%
					</span>
					{#if trend.length > 0}
						<svg width="60" height="20" class="opacity-70">
							<path 
								d={trendPath} 
								fill="none" 
								stroke={trendColor} 
								stroke-width="2"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		</div>
		
		{#if icon}
			<div class="text-2xl opacity-60">
				{icon}
			</div>
		{/if}
	</div>
</div>