import React from "react";
import StatusBar from "./StatusBar";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const LoginAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSignupContainer>
      <StatusBar />
      <StSignupTitle>
        <StSignupItem>
          <StCloseIconImg
            onClick={() => {
              navigate("/");
            }}
          >
            둘러보기
          </StCloseIconImg>
        </StSignupItem>
      </StSignupTitle>
    </StSignupContainer>
  );
};

export default LoginAppBar;

const StSignupContainer = styled.div`
  width: 375px;
  height: 108px;
`;

const StSignupTitle = styled.div`
  height: 64px;
  display: flex;

  flex-direction: column;
  padding: 2px 16px;
`;

const StSignupItem = styled.div`
  width: 343px;
  height: 48px;
  background: #ffffff;
`;

const StCloseIconImg = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #979797;
  float: right;
  cursor: pointer;
`;
