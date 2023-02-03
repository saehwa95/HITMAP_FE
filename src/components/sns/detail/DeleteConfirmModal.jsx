import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import styled, { keyframes } from "styled-components";
import { instance } from "../../../redux/api/instance";

const DeleteConfirmModal = ({ setMoreButtonModal, setDeleteConfirmModal }) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const closeDeleteConfirmModal = () => {
    setDeleteConfirmModal(false);
    setMoreButtonModal(false);
  };

  const deleteMain = useMutation({
    mutationFn: async (postId) => {
      return await instance.delete(`/post/${postId}`);
    },
    onSuccess: () => {
      alert("게시글 삭제 완료");
      navigate("/postlist");
    },
  });

  return (
    <StDeleteConfirmAll>
      <StDeleteConfirmBox>
        <StDeleteConfirmMessage>
          게시글을 삭제하시겠습니까?
        </StDeleteConfirmMessage>
        <StDeleteConfirmButtonBox>
          <StDeleteConfirmCancelButton onClick={closeDeleteConfirmModal}>
            취소
          </StDeleteConfirmCancelButton>
          <StDeleteConfirmDeleteButton
            onClick={() => {
              deleteMain.mutate(postId);
            }}
          >
            삭제
          </StDeleteConfirmDeleteButton>
        </StDeleteConfirmButtonBox>
      </StDeleteConfirmBox>
    </StDeleteConfirmAll>
  );
};

export default DeleteConfirmModal;

const LoadEffect = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const StDeleteConfirmAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99.9vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  animation: ${LoadEffect} 0.2s ease-in-out;
`;

const StDeleteConfirmBox = styled.div`
  width: 312px;
  height: 164px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;

const StDeleteConfirmMessage = styled.div`
  margin: 16px 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 280px;
  height: 72px;
  color: #1f1f1f;
`;

const StDeleteConfirmButtonBox = styled.div``;

const StDeleteConfirmCancelButton = styled.button`
  width: 136px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #006981;
  margin-right: 4px;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #006981;
`;

const StDeleteConfirmDeleteButton = styled.button`
  width: 136px;
  height: 48px;
  margin-left: 4px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  background: #006981;
  border-radius: 8px;
  border: none;
`;
