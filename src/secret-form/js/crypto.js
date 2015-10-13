import {stringToBuffer, bufferToString} from "../../utils/string-to-buffer.js";
import chars from "../../utils/generators/chars.js";
import randomChars from "../../utils/generators/random-chars.js";

export {generateRandomSecret, computeSecret, computePublicKey};

const ALGO = {
  name: "AES-CBC",
  iv: new Uint8Array(16) // filled with zero
};

const DEFAULT_ABC = [...chars("A", "Z"), ...chars("a", "z"), ...chars("0", "9")];

function generateRandomSecret(length, abc = DEFAULT_ABC) {
  return [...randomChars(length, abc)].join("");
}

function computeSecret(passphraseStr, publicKeyStr) {
  let publicKey = stringToBuffer(publicKeyStr);
  return computePrivateKey(passphraseStr)
      .then(privateKey => window.crypto.subtle.decrypt(ALGO, privateKey, publicKey))
      .then(secret => bufferToString(secret));
}

function computePublicKey(passphraseStr, secretStr) {
  let secret = stringToBuffer(secretStr);
  return computePrivateKey(passphraseStr)
      .then(privateKey => window.crypto.subtle.encrypt(ALGO, privateKey, secret))
      .then(publicKey => bufferToString(publicKey));
}

function computePrivateKey(passphraseStr) {
  let passphrase = stringToBuffer(passphraseStr);
  return window.crypto.subtle.digest("SHA-256", passphrase)
      .then(passphraseDigest => window.crypto.subtle
          .importKey("raw", passphraseDigest, "AES-CBC", true, ["encrypt", "decrypt"]));
}
