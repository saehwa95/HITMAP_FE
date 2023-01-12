import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import writeIcon from "../../../asset/icon/writeIcon.svg";

const SnsMainAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsMainAppBarContainer>
      <div>커뮤니티</div>
      <img
        src={writeIcon}
        alt="글작성아이콘"
        onClick={() => {
          navigate("/create");
        }}
      />
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
