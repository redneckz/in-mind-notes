import publicKeyStorage from "../js/public-key-storage.js";

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
	data: function () {
		return {
			publicKeyStorage: publicKeyStorage,
			publicKeyName: ""
		};
	},
	watch: {
		publicKeyName: function (publicKeyName) {
			this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
		}
	}
});
