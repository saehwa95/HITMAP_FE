import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import commentIcon from "../../../asset/icon/commentIcon.svg";
import likeIcon from "../../../asset/icon/likeIcon.svg";
//sns 포스트카드 한 장 컴포넌트
//SnsList.jsx로부터 받아온 데이터들을 가공해서 바인딩해주자.
const SnsPostCard = ({ posts }) => {
  const navigate = useNavigate();
  //get한 서버 데이터 중 created_at을 정해진 디자인에 쓰기 위해 시간 포맷 바꿔주는 변수
  const timeForCard = posts.created_at.slice(0, 16).replace(/-/gi, ".");

  //상세페이지로 이동하는 함수
  const goDetailPage = () => {
    navigate(`/detail/${posts.post_id}`);
  };

  return (
    <StCardContainer>
      <StCardHeader>
        <div>
          <StCardHeaderProfileImg alt="프로필이미지" src={posts.user_image} />
        </div>
        <div>
          <StCardHeaderNickName>{posts.nickname}</StCardHeaderNickName>
          <StCardHeaderCreateTime>{timeForCard}</StCardHeaderCreateTime>
        </div>
      </StCardHeader>
      <StCardImgBox>
        <StCardImg
          alt="작성사진"
          src={posts.PostImage[0].src}
          onClick={goDetailPage}
        />
      </StCardImgBox>
      <StCardContent>{posts.content}</StCardContent>
      <StCardStatus>
        <StCardStatusCount>
          <img alt="좋아요 아이콘" src={likeIcon}></img>
          <span>{posts.like_count}</span>
        </StCardStatusCount>
        <StCardStatusCount onClick={goDetailPage}>
          <img alt="댓글 아이콘" src={commentIcon}></img>
          <span>{posts.comment_count}</span>
        </StCardStatusCount>
      </StCardStatus>
    </StCardContainer>
  );
};

export default SnsPostCard;

const StCardContainer = styled.div`
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 16px 16px 20px 16px;
  padding: 16px 0px 16px;
  gap: 16px;
`;

const StCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  gap: 16px;
`;

const StCardHeaderProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StCardHeaderNickName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #3f3f3f;
`;

const StCardHeaderCreateTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #c2c2c2;
`;

const StCardContent = styled.div`
  margin: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #3f3f3f;
`;

const StCardImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCardImg = styled.img`
  width: 343px;
  height: 343px;
`;

const StCardStatus = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  width: 145px;
  height: 32px;
  gap: 16px;
  width: 145px;
  height: 32px;
  margin-bottom: 4px;
`;

const StCardStatusCount = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #979797;
  font-weight: 700;
  font-size: 18px;
  width: 58px;
  height: 32px;
`;
