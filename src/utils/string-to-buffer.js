export {stringToBuffer, bufferToString};

function stringToBuffer(str) {
  if (!_.isString(str)) {
    throw new Error("Invalid argument. String is expected");
  }
  if (!str) {
    return new ArrayBuffer(0);
  }
  let charCodes = [...str].map(char => char.charCodeAt(0));
  return Uint16Array.from(charCodes).buffer;
}

function bufferToString(buffer) {
  if (!(buffer instanceof ArrayBuffer)) {
    throw new Error("Invalid argument. ArrayBuffer is expected");
  }
  if (buffer.byteLength === 0) {
    return "";
  }
  let array = new Uint16Array(buffer);
  return String.fromCharCode(...array);
}
