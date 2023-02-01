import React, { useState } from "react";
import styled from "styled-components";
import CommentDeleteConfirmModal from "./CommentDeleteConfirmModal";
import CommentUpdateModal from "./CommentUpdateModal";

const CommentMoreButtonModal = ({ setMoreButtonModal, list }) => {
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const [updateCommentModal, setUpdateCommentModal] = useState(false);

  return (
    <StModalContainer>
      <StGoCommentUpdateButton
        onClick={() => {
          setUpdateCommentModal(!updateCommentModal);
        }}
      >
        댓글 수정하기
      </StGoCommentUpdateButton>
      <StGoCommentDeleteComfirmButton
        onClick={() => {
          setDeleteConfirmModal(!deleteConfirmModal);
        }}
      >
        삭제하기
      </StGoCommentDeleteComfirmButton>
      {deleteConfirmModal && (
        <CommentDeleteConfirmModal
          setMoreButtonModal={setMoreButtonModal}
          setDeleteConfirmModal={setDeleteConfirmModal}
          list={list}
        />
      )}
      {updateCommentModal && (
        <CommentUpdateModal
          setMoreButtonModal={setMoreButtonModal}
          setUpdateCommentModal={setUpdateCommentModal}
          list={list}
        />
      )}
    </StModalContainer>
  );
};

export default CommentMoreButtonModal;

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 150px;
  height: 112px;
  left: 160px;
  top: 0px;
`;

const StGoCommentUpdateButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 56px;
  border-bottom: 1px solid #979797;
  background-color: #3f3f3f;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: #3f3f3f;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  cursor: pointer;
`;

const StGoCommentDeleteComfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 150px;
  height: 56px;
  background-color: #3f3f3f;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border-top: 1px solid #979797;
  border: #3f3f3f;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  cursor: pointer;
`;
