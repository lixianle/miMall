<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="menu-box">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        :src="sub ? sub.img : '../imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米CC9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :loop="true"
          :autoplay="{ disableOnInteraction: false, delay: 3000 }"
          :pagination="{ clickable: true }"
          :effect="'cube'"
          :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" alt="" />
            </a>
          </swiper-slide>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          v-for="(item, index) in adsList"
          :key="index"
          :href="'/#/product/' + item.id"
        >
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="../imgs/banner-1.png" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="product-container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="../imgs/mix-alpha.jpg" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><service-bar></service-bar></div>
    <modal
      :showModal="showModal"
      modalType="middle"
      title="提示"
      btnType="1"
      sureText="查看购物车"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import { Navigation, Autoplay, Pagination, EffectCube } from "swiper";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css";
import ServiceBar from "../components/ServiceBar.vue";
import Modal from "../components/Modal.vue";
import { init, toAddCart } from "../api/index";
export default {
  name: "Index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination, EffectCube],
    };
  },
  data() {
    return {
      slideList: [
        {
          id: "45",
          img: "../imgs/slider/slide-1.jpg",
        },
        {
          id: "46",
          img: "../imgs/slider/slide-2.jpg",
        },
        {
          id: "47",
          img: "../imgs/slider/slide-3.jpg",
        },
        {
          id: "48",
          img: "../imgs/slider/slide-4.jpg",
        },
        {
          id: "49",
          img: "../imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          { id: 30, img: "../imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "../imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "../imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "../imgs/item-box-4.jpg", name: "移动4G专区" },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "../imgs/ads/ads-1.png",
        },
        {
          id: 34,
          img: "../imgs/ads/ads-2.jpg",
        },
        {
          id: 35,
          img: "../imgs/ads/ads-3.png",
        },
        {
          id: 36,
          img: "../imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
      showModal: false,
    };
  },
  mounted() {
    init().then((res) => {
      res.list = res.list.slice(6, 14);
      this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
    });
  },
  methods: {
    // 全局$axios获取
    /*init() {
      this.$axios
        .get("/api/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
          // console.log(this.phoneList);
        });
    },*/
    addCart(id) {
      toAddCart(id, true)
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        })
        .catch(() => {
          this.showModal = true;
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
.index {
  .container {
    .swiper-box {
      .menu-box {
        position: absolute;
        box-sizing: border-box;
        z-index: 9;
        width: 264px;
        height: 451px;
        padding: 20px 0;
        background-color: #55585a80;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              display: block;
              position: relative;
              font-size: $fontI;
              color: $colorG;
              padding-left: 30px;
              &::after {
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: "";
                @include bgImg(10px, 15px, "../imgs/icon-arrow.png");
              }
            }
            &:hover {
              background-color: $colorA;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              position: absolute;
              top: 0;
              left: 264px;
              box-sizing: border-box;
              border: 1px solid $colorH;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                li {
                  flex: 1;
                  height: 75px;
                  line-height: 75px;
                  padding-left: 23px;
                  a {
                    color: $colorB;
                    font-size: $fontJ;
                    img {
                      vertical-align: middle;
                      width: 42px;
                      height: 35px;
                      margin-right: 15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .swiper {
        .swiper-button-prev {
          left: 274px;
        }
        .swiper-slide {
          height: 451px;
          img {
            width: 100%;
            height: 451px;
          }
        }
      }
    }
    .ads-box {
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom: 50px;
      a {
        display: block;
        height: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .product-box {
    background-color: $colorJ;
    .product-container {
      width: 1226px;
      margin: 0 auto;
      padding: 30px 0 50px 0;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                font-size: $fontJ;
                &.new-pro {
                  background-color: #7ecf68;
                  color: #ffffff;
                }
                &.kill-pro {
                  background-color: #e82626;
                  color: #ffffff;
                }
              }
              .item-img {
                height: 195px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .item-info {
                h3 {
                  font-size: $fontJ;
                  line-height: $fontJ;
                  font-weight: bold;
                  color: $colorB;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  font-size: $fontJ;
                  font-weight: bold;
                  color: #f20a0a;
                  &::after {
                    content: "";
                    @include bgImg(22px, 22px, "../imgs/icon-cart-hover.png");
                    vertical-align: middle;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
