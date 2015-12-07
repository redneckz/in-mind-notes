import directModeMixin from "./secret-form-direct-mode-mixin.js";
import reverseModeMixin from "./secret-form-reverse-mode-mixin.js";

import PassphraseField from "../passphrase-field/passphrase-field.js";
import PublicKeyReaderField from "../public-key-reader-field/public-key-reader-field.js";
import PublicKeyWriterField from "../public-key-writer-field/public-key-writer-field.js";
import SecretGeneratorField from "../secret-generator-field/js/secret-generator-field.js";
import SecretField from "../secret-field/secret-field.js";

export default new Vue({
	el: "#secret-form",
	mixins: [directModeMixin, reverseModeMixin],
	data: {
		directMode: true,
		passphrase: "",
	},
	computed: {
		reverseMode: function () {
			return !this.directMode;
		}
	},
	methods: {
		toggleMode: function () {
			this.directMode = !this.directMode;
		}
	},
	components: {
		"passphrase-field": PassphraseField,
		"public-key-reader-field": PublicKeyReaderField,
		"public-key-writer-field": PublicKeyWriterField,
		"secret-generator-field": SecretGeneratorField,
		"secret-field": SecretField
	}
});
