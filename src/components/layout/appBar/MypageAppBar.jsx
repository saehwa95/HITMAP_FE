import React from "react";
import styled from "styled-components";

const MypageAppBar = () => {
  return (
    <MypageAppBarWrapper>
      <span>마이페이지</span>
    </MypageAppBarWrapper>
  );
};

export default MypageAppBar;

const MypageAppBarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 8px 16px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #1f1f1f;
  }
`;