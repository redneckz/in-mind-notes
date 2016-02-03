import SelectionButton from "./__selection-button/secret-field__selection-button";

export default Vue.extend({
	mixins: [SelectionButton],
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
