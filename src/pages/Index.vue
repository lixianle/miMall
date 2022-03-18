<template>
  <div class="index">
    <div class="container">Index</div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar.vue";
export default {
  name: "Index",
  components: {
    ServiceBar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
}
</style>
