import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled, { keyframes } from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsPostCard from "./SnsPostCard";

//등록된 postCards 를 get해와서 map으로 뿌려주는 컴포넌트
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

const LoadEffect = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const StSnsList = styled.div`
  height: 77vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  background: #f6f6f6;
  animation: ${LoadEffect} 0.3s ease-in-out;
`;
