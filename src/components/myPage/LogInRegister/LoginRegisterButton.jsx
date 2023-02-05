import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginRegisterButton = () => {
  return (
    <ButtonWrapper>
      <LoginLink to={"/"} className="button">
        <span>로그인</span>
      </LoginLink>
      <RegisterLink to={"/signup"} className="button">
        <span>회원가입</span>
      </RegisterLink>
    </ButtonWrapper>
  );
};

export default LoginRegisterButton;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 311px;
  height: 112px;
  .button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 311px;
    height: 48px;
    border-radius: 8px;
    text-decoration: none;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
    line-height: 150%;
  }
`;

const LoginLink = styled(Link)`
  background: #ffffff;
  border: 1px solid #006981;
  span {
    color: #006981;
  }
`;

const RegisterLink = styled(Link)`
  background: #006981;
  border: none;
  span {
    color: #ffffff;
  }
`;
