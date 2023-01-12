import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../../../asset/icon/backIcon.svg";

const SnsMainAppBar = () => {
  const navigate = useNavigate();

  return (
    <StSnsMainAppBarContainer>
      <img
        src={backIcon}
        alt="글작성아이콘"
        onClick={() => {
          navigate("/postlist");
        }}
      />
      <div>작성자 닉네임 들어갈 자리</div>
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
