import React from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { useEffect } from "react";

import styled from "styled-components";
import duplicateIcon from "../../../asset/icon/duplicateIcon.svg";

import useInputnickname from "../../../hooks/useInputnickname";

const NicknameValid = () => {
  const {
    nickdata,
    nickname,
    nicklValid,
    onNickChangeHandler,
    isnick,
    nickMessage,
    onnick,
  } = useInputnickname();
  console.log("2", nickname, nickdata);
  return (
    <StNickdiv>
      <StText>닉네임</StText>
      <StNIckName>
        <StErrMsg>
          {!isnick && (
            <StInput
              onChange={onNickChangeHandler}
              placeholder="닉네임을 입력해주세요"
              maxLength={10}
            />
          )}
          {/* {isnick === false && (
            <StFalseInput
              value={nickname}
              onChange={onNickChangeHandler}
              placeholder="닉네임을 입력해주세요"
              maxLength={10}
            />
          )} */}
          {isnick === true && (
            <StTrueInput
              value={nickname}
              onChange={onNickChangeHandler}
              placeholder="닉네임을 입력해주세요"
              maxLength={10}
            />
          )}
          {!nicklValid && nickname.length > 10 && (
            <StFalSpan>닉네임 형식이 바르지 않습니다.</StFalSpan>
          )}
          {isnick !== true && <StFalSpan>{nickMessage}</StFalSpan>}
          {isnick === true && <StTruSpan>{nickMessage}</StTruSpan>}
          {nickname === "" && <Stspan>닉네임을 입력해주세요</Stspan>}
        </StErrMsg>
        <StBtn src={duplicateIcon} onClick={onnick} />
      </StNIckName>

      <StInputTxt>
        닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로 입력해주세요
      </StInputTxt>
    </StNickdiv>
  );
};

export default NicknameValid;

const StNickdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 375px;
  height: 190px;

  /* Gray/White */

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

const StNIckName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 0 auto;
  gap: 10px;

  width: 343px;
  height: 73px;
`;

const StErrMsg = styled.div`
  gap: 20px;
  height: 80px;
`;

const StInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */
  &:focus {
    outline: none !important;
    border-color: red;
  }
  border: 1px solid #dfdfdf;
  background: #ffffff;
  /* Gray/Gray_200 */

  border-radius: 8px;
`;

const StFalseInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 2px solid #e5294a;
  border-radius: 8px;
`;

const StTrueInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 2px solid #5e67de;
  border-radius: 8px;
`;

const StFalSpan = styled.span`
  padding-top: 6px;
  position: absolute;
  width: 300px;
  height: 19px;

  color: #e5294a;
  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const StTruSpan = styled.span`
  position: absolute;
  width: 300px;
  height: 19px;
  padding-top: 6px;
  color: #5e67de;

  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const Stspan = styled.span`
  padding-top: 6px;
  position: absolute;
  width: 250px;
  height: 19px;
  background-color: white;
  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const StBtn = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 90px;
  height: 48px;
  cursor: pointer;
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
