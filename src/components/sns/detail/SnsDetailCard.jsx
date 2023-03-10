import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled, { keyframes } from "styled-components";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";
import SnsDetailCarousel from "./SnsDetailCarousel";
import WriteCommentBar from "../../layout/bottomBar/WriteCommentBar";
import SnsCommentList from "../comment/SnsCommentList";
import likeIcon from "../../../asset/icon/likeIcon.svg";
import likeActiveIcon from "../../../asset/icon/likeActiveIcon.svg";
import commentIcon from "../../../asset/icon/commentIcon.svg";

//sns 상세카드 한 장 컴포넌트
const SnsDetailCard = () => {
  const { postId } = useParams();

  const authJudge = getCookie("auth");

  const queryClient = useQueryClient();
  const submitLike = useMutation({
    mutationFn: async () => {
      return await instance.patch(`/post/${postId}/like`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detailPost"] });
    },
  });

  const detailPostAPI = async () => {
    return await instance.get(`/post/${postId}`);
  };

  const { data, isLoading } = useQuery(["detailPost"], detailPostAPI, {
    staleTime: 15000,
  });
  const detailData = data?.data.post;
  const imageSrc = detailData?.PostImage;
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  //get한 서버 데이터 중 created_at을 정해진 디자인에 쓰기 위해 시간 포맷 바꿔주는 변수
  const timeForCard = detailData.created_at.slice(0, 16).replace(/-/gi, ".");

  // 좋아요 기능 함수
  const postLikeHandler = () => {
    authJudge ? submitLike.mutate() : alert("로그인이 필요한 기능입니다");
  };

  return (
    <StDetailCardContainer>
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
          <StCarouselBox>
            <SnsDetailCarousel imageSrc={imageSrc} />
          </StCarouselBox>
        </StCardImgBox>
        <StCardContent>{detailData.content}</StCardContent>
        <StFishNameContainer>
          <StFishNameLabel>조황정보</StFishNameLabel>
          <StFishName>{detailData.fishName}</StFishName>
        </StFishNameContainer>
        <StCardStatusBox>
          <StLikeStatusCount onClick={postLikeHandler}>
            {detailData.like ? (
              <img alt="좋아요 아이콘" src={likeActiveIcon}></img>
            ) : (
              <img alt="좋아요 아이콘" src={likeIcon}></img>
            )}

            <span>{detailData.like_count}</span>
          </StLikeStatusCount>
          <StCommentStatusCount>
            <img alt="댓글 아이콘" src={commentIcon}></img>
            <span>{detailData.comment_count}</span>
          </StCommentStatusCount>
        </StCardStatusBox>
      </div>
      <SnsCommentList comments={detailData.comments} />
      <WriteCommentBar />
    </StDetailCardContainer>
  );
};

export default SnsDetailCard;

const LoadEffect = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const StDetailCardContainer = styled.div`
  height: 79vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  animation: ${LoadEffect} 0.2s ease-in-out;
`;

const StCardHeader = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StCardHeaderProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StCardHeaderNickName = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  color: #3f3f3f;
`;

const StCardHeaderCreateTime = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #c2c2c2;
`;

const StCardImgBox = styled.div`
  padding-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCarouselBox = styled.div`
  width: 342px;
`;

const StCardContent = styled.div`
  margin: 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #3f3f3f;
`;

const StFishNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  height: 85px;
  margin: 16px;
  padding: 16px;
  background: #f6f6f6;
  border-radius: 8px;
`;

const StFishNameLabel = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const StFishName = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

const StCardStatusBox = styled.div`
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

const StLikeStatusCount = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #979797;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  width: 58px;
  height: 32px;
  cursor: pointer;
`;

const StCommentStatusCount = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #979797;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  width: 58px;
  height: 32px;
`;
