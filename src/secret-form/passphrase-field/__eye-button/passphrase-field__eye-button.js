export default {
	data() {
		return {
			isPassphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility() {
			this.isPassphraseVisible = !this.isPassphraseVisible;
		}
	}
};
