<script lang="ts">
	// Types pour les éléments personnalisés
	interface WattModal extends HTMLElement {
		open: boolean;
		returnValue: string;
	}

	interface WattClickEvent extends CustomEvent {
		detail: {
			originalEvent: MouseEvent;
		};
	}

	// État réactif
	let modal: WattModal;

	// Gestionnaires d'événements
	function handleOpen() {
		if (modal) {
			modal.open = true;
		}
	}

	function handleCancel() {
		if (modal) {
			modal.returnValue = 'cancel';
			modal.open = false;
		}
	}

	function handleConfirm() {
		if (modal) {
			modal.returnValue = 'confirm';
			modal.open = false;
		}
	}

	function handleClose(event: Event) {
		const target = event.target as WattModal;
		console.log(`Modal closed with return value: ${target.returnValue}`);
	}

	function handleCancelEvent(event: Event) {
		// Décommenter pour empêcher la fermeture si nécessaire
		// event.preventDefault();
		console.log('Modal cancel attempted');
	}
</script>

<watt-button variant="primary" on:watt-click={handleOpen}> Open modal </watt-button>

<watt-modal
	bind:this={modal}
	size="s"
	aria-labelledby="title"
	on:close={handleClose}
	on:cancel={handleCancelEvent}
>
	<h2 slot="header" id="title">Modal title</h2>

	<p>Modal body text goes here.</p>

	<div slot="footer">
		<watt-button on:watt-click={handleCancel}> Cancel </watt-button>

		<watt-button variant="primary" autofocus on:watt-click={handleConfirm}>
			Close
		</watt-button>
	</div>
</watt-modal>
