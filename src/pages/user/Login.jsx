import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Start from "./kakaoLogin/Start";
import { __postSignin } from "../../redux/modules/userSlice";
import HitmapLogo from "../../asset/icon/HitmapLogo.svg";
import LoginAppBar from "../../components/layout/appBar/LoginAppBar";

const Login = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [notAllow, setNotAllow] = useState(true);
  const [notlogin, setNotLogin] = useState(true);
  const [notloginmessage, setNotLoginMessage] = useState("");

  const navigate = useNavigate();

  //로그인
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSignin({ email: userEmail, password: userPw })).then(
      (res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
          alert("로그인 완료");
        } else {
          setNotLoginMessage("이메일 또는 비밀번호를 확인해주세요.");
          setNotLogin(false);
        }
      }
    );
  };

  //kakao 소셜로그인 구현중...

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  useEffect(() => {
    if (userEmail && userPw) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [userEmail, userPw]);

  return (
    <StLoginContainer>
      <LoginAppBar />
      <StLogoContainner>
        <StLoginImg src={HitmapLogo} />
      </StLogoContainner>

      <StSignInContainer>
        <StSignin>
          <StSigninDiv>
            <StLogin>
              <StSigninInput>
                <StEmailInput
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  placeholder="이메일"
                  isChecked={notlogin}
                />

                <StEmailInput
                  value={userPw}
                  onChange={(e) => setUserPw(e.target.value)}
                  type="password"
                  placeholder="비밀번호"
                  isChecked={notlogin}
                />

                {!notlogin && <Stfalsetxt>{notloginmessage}</Stfalsetxt>}
              </StSigninInput>

              <StLoginBtn onClick={submitHandler} disabled={notAllow}>
                로그인
              </StLoginBtn>
            </StLogin>
          </StSigninDiv>
          <StKakaoContainner>
            <StSimpleLine>
              <Sthr />
              <StSimpleLogintxt>간편 로그인</StSimpleLogintxt>
              <Sthr2 />
            </StSimpleLine>
            <Start />
          </StKakaoContainner>
        </StSignin>
        <StSignupcontain>
          아직 계정이 없으신가요?
          <StGoSignup onClick={handleClick}>회원가입</StGoSignup>
        </StSignupcontain>
      </StSignInContainer>
    </StLoginContainer>
  );
};

export default Login;

const StLoginContainer = styled.div`
  position: relative;
  width: 373px;
  height: 812px;

  /* Gray/White */

  background: #ffffff;
`;

const StLoginImg = styled.img`
  width: 166.52px;
  height: 121px;
`;

const StSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 375px;
  height: 421px;
`;

const StSigninInput = styled.div``;

const StEmailInput = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;

  width: 343px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_300 */
  outline: none;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  outline: none;
  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: #c2c2c2;
  }
  &:focus {
    border: 2px solid #006981;
    border-radius: 8px;
  }
  border: ${({ isChecked }) =>
    isChecked ? "1px solid #dfdfdf;" : "2px solid #e5294a"};
`;

const StLoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 343px;
  height: 48px;
  background: #006981;
  border-radius: 8px;

  :disabled {
    background: #a6cad3;
    border-radius: 8px;
    border: none;
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  /* identical to box height, or 26px */

  text-align: center;
  cursor: pointer;

  color: #ffffff;
`;

const StSignin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 375px;
  height: 349px;
`;

const StLogoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 36px;
  margin: 0 auto;
  width: 124px;
  height: 142px;
`;

const StSigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 375px;
`;

const StKakaoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 343px;
  height: 90px;
`;

const StSimpleLine = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 342px;
  height: 18px;
`;

const StSignupcontain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 40px;
  gap: 10px;
  margin: 0 auto;
  width: 220px;
  height: 32px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* Gray/Gray_500 */

  color: #979797;
  /* Gray/White */

  background: #ffffff;
`;

const StGoSignup = styled.span`
  width: 56px;
  height: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;
  text-decoration-line: underline;

  /* Primary/Primary */

  color: #006981;

  cursor: pointer;
`;

const Stfalsetxt = styled.span`
  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  margin-top: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;

  /* Alert/Negative */

  color: #e5294a;
`;

const StSimpleLogintxt = styled.span`
  margin-left: 17px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;

  text-align: center;

  color: #c2c2c2;
`;

const StLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  gap: 16px;
  margin: 0 auto;
  width: 343px;
`;

const Sthr = styled.hr`
  width: 126px;
  float: left;
  background: #c2c2c2;
  border: 1px solid #c2c2c2;
`;

const Sthr2 = styled.hr`
  width: 126px;
  float: right;
  background: #c2c2c2;
  border: 1px solid #c2c2c2;
`;
