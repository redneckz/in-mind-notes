import {computePublicKey} from "./crypto.js";
import {stringToBuffer} from "../../utils/string-to-buffer.js";
import {bufferToBase64} from "../../utils/buffer-to-base64.js";

export default {
	data: {
		generatedSecret: "",
		enteredPublicKeyName: "",
		computedPublicKey: "",
		publicKeyComputationError: undefined
	},
	watch: {
		"passphrase + generatedSecret": "updateComputedPublicKey"
	},
	methods: {
		updateComputedPublicKey: function () {
			if (this.passphrase && this.generatedSecret) {
				try {
					computePublicKey(this.passphrase, stringToBuffer(this.generatedSecret)).then(publicKey => {
						this.computedPublicKey = bufferToBase64(publicKey);
						this.publicKeyComputationError = undefined;
					}).catch(handleComputationError.bind(this));
				} catch (ex) {
					handleComputationError.call(this, ex);
				}
			} else {
				this.computedPublicKey = "";
				this.publicKeyComputationError = undefined;
			}

			function handleComputationError(ex) {
				console.warn(ex);
				this.computedPublicKey = "";
				this.publicKeyComputationError = ex;
			}
		}
	}
};
