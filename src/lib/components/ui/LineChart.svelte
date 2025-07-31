<script>
	let {
		data = [],
		width = 400,
		height = 200,
		color = '#dc2626',
		strokeWidth = 2,
		showDots = true,
		showGrid = true,
		...props
	} = $props();

	let svgRef = $state();

	const viewBox = `0 0 ${width} ${height}`;
	const points = generatePoints(data, width, height);
	const pathData = generatePath(points);

	function generatePoints(data, w, h) {
		if (!data.length) return [];
		
		const maxY = Math.max(...data.map(d => d.y));
		const minY = Math.min(...data.map(d => d.y));
		const maxX = Math.max(...data.map(d => d.x));
		const minX = Math.min(...data.map(d => d.x));
		
		const padding = 20;
		const chartWidth = w - padding * 2;
		const chartHeight = h - padding * 2;
		
		return data.map(d => ({
			x: padding + ((d.x - minX) / (maxX - minX)) * chartWidth,
			y: padding + chartHeight - ((d.y - minY) / (maxY - minY)) * chartHeight,
			originalX: d.x,
			originalY: d.y
		}));
	}

	function generatePath(points) {
		if (!points.length) return '';
		
		let path = `M ${points[0].x} ${points[0].y}`;
		for (let i = 1; i < points.length; i++) {
			path += ` L ${points[i].x} ${points[i].y}`;
		}
		return path;
	}

	function generateGridLines() {
		const lines = [];
		const gridCount = 5;
		
		// Horizontal lines
		for (let i = 0; i <= gridCount; i++) {
			const y = (height / gridCount) * i;
			lines.push({ x1: 0, y1: y, x2: width, y2: y });
		}
		
		// Vertical lines
		for (let i = 0; i <= gridCount; i++) {
			const x = (width / gridCount) * i;
			lines.push({ x1: x, y1: 0, x2: x, y2: height });
		}
		
		return lines;
	}

	const gridLines = showGrid ? generateGridLines() : [];
</script>

<div class="glass rounded-lg p-4" {...props}>
	<svg bind:this={svgRef} {viewBox} class="w-full h-auto">
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
		
		{#if pathData}
			<path 
				d={pathData} 
				fill="none" 
				stroke={color} 
				stroke-width={strokeWidth}
				class="drop-shadow-lg"
			/>
		{/if}
		
		{#if showDots}
			{#each points as point}
				<circle 
					cx={point.x} 
					cy={point.y} 
					r="4" 
					fill={color}
					class="drop-shadow-lg hover:r-6 transition-all duration-200"
				>
					<title>{point.originalX}, {point.originalY}</title>
				</circle>
			{/each}
		{/if}
	</svg>
</div>