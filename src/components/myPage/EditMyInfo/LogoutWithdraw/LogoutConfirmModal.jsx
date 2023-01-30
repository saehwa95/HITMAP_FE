import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../../redux/api/instance";
import { deleteCookie } from "../../../../shared/cookie";

const LogoutConfirmModal = ({ setLogoutModalOpen }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setLogoutModalOpen(false);
  };

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await instance.post("user/logout");
    },
    onSuccess:()=>{
      deleteCookie("auth")
      window.alert("로그아웃 되었습니다.")
      navigate("/logInRegister")
    }
  });

  return (
    <Container>
      <LogoutConfirmModalWrapper>
        <div className="confirm-message">
          <span>정말 로그아웃 하시겠나요?</span>
        </div>
        <div className="click-button">
          <button className="cancel-button" onClick={closeModal}>
            취소
          </button>
          <button className="logout-button" onClick={()=>{logoutMutation.mutate()}}>
            로그아웃
          </button>
        </div>
      </LogoutConfirmModalWrapper>
    </Container>
  );
};

export default LogoutConfirmModal;

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

const LogoutConfirmModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 312px;
  height: 161px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  .confirm-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 69px;
    margin-bottom: 12px;
    span {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #1f1f1f;
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
  .logout-button {
    background: #006981;
    border: 1px solid #006981;
    border-radius: 8px;
    color: #ffffff;
  }
`;
