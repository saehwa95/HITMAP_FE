import React from "react";
import styled from "styled-components";
import LogoutWithdraw from "../logoutWithdraw/LogoutWithdraw";
import { ReactComponent as ClickIdIcon } from "../../../../asset/icon/ClickIdIcon.svg";
const EditUser = () => {
  return (
    <>
      <EditMyInfo>
        <ImageBox>
          <MyImage />
          <EditImageBtn>
            <span>사진변경</span>
            <ClickIdIcon />
          </EditImageBtn>
        </ImageBox>
        <TextBox>
          <NicknameBox>
            <StSpan>닉네임</StSpan>
            <InputDivBox>
              <input type="text" />
              <button>중복확인</button>
            </InputDivBox>
            <span>
              닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로
              입력해주세요.
            </span>
          </NicknameBox>
          <PasswordBox>
            <StSpan>비밀번호</StSpan>
            <button>비밀번호 변경</button>
          </PasswordBox>
        </TextBox>
      </EditMyInfo>
      <MarginBar />
      <LogoutWithdraw />
      <EditButtonWrapper>
        <button>수정 완료</button>
      </EditButtonWrapper>
    </>
  );
};

export default EditUser;

const EditMyInfo = styled.div`
  width: 375px;
  height: 456px;
`;
const ImageBox = styled.div`
  box-sizing: border-box;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 12px;
  gap: 16px;
`;
const MyImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: grey;
`;
const EditImageBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 105px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #006981;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #006981;
    margin: 0 11px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 276px;
`;
const InputDivBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  width: 343px;
  height: 48px;
  margin: 12px 0;
  input {
    box-sizing: border-box;
    padding: 4px 16px;
    width: 243px;
    height: 48px;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #1f1f1f;
  }
  button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 48px;
    background: #006981;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }
`;

const StSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const NicknameBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 375px;
  height: 165px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #3f3f3f;
  }
`;

const PasswordBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 375px;
  height: 111px;
  gap: 12px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 343px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #006981;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #006981;
  }
`;

const MarginBar = styled.div`
  width: 374px;
  height: 16px;
  background-color: #ececec;
`;

const EditButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 83px;
  padding: 8px 16px 27px 16px;
  button {
    width: 343px;
    height: 48px;
    background-color: #006981;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
