<script lang="ts">
	const sections = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'examples', label: 'Examples' },
		{ id: 'properties', label: 'Properties' },
		{ id: 'css-properties', label: 'CSS Properties' },
		{ id: 'dependencies', label: 'Dependencies' },
		{ id: 'usage', label: 'Usage' },
		{ id: 'troubleshooting', label: 'Troubleshooting' }
	];

	let activeSection = sections[0].id;
</script>

<nav class="nav">
	<ul class="nav-list">
		{#each sections as section}
			<li>
				<a
					href="#{section.id}"
					class="nav-link"
					class:active={activeSection === section.id}
					on:click={() => (activeSection = section.id)}
				>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		position: sticky;
		top: var(--w-space-l);
	}

	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-link {
		display: block;
		padding: var(--w-space-s) var(--w-space-m);
		color: var(--w-color-text);
		text-decoration: none;
		border-radius: var(--w-border-radius);
		transition: all var(--w-transition-slowly);
	}

	.nav-link:hover {
		background: var(--w-color-nav-hover);
	}

	.nav-link.active {
		background: var(--w-color-nav-surface);
		font-weight: var(--w-font-weight-heading);
	}
</style>
