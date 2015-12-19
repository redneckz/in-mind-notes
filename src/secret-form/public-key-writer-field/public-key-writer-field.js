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
	computed: {
		isSaved: function () {
			let publicKeyNameExists = publicKeyStorage.doesPublicKeyNameExist(this.publicKeyName),
				samePublicKey = publicKeyStorage.getPublicKey(this.publicKeyName) === this.publicKey;
			return publicKeyNameExists && samePublicKey;
		},
		isReadyForSave: function () {
			return this.publicKey && this.publicKeyName;
		}
	},
	methods: {
		tryToSavePublicKey: function () {
			if (publicKeyStorage.doesPublicKeyNameExist(this.publicKeyName)) {
				swal({
					type: "warning",
					title: "Are you sure?",
					text: `You are going to rewrite public key with name "${this.publicKeyName}"...`,
					showCancelButton: true,
					confirmButtonText: "Rewrite"
				}, setPublicKey.bind(this));
			} else if (publicKeyStorage.doesPublicKeyExist(this.publicKey)) {
				let oldName = publicKeyStorage.getPublicKeyName(this.publicKey);
				swal({
					type: "warning",
					title: "Are you sure?",
					text: `You are going to change public key name from "${oldName}" to "${this.publicKeyName}"...`,
					showCancelButton: true,
					confirmButtonText: "Rename"
				}, setPublicKey.bind(this));
			} else {
				setPublicKey.call(this);
			}
		}
	}
});

function setPublicKey() {
	publicKeyStorage.setPublicKey(this.publicKeyName, this.publicKey);
}
