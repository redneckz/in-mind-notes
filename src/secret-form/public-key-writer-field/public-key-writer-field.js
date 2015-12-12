import publicKeyStorage from "../js/public-key-storage.js";

import PublicKeyAutocomplete from "../public-key-autocomplete/public-key-autocomplete.js";

export default Vue.extend({
	template: "#public-key-writer-field-template",
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
		"publicKey + publicKeyName": function () {
			let adjustedPublicKeyName = this.publicKeyName.trim();
			if (this.publicKey && adjustedPublicKeyName) {
				publicKeyStorage.setPublicKey(adjustedPublicKeyName, this.publicKey);
			}
		}
	},
	components: {
		"public-key-autocomplete": PublicKeyAutocomplete
	}
});
