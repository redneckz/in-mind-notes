import publicKeyStorage from "public-key-storage";

const INTRO_OPTIONS = {
	tooltipPosition: "auto",
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
			postProcess() {
				if (!this.generatedSecret) {
					this.generatedSecret = "asdfgh";
				}
			}
		},
		{
			intro: `Name your secret. Appropriate service name is the better choice.
					For example <strong>facebook</strong> or <strong>mail.ru</strong>.`,
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
			init(stepInitSPI) {
				return publicKeyStorage.observe(() => {
					if (stepInitSPI.isCurrentStep && publicKeyStorage.doesPublicKeyNameExist(this.enteredPublicKeyName)) {
						stepInitSPI.nextStep();
					}
				});
			},
			preProcess() {
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
			postProcess() {
				if (this.enteredPublicKeyName !== this.chosenPublicKeyName) {
					this.chosenPublicKeyName = this.enteredPublicKeyName;
				}
			}
		},
		{
			intro: `Great job. Here is your secret.`
		}
	])
};

const DESTROYERS_FIELD = Symbol();

export default {
	methods: {
		startIntro() {
			let intro = introJs();
			initIntro.call(this, intro);
			intro.setOptions(INTRO_OPTIONS).onbeforechange(node => {
				let currentStepIndex = $(node).data("step-index") || 0;
				for (let stepIndex = 0; stepIndex < currentStepIndex; stepIndex++) {
					processStep.call(this, stepIndex, "postProcess");
				}
				processStep.call(this, currentStepIndex, "preProcess");
			}).oncomplete(destroyIntro.bind(this)).onexit(destroyIntro.bind(this))
					.start();
		}
	}
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

function initIntro(intro) {
	Vue.config.async = false;
	this[DESTROYERS_FIELD] = [];
	INTRO_OPTIONS.steps.forEach((step, stepIndex) => {
		if (!step.init) {
			return;
		}
		let destroyer = step.init.call(this, createStepInitSPI.call(this, stepIndex, intro));
		this[DESTROYERS_FIELD].push(destroyer);
	});
}

function createStepInitSPI(stepIndex, intro) {
	return {
		get isCurrentStep() {
			return stepIndex === intro._currentStep;
		},
		nextStep() {
			intro.goToStep(1 + stepIndex + 1);
		}
	};
}

function destroyIntro() {
	Vue.config.async = true;
	this[DESTROYERS_FIELD].forEach(destroyer => {
		if (destroyer) {
			destroyer();
		}
	});
}

function processStep(stepIndex, processorName) {
	if ((stepIndex < 0) || (stepIndex >= INTRO_OPTIONS.steps.length))  {
		return;
	}
	let step = INTRO_OPTIONS.steps[stepIndex];
	if (processorName in step) {
		step[processorName].call(this);
	}
}
