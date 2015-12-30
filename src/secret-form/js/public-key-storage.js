const STORAGE_ITEM_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";
const PK_TO_PK_NAME_MAP_FIELD = Symbol();
const OBSERVERS_FIELD = Symbol();

class PublicKeyStorage {
	constructor(storage) {
		this.storage = storage;
		this[OBSERVERS_FIELD] = new Set();
		initPublicKeyToPublicKeyNameMap.call(this);
	}

	get entries() {
		return getEntries.call(this);
	}

	set entries(newEntries) {
		setEntries.call(this, newEntries);
		notifyObservers.call(this);
	}

	getPublicKey(publicKeyName) {
		return getPublicKey.call(this, publicKeyName);
	}

	setPublicKey(publicKeyName, publicKey) {
		setPublicKey.call(this, publicKeyName, publicKey);
		notifyObservers.call(this);
	}

	removePublicKey(publicKeyName) {
		removePublicKey.call(this, publicKeyName);
		notifyObservers.call(this);
	}

	doesPublicKeyNameExist(publicKeyName) {
		return Boolean(this.getPublicKey(publicKeyName));
	}

	doesPublicKeyExist(publicKey) {
		return this[PK_TO_PK_NAME_MAP_FIELD].has(publicKey);
	}

	getPublicKeyName(publicKey) {
		return this[PK_TO_PK_NAME_MAP_FIELD].get(publicKey);
	}

	observe(observer) {
		this[OBSERVERS_FIELD].add(observer);
		return function unobserve() {
			this[OBSERVERS_FIELD].delete(observer);
		}.bind(this);
	}
}

export default new PublicKeyStorage(window.localStorage);

function initPublicKeyToPublicKeyNameMap() {
	this[PK_TO_PK_NAME_MAP_FIELD] = new Map();
	this.entries.forEach(entry => {
		this[PK_TO_PK_NAME_MAP_FIELD].set(entry.publicKey, entry.publicKeyName);
	});
}

function getEntries() {
	let result = [];
	for (let i = 0; i < this.storage.length; i++) {
		let storageItemKey = this.storage.key(i);
		if (isAppropriateStorageItemKey(storageItemKey)) {
			let publicKeyName = toPublicKeyName(storageItemKey);
			let publicKey = this.storage.getItem(storageItemKey);
			result.push({publicKeyName, publicKey});
		}
	}
	return result;
}

function setEntries(newEntries) {
	if (newEntries) {
		newEntries.forEach(entry => {
			setPublicKey.call(this, entry.publicKeyName, entry.publicKey);
		});
	}
}

function getPublicKey(publicKeyName) {
	return this.storage.getItem(toStorageItemKey(publicKeyName));
}

function setPublicKey(publicKeyName, publicKey) {
	if (publicKeyName && publicKey) {
		if (this[PK_TO_PK_NAME_MAP_FIELD].has(publicKey)) {
			let oldPublicKeyName = this[PK_TO_PK_NAME_MAP_FIELD].get(publicKey);
			removePublicKey.call(this, oldPublicKeyName);
		}
		this.storage.setItem(toStorageItemKey(publicKeyName), publicKey);
		this[PK_TO_PK_NAME_MAP_FIELD].set(publicKey, publicKeyName);
	}
}

function removePublicKey(publicKeyName) {
	let storageItemKey = toStorageItemKey(publicKeyName);
	let publicKey = this.storage.getItem(storageItemKey);
	if (publicKey) {
		this.storage.removeItem(storageItemKey);
		this[PK_TO_PK_NAME_MAP_FIELD].delete(publicKey);
	}
}

function notifyObservers() {
	this[OBSERVERS_FIELD].forEach(observer => observer.call(this));
}

function isAppropriateStorageItemKey(storageItemKey) {
	return _.startsWith(storageItemKey, STORAGE_ITEM_KEY_PREFIX);
}

function toStorageItemKey(publicKeyName) {
	return (STORAGE_ITEM_KEY_PREFIX + publicKeyName);
}

function toPublicKeyName(storageItemKey) {
	return storageItemKey.substring(STORAGE_ITEM_KEY_PREFIX.length);
}
