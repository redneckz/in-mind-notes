<template lang="jade">
	secret-form(v-ref:secret-form)
	hot-keys-section(v-ref:hot-keys-section)
	footer
</template>

<style lang="less">
	@import "bootstrap";
	@icon-font-path: "./fonts/";
	@import "./form-control/_readonly/form-control_readonly";
</style>

<script>
	import "bootstrap-jquery";

	import SecretForm from "secret-form";
	import HotKeysSection from "hot-keys-section";
	import Footer from "footer";

	import HotKeysController from "hot-keys-controller";

	export default {
		ready() {
			this.hotKeysController = new HotKeysController(this);
		},
		components: {
			SecretForm,
			HotKeysSection,
			Footer
		}
	};
</script>
