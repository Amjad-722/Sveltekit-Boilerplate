<script>
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';

	let {
		product = {},
		showActions = true,
		onAddToCart = () => {},
		onViewDetails = () => {},
		...props
	} = $props();

	const  discountPercentage = product.originalPrice && product.price 
		? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
		: 0;
</script>

<div class="glass rounded-lg border border-gray-700 overflow-hidden hover-glow group" {...props}>
	{#if product.image}
		<div class="relative overflow-hidden">
			<img 
				src={product.image} 
				alt={product.name}
				class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
			/>
			{#if product.badge}
				<div class="absolute top-3 left-3">
					<Badge variant={product.badge.variant || 'primary'} size="sm">
						{product.badge.text}
					</Badge>
				</div>
			{/if}
			{#if discountPercentage > 0}
				<div class="absolute top-3 right-3">
					<Badge variant="error" size="sm">
						-{discountPercentage}%
					</Badge>
				</div>
			{/if}
		</div>
	{/if}
	
	<div class="p-6">
		<div class="mb-2">
			{#if product.category}
				<span class="text-xs text-gray-400 uppercase tracking-wide">
					{product.category}
				</span>
			{/if}
		</div>
		
		<h3 class="text-lg font-semibold text-white mb-2 line-clamp-2">
			{product.name || 'Product Name'}
		</h3>
		
		{#if product.description}
			<p class="text-sm text-gray-300 mb-4 line-clamp-3">
				{product.description}
			</p>
		{/if}
		
		{#if product.rating}
			<div class="flex items-center space-x-2 mb-4">
				<div class="flex items-center">
					{#each Array(5) as _, i}
						<svg 
							class="w-4 h-4 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}"
							fill="currentColor" 
							viewBox="0 0 20 20"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
						</svg>
					{/each}
				</div>
				<span class="text-sm text-gray-400">
					({product.rating}) {product.reviews ? `• ${product.reviews} reviews` : ''}
				</span>
			</div>
		{/if}
		
		<div class="flex items-center justify-between mb-4">
			<div class="flex items-center space-x-2">
				<span class="text-xl font-bold text-white">
					${product.price || '0.00'}
				</span>
				{#if product.originalPrice && product.originalPrice > product.price}
					<span class="text-sm text-gray-400 line-through">
						${product.originalPrice}
					</span>
				{/if}
			</div>
			
			{#if product.inStock !== undefined}
				<Badge 
					variant={product.inStock ? 'success' : 'error'} 
					size="sm"
				>
					{product.inStock ? 'In Stock' : 'Out of Stock'}
				</Badge>
			{/if}
		</div>
		
		{#if showActions}
			<div class="flex space-x-2">
				<Button
					variant="primary"
					size="sm"
					onclick={() => onAddToCart(product)}
					disabled={!product.inStock}
					placeholder="Add to Cart"
					class="flex-1"
				/>
				<Button
					variant="outline"
					size="sm"
					onclick={() => onViewDetails(product)}
					placeholder="Details"
				/>
			</div>
		{/if}
	</div>
</div>