export default Vue.extend({
	template: "#passphrase-field-template",
	props: {
		passphrase: {
			type: String,
			required: true
		}
	},
	computed: {
		passphraseFieldType: function () {
			return this.passphraseVisible ? "text" : "password";
		}
	},
	data: function () {
		return {
			passphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility: function () {
			this.passphraseVisible = !this.passphraseVisible;
		}
	}
});
