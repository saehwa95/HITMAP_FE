import React from "react";
import styled from "styled-components";
import LoginRegisterButton from "./LoginRegisterButton";
import LoginInfo from "./LoginInfo";

const LogInRegisterBox = () => {
  return (
    <LogInRegisterBoxWrapper>
      <LoginInfo />
      <LoginRegisterButton />
    </LogInRegisterBoxWrapper>
  );
};

export default LogInRegisterBox;

const LogInRegisterBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  width: 343px;
  height: 373px;
  background: #ffffff;
  border: 1px solid #ececec;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;
