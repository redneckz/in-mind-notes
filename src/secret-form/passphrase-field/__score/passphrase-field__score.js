export default {
	computed: {
		isBestPassphrase() {
			return this.passphraseScore === 4;
		},
		isStrongPassphrase() {
			return this.passphraseScore === 3;
		},
		isNormalPassphrase() {
			return this.passphraseScore === 2;
		},
		isWeakPassphrase() {
			return this.passphraseScore < 2;
		},
		passphraseScorePercentage() {
			if (this.passphrase) {
				return Math.round((this.passphraseScore + 1) * 100 / 5);
			} else {
				return 0;
			}
		},
		passphraseScore() {
			let passphraseStat = zxcvbn(this.passphrase);
			return passphraseStat.score;
		}
	}
};
