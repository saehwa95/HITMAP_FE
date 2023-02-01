import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "../../../asset/button/backButton.svg";

const PasswordEditAppBar = () => {
  return (
    <EditPasswordAppBarWrapper>
      <Link to={"/editMyInfo"}>
        <img src={backButton} alt="" />
      </Link>
      <span>비밀번호 변경</span>
    </EditPasswordAppBarWrapper>
  );
};

export default PasswordEditAppBar;

const EditPasswordAppBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 343px;
  height: 48px;
  padding: 8px 16px;
  span {
    margin-left: 69px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`;
