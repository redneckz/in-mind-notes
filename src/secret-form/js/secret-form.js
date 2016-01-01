import directModeMixin from "./secret-form-direct-mode-mixin.js";
import reverseModeMixin from "./secret-form-reverse-mode-mixin.js";

import PassphraseField from "../passphrase-field/passphrase-field.js";

export default new Vue({
	el: "#secret-form",
	mixins: [directModeMixin, reverseModeMixin],
	data: {
		isDirectMode: true,
		passphrase: "",
	},
	computed: {
		isReverseMode: function () {
			return !this.isDirectMode;
		}
	},
	methods: {
		toggleMode: function () {
			this.isDirectMode = !this.isDirectMode;
		}
	},
	components: {
		"passphrase-field": PassphraseField
	}
});
