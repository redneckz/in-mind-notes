export {stringToBuffer, bufferToString};

function stringToBuffer(str, ArrayType = Uint16Array) {
  if (!_.isString(str)) {
    throw new Error("Invalid argument. String is expected");
  }
  if (!str) {
    return new ArrayBuffer(0);
  }
  let charCodes = [...str].map(char => char.charCodeAt(0));
  return ArrayType.from(charCodes).buffer;
}

function bufferToString(buffer, ArrayType = Uint16Array) {
  if (!(buffer instanceof ArrayBuffer)) {
    throw new Error("Invalid argument. ArrayBuffer is expected");
  }
  if (buffer.byteLength === 0) {
    return "";
  }
  let array = new ArrayType(buffer);
  return String.fromCharCode(...array);
}
