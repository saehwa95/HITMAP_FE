import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useInputnickname from "../../../hooks/useInputnickname";
import useInputProfilimage from "../../../hooks/useInputProfilimage";
import useInputpassword from "../../../hooks/useInputpassword";

import { __editUser, __editpass } from "../../../redux/modules/userSlice";

import duplicateIcon from "../../../asset/icon/duplicateIcon.svg";
import clickclickIcon from "../../../asset/icon/clickclickIcon.svg";
import imgdeleteButton from "../../../asset/button/imgdeleteButton.svg";

import { instance } from "../../../redux/api/instance";
const UserEdit = () => {
  const infoEditAPI = async () => {
    return await instance.get("/me");
  };

  const { data } = useQuery(["myInfo"], infoEditAPI);

  const myData = data?.data;

  const { fileimage, saveFileImage, deleteFileImage } = useInputProfilimage();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const {
    nickname,
    nicklValid,
    onNickChangeHandler,
    isnick,
    nickMessage,
    onnick,
  } = useInputnickname();

  const {
    prevPassword,
    password,
    passwordCh,
    isPassword,
    isPasswordConfirm,
    passwordMessage,
    passwordConfirmMessage,
    onChangeprevPassword,
    onChangePassword,
    onChangePassWordCh,
  } = useInputpassword();

  const submitOnclickHandler = (e) => {
    e.preventDefault();
    const regex =
      // eslint-disable-next-line
      /^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,10}$/;
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("prevPassword", prevPassword);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordCh);
    formData.append("image", fileimage);

    if (
      (regex.test(nickname) && isnick === true) ||
      fileimage !== "undefined"
    ) {
      dispatch(__editUser(formData)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          alert("수정이 완료되었습니다.");
          navigate("/mypage");
        } else {
        }
      });
    }
    const payload = {
      prevPassword: prevPassword,
      password: password,
      passwordConfirm: passwordCh,
    };
    if (
      (prevPassword, password, passwordCh) !== "" &&
      password === passwordCh
    ) {
      dispatch(__editpass(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          alert("수정이 완료되었습니다.");
          navigate("/mypage");
        } else if (res.meta.requestStatus === "rejected") {
          alert("현재 비밀번호가 일치하지 않습니다.");
        }
      });
    }
  };

  const imgRef = useRef();
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <StEditContainer>
      <StProfileContainer>
        <StBackimage>
          <StImgContainer>
            <Stimage src={myData?.profile_image}></Stimage>
            <StImgdelete
              onClick={deleteFileImage}
              src={imgdeleteButton}
              alt=""
            />
          </StImgContainer>
        </StBackimage>
        <StPostProfileBtn
          name="coverimage"
          type="file"
          accept="image/*"
          onChange={saveFileImage}
          ref={imageInput}
        />
        <StPostChangeBtn onClick={onClickImageUpload}>
          사진변경
          <StClickicon src={clickclickIcon} alt="" />
        </StPostChangeBtn>
      </StProfileContainer>
      <StNickdiv>
        <StText>닉네임</StText>
        <StNIckName>
          <StErrMsg>
            {!isnick && (
              <StInput
                onChange={onNickChangeHandler}
                placeholder={myData?.nickname}
                maxLength={10}
              />
            )}
            {/* {isnick === false && (
            <StFalseInput
              value={nickname}
              onChange={onNickChangeHandler}
              placeholder="닉네임을 입력해주세요"
              maxLength={10}
            />
          )} */}
            {isnick === true && (
              <StTrueInput
                value={nickname}
                onChange={onNickChangeHandler}
                placeholder={myData.nickname}
                maxLength={10}
              />
            )}
            {!nicklValid && nickname.length > 10 && (
              <StFalSpan>닉네임 형식이 바르지 않습니다.</StFalSpan>
            )}
            {isnick !== true && <StFalSpan>{nickMessage}</StFalSpan>}
            {isnick === true && <StTruSpan>{nickMessage}</StTruSpan>}
            {nickname === "" && <Stspan>닉네임을 입력해주세요</Stspan>}
          </StErrMsg>
          <StBtn src={duplicateIcon} onClick={onnick} />
        </StNIckName>

        <StInputTxt>
          닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로 입력해주세요
        </StInputTxt>
      </StNickdiv>
      <StPassContainer>
        <StText>비밀번호 확인</StText>
        <StInputErrMsg>
          <StPsInput
            value={prevPassword || ""}
            onChange={onChangeprevPassword}
            type="password"
            placeholder="현재 비밀번호를 입력해주세요"
          />
        </StInputErrMsg>
        <StText>비밀번호 수정</StText>
        <Stpwinputcontainer>
          <StInputErrMsg>
            <StPsInput
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />

            {isPassword === false && <StFalSpan>{passwordMessage}</StFalSpan>}
          </StInputErrMsg>
          <StInputErrMsg>
            <StPsInput
              value={passwordCh}
              onChange={onChangePassWordCh}
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요"
            />
            {isPasswordConfirm === false && (
              <StFalSpan>{passwordConfirmMessage}</StFalSpan>
            )}
          </StInputErrMsg>
        </Stpwinputcontainer>

        <StInputTxt>
          영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
          이하로 입력해주세요
        </StInputTxt>
      </StPassContainer>
      <Signupcontain>
        <SignBtn onClick={(e) => submitOnclickHandler(e)}>
          <StSignupBtn>수정완료</StSignupBtn>
        </SignBtn>
      </Signupcontain>
    </StEditContainer>
  );
};

