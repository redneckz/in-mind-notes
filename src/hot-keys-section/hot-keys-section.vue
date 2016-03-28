<template lang="jade">
	.hot-keys-section.container
		hr
		p.small.text-muted(v-for='hotKey in hotKeysList')
			kbd
				| Ctrl+Alt+{{hotKey.char}}
			| &nbsp;&nbsp;{{hotKey.description}}
		hr
</template>

<script>
	import HotKey from "hot-key";

	export default {
		data() {
			return {
				hotKeysList: HotKey.values
			};
		}
	};
</script>
