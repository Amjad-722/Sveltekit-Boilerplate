<script>
	let {
		currentPage = $bindable(1),
		totalPages = 1,
		showFirstLast = true,
		showPrevNext = true,
		maxVisible = 5,
		onPageChange = () => {},
		...props
	} = $props();

	const pages = generatePages(currentPage, totalPages, maxVisible);

	function generatePages(current, total, max) {
		if (total <= max) {
			return Array.from({ length: total }, (_, i) => i + 1);
		}

		const half = Math.floor(max / 2);
		let start = Math.max(1, current - half);
		let end = Math.min(total, start + max - 1);

		if (end - start + 1 < max) {
			start = Math.max(1, end - max + 1);
		}

		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}

	function goToPage(page) {
		if (page >= 1 && page <= totalPages && page !== currentPage) {
			currentPage = page;
			onPageChange(page);
		}
	}
</script>

<nav class="flex items-center justify-center space-x-2" {...props}>
	{#if showFirstLast && currentPage > 1}
		<button
			class="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
			onclick={() => goToPage(1)}
		>
			First
		</button>
	{/if}

	{#if showPrevNext && currentPage > 1}
		<button
			class="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
			onclick={() => goToPage(currentPage - 1)}
		>
			Previous
		</button>
	{/if}

	{#each pages as page}
		<button
			class="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
			class:bg-red-600={page === currentPage}
			class:text-white={page === currentPage}
			class:text-gray-400={page !== currentPage}
			class:hover:text-white={page !== currentPage}
			class:hover:bg-gray-800={page !== currentPage}
			onclick={() => goToPage(page)}
		>
			{page}
		</button>
	{/each}

	{#if showPrevNext && currentPage < totalPages}
		<button
			class="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
			onclick={() => goToPage(currentPage + 1)}
		>
			Next
		</button>
	{/if}

	{#if showFirstLast && currentPage < totalPages}
		<button
			class="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
			onclick={() => goToPage(totalPages)}
		>
			Last
		</button>
	{/if}
</nav>
