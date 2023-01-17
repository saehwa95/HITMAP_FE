import styled from "styled-components";
import React from "react";
import { instance } from "../../../redux/api/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const DetailMoreButtonModal = (setMoreButtonModal) => {
  // const queryClient = useQueryClient();
  const { postId } = useParams();
  const navigate = useNavigate();
  //사용자 정보 가져오는 쿼리
  // const fetchAPI = () => {
  //   return instance.get("/me");
  // };
  // const { data, isLoading, error } = useQuery(["userInfo"], fetchAPI);
  // const userInformation = data?.data.user_id;

  // // 게시글 작성자 정보 가져오는 쿼리
  // const detailAPI = () => {
  //   return instance.get(`/post/${postId}`);
  // };

  // const detailPostResponse = useQuery(["detailPost"], detailAPI);
  // const writerInformation = detailPostResponse.data?.data.post.user_id;

  const deleteMain = useMutation({
    mutationFn: async (postId) => {
      return await instance.delete(`/post/${postId}`);
    },
    onSuccess: () => {
      alert("게시글 삭제 완료");
      navigate("/postlist");
    },
  });

  return (
    <StModalContainer>
      <StGoUpdatePageButton>게시글 수정하기</StGoUpdatePageButton>
      <StGoDeleteButton
        onClick={() => {
          deleteMain.mutate(postId);
        }}
      >
        삭제하기
      </StGoDeleteButton>
    </StModalContainer>
  );
};

export default DetailMoreButtonModal;

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 150px;
  height: 112px;
  left: 209px;
  top: 92px;
`;

const StGoUpdatePageButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 56px;
  border-bottom: 1px solid #979797;
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: #3f3f3f;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const StGoDeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 150px;
  height: 56px;
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border-top: 1px solid #979797;
  border: #3f3f3f;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
