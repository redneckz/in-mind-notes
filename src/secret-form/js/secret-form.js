import directModeMixin from "./secret-form-direct-mode-mixin.js";
import reverseModeMixin from "./secret-form-reverse-mode-mixin.js";

import PassphraseField from "../passphrase-field/passphrase-field.js";

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
		"passphrase-field": PassphraseField
	}
});
