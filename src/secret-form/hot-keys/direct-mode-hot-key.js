import HotKey from "./hot-key";
import secretForm from "secret-form";

export default new HotKey({
	keyCode: 68, // D
	description: "Direct mode",
	handle() {
		secretForm.isDirectMode = true;
		Vue.nextTick(function () {
			secretForm.$refs.publicKeyReaderField.$el.querySelector("input").select();
		});
	}
});
