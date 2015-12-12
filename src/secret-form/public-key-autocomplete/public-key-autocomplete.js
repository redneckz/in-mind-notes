import publicKeyStorage from "../js/public-key-storage.js";

export default Vue.extend({
	template: "#public-key-autocomplete-template",
	props: {
		publicKeyName: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	data: function () {
		return {
			publicKeyStorage: publicKeyStorage,
			publicKeyName: ""
		};
	}
});
