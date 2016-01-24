import HotKey from "./hot-key";

export default Vue.extend({
	template: "#hot-keys-section-template",
	data() {
		return {
			hotKeysList: HotKey.values
		};
	}
});
