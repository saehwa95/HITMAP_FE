import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import backButton from "../../../asset/button/backButton.svg";

const EditMypageAppBar = () => {
  const navigate = useNavigate();

  return (
    <StEditMypageContainer>
      <StatusBar />
      <StEditMypageTitle>
        <StEditMypageItem>
          <StBackIconImg
            src={backButton}
            onClick={() => {
              navigate("/mypage");
            }}
          />
          <TitleSpan>내 정보 수정</TitleSpan>
        </StEditMypageItem>
      </StEditMypageTitle>
    </StEditMypageContainer>
  );
};

export default EditMypageAppBar;

const StEditMypageContainer = styled.div`
  width: 375px;
  height: 108px;
  background: #ffffff;
`;

const StEditMypageTitle = styled.div`
  height: 64px;
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  padding: 8px 16px;
`;

const StEditMypageItem = styled.div`
  width: 343px;
  height: 48px;
  background: #ffffff;
`;
const TitleSpan = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1f1f1f;
  margin: 10px 50px 0px 0px;
`;

const StBackIconImg = styled.img`
  width: 48px;
  height: 48px;
  float: left;
  cursor: pointer;
`;
