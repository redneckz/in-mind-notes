import publicKeyStorage from "../js/public-key-storage.js";

const UNOBSERVE_METHOD = Symbol();

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
	created: function () {
		this[UNOBSERVE_METHOD] = publicKeyStorage.observe(() => {
			this.$set("entries", publicKeyStorage.entries);
			this.publicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
		});
	},
	data: function () {
		return {
			entries: publicKeyStorage.entries
		};
	},
	watch: {
		publicKeyName: function (publicKeyName) {
			this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
		}
	},
	destroyed: function () {
		this[UNOBSERVE_METHOD]();
	}
});
