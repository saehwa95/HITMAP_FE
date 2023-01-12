import React from "react";
import styled from "styled-components";
import commentIcon from "../../../asset/icon/commentIcon.svg";
import likeIcon from "../../../asset/icon/likeIcon.svg";
//sns 포스트카드 한 장 컴포넌트
//SnsList.jsx로부터 받아온 데이터들을 가공해서 바인딩해주자.
const SnsPostCard = ({ posts }) => {
  // console.log(posts);
  return (
    <StCardContainer>
      <StCardHeader>
        <div>
          <img alt="프로필이미지" src={posts.user_image} />
          <div>{posts.nickname}</div>
        </div>
        <div>{posts.created_at}</div>
      </StCardHeader>
      <StCardContent>{posts.content}</StCardContent>
      <StCardImgBox>
        {/* 작성사진 들어갈 자리 */}
        <StCardImg alt="작성사진" src={posts.PostImage[0].src} />
      </StCardImgBox>
      <StCardStatus>
        {/* 좋아요, 댓글 아이콘 들어갈 자리 */}
        <div>
          <img alt="좋아요 아이콘" src={likeIcon}></img>
          <span>{posts.like_count}</span>
        </div>
        <div>
          <img alt="댓글 아이콘" src={commentIcon}></img>
          <span>{posts.comment_count}</span>
        </div>
      </StCardStatus>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCardImg = styled.img`
  width: 350px;
  height: 350px;
`;

const StCardStatus = styled.div`
  border: 1px solid skyblue;
  display: flex;
  flex-direction: row;
`;
