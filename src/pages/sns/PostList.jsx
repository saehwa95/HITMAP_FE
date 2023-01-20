import React from "react";
import SnsMainAppBar from "../../components/layout/appBar/SnsMainAppBar";
import SnsLists from "../../components/sns/main/SnsLists";
import IconNavigationBar from "../../components/layout/navigationBar/IconNavigationBar";

//sns목록 컴포넌트
const PostList = () => {
  return (
    <div>
      <SnsMainAppBar />
      <SnsLists />
      <IconNavigationBar />
    </div>
  );
};

export default PostList;
