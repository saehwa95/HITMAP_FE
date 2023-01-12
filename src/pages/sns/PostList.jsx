import React from "react";
import SnsMainAppBar from "../../components/layout/appBar/SnsMainAppBar";
import SnsLists from "../../components/sns/SnsLists";
//sns목록 컴포넌트
//SnsHeader, SnsLists, navigationBar 필요
const PostList = () => {
  return (
    <div>
      <SnsMainAppBar />
      <SnsLists />
    </div>
  );
};

export default PostList;
