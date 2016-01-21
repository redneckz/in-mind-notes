import HOT_KEYS_LIST from "./hot-keys-list";

export default Vue.extend({
	template: "#hot-keys-section-template",
	data() {
		return {
			hotKeysList: HOT_KEYS_LIST
		};
	}
});
