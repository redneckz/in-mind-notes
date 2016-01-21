import HotKey from "./hot-key";
import secretForm from "secret-form";

export default new HotKey({
	keyCode: 73, // I
	description: "Import public keys from file",
	handle() {
		Vue.nextTick(function () {
			secretForm.$refs.publicKeyReaderField.openFileChooserForImport();
		});
	}
});
