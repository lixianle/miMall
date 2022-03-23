import { request } from "./axios";

export function getPro() {
  return request({
    url: "/api/products",
  }).then((res) => {
    console.log(res);
  });
}
