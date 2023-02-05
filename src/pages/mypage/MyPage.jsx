import React from "react";
import styled from "styled-components";
import MyPostList from "../../components/myPage/MyPostList";
import StatusBar from "../../components/layout/appBar/StatusBar";
import MypageAppBar from "../../components/layout/appBar/MypageAppBar";
import IconNavigationBar from "../../components/layout/navigationBar/IconNavigationBar";

const MyPage = () => {
  return (
    <MypageWrapper>
      <StatusBar />
      <MypageAppBar />
      <MyPostList />
      <IconNavigationBar />
    </MypageWrapper>
  );
};

export default MyPage;

const MypageWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #f6f6f6;
`;
