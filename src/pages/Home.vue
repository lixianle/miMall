<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";
// import storage from "../storage";

export default {
  name: "Home",
  components: {
    NavHeader,
    NavFooter,
  },
  mounted() {
    // storage.setItem("a", 1);
    // storage.setItem("abc", { name: 1 }, "user");
    // storage.clear("name", "user");
    // this.$axios.get("http://localhost:8080/public/hello.json").then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
