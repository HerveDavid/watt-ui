<script lang="ts">
	import { base } from '$app/paths';
	import type { ComponentMeta } from '@/types/component-meta';

	export let component: ComponentMeta;
	const { slug, title, description, status, preview_type, preview } = component;

	$: previewComponent =
		preview_type === 'component' ? async () => (await import(preview)).default : null;
</script>

<a href="{base}/components/{slug}" class="card">
	<div class="preview">
		{#if preview_type === 'html'}
			{@html preview}
		{:else if preview_type === 'component'}
			<svelte:component this={previewComponent} />
		{/if}
	</div>
	<div class="content">
		<div class="header">
			<h2 class="title">{title}</h2>
			<span class="status">{status}</span>
		</div>
		<p class="description">{description}</p>
	</div>
</a>

<style>
	.card {
		background-color: var(--w-color-surface);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
		overflow: hidden;
	}

	.card:hover {
		border: 1px solid var(--w-color-border-highlight);
	}

	.preview {
		height: 200px;
		background-color: var(--w-color-surface-lowered);
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--w-color-border);
	}

	.card:hover .preview {
		border-bottom: 1px solid var(--w-color-border-highlight);
	}

	.content {
		padding: var(--w-space-m);
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--w-space-s);
	}

	.title {
		color: var(--w-color-text);
		font-size: var(--w-font-size-l);
		font-weight: var(--w-font-weight-heading);
		margin: 0;
	}

	.status {
		background-color: var(--w-color-accent);
		color: var(--w-color-text-on-accent);
		padding: var(--w-space-xs) var(--w-space-s);
		border-radius: var(--w-border-radius);
		font-size: var(--w-font-size-s);
	}

	.description {
		color: var(--w-color-text-weak);
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height);
		margin: 0;
	}
</style>
