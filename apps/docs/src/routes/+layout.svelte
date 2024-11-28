<script>
	import '@watt-ui/core';
	import '../app.css';
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>
