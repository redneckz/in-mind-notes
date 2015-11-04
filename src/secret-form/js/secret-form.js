import PassphraseField from "../passphrase-field/passphrase-field.js";
import PublicKeyField from "../public-key-field/public-key-field.js";
import SecretGeneratorField from "../secret-generator-field/js/secret-generator-field.js";
import SecretField from "../secret-field/secret-field.js";

export default new Vue({
  el: "#secret-form",
  data: {
    directMode: true,
    passphrase: "",
    publicKey: "",
    secret: ""
  },
  computed: {
    reverseMode: function () {
      return !this.directMode;
    }
  },
  methods: {
    toggleMode: function () {
      this.directMode = !this.directMode;
    }
  },
  components: {
    "passphrase-field": PassphraseField,
    "public-key-field": PublicKeyField,
    "secret-generator-field": SecretGeneratorField,
    "secret-field": SecretField
  }
});
