import axios from "axios";
import { Cookies } from "react-cookie";

const ENV = process.env.NODE_ENV === "development";
//얘 죽이지 말고 나중에 배포한담에 콘솔 확인해보자. 보면 product로 나올거임 (∵분기처리해서)
console.log(process.env.NODE_ENV);

export const instance = axios.create({
  baseURL: ENV ? "/" : process.env.REACT_APP_SERVER,
  withCredentials: true,
});

const cookie = new Cookies();

instance.interceptors.request.use(function (config) {
  config.headers.authorization = `Bearer ${cookie.get("token")}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      cookie.remove("token");
      return 401;
    }
  }
);
