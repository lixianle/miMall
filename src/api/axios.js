// const { default: axios } = require("axios");
import axios from "axios";

// 配置默认值
const $axios = axios.create({
  baseURL: "/api",
  timeout: 8000,
});

// 请求拦截
$axios.interceptors.response.use(
  function (response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      if (path != "/#/login") {
        window.location.href = "/#/login";
      }
      return Promise.reject(res);
    } else {
      alert(res.msg);
      return Promise.reject(res);
    }
  },
  (error) => {
    let res = error.response;
    alert(res.data.message);
    return Promise.reject(error);
  }
);

export { $axios };
