import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import SnsPostCard from "./SnsPostCard";
import { instance } from "../../../redux/api/instance";
//등록된 postCards 를 get해와서 map으로 뿌려주는 컴포넌트
//여기서 쿼리로 등록된 글 서버데이터 get 해와서 map안의 SnsPostCard에게 props로 데이터를 내려주는 방향?
const SnsLists = () => {
  const postsAPI = () => {
    return instance.get("/post");
  };

  const { data, isLoading, error } = useQuery(["posts"], postsAPI);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (error)
    return (
      <>
        <h2>something went wrong</h2>
      </>
    );
  return (
    <StSnsList>
      {data?.data.posts.map((item) => {
        return <SnsPostCard key={item.post_id} posts={item} />;
      })}
    </StSnsList>
  );
};

export default SnsLists;

const StSnsList = styled.div`
  //무한스크롤처럼 보이게 땜질한 css(추후 무한스크롤 진행 예정)
  height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
