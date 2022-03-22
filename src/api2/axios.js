// import axios from "axios";
// export function request(config) {
//   const instance = axios.create({
//     baseURL: "",
//     timeout: 8000,
//   });
//   instance.interceptors.request.use(
//     (config) => {
//       console.log("请求拦截");
//       console.log(config);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
//   instance.interceptors.response.use(
//     (res) => {
//       console.log("响应拦截");
//       console.log(res);
//       console.log(res.data);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
//   return instance(config);
// }
