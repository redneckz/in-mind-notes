import Vue from "vue";
import {introJs} from "intro.js";

import introDefinition from "intro-definition";

const DESTROYERS_FIELD = Symbol();

export default {
	methods: {
		startIntro() {
			let intro = initIntro.call(this);
			intro.start();
		}
	}
};

function initIntro() {
	Vue.config.async = false;
	let intro = introJs();
	this[DESTROYERS_FIELD] = [];
	introDefinition.steps.forEach((step, stepIndex) => {
		if (step.init) {
			let stepInitSPI = createStepInitSPI.call(this, stepIndex, intro),
				destroyer = step.init.call(this, stepInitSPI);
			this[DESTROYERS_FIELD].push(destroyer);
		}
	});
	return intro.setOptions(introDefinition).onbeforechange(node => {
		let currentStepIndex = node.getAttribute("data-step-index") || 0;
		processStep.call(this, currentStepIndex);
	}).oncomplete(destroyIntro.bind(this)).onexit(destroyIntro.bind(this));
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

function processStep(currentStepIndex) {
	for (let stepIndex = 0; stepIndex < currentStepIndex; stepIndex++) {
		invokeStepProcessor.call(this, stepIndex, "postProcess");
	}
	invokeStepProcessor.call(this, currentStepIndex, "preProcess");
}

function invokeStepProcessor(stepIndex, processorName) {
	if ((stepIndex < 0) || (stepIndex >= introDefinition.steps.length)) {
		return;
	}
	let step = introDefinition.steps[stepIndex];
	if (processorName in step) {
		step[processorName].call(this);
	}
}

function destroyIntro() {
	Vue.config.async = true;
	this[DESTROYERS_FIELD].forEach(destroyer => {
		if (destroyer) {
			destroyer();
		}
	});
}
