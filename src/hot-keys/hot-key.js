const KEY_CODE_FIELD = Symbol();
const DESCRIPTION_FIELD = Symbol();
const HANDLE_METHOD = Symbol();

export default class HotKey { // enum
	static get values() {
		return [HotKey.PASSPHRASE_SELECTION_HOT_KEY,
				HotKey.SECRET_GENERATION_HOT_KEY,
				HotKey.IMPORT_PUBLIC_KEYS_HOT_KEY,
				HotKey.EXPORT_PUBLIC_KEYS_HOT_KEY];
	}

	static get PASSPHRASE_SELECTION_HOT_KEY() {
		return new HotKey({
			keyCode: 80, // P
			description: "Select passphrase",
			handle(indexPage) {
				Vue.nextTick(function () {
					let secretForm = indexPage.$refs.secretForm,
						passphraseField = secretForm.$refs.passphraseField;
					passphraseField.$el.querySelector("input").select();
				});
			}
		});
	}

	static get SECRET_GENERATION_HOT_KEY() {
		return new HotKey({
			keyCode: 82, // R
			description: "Generate new secret",
			handle(indexPage) {
				let secretForm = indexPage.$refs.secretForm,
					secretGeneratorField = secretForm.$refs.secretGeneratorField;
				secretForm.isDirectMode = false;
				secretGeneratorField.generateSecret();
			}
		});
	}

	static get IMPORT_PUBLIC_KEYS_HOT_KEY() {
		return new HotKey({
			keyCode: 73, // I
			description: "Import public keys from file",
			handle(indexPage) {
				Vue.nextTick(function () {
					let secretForm = indexPage.$refs.secretForm,
						publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
					publicKeyReaderField.openFileChooserForImport();
				});
			}
		});
	}

	static get EXPORT_PUBLIC_KEYS_HOT_KEY() {
		return new HotKey({
			keyCode: 69, // E
			description: "Export public keys to file",
			handle(indexPage) {
				Vue.nextTick(function () {
					let secretForm = indexPage.$refs.secretForm,
						publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
					publicKeyReaderField.exportPublicKeys();
				});
			}
		});
	}

	constructor({keyCode, description, handle}) {
		this[KEY_CODE_FIELD] = keyCode;
		this[DESCRIPTION_FIELD] = description;
		this[HANDLE_METHOD] = handle;
	}

	get keyCode() {
		return this[KEY_CODE_FIELD];
	}

	get char() {
		return String.fromCharCode(this.keyCode);
	}

	get description() {
		return this[DESCRIPTION_FIELD];
	}

	isActivated(event) {
		return (event.metaKey || event.ctrlKey) && event.altKey && (this.keyCode === event.which);
	}

	handle(event) {
		this[HANDLE_METHOD].call(this, event);
	}
}
