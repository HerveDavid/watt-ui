<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { ComponentMeta } from '@/types/component-meta';

	export let component: ComponentMeta;
	const { slug, title, description, status, preview, preview_component } = component;

	let cpt: any = null;
	let loading = true;
	let error: string | null = null;

	async function loadPreviewComponent() {
		if (!preview_component) return;

		try {
			loading = true;
			error = null;
			const module = await import(/* @vite-ignore */ preview_component);
			cpt = module.default;
		} catch (err) {
			error = 'Failed to load component preview';
			console.error('Failed to load component:', err);
		} finally {
			loading = false;
		}
	}

	onMount(loadPreviewComponent);
</script>

<article class="card">
	<div class="preview" aria-label="Component preview">
		{#if loading && preview_component}
			<div class="loading" aria-busy="true">Loading preview...</div>
		{:else if error}
			<div class="error" role="alert">{error}</div>
		{:else if preview}
			{@html preview}
		{:else if preview_component}
			<svelte:component this={cpt} />
		{/if}
	</div>

	<div class="content">
		<a href="{base}/components/{slug}" class="card-link" aria-label="View details for {title}">
			<div class="header">
				<h2 class="title">{title}</h2>
				<span class="status" aria-label="Status: {status}">{status}</span>
			</div>
			<p class="description">{description}</p>
		</a>
	</div>
</article>

<style>
	.card {
		background-color: var(--w-color-surface);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
		overflow: hidden;
		transition: border-color var(--w-transition-slowly);
	}

	.card:hover,
	.card:focus-within {
		border-color: var(--w-color-border-highlight);
	}

	.preview {
		height: 200px;
		background-color: var(--w-color-surface-lowered);
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--w-color-border);
		transition: border-color var(--w-transition-slowly);
	}

	.card:hover .preview,
	.card:focus-within .preview {
		border-color: var(--w-color-border-highlight);
	}

	.loading {
		color: var(--w-color-text-weak);
		font-size: var(--w-font-size-m);
	}

	.error {
		color: var(--w-color-text-error);
		font-size: var(--w-font-size-m);
	}

	.content {
		padding: var(--w-space-m);
	}

	.card-link {
		text-decoration: none;
		display: block;
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
		font-weight: var(--w-font-weight-active);
	}

	.description {
		color: var(--w-color-text-weak);
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height);
		margin: 0;
	}
</style>
