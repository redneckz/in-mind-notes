import directModeMixin from "./secret-form-direct-mode-mixin.js";
import reverseModeMixin from "./secret-form-reverse-mode-mixin.js";
import introMixin from "./secret-form-intro-mixin.js";

import PassphraseField from "secret-form/passphrase-field";

import publicKeyStorage from "public-key-storage";

export default new Vue({
	el: "#secret-form",
	mixins: [directModeMixin, reverseModeMixin, introMixin],
	data: {
		isDirectMode: Boolean(publicKeyStorage.entries.length),
		passphrase: "",
	},
	computed: {
		isReverseMode() {
			return !this.isDirectMode;
		}
	},
	methods: {
		toggleMode() {
			this.isDirectMode = !this.isDirectMode;
		}
	},
	components: {
		"passphrase-field": PassphraseField
	}
});
