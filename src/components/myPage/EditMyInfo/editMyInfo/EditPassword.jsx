import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../../redux/api/instance";
import PasswordEditAppBar from "../../../layout/appBar/PasswordEditAppBar";
import StatusBar from "../../../layout/appBar/StatusBar";

const EditPassword = () => {
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const editPasswordMutation = useMutation({
    mutationFn: async (editPassword) => {
      return await instance.patch("/me/updatePassword", editPassword);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["updatePassword"] });
      window.alert("비밀번호가 변경되었습니다.");
      navigate("/editMyInfo");
    },
  });

  const EditPasswordSubmitHandler = (e) => {
    e.preventDefault();
    editPasswordMutation.mutate({
      prevPassword,
      password: newPassword,
      passwordConfirm: confirmNewPassword,
    });
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const status = editPasswordMutation?.error?.response.status;
  const prevErrorMessage =
    editPasswordMutation?.error?.response.data.errorMessage;

  return (
    <div>
      <StatusBar />
      <PasswordEditAppBar />
      <PasswordFormWrapper>
        <TextBox>
          <InputBox>
            <PasswordInput
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              onChange={(e) => setPrevPassword(e.target.value)}
            />
            <span>{status === 412 ? prevErrorMessage : null}</span>
            <PasswordInput
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {/* <span>
              {newPassword === "" ? "비밀번호가 입력되지 않았습니다." : null}
            </span> */}
            <span>
              {!passwordRegex.test(newPassword)
                ? "비밀번호 조건에 충족하지 않습니다."
                : null}
            </span>
            <PasswordInput
              type="password"
              placeholder="새 비밀번호를 다시 한 번 입력해주세요."
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <span>
              {newPassword !== confirmNewPassword
                ? "비밀번호가 일치하지 않습니다."
                : null}
            </span>
          </InputBox>
          <SpanText>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
            16자이하로 입력해주세요.
          </SpanText>
        </TextBox>
      </PasswordFormWrapper>
      <EditButtonWrapper>
        <EditButton
          onClick={EditPasswordSubmitHandler}
          disabled={!prevPassword || !newPassword || !confirmNewPassword}
        >
          수정완료
        </EditButton>
      </EditButtonWrapper>
    </div>
  );
};

export default EditPassword;

const PasswordFormWrapper = styled.div`
  width: 375px;
  height: 383px;
  margin-bottom: 264px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  gap: 12px;
  width: 375px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 343px;
  height: 200px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #e5294a;
    margin: 6px 0 11px 0;
  }
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  &:focus {
    outline: 2px solid #e5294a;
  }
`;

const SpanText = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #3f3f3f;
`;

const EditButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 0px;
  gap: 10px;
  width: 375px;
  height: 83px;
`;

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 343px;
  height: 48px;
  background-color: #006981;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #a6cad3;
  }
`;
