<script>
	import '@watt-ui/core';
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<watt-button>jj</watt-button>
	{@render children()}
</div>
