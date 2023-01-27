import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WithdrawModal = () => {
  return (
    <Container>
      <WithdrawConfirmModalWrapper>
        <div className="confirm-message">
          <span className="title">탈퇴 처리가 완료되었습니다.</span>
          <span className="sub-title">
            이용해주셔서 감사합니다. 앞으로 더 좋은 모습으로 만나뵐 수 있도록
            계속 노력하겠습니다.
          </span>
        </div>
        <SuccessLink to={"/logInRegister"}>확인</SuccessLink>
      </WithdrawConfirmModalWrapper>
    </Container>
  );
};

export default WithdrawModal;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99.9vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const WithdrawConfirmModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 312px;
  height: 215px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  .confirm-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 123px;
    margin-bottom: 12px;
    .title {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 12px;
    }
    .sub-title {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #979797;
    }
  }
`;

const SuccessLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #006981;
  border: 1px solid #006981;
  border-radius: 8px;
  color: #ffffff;
  width: 280px;
  height: 48px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
`;
