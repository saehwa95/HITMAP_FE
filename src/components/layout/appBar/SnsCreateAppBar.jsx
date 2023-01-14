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
        <StAppBarTitle>글쓰기</StAppBarTitle>
      </StSnsCreateAppBarBox>
    </StSnsCreateAppBarContainer>
  );
};

export default SnsCreateAppBar;

const StSnsCreateAppBarContainer = styled.div`
  border: 1px solid red;
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
  padding: 8px 16px 8px 16px;
`;

const StSnsCreateAppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 12px;
  background: #dfdfdf;
  border-radius: 16px;
`;

const StAppBarTitle = styled.div`
  border: 1px solid blue;
  /* margin: 0 auto; */
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;
