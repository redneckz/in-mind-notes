const STORAGE_ITEM_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";
const PK_TO_PK_NAME_MAP_FIELD = Symbol();

class PublicKeyStorage {
	constructor(storage) {
		this.storage = storage;
		initPublicKeyToPublicKeyNameMap.call(this);
	}

	get entries() {
		return getEntries.call(this);
	}

	set entries(newEntries) {
		setEntries.call(this, newEntries);
	}

	getPublicKey(publicKeyName) {
		return getPublicKey.call(this, publicKeyName);
	}

	setPublicKey(publicKeyName, publicKey) {
		setPublicKey.call(this, publicKeyName, publicKey);
	}

	removePublicKey(publicKeyName) {
		removePublicKey.call(this, publicKeyName);
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
	this.storage.removeItem(storageItemKey);
	this[PK_TO_PK_NAME_MAP_FIELD].delete(publicKey);
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
