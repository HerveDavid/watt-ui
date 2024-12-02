<script lang="ts">
	// Import components from lib/components as needed
	import Header from './header.svelte';
	import Nav from './nav.svelte';
	import type { ComponentMeta } from '@/types/component-meta';

	// Markdown frontmatter props
	export let data: ComponentMeta;
</script>

<div class="layout">
	<Header />

	<div class="container">
		<Nav />

		<main class="content">
			<div class="content-header">
				<h1>{data.title}</h1>
				<p class="description">{data.description}</p>
				<div class="status-badge" class:ready={data.status === 'Ready'}>
					{data.status}
				</div>
			</div>

			<div class="preview">
				{#if data.preview_type === 'html'}
					{@html data.preview}
				{/if}
			</div>

			<div class="doc-content">
				<slot />
			</div>
		</main>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 100vh;
		background: var(--w-color-background);
		color: var(--w-color-text);
		font-family: var(--w-font-family);
	}

	.container {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: var(--w-space-l);
		padding: var(--w-space-l);
	}

	.content {
		background: var(--w-color-surface);
		border-radius: var(--w-border-radius);
		padding: var(--w-space-l);
	}

	.content-header {
		margin-bottom: var(--w-space-l);
		border-bottom: 1px solid var(--w-color-border);
		padding-bottom: var(--w-space-l);
	}

	h1 {
		font-size: var(--w-font-size-xxl);
		font-weight: var(--w-font-weight-heading);
		margin: 0 0 var(--w-space-s);
	}

	.description {
		color: var(--w-color-text-weak);
		margin: 0 0 var(--w-space-m);
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		padding: var(--w-space-xs) var(--w-space-s);
		border-radius: var(--w-border-radius);
		background: var(--w-color-surface-lowered);
		font-size: var(--w-font-size-s);
	}

	.status-badge.ready {
		background: var(--w-color-status-success-weak);
		color: var(--w-color-status-success);
	}

	.preview {
		margin: var(--w-space-l) 0;
		padding: var(--w-space-l);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
	}

	.doc-content {
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height);
	}

	.doc-content :global(h2) {
		font-size: var(--w-font-size-xl);
		font-weight: var(--w-font-weight-heading);
		margin: var(--w-space-xl) 0 var(--w-space-m);
	}

	.doc-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: var(--w-space-m) 0;
	}

	.doc-content :global(th),
	.doc-content :global(td) {
		padding: var(--w-space-s);
		border: 1px solid var(--w-color-border);
		text-align: left;
	}

	.doc-content :global(th) {
		background: var(--w-color-surface-lowered);
		font-weight: var(--w-font-weight-heading);
	}
</style>
