import React from "react";
import StatusBar from "../../components/layout/appBar/StatusBar";
import MypageAppBar from "../../components/layout/appBar/MypageAppBar";
import MyInfoBox from "../../components/myPage/MyInfoBox";
import MyPostList from "../../components/myPage/MyPostList";
import IconNavigationBar from "../../components/layout/navigationBar/IconNavigationBar";
import styled from "styled-components";

const MyPage = () => {
  return (
    <>
      <MypageWrapper>
        <StatusBar />
        <MypageAppBar />
        <MyInfoBox />
        <MyPostList />
        <IconNavigationBar />
      </MypageWrapper>
    </>
  );
};

export default MyPage;

const MypageWrapper = styled.div`
  background-color: #f6f6f6;
`;
