<template lang="jade">
	button.secret-generator-field__gen-mode-dropdown.btn.btn-default.dropdown-toggle(
			type='button', data-toggle='dropdown'
			aria-haspopup='true' aria-expanded='false')
		span.caret
		span.sr-only Toggle Dropdown
	ul.secret-generator-field__gen-mode-dropdown.dropdown-menu
		li(v-for='regExp in alphabetRegExpList',
				v-bind:class='{active: alphabetRegExp === regExp}')
			a(v-on:click='chooseAlphabet(regExp)', href='#') {{regExp}}
		li.divider(role='separator')
		li(v-for='lengthVariant in secretLengthVariantList',
				v-bind:class='{active: secretLengthVariant === lengthVariant}')
			a(v-on:click='chooseSecretLength(lengthVariant)', href='#') {{lengthVariant.label}}
</template>

<script>
	import {ALPHABET_REGEXP_LIST, SECRET_LENGTH_VARIANT_LIST} from "./gen-modes-definition";

	export default {
		props: {
			alphabetRegExp: {
				type: RegExp,
				required: true
			},
			secretLengthVariant: {
				required: true
			}
		},
		data() {
			return {
				alphabetRegExpList: ALPHABET_REGEXP_LIST,
				secretLengthVariantList: SECRET_LENGTH_VARIANT_LIST
			};
		},
		methods: {
			chooseAlphabet(alphabetRegExp) {
				this.alphabetRegExp = alphabetRegExp;
			},
			chooseSecretLength(secretLengthVariant) {
				this.secretLengthVariant = secretLengthVariant;
			}
		}
	};
</script>
