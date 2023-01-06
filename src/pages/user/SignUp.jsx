import React, { useState } from "react";
import styled from "styled-components";
import closeIcon from "../../asset/icon/closeIcon.svg";

const SignUp = () => {
  const [image, setImage] = useState();
  const formData = new FormData();

  const fileimage = (e) => {
    setImage(formData.append("image", e.target.files[0]));
  };

  return (
    <StSignupContainer>
      <StTopNav>
        <StNavitem>
          회원가입
          <StClosBtn src={closeIcon} alt="" />
        </StNavitem>
      </StTopNav>
      <StSignupList>
        <StProfileContainer>
          {fileimage && <Stimage src={fileimage}></Stimage>}
          <StFileInput type="file" onChange={fileimage}></StFileInput>
        </StProfileContainer>
      </StSignupList>
    </StSignupContainer>
  );
};

export default SignUp;

const StSignupContainer = styled.div``;

const StTopNav = styled.div`
  width: 375px;
  height: 64px;

  justify-content: center;
  display: flex;
  border: 1px solid black;
`;

const StClosBtn = styled.img`
  float: left;
  margin: 10px 0px 0px 1px;
`;

const StNavitem = styled.div`
  width: 343px;
  height: 48px;
  position: absolute;
  text-align: center;
  line-height: 47px;
  transform: translate(0, 12%);
`;

const StSignupList = styled.div`
  height: 90vh;
  width: 100%;
  border: 1px solid blue;
`;

const StProfileContainer = styled.div`
  height: 130px;
  width: 100%;
  border: 1px solid yellow;
`;

const StFileInput = styled.input`
  border: 1px solid red;
`;

const Stimage = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid green;
  border-radius: 50%;
`;
