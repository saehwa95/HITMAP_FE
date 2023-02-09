import React from "react";
import StatusBar from "./StatusBar";
import styled from "styled-components";
import closeButton from "../../../asset/button/closeButton.svg";
import { useNavigate } from "react-router-dom";

const SignupAppBar = () => {
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
          <TitleSpan>회원가입</TitleSpan>
        </StSignupItem>
      </StSignupTitle>
    </StSignupContainer>
  );
};

export default SignupAppBar;

const StSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 108px;
`;

const StSignupTitle = styled.div`
  height: 64px;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 8px 16px;
`;

const StSignupItem = styled.div`
  width: 343px;
  height: 48px;
  background: #ffffff;
`;
const TitleSpan = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1f1f1f;
  margin: 10px 50px 0px 0px;
`;

const StCloseIconImg = styled.img`
  width: 48px;
  height: 48px;
  float: left;
  cursor: pointer;
`;
