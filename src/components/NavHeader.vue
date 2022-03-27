<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{ userName }}</a>
          <a href="/#/order/list" v-if="userName">我的订单</a>
          <a href="javascript:;" v-if="!userName" @click="login">登录</a>
          <a href="javascript:;" v-if="!userName">注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span class="title">小米手机</span>
            <div class="children">
              <ul>
                <li
                  v-for="(item, index) in phoneList"
                  :key="index"
                  class="product"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ currency(item.price) }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span class="title">红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span class="title">电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input class="search-input" type="text" name="keyword" />
            <a class="search-icon" href="jsvascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductList } from "../api/index";
export default {
  name: "NavHeader",
  data() {
    return {
      phoneList: [],
    };
  },
  computed: {
    userName() {
      return this.$store.state.username;
    },
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
  mounted() {
    getProductList().then((res) => {
      if (res.list) {
        this.phoneList = res.list;
      }
    });
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    // 全局注册$axios
    /*
    getProductList() {
      this.$axios
        .get("/api/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          if (res.list) {
            this.phoneList = res.list;
          }
        });
      //未设置pageSize = 6
        // .then((res) => {
        //   if (res.list.length > 6) {
        //     this.phoneList = res.list.slice(0, 6);
        //   }
        // });
    },
    */
    currency(val) {
      if (!val) return "0.00";
      return "￥" + parseFloat(val).toFixed(2) + "元";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: $colorG;
        margin-right: 0;
        .icon-cart {
          display: inline-block;
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      z-index: 10;
      @include flex();
      height: 112px;
      .header-menu {
        display: inline-block;
        padding-left: 200px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: $colorB;
          font-weight: bold;
          font-size: $fontI;
          line-height: 112px;
          margin-right: 20px;
          .title {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              line-height: 12px;
              font-size: $fontK;
              text-align: center;
              z-index: 10;
              background-color: $colorG;
              &::before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  height: 137px;
                  img {
                    width: auto;
                    height: 110px;
                    margin-top: 26px;
                  }
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          display: flex;
          align-items: center;
          height: 50px;
          border: 1px solid #e0e0e0;
          .search-input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          .search-icon {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
