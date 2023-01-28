import React from "react";
import styled from "styled-components";
import kakaobtn from "../../../asset/button/kakaobtn.svg";

const Start = () => {
  const devModeOrProductionMode = () => {
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
  background-color: yellow;
  width: 343px;
  height: 48px;
`;
