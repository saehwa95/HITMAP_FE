import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import writeIcon from "../../../asset/icon/writeIcon.svg";
import { getCookie } from "../../../shared/cookie";
import StatusBar from "./StatusBar";

const SnsMainAppBar = () => {
  const navigate = useNavigate();
  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");

  return (
    <StSnsMainAppBarContainer>
      <StatusBar />
      <StSnsMainAppBarBox>
        <StSnsMainAppBarTitle>커뮤니티</StSnsMainAppBarTitle>
        <StSnsMainAppBarIcon
          src={writeIcon}
          alt="글작성아이콘"
          onClick={() => {
            authJudge
              ? navigate("/create")
              : alert("로그인이 필요한 기능입니다");
          }}
        />
      </StSnsMainAppBarBox>
    </StSnsMainAppBarContainer>
  );
};

export default SnsMainAppBar;

const StSnsMainAppBarContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StSnsMainAppBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 16px;
`;

const StSnsMainAppBarTitle = styled.label`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const StSnsMainAppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 12px;
  background: #006981;
  border-radius: 16px;
`;
