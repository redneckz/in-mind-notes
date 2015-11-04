export default Vue.extend({
  template: "#secret-field-template",
  props: {
    secret: {
      type: String,
      required: true
    },
    tabIndex: {
      type: String,
      default: "-1"
    }
  },
  methods: {
    selectSecret: function () {
      this.$el.querySelector("input").select();
    }
  }
});
