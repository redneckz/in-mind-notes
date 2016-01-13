import {computeSecret} from "crypto";
import {bufferToString} from "utils/string-to-buffer";
import {base64ToBuffer} from "utils/buffer-to-base64";

import PublicKeyReaderField from "secret-form/public-key-reader-field";
import SecretField from "secret-form/secret-field";

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
