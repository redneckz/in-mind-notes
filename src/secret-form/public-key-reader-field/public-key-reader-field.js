import publicKeyStorage from "../js/public-key-storage.js";

import PublicKeyAutocomplete from "../public-key-autocomplete/public-key-autocomplete.js";

export default Vue.extend({
	template: "#public-key-reader-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	watch: {
		publicKeyName: function (publicKeyName) {
			this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
		}
	},
	components: {
		"public-key-autocomplete": PublicKeyAutocomplete
	}
});
