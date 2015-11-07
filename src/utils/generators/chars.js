export default function* chars(fromChar, toChar) {
	for (let char = fromChar; char <= toChar; char = String.fromCharCode(char.charCodeAt(0) + 1)) {
		yield char;
	}
}
