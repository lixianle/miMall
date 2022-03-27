<template>
  <div class="order">
    <order-header :title="title">
      <template v-slot:tip>
        <span class="slot">{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import NavFooter from "../components/NavFooter.vue";
import ServiceBar from "../components/ServiceBar.vue";
export default {
  name: "Order",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
  },
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/comfirm") {
      this.title = "订单确认";
      this.tip = "请填写完整地址~~";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "请谨防诈骗，了解更多>";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请谨防诈骗，了解更多";
    } else if (path == "/order/alipay") {
      this.title = "订单支付";
      this.tip = "请谨防诈骗，了解更多";
    }
  },
  updated() {
    let path = this.$route.path;
    if (path == "/order/comfirm") {
      this.title = "订单确认";
      this.tip = "请填写完整地址~~";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "请谨防诈骗，了解更多>";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请谨防诈骗，了解更多";
    } else if (path == "/order/alipay") {
      this.title = "订单支付";
      this.tip = "请谨防诈骗，了解更多";
    }
  },
};
</script>

<style lang="scss" scoped>
.order {
  .slot {
    margin-left: 17px;
    font-size: 14px;
    color: #999999;
    font-weight: 200;
  }
}
</style>
