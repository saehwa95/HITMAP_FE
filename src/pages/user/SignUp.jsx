import React from "react";
import styled from "styled-components";
import SignupAppBar from "../../components/layout/appBar/SignupAppBar";
import UserSignup from "../../components/user/signup/UserSignup";

const SignUp = () => {
  return (
    <StSignupContainer>
      <SignupAppBar />
      <StSignupList>
        <UserSignup />
      </StSignupList>
    </StSignupContainer>
  );
};

export default SignUp;

const StSignupContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  width: 373px;
  background: #ffffff;
`;

const StSignupList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 375px;
  height: 755px;
`;
