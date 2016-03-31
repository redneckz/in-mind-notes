<template lang="jade">
	.secret-form.container(v-cloak)
		form.form-horizontal(role='form')
			.form-group(style='padding-top: 2px;')
				.col-md-12
					button.btn.btn-info.btn-xs.pull-right(type='button', v-on:click='startIntro')
						span.glyphicon.glyphicon-question-sign
					span.label.label-default.pull-left(v-show='isDirectMode') Direct mode
					span.label.label-warning.pull-left(v-show='isReverseMode') Reverse mode

			passphrase-field(v-ref:passphrase-field,
					v-bind:passphrase.sync='passphrase')

			public-key-reader-field(v-ref:public-key-reader-field,
					v-show='isDirectMode',
					v-bind:public-key.sync='chosenPublicKey',
					v-bind:public-key-name.sync='chosenPublicKeyName',
					tab-index='2')
			secret-generator-field(v-ref:secret-generator-field,
					v-show='isReverseMode',
					v-bind:secret.sync='generatedSecret',
					tab-index='2')

			.form-group.text-center(title='Mode trigger')
				.col-md-12
					button.btn.btn-lg(v-on:click='toggleMode',
							data-step-index='6',
							v-bind:class='{"btn-default": isDirectMode, "btn-warning": isReverseMode}',
							type='button', tabindex='-1')
						span.glyphicon.glyphicon-sort

			secret-field(v-ref:secret-field,
					v-show='isDirectMode',
					v-bind:secret='computedSecret',
					v-bind:error='secretComputationError',
					tab-index='3')
			public-key-writer-field(v-ref:public-key-writer-field,
					v-show='isReverseMode',
					v-bind:public-key='computedPublicKey',
					v-bind:public-key-name.sync='enteredPublicKeyName',
					v-bind:error='publicKeyComputationError',
					tab-index='3')
</template>

<style lang="less">
	@import (inline) "introjs.css";
	@import "./_v-cloak/secret-form_v-cloak";
</style>

<script>
	import directModeMixin from "secret-form-direct-mode-mixin";
	import reverseModeMixin from "secret-form-reverse-mode-mixin";
	import introMixin from "secret-form-intro-mixin";

	import PassphraseField from "secret-form/passphrase-field";

	import publicKeyStorage from "public-key-storage";

	export default {
		mixins: [directModeMixin, reverseModeMixin, introMixin],
		data() {
			return {
				isDirectMode: Boolean(publicKeyStorage.entries.length),
				passphrase: ""
			};
		},
		computed: {
			isReverseMode() {
				return !this.isDirectMode;
			}
		},
		methods: {
			toggleMode() {
				this.isDirectMode = !this.isDirectMode;
			}
		},
		components: {
			PassphraseField
		}
	};
</script>
