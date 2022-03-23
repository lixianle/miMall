<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>something</span>
      </template>
    </order-header>
    Cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import NavFooter from "../components/NavFooter.vue";
export default {
  name: "Cart",
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>

<style lang="scss" scoped></style>
