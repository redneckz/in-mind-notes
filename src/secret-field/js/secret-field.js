import {generateSecret} from "./generate-secret.js";

export default Vue.extend({
  template: "#secret-field-template",
  props: {
    directMode: {
      type: Boolean,
      required: true
    },
    secret: {
      type: String,
      required: true
    },
    length: {
      type: Number,
      default: 16
    },
    title: {
      type: String,
      default: "Secret"
    },
    tabIndex: {
      type: String,
      default: "-1"
    }
  },
  methods: {
    generateSecret: function () {
      this.secret = generateSecret(this.length);
    }
  }
});
