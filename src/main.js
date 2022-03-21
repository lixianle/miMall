import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != "/#/login") {
      window.location.href = "/#/login";
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount("#app");
