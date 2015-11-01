import {generateSecret, filterAlphabet} from "./generate-secret.js";

const DEFAULT_ALPHABET_REGEXP = /[0-9a-zA-Z_]/;

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
  data: function () {
    return {
      alphabetRegExps: [/[0-9a-zA-Z~!@#$%^&*_=]/, DEFAULT_ALPHABET_REGEXP, /[0-9a-z_]/, /[0-9]/],
      currentAlphabetRegExp: DEFAULT_ALPHABET_REGEXP
    };
  },
  methods: {
    generateSecret: function () {
      let alphabet = filterAlphabet(this.currentAlphabetRegExp);
      this.secret = generateSecret(this.length, alphabet);
      Vue.nextTick(this.selectSecret.bind(this));
    },
    chooseAlphabet: function (alphabetRegExp) {
      this.currentAlphabetRegExp = alphabetRegExp;
      this.generateSecret();
    },
    selectSecret: function () {
      this.$el.querySelector("input").select();
    }
  }
});
