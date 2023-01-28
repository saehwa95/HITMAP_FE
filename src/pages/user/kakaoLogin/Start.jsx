import React from "react";
import styled from "styled-components";

import kakaobtn from "../../../asset/button/kakaobtn.svg";

const Start = () => {
  const devModeOrProductionMode = () => {
    // const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    // const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
    // const REST_API_KEY = "";
    // const REDIRECT_URL = "";

    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=4a0253bc75728d0cc6a165b3b9b44538&redirect_uri=https://hitmap-fe.vercel.app/socialauth&response_type=code`; // localhost:3000/social?code=sdgaksjghjhgljsdhfg
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`; // localhost:3000/social?code=sdgaksjghjhgljsdhfg
    return KAKAO_AUTH_URL;
  };

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
