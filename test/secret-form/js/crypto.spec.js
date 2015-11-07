import {computeSecret, computePublicKey} from "./crypto.js";
import {stringToBuffer, bufferToString} from "../../utils/string-to-buffer.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[Crypto module]", function () {

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
});
