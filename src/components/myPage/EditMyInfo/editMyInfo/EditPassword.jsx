import React from "react";
import styled from "styled-components";
import PasswordEditAppBar from "../../../layout/appBar/PasswordEditAppBar";
import StatusBar from "../../../layout/appBar/StatusBar";

const EditPassword = () => {
  return (
    <div>
      <StatusBar />
      <PasswordEditAppBar />
      <PasswordFormWrapper>
        <TextBox>
          <InputBox>
            <PasswordInput
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
            />
            <PasswordInput
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
            />
            <PasswordInput
              type="password"
              placeholder="새 비밀번호를 다시 한 번 입력해주세요."
            />
          </InputBox>
          <SpanText>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요.
          </SpanText>
        </TextBox>
      </PasswordFormWrapper>
      <EditButtonWrapper>
        <EditButton>수정완료</EditButton>
      </EditButtonWrapper>
    </div>
  );
};

export default EditPassword;

const PasswordFormWrapper = styled.div`
  width: 375px;
  height: 357px;
  margin-bottom: 264px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  gap: 12px;
  width: 375px;
  height: 258px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 343px;
  height: 164px;
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  width: 343px;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

const SpanText = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #3f3f3f;
`;

const EditButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 0px;
  gap: 10px;
  width: 375px;
  height: 83px;
`;

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 343px;
  height: 48px;
  background: #a6cad3;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
`;
