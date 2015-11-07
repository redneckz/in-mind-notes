const STORAGE_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";

export default class PublicKeyStorage {
	constructor() {
	}

	get entries() {
		return this.findEntries();
	}

	findEntries(publicKeyNamePart) {
		return findPublicKeyNames(publicKeyNamePart).map(createEntry);
	}

	saveEntries(entries) {
		if (!entries || !entries.length) {
			return;
		}
		entries.forEach(this.saveEntry.bind(this));
	}

	saveEntry(entry) {
		if (!entry) {
			return;
		}
		let {publicKeyName, publicKey} = entry;
		window.localStorage.setItem(computeStorageKeyName(publicKeyName), publicKey);
	}

	removeEntry(publicKeyName) {
		window.localStorage.removeItem(computeStorageKeyName(publicKeyName));
	}
}

function findPublicKeyNames(publicKeyNamePart) {
	let result = [];
	for (let i = 0; i < window.localStorage.length; i++) {
		let storageKeyName = window.localStorage.key(i);
		if (!isAppropriateStorageKeyName(storageKeyName)) {
			continue;
		}
		let publicKeyName = computePublicKeyName(storageKeyName);
		if (isPublicKeyNameContainsPart(publicKeyName, publicKeyNamePart)) {
			result.push(publicKeyName);
		}
	}
	return result;
}

function isPublicKeyNameContainsPart(publicKeyName, publicKeyNamePart) {
	return !publicKeyNamePart || (publicKeyName.toLowerCase()
			.indexOf(publicKeyNamePart.toLowerCase()) !== -1);
}

function createEntry(publicKeyName) {
	let publicKey = window.localStorage.getItem(computeStorageKeyName(publicKeyName));
	return {publicKeyName, publicKey};
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
