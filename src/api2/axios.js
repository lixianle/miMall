import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "",
    timeout: 8000,
  });
  instance.interceptors.response.use(function (response) {
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
  return instance(config);
}
