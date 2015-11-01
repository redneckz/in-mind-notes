import SecretField from "../../secret-field/js/secret-field.js";

export default new Vue({
  el: "#secret-form",
  data: {
    directMode: true,
    secret: "",
    secretLength: 32
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
    "secret-field": SecretField
  }
});
