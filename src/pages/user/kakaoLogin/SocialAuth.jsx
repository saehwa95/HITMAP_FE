import React, { useEffect } from "react";
import axios from "axios";

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

  return <></>;
};

export default Socialauth;
