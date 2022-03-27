<template>
  <div class="order-comfirm">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          ></path>
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          ></path>
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          ></path>
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          ></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="comfirm-bar">
        <div class="address-title">收货地址</div>
        <div class="address-box">
          <div
            v-for="(item, index) of list"
            :key="index"
            class="addr-info"
            :class="{ checked: index == checkIndex }"
            @click="checkIndex = index"
          >
            <div class="name">{{ item.receiverName }}</div>
            <div class="phone">{{ item.receiverMobile }}</div>
            <div class="street">
              {{
                item.receiverProvince +
                " " +
                item.receiverCity +
                " " +
                item.receiverDistrict +
                " " +
                item.receiverAddress
              }}
            </div>
            <div class="action">
              <a href="javascript:;" class="fl" @click="delAddress(item)">
                <svg class="icon icon-del">
                  <use xlink:href="#icon-del"></use>
                </svg>
              </a>
              <a href="javascript:;" class="fr" @click="editAddressModal(item)">
                <svg class="icon icon-edit">
                  <use xlink:href="#icon-edit"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="addr-add" @click="openAddressModal">
            <div class="icon-add"></div>
            <div>添加新地址</div>
          </div>
        </div>
        <div class="pro-title">商品</div>
        <ul class="pro-list">
          <li class="list" v-for="(item, index) of cartList" :key="index">
            <div class="list-name">
              <img :src="item.productMainImage" alt="" />
              {{ item.productName + " " + item.productSubtitle }}
            </div>
            <div class="list-price-num">
              {{ item.productTotalPrice }}元x{{ item.quantity }}
            </div>
            <div class="list-price">{{ item.productTotalPrice }}元</div>
          </li>
        </ul>
        <div class="delivery">
          <h2>配送方式</h2>
          <span>包邮</span>
        </div>
        <div class="invoice">
          <h2>发票</h2>
          <span>电子发票 个人</span>
        </div>
        <div class="clearfix">
          <div class="detail fr">
            <div class="detail-item">
              <span>商品件数:</span>
              <span>{{ count }}件</span>
            </div>
            <div class="detail-item">
              <span>商品总价:</span>
              <span>{{ cartTotalPrice }}元</span>
            </div>
            <div class="detail-item">
              <span>优惠活动:</span>
              <span>0元</span>
            </div>
            <div class="detail-item">
              <span>运费:</span>
              <span>0元</span>
            </div>
            <div class="should-pay">
              <span>应付总额:</span>
              <span>{{ cartTotalPrice }}元</span>
            </div>
          </div>
        </div>

        <div class="item-btn clearfix">
          <a
            href="javascript:;"
            class="btn btn-large go fr"
            @click="orderSubmit"
            >去结算</a
          >
          <a href="/#/cart" class="btn btn-large back fr">返回购物车</a>
        </div>
      </div>
    </div>
    <modal
      title="确认删除"
      btnType="1"
      :showModal="showDelModal"
      @cancel="showDelModal = false"
      @submit="submitAddress"
    >
      <template v-slot:body>
        <p>您确认要删除此地址吗？</p>
      </template>
    </modal>
    <modal
      title="添加收货地址"
      btnType="1"
      :showModal="showEditModal"
      @cancel="showEditModal = false"
      @submit="submitAddress"
    >
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="姓名"
              v-model="checkeedItem.receiverName"
            />
            <input
              type="text"
              class="input last"
              placeholder="手机号"
              v-model="checkeedItem.receiverMobile"
            />
          </div>
          <div class="item">
            <select name="province" v-model="checkeedItem.receiverProvince">
              <option value="北京">北京</option>
              <option value="河北">河北</option>
              <option value="广东">广东</option>
            </select>
            <select name="city" v-model="checkeedItem.receiverCity">
              <option value="北京">北京</option>
              <option value="河北">石家庄</option>
              <option value="广州">广州</option>
            </select>
            <select name="district" v-model="checkeedItem.receiverDistrict">
              <option value="北京">昌平区</option>
              <option value="河北">海淀区</option>
              <option value="上海">东城区</option>
              <option value="上海">西城区</option>
              <option value="上海">悬疑区</option>
            </select>
          </div>
          <div class="item">
            <textarea
              name="street"
              v-model="checkeedItem.receiverAddress"
            ></textarea>
          </div>
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="邮编"
              v-model="checkeedItem.receiverZip"
            />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import {
  getAddressList,
  getCartList,
  sendAction,
  toOrderSubmit,
} from "../api/index";
import Modal from "../components/Modal";
export default {
  name: "OrderComfirm",
  data() {
    return {
      list: [], // 收货地址列表
      cartList: [], // 购物车中需要结算的商品列表
      cartTotalPrice: 0, // 商品总金额
      count: 0, // 商品件数
      checkeedItem: {},
      userAction: "", // 0 新增 1 编辑 2 删除
      showDelModal: false, // 是否显示删除弹框
      showEditModal: false, // 是否显示新增或编辑弹框
      checkIndex: 0, // 当前选中的收货地址
    };
  },
  components: {
    Modal,
  },
  mounted() {
    getAddressList().then((res) => {
      this.list = res.list;
    });
    getCartList().then((res) => {
      this.cartTotalPrice = res.cartTotalPrice;
      let list = res.cartProductVoList;
      this.cartList = list.filter((item) => item.productSelected);
      this.cartList.map((item) => {
        this.count += item.quantity;
      });
    });
  },
  computed: {},
  methods: {
    delAddress(item) {
      this.checkeedItem = item;
      this.userAction = 2;
      this.showDelModal = true;
    },
    editAddressModal(item) {
      this.checkeedItem = item;
      this.userAction = 1;
      this.showEditModal = true;
    },
    openAddressModal() {
      this.checkeedItem = {};
      this.userAction = 0;
      this.showEditModal = true;
    },
    submitAddress() {
      let { checkeedItem, userAction } = this;
      let method,
        url,
        params = {};
      if (userAction == 0) {
        method = "post";
        url = "/shippings";
      } else if (userAction == 1) {
        method = "put";
        url = `/shippings/${checkeedItem.id}`;
      } else {
        method = "delete";
        url = `/shippings/${checkeedItem.id}`;
      }
      if (userAction == 0 || userAction == 1) {
        let {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        } = checkeedItem;
        let errMsg;
        if (!receiverName) {
          errMsg = "请输入收货人名称";
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = "请输入正确的手机号";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择城市";
        } else if (!receiverDistrict) {
          errMsg = "请选择区";
        } else if (!receiverAddress) {
          errMsg = "请输入详细地址";
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = "请输入正确的邮编";
        }
        if (errMsg) {
          alert(errMsg);
          return;
        }
        params = {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        };
      }
      sendAction(method, url, params).then(() => {
        this.closeModal();
        getAddressList().then((res) => {
          this.list = res.list;
        });
        alert("操作成功！");
      });
    },
    closeModal() {
      this.checkeedItem = "";
      this.userAction = "";
      this.showDelModal = false;
      this.showEditModal = false;
    },
    orderSubmit() {
      let item = this.list[this.checkIndex];
      if (!item) {
        alert("请选择收货地址");
        return;
      }
      toOrderSubmit(item.id).then((res) => {
        this.$router.push({
          path: "/order/pay",
          query: {
            orderNo: res.orderNo,
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.order-comfirm {
  padding: 30px 0 84px;
  background-color: #f5f5f5;
  .container {
    .comfirm-bar {
      padding: 30px;
      background-color: #ffffff;
      .address-title {
        font-size: 20px;
        color: #333333;
        margin-bottom: 21px;
      }
      .address-box {
        display: grid;
        // column-gap: 15px;
        // row-gap: 15px;
        justify-content: space-between;
        gap: 15px;
        grid-template-columns: 271px 271px 271px 271px;
        .addr-info,
        .addr-add {
          box-sizing: border-box;
          height: 180px;
          border: 1px solid #e5e5e5;
          padding: 15px 24px;
          font-size: 14px;
          color: #757575;
        }
        .addr-info {
          cursor: pointer;
          .name {
            height: 27px;
            font-size: 18px;
            font-weight: 300;
            color: #333;
            margin-bottom: 10px;
          }
          .street {
            height: 50px;
          }
          .action {
            height: 50px;
            line-height: 50px;
            .icon {
              width: 20px;
              height: 20px;
              fill: #666666;
              vertical-align: middle;
              &:hover {
                fill: #ff6700;
              }
            }
          }
          &.checked {
            border: 1px solid #ff6700;
          }
        }
        .addr-add {
          text-align: center;
          color: #999999;
          cursor: pointer;
          .icon-add {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: url("../imgs/icon-add.png") #e0e0e0 no-repeat center;
            background-size: 14px;
            margin: 0 auto;
            margin-top: 45px;
            margin-bottom: 10px;
          }
        }
      }
      .pro-title {
        font-size: 20px;
        color: #333333;
        padding: 20px 0 8px;
        border-bottom: 1px solid #e5e5e5;
      }
      .pro-list {
        .list {
          display: flex;
          justify-content: space-between;
          height: 50px;
          line-height: 50px;
          font-size: 12px;
          color: #333333;
          font-weight: 500;
          border-bottom: 1px solid #e5e5e5;
          .list-name {
            flex: 6;
            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
            }
          }
          .list-price-num {
            flex: 3;
          }
          .list-price {
            color: #ff6600;
          }
        }
      }
      .delivery,
      .invoice {
        margin-top: 31px;
        line-height: 20px;
        h2 {
          display: inline-block;
          margin-right: 71px;
          font-size: 20px;
          width: 80px;
        }
        span {
          display: inline-block;
          font-size: 12px;
          color: #ff6600;
        }
      }
      .detail {
        padding: 30px 0;
        .detail-item {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          span {
            display: inline-block;
            text-align: right;
            width: 100px;
          }
          :last-child {
            color: #ff6600;
          }
        }
        .should-pay {
          line-height: 50px;
          font-size: 12px;
          span {
            display: inline-block;
            text-align: right;
            width: 100px;
          }
          :last-child {
            font-size: 18px;
            color: #ff6600;
          }
        }
      }
      .item-btn {
        padding-top: 40px;
        border-top: 1px solid #e5e5e5;
        .back {
          background-color: #b0b0b0;
          margin-right: 20px;
        }
      }
    }
  }
  .edit-wrap {
    font-size: 14px;
    .item {
      margin-bottom: 14px;
      .input {
        display: inline-block;
        width: 283px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
      }
      .last {
        margin-left: 14px;
      }
      select {
        height: 40px;
        line-height: 40px;
        margin-right: 15px;
        border: 1px solid #e5e5e5;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 62px;
        padding: 13px 15px;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
