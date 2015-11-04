export default Vue.extend({
  template: "#public-key-field-template",
  props: {
    publicKey: {
      type: String,
      required: true
    },
    tabIndex: {
      type: String,
      default: "-1"
    }
  },
  methods: {

  }
});
