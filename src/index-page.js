import SecretForm from "secret-form";
import HotKeysSection from "hot-keys-section";

import HotKeysController from "hot-keys-controller";

export default new Vue({
	el: "body",
	ready() {
		this.hotKeysController = new HotKeysController(this);
	},
	components: {
		"secret-form": SecretForm,
		"hot-keys-section": HotKeysSection
	}
});
