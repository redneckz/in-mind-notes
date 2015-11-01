export default function* randomChars(count, alphabet) {
  let indices = new Uint16Array(count);
  window.crypto.getRandomValues(indices);
  yield* [...indices].map(index => alphabet[index % alphabet.length]);
}
