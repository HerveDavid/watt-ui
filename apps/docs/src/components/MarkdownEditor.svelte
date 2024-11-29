<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	let markdown: string = '';
	let preview: string = '';

	$: {
		// Force marked to be synchronous with { async: false }
		const markedOptions = { async: false };
		preview = DOMPurify.sanitize(marked(markdown, markedOptions) as string);
	}

	function handleInput(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }): void {
		markdown = event.currentTarget.value;
	}
</script>

<div class="editor-container">
	<div class="editor-section">
		<textarea
			class="editor"
			placeholder="Write your markdown here..."
			value={markdown}
			on:input={handleInput}
		></textarea>
	</div>

	<div class="preview-section">
		{@html preview}
	</div>
</div>

<style>
	.editor-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		min-height: 400px;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
	}

	.editor-section,
	.preview-section {
		padding: 1rem;
        background-color: var(--w-color-surface);
	}

	.editor-section {
		border-right: 1px solid #e2e8f0;
	}

	.editor {
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		border: none;
		resize: none;
		font-family: ui-monospace, monospace;
		font-size: 0.875rem;
		line-height: 1.5;
		outline: none;
	}

	.preview-section {
		overflow-y: auto;
		line-height: 1.6;
	}

	.preview-section :global(h1) {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1rem 0;
	}

	.preview-section :global(h2) {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0.75rem 0;
	}

	.preview-section :global(p) {
		margin: 0.75rem 0;
	}

	.preview-section :global(code) {
		background-color: #f1f5f9;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-family: ui-monospace, monospace;
		font-size: 0.875rem;
	}

	.preview-section :global(pre) {
		background-color: #f1f5f9;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
	}

	.preview-section :global(a) {
		color: #2563eb;
		text-decoration: underline;
	}

	.preview-section :global(ul),
	.preview-section :global(ol) {
		margin: 0.75rem 0;
		padding-left: 1.5rem;
	}

	.preview-section :global(blockquote) {
		border-left: 4px solid #e2e8f0;
		margin: 0.75rem 0;
		padding: 0.5rem 1rem;
		color: #64748b;
	}
</style>
