import React from "react";
import styled from "styled-components";
import kakaobtn from "../../../asset/button/kakaobtn.svg";

const Start = () => {
  const REST_API_KEY = "4a0253bc75728d0cc6a165b3b9b44538";
  const REDIRECT_URI = "https://koyunhyeok.shop/user/kakaoLogin/start";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onClickKakaoLogin = async () => {
    console.log("kakao_login click");
    window.location.href = KAKAO_AUTH_URL;
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
