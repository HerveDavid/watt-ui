<script>
	import ComponentCard from '../../components/ComponentCard.svelte';

	// Component definitions
	const components = [
		{
			title: 'Avatar',
			description:
				'Avatar displays a compact visual identifier for users or entities, defaulting to a placeholder when no image is provided.',
			status: 'Ready',
			previewComponent: 'Avatar'
		},
		{
			title: 'Badge',
			description:
				'Badges are status indicators that highlight the state of items, typically used in tables to show current status.',
			status: 'Ready',
			previewComponent: 'Badge'
		},
		{
			title: 'Banner',
			description:
				'Banner displays prominent messages to highlight important interface updates or conditions.',
			status: 'Ready',
			previewComponent: 'Banner'
		},
		{
			title: 'Button',
			description:
				'Buttons trigger interface actions. Use primary style once per section for main action, with secondary styles for additional options.',
			status: 'Ready',
			previewComponent: 'Button'
		}
		// Additional components...
	];

	let filterText = '';
	let selectedCategory = 'All categories';

	$: filteredComponents = components.filter((component) =>
		component.title.toLowerCase().includes(filterText.toLowerCase())
	);
</script>

<div class="container">
	<div class="header">
		<div class="title">
			<h1>Components</h1>
			<span class="version">0.1.0</span>
		</div>
		<p class="description">
			Ready-to-use UI components with built-in styles, compatible with all JavaScript frameworks.
			Browse the full library or filter by category.
		</p>
	</div>

	<div class="filters">
		<div class="search input-container">
			<span class="search-icon">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path
						d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</span>
			<input
				type="text"
				class="search-input"
				placeholder="Filter components by name"
				bind:value={filterText}
			/>
		</div>

		<select bind:value={selectedCategory}>
			<option>All categories</option>
			<option>Layout</option>
			<option>Forms</option>
			<option>Navigation</option>
			<option>Data Display</option>
			<option>Feedback</option>
		</select>
	</div>

	<div class="components-grid">
		{#each filteredComponents as component}
			<ComponentCard {...component} />
		{/each}
	</div>
</div>

<style>
	.container {
		padding: var(--w-space-l);
		background-color: var(--w-color-background);
		min-height: 100vh;
	}

	.header {
		margin-bottom: var(--w-space-l);
	}

	.title {
		color: var(--w-color-text);
		font-size: var(--w-font-size-xxl);
		font-weight: var(--w-font-weight-heading);
		display: flex;
		align-items: center;
		gap: var(--w-space-s);
	}

	.version {
		background-color: var(--w-color-accent);
		color: var(--w-color-text-on-accent);
		padding: var(--w-space-xs) var(--w-space-s);
		border-radius: var(--w-border-radius);
		font-size: var(--w-font-size-s);
	}

	.description {
		color: var(--w-color-text-weak);
		margin-top: var(--w-space-s);
	}

	.filters {
		display: flex;
		gap: var(--w-space-m);
		margin-bottom: var(--w-space-l);
	}

	.search {
		flex: 1;
		max-width: 600px;
	}

	.components-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--w-space-m);
	}

	.input-container {
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-input {
		width: 100%;
		padding: var(--w-space-s) var(--w-space-m);
		padding-left: calc(var(--w-space-m) * 2 + 20px);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
		font-size: var(--w-font-size-m);
		color: var(--w-color-text);
		background-color: var(--w-color-surface);
	}

	.search-icon {
		position: absolute;
		left: var(--w-space-m);
		color: var(--w-color-text-weak);
	}

	select {
		padding: var(--w-space-s) var(--w-space-m);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
		font-size: var(--w-font-size-m);
		color: var(--w-color-text);
		background-color: var(--w-color-surface);
	}
</style>
