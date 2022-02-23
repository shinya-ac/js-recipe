Vue.createApp({
  data() {
    return {
      countDisplay: 0,
    }
  },
  methods: {
    changeNumber: function () {
      this.countDisplay += 1
    },
  },
}).mount("#app")
