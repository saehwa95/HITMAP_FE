import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __postSignup } from "../../../redux/modules/userSlice";
import UseInputProfilimage from "../../../hooks/signup/UseInputProfilimage";
import UseInputNickname from "../../../hooks/signup/UseInputNickname";
import UseInputEmail from "../../../hooks/signup/UseInputEmail";
import UseInputPassword from "../../../hooks/signup/UseInputPassword";
import clickclickIcon from "../../../asset/icon/clickclickIcon.svg";
import imgdeleteButton from "../../../asset/button/imgdeleteButton.svg";
import Profile from "../../../asset/icon/Profile.svg";

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    fileimage,
    visible,
    imageInput,
    saveFileImage,
    deleteFileImage,
    onClickImageUpload,
  } = UseInputProfilimage();

  const {
    nickname,
    isnick,
    nickMessage,
    nicklValid,
    onnick,
    emptyvalue,
    onNickChangeHandler,
    emptynickmessage,
    nickRef,
  } = UseInputNickname();

  const {
    email,
    emailValid,
    isemail,
    emailMessage,
    emptyemailmessage,
    onemail,
    emptyemailvalue,
    onEmailChangeHandler,
    emailRef,
  } = UseInputEmail();

  const {
    password,
    passwordCh,
    isPassword,
    isPasswordConfirm,
    passwordMessage,
    passwordConfirmMessage,
    onChangePassword,
    onChangePassWordCh,
    pwRef,
    pwchRef,
  } = UseInputPassword();

  //formData submit
  const submitOnclickHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordCh);
    formData.append("image", fileimage);
    dispatch(__postSignup(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      } else {
        alert("회원가입에 실패하셨습니다.");
      }
    });
  };

  //회원가입 버튼 활성화/비활성화
  const [notAllow, setNotAllow] = useState(true);
  useEffect(() => {
    if (
      isemail &&
      isnick &&
      emailValid &&
      nicklValid &&
      isPassword &&
      isPasswordConfirm
    ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [isemail, isnick, emailValid, nicklValid, isPassword, isPasswordConfirm]);

  return (
    <>
      <StProfileContainer>
        <StBackimage>
          <StImgContainer>
            {fileimage ? (
              <Stimage
                src={URL.createObjectURL(fileimage)}
                alt="fileimage"
              ></Stimage>
            ) : (
              <Stimage src={Profile} alt="basicimage"></Stimage>
            )}
            {visible === true && (
              <StImgdelete
                onClick={deleteFileImage}
                src={imgdeleteButton}
                alt=""
              />
            )}
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
          <StImageSpan>
            사진변경
            <StClickicon src={clickclickIcon} alt="" />
          </StImageSpan>
        </StPostChangeBtn>
      </StProfileContainer>
      <StInputWrapper>
        <StNickdiv>
          <StText>닉네임</StText>
          <StNIckName>
            <div>
              <StInput
                Value={nickname}
                onChange={onNickChangeHandler}
                placeholder="닉네임을 입력해주세요."
                isChecked={isnick}
                maxLength={10}
                ref={nickRef}
                onClick={emptyvalue}
              />
              <StValidMsg>
                {!nicklValid && nickname.length === 0 && (
                  <StFalSpan>{emptynickmessage}</StFalSpan>
                )}
                {isnick !== true && <StFalSpan>{nickMessage}</StFalSpan>}
                {isnick === true && <StTruSpan>{nickMessage}</StTruSpan>}
              </StValidMsg>
            </div>
            <StBtn onClick={onnick}>중복확인</StBtn>
          </StNIckName>
          <StInputTxt>
            닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로
            입력해주세요
          </StInputTxt>
        </StNickdiv>
        <StEmaildiv>
          <StText>이메일</StText>
          <StNIckName>
            <div>
              <StInput
                value={email || ""}
                placeholder="이메일을 입력해주세요."
                onChange={onEmailChangeHandler}
                isChecked={isemail}
                ref={emailRef}
                onClick={emptyemailvalue}
              />
              <StValidMsg>
                {!emailValid && email.length === 0 && (
                  <StFalSpan>{emptyemailmessage}</StFalSpan>
                )}
                {!emailValid && email.length < 0 && (
                  <StFalSpan>이메일 형식이 바르지 않습니다.</StFalSpan>
                )}
                {isemail !== true && <StFalSpan>{emailMessage}</StFalSpan>}
                {isemail === true && <StTruSpan>{emailMessage}</StTruSpan>}
              </StValidMsg>
            </div>
            <StBtn onClick={onemail}>중복확인</StBtn>
          </StNIckName>
        </StEmaildiv>
        <StPassContainer>
          <StText>비밀번호</StText>
          <Stpwinputcontainer>
            <div>
              <StPsInput
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                isChecked={isPassword}
                ref={pwRef}
              />
              <StPwValidMsg>
                {isPassword === false && (
                  <StFalSpan>{passwordMessage}</StFalSpan>
                )}
              </StPwValidMsg>
            </div>
            <div>
              <StPsInput
                value={passwordCh}
                onChange={onChangePassWordCh}
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                isChecked={isPasswordConfirm}
                ref={pwchRef}
              />
              {isPasswordConfirm === false && (
                <StFalSpan>{passwordConfirmMessage}</StFalSpan>
              )}
            </div>
          </Stpwinputcontainer>
          <StInputTxt>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요
          </StInputTxt>
          <Signupcontain>
            <SignBtn
              onClick={(e) => submitOnclickHandler(e)}
              disabled={notAllow}
            >
              <StSignupBtn>회원가입</StSignupBtn>
            </SignBtn>
          </Signupcontain>
        </StPassContainer>
      </StInputWrapper>
    </>
  );
};

export default UserSignup;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 343px;
  height: 177px;
`;

const Stimage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StInputWrapper = styled.div`
  width: 375px;
  height: 575px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  display: flex;
  width: 237px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  outline: none;
  text-indent: 12px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  color: #1f1f1f;
  ::placeholder {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 16px;
    color: #c2c2c2;
    text-indent: 12px;
  }
  :focus {
    border: ${({ isChecked }) =>
      !isChecked ? "2px solid #e5294a" : "2px solid#5e67de"};
  }
`;

const StNickdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  width: 375px;
  height: 165px;
  background: #ffffff;
`;

const StText = styled.span`
  padding: 16px 16px 10px 16px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
`;

const StBtn = styled.div`
  width: 90px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-weight: 700;
  color: #ffffff;
  background: #006981;
  border-radius: 8px;
  cursor: pointer;
`;

const StNIckName = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 10px;
`;

const StPsInput = styled.input`
  display: flex;
  margin-bottom: 6px;
  width: 338px;
  height: 45px;
  outline: none;
  text-indent: 12px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;
  ::placeholder {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 16px;
    color: #c2c2c2;
    text-indent: 12px;
  }
  :focus {
    outline: none;
    border: ${({ isChecked }) =>
      !isChecked ? "2px solid #e5294a" : "px solid#DFDFDF"};
  }
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
`;

const StBackimage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StInputTxt = styled.div`
  padding: 12px 25px 20px 18px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #3f3f3f;
`;

const StEmaildiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const StPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  background: #ffffff;
`;

const Signupcontain = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 50px;
  background: #ffffff;
`;

const SignBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 343px;
  height: 50px;
  cursor: pointer;
  border: none;
  background: #006981;
  border-radius: 8px;
  :disabled {
    background: #a6cad3;
    border-radius: 8px;
    border: none;
  }
`;

const Stpwinputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StSignupBtn = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  color: #ffffff;
`;

const StTruSpan = styled.span`
  color: #5e67de;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
`;

const StFalSpan = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #e5294a;
`;

const StPostProfileBtn = styled.input`
  display: none;
`;

const StPostChangeBtn = styled.button`
  width: 108px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #006981;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;
`;

const StClickicon = styled.img`
  margin-left: 9px;
  width: 8px;
  height: 13px;
`;

const StImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: end;
`;

const StImgdelete = styled.img`
  z-index: 10;
  position: absolute;
  float: right;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const StImageSpan = styled.span`
  margin-left: 14px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #006981;
`;

const StValidMsg = styled.div`
  margin-top: 6px;
`;

const StPwValidMsg = styled.div`
  margin-bottom: 9px;
`;
