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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
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
export default {
  name: "Index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  width: 1226px;
  margin: auto;
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
              font-size: 16px;
              color: #ffffff;
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
                    font-size: 14px;
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
  }
}
</style>
