import {generateSecret} from "./generate-secret.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("generateSecret", function () {

	const SECRET_LEN = 10;

	it("should return string with exact length", function () {
		expect(generateSecret(SECRET_LEN)).to.be.a("string")
				.and.to.have.length(SECRET_LEN);
	});

	it("should return alphanumeric string", function () {
		expect(generateSecret(SECRET_LEN)).to.match(/^[A-Za-z0-9]+$/);
	});
});
