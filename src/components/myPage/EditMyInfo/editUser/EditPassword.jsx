import React, { useRef, useState } from "react";
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

  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const passwordOnChangeHandler = (e) => {
    const newPasswordCurrent = e.target.value;
    setNewPassword(newPasswordCurrent);
    if (!passwordRegex.test(newPasswordCurrent)) {
      setPasswordMessage("비밀번호 조건에 충족하지 않습니다.");
      newPasswordRef.current.focus();
      setCheckPassword(false);
    } else {
      setPasswordMessage("");
      setCheckPassword(true);
    }
  };

  const ConfirmPasswordOnChangeHandler = (e) => {
    const confirmPasswordCurrent = e.target.value;
    setConfirmNewPassword(confirmPasswordCurrent);
    if (!passwordRegex.test(confirmPasswordCurrent)) {
      setConfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
      confirmNewPasswordRef.current.focus();
      setCheckConfirmPassword(false);
    } else {
      setConfirmPasswordMessage("");
      setCheckConfirmPassword(true);
    }
  };

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
    <>
      <StatusBar />
      <PasswordEditAppBar />
      <PasswordFormWrapper>
        <TextBox>
          <InputBox>
            {status === 412 ? (
              <>
                <ErrorInput
                  type="password"
                  value={prevPassword}
                  placeholder="현재 비밀번호를 입력해주세요."
                  onChange={(e) => setPrevPassword(e.target.value)}
                />
                <span>{prevErrorMessage}</span>
              </>
            ) : (
              <>
                <PrevPasswordInput
                  type="password"
                  value={prevPassword}
                  placeholder="현재 비밀번호를 입력해주세요."
                  onChange={(e) => setPrevPassword(e.target.value)}
                />
                <span />
              </>
            )}
            <PasswordInput
              type="password"
              value={newPassword}
              placeholder="새 비밀번호를 입력해주세요."
              onChange={passwordOnChangeHandler}
              ref={newPasswordRef}
              isChecked={checkPassword}
            />
            {checkPassword === false && <span>{passwordMessage}</span>}
            <PasswordInput
              type="password"
              value={confirmNewPassword}
              placeholder="새 비밀번호를 다시 한 번 입력해주세요."
              onChange={ConfirmPasswordOnChangeHandler}
              ref={confirmNewPasswordRef}
              isChecked={checkConfirmPassword}
            />
            {checkConfirmPassword === false && (
              <span>{confirmPasswordMessage}</span>
            )}
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
          수정 완료
        </EditButton>
      </EditButtonWrapper>
    </>
  );
};

export default EditPassword;

const PasswordFormWrapper = styled.div`
  width: 375px;
  height: 383px;
  margin-bottom: 238px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  width: 375px;
  height: 258px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 343px;
  height: 284px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #e5294a;
    margin-bottom: 5px;
  }
`;
const PrevPasswordInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  padding-left: 16px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 5px;
  :focus {
    outline: none;
  }
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  padding-left: 16px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 10px;
  :focus {
    border: ${({ isChecked }) => !isChecked && "2px solid #e5294a"};
    outline: none;
  }
`;

const ErrorInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  border: 2px solid #e5294a;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 5px;
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
  width: 375px;
  height: 83px;
`;

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 48px;
  background-color: ${(props) => (props.disabled ? "#a6cad3" : "#006981")};
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")}; ;
`;
