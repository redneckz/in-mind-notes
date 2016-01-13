import {generateSecret, filterAlphabet} from "secret-form/secret-generator-field/generate-secret";
import chars from "utils/generators/chars";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[Secret generator module]", function () {

	describe("filterAlphabet", function () {
		it("should reduce alphabet according to regular expression", function () {
			expect(filterAlphabet(/[A-Z]/)).to.deep.equal([...chars("A", "Z")]);
		});
	});

	describe("generateSecret", function () {

		const SECRET_LEN = 10;

		it("should return string with exact length", function () {
			expect(generateSecret(SECRET_LEN)).to.be.a("string")
					.and.to.have.length(SECRET_LEN);
		});

		it("should generate chars from specified alphabet", function () {
			expect(generateSecret(SECRET_LEN, filterAlphabet(/[A-Z]/))).to.match(/^[A-Z]+$/);
		});
	});

});
