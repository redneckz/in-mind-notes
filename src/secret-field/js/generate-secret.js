import chars from "../../utils/generators/chars.js";
import randomChars from "../../utils/generators/random-chars.js";

export {generateSecret};

const DEFAULT_ABC = [...chars("A", "Z"), ...chars("a", "z"), ...chars("0", "9")];

function generateSecret(length, abc = DEFAULT_ABC) {
  return [...randomChars(length, abc)].join("");
}
