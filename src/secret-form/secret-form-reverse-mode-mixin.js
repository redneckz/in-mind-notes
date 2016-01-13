import {computePublicKey} from "crypto";
import {stringToBuffer} from "utils/string-to-buffer";
import {bufferToBase64} from "utils/buffer-to-base64";

import SecretGeneratorField from "secret-form/secret-generator-field";
import PublicKeyWriterField from "secret-form/public-key-writer-field";

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
	},
	components: {
		"secret-generator-field": SecretGeneratorField,
		"public-key-writer-field": PublicKeyWriterField
	}
};
