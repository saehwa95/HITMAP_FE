import React from "react";
import styled, { keyframes } from "styled-components";
import loadingPageImg from "../../asset/image/loadingPageImg.svg";

const LoadingPage = () => {
  return (
    <StLoadingImgContainer>
      <StLoadingImg alt="로딩 페이지" src={loadingPageImg} />
      <span>로딩중...</span>
    </StLoadingImgContainer>
  );
};

export default LoadingPage;

const LoadEffect = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const StLoadingImgContainer = styled.div`
  width: 375px;
  height: 99.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 36px;
    font-weight: 700;
    font-family: "Pretendard";
    font-style: normal;
    color: #003b49;
  }
`;

const StLoadingImg = styled.img`
  width: 375px;
  animation: ${LoadEffect} 0.1s ease-in-out;
`;
