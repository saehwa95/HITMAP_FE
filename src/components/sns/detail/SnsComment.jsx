import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";

//댓글 하나 컴포넌트
const SnsComment = ({ list }) => {
  const timeForComment = list.created_at.slice(0, 16).replace(/-/gi, ".");
  //Query Invalidation ( 쿼리 값 mutation 일어나면 쿼리 무효화 해주고 새로운 쿼리값 보여주는 코드)
  const queryClient = useQueryClient();

  //유저 정보 불러오는 fetchAPI와 data
  const fetchAPI = () => {
    return instance.get("/me");
  };
  const { data } = useQuery(["userInfo"], fetchAPI);

  //사용자 닉네임
  const userInformation = data?.data.nickname;
  //작성자 닉네임
  const writerInformation = list.nickname;

  //댓글 삭제 mutation
  const deleteComment = useMutation({
    mutationFn: async () => {
      return await instance.delete(`/comment/${list.comment_id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detailPost"] });
    },
  });

  return (
    <StSnsCommentContainer>
      <StSnsCommentWriterInfo>
        <StSnsCommentUserImg
          alt="댓글 작성자 프로필 이미지"
          src={list.user_image}
        />
        <div>
          <StSnsCommentWriterNickName>
            {list.nickname}
          </StSnsCommentWriterNickName>
          <StSnsCommentCreateTime>{timeForComment}</StSnsCommentCreateTime>
        </div>
      </StSnsCommentWriterInfo>
      <StSnsCommentBody>{list.comment}</StSnsCommentBody>
      {userInformation === writerInformation ? (
        <button
          onClick={() => {
            deleteComment.mutate();
          }}
        >
          댓글삭제버튼
        </button>
      ) : null}
    </StSnsCommentContainer>
  );
};

export default SnsComment;

const StSnsCommentContainer = styled.div`
  margin: 0 16px;
  padding: 16px 0 0 0;
`;

const StSnsCommentWriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StSnsCommentUserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StSnsCommentCreateTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #c2c2c2;
`;

const StSnsCommentWriterNickName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3f3f;
`;
const StSnsCommentBody = styled.div`
  color: #3f3f3f;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 10px 0 12px 52px;
`;
