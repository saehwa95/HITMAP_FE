import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "../../../asset/button/backButton.svg";

const WithdrawAppBar = () => {
  return (
    <WithdrawAppBarWrapper>
      <Link to={"/editMyInfo"}>
        <img src={backButton} alt="" />
      </Link>
      <div>
        <span>회원탈퇴</span>
      </div>
    </WithdrawAppBarWrapper>
  );
};

export default WithdrawAppBar;

const WithdrawAppBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 343px;
  height: 48px;
  padding: 8px 16px;
  span {
    margin-left: 88px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`;
