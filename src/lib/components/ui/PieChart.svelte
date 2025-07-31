<script>
	let {
		data = [],
		size = 200,
		colors = ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#fecaca'],
		showLabels = true,
		showLegend = true,
		...props
	} = $props();

	const radius = size / 2 - 10;
	const centerX = size / 2;
	const centerY = size / 2;
	const total = data.reduce((sum, item) => sum + item.value, 0);
	const slices = generateSlices(data, total, radius, centerX, centerY);

	function generateSlices(data, total, radius, centerX, centerY) {
		let currentAngle = -90; // Start from top
		
		return data.map((item, index) => {
			const percentage = (item.value / total) * 100;
			const angle = (item.value / total) * 360;
			const startAngle = currentAngle;
			const endAngle = currentAngle + angle;
			
			const startAngleRad = (startAngle * Math.PI) / 180;
			const endAngleRad = (endAngle * Math.PI) / 180;
			
			const x1 = centerX + radius * Math.cos(startAngleRad);
			const y1 = centerY + radius * Math.sin(startAngleRad);
			const x2 = centerX + radius * Math.cos(endAngleRad);
			const y2 = centerY + radius * Math.sin(endAngleRad);
			
			const largeArcFlag = angle > 180 ? 1 : 0;
			
			const pathData = [
				`M ${centerX} ${centerY}`,
				`L ${x1} ${y1}`,
				`A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
				'Z'
			].join(' ');
			
			// Label position
			const labelAngle = startAngle + angle / 2;
			const labelAngleRad = (labelAngle * Math.PI) / 180;
			const labelRadius = radius * 0.7;
			const labelX = centerX + labelRadius * Math.cos(labelAngleRad);
			const labelY = centerY + labelRadius * Math.sin(labelAngleRad);
			
			currentAngle += angle;
			
			return {
				pathData,
				color: colors[index % colors.length],
				percentage: percentage.toFixed(1),
				label: item.label,
				value: item.value,
				labelX,
				labelY
			};
		});
	}
</script>

<div class="glass rounded-lg p-4" {...props}>
	<div class="flex items-center justify-center space-x-8">
		<svg width={size} height={size} class="drop-shadow-lg">
			{#each slices as slice}
				<path 
					d={slice.pathData} 
					fill={slice.color}
					class="hover:opacity-80 transition-opacity duration-200"
				>
					<title>{slice.label}: {slice.value} ({slice.percentage}%)</title>
				</path>
				
				{#if showLabels && parseFloat(slice.percentage) > 5}
					<text 
						x={slice.labelX} 
						y={slice.labelY} 
						text-anchor="middle" 
						fill="white" 
						font-size="12"
						class="text-shadow font-medium"
					>
						{slice.percentage}%
					</text>
				{/if}
			{/each}
		</svg>
		
		{#if showLegend}
			<div class="space-y-2">
				{#each slices as slice}
					<div class="flex items-center space-x-2">
						<div 
							class="w-4 h-4 rounded"
							style="background-color: {slice.color}"
						></div>
						<span class="text-sm text-gray-300">
							{slice.label} ({slice.percentage}%)
						</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>