import publicKeyStorage from "public-key-storage";

chai.config.includeStack = true;

let expect = chai.expect;

describe("[Public key storage module]", function () {

	describe("publicKeyStorage", function () {
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

		describe("entries", function () {
			it("should represent all public keys", function () {
				publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
				expect(entrtyListToMap(publicKeyStorage.entries))
						.to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
			});
		});

		describe("isEmpty", function () {
			it("should reflect the absence of public keys", function () {
				expect(publicKeyStorage.isEmpty).to.equal(true);
				publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
				expect(publicKeyStorage.isEmpty).to.equal(false);
			});
		});

		describe("isNotEmpty", function () {
			it("should reflect the presence of public keys", function () {
				expect(publicKeyStorage.isNotEmpty).to.equal(false);
				publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
				expect(publicKeyStorage.isNotEmpty).to.equal(true);
			});
		});

		describe("setPublicKey", function () {
			it("should store public key", function () {
				let {publicKeyName, publicKey} = PUBLIC_KEY;
				publicKeyStorage.setPublicKey(publicKeyName, publicKey);
				expect(publicKeyStorage.entries).to.deep.equal([PUBLIC_KEY]);
			});

			it("should replace public key with same name", function () {
				let {publicKeyName, publicKey} = PUBLIC_KEY;
				publicKeyStorage.setPublicKey(publicKeyName, publicKey);
				publicKeyStorage.setPublicKey(publicKeyName, "new-public-key");
				let expectedPublicKey = {publicKeyName, publicKey: "new-public-key"};
				expect(publicKeyStorage.entries).to.deep.equal([expectedPublicKey]);
			});

			it("should rename public key entry with same public key inside", function () {
				let {publicKeyName, publicKey} = PUBLIC_KEY;
				publicKeyStorage.setPublicKey(publicKeyName, publicKey);
				publicKeyStorage.setPublicKey("new-name", publicKey);
				let expectedPublicKey = {publicKeyName: "new-name", publicKey};
				expect(publicKeyStorage.entries).to.deep.equal([expectedPublicKey]);
			});
		});

		describe("removePublicKey", function () {
			it("should remove public key by name", function () {
				publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
				let {publicKeyName} = PUBLIC_KEY_ENTRY_LIST[5];
				publicKeyStorage.removePublicKey(publicKeyName);
				let expectedPublicKeysMap = entrtyListToMap(PUBLIC_KEY_ENTRY_LIST);
				delete expectedPublicKeysMap[publicKeyName];
				expect(entrtyListToMap(publicKeyStorage.entries)).to.deep.equal(expectedPublicKeysMap);
			});
		});

		it("should notify observers on entries update", function () {
			let observer = chai.spy();
			publicKeyStorage.observe(observer);
			publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
			expect(observer).to.have.been.called.once();
		});

		it("should notify observers on setPublicKey", function () {
			let observer = chai.spy();
			publicKeyStorage.observe(observer);
			let {publicKeyName, publicKey} = PUBLIC_KEY;
			publicKeyStorage.setPublicKey(publicKeyName, publicKey);
			expect(observer).to.have.been.called.once();
		});

		it("should notify observers on removePublicKey", function () {
			let observer = chai.spy();
			publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
			publicKeyStorage.observe(observer);
			expect(observer).to.not.have.been.called();
			let {publicKeyName} = PUBLIC_KEY_ENTRY_LIST[5];
			publicKeyStorage.removePublicKey(publicKeyName);
			expect(observer).to.have.been.called.once();
		});

		it("should NOT notify abandoned observers", function () {
			let observer = chai.spy();
			let unobserve = publicKeyStorage.observe(observer);
			unobserve();
			publicKeyStorage.entries = PUBLIC_KEY_ENTRY_LIST;
			expect(observer).to.not.have.been.called();
		});
	});
});

function entrtyListToMap(entryList) {
	return _(entryList).indexBy("publicKeyName").mapValues("publicKey").value();
}
