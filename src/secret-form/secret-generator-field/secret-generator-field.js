import {generateSecret, filterAlphabet} from "secret-form/secret-generator-field/generate-secret";

const DEFAULT_ALPHABET_REGEXP = /[0-9a-zA-Z_]/;
const DEFAULT_SECRET_LENGTH_VARIANT = {secretLength: 16, label: "Medium"};

export default Vue.extend({
	template: "#secret-generator-field-template",
	props: {
		secret: {
			type: String,
			required: true
		},
		title: {
			type: String,
			default: "Secret"
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	data() {
		return {
			alphabetRegExpList: [/[0-9a-zA-Z~!@#$%^&*_=]/, DEFAULT_ALPHABET_REGEXP, /[0-9a-z_]/, /[0-9]/],
			currentAlphabetRegExp: DEFAULT_ALPHABET_REGEXP,
			secretLengthVariantList: [
				{secretLength: 8, label: "Short"},
				DEFAULT_SECRET_LENGTH_VARIANT,
				{secretLength: 32, label: "Long"}
			],
			currentSecretLengthVariant: DEFAULT_SECRET_LENGTH_VARIANT
		};
	},
	methods: {
		generateSecret() {
			let alphabet = filterAlphabet(this.currentAlphabetRegExp);
			this.secret = generateSecret(this.currentSecretLengthVariant.secretLength, alphabet);
			Vue.nextTick(this.selectSecret.bind(this));
		},
		chooseAlphabet(alphabetRegExp) {
			this.currentAlphabetRegExp = alphabetRegExp;
			this.generateSecret();
		},
		chooseSecretLength(secretLengthVariant) {
			this.currentSecretLengthVariant = secretLengthVariant;
			this.generateSecret();
		},
		selectSecret() {
			this.$el.querySelector("input").select();
		}
	}
});
