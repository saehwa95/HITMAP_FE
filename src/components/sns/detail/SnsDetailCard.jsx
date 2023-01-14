import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import SnsCommentList from "./SnsCommentList";
import { instance } from "../../../redux/api/instance";
import likeIcon from "../../../asset/icon/likeIcon.svg";
import commentIcon from "../../../asset/icon/commentIcon.svg";
import WriteCommentBar from "../../layout/bottomBar/WriteCommentBar";

//sns 상세카드 한 장 컴포넌트
const SnsDetailCard = () => {
  const { postId } = useParams();
  const fetchAPI = () => {
    return instance.get(`/post/${postId}`);
  };

  const { data, isLoading, isError, error } = useQuery(
    ["detailPost"],
    fetchAPI
  );
  const detailData = data?.data.post;
  // console.log(detailData);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  //get한 서버 데이터 중 created_at을 정해진 디자인에 쓰기 위해 시간 포맷 바꿔주는 변수
  const timeForCard = detailData.created_at.split("T")[0].replace(/-/gi, ".");

  return (
    <div>
      <StCardHeader>
        <div>
          <StCardHeaderProfileImg
            alt="프로필이미지"
            src={detailData.user_image}
          />
        </div>
        <div>
          <StCardHeaderNickName>{detailData.nickname}</StCardHeaderNickName>
          <StCardHeaderCreateTime>{timeForCard}</StCardHeaderCreateTime>
        </div>
      </StCardHeader>
      <div>
        <StCardImgBox>
          {/* 작성사진 들어갈 자리 */}
          <StCardImg alt="작성사진" src={detailData.PostImage[0].src} />
        </StCardImgBox>
        <StCardContent>{detailData.content}</StCardContent>
        <StFishNameContainer>
          <StFishNameLabel>조황정보</StFishNameLabel>
          <StFishName>{detailData.fishName}</StFishName>
        </StFishNameContainer>
        <StCardStatusBox>
          <StCardStatusCount>
            <img alt="좋아요 아이콘" src={likeIcon}></img>
            <span>{detailData.like_count}</span>
          </StCardStatusCount>
          <StCardStatusCount>
            <img alt="댓글 아이콘" src={commentIcon}></img>
            <span>{detailData.comment_count}</span>
          </StCardStatusCount>
        </StCardStatusBox>
      </div>
      <SnsCommentList comments={detailData.comments} />
      <WriteCommentBar />
    </div>
  );
};

export default SnsDetailCard;

const StCardHeader = styled.div`
  border: 1px solid orange;
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

const StCardContent = styled.div`
  border: 1px solid pink;
`;

const StFishNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 343px;
  height: 85px;
  margin: 8px;
  padding: 8px;
  background: #f6f6f6;
  border-radius: 8px;
`;

const StFishNameLabel = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const StFishName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

const StCardStatusBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StCardStatusCount = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px 4px 8px;
  gap: 4px;
  width: 58px;
  height: 32px;
`;
