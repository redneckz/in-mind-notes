<template lang="jade">
	button.public-key-reader-field__import-button.btn.btn-default.btn-lg(
			v-on:click='openFileChooserForImport',
			title='Import public keys',
			type='button', tabindex='-1')
		span.glyphicon.glyphicon-import
		input(v-on:change='importPublicKeys', type='file', style='display: none;')
</template>

<script>
	import publicKeyStorage from "public-key-storage";

	export default {
		methods: {
			openFileChooserForImport() {
				getFileInputForImport.call(this).click();
			},
			importPublicKeys() {
				let fileInput = getFileInputForImport.call(this);
				if (!fileInput.files || !fileInput.files.length) {
					return;
				}
				let fileReader = new FileReader();
				fileReader.onload = () => {
					try {
						publicKeyStorage.entries = JSON.parse(fileReader.result);
					} catch (ex) {
						console.warn(ex);
					}
				};
				fileReader.readAsText(fileInput.files[0]);
			}
		}
	};

	function getFileInputForImport() {
		return this.$el.querySelector("input[type=file]");
	}
</script>
