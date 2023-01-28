import React, { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../../../shared/cookie";

const Socialauth = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let code = params.get("code");

    if (code) {
      const URL = "https://koyunhyeok.shop/user/kakaoLogin";
      // const DEV_URL = 'http://localhost:3065/user/kakaoLogin';
      axios
        .post(URL, {
          code: code,
        })
        .then((res) => {
          console.log("res: ", res);
          setCookie("auth", res.data.access_token);
          window.location.href = "/";
        })
        .catch((err) => {
          const errorMessage = err.response.data.errorMessage;
          console.log("errorMessage: ", errorMessage);
          alert(errorMessage);
          // window.location.href = '/';
        });
    }
  }, []);

  return (
    <>
      <div>데모 에러페이지 ex.카카오로그인에 실패했습니다.</div>
    </>
  );
};

export default Socialauth;
