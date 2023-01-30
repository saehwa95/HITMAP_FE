import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";

const WriteCommentBar = () => {
  const { postId } = useParams();

  //Query Invalidation ( 쿼리 값 mutation 일어나면 쿼리 무효화 해주고 새로운 쿼리값 보여주는 코드)
  const queryClient = useQueryClient();

  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");

  const [comment, setComment] = useState("");
  const onChangeCommentHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  // 댓글 작성 mutation
  const postComment = useMutation({
    mutationFn: async (commentPost) => {
      return await instance.post(`/comment/${postId}`, commentPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detailPost"] });
    },
  });
  //댓글 input창에 내용 없으면 등록 안되게 if문 처리
  const postCommentHandler = () => {
    if (comment) {
      postComment.mutate({ content: comment });
      setComment("");
    }
  };

  //댓글 쓰고 엔터키 누르면 댓글 작성되도록 하는 함수(input 태그에 적용)
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      postCommentHandler();
    }
  };

  //유저 정보 불러오는 fetchAPI와 data
  const userInfoAPI = () => {
    return authJudge ? instance.get("/me") : null;
  };
  const { data } = useQuery(["userInfo"], userInfoAPI);
  return authJudge ? (
    <StWriteCommentBarContainer>
      <StWriteCommentBarBox>
        <StUserProfileImg
          alt="유저 프로필이미지"
          src={data?.data.profile_image}
        />
        <StTextBar>
          <StTextInput
            maxLength="20"
            onChange={onChangeCommentHandler}
            placeholder="댓글 남기기(최대 20자)"
            value={comment}
            onKeyPress={onKeyPress}
          />
          <StSendButton onClick={postCommentHandler}>등록</StSendButton>
        </StTextBar>
      </StWriteCommentBarBox>
    </StWriteCommentBarContainer>
  ) : null;
};

export default WriteCommentBar;

const StWriteCommentBarContainer = styled.div`
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  bottom: 0px;
  width: 375px;

  z-index: 100;
  position: absolute;
`;

const StWriteCommentBarBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px 39px 16px;
`;

const StUserProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StTextBar = styled.div`
  width: 300px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`;

const StTextInput = styled.input`
  width: 240px;
  border: none;
  border-radius: 16px;
  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #c2c2c2;
    text-indent: 16px;
  }
  &:focus {
    outline: none;
  }
`;

const StSendButton = styled.button`
  width: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #979797;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
