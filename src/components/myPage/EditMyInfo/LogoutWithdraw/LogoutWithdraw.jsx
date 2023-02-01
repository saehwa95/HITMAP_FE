import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as GreyClickIcon } from "../../../../asset/icon/GreyClickIcon.svg";
import LogoutConfirmModal from "./LogoutConfirmModal";

const LogoutWithdraw = () => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const showModal = () => {
    setLogoutModalOpen(true);
  };

  return (
    <>
      <ButtonLink onClick={showModal}>
        <div>
          <span>로그아웃</span>
          <GreyClickIcon />
        </div>
      </ButtonLink>
      {logoutModalOpen && (
        <LogoutConfirmModal setLogoutModalOpen={setLogoutModalOpen} />
      )}
      <ButtonLink to={"/withdraw"}>
        <div>
          <span>회원탈퇴</span>
          <GreyClickIcon />
        </div>
      </ButtonLink>
    </>
  );
};

export default LogoutWithdraw;
const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  width: 375px;
  height: 64px;
  cursor: pointer;
  background: #ffffff;
  text-decoration: none;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #1f1f1f;
  }
  div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    width: 375px;
    height: 64px;
    border-bottom: 1px solid #dfdfdf;
  }
`;