export default UserEdit;

const StEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 375px;
`;

const Signupcontain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 10px;

  width: 375px;
  height: 83px;
  left: 0px;
  top: 100%;
  background: #ffffff;
`;

const StSignupBtn = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  padding-top: 25px;
  width: 100px;
  height: 50px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const SignBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 343px;
  height: 48px;
  background: #006981;
  border-radius: 8px;
  :disabled {
    background: #a6cad3;
    border-radius: 8px;
  }
  cursor: pointer;
`;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 16px;

  width: 343px;
  height: 177px;
`;

const Stimage = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 1;
  border-radius: 50%;
`;

const StBackimage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

const StPostProfileBtn = styled.input`
  display: none;
`;

const StPostChangeBtn = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  padding: 4px 16px;
  gap: 12px;

  width: 125px;
  height: 32px;

  /* Gray/White */

  background: #ffffff;
  /* Primary/Primary */

  border: 1px solid #006981; /* 2px 4px 16px 0px rgba(0, 0, 0, 4%)

Small
*/
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;

  /* Button/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;

  /* Primary/Primary */

  color: #006981;
`;

const StClickicon = styled.img`
  width: 9px;
  height: 15px;
`;

const StNickdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 375px;
  height: 190px;

  /* Gray/White */

  background: #ffffff;
`;

const StText = styled.span`
  width: 343px;
  height: 19px;
  padding: 16px 16px 0px 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const StNIckName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 0 auto;
  gap: 10px;

  width: 343px;
  height: 73px;
`;

const StErrMsg = styled.div`
  gap: 20px;
  height: 80px;
`;

const StInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */
  &:focus {
    outline: none !important;
    border-color: red;
  }
  border: 1px solid #dfdfdf;
  background: #ffffff;
  /* Gray/Gray_200 */

  border-radius: 8px;
`;

const StFalseInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 2px solid #e5294a;
  border-radius: 8px;
`;

const StTrueInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 2px solid #5e67de;
  border-radius: 8px;
`;

const StFalSpan = styled.span`
  padding-top: 6px;
  position: absolute;
  width: 300px;
  height: 19px;

  color: #e5294a;
  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const StTruSpan = styled.span`
  position: absolute;
  width: 300px;
  height: 19px;
  padding-top: 6px;
  color: #5e67de;

  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const Stspan = styled.span`
  padding-top: 6px;
  position: absolute;
  width: 250px;
  height: 19px;
  background-color: white;
  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
`;

const StBtn = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 90px;
  height: 48px;
  cursor: pointer;
`;

const StInputTxt = styled.div`
  width: 343px;
  height: 42px;
  padding: 0px 16px 0px 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #66737f;
`;

const StPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 375px;
  height: 409px;
  background: #ffffff;
`;

const Stpwinputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 10px;
  padding-bottom: 18px;
  width: 343px;
  height: 132px;
`;

const StInputErrMsg = styled.div`
  height: 80px;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const StPsInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 343px;
  height: 48px;
  &:focus {
    outline: none !important;
    border: 2px solid #e5294a;
    border-radius: 8px;
  }
  background: #ffffff;
  border: 1px solid #d5dde5;
  border-radius: 8px;
`;

const StImgdelete = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  float: right;
  z-index: 100;
  cursor: pointer;
`;

const StImgContainer = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: end;
`;
