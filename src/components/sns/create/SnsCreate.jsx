import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsCreateAppBar from "../../layout/appBar/SnsCreateAppBar";
import { useNavigate } from "react-router-dom";

const SnsCreate = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ content: "", fishName: "" });
  const [postImages, setPostImages] = useState([]); // 서버로 보낼 이미지 데이터

  const onChangeTextHandler = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onChangImages = (e) => {
    setPostImages(e.target.files);
  };

  const formData = new FormData();
  formData.append("content", input.content);
  formData.append("fishName", input.fishName);
  Array.from(postImages).forEach((item) => {
    formData.append("image", item);
  });

  const postMain = useMutation({
    mutationFn: async (formData) => {
      return await instance.post("/post", formData);
    },
    onSuccess: () => {
      alert("게시글 작성 완료");
      navigate("/postlist");
    },
  });

  return (
    <div>
      <SnsCreateAppBar />
      <StCreateContainer>
        <StImageBox>
          <StImageLabel>사진 선택 (최대 5장)</StImageLabel>
          <StImageFileBox>
            <StImageLabelButton htmlFor="input-file">
              +
              <input
                type="file"
                id="input-file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onChangImages}
                multiple
              />
            </StImageLabelButton>
            <StPreviewImgContainer>
              {Array.from(postImages).map((item) => {
                return (
                  <div key={item.lastModified}>
                    <StImgPreview
                      alt="미리보기이미지"
                      src={item ? URL.createObjectURL(item) : null}
                    />
                  </div>
                );
              })}
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
        <StButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            postMain.mutate(formData);
          }}
        >
          작성하기
        </StButton>
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

const StImgPreview = styled.img`
  width: 100px;
  height: 100px;
`;

const StImageBox = styled.div`
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
