import React from "react";
import styled from "styled-components";
import LoginAppBar from "../../components/layout/appBar/LoginAppBar";
import UserLogin from "../../components/user/login/UserLogin";
import HitmapLogo from "../../asset/icon/HitmapLogo.svg";

const Login = () => {
  return (
    <StLoginContainer>
      <LoginAppBar />
      <StLogoContainner>
        <StLoginImg src={HitmapLogo} />
      </StLogoContainner>
      <StSignInContainer>
        <UserLogin />
      </StSignInContainer>
    </StLoginContainer>
  );
};

export default Login;

const StLoginContainer = styled.div`
  position: relative;
  width: 373px;
  height: 812px;
  background: #ffffff;
`;

const StLoginImg = styled.img`
  width: 166.52px;
  height: 121px;
`;

const StSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 375px;
  height: 421px;
`;

const StLogoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 36px;
  margin: 0 auto;
  width: 124px;
  height: 142px;
`;
