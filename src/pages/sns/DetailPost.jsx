import React from "react";
import SnsDetailAppBar from "../../components/layout/appBar/SnsDetailAppBar";
import SnsDetailCard from "../../components/sns/detail/SnsDetailCard";

//sns디테일앱바
const DetailPost = () => {
  return (
    <div>
      <SnsDetailAppBar />
      <SnsDetailCard />
    </div>
  );
};

export default DetailPost;
