<template lang="jade">
	.secret-generator-field.form-group
		.col-md-12
			.input-group.input-group-lg
				span.input-group-btn
					gen-button(v-ref:gen-button,
							v-bind:secret.sync='secret',
							v-bind:alphabet-reg-exp='alphabetRegExp',
							v-bind:secret-length='secretLengthVariant.secretLength')
					gen-mode-dropdown(
							v-bind:alphabet-reg-exp.sync='alphabetRegExp',
							v-bind:secret-length-variant.sync='secretLengthVariant')
				input.form-control(v-model='secret', type='text', autocomplete='off',
						data-step-index='3',
						v-bind:placeholder='title', v-bind:title='title', v-bind:tabindex='tabIndex')

</template>

<script>
	import Vue from "vue";

	import GenButton from "./__gen-button/secret-generator-field__gen-button.vue";
	import GenModeDropdown from "./__gen-mode-dropdown/secret-generator-field__gen-mode-dropdown.vue";
	import {DEFAULT_ALPHABET_REGEXP, DEFAULT_SECRET_LENGTH_VARIANT} from "./__gen-mode-dropdown/gen-modes-definition";

	export default {
		props: {
			secret: {
				type: String,
				required: true
			},
			title: {
				type: String,
				default: "Secret"
			},
			tabIndex: {
				type: String,
				default: "-1"
			}
		},
		data() {
			return {
				alphabetRegExp: DEFAULT_ALPHABET_REGEXP,
				secretLengthVariant: DEFAULT_SECRET_LENGTH_VARIANT
			};
		},
		methods: {
			selectSecret() {
				Vue.nextTick(() => {
					this.$el.querySelector("input").select()
				});
			}
		},
		components: {
			GenButton,
			GenModeDropdown
		}
	};
</script>
