<template lang="jade">
	.passphrase-field__score.progress
		.progress-bar.progress-bar-striped(
				role='progressbar', aria-valuemin='0', aria-valuemax='100',
				v-bind:aria-valuenow='passphraseScorePercentage',
				v-bind:class='{"progress-bar-success": isBestPassphrase || isStrongPassphrase, "progress-bar-warning": isNormalPassphrase, "progress-bar-danger": isWeakPassphrase}',
				v-bind:style='{width: passphraseScorePercentage + "%"}')
</template>

<style lang="less">
	.passphrase-field__score {
		height: 0.4em;
		margin-top: 1px;

		& > .progress-bar {
			transition-property: width, background-color;
		}
	}
</style>

<script>
	import zxcvbn from "zxcvbn";

	export default {
		props: {
			passphrase: {
				type: String,
				required: true
			}
		},
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
</script>
