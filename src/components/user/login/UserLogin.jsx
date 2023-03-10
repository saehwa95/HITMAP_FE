import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __postSignin } from "../../../redux/modules/userSlice";
import Start from "../../../pages/user/kakaoLogin/Start";

const UserLogin = () => {
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
          navigate("/main");
          alert("로그인 완료");
        } else {
          setNotLoginMessage("이메일 또는 비밀번호를 확인해주세요.");
          setNotLogin(false);
        }
      }
    );
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
      <StSignin>
        <StLogin>
          <div>
            <StLoginInput
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              placeholder="이메일"
              isChecked={notlogin}
            />
            <StLoginInput
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              type="password"
              placeholder="비밀번호"
              isChecked={notlogin}
            />
            {!notlogin && <Stfalsetxt>{notloginmessage}</Stfalsetxt>}
          </div>
          <StLoginBtn onClick={submitHandler} disabled={notAllow}>
            로그인
          </StLoginBtn>
        </StLogin>

        <StKakaoContainner>
          <div>
            <Sthr />
            <StSimpleLogintxt>간편 로그인</StSimpleLogintxt>
            <Sthr2 />
          </div>
          <Start />
        </StKakaoContainner>
      </StSignin>
      <StSignupcontain>
        아직 계정이 없으신가요?
        <StGoSignup onClick={handleClick}>회원가입</StGoSignup>
      </StSignupcontain>
    </>
  );
};

export default UserLogin;

const StLoginInput = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 4px 16px;
  width: 343px;
  height: 48px;
  background: #ffffff;
  outline: none;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  outline: none;
  ::placeholder {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 16px;
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
  border: none;
  width: 343px;
  height: 48px;
  background: #006981;
  border-radius: 8px;
  :disabled {
    cursor: default;
    background: #a6cad3;
    border-radius: 8px;
    border: none;
  }
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
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

const StKakaoContainner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StSignupcontain = styled.div`
  display: flex;
  padding-bottom: 40px;
  gap: 10px;
  margin: 0 auto;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #979797;
  background: #ffffff;
`;

const StGoSignup = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #006981;
  cursor: pointer;
`;

const Stfalsetxt = styled.span`
  font-family: "Pretendard";
  margin-top: 5px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #e5294a;
`;

const StSimpleLogintxt = styled.span`
  position: absolute;
  margin-left: 17px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
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
