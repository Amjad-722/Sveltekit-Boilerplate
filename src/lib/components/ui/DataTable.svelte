<script>
	let {
		columns = [],
		data = [],
		sortable = true,
		selectable = false,
		selectedRows = $bindable([]),
		onRowClick = () => {},
		...props
	} = $props();

	let sortColumn = $state('');
	let sortDirection = $state('asc');

	const sortedData = sortData(data, sortColumn, sortDirection);
	const  allSelected = selectedRows.length === data.length && data.length > 0;
	const  someSelected = selectedRows.length > 0 && selectedRows.length < data.length;

	function sortData(data, column, direction) {
		if (!column) return data;
		
		return [...data].sort((a, b) => {
			const aVal = a[column];
			const bVal = b[column];
			
			if (aVal < bVal) return direction === 'asc' ? -1 : 1;
			if (aVal > bVal) return direction === 'asc' ? 1 : -1;
			return 0;
		});
	}

	function handleSort(column) {
		if (!sortable) return;
		
		if (sortColumn === column) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = column;
			sortDirection = 'asc';
		}
	}

	function toggleSelectAll() {
		if (allSelected) {
			selectedRows = [];
		} else {
			selectedRows = [...data];
		}
	}

	function toggleRowSelection(row) {
		const index = selectedRows.findIndex(r => r === row);
		if (index > -1) {
			selectedRows.splice(index, 1);
		} else {
			selectedRows.push(row);
		}
		selectedRows = [...selectedRows];
	}
</script>

<div class="glass rounded-lg border border-gray-700 overflow-hidden" {...props}>
	<div class="overflow-x-auto">
		<table class="w-full">
			<thead class="bg-gray-800/50">
				<tr>
					{#if selectable}
						<th class="px-6 py-3 text-left">
							<input
								type="checkbox"
								checked={allSelected}
								indeterminate={someSelected}
								onchange={toggleSelectAll}
								class="rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-500"
							/>
						</th>
					{/if}
					{#each columns as column}
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
							class:cursor-pointer={sortable}
							onclick={() => handleSort(column.key)}
						>
							<div class="flex items-center space-x-1">
								<span>{column.label}</span>
								{#if sortable && sortColumn === column.key}
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										{#if sortDirection === 'asc'}
											<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
										{:else}
											<path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
										{/if}
									</svg>
								{/if}
							</div>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-700">
				{#each sortedData as row, index}
					<tr 
						class="hover:bg-gray-800/30 transition-colors duration-200"
						class:bg-red-900 
						onclick={() => onRowClick(row, index)}
					>
						{#if selectable}
							<td class="px-6 py-4">
								<input
									type="checkbox"
									checked={selectedRows.includes(row)}
									onchange={() => toggleRowSelection(row)}
									class="rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-500"
								/>
							</td>
						{/if}
						{#each columns as column}
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
								{#if column.render}
									{@render column.render(row[column.key], row)}
								{:else}
									{row[column.key]}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>