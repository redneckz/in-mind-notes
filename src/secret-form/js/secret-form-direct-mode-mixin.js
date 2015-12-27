import {computeSecret} from "./crypto.js";
import {bufferToString} from "../../utils/string-to-buffer.js";
import {base64ToBuffer} from "../../utils/buffer-to-base64.js";

import PublicKeyReaderField from "../public-key-reader-field/public-key-reader-field.js";
import SecretField from "../secret-field/secret-field.js";

export default {
	data: {
		chosenPublicKey: "",
		chosenPublicKeyName: "",
		computedSecret: "",
		secretComputationError: undefined
	},
	watch: {
		"passphrase + chosenPublicKey": "updateComputedSecret"
	},
	methods: {
		updateComputedSecret: function () {
			if (this.passphrase && this.chosenPublicKey) {
				try {
					computeSecret(this.passphrase, base64ToBuffer(this.chosenPublicKey)).then(secret => {
						this.computedSecret = bufferToString(secret);
						this.secretComputationError = undefined;
					}).catch(handleComputationError.bind(this));
				} catch (ex) {
					handleComputationError.call(this, ex);
				}
			} else {
				this.computedSecret = "";
				this.secretComputationError = undefined;
			}

			function handleComputationError(ex) {
				console.warn(ex);
				this.computedSecret = "";
				this.secretComputationError = ex;
			}
		}
	},
	components: {
		"public-key-reader-field": PublicKeyReaderField,
		"secret-field": SecretField
	}
};
