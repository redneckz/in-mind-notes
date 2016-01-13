import {stringToBuffer} from "utils/string-to-buffer";

export {computeSecret, computePublicKey};

const ALGO = {
	name: "AES-CBC",
	iv: new Uint8Array(16) // filled with zero
};

function computeSecret(passphraseStr, publicKey) {
	return computePrivateKey(passphraseStr)
			.then(privateKey => window.crypto.subtle.decrypt(ALGO, privateKey, publicKey));
}

function computePublicKey(passphraseStr, secret) {
	return computePrivateKey(passphraseStr)
			.then(privateKey => window.crypto.subtle.encrypt(ALGO, privateKey, secret));
}

function computePrivateKey(passphraseStr) {
	let passphrase = stringToBuffer(passphraseStr);
	return window.crypto.subtle.digest("SHA-256", passphrase)
			.then(passphraseDigest => window.crypto.subtle
					.importKey("raw", passphraseDigest, "AES-CBC", true, ["encrypt", "decrypt"]));
}
