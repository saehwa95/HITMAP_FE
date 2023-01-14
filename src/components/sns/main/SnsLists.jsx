import React from "react";
import { useQuery } from "@tanstack/react-query";
// import styled from "styled-components";
import SnsPostCard from "./SnsPostCard";
import { instance } from "../../../redux/api/instance";
//등록된 postCards 를 get해와서 map으로 뿌려주는 컴포넌트
//여기서 쿼리로 등록된 글 서버데이터 get 해와서 map안의 SnsPostCard에게 props로 데이터를 내려주는 방향?
const SnsLists = () => {
  const fetchAPI = () => {
    return instance.get("/post");
  };

  const { data, isLoading, error } = useQuery(["posts"], fetchAPI);
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
    <div>
      {/* postcard맵 돌릴 자리야, 작업시 보여주려고 SnsPostCard컴포 일단 박아둔거야 ㅇㅋ?*/}
      {data?.data.posts.map((item) => {
        return <SnsPostCard key={item.post_id} posts={item} />;
      })}
    </div>
  );
};

export default SnsLists;
