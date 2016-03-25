<template lang="jade">
	.passphrase-field.form-group(data-step-index='1', style='margin-bottom: 2px;')
		.col-md-12
			.input-group.input-group-lg
				input.form-control(v-model='passphrase', v-bind:type='passphraseFieldType',
						placeholder='Passphrase', title='Passphrase',
						autofocus='', required='', autocomplete='off', tabindex='1')
				span.input-group-btn
					eye-button(v-bind:is-passphrase-visible.sync='isPassphraseVisible')
			score(v-ref:score, v-bind:passphrase.sync='passphrase')
</template>

<script>
	import Score from "./__score/passphrase-field__score.vue";
	import EyeButton from "./__eye-button/passphrase-field__eye-button.vue";

	export default {
		props: {
			passphrase: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				isPassphraseVisible: false
			};
		},
		computed: {
			passphraseFieldType() {
				return this.isPassphraseVisible ? "text" : "password";
			}
		},
		components: {
			Score,
			EyeButton
		}
	};
</script>
