import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import closeButton from "../../../asset/button/closeButton.svg";
import StatusBar from "./StatusBar";

const SnsCommentUpdateAbbBar = ({
  setMoreButtonModal,
  setUpdateCommentModal,
}) => {
  //댓글 삭제 확인 모달창 끄는 함수
  const closeUpdateCommentModal = () => {
    setMoreButtonModal(false);
    setUpdateCommentModal(false);
  };

  return (
    <StSnsCommentUpdateAbbBarContainer>
      <StatusBar />
      <StSnsCommentUpdateAbbBarBox>
        <StSnsCommentUpdateAbbBarIcon
          src={closeButton}
          alt="취소 아이콘"
          onClick={closeUpdateCommentModal}
        />
        <StAppBarTitle>댓글 수정</StAppBarTitle>
      </StSnsCommentUpdateAbbBarBox>
    </StSnsCommentUpdateAbbBarContainer>
  );
};

export default SnsCommentUpdateAbbBar;

const StSnsCommentUpdateAbbBarContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StSnsCommentUpdateAbbBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const StSnsCommentUpdateAbbBarIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  background: #dfdfdf;
  border-radius: 16px;
`;

const StAppBarTitle = styled.div`
  padding-right: 15px;
  margin-right: 126px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;
