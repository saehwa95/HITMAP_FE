/* 마이페이지 내 정보 Frame 컴포넌트 */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyInfoCount from "./MyInfoCount";
import { ReactComponent as ClickIcon } from "../../asset/icon/ClickIcon.svg";

const MyInfoBox = () => {
  return (
    <InfoBoxWrapper>
      <div className="top">
        <div className="profileImg">
          <img alt="" src="" />
        </div>
        <div className="bottom">
          <span>누구누구</span>
          <div className="link">
            <EditMyInfoLink to={"/editMyInfo"}>
              내 정보 수정
              <ClickIcon className="clickIcon" />
            </EditMyInfoLink>
          </div>
        </div>
      </div>
      <MyInfoCount />
    </InfoBoxWrapper>
  );
};

export default MyInfoBox;

const InfoBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: 333px;
  border: 1px solid #ececec;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: #ffffff;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 126px;
    height: 173px;
    margin-top: 40px;
  }
  .profileImg {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: yellow;
  }
  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
    width: 126px;
    height: 77px;
    span {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #1f1f1f;
      display: flex;
      align-items: center;
    }
    .link {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      padding: 4px 16px;
      width: 126px;
      height: 32px;
      padding: 4px 16px;
      border: 1px solid #006981;
      box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
      border-radius: 100px;
    }
  }
`;

const EditMyInfoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #006981;
  text-decoration: none;
  .clickIcon {
    margin-left: 12px;
  }
`;
