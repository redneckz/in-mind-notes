<template lang="jade">
	.public-key-reader-field.form-group(data-step-index='7')
		.col-md-12
			.input-group.input-group-lg
				input.form-control.input-lg(v-model='publicKeyName', v-bind:tabindex='tabIndex',
						list='public-key-option-list',
						placeholder='Public Key', title='Public Key')
				datalist#public-key-option-list
					option(v-for='entry in entries', v-bind:value='entry.publicKeyName')
						| {{entry.publicKey}}
				span.input-group-btn
					import-button(v-ref:import-button)
					export-button(v-ref:export-button)
</template>

<script>
	import publicKeyStorage from "public-key-storage";

	import ImportButton from "./__import-button/public-key-reader-field__import-button.vue";
	import ExportButton from "./__export-button/public-key-reader-field__export-button.vue";

	const UNOBSERVE_METHOD = Symbol();

	export default {
		props: {
			publicKey: {
				type: String,
				required: true
			},
			publicKeyName: {
				type: String,
				required: true
			},
			tabIndex: {
				type: String,
				default: "-1"
			}
		},
		created() {
			this[UNOBSERVE_METHOD] = publicKeyStorage.observe(entries => {
				this.entries = entries;
				this.publicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
			});
		},
		data() {
			return {
				entries: publicKeyStorage.entries
			};
		},
		watch: {
			publicKeyName(publicKeyName) {
				this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
			}
		},
		components: {
			ImportButton,
			ExportButton
		},
		destroyed() {
			this[UNOBSERVE_METHOD]();
		}
	};
</script>
