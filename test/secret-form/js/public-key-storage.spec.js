import publicKeyStorage from "./public-key-storage.js";

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

	beforeEach(function () {
		window.localStorage.clear();
	});

	it("All saved public keys should be accessible (by entries)", function () {
		publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
		expect(entrtyListToMap(publicKeyStorage.entries))
				.to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
	});

	it("If public key already exists it could be updated (by setPublicKey)", function () {
		let {publicKeyName, publicKey} = PUBLIC_KEY_ENTRY_LIST[0];
		publicKeyStorage.setPublicKey(publicKeyName, publicKey);
		expect(publicKeyStorage.entries).to.have.length(1);
		publicKeyStorage.setPublicKey(publicKeyName, publicKey);
		expect(publicKeyStorage.entries).to.have.length(1);
	});

	it("If public key exists it could be removed (by removePublicKey)", function () {
		publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
		let {publicKeyName} = PUBLIC_KEY_ENTRY_LIST[5];
		publicKeyStorage.removePublicKey(publicKeyName);
		let expectedPublicKeysMap = entrtyListToMap(PUBLIC_KEY_ENTRY_LIST);
		delete expectedPublicKeysMap[publicKeyName];
		expect(entrtyListToMap(publicKeyStorage.entries)).to.deep.equal(expectedPublicKeysMap);
	});
});

function entrtyListToMap(entryList) {
	return _(entryList).indexBy("publicKeyName").mapValues("publicKey").value();
}