import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __emailItem,
  __nickItem,
  __postSignup,
} from "../../redux/modules/userSlice";
import darkcloseBtn from "../../asset/icon/darkcloseBtn.svg";
import duplicateIcon from "../../asset/icon/duplicateIcon.svg";
import clickclickIcon from "../../asset/icon/clickclickIcon.svg";

const SignUp = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCh, setPasswordCh] = useState("");
  const [fileimage, setFileImage] = useState();

  const imgRef = useRef();
  //프론트 유효성 검사
  const [emailValid, SetEmailValid] = useState(false);
  const [nicklValid, SetNickValid] = useState(false);
  const [isPassword, SetisPassword] = useState(false);
  const [isPasswordConfirm, SetisPasswordConfirm] = useState(false);
  //서버 유효성 검사사
  const [isnick, setIsNick] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  //전체 유효성 통과 후 submit
  const [notAllow, setNotAllow] = useState(true);

  //오류메시지 상태저장
  const [nickMessage, setNickeMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, SetpasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const navigate = useNavigate();
  //이미지 formData에 넣기
  const saveFileImage = (e) => {
    // formData.append("image", fileimage);
    const reader = new FileReader();
    reader.onload = () => {
      // 여기서 이미지를 FileReader를 통해 base64 형식으로 변환됩니다.
      if (reader.readyState === 2) {
        setFileImage(reader.result);

        // 변환된 이미지 형식(base64)이 setFileImage를 통해 fileimage에 담깁니다.
      }
      setFileImage(e.target.files[0]);

      // 이후 다시 정상적으로파일을 formdata로 담습니다. -> 결론 코드 순서의 문제 였습니다.
      // 여기로 코드 순서를 바꾸고 해결된 문제였습니다. / - 끝 시마이 - 이대로 배포 다시 하시면 끝입니다.ㅎㅎ
    };
    reader.readAsDataURL(e.target.files[0]);
  };
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
        navigate("/login");
      } else {
        setEmailMessage("이메일 형식이 바르지 않습니다.");
        setIsEmail(false);
      }
    });
  };

  //email 유효성 확인
  const onEmailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailMessage("");
    setIsEmail(false);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(email)) {
      SetEmailValid(true);
    } else {
      SetEmailValid(false);
    }
  };
  //email 유효성 서버
  const onemail = (e) => {
    const regexcom =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com/;
    const regexnet =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.net/;
    if (regexcom.test(email) || regexnet.test(email)) {
      setIsEmail(true);
      const payload = {
        email: email,
      };

      dispatch(__emailItem(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setEmailMessage("사용 가능한 이메일 입니다.");
          setIsEmail(true);
        } else if (res.payload === 401) {
          setEmailMessage("이미 사용중인 이메일입니다.");
          setIsEmail(false);
        } else {
          setEmailMessage("이메일 형식이 바르지 않습니다.");
          setIsEmail(false);
        }
      });
    } else {
      setEmailMessage("이메일 형식이 바르지 않습니다");
      setIsEmail(false);
    }
  };

  //nickname 유효성 검사
  const onNickChangeHandler = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
    setNickeMessage("");
    setIsNick(false);

    const regex =
      // eslint-disable-next-line
      /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{1,10}$/;
    if (regex.test(nickname)) {
      SetNickValid(true);
    } else {
      SetNickValid(false);
    }
  };

  //nickname 유효성 서버
  const onnick = (e) => {
    e.preventDefault();
    const regex =
      // eslint-disable-next-line
      /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    if (regex.test(nickname)) {
      setIsNick(true);

      const payload = {
        nickname: nickname,
      };

      dispatch(__nickItem(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setNickeMessage("사용 가능한 닉네임입니다.");
          setIsNick(true);
          if (nicklValid(false)) {
            setIsNick(true);
          }
        } else if (res.meta.requestStatus === "rejected") {
          setNickeMessage("이미 사용중인 닉네임입니다.");
          setIsNick(false);
        } else {
          setNickeMessage("닉네임 형식이 바르지 않습니다.");
          setIsNick(false);
        }
      });
    } else {
      setNickeMessage("닉네임 형식이 바르지 않습니다.");
      setIsNick(false);
    }
  };
  //password 유효성 검사
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordeCurrent = e.target.value;
    setPassword(passwordeCurrent);

    if (!passwordRegex.test(passwordeCurrent)) {
      SetpasswordMessage("비밀번호 조건에 충족하지않습니다.");
      SetisPassword(false);
    } else {
      SetpasswordMessage("");
      SetisPassword(true);
    }
  };
  //paassword 확인
  const onChangePassWordCh = (e) => {
    const passwordeConfirmCurrent = e.target.value;
    setPasswordCh(passwordeConfirmCurrent);

    if (password === passwordeConfirmCurrent) {
      setPasswordConfirmMessage("");
      SetisPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      SetpasswordMessage("");
      SetisPasswordConfirm(false);
    }
  };

  //회원가입 버튼 활성화/비활성화
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

  // 프리뷰 이미지 삭제
  //  const deleteFileImage = () => {
  //    URL.revokeObjectURL(fileimage);
  //    setFileImage("");
  //  };
  // const submitOnclickHandler = () => {};

  // 프리뷰 이미지
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
    setFileImage();
  };

  //뒤로가기 버튼
  const onClickbackmain = (e) => {
    navigate("/");
  };

  return (
    <StSignupContainer>
      {/* SignuptopNav */}
      <StTopNav>
        <StStatusBar />
        <StNavitem>
          <StTextField>
            회원가입
            <StCloseImg src={darkcloseBtn} alt="" onClick={onClickbackmain} />
          </StTextField>
        </StNavitem>
      </StTopNav>
      {/* SignupImgForm */}
      <StSignupList>
        <StProfileContainer>
          <StBackimage>
            <Stimage src={imageInput}></Stimage>
          </StBackimage>
          <StPostProfileBtn
            name="coverimage"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={imageInput}
          />
          <StPostChangeBtn onClick={onClickImageUpload}>
            사진변경 <StClickicon src={clickclickIcon} alt="" />
          </StPostChangeBtn>
        </StProfileContainer>
        <StInputWrapper>
          {/* SignUpNickForm */}
          <StNickdiv>
            <StText>닉네임</StText>
            <StNIckName>
              <StErrMsg>
                <StInput
                  value={nickname}
                  onChange={onNickChangeHandler}
                  placeholder="닉네임을 입력해주세요"
                  maxLength={10}
                />

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
              닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로
              입력해주세요
            </StInputTxt>
          </StNickdiv>

          {/* SignupEmailForm */}
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
                    // onClick={changeinput}
                  />

                  {!emailValid && (
                    <StFalSpan>이메일 형식이 바르지 않습니다.</StFalSpan>
                  )}

                  {isemail === true && <StTruSpan>{emailMessage}</StTruSpan>}

                  {isemail !== true && <StFalSpan>{emailMessage}</StFalSpan>}

                  {!emailValid && email.length === 0 && (
                    <Stspan>이메일을 입력해주세요</Stspan>
                  )}
                </StErrMsg>
              </StEmailField>

              <StBtn src={duplicateIcon} onClick={onemail} />
            </StNIckName>
          </StEmaildiv>

          {/* SignupPwForm */}
          <StPassContainer>
            <StText>비밀번호</StText>
            <Stpwinputcontainer>
              <StInputErrMsg>
                <StPsInput
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                {isPassword === true && (
                  <StTruSpan>{passwordMessage}</StTruSpan>
                )}
                {isPassword === false && (
                  <StFalSpan>{passwordMessage}</StFalSpan>
                )}
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
                {isPasswordConfirm === true && (
                  <StTruSpan>{passwordConfirmMessage}</StTruSpan>
                )}
              </StInputErrMsg>
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

const StSignupContainer = styled.div`
  position: relative;
  width: 373px;
  height: 812px;

  /* Gray/White */

  background: #ffffff;
`;

const StTopNav = styled.div`
  position: absolute;
  width: 375px;
  height: 108px;
`;

const StNavitem = styled.div`
  width: 370px;
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
  padding-top: 20px;
  margin: 0 auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Gray/Black */

  color: #1f1f1f;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 375px;
  height: 575px;

  /* Gray/White */

  background: #ffffff;
`;

const StInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  &:focus {
    outline: none !important;
    border-color: red;
  }

  border: 1px solid #1a4066;
  border-radius: 8px;
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

  margin: 0 auto;
  gap: 10px;

  width: 343px;
  height: 73px;
`;

const StPsInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;

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
`;

const StCloseImg = styled.img`
  position: absolute;
  left: 0%;
  right: 86.01%;
  top: -31.08%;
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
  height: 249px;

  /* Gray/White */

  background: #ffffff;
`;

const Signupcontain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 0px;

  gap: 10px;

  position: absolute;
  width: 375px;
  height: 83px;
  left: 0px;
  top: 100%;

  /* Gray/White */

  background: #ffffff;
`;

const SignBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 343px;
  height: 48px;

  /* Primary/Primary */

  background: #006981;
  border-radius: 8px;

  :disabled {
    background: #a6cad3;
    border-radius: 8px;
  }
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

const StSignupBtn = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  padding-top: 25px;
  width: 100px;
  height: 50px;
  text-align: center;

  /* Gray/White */

  color: #ffffff;
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

const StEmailField = styled.div`
  width: 243px;
  height: 74px;
`;

const StErrMsg = styled.div`
  gap: 20px;
  height: 80px;
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

const StInputErrMsg = styled.div`
  height: 80px;

  padding-bottom: 20px;
`;

const StClickicon = styled.img`
  width: 10px;
  height: 15px;
`;
