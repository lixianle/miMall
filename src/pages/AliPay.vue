<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="from" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import { paySubmit } from "../api/index";
export default {
  name: "AliPay",
  components: {
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading: true,
    };
  },
  mounted() {
    paySubmit(this.orderId, 1).then((res) => {
      this.content = res.content;
      setTimeout(() => {
        document.forms[0].submit();
      }, 100);
    });
  },
};
</script>

<style scoped></style>
