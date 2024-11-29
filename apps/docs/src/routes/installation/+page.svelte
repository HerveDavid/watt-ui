<div class="context">
	<h1 class="title">Getting Started</h1>

	<p class="paragraph">
		The Watt UI component library offers flexible integration options to meet diverse implementation
		needs.
		<br />
		For quick setup, use our CDN-hosted files.
	</p>

	<p class="paragraph">
		For production applications, we recommend local installation via package managers.
	</p>

	<h2 class="subtitle">Quick Start with CDN</h2>

	<p class="paragraph">
		Add these lines to your HTML document's <code>&lt;head&gt;</code> section:
	</p>

	<div class="code-block">todo</div>

	<p class="paragraph">For themed applications, include the additional theme stylesheet:</p>

	<div class="code-block">todo</div>

	<h2 class="subtitle">Package Installation</h2>

	<p class="paragraph">
		First-time Node.js users should initialize their project with <code>npm init</code>. Then
		proceed with installing the Watt UI packages:
	</p>

	<div class="code-block">
		# NPM Installation npm install @watt-ui/core @watt-ui/themes --save # Yarn Installation yarn add
		@watt-ui/core @watt-ui/themes
	</div>

	<h2 class="subtitle">CSS Integration</h2>

	<p class="paragraph">
		The CSS framework is essential and provides design tokens, component themes, and utility
		classes. For optimal design consistency, utilize these built-in resources in your application.
	</p>

	<p class="paragraph">Industrial applications require the additional industrial theme package:</p>

	<div class="code-block">
		# NPM Installation npm install @watt-ui/core --save # Yarn Installation yarn add @watt-ui/themes
	</div>

	<h2 class="subtitle">Module Integration</h2>

	<p class="paragraph">
		The components are distributed as ES modules optimized for modern browsers and build systems.
		Import options include:
	</p>

	<p class="paragraph">Complete library import:</p>

	<div class="code-block">import '@watt-ui/core'</div>

	<p class="paragraph">Selective component imports for optimal bundle size:</p>

	<div class="code-block">
		import '@watt-ui/core/components/WattBadge' import '@watt-ui/core/components/WattButton' import
		'@watt-ui/core/components/WattInput'
	</div>

	<h2 class="subtitle">Browser Compatibility</h2>

	<p class="paragraph">
		Watt UI supports the two latest versions of modern browsers. Critical issues in older versions
		are addressed based on impact severity. The library is not compatible with IE11 or legacy Edge
		browsers.
	</p>
</div>

<style>
	.context {
		max-width: 1024px;
		margin: 0 auto;
		padding: 24px;
		background-color: aqua;
		height: 100%;
		overflow-y: auto;
	}

	.title {
		font-size: 32px;
		font-weight: 700;
		margin-bottom: 24px;
	}

	.subtitle {
		font-size: 24px;
		font-weight: 600;
		margin-top: 32px;
		margin-bottom: 16px;
	}

	.paragraph {
		margin-bottom: 16px;
		line-height: 1.5;
	}

	.code-block {
		background: var(--w-color-surface);
		padding: 16px;
		border-radius: 6px;
		margin-bottom: 32px;
		white-space: pre-wrap;
		font-family: monospace;
		font-size: 14px;
	}

	code {
		font-family: monospace;
		background: var(--w-color-surface);
		color: var(--w-color-accent);
		font-weight: 600;
		padding: 2px 4px;
		border-radius: 4px;
	}
</style>
