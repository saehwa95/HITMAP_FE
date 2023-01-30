import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsCommentUpdateAbbBar from "../../layout/appBar/SnsCommentUpdateAbbBar";

const CommentUpdateModal = ({
  setMoreButtonModal,
  setUpdateCommentModal,
  list,
}) => {
  const [comment, setComment] = useState("");
  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  //댓글 업데이트 성공시 모달창들 닫는 함수
  const closeMoreButtonModal = () => {
    setMoreButtonModal(false);
  };
  const closeUpdateCommentModal = () => {
    setUpdateCommentModal(false);
  };

  //댓글 업데이트 Mutation
  const queryClient = useQueryClient();

  const updateComment = useMutation({
    mutationFn: async (commentUpdate) => {
      return await instance.patch(`/comment/${list.comment_id}`, commentUpdate);
    },
    onSuccess: () => {
      closeUpdateCommentModal();
      closeMoreButtonModal();
      queryClient.invalidateQueries({ queryKey: ["detailPost"] });
    },
  });
  const updateCommentHandler = () => {
    updateComment.mutate({ content: comment });
  };

  //댓글 쓰고 엔터키 누르면 댓글 작성되도록 하는 함수(input 태그에 적용)
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      updateCommentHandler();
    }
  };
  return (
    <StDeleteConfirmAll>
      <SnsCommentUpdateAbbBar
        setMoreButtonModal={setMoreButtonModal}
        setUpdateCommentModal={setUpdateCommentModal}
      />
      <StInputContainer>
        <StUpdateCommentInput
          defaultValue={list.comment}
          onChange={onChangeCommentHandler}
          onKeyPress={onKeyPress}
        />
      </StInputContainer>
      <StButtonBox>
        <StButton disabled={!comment} onClick={updateCommentHandler}>
          등록하기
        </StButton>
      </StButtonBox>
    </StDeleteConfirmAll>
  );
};

export default CommentUpdateModal;

const StDeleteConfirmAll = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 99.8vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const StInputContainer = styled.div`
  background-color: #ffffff;
  width: 375px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StUpdateCommentInput = styled.textarea`
  text-align: top;
  border: none;
  width: 343px;
  height: 79vh;
  background-color: #ffffff;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const StButtonBox = styled.div`
  padding: 8px 16px 27px 16px;
  width: 375px;
  height: 83px;
  background-color: #ffffff;
`;

const StButton = styled.button`
  width: 343px;
  height: 48px;
  color: white;
  border: none;
  background-color: ${(props) => (props.disabled ? "#A6CAD3" : "#006981")};
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  border-radius: 8px;
  cursor: pointer;
`;
