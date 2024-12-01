<script lang="ts">
	// Component props/events interface
	interface WattTab extends HTMLElement {
		selected: boolean;
	}

	interface TabSelectEvent extends CustomEvent {
		detail: {
			tab: WattTab;
		};
	}

	let tabs: string[] = ['Dashboard', 'Monitor', 'Settings'];
	let selectedTab: string = 'Dashboard';

	function handleTabSelect(event: TabSelectEvent) {
		selectedTab = event.detail.tab.textContent || '';
	}
</script>

<div>
	{#each tabs as tab}
		<watt-tab selected={selectedTab === tab} on:watt-tab-select={handleTabSelect}>
			{tab}
		</watt-tab>
	{/each}
</div>
