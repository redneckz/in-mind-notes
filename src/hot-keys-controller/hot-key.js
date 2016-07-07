import Vue from "vue";

const KEY_FIELD = Symbol();
const DESCRIPTION_FIELD = Symbol();
const HANDLE_METHOD = Symbol();

export default class HotKey { // enum
	static get values() {
		return [HotKey.PASSPHRASE_ENTER_HOT_KEY,
				HotKey.PUBLIC_KEY_CHOOSE_HOT_KEY,
				HotKey.SECRET_GENERATION_HOT_KEY];
	}

	static get PASSPHRASE_ENTER_HOT_KEY() {
		return new HotKey({
			key: "P",
			description: "Enter passphrase",
			handle(indexPage) {
				let secretForm = indexPage.$refs.secretForm,
					passphraseField = secretForm.$refs.passphraseField;
				passphraseField.$el.querySelector("input").select();
			}
		});
	}

	static get PUBLIC_KEY_CHOOSE_HOT_KEY() {
		return new HotKey({
			key: "K",
			description: "Choose public key",
			handle(indexPage) {
				let secretForm = indexPage.$refs.secretForm;
				secretForm.isDirectMode = true;
				Vue.nextTick(function () {
					let publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
					publicKeyReaderField.$el.querySelector("input").select();
				});
			}
		});
	}

	static get SECRET_GENERATION_HOT_KEY() {
		return new HotKey({
			key: "R",
			description: "Generate new secret",
			handle(indexPage) {
				let secretForm = indexPage.$refs.secretForm;
				secretForm.isDirectMode = false;
				Vue.nextTick(function () {
					let secretGeneratorField = secretForm.$refs.secretGeneratorField,
						genButton = secretGeneratorField.$refs.genButton;
					genButton.generateSecret();
				});
			}
		});
	}

	constructor({key, description, handle}) {
		this[KEY_FIELD] = key;
		this[DESCRIPTION_FIELD] = description;
		this[HANDLE_METHOD] = handle;
	}

	get key() {
		return this[KEY_FIELD];
	}

	get description() {
		return this[DESCRIPTION_FIELD];
	}

	isActivated(event) {
		return (event.metaKey || event.ctrlKey) && event.altKey && (this.key === event.key.toUpperCase());
	}

	handle(event) {
		this[HANDLE_METHOD].call(this, event);
	}
}
