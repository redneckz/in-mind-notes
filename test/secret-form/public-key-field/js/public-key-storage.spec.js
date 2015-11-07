import PublicKeyStorage from "./public-key-storage.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[Public key storage module]", function () {

	const PUBLIC_KEY_ENTRY_LIST = [
		{publicKeyName: "foo", publicKey: "123456"},
		{publicKeyName: "Foo", publicKey: "654321"},
		{publicKeyName: "bar", publicKey: "qwerty"},
		{publicKeyName: "bAr", publicKey: "ytrewq"},
		{publicKeyName: "baz", publicKey: "asdfgh"},
		{publicKeyName: "baZ", publicKey: "hgfdsa"},
		{publicKeyName: "qux", publicKey: "zxcvbn"},
		{publicKeyName: "QUX", publicKey: "nbvcxz"}
	];

	let publicKeyStorage;

	beforeEach(function () {
		window.localStorage.clear();
		publicKeyStorage = new PublicKeyStorage();
	});

	it("All saved public keys should be accessible (saveEntry)", function () {
		publicKeyStorage.saveEntry(PUBLIC_KEY_ENTRY_LIST[0]);
		expect(publicKeyStorage.entries).to.have.length(1)
				.and.deep.equal([PUBLIC_KEY_ENTRY_LIST[0]]);
		publicKeyStorage.saveEntry(PUBLIC_KEY_ENTRY_LIST[1]);
		expect(publicKeyStorage.entries).to.have.length(2);
	});

	it("All saved public keys should be accessible (saveEntries)", function () {
		publicKeyStorage.saveEntries(PUBLIC_KEY_ENTRY_LIST);
		expect(entrtyListToMap(publicKeyStorage.entries))
				.to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
	});

	it("If entry already exists it should be rewrited (saveEntry)", function () {
		publicKeyStorage.saveEntry(PUBLIC_KEY_ENTRY_LIST[0]);
		expect(publicKeyStorage.entries).to.have.length(1);
		publicKeyStorage.saveEntry(PUBLIC_KEY_ENTRY_LIST[0]);
		expect(publicKeyStorage.entries).to.have.length(1);
	});

	it("Search by public key name should be case insensitive (findEntries)", function () {
		publicKeyStorage.saveEntries(PUBLIC_KEY_ENTRY_LIST);
		expect(entrtyListToMap(publicKeyStorage.findEntries("FOO")))
				.to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST.slice(0, 2)));
	});
});

function entrtyListToMap(entryList) {
	return _(entryList).indexBy("publicKeyName").mapValues("publicKey").value();
}
