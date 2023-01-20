import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postSignin } from "../../redux/modules/userSlice";
import HitmapLogo from "../../asset/icon/HitmapLogo.svg";
import kakaobtn from "../../asset/button/kakaobtn.svg";

const Login = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [notAllow, setNotAllow] = useState(true);
  const [notlogin, setNotLogin] = useState(false);
  const [notloginmessage, setNotLoginMessage] = useState("");

  const navigate = useNavigate();

  //로그인
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSignin({ email: userEmail, password: userPw })).then(
      (res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/weather");
          alert("로그인완료");
        } else {
          setNotLoginMessage("이메일 또는 비밀번호를 확인해주세요");
          setNotLogin(false);
        }
      }
    );
  };

  //kakao 소셜로그인 구현중...
  const onkakao = (e) => {
    alert("소셜로그인 카카오톡 구현중입니다.");
  };

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
    <>
      <StLoginContainer>
        <StLogoContainner>
          <StLoginImg src={HitmapLogo} />
        </StLogoContainner>

        <StSignInContainer>
          <StSignin>
            <StSigninDiv>
              <StSigninInput>
                <StEmailInput
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  placeholder="이메일"
                />
                <StPswInput
                  value={userPw}
                  onChange={(e) => setUserPw(e.target.value)}
                  type="password"
                  placeholder="비밀번호"
                />
                {!notlogin && <Stfalsetxt>{notloginmessage}</Stfalsetxt>}
              </StSigninInput>

              <StLoginBtn onClick={submitHandler} disabled={notAllow}>
                로그인
              </StLoginBtn>
            </StSigninDiv>
            <StKakaoContainner>
              <StSimpleLine>
                <StSimpleLogintxt>간편 로그인</StSimpleLogintxt>
              </StSimpleLine>
              <StKakaoBtn onClick={onkakao} src={kakaobtn}></StKakaoBtn>
            </StKakaoContainner>
          </StSignin>
        </StSignInContainer>
        <StSignupcontain>
          아직 계정이 없으신가요?
          <StGoSignup onClick={handleClick}>회원가입</StGoSignup>
        </StSignupcontain>
      </StLoginContainer>
    </>
  );
};

export default Login;

const StLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 64px;

  position: absolute;
  width: 375px;
  height: 627px;
  left: 0px;
  bottom: 28px;
`;

const StLoginImg = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
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

const StSigninInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 343px;
  height: 139px;

  /* Gray/White */

  background: #ffffff;
`;

const StEmailInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;

  width: 343px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_300 */
  outline: none !important;
  border: 2px solid #dfdfdf;
  border-radius: 8px;

  &:focus {
    border: 2px solid #006981;
    border-radius: 8px;
  }
`;

const StPswInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;

  width: 343px;
  height: 48px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_300 */

  border: 2px solid #dfdfdf;
  border-radius: 8px;

  &:focus {
    outline: none !important;
    border: 2px solid #006981;
    border-radius: 8px;
  }
`;

const StLoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 12px;
  width: 343px;
  height: 48px;
  background: #006981;
  border-radius: 8px;

  :disabled {
    background: #a6cad3;
    border-radius: 8px;
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

const StKakaoBtn = styled.img`
  cursor: pointer;
  /* kakao_login_large_wide */
  background-color: yellow;
  width: 343px;
  height: 48px;
`;

const StSignin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 24px;

  width: 375px;
  height: 349px;
`;

const StLogoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
  gap: 36px;

  width: 124px;
  height: 142px;
`;

const StSigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 343px;
  height: 203px;
`;

const StKakaoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 343px;
  height: 90px;
`;

const StSimpleLine = styled.div`
  display: inline-block;

  width: 342px;
  height: 18px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  text-align: center;

  /* Gray/Gray_400 */

  color: #c2c2c2;
`;

const StSignupcontain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 20px;
  gap: 8px;

  width: 310px;
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
  width: 80px;
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
  height: 19px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  /* identical to box height */

  display: flex;
  align-items: flex-end;

  /* Alert/Negative */

  color: #e5294a;
`;

const StSimpleLogintxt = styled.span`
  /* Caption/Medium/12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  text-align: center;

  /* Gray/Gray_400 */

  color: #c2c2c2;
`;
