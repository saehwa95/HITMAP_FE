import React from "react";
import styled from "styled-components";

//sns 포스트카드 한 장 컴포넌트
const SnsPostCard = () => {
  return (
    <StCardContainer>
      <StCardHeader>
        프로필아이콘, 닉네임, 생성시간, more아이콘 들어갈 자리
      </StCardHeader>
      <StCardContent>작성내용 들어갈 자리</StCardContent>
      <StCardImgBox>작성사진 들어갈 자리</StCardImgBox>
      <StCardStatus>좋아요, 댓글 아이콘 들어갈 자리</StCardStatus>
    </StCardContainer>
  );
};

export default SnsPostCard;

const StCardContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StCardHeader = styled.div`
  border: 1px solid orange;
`;

const StCardContent = styled.div`
  border: 1px solid pink;
`;

const StCardImgBox = styled.div`
  border: 1px solid brown;
`;

const StCardStatus = styled.div`
  border: 1px solid skyblue;
`;
