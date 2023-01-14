import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __postSignin, __logOut } from "../../redux/modules/userSlice";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const dispatch = useDispatch();

  const logoutOnclickHandler = (e) => {
    e.preventDefault();

    dispatch(__logOut());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSignin({ email: userEmail, password: userPw }));
  };

  return (
    <>
      <StLoginContainer>
        <StLoginImg />
      </StLoginContainer>
      <StSignInContainer>
        <StSigninInput>
          <StEmailInput
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="이메일"
          />
          <StPswInput
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
        </StSigninInput>
        <StLoginBtn onClick={submitHandler}>로그인</StLoginBtn>
        <StLogoutBtn onClick={(e) => logoutOnclickHandler(e)}>
          로그아웃
        </StLogoutBtn>
      </StSignInContainer>
    </>
  );
};

export default Login;

const StLoginContainer = styled.div`
  position: absolute;
  width: 130px;
  height: 204px;
  left: 122px;
  top: 127px;
`;

const StLoginImg = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;

  background: #000000;
  border-radius: 100px;
`;

const StSignInContainer = styled.div`
  position: absolute;
  width: 343px;
  height: 338px;
  left: 16px;
  top: 406px;
`;

const StSigninInput = styled.div`
  position: absolute;
  width: 343px;
  height: 128px;
`;

const StEmailInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 12px;
  gap: 10px;

  position: absolute;
  width: 343px;
  height: 56px;

  background: #ffffff;
  border: 2px solid #adadad;
  border-radius: 8px;
`;

const StPswInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 12px;
  gap: 10px;

  position: absolute;
  width: 343px;
  height: 56px;
  top: 72px;

  background: #ffffff;
  border: 2px solid #adadad;
  border-radius: 8px;
`;

const StLoginBtn = styled.button`
  position: absolute;
  width: 343px;
  height: 54px;
  top: 152px;
  background: #adadad;
  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  /* identical to box height, or 26px */

  text-align: center;
  cursor: pointer;

  color: #ffffff;
`;

const StLogoutBtn = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 80%;
`;
