/* 내 게시글 목록 컴포넌트 */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../redux/api/instance";

const MyPostList = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const myPostListAPI = async () => {
    return await instance.get(`/me/${userId}`);
  };

  const { data } = useQuery(["myPostList"], myPostListAPI);

  const myPostLists = data?.data.Posts;

  return (
    <MyPostListWrapper>
      {myPostLists?.map((value, index) => {
        return (
          <div key={`my-post-list-${index}`} onClick={()=>{navigate(`/detail/${value.post_id}`)}}>
            <img alt="" src={value.PostImages[0].src} />
          </div>
        );
      })}
    </MyPostListWrapper>
  );
};

export default MyPostList;

const MyPostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 122px 122px 122px;
  grid-template-rows: 122px 122px 122px;
  gap: 4px;
  margin-top: 16px;
  height: 321px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 122px;
    height: 122px;
  }
`;
