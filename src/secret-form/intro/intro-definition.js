import publicKeyStorage from "public-key-storage";

export default {
	showBullets: false,
	showProgress: true,
	showButtons: true,
	scrollToElement: true,
	showStepNumbers: false,
	keyboardNavigation: false,
	steps: prepareIntroSteps([
		{
			intro: `<strong>In Mind Notes</strong> is here to help you keep your secrets
					in the most safe place... <strong>in your mind</strong>.`
		},
		{
			intro: `Please think up <strong>the strongest passphrase</strong> you can remember.`,
			position: "bottom",
			postProcess() {
				if (!this.passphrase) {
					this.passphrase = "qwerty";
				}
			}
		},
		{
			intro: `Generate <strong>your secret</strong>
					to use it in any <strong>service</strong> you want:
					mail, social network, online banking, ...`,
			position: "right",
			init(stepInitSPI) {
				return this.$watch("generatedSecret", generatedSecret => {
					if (stepInitSPI.isCurrentStep && generatedSecret) {
						stepInitSPI.nextStep();
					}
				});
			},
			preProcess() {
				this.isDirectMode = false;
			},
			postProcess() {
				if (!this.generatedSecret) {
					this.generatedSecret = "asdfgh";
				}
			}
		},
		{
			intro: `<strong>Secret</strong> has been generated. Here it is.
					It can be used as very strong password. Let's go to the next step.`,
			position: "bottom",
			preProcess() {
				this.isDirectMode = false;
			},
			postProcess() {
				if (!this.generatedSecret) {
					this.generatedSecret = "asdfgh";
				}
			}
		},
		{
			intro: `Name your secret. Appropriate service name is the better choice.
					For example <strong>facebook</strong> or <strong>mail.ru</strong>.`,
			position: "top",
			preProcess() {
				this.isDirectMode = false;
			},
			postProcess() {
				if (!this.enteredPublicKeyName) {
					this.enteredPublicKeyName = "noname";
				}
			}
		},
		{
			intro: `You are doing well. Press this button to save new public key
					in <strong>the local storage</strong> (of your browser).
					Please don't worry about public keys safety.
					However, keep them in the private space.`,
			position: "left",
			init(stepInitSPI) {
				return publicKeyStorage.observe(() => {
					if (stepInitSPI.isCurrentStep && publicKeyStorage.doesPublicKeyNameExist(this.enteredPublicKeyName)) {
						stepInitSPI.nextStep();
					}
				});
			},
			preProcess() {
				this.isDirectMode = false;
				publicKeyStorage.removePublicKey(this.enteredPublicKeyName);
			},
			postProcess() {
				if (!publicKeyStorage.doesPublicKeyNameExist(this.enteredPublicKeyName)) {
					publicKeyStorage.setPublicKey(this.enteredPublicKeyName, this.computedPublicKey);
				}
			}
		},
		{
			intro: `Your secret has been saved by means of <strong>passphrase</strong>
					and <strong>public key</strong>. Now let's try to restore your secret.
					Please press this button to change mode.`,
			position: "bottom",
			init(stepInitSPI) {
				return this.$watch("isDirectMode", isDirectMode => {
					if (stepInitSPI.isCurrentStep && isDirectMode) {
						stepInitSPI.nextStep();
					}
				});
			},
			postProcess() {
				if (!this.isDirectMode) {
					this.isDirectMode = true;
				}
			}
		},
		{
			intro: `Enter the name of the secret once again (public key name).`,
			position: "bottom",
			postProcess() {
				if (this.enteredPublicKeyName !== this.chosenPublicKeyName) {
					this.chosenPublicKeyName = this.enteredPublicKeyName;
				}
			}
		},
		{
			intro: `Great job. Here is your secret.`,
			position: "top"
		}
	])
};

function prepareIntroSteps(steps) {
	steps.forEach((step, index) => {
		if (index) {
			step.element = `[data-step-index='${index}']`;
		} else {
			// Zero step goes without element, because it is introductory words only
		}
	});
	return steps;
}
