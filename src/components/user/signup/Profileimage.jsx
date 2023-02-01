import React, { useRef } from "react";
import styled from "styled-components";
import useInputProfilimage from "../../../hooks/useInputProfilimage";
import clickclickIcon from "../../../asset/icon/clickclickIcon.svg";

const Profileimage = () => {
  const { fileimage, saveFileImage } = useInputProfilimage([]);

  // // 프리뷰 이미지
  const imgRef = useRef();
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <>
      <StProfileContainer>
        <StBackimage>
          <Stimage src={fileimage}></Stimage>
        </StBackimage>
        <StPostProfileBtn
          name="coverimage"
          type="file"
          accept="image/*"
          onChange={saveFileImage}
          ref={imageInput}
        />
        <StPostChangeBtn onClick={onClickImageUpload}>
          사진변경 <StClickicon src={clickclickIcon} alt="" />
        </StPostChangeBtn>
      </StProfileContainer>
    </>
  );
};

export default Profileimage;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 16px;

  width: 343px;
  height: 177px;
`;

const Stimage = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

const StBackimage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='101' height='100' viewBox='0 0 101 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50.5' cy='50' r='50' fill='%23ADB9C7'/%3E%3Ccircle cx='49.9804' cy='41.7999' r='15.7999' stroke='white' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.6472 51.8394C31.3835 55.7377 26.3591 63.2667 26.0008 71.9994C25.9782 72.5512 26.428 73.0003 26.9803 73.0003H72.9801C73.5324 73.0003 73.9823 72.5512 73.9596 71.9994C73.6023 63.2884 68.6019 55.7752 61.3675 51.8686C60.9045 52.3946 60.4055 52.8882 59.8743 53.3455C66.4919 56.6833 71.1939 63.2647 71.8905 71.0003H28.0699C28.7684 63.2451 33.4925 56.6499 40.1366 53.3201C39.6066 52.8615 39.1089 52.3666 38.6472 51.8394Z' fill='white'/%3E%3C/svg%3E%0A");
`;

const StPostProfileBtn = styled.input`
  display: none;
`;

const StPostChangeBtn = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  padding: 4px 16px;
  gap: 12px;

  width: 125px;
  height: 32px;

  /* Gray/White */

  background: #ffffff;
  /* Primary/Primary */

  border: 1px solid #006981; /* 2px 4px 16px 0px rgba(0, 0, 0, 4%)

Small
*/
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;

  /* Button/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;

  /* Primary/Primary */

  color: #006981;
`;

const StClickicon = styled.img`
  width: 10px;
  height: 15px;
`;
