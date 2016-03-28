<template lang="jade">
	.public-key-writer-field.form-group(v-bind:class='{"has-success": isSaved, "has-error": hasError}')
		.col-md-12
			.input-group.input-group-lg
				input.form-control.input-lg(v-model='publicKeyName',
						v-on:keyup.enter='tryToSavePublicKey',
						v-bind:tabindex='tabIndex',
						data-step-index='4',
						placeholder='Public Key Name', title='Public Key Name')
				span.input-group-btn(data-step-index='5')
					button.public-key-writer-field__save-button.btn.btn-lg(v-on:click='tryToSavePublicKey',
							v-bind:class='{"btn-success": isSaved, "btn-danger": hasError, "btn-default": !(isSaved || hasError)}',
							v-bind:disabled='isSaved || !isReadyForSave',
							type='button', tabindex='-1')
						span(v-show='isSaved').glyphicon.glyphicon-floppy-saved
						span(v-show='!isSaved').glyphicon.glyphicon-floppy-save
</template>

<style lang="sass">
	@import "sweetalert";
</style>

<script>
	import swal from "sweetalert";

	import publicKeyStorage from "public-key-storage";

	const UNOBSERVE_METHOD = Symbol();

	export default {
		props: {
			publicKey: {
				type: String,
				required: true
			},
			publicKeyName: {
				type: String,
				required: true,
				default: ""
			},
			error: {
				required: true
			},
			tabIndex: {
				type: String,
				default: "-1"
			}
		},
		created() {
			this[UNOBSERVE_METHOD] = publicKeyStorage.observe(recomputeSavedPublicKey.bind(this));
			recomputeSavedPublicKey.call(this);
		},
		watch: {
			publicKeyName: recomputeSavedPublicKey
		},
		data() {
			return {
				savedPublicKey: null
			};
		},
		computed: {
			hasError() {
				return Boolean(this.error);
			},
			isSaved() {
				let samePublicKey = this.savedPublicKey === this.publicKey;
				return this.publicKeyName && samePublicKey;
			},
			isReadyForSave() {
				return this.publicKey && this.publicKeyName;
			}
		},
		methods: {
			tryToSavePublicKey() {
				if (this.isSaved || !this.isReadyForSave) {
					return;
				}
				if (publicKeyStorage.doesPublicKeyNameExist(this.publicKeyName)) {
					swal({
						type: "warning",
						title: "Are you sure?",
						text: `You are going to rewrite public key with name "${this.publicKeyName}"...`,
						showCancelButton: true,
						confirmButtonText: "Rewrite"
					}, savePublicKey.bind(this));
				} else if (publicKeyStorage.doesPublicKeyExist(this.publicKey)) {
					let oldName = publicKeyStorage.getPublicKeyName(this.publicKey);
					swal({
						type: "warning",
						title: "Are you sure?",
						text: `You are going to change public key name from "${oldName}" to "${this.publicKeyName}"...`,
						showCancelButton: true,
						confirmButtonText: "Rename"
					}, savePublicKey.bind(this));
				} else {
					savePublicKey.call(this);
				}
			}
		},
		destroyed() {
			this[UNOBSERVE_METHOD]();
		}
	};

	function savePublicKey() {
		publicKeyStorage.setPublicKey(this.publicKeyName, this.publicKey);
	}

	function recomputeSavedPublicKey() {
		this.savedPublicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
	}
</script>
