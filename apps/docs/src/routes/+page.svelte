<div class="overflow-auto">
	<section class="hero h-4/6">
		<div class="hero-content context">
			<p class="tagline">Where Industrial Clarity Meets Operational Safety</p>
			<h1 class="font-black">Industrial UI Design for the Modern Age</h1>
			<p class="subtitle">
				A design system that combines ISA 101 principles with modern web standards, optimized for
				operational safety and efficiency.
			</p>
			<div>
				<a href="#" class="button">Explore Components</a>
				<a href="#" class="button secondary">View Guidelines</a>
			</div>
		</div>
	</section>

	<section class="principles">
		<div class="context">
			<h2 class="text-2xl font-black">Design Principles</h2>
			<div class="principles-grid">
				<div class="principle-card">
					<h3 class="font-bold">Design for Environment</h3>
					<p>
						Optimized for both plant floor and control room contexts, accounting for challenging
						industrial conditions.
					</p>
				</div>
				<div class="principle-card">
					<h3 class="font-bold">Information First</h3>
					<p>
						Focus on operational value with clear data visualization that aids quick comprehension.
					</p>
				</div>
				<div class="principle-card">
					<h3 class="font-bold">Support Critical Decisions</h3>
					<p>
						Enable quick assessment of process states and maintain operator situation awareness.
					</p>
				</div>
				<div class="principle-card">
					<h3 class="font-bold">Environmental Constraints</h3>
					<p>
						Designed for varying conditions including vibration, lighting, and viewing distances.
					</p>
				</div>
				<div class="principle-card">
					<h3 class="font-bold">Operator Safety</h3>
					<p>Prevent accidental activation and ensure clear recognition of emergency states.</p>
				</div>
				<div class="principle-card">
					<h3 class="font-bold">Reduce Cognitive Load</h3>
					<p>Group related information and maintain consistent patterns across interfaces.</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.hero {
		padding: 80px 0;
		background: var(--w-color-surface);
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 48px;
		margin-bottom: 24px;
		color: var(--w-color-text);
		line-height: 1.2;
	}

	h2 {
		color: var(--w-color-text);
	}

	.tagline {
		font-size: 24px;
		color: var(--w-color-accent);
		margin-bottom: 16px;
		font-weight: 500;
	}

	.subtitle {
		font-size: 20px;
		color: var(--w-color-text);
		margin-bottom: 40px;
	}

	.principles {
		padding: 80px 0;
		background: var(--w-color-background);
		padding: 2em;
	}

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 32px;
		margin-top: 48px;
	}

	.principle-card {
		background: var(--w-color-surface);
		padding: 32px;
		border-radius: 4px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.principle-card h3 {
		font-size: 20px;
		margin-bottom: 16px;
		color: var(--w-color-accent);
	}

	.button {
		display: inline-block;
		padding: 12px 24px;
		background: var(--w-color-accent);
		color: var(--w-color-surface);
		text-decoration: none;
		border-radius: 4px;
		font-weight: 500;
		margin: 0 8px;
	}

	.button:hover {
		background: rgb(61, 82, 157);
	}

	.button.secondary {
		background: var(--w-color-surface);
		color: var(--w-color-accent);
		border: 1px solid var(--w-color-accent);
	}

	.button.secondary:hover {
		background: rgb(245, 245, 245);
	}
</style>
