<!-- Layout.svelte -->
<script lang="ts">
	import '@watt-ui/core';
	import 'mingcute_icon/font/Mingcute.css';
	import '../app.css';
	import '../theme.css';

	// Props
	let title: string = 'Watt Ui';
	let { children } = $props();

	// Navigation items interface
	interface NavItem {
		href: string;
		label: string;
	}

	// Define navigation sections
	const primaryNav: NavItem[] = [
		{ href: '/support', label: 'Support' },
		{ href: '/faq', label: 'FAQ' }
	];

	const sections = [
		{
			title: 'Get started',
			icon: 'mgc_search_line',
			items: [
				{ href: '/installation', label: 'Installation' },
				{ href: '/overview', label: 'Overview' },
				{ href: '/guidelines', label: 'Guidelines' }
			]
		},
		{
			title: 'Components',
			icon: 'mgc_layout_10_line',
			items: [
				{ href: '/components/working', label: 'Working with Components' },
				{ href: '/components/props', label: 'Component Props' },
				{ href: '/components/dynamic', label: 'Dynamic Components' },
				{ href: '/components/customization', label: 'Customization' }
			]
		},
		{
			title: 'Style',
			icon: 'mgc_paint_brush_line',
			items: [
				{ href: '/style/typography', label: 'Typography' },
				{ href: '/style/spacing', label: 'Spacing' },
				{ href: '/style/variables', label: 'Variables' }
			]
		}
	];
</script>

<div class="layout">
	<!-- Top Bar -->
	<header class="top-bar">
		<div class="logo">
			<a href="/">{title}</a>
		</div>
		<nav class="primary-nav">
			{#each primaryNav as item}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</header>

	<div class="context">
		<!-- Sidebar -->
		<aside class="sidebar">
			<div class="sidebar-content">
				{#each sections as section}
					<div class="nav-section">
						<h3>
							<span class="{section.icon} mr-2"></span>
							{section.title}
						</h3>
						<ul>
							{#each section.items as item}
								<li>
									<a href={item.href}>{item.label}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}

				<div class="external-links">
					<a href="https://github.com" class="external-link">
						<span class="mgc_github_line mr-2"></span>
						Github
					</a>
					<a href="https://storybook.js.org" class="external-link">
						<span class="mgc_book_6_line mr-2"></span>
						Storybook
					</a>
				</div>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="content">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.layout {
		min-height: 100vh;
		background-color: var(--w-color-surface-raised);
	}

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		border-bottom: 1px solid var(--w-color-border-strong);
		background-color: var(--w-color-overlay);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 4rem;
		z-index: 50;
	}

	.logo a {
		font-weight: 600;
		font-size: 1.25rem;
		color: #000;
		text-decoration: none;
	}

	.primary-nav {
		display: flex;
		gap: 2rem;
	}

	.primary-nav a {
		color: var(--w-color-text-link);
		text-decoration: none;
	}

	.context {
		display: flex;
		padding-top: 4rem; /* Hauteur du top-bar */
		height: 100vh;
	}

	.sidebar {
		width: 16rem;
		background: var(--w-color-surface-lowered);
		position: fixed;
		top: 4rem; /* Hauteur du top-bar */
		bottom: 0;
		left: 0;
		border-right: 1px solid var(--w-color-border);
	}

	.sidebar-content {
		padding: 2rem;
		height: 100%;
		overflow-y: auto;
	}

	.nav-section {
		margin-bottom: 2rem;
	}

	.nav-section h3 {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: var(--w-color-text-link);
	}

	.nav-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-section li a {
		display: block;
		padding: 0.5rem 0;
		color: var(--w-color-text-link);
		text-decoration: none;
		font-size: 0.875rem;
	}

	.nav-section li a:hover {
		color: #000;
	}

	.icon {
		margin-right: 0.5rem;
		opacity: 0.5;
	}

	.external-links {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid var(--w-color-border-strong);
	}

	.external-link {
		display: flex;
		align-items: center;
		padding: 0.5rem 0;
		color: var(--w-color-text-link);
		text-decoration: none;
		font-size: 0.875rem;
	}

	.content {
		flex: 1;
		margin-left: 16rem; /* Largeur de la sidebar */
		background: var(--w-color-background);
		min-height: calc(100vh - 4rem);
		overflow-y: auto;
	}
</style>