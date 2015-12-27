export default Vue.extend({
	template: "#passphrase-field-template",
	props: {
		passphrase: {
			type: String,
			required: true
		}
	},
	computed: {
		passphraseFieldType: function () {
			return this.isPassphraseVisible ? "text" : "password";
		},
		isBestPassphrase: function () {
			return this.passphraseScore === 4;
		},
		isStrongPassphrase: function () {
			return this.passphraseScore === 3;
		},
		isNormalPassphrase: function () {
			return this.passphraseScore === 2;
		},
		isWeakPassphrase: function () {
			return this.passphraseScore < 2;
		},
		passphraseScorePercentage: function () {
			if (this.passphrase) {
				return Math.round((this.passphraseScore + 1) * 100 / 5);
			} else {
				return 0;
			}
		},
		passphraseScore: function () {
			let passphraseStat = zxcvbn(this.passphrase);
			return passphraseStat.score;
		}
	},
	data: function () {
		return {
			isPassphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility: function () {
			this.isPassphraseVisible = !this.isPassphraseVisible;
		}
	}
});
