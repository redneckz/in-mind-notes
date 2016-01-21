import HotKey from "./hot-key";
import secretForm from "secret-form";

export default new HotKey({
	keyCode: 82, // R
	description: "Generate new secret",
	handle() {
		secretForm.isDirectMode = false;
		secretForm.$refs.secretGeneratorField.generateSecret();
	}
});
