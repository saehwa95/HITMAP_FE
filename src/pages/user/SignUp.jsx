import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import closeBtnIcon from "../../asset/icon/closeBtnIcon.svg";
import duplicateIcon from "../../asset/icon/duplicateIcon.svg";
import {
  __emailItem,
  __nickItem,
  __postSignup,
} from "../../redux/modules/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCh, setPasswordCh] = useState("");
  const [fileimage, setFileImage] = useState();
  const formData = new FormData();
  const imgRef = useRef();

  const [emailValid, SetEmailValid] = useState(false);
  const [nicklValid, SetNickValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);
  //오류메시지 상태저장
  const [nickMessage, setNickeMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  //이미지 formData에 넣기
  //이미지 프리뷰
  const saveFileImage = (e) => {
    setFileImage(e.target.files[0]);
    formData.append("image", e.target.files);

    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImage(reader.result);
    };
  };
  //formData submit
  const submitOnclickHandler = (e) => {
    e.preventDefault();

    formData.append("nickname", nickname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordCh);

    dispatch(__postSignup(formData));
  };

  //email 검사
  const onEmailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regex.test(email)) {
      SetEmailValid(true);
    } else {
      SetEmailValid(false);
    }
  };

  const onemail = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
    };

    dispatch(__emailItem(payload)).then((res) => {
      console.log("res:", res);
      if (res.meta.requestStatus === "fulfilled") {
        setEmailMessage("사용 가능한 이메일 입니다.");
      } else if (res.meta.requestStatus === "rejected") {
        setEmailMessage("이미 사용중인 이메일입니다.");
      } else {
        setEmailMessage("이메일 형식이 바르지 않습니다.");
      }
    });
  };

  //nickname 검사
  const onNickChangeHandler = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]{2,10}$/;
    if (regex.test(nickname)) {
      SetNickValid(true);
    } else {
      SetNickValid(false);
    }
  };
  const onnick = (e) => {
    e.preventDefault();
    const payload = {
      nickname: nickname,
    };
    dispatch(__nickItem(payload)).then((res) => {
      console.log("res:", res);
      if (res.meta.requestStatus === "fulfilled") {
        setNickeMessage("사용 가능한 닉네임입니다.");
      } else if (res.meta.requestStatus === "rejected") {
        setNickeMessage("이미 사용중인 닉네임입니다.");
      } else {
        setNickeMessage("닉네임 형식이 바르지 않습니다.");
      }
    });
  };

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  // 프리뷰 이미지 삭제
  //  const deleteFileImage = () => {
  //    URL.revokeObjectURL(fileimage);
  //    setFileImage("");
  //  };
  // const submitOnclickHandler = () => {};

  return (
    <StSignupContainer>
      <StTopNav>
        <StStatusBar />
        <StNavitem>
          <StTextField>
            회원가입
            <StCloseImg src={closeBtnIcon} alt="" />
          </StTextField>
        </StNavitem>
      </StTopNav>
      <StSignupList>
        <StProfileContainer>
          <StBackimage>
            <Stimage src={fileimage}></Stimage>
          </StBackimage>

          <StFileInput
            name="coverimage"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={imgRef}
          ></StFileInput>
        </StProfileContainer>

        <StInputWrapper>
          <StNickdiv>
            <StText>닉네임</StText>
            <StNIckName>
              <StErrMsg>
                <StInput
                  value={nickname}
                  onChange={onNickChangeHandler}
                  placeholder="닉네임을 입력해주세요"
                />
                {nicklValid && <Stspan>{nickMessage}</Stspan>}

                {!nicklValid && nickname.length === 0 && (
                  <Stspan>닉네임을 입력해주세요</Stspan>
                )}
              </StErrMsg>
              <StBtn src={duplicateIcon} onClick={onnick} />
            </StNIckName>

            <StInputTxt>
              닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로
              입력해주세요
            </StInputTxt>
          </StNickdiv>
          <StEmaildiv>
            <StText>이메일</StText>
            <StNIckName>
              <StEmailField>
                <StErrMsg>
                  <StInput
                    value={email}
                    type="email"
                    placeholder="이메일"
                    onChange={onEmailChangeHandler}
                  />
                  {emailValid && <Stspan>{emailMessage}</Stspan>}
                  {!emailValid && email.length > 1 && (
                    <Stspan>이메일 형식이 바르지 않습니다.</Stspan>
                  )}
                  {!emailValid && email.length === 0 && (
                    <Stspan>이메일을 입력해주세요</Stspan>
                  )}
                </StErrMsg>
              </StEmailField>

              <StBtn src={duplicateIcon} onClick={onemail} />
            </StNIckName>
          </StEmaildiv>
          <StPassContainer>
            <StText>비밀번호</StText>
            <Stpwinputcontainer>
              <StPsInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <StPsInput
                value={passwordCh}
                onChange={(e) => setPasswordCh(e.target.value)}
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요"
              />
            </Stpwinputcontainer>

            <StInputTxt>
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
              16자 이하로 입력해주세요
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
      </StSignupList>
    </StSignupContainer>
  );
};

