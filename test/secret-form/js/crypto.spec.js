import {computeSecret, computePublicKey, generateRandomSecret} from "./crypto.js";
import {stringToBuffer, bufferToString} from "../../utils/string-to-buffer.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("generateRandomSecret", function () {

	const SECRET_LEN = 10;

	it("should return string with exact length", function () {
		expect(generateRandomSecret(SECRET_LEN)).to.be.a("string")
				.and.to.have.length(SECRET_LEN);
	});

	it("should return alphanumeric string", function () {
		expect(generateRandomSecret(SECRET_LEN)).to.match(/^[A-Za-z0-9]+$/);
	});
});

describe("computePublicKey", function () {

	const PASSPHRASE_STR = "123456qwerty";
	const SECRET_STR = "asdfg12345";

	it("should work symmetrically to computeSecret", function () {
		let secret = stringToBuffer(SECRET_STR);
		return expect(computePublicKey(PASSPHRASE_STR, secret)
				.then(publicKey => computeSecret(PASSPHRASE_STR, publicKey))
				.then(bufferToString)).to.eventually.equal(SECRET_STR);
	});
});
