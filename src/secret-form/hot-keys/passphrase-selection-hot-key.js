import HotKey from "./hot-key";
import secretForm from "secret-form";

export default new HotKey({
	keyCode: 80, // P
	description: "Select passphrase",
	handle() {
		Vue.nextTick(function () {
			secretForm.$refs.passphraseField.$el.querySelector("input").select();
		});
	}
});
