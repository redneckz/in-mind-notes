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

	const PUBLIC_KEY = PUBLIC_KEY_ENTRY_LIST[0];

	beforeEach(function () {
		window.localStorage.clear();
	});

	it("All saved public keys should be accessible (by entries)", function () {
		publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
		expect(entrtyListToMap(publicKeyStorage.entries))
				.to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
	});

	it("If public key with such name already exists it could be updated (by setPublicKey)", function () {
		let {publicKeyName, publicKey} = PUBLIC_KEY;
		publicKeyStorage.setPublicKey(publicKeyName, publicKey);
		expect(publicKeyStorage.entries).to.have.length(1);
		expect(publicKeyStorage.getPublicKey(publicKeyName)).to.equal(publicKey);
		publicKeyStorage.setPublicKey(publicKeyName, "new-public-key");
		expect(publicKeyStorage.entries).to.have.length(1);
		expect(publicKeyStorage.getPublicKey(publicKeyName)).to.equal("new-public-key");
	});

	it("If public key already exists it could be renamed (by setPublicKey)", function () {
		let {publicKeyName, publicKey} = PUBLIC_KEY;
		publicKeyStorage.setPublicKey(publicKeyName, publicKey);
		expect(publicKeyStorage.entries).to.have.length(1);
		expect(publicKeyStorage.getPublicKey(publicKeyName)).to.equal(publicKey);
		expect(publicKeyStorage.setPublicKey("new-name", publicKey)).to.equal(publicKeyName);
		expect(publicKeyStorage.entries).to.have.length(1);
		expect(publicKeyStorage.getPublicKey("new-name")).to.equal(publicKey);
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
