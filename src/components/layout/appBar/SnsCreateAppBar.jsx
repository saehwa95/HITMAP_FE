import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import closeIcon from "../../../asset/icon/closeIcon.svg";
import StatusBar from "./StatusBar";

const SnsCreateAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsCreateAppBarContainer>
      <StatusBar />
      <StSnsCreateAppBarBox>
        <StSnsCreateAppBarIcon
          src={closeIcon}
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
  width: 24px;
  height: 24px;
  padding: 12px;
  margin-left: 16px;
  background: #dfdfdf;
  border-radius: 16px;
`;

const StAppBarTitle = styled.div`
  margin-right: 126px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;
