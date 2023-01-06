import React from "react";
import styled from "styled-components";
import homeIcon from "../../../asset/icon/homeIcon.svg";
import snsIcon from "../../../asset/icon/snsIcon.svg";
import chatAlarmIcon from "../../../asset/icon/chatAlarmIcon.svg";
import myPageIcon from "../../../asset/icon/myPageIcon.svg";

const IconNavigationBar = () => {
  return (
    <BottomNavigationBar>
      <div className="icon-wrapper">
        <div>
          <img src={homeIcon} alt="" />
        </div>
        <div>
          <img src={snsIcon} alt="" />
        </div>
        <div>
          <img src={chatAlarmIcon} alt="" />
        </div>
        <div>
          <img src={myPageIcon} alt="" />
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
