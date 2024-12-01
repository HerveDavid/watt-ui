<script lang="ts">
	import * as PreviewComponents from '../previews';

	type ComponentStatus = 'Ready' | 'In Progress' | 'Deprecated';

	interface ComponentProps {
		title: string;
		description: string;
		status: ComponentStatus;
		previewComponent: keyof typeof import('../previews');
	}

	export let title: ComponentProps['title'];
	export let description: ComponentProps['description'];
	export let status: ComponentProps['status'];
	export let previewComponent: ComponentProps['previewComponent'];

	const Preview = PreviewComponents[previewComponent];
</script>

<div class="card">
	<div class="preview">
		{#if Preview}
			<svelte:component this={Preview} />
		{/if}
	</div>
	<div class="content">
		<div class="header">
			<h2 class="title">{title}</h2>
			<span class="status">{status}</span>
		</div>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	.card {
		background-color: var(--w-color-surface);
		border: 1px solid var(--w-color-border);
		border-radius: var(--w-border-radius);
		overflow: hidden;
	}

	.preview {
		height: 200px;
		background-color: var(--w-color-surface-lowered);
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--w-color-border);
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
