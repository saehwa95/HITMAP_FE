/* 마이페이지 - 로그인&회원가입 페이지 */
import React from "react";
import StatusBar from "../../components/layout/appBar/StatusBar";
import MypageAppBar from "../../components/layout/appBar/MypageAppBar";
import styled from "styled-components";
import LogInRegisterBox from "../../components/myPage/LogInRegister/LogInRegisterBox";

const LogInRegister = () => {
  return (
    <LogInRegisterWrapper>
      <StatusBar />
      <MypageAppBar />
      <div className="container">
        <LogInRegisterBox />
      </div>
    </LogInRegisterWrapper>
  );
};

export default LogInRegister;

const LogInRegisterWrapper = styled.div`
  .container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 375px;
    height: 472px;
    padding: 0px 16px 99px;
  }
`;
