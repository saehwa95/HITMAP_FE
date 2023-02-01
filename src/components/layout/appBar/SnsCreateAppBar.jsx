import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import closeButton from "../../../asset/button/closeButton.svg";

const SnsCreateAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsCreateAppBarContainer>
      <StatusBar />
      <StSnsCreateAppBarBox>
        <StSnsCreateAppBarIcon
          src={closeButton}
          alt="취소 아이콘"
          onClick={() => {
            navigate("/postlist");
          }}
        />
        <StAppBarTitle>게시글 작성</StAppBarTitle>
      </StSnsCreateAppBarBox>
    </StSnsCreateAppBarContainer>
  );
};

export default SnsCreateAppBar;

const StSnsCreateAppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StSnsCreateAppBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const StSnsCreateAppBarIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  background: #dfdfdf;
  border-radius: 16px;
  cursor: pointer;
`;

const StAppBarTitle = styled.div`
  margin-right: 126px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;
