import {computeSecret, computePublicKey, generateRandomSecret} from "./crypto.js";

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

	const PASSPHRASE = "123456qwerty";
	const SECRET = "asdfg12345";

	it("should work symmetrically to computeSecret", function (done) {
		let publicKeyPromise = computePublicKey(PASSPHRASE, SECRET);
		expect(publicKeyPromise).to.be.fulfilled.and.then(publicKey => {
			let secretPromise = computeSecret(PASSPHRASE, publicKey);
			expect(secretPromise).to.eventually.equal(SECRET).and.notify(done);
		});
	});
});
