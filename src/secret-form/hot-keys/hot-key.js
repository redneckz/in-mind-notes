const KEY_CODE_FIELD = Symbol();
const DESCRIPTION_FIELD = Symbol();
const HANDLE_METHOD = Symbol();

export default class HotKey {
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
