const { default: axios } = require("axios");

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

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
