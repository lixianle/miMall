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

// test用
export function test() {
  return $axios.get("/test");
}