export default SignUp;

const StSignupContainer = styled.div``;

const StTopNav = styled.div`
  position: absolute;
  width: 375px;
  height: 108px;

  left: 0px;
  top: 0px;
`;

const StNavitem = styled.div`
  width: 375px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 40.74%;
  bottom: 0%;

  /* Gray/White */

  background: #ffffff;
`;

const StTextField = styled.div`
  width: 343px;
  height: 48px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  padding: 8px 16px;
`;

const StSignupList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 375px;
  height: 755px;
  left: 0px;
  top: 108px;
`;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 12px;
  gap: 16px;

  width: 343px;
  height: 177px;
`;

const StFileInput = styled.input``;

const Stimage = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 375px;
  height: 499px;

  /* Gray/White */

  background: #ffffff;
`;

const StInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 1px solid #d5dde5;
  border-radius: 8px;
`;

const StNickdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 375px;
  height: 191px;

  /* Gray/White */

  background: #ffffff;

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

const StNIckName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px 0px 16px;
  gap: 10px;

  width: 343px;
  height: 74px;
`;

const StPsInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 0px;
  width: 343px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 1px solid #d5dde5;
  border-radius: 8px;
`;

const StStatusBar = styled.div`
  width: 375px;
  height: 44px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 94.58%;
`;

const StCloseImg = styled.img`
  position: absolute;
  left: 0%;
  right: 86.01%;
  top: -18.08%;
  bottom: -2.08%;
`;

const StBackimage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='101' height='100' viewBox='0 0 101 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50.5' cy='50' r='50' fill='%23ADB9C7'/%3E%3Ccircle cx='49.9804' cy='41.7999' r='15.7999' stroke='white' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.6472 51.8394C31.3835 55.7377 26.3591 63.2667 26.0008 71.9994C25.9782 72.5512 26.428 73.0003 26.9803 73.0003H72.9801C73.5324 73.0003 73.9823 72.5512 73.9596 71.9994C73.6023 63.2884 68.6019 55.7752 61.3675 51.8686C60.9045 52.3946 60.4055 52.8882 59.8743 53.3455C66.4919 56.6833 71.1939 63.2647 71.8905 71.0003H28.0699C28.7684 63.2451 33.4925 56.6499 40.1366 53.3201C39.6066 52.8615 39.1089 52.3666 38.6472 51.8394Z' fill='white'/%3E%3C/svg%3E%0A");
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

const StEmaildiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8px;

  width: 375px;
  height: 137px;

  /* Gray/White */

  background: #ffffff;
`;

const StPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 375px;
  height: 223px;

  /* Gray/White */

  background: #ffffff;
`;

const Signupcontain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 95%;
  gap: 10px;

  position: absolute;
  width: 375px;
  height: 83px;
  left: 0px;
  bottom: 0px;

  border: 1px solid red;

  /* Gray/White */

  background: #ffffff;
`;

const SignBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 149px;
  gap: 10px;

  width: 343px;
  height: 48px;

  /* Primary/Primary */

  background: #006981;
  border-radius: 8px;

  :disabled {
    background: #c2c2c2;
    border-radius: 8px;
  }
`;

const Stpwinputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px 0px 16px;
  gap: 10px;

  width: 343px;
  height: 106px;
`;

const StSignupBtn = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* Gray/White */

  color: #ffffff;
`;

const Stspan = styled.span`
  position: absolute;
  width: 250px;
  height: 19px;

  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
  color: red;
`;

const StEmailField = styled.div`
  width: 243px;
  height: 74px;
`;

const StErrMsg = styled.div``;
