import React from "react";
import styled from "styled-components";
import homeIcon from "../../../asset/icon/homeIcon.svg";
import snsIcon from "../../../asset/icon/snsIcon.svg";
import chatAlarmIcon from "../../../asset/icon/chatAlarmIcon.svg";
import myPageIcon from "../../../asset/icon/myPageIcon.svg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";

const IconNavigationBar = () => {
  const navigate = useNavigate();
  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");
  return (
    <BottomNavigationBar>
      <div className="icon-wrapper">
        <div>
          <img
            src={homeIcon}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div>
          <img
            src={snsIcon}
            alt=""
            onClick={() => {
              navigate("/postlist");
            }}
          />
        </div>
        <div>
          <img
            src={chatAlarmIcon}
            alt=""
            // onClick={() => {
            //   alert("준비중인 기능입니다");
            // }}
            onClick={() => {
              authJudge
                ? navigate("/chat")
                : alert("로그인이 필요한 기능이므로 로그인페이지로 이동합니다");
              authJudge ? navigate("/chat") : navigate("/login");
            }}
          />
        </div>
        <div>
          <img
            src={myPageIcon}
            alt=""
            // onClick={() => {
            //   alert("준비중인 기능입니다");
            // }}
            onClick={() => {
              authJudge
                ? navigate("/mypage")
                : alert("로그인이 필요한 기능이므로 로그인페이지로 이동합니다");
              authJudge ? navigate("/mypage") : navigate("/login");
            }}
          />
        </div>
      </div>
    </BottomNavigationBar>
  );
};

export default IconNavigationBar;

const BottomNavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  gap: 12px;
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
    padding: 0px;
    gap: 40px;
    width: 312px;
    height: 48px;
    flex: none;
    order: 0;
    flex-grow: 0;
    div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 12px;
      gap: 10px;
      width: 48px;
      height: 48px;
      border-radius: 100px;
      cursor: pointer;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
