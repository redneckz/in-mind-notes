import {stringToBuffer, bufferToString} from "./string-to-buffer.js";

export {bufferToBase64, base64ToBuffer};

function bufferToBase64(buffer) {
	if (!(buffer instanceof ArrayBuffer)) {
		throw new Error("Invalid argument. ArrayBuffer is expected");
	}
	if (buffer.byteLength === 0) {
		return "";
	}
	return btoa(bufferToString(buffer, Uint8Array));
}

function base64ToBuffer(base64) {
	if (!_.isString(base64)) {
		throw new Error("Invalid argument. String is expected");
	}
	if (!base64) {
		return new ArrayBuffer(0);
	}
	return stringToBuffer(atob(base64), Uint8Array);
}
