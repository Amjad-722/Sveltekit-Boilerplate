<script>
	let {
		data = [],
		width = 400,
		height = 200,
		color = '#dc2626',
		showValues = true,
		showGrid = true,
		...props
	} = $props();

	const viewBox = `0 0 ${width} ${height}`;
	const bars = generateBars(data, width, height);

	function generateBars(data, w, h) {
		if (!data.length) return [];
		
		const maxValue = Math.max(...data.map(d => d.value));
		const padding = 20;
		const chartWidth = w - padding * 2;
		const chartHeight = h - padding * 2;
		const barWidth = chartWidth / data.length * 0.8;
		const barSpacing = chartWidth / data.length * 0.2;
		
		return data.map((d, i) => {
			const barHeight = (d.value / maxValue) * chartHeight;
			return {
				x: padding + i * (barWidth + barSpacing) + barSpacing / 2,
				y: padding + chartHeight - barHeight,
				width: barWidth,
				height: barHeight,
				value: d.value,
				label: d.label
			};
		});
	}

	function generateGridLines() {
		const lines = [];
		const gridCount = 5;
		
		for (let i = 0; i <= gridCount; i++) {
			const y = (height / gridCount) * i;
			lines.push({ x1: 0, y1: y, x2: width, y2: y });
		}
		
		return lines;
	}

	const gridLines = showGrid ? generateGridLines() : [];
</script>

<div class="glass rounded-lg p-4" {...props}>
	<svg {viewBox} class="w-full h-auto">
		{#if showGrid}
			{#each gridLines as line}
				<line 
					x1={line.x1} 
					y1={line.y1} 
					x2={line.x2} 
					y2={line.y2} 
					stroke="rgba(75, 85, 99, 0.3)" 
					stroke-width="1"
				/>
			{/each}
		{/if}
		
		{#each bars as bar}
			<rect 
				x={bar.x} 
				y={bar.y} 
				width={bar.width} 
				height={bar.height} 
				fill={color}
				class="hover:opacity-80 transition-opacity duration-200 drop-shadow-lg"
			>
				<title>{bar.label}: {bar.value}</title>
			</rect>
			
			{#if showValues}
				<text 
					x={bar.x + bar.width / 2} 
					y={bar.y - 5} 
					text-anchor="middle" 
					fill="white" 
					font-size="12"
					class="text-shadow"
				>
					{bar.value}
				</text>
			{/if}
			
			<text 
				x={bar.x + bar.width / 2} 
				y={height - 5} 
				text-anchor="middle" 
				fill="white" 
				font-size="10"
				class="text-shadow"
			>
				{bar.label}
			</text>
		{/each}
	</svg>
</div>