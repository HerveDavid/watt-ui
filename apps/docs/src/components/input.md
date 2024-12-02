---
title: Input
description: The Input component provides a text field for users to enter and edit data, supporting various types of content with customizable styling and validation options.
status: Ready
preview_type: html
preview: <p>todo</p>
---
preview: |
<div class="p-8">
	<watt-input
		label="Email"
		type="search"
		required
		error="Please enter a valid email"
		expand
		size="l"
	>
		<span slot="start">@</span>
		<watt-button slot="end">Verify</watt-button>
	</watt-input>
</div>

# {title}

## Preview

{description}
