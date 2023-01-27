import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import kakaobtn from "../../../asset/button/kakaobtn.svg";

const Start = () => {
  const devModeOrProductionMode = () => {
    // const REST_API_KEY = '4a0253bc75728d0cc6a165b3b9b44538'; // process.env.REACT_APP_REST_API_KEY;
    // const REDIRECT_URI = 'https://koyunhyeok.shop/user/kakaoLogin/start'; // process.env.REACT_APP_REDIRECT_URI;

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    return KAKAO_AUTH_URL;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let access_token = params.get("access_token");
    let refresh_token = params.get("refresh_token");
    let nickname = params.get("nickname");
    console.log(params);

    if (access_token) {
      axios
        .post("http://localhost:3065/user/kakaoLogin/finish", {
          access_token: access_token,
          refresh_token: refresh_token,
          nickname: nickname,
        })
        .then((res) => {
          console.log("res: ", res);
          window.location.href = "/";
        })
        .catch((err) => {
          const errorMessage = err.response.data.errorMessage;
          console.log("errorMessage: ", errorMessage);
          alert(errorMessage);
          // if (errorMessage) {
          //   alert(errorMessage);
          // }
          window.location.href = "/";
        });
    }
  }, []);

  const onClickKakaoLogin = async () => {
    console.log("kakao_login click");
    window.location.href = devModeOrProductionMode();
  };
  return (
    <>
      <StKakaoBtn onClick={onClickKakaoLogin} src={kakaobtn} />
    </>
  );
};

export default Start;

const StKakaoBtn = styled.img`
  cursor: pointer;
  /* kakao_login_large_wide */
  background-color: yellow;
  width: 343px;
  height: 48px;
`;
