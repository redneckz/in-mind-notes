import randomChars from "./random-chars.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Random chars generator", function () {

	const RND_SEQUENCE_LEN = 10;

	it("should generate random sequence of specified length", function () {
    expect([...randomChars(RND_SEQUENCE_LEN, "abc")]).to.have.length(RND_SEQUENCE_LEN);
	});

	it("should generate chars from specified alphabet", function () {
		let randomStr = [...randomChars(RND_SEQUENCE_LEN, "abc123")].join("");
    expect(randomStr).to.match(/^[abc123]+$/);
	});
});
