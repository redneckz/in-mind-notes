import publicKeyStorage from "../js/public-key-storage.js";

const UNOBSERVE_METHOD = Symbol();

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
		error: {
			required: true
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	created: function () {
		this[UNOBSERVE_METHOD] = publicKeyStorage.observe(recomputeSavedPublicKey.bind(this));
		recomputeSavedPublicKey.call(this);
	},
	watch: {
		publicKeyName: recomputeSavedPublicKey
	},
	data: function ()  {
		return {
			savedPublicKey: null
		};
	},
	computed: {
		hasError: function () {
			return Boolean(this.error);
		},
		isSaved: function () {
			let samePublicKey = this.savedPublicKey === this.publicKey;
			return this.publicKeyName && samePublicKey;
		},
		isReadyForSave: function () {
			return this.publicKey && this.publicKeyName;
		},
		isDefault: function () {
			return !this.isSaved() && !this.isReadyForSave();
		}
	},
	methods: {
		tryToSavePublicKey: function () {
			if (this.isSaved || !this.isReadyForSave) {
				return;
			}
			if (publicKeyStorage.doesPublicKeyNameExist(this.publicKeyName)) {
				swal({
					type: "warning",
					title: "Are you sure?",
					text: `You are going to rewrite public key with name "${this.publicKeyName}"...`,
					showCancelButton: true,
					confirmButtonText: "Rewrite"
				}, savePublicKey.bind(this));
			} else if (publicKeyStorage.doesPublicKeyExist(this.publicKey)) {
				let oldName = publicKeyStorage.getPublicKeyName(this.publicKey);
				swal({
					type: "warning",
					title: "Are you sure?",
					text: `You are going to change public key name from "${oldName}" to "${this.publicKeyName}"...`,
					showCancelButton: true,
					confirmButtonText: "Rename"
				}, savePublicKey.bind(this));
			} else {
				savePublicKey.call(this);
			}
		}
	},
	destroyed: function () {
		this[UNOBSERVE_METHOD]();
	}
});

function savePublicKey() {
	publicKeyStorage.setPublicKey(this.publicKeyName, this.publicKey);
}

function recomputeSavedPublicKey() {
	this.savedPublicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
}
