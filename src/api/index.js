import { $axios } from "./axios";

// NavHeader获取商品
export function getProductList() {
  return $axios.get("/products", {
    params: {
      categoryId: "100012",
      pageSize: 6,
    },
  });
}

// Index获取商品
export function init() {
  return $axios.get("/products", {
    params: {
      categoryId: "100012",
      pageSize: 14,
    },
  });
}

// Login登录
export function toLogin(username, password) {
  return $axios.post("/user/login", {
    username,
    password,
  });
}

// Login注册
export function toRegister() {
  return $axios.post("/user/register", {
    username: "admin",
    password: "admin",
    email: "admin@163.com",
  });
}

// App刷新重新获取用户名和购物车数量
export function getUser() {
  return $axios.get("/user");
}
export function getCartCount() {
  return $axios.get("/carts/products/sum");
}

// Product 获取商品信息
export function getProductInfo(id) {
  return $axios.get(`/products/${id}`);
}

// Detail加购物车
export function toAddCart(id, selected) {
  return $axios.post("/carts", {
    productId: id,
    selected: selected,
  });
}

// Cart,OrderComfirm获取购物车列表
export function getCartList() {
  return $axios.get("/carts");
}

// Cart获取是否全选
export function toggleGetCartList(url) {
  return $axios.put(url);
}

// Cart获取+ , -,及商品是否选中后购物车列表
export function toUpdateCart(id, quantity, selected) {
  return $axios.put(`/carts/${id}`, {
    quantity,
    selected,
  });
}

// Cart删除商品
export function toDelProduct(id) {
  return $axios.delete(`/carts/${id}`);
}

// OrderComfirm获取地址列表
export function getAddressList() {
  return $axios.get("/shippings");
}

// OrderComfirm地址新增，编辑，删除
export function sendAction(method, url, params) {
  return $axios({
    method: method,
    url: url,
    data: params,
  });
}

// OrderComfirm提交订单
export function toOrderSubmit(id) {
  return $axios.post("/orders", {
    shippingId: id,
  });
}

// OrderPay获取订单详情
export function getOrderDetail(orderNo) {
  return $axios.get(`/orders/${orderNo}`);
}

// OrderPay获取订单详情(同上)
// export function getOrderStatus(orderNo) {
//   return $axios.get(`/orders/${orderNo}`);
// }

// AliPay提交支付
export function paySubmit(orderId, payType) {
  return $axios.post("/pay", {
    orderId: orderId,
    orderName: "xiaomi",
    amount: 0.01,
    payType: payType,
  });
}

// OrderList获取订单列表
export function getOrderList() {
  return $axios.get("/orders");
}

// test用
export function test() {
  return $axios.get("/test");
}
