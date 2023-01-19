import React from "react";
import styled from "styled-components";
import SnsComment from "./SnsComment";

//댓글들 모아서 리스트로 map 해주는 컴포넌트 (snsDetailCard에 컴포넌트로 들어갈 애임)
const SnsCommentList = ({ comments }) => {
  return (
    <StSnsCommentListContainer>
      <StTopBlank />
      {comments?.map((list) => {
        return <SnsComment list={list} key={list.comment_id} />;
      })}
    </StSnsCommentListContainer>
  );
};

export default SnsCommentList;

const StSnsCommentListContainer = styled.div`
  margin-top: 16px;
`;

const StTopBlank = styled.div`
  height: 16px;
  background-color: #f6f6f6; ;
`;
