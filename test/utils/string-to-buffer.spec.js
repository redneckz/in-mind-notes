import {stringToBuffer, bufferToString} from "utils/string-to-buffer";
import chars from "utils/generators/chars";
import randomChars from "utils/generators/random-chars";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[String converter module]", function () {

	let randomStr, randomBuffer;

	beforeEach(function () {
		randomStr = generateRandomStr();
		randomBuffer = stringToBuffer(randomStr);
	});

	describe("stringToBuffer", function () {
		it("should return non-empty ArrayBuffer", function () {
			expect(stringToBuffer(randomStr)).to.be.an.instanceof(ArrayBuffer)
					.and.to.satisfy(buffer => buffer.byteLength > 0);
		});

		it("should throw error in case of invalid argument", function () {
			expect(stringToBuffer).to.throw(Error, /Invalid argument/);
		});
	});

	describe("bufferToString", function () {
		it("should return non-empty string", function () {
			expect(bufferToString(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
		});

		it("should work symmetrically to stringToBuffer", function () {
			expect(bufferToString(randomBuffer)).to.be.equal(randomStr);
		});

		it("should throw error in case of invalid argument", function () {
			expect(bufferToString).to.throw(Error, /Invalid argument/);
		});
	});
});

function generateRandomStr() {
	let abc = [...chars("A", "Z"), ...chars("a", "z"), ...chars("0", "9")];
	return [...randomChars(10, abc)].join("");
}
