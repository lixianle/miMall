import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Index from "../pages/Index.vue";
import Product from "../pages/Product.vue";
import Detail from "../pages/Detail.vue";
import Cart from "../pages/Cart.vue";
import Order from "../pages/Order.vue";
import OrderComfirm from "../pages/OrderComfirm.vue";
import OrderList from "../pages/OrderList.vue";
import OrderPay from "../pages/OrderPay.vue";
import AliPay from "../pages/AliPay.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: Index,
      },
      {
        path: "/product/:id",
        name: "Product",
        component: Product,
      },
      {
        path: "/detail",
        name: "Detail",
        component: Detail,
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    children: [
      {
        path: "list",
        name: "OrderList",
        component: OrderList,
      },
      {
        path: "comfirm",
        name: "OrderComfirm",
        component: OrderComfirm,
      },
      {
        path: "pay",
        name: "OrderPay",
        component: OrderPay,
      },
      {
        path: "alipay",
        name: "AliPay",
        component: AliPay,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
