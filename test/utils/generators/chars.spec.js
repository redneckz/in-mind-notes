import chars from "./chars.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[Chars generator module]", function () {

	it("Should return valid alphabetic range", function () {
		expect([...chars("A", "C")]).to.deep.equal(["A", "B", "C"]);
	});

	it("Should return valid numeric range", function () {
		expect([...chars("1", "3")]).to.deep.equal(["1", "2", "3"]);
	});
});
