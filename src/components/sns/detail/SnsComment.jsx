import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";

//댓글 하나 컴포넌트
const SnsComment = () => {
  // 유저 정보 불러오는 fetchAPI와 data
  // const fetchAPI = () => {
  //   return instance.get("/me");
  // };
  // const { data, isLoading, error } = useQuery(["userInfo"], fetchAPI);
  // console.log(data.data);

  return (
    <StSnsCommentContainer>
      <StSnsCommentHeader>
        프로필아이콘, 닉네임, more아이콘 들어갈 자리
      </StSnsCommentHeader>
      <StSnsCommentBody>댓글 내용 들어갈 자리</StSnsCommentBody>
    </StSnsCommentContainer>
  );
};

export default SnsComment;

const StSnsCommentContainer = styled.div`
  border: 1px solid red;
`;

const StSnsCommentHeader = styled.div`
  border: 1px solid blue;
`;

const StSnsCommentBody = styled.div`
  border: 1px solid darkblue;
`;
