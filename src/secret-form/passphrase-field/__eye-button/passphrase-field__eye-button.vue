<template lang="jade">
	button.passphrase-field__eye-button.btn.btn-default.btn-lg(
			v-on:click='togglePassphraseVisibility',
			v-bind:class='{active: isPassphraseVisible}',
			type='button', tabindex='-1')
		span.glyphicon.glyphicon-eye-open(v-show='isPassphraseVisible')
		span.glyphicon.glyphicon-eye-close(v-show='!isPassphraseVisible')
</template>

<script>
	export default {
		props: {
			isPassphraseVisible: {
				type: Boolean,
				required: true
			}
		},
		methods: {
			togglePassphraseVisibility() {
				this.isPassphraseVisible = !this.isPassphraseVisible;
			}
		}
	};
</script>
