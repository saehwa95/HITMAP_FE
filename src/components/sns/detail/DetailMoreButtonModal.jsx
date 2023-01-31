import React, { useState } from "react";
import styled from "styled-components";
import DeleteConfirmModal from "./DeleteConfirmModal";
import SnsUpdateModal from "../update/SnsUpdateModal";

const DetailMoreButtonModal = ({ setMoreButtonModal }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);

  return (
    <StModalContainer>
      <StGoUpdatePageButton
        onClick={() => {
          setUpdateModal(!updateModal);
        }}
      >
        게시글 수정하기
      </StGoUpdatePageButton>
      <StGoDeleteButton
        onClick={() => {
          setDeleteConfirmModal(!deleteConfirmModal);
        }}
      >
        삭제하기
      </StGoDeleteButton>
      {updateModal && (
        <SnsUpdateModal
          setUpdateModal={setUpdateModal}
          setMoreButtonModal={setMoreButtonModal}
        />
      )}
      {deleteConfirmModal && (
        <DeleteConfirmModal
          setMoreButtonModal={setMoreButtonModal}
          setDeleteConfirmModal={setDeleteConfirmModal}
        />
      )}
    </StModalContainer>
  );
};

export default DetailMoreButtonModal;

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 150px;
  height: 112px;
  left: 209px;
  top: 92px;
  z-index: 1000;
`;

const StGoUpdatePageButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 56px;
  border-bottom: 1px solid #979797;
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: #3f3f3f;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  cursor: pointer;
`;

const StGoDeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 150px;
  height: 56px;
  background-color: #3f3f3f;
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
