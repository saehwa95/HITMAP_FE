/* 회원탈퇴 컴포넌트 */
import React from "react";
import styled from "styled-components";
import { ReactComponent as GreyClickIcon } from "../../../asset/icon/GreyClickIcon.svg";

const Withdraw = () => {
  return (
    <WithdrawWrapper>
      <button>
        <span>회원탈퇴</span>
        <GreyClickIcon />
      </button>
    </WithdrawWrapper>
  );
};

export default Withdraw;

const WithdrawWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    width: 375px;
    height: 64px;
    padding: 16px;
    cursor: pointer;
    background: #ffffff;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #1f1f1f;
  }
`;
