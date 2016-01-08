import publicKeyStorage from "./public-key-storage.js";

const INTRO_OPTIONS = {
	tooltipPosition: "auto",
	showBullets: false,
	showProgress: true,
	showButtons: true,
	scrollToElement: true,
	showStepNumbers: false,
	keyboardNavigation: false,
	steps: prepareSteps([
		{
			intro: `<strong>In Mind Notes</strong> is here to help you keep your secrets
					in the most safe place... <strong>in your mind</strong>.`
		},
		{
			intro: `Please think up <strong>the strongest passphrase</strong> you can remember.`
		},
		{
			intro: `Generate <strong>your secret</strong>
					to use it in any <strong>service</strong> you want:
					mail, social network, online banking, ...`,
			preProcess: function () {
				if (!this.passphrase) {
					this.passphrase = "qwerty";
				}
				this.isDirectMode = false;
			}
		},
		{
			intro: `Name your secret. Appropriate service name is the better choice.
					For example <strong>facebook</strong> or <strong>mail.ru</strong>.`,
			preProcess: function () {
				if (!this.generatedSecret) {
					this.generatedSecret = "asdfgh";
				}
			}
		},
		{
			intro: `You are doing well. Press this button to save new public key
					in <strong>the local storage</strong> (of your browser).
					Please don't worry about public keys safety.
					However, keep them in the private space.`,
			preProcess: function () {
				if (!this.enteredPublicKeyName) {
					this.enteredPublicKeyName = "noname";
				}
				publicKeyStorage.removePublicKey(this.enteredPublicKeyName);
			}
		},
		{
			intro: `Your secret has been saved by means of <strong>passphrase</strong>
					and <strong>public key</strong>. Now let's try to restore your secret.
					Please press this button to change mode.`,
			preProcess: function () {
				if (!publicKeyStorage.doesPublicKeyNameExist(this.enteredPublicKeyName)) {
					publicKeyStorage.setPublicKey(this.enteredPublicKeyName, this.computedPublicKey);
				}
			}
		},
		{
			intro: `Enter the name of the secret once again (public key name).`,
			preProcess: function () {
				this.isDirectMode = true;
			}
		},
		{
			intro: `Great job. Here is your secret.`,
			preProcess: function () {
				if (this.enteredPublicKeyName !== this.chosenPublicKeyName) {
					this.chosenPublicKeyName = this.enteredPublicKeyName;
				}
			}
		}
	])
};

export default {
	methods: {
		startIntro: function () {
			introJs().setOptions(INTRO_OPTIONS).onbeforechange(node => {
				Vue.config.async = false;
				let currentStepIndex = $(node).data("step-index") || 0;
				for (let stepIndex = 0; stepIndex <= currentStepIndex; stepIndex++) {
					let step = INTRO_OPTIONS.steps[stepIndex];
					if (step.preProcess) {
						step.preProcess.call(this);
					}
				}
			}).oncomplete(() => {
				Vue.config.async = true;
			}).onexit(() => {
				Vue.config.async = true;
			}).start();
		}
	}
};

function prepareSteps(steps) {
	steps.forEach(computeStepElement);
	return steps;
}

function computeStepElement(step, index) {
	if (index) {
		step.element = `[data-step-index='${index}']`;
	} else {
		// Zero step goes without element, because it is introductory words only
	}
}
