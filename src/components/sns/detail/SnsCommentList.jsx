import React from "react";
import styled from "styled-components";
import SnsComment from "./SnsComment";

//댓글들 모아서 리스트로 map 해주는 컴포넌트 (snsDetailCard에 컴포넌트로 들어갈 애임)
const SnsCommentList = ({ comments }) => {
  return (
    <StSnsCommentListContainer>
      {/* 나중에 여기다가 snsComment 컴포넌트 맵 돌릴거야
      지금은 임의로 보여놓으려고 넣어놓은거야 */}
      <SnsComment />
    </StSnsCommentListContainer>
  );
};

export default SnsCommentList;

const StSnsCommentListContainer = styled.div`
  border: 1px solid green;
`;
