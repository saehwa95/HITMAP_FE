import React from "react";
import styled from "styled-components";
import { ReactComponent as Profile } from "../../../asset/icon/Profile.svg";

const LoginInfo = () => {
  return (
    <LoginInfoWrapper>
      <Profile className="profileIcon" />
      <span className="firstSpan">로그인을 해주세요.</span>
      <span className="secondSpan">더 편리한 히트맵을 경험하세요.</span>
    </LoginInfoWrapper>
  );
};

export default LoginInfo;

const LoginInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  span {
    font-family: "Pretendard";
    font-style: normal;
  }
  .profileIcon {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
  }
  .firstSpan {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #1f1f1f;
    margin-bottom: 8px;
  }
  .secondSpan {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #979797;
  }
`;
