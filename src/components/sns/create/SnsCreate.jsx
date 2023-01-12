import React, { useState } from "react";
// import styled from "styled-components";
import styled from "styled-components";
import SnsCreateAppBar from "../../layout/appBar/SnsCreateAppBar";

//얘는 모달일까 바텀시트일까, 일단 page로 만드는 폴더구조이긴한데..
const SnsCreate = () => {
  const [imageFile, setImageFile] = useState(null);
  const [input, setInput] = useState({ content: "", fishName: "" });
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

  // const postUploader = () => {
  //   const
  // }

  return (
    <div>
      <SnsCreateAppBar />
      <StCreateContainer>
        <div>
          <label htmlFor="input-file" onChange={handleAddImages}>
            <input type="file" id="input-file" multiple />
          </label>
          <StPreviewImgContainer>
            {showImages.map((image, id) => (
              <div key={id}>
                <StPreviewImg
                  src={image}
                  alt={`${image}-${id}`}
                  onClick={() => handleDeleteImage(id)}
                />
                {/* <button onClick={() => handleDeleteImage(id)}>
              미리보기삭제버튼
            </button> */}
              </div>
            ))}
          </StPreviewImgContainer>
        </div>

        <StContentInput
          type="text"
          name="content"
          value={input.content}
          onChange={onChangeTextHandler}
          placeholder="내용을 입력해주세요."
        />
        <StFishNameBox>
          <label>조황정보</label>
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

const StPreviewImg = styled.img`
  /* padding-top: 5px; */
  border: 1px solid brown;
  border-radius: 10px;
  width: 65px;
  height: 65px;
`;

const StContentInput = styled.input`
  width: 343px;
  height: 230px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: none;
  border-right: none;
`;

const StFishNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StFishNameInput = styled.input`
  width: 343px;
  height: 48px;
  border: 2px solid #000000;
  border-radius: 8px;
`;

const StButton = styled.button`
  width: 343px;
  height: 48px;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
