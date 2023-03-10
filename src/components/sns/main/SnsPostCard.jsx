import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import commentIcon from "../../../asset/icon/commentIcon.svg";
import likeIcon from "../../../asset/icon/likeIcon.svg";
import { instance } from "../../../redux/api/instance";
import likeActiveIcon from "../../../asset/icon/likeActiveIcon.svg";
import { getCookie } from "../../../shared/cookie.js";

//sns 포스트카드 한 장 컴포넌트
const SnsPostCard = React.memo(({ posts }) => {
  const navigate = useNavigate();
  const authJudge = getCookie("auth");

  //get한 서버 데이터 중 created_at을 정해진 디자인에 쓰기 위해 시간 포맷 바꿔주는 역할
  const timeForCard = posts.created_at.slice(0, 16).replace(/-/gi, ".");

  //상세페이지로 이동하는 함수
  const goDetailPage = () => {
    navigate(`/detail/${posts.post_id}`);
  };

  const queryClient = useQueryClient();
  const submitLike = useMutation({
    mutationFn: async () => {
      return await instance.patch(`/post/${posts.post_id}/like`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // 좋아요 기능 함수(비로그인시 alert)
  const postLikeHandler = () => {
    authJudge ? submitLike.mutate() : alert("로그인이 필요한 기능입니다");
  };

  //리사이징 작업 간 잠시 보여줄 오리지널 이미지 보여주는 함수
  const altOriginImg = (e) => {
    e.target.src = posts.original_post_image;
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
        <div>
          <StCardImg
            alt="작성사진"
            src={posts.resizing_post_image[0].src}
            onError={altOriginImg}
            onClick={goDetailPage}
          />
        </div>
      </StCardImgBox>
      <StCardContent>{posts.content}</StCardContent>
      <StCardStatus>
        <StLikeStatusCount onClick={postLikeHandler}>
          {posts.like ? (
            <img alt="좋아요 아이콘" src={likeActiveIcon} />
          ) : (
            <img alt="좋아요 아이콘" src={likeIcon} />
          )}
          <span>{posts.like_count}</span>
        </StLikeStatusCount>
        <StCommentStatusCount onClick={goDetailPage}>
          <img alt="댓글 아이콘" src={commentIcon}></img>
          <span>{posts.comment_count}</span>
        </StCommentStatusCount>
      </StCardStatus>
    </StCardContainer>
  );
});

export default SnsPostCard;

const StCardContainer = styled.div`
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 16px 16px 20px 16px;
  background-color: white;
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

const StCardContent = styled.div`
  margin: 16px;
  font-family: "Pretendard";
  font-style: normal;
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
  cursor: pointer;
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
  cursor: pointer;
`;
