import publicKeyStorage from "../js/public-key-storage.js";

export default Vue.extend({
	template: "#public-key-writer-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true,
			default: ""
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	data: {
		lastSavedPublicKeyName: ""
	},
	computed: {
		isSaved: function () {
			let samePublicKeyName = this.publicKeyName && (this.publicKeyName === this.lastSavedPublicKeyName),
				samePublicKey = this.publicKey && (this.publicKey === publicKeyStorage.getPublicKey(this.publicKeyName));
			return samePublicKeyName && samePublicKey;
		},
		isReadyForSave: function () {
			return this.publicKey && this.publicKeyName.trim();
		}
	},
	methods: {
		setPublicKey: function () {
			let adjustedPublicKeyName = this.publicKeyName.trim();
			if (this.publicKey && adjustedPublicKeyName) {
				publicKeyStorage.setPublicKey(adjustedPublicKeyName, this.publicKey);
				Vue.set(this, "lastSavedPublicKeyName", adjustedPublicKeyName);
			}
		}
	}
});
