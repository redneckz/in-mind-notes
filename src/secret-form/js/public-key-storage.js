const STORAGE_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";

class PublicKeyStorage {
	constructor(storage) {
		this.storage = storage;
	}

	get entries() {
		return loadEntries.call(this);
	}

	set entries(newEntries) {
		saveEntries.call(this, newEntries);
	}

	getPublicKey(publicKeyName) {
		return this.storage.getItem(computeStorageKeyName(publicKeyName));
	}

	setPublicKey(publicKeyName, publicKey) {
		return this.storage.setItem(computeStorageKeyName(publicKeyName), publicKey);
	}

	removePublicKey(publicKeyName) {
		this.storage.removeItem(computeStorageKeyName(publicKeyName));
	}
}

export default new PublicKeyStorage(window.localStorage);

function loadEntries() {
	let result = [];
	for (let i = 0; i < this.storage.length; i++) {
		let storageKeyName = this.storage.key(i);
		if (isAppropriateStorageKeyName(storageKeyName)) {
			let publicKeyName = computePublicKeyName(storageKeyName);
			let publicKey = this.storage.getItem(storageKeyName);
			result.push({publicKeyName, publicKey});
		}
	}
	return result;
}

function saveEntries(newEntries) {
	if (newEntries) {
		newEntries.forEach(saveEntry.bind(this));
	}
}

function saveEntry(newEntry) {
	if (newEntry) {
		let {publicKeyName, publicKey} = newEntry;
		this.storage.setItem(computeStorageKeyName(publicKeyName), publicKey);
	}
}

function isAppropriateStorageKeyName(storageKeyName) {
	return _.startsWith(storageKeyName, STORAGE_KEY_PREFIX);
}

function computeStorageKeyName(publicKeyName) {
	return (STORAGE_KEY_PREFIX + publicKeyName);
}

function computePublicKeyName(storageKeyName) {
	return storageKeyName.substring(STORAGE_KEY_PREFIX.length);
}
