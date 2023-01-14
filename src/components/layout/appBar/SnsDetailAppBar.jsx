import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../../../asset/icon/backIcon.svg";
import StatusBar from "./StatusBar";
import backButton from "../../../asset/button/backButton.svg";

const SnsDetailAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsDetailAppBarContainer>
      <StatusBar />
      <StBackIconBackGround>
        <StBackIconImg
          src={backButton}
          alt="뒤로가기 아이콘"
          onClick={() => {
            navigate("/postlist");
          }}
        />
      </StBackIconBackGround>
    </StSnsDetailAppBarContainer>
  );
};

export default SnsDetailAppBar;

const StSnsDetailAppBarContainer = styled.div`
  border: 1px solid red;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StBackIconBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StBackIconImg = styled.img`
  width: 48px;
  height: 48px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
`;
