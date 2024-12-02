<script lang="ts">
	const tabs = [
		{ id: 'examples', label: 'Example Sets' },
		{ id: 'properties', label: 'Properties' },
		{ id: 'css', label: 'CSS Properties' },
		{ id: 'dependencies', label: 'Dependencies' },
		{ id: 'usage', label: 'Usage' },
		{ id: 'integration', label: 'Integration' }
	];

	let activeTab = 'examples';
</script>

<header class="header">
	<div class="header-content">
		<div class="logo">Avatar</div>
		<nav class="tabs">
			{#each tabs as tab}
				<button
					class="tab"
					class:active={activeTab === tab.id}
					on:click={() => (activeTab = tab.id)}
				>
					{tab.label}
				</button>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		background: var(--w-color-header);
		border-bottom: 1px solid var(--w-color-border);
		padding: var(--w-space-m) var(--w-space-l);
	}

	.header-content {
		display: flex;
		align-items: center;
		gap: var(--w-space-xl);
	}

	.logo {
		font-size: var(--w-font-size-l);
		font-weight: var(--w-font-weight-heading);
		color: var(--w-color-text);
	}

	.tabs {
		display: flex;
		gap: var(--w-space-s);
	}

	.tab {
		padding: var(--w-space-s) var(--w-space-m);
		background: none;
		border: none;
		border-radius: var(--w-border-radius);
		color: var(--w-color-text);
		font-size: var(--w-font-size-m);
		cursor: pointer;
		transition: all var(--w-transition-slowly);
	}

	.tab:hover {
		background: var(--w-color-nav-hover);
	}

	.tab.active {
		background: var(--w-color-nav-surface);
		font-weight: var(--w-font-weight-heading);
	}
</style>
