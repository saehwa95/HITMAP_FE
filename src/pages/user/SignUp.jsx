import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  __emailItem,
  __nickItem,
  __postSignup,
} from "../../redux/modules/userSlice";
import SignupAppBar from "../../components/layout/appBar/SignupAppBar";
import darkcloseBtn from "../../asset/icon/darkcloseBtn.svg";
import duplicateIcon from "../../asset/icon/duplicateIcon.svg";
import clickclickIcon from "../../asset/icon/clickclickIcon.svg";
import imgdeleteButton from "../../asset/button/imgdeleteButton.svg";
import Profile from "../../asset/icon/Profile.svg";

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

  const { error } = useSelector((state) => state.userSlice);
  const validerror = error;

  //이미지 formData에 넣기
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // formData.append("image", fileimage);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFileImage(reader.result);
      }

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
        } else if (res.error.message === "Rejected") {
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
      /^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,10}$/;
    if (regex.test(nickname)) {
      setIsNick(true);

      const payload = {
        nickname: nickname,
      };

      dispatch(__nickItem(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setNickeMessage("사용 가능한 닉네임입니다.");
          setIsNick(true);
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
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileimage);
    setFileImage("");
  };
  // const submitOnclickHandler = () => {};

  // 프리뷰 이미지
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
    setFileImage();
  };

  return (
    <StSignupContainer>
      {/* SignuptopNav */}
      <SignupAppBar />
      {/* SignupImgForm */}
      <StSignupList>
        <StProfileContainer>
          <StBackimage>
            <StImgContainer>
              <Stimage src={fileimage || Profile}></Stimage>

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
            <StImageSpan>
              사진변경
              <StClickicon src={clickclickIcon} alt="" />
            </StImageSpan>
          </StPostChangeBtn>
        </StProfileContainer>
        <StInputWrapper>
          {/* SignUpNickForm */}
          <StNickdiv>
            <StText>닉네임</StText>
            <StNIckName>
              <StNickErrMsg>
                <StNickInput
                  validerror={validerror}
                  value={nickname}
                  onChange={onNickChangeHandler}
                  placeholder="닉네임을 입력해주세요."
                  maxLength={10}
                />

                {!nicklValid && nickname.length > 10 && (
                  <StFalSpan>닉네임 형식이 바르지 않습니다.</StFalSpan>
                )}
                {isnick !== true && <StFalSpan>{nickMessage}</StFalSpan>}
                {isnick === true && <StTruSpan>{nickMessage}</StTruSpan>}
              </StNickErrMsg>
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
              <StemailErrMsg>
                <StInput
                  value={email || ""}
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={onEmailChangeHandler}
                  // onClick={changeinput}
                />

                {isemail === true && <StTruSpan>{emailMessage}</StTruSpan>}

                {isemail !== true && <StFalSpan>{emailMessage}</StFalSpan>}
              </StemailErrMsg>

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
                  placeholder="비밀번호를 입력해주세요."
                />
                {isPassword === false && (
                  <StFalSpan>{passwordMessage}</StFalSpan>
                )}
              </StInputErrMsg>
              <StInputErrMsg>
                <StPsInput
                  value={passwordCh}
                  onChange={onChangePassWordCh}
                  type="password"
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                />
                {isPasswordConfirm === false && (
                  <StFalSpan>{passwordConfirmMessage}</StFalSpan>
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
  cursor: pointer;
`;

const StBackimage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
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

  gap: 12px;

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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
  margin: 0 auto;
  width: 343px;
  height: 48px;
  cursor: pointer;
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
  cursor: pointer;
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

const StNickErrMsg = styled.div`
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
  padding-top: 1px;
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
  grid-auto-flow: column;
  padding: 4px 16px;
  gap: 12px;
  margin: 0 auto;
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

  /* Primary/Primary */

  color: #006981;
`;

const StInputErrMsg = styled.div`
  height: 80px;
`;

const StClickicon = styled.img`
  margin-left: 10px;
  width: 10px;
  height: 15px;
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

const StFalseInput = styled.input`
  width: 243px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 2px solid #e5294a;
  border-radius: 8px;
`;

const StImgContainer = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  display: flex;
  justify-content: end;
`;

const StImgdelete = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  float: right;
  z-index: 100;
  cursor: pointer;
`;

const StImageSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  padding-left: 12px;
`;

const StemailErrMsg = styled.div``;

const StNickInput = styled.input`
  width: 243px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #1a4066;
  border-radius: 8px;
  border: ${(props) =>
    props.validerror ? "1px solid #1a4066" : "1px solid black"};
  :focus {
    border: 1px solid black;
  }
`;
