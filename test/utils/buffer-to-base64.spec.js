import {bufferToBase64, base64ToBuffer} from "./buffer-to-base64.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("bufferToBase64", function () {

  let randomBuffer;

  beforeEach(function () {
    randomBuffer = generateRandomBuffer();
  });

	it("should return string", function () {
    expect(bufferToBase64(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
	});
});

describe("base64ToBuffer", function () {

  let randomBuffer;

  beforeEach(function () {
    randomBuffer = generateRandomBuffer();
  });

	it("should work symmetrically to bufferToBase64", function () {
    let buffer = base64ToBuffer(bufferToBase64(randomBuffer));
    expect(toArray(buffer)).to.deep.equal(toArray(randomBuffer));
	});
});

function generateRandomBuffer() {
  let result = new Uint8Array(10);
  window.crypto.getRandomValues(result);
  return result.buffer;
}

function toArray(buffer) {
  return [...new Uint8Array(buffer)];
}
