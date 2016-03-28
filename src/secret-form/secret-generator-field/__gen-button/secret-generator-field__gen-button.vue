<template lang="jade">
	button.secret-generator-field__gen-button.btn.btn-default(v-on:click='generateSecret',
			data-step-index='2',
			type='button', tabindex='-1')
		span.glyphicon.glyphicon-random
</template>

<script>
	import chars from "utils/generators/chars";
	import randomChars from "utils/generators/random-chars";

	const ABC = [...chars("!", "~")];

	export default {
		props: {
			secret: {
				type: String,
				required: true
			},
			alphabetRegExp: {
				type: RegExp,
				required: true
			},
			secretLength: {
				type: Number,
				required: true
			}
		},
		watch: {
			"alphabetRegExp + secretLength": function () {
				this.generateSecret();
			}
		},
		methods: {
			generateSecret() {
				let filteredABC = ABC.filter(char => this.alphabetRegExp.test(char));
				this.secret = [...randomChars(this.secretLength, filteredABC)].join("");
			}
		}
	};
</script>
