import SelectSecretButton from "./__select-secret-button/secret-field__select-secret-button";

export default Vue.extend({
	mixins: [SelectSecretButton],
	template: "#secret-field-template",
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
	}
});
