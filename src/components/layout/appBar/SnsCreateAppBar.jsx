import React from "react";
import styled from "styled-components";
import closeIcon from "../../../asset/icon/closeIcon.svg";

const SnsCreateAppBar = () => {
  return (
    <StSnsCreateAppBarContainer>
      <img src={closeIcon} alt="글작성아이콘" />
      <div>작성자 닉네임 들어갈 자리</div>
    </StSnsCreateAppBarContainer>
  );
};

export default SnsCreateAppBar;

const StSnsCreateAppBarContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
