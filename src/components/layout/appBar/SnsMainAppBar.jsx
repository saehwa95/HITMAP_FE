import React from "react";
import styled from "styled-components";
import writeIcon from "../../../asset/icon/writeIcon.svg";

const SnsMainAppBar = () => {
  return (
    <StSnsMainAppBarContainer>
      <div>커뮤니티</div>
      <img src={writeIcon} alt="글작성아이콘" />
    </StSnsMainAppBarContainer>
  );
};

export default SnsMainAppBar;

const StSnsMainAppBarContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
