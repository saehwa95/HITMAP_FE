import React from "react";
import styled from "styled-components";
import kakaobtn from "../../../asset/button/kakaobtn.svg";

const Start = () => {
  /*****************************************************************
   * 2. 함수에서 return 하는 kakao server url로 이동
   * 3. 우리가 설정한 리다이렉트 URL 주소로 이동되면서,
   *    query로 인증 code를 받아옴 (SocialAuth 컴포넌트로 리다이렉트)
   * ***************************************************************/
  const devModeOrProductionMode = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`;
    return KAKAO_AUTH_URL;
  };
  /******************************************************
   * 1. 카카오 로그인 클릭시 devModeOrProductionMode 작동  *
   * ****************************************************/
  const onClickKakaoLogin = async () => {
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

  width: 343px;
  height: 48px;
`;
