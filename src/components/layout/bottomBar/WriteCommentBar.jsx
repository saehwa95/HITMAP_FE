import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";

const WriteCommentBar = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState("");

  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");

  const onChangeCommentHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
    // console.log(comment);
  };

  //유저 정보 불러오는 fetchAPI와 data
  const fetchAPI = () => {
    return authJudge ? instance.get("/me") : null;
  };
  const { data, isLoading, error } = useQuery(["userInfo"], fetchAPI);

  //댓글 작성 mutation
  // const updateAPI = () => {
  //   return instance.post(`/comment/${postId}`, {content: comment});
  // };

  // const {mutate} = useMutation(updateAPI, )

  return authJudge ? (
    <StWriteCommentBarContainer>
      <StWriteCommentBarBox>
        <StUserProfileImg
          alt="유저 프로필이미지"
          src={data?.data.profile_image}
        />
        <StTextBar>
          <StTextInput onChange={onChangeCommentHandler} />
          <StSendButton>등록</StSendButton>
        </StTextBar>
      </StWriteCommentBarBox>
    </StWriteCommentBarContainer>
  ) : null;
};

export default WriteCommentBar;

const StWriteCommentBarContainer = styled.div`
  border: 1px solid red;
  bottom: 0px;
  width: 375px;

  z-index: 100;
  position: absolute;
`;

const StWriteCommentBarBox = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px 39px 16px;
`;

const StUserProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 15px;
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
  border: 1px solid brown;
  border-radius: 16px;
`;

const StSendButton = styled.button`
  width: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #979797;
  border: none;
  background-color: transparent;
`;
