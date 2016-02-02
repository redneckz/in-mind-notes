import PassphraseFieldScore from "./__score/passphrase-field__score";
import PassphraseFieldEyeButton from "./__eye-button/passphrase-field__eye-button";

export default Vue.extend({
	mixins: [PassphraseFieldScore, PassphraseFieldEyeButton],
	template: "#passphrase-field-template",
	props: {
		passphrase: {
			type: String,
			required: true
		}
	},
	computed: {
		passphraseFieldType() {
			return this.isPassphraseVisible ? "text" : "password";
		}
	}
});
