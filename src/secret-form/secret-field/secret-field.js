export default Vue.extend({
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
		hasError: function () {
			return Boolean(this.error);
		}
	},
	methods: {
		selectSecret: function () {
			this.$el.querySelector("input").select();
		}
	}
});
