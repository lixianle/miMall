import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount("#app");
