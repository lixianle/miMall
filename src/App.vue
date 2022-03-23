<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { getUser, getCartCount } from "./api/index";
export default {
  name: "App",
  mounted() {
    if (document.cookie) {
      getUser().then((res) => {
        this.$store.dispatch("saveUserName", res.username);
      });
      getCartCount().then((res) => {
        this.$store.dispatch("saveCartCount", res);
      });
    }
  },
  methods: {
    // 全局$axios获取
    /*getUser() {
      this.$axios.get("/api/user").then((res) => {
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.$axios.get("/api/carts/products/sum").then((res) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },*/
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
// @import "./assets/scss/base.scss";
</style>
