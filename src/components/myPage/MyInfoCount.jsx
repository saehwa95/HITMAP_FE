import React from "react";
import styled from "styled-components";

const MyInfoCount = ({ countData }) => {
  return (
    <CountWrapper>
      <div className="postCount">
        <span className="title">게시물</span>
        <span className="count">{countData?.my_post_length}</span>
      </div>
      <div className="lickCount">
        <span className="title">좋아요</span>
        <span className="count">{countData?.liked_length}</span>
      </div>
    </CountWrapper>
  );
};

export default MyInfoCount;

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 68px;
  background: #dfdfdf;
  border-radius: 16px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 2px;
    width: 171.5px;
    height: 44px;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .postCount {
    border-right: 1px solid #979797;
  }
  .count {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1f1f1f;
  }
  .title {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #979797;
  }
`;
