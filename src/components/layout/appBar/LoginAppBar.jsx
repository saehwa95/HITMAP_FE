import React from "react";
import StatusBar from "./StatusBar";
import styled from "styled-components";
import closeButton from "../../../asset/button/closeButton.svg";
import { useNavigate } from "react-router-dom";

const LoginAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSignupContainer>
      <StatusBar />
      <StSignupTitle>
        <StSignupItem>
          <StCloseIconImg
            src={closeButton}
            onClick={() => {
              navigate("/");
            }}
          />
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

const StCloseIconImg = styled.img`
  width: 48px;
  height: 48px;
  float: left;
  cursor: pointer;
`;
