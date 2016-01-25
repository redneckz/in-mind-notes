import directModeMixin from "secret-form-direct-mode-mixin";
import reverseModeMixin from "secret-form-reverse-mode-mixin";
import introMixin from "secret-form-intro-mixin";

import PassphraseField from "secret-form/passphrase-field";

import publicKeyStorage from "public-key-storage";

export default Vue.extend({
	template: "#secret-form-template",
	mixins: [directModeMixin, reverseModeMixin, introMixin],
	data() {
		return {
			isDirectMode: Boolean(publicKeyStorage.entries.length),
			passphrase: "",
		};
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
