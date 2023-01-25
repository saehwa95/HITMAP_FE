import React from "react";

import styled from "styled-components";
import kakaobtn from "../../asset/button/kakaobtn.svg";

const KakaoLogin = () => {
  const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code`;

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

export default KakaoLogin;

const StKakaoBtn = styled.img`
  cursor: pointer;
  /* kakao_login_large_wide */
  background-color: yellow;
  width: 343px;
  height: 48px;
`;

const Kakao = styled.a``;
