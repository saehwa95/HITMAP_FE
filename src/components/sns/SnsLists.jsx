import React from "react";
// import styled from "styled-components";
import SnsPostCard from "./SnsPostCard";

//등록된 postCards 를 get해와서 map으로 뿌려주는 컴포넌트
const SnsLists = () => {
  return (
    <div>
      {/* postcard맵 돌릴 자리야 이건 */}
      <SnsPostCard />
    </div>
  );
};

export default SnsLists;
