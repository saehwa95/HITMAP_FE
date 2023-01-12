import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import closeIcon from "../../../asset/icon/closeIcon.svg";

const SnsCreateAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsCreateAppBarContainer>
      <img
        src={closeIcon}
        alt="글작성아이콘"
        onClick={() => {
          navigate("/postlist");
        }}
      />
      <StAppBarTitle>글 작성하기</StAppBarTitle>
    </StSnsCreateAppBarContainer>
  );
};

export default SnsCreateAppBar;

const StSnsCreateAppBarContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const StAppBarTitle = styled.div`
  border: 1px solid blue;
`;
