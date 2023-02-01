import React from "react";
import styled from "styled-components";
import StatusBar from "../../components/layout/appBar/StatusBar";
import MypageAppBar from "../../components/layout/appBar/MypageAppBar";
import LogInRegisterBox from "../../components/myPage/logInRegister/LogInRegisterBox";
import IconNavigationBar from '../../components/layout/navigationBar/IconNavigationBar'

const LogInRegister = () => {
  return (
    <LogInRegisterWrapper>
      <StatusBar />
      <MypageAppBar />
      <div className="container">
        <LogInRegisterBox />
      </div>
      <IconNavigationBar />
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
