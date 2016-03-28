<template lang="jade">
	.secret-field.form-group(v-bind:class='{"has-error": hasError}', data-step-index='8')
		.col-md-12
			.input-group.input-group-lg
				span.input-group-btn
					button.secret-field__selection-button.btn.btn-default(v-on:click='selectSecret',
							v-bind:class='{"btn-danger": hasError}',
							v-bind:disabled='!secret',
							type='button', tabindex='-1')
						span.glyphicon.glyphicon-chevron-right
				input.form-control(v-model='secret', v-bind:tabindex='tabIndex',
						 type='text', placeholder='Secret', title='Secret',
						 autocomplete='off', readonly='')
</template>

<script>
	import Vue from "vue";

	export default {
		props: {
			secret: {
				type: String,
				required: true
			},
			error: {
				required: true
			},
			tabIndex: {
				type: String,
				default: "-1"
			}
		},
		computed: {
			hasError() {
				return Boolean(this.error);
			}
		},
		methods: {
			selectSecret() {
				Vue.nextTick(() => {
					this.$el.querySelector("input").select();
				});
			}
		}
	};
</script>
