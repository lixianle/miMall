<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="container">
        <div class="item-bg">
          <h2>{{ product.name }}</h2>
          <h3>{{ product.subtitle }}</h3>
          <div class="price">
            <span
              >￥<em>{{ product.price }}</em></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>

<script>
import { getProductInfo } from "../api/index";
import ProductParam from "../components/ProductParam";
export default {
  name: "Product",
  components: {
    ProductParam,
  },
  data() {
    return {
      product: {}, // 商品信息
    };
  },
  mounted() {
    this.productInfo();
  },
  methods: {
    productInfo() {
      let id = this.$route.params.id;
      getProductInfo(id).then((res) => {
        this.product = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";

.product {
  .btn {
    margin-left: 10px;
  }
  .h {
    height: 300px;
  }
  .content {
    .container {
      height: 718px;
      .item-bg {
        @include bgImg(100%, 100%, "../imgs/product/product-bg-1.png", cover);
        text-align: center;
        h2 {
          font-size: $fontA;
          padding-top: 55px;
        }
        h3 {
          font-size: $fontE;
          letter-spacing: 10px;
        }
        .price {
          margin-top: 20px;
          font-size: 30px;
          color: #333333;
          em {
            font-style: normal;
            font-size: 38px;
          }
        }
      }
    }
  }
}
</style>
