import React from "react";
import styled from "styled-components";
import WithdrawModal from "./WithdrawModal";

const WithdrawConfirmModal = ({
  setWithdrawModalOpen,
  password,
  withdrawMutation,
  successModalOpen,
  setSuccessModalOpen,
}) => {


  const closeModal = () => {
    setWithdrawModalOpen(false);
  };

  const showModal = () => {
    withdrawMutation.mutate({ password: password });
  };

  return (
    <Container>
      <WithdrawConfirmModalWrapper>
        <div className="confirm-message">
          <span className="title">정말 탈퇴 하시겠습니까?</span>
          <span className="sub-title">탈퇴하면 해당 계정의 모든 정보가</span>
          <span className="sub-title">삭제되며 다시 복구할 수 없습니다.</span>
        </div>
        <div className="click-button">
          <button className="cancel-button" onClick={closeModal}>
            취소
          </button>
          <button
            type="button"
            className="withdraw-button"
            onClick={showModal}
            password={password}
          >
            탈퇴하기
          </button>
          {successModalOpen && (
            <WithdrawModal setSuccessModalOpen={setSuccessModalOpen} />
          )}
        </div>
      </WithdrawConfirmModalWrapper>
    </Container>
  );
};

export default WithdrawConfirmModal;

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
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 12px;
    }
    .sub-title {
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #979797;
    }
  }
  .click-button {
    display: flex;
    width: 280px;
    height: 48px;
    gap: 8px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 136px;
      height: 48px;
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      cursor: pointer;
    }
  }
  .cancel-button {
    background: #ffffff;
    border: 1px solid #006981;
    border-radius: 8px;
    color: #006981;
  }
  .withdraw-button {
    background: #006981;
    border: 1px solid #006981;
    border-radius: 8px;
    color: #ffffff;
  }
`;
