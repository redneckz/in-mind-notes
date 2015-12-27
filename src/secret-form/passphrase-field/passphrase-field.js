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
			return this.passphraseVisible ? "text" : "password";
		},
		passphraseBest: function () {
			return this.passphraseScore === 4;
		},
		passphraseStrong: function () {
			return this.passphraseScore === 3;
		},
		passphraseNormal: function () {
			return this.passphraseScore === 2;
		},
		passphraseWeak: function () {
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
			passphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility: function () {
			this.passphraseVisible = !this.passphraseVisible;
		}
	}
});
