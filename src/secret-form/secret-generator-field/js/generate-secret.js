import chars from "../../../utils/generators/chars.js";
import randomChars from "../../../utils/generators/random-chars.js";

export {generateSecret, filterAlphabet};

const ABC = [...chars("!", "~")];

function generateSecret(length, alphabet = ABC) {
	return [...randomChars(length, alphabet)].join("");
}

function filterAlphabet(regExp, alphabet = ABC) {
	return alphabet.filter(char => regExp.test(char));
}
