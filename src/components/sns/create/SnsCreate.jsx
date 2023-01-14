import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsCreateAppBar from "../../layout/appBar/SnsCreateAppBar";
import deleteButton from "../../../asset/button/deleteButton.svg";
import { getCookie } from "../../../shared/cookie";

//얘는 모달일까 바텀시트일까, 일단 page로 만드는 폴더구조이긴한데..
const SnsCreate = () => {
  const [input, setInput] = useState({ content: "", fishName: "" });
  const [imageFile, setImageFile] = useState(null);
  const [showImages, setShowImages] = useState([]);

  const onChangeTextHandler = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input.content, input.fishName);
  };

  //이미지 상대경로 저장
  const handleAddImages = (event) => {
    setImageFile(event.target.files);
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };
  //미리보기삭제버튼 클릭시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  // const formData = new FormData();
  // formData.append("images", imageFile[0])
  // formData.append("images", imageFile[1])
  // formData.append("images", imageFile[2])
  // formData.append("images", imageFile[3])
  // formData.append("images", imageFile[4])
  // formData.append("content", input.content)
  // formData.append("fishName", input.fishName)

  // const {status} = useMutation(()=> {
  //   return instance.post('/post', formData)
  // })

  return (
    <div>
      <SnsCreateAppBar />
      <StCreateContainer>
        <StImageBox>
          <StImageLabel>사진 선택 (최대 5장)</StImageLabel>
          <StImageFileBox>
            <StImageLabelButton htmlFor="input-file" onChange={handleAddImages}>
              +
              <input
                type="file"
                id="input-file"
                style={{ display: "none" }}
                multiple
              />
            </StImageLabelButton>
            <StPreviewImgContainer>
              {showImages.map((image, id) => (
                <StPreviewImgBox key={id}>
                  <StPreviewImg src={image} alt={`${image}-${id}`} />
                  <StPreviewDeleteButton
                    alt="미리보기삭제버튼"
                    src={deleteButton}
                    onClick={() => handleDeleteImage(id)}
                  ></StPreviewDeleteButton>
                </StPreviewImgBox>
              ))}
            </StPreviewImgContainer>
          </StImageFileBox>
        </StImageBox>

        <StContentInputBox>
          <StContentInput
            type="text"
            name="content"
            value={input.content}
            onChange={onChangeTextHandler}
            placeholder="Sample text"
          />
        </StContentInputBox>
        <StFishNameBox>
          <StFishNameLabel>조황정보</StFishNameLabel>
          <StFishNameInput
            type="text"
            name="fishName"
            value={input.fishName}
            onChange={onChangeTextHandler}
          />
        </StFishNameBox>
        <StButton type="submit">작성하기</StButton>
      </StCreateContainer>
    </div>
  );
};

export default SnsCreate;

const StCreateContainer = styled.form`
  border: 1px solid orange;
`;

const StPreviewImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 7px;
  border: 1px solid red;
`;

const StPreviewImgBox = styled.div``;

const StPreviewDeleteButton = styled.div``;

const StImageBox = styled.div`
  /* border: 1px solid blue; */
  margin: 0 16px;
  padding: 16px 0 16px 0;
`;

const StImageLabel = styled.label`
  border: 1px solid blue;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #1f1f1f;
`;

const StImageFileBox = styled.div`
  border: 1px solid brown;

  display: flex;
  flex-direction: row;
  width: 343px;
  height: 155px;
`;

const StImageLabelButton = styled.label`
  width: 84px;
  height: 84px;
  background: #979797;
  border-radius: 8px;
  font-size: 48px;
  color: white;
`;

const StPreviewImg = styled.img`
  /* padding-top: 5px; */
  border-radius: 10px;
  width: 84px;
  height: 84px;
`;

const StContentInputBox = styled.div`
  margin: 0 16px 0 16px;
  padding: 16px 0 16px 0;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  text-align: start;
`;

const StContentInput = styled.input`
  width: 343px;
  height: 230px;
  border: 1px solid pink;
  vertical-align: top;
  text-align: left;
`;

const StFishNameBox = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  /* width: 343px; */
  padding: 16px 16px 100px 16px;
  height: 111px;
  gap: 12px;
`;

const StFishNameLabel = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #1f1f1f;
`;

const StFishNameInput = styled.input`
  height: 48px;
  border: 2px solid #006981;
  border-radius: 8px;
`;

const StButton = styled.button`
  margin: 8px 16px 27px 16px;
  border: none;

  width: 341px;
  height: 48px;
  border-radius: 8px;
  background: #006981;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: white;
`;
