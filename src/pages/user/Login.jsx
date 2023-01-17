import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __postSignin, __logOut } from "../../redux/modules/userSlice";
import kakaobtn from "../../asset/button/kakaobtn.svg";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const dispatch = useDispatch();
  const [notAllow, setNotAllow] = useState(true);

  const logoutOnclickHandler = (e) => {
    e.preventDefault();

    dispatch(__logOut());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSignin({ email: userEmail, password: userPw }));
  };

  const onkakao = (e) => {};

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/signup";
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
          <StLoginImg />
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
              </StSigninInput>
              <StLoginBtn onClick={submitHandler} disabled={notAllow}>
                로그인
              </StLoginBtn>
            </StSigninDiv>
            <StKakaoContainner>
              <StSimpleLine>
                <hr width="120px" />
                간편 로그인
                <hr width="120px" />
              </StSimpleLine>

              <StKakaoBtn onClick={onkakao} />
            </StKakaoContainner>
          </StSignin>
        </StSignInContainer>
        <StSignupcontain>
          아직 계정이 없으신가요?
          <StGoSignup onClick={handleClick}>회원가입</StGoSignup>
        </StSignupcontain>
      </StLoginContainer>
      <StLogoutBtn onClick={(e) => logoutOnclickHandler(e)}>
        로그아웃
      </StLogoutBtn>
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
  height: 655px;
  left: 0px;
  bottom: 300px;
  border: 1px solid black;
`;

const StLoginImg = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;

  background: #000000;
  border-radius: 100px;
`;

const StSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 56px;

  width: 375px;
  height: 406px;
  border: 1px solid red;
`;

const StSigninInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 343px;
  height: 108px;

  /* Gray/White */

  background: #ffffff;
  border: 1px solid yellow;
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

  width: 343px;
  height: 48px;
  background: #006981;
  border-radius: 8px;

  :disabled {
    background: #c2c2c2;
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

const StLogoutBtn = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 80%;
`;

const StKakaoBtn = styled.button`
  background-color: yellow;
  gap: 10px;

  cursor: pointer;
  /* kakao_login_large_wide */

  width: 343px;
  height: 48px;
`;

const StSignin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 375px;
  height: 318px;

  border: 1px solid green;
`;

const StLogoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
  gap: 36px;

  width: 146px;
  height: 185px;
  border: 1px solid blue;
`;

const StSigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 343px;
  height: 172px;
  border: 1px solid red;
`;

const StKakaoContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 343px;
  height: 90px;
  border: 1px solid blue;

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

const StKakaoLine = styled.span`
  width: 342px;
  height: 18px;

  position: absolute;
  width: 55px;
  height: 18px;
  left: 144px;
  top: 0px;

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

const StSimpleLine = styled.div`
  display: inline-block;

  width: 342px;
  height: 18px;
`;

const StSignupcontain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 20px;
  gap: 8px;

  width: 259px;
  height: 32px;
  border: 1px solid green;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  /* Gray/White */

  background: #ffffff;
`;

const StGoSignup = styled.span`
  width: 65px;
  height: 24px;

  /* Button/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* Primary/Primary */

  color: #006981;

  cursor: pointer;
`;
