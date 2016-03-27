<template lang="jade">
	button.public-key-reader-field__export-button.btn.btn-default.btn-lg(
			v-on:click='exportPublicKeys',
			title='Export public keys',
			type='button', tabindex='-1')
		span.glyphicon.glyphicon-export
		a(v-bind:href='entriesDownloadHref', download='public-keys.json', style='display: none;')
</template>

<style lang="sass">
	@import "sweetalert";
</style>

<script>
	import swal from "sweetalert";

	import publicKeyStorage from "public-key-storage";

	const UNOBSERVE_METHOD = Symbol();

	export default {
		created() {
			this[UNOBSERVE_METHOD] = publicKeyStorage.observe(entries => {
				this.entries = entries;
			});
		},
		data() {
			return {
				entries: publicKeyStorage.entries,
				entriesDownloadHref: ""
			};
		},
		methods: {
			exportPublicKeys() {
				if (publicKeyStorage.isNotEmpty) {
					computeEntriesDownloadHref.call(this);
					this.$el.querySelector("a[download]").click();
				} else {
					swal("No public keys to export");
				}
			}
		},
		destroyed() {
			this[UNOBSERVE_METHOD]();
		}
	};

	function computeEntriesDownloadHref() {
		if (this.entries && this.entries.length) {
			let content = JSON.stringify(this.entries);
			this.entriesDownloadHref = `data:text/json;charset=utf-8,${encodeURIComponent(content)}`;
		} else {
			this.entriesDownloadHref = "";
		}
	}
</script>
