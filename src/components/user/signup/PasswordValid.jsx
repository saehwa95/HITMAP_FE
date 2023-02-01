import React from "react";

import styled from "styled-components";
import useInputpassword from "../../../hooks/useInputpassword";

const PasswordValid = () => {
  const {
    password,
    passwordCh,
    isPassword,
    isPasswordConfirm,
    passwordMessage,
    passwordConfirmMessage,
    onChangePassword,
    onChangePassWordCh,
  } = useInputpassword();

  return (
    <StPassContainer>
      <StText>비밀번호 수정</StText>
      <Stpwinputcontainer>
        <StInputErrMsg>
          <StPsInput
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />

          {isPassword === false && <StFalSpan>{passwordMessage}</StFalSpan>}
        </StInputErrMsg>
        <StInputErrMsg>
          <StPsInput
            value={passwordCh}
            onChange={onChangePassWordCh}
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요"
          />
          {isPasswordConfirm === false && (
            <StFalSpan>{passwordConfirmMessage}</StFalSpan>
          )}
        </StInputErrMsg>
      </Stpwinputcontainer>

      <StInputTxt>
        영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
        이하로 입력해주세요
      </StInputTxt>
    </StPassContainer>
  );
};

export default PasswordValid;

const StPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 375px;
  height: 409px;
  background: #ffffff;
`;

const StText = styled.span`
  width: 343px;
  height: 19px;
  padding: 16px 16px 0px 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const Stpwinputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 10px;
  padding-bottom: 18px;
  width: 343px;
  height: 132px;
`;

const StInputErrMsg = styled.div`
  height: 80px;
  padding-bottom: 20px;
`;

const StPsInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  &:focus {
    outline: none !important;
    border: 2px solid #e5294a;
    border-radius: 8px;
  }
  background: #ffffff;
  border: 1px solid #d5dde5;
  border-radius: 8px;
`;

const StFalSpan = styled.span`
  padding-top: 6px;
  position: absolute;
  width: 300px;
  height: 19px;
  color: #e5294a;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: flex-end;
`;

const StInputTxt = styled.div`
  width: 343px;
  height: 42px;
  padding: 0px 16px 0px 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #66737f;
`;
