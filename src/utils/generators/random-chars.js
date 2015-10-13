export default function* randomChars(count, abc) {
  let indices = new Uint16Array(count);
  window.crypto.getRandomValues(indices);
  yield* [...indices].map(index => abc[index % abc.length]);
}
