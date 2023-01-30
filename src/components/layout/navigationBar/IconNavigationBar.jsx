import React from "react";
import styled from "styled-components";
import homeIcon from "../../../asset/icon/homeIcon.svg";
import snsIcon from "../../../asset/icon/snsIcon.svg";
import chatIcon from "../../../asset/icon/chatIcon.svg";
import myPageIcon from "../../../asset/icon/myPageIcon.svg";
import clickHomeIcon from "../../../asset/icon/clickHomeIcon.svg";
import clickSnsIcon from "../../../asset/icon/clickSnsIcon.svg";
import clickChatIcon from "../../../asset/icon/clickChatIcon.svg";
import clickMyPageIcon from "../../../asset/icon/clickMyPageIcon.svg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";
import { useState } from "react";

const IconNavigationBar = () => {
  const [homeClick, setHomeClick] = useState(false);
  const [snsClick, setSnsClick] = useState(false);
  const [chatClick, setChatClick] = useState(false);
  const [mypageClick, setMypageClick] = useState(false);
  const navigate = useNavigate();

  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");

  console.log(homeClick, snsClick, chatClick, mypageClick);
  return (
    <BottomNavigationBar>
      <div className="icon-wrapper">
        {homeClick ? (
          <img
            src={clickHomeIcon}
            alt=""
            onClick={() => {
              navigate("/");
              setHomeClick(false);
            }}
          />
        ) : (
          <img
            src={homeIcon}
            alt=""
            onClick={() => {
              navigate("/");
              setHomeClick(true);
            }}
          />
        )}

        {snsClick ? (
          <img
            src={clickSnsIcon}
            alt=""
            onClick={() => {
              navigate("/postlist");
              setSnsClick(false);
            }}
          />
        ) : (
          <img
            src={snsIcon}
            alt=""
            onClick={() => {
              navigate("/postlist");
              setSnsClick(true);
            }}
          />
        )}

        {chatClick ? (
          <img
            src={clickChatIcon}
            alt=""
            onClick={() => {
              setChatClick(false);
              authJudge
                ? navigate("/chat")
                : alert("로그인이 필요한 기능이므로 로그인페이지로 이동합니다");
              authJudge ? navigate("/chat") : navigate("/login");
            }}
          />
        ) : (
          <img
            src={chatIcon}
            alt=""
            onClick={() => {
              setChatClick(true);
              authJudge
                ? navigate("/chat")
                : alert("로그인이 필요한 기능이므로 로그인페이지로 이동합니다");
              authJudge ? navigate("/chat") : navigate("/login");
            }}
          />
        )}

        {mypageClick ? (
          <img
            src={clickMyPageIcon}
            alt=""
            onClick={() => {
              setMypageClick(false);
              authJudge ? navigate("/mypage") : navigate("/logInRegister");
            }}
          />
        ) : (
          <img
            src={myPageIcon}
            alt=""
            onClick={() => {
              authJudge ? navigate("/mypage") : navigate("/logInRegister");
              setMypageClick(true);
            }}
          />
        )}
      </div>
    </BottomNavigationBar>
  );
};

export default IconNavigationBar;

const BottomNavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 375px;
  height: 83px;
  background-color: #ffffff;
  border-top: 1px solid #eef2f6;
  box-shadow: 0px -4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 0px 0px;
  bottom: 0px;
  z-index: 100;
  .icon-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 36px;
    margin-top: 8px;
  }
  img {
    cursor: pointer;
  }
`;
