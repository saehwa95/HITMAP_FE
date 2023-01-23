/* 게시물, 좋아요 개수 */
import React from "react";
import styled from "styled-components";

const MyInfoCount = () => {
  return (
    <CountWrapper>
      <div className="postCount">
        <span className="count">2</span>
        <span className="title">게시물</span>
      </div>
      <div className="lickCount">
        <span className="count">24</span>
        <span className="title">좋아요</span>
      </div>
    </CountWrapper>
  );
};

export default MyInfoCount;

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 311px;
  height: 56px;
  margin-top: 32px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    padding: 5px 16px;
    width: 155.5px;
    height: 56px;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    display: flex;
    align-items: center;
  }
  .postCount {
    border-right: 1px solid #c2c2c2;
  }
  .count {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #3f3f3f;
  }
  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #979797;
  }
`;
