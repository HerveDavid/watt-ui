---
title: Message
description: The Message component displays feedback or status information to users, supporting different styles to indicate success, error, warning, or informational states.
status: Ready
preview_type: html
preview: <p>todo</p>
---
preview: |
<div class="flex flex-col p-8">
	<watt-message unread>
		New message is coming
		<span slot="footer">Just now at Automaton</span>
	</watt-message>

	<watt-message>
		Message is read
		<span slot="footer">2 hours ago at Automaton</span>
	</watt-message>
</div>

# {title}

## Preview

{description}
