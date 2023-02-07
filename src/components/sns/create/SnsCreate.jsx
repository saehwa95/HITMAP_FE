import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsCreateAppBar from "../../layout/appBar/SnsCreateAppBar";
import deletePhotoButton from "../../../asset/button/deletePhotoButton.svg";
import photoAddIcon from "../../../asset/icon/photoAddIcon.svg";

const SnsCreate = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ content: "", fishName: "" });

  // 서버로 보낼 이미지 데이터
  const [postImages, setPostImages] = useState([]);
  const imageLength = postImages.length;
  const onChangeTextHandler = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onChangeImages = (e) => {
    if (postImages.length > 5) {
      alert("사진은 최대 5장까지 작성 가능합니다");
    } else {
      setPostImages(e.target.files);
    }
  };

  const formData = new FormData();
  formData.append("content", input.content);
  formData.append("fishName", input.fishName);
  if (imageLength > 5) {
    alert("사진은 최대 5장까지 작성 가능합니다");
    setPostImages([]);
  } else {
    Array.from(postImages).forEach((item) => {
      formData.append("image", item);
    });
  }
  const queryClient = useQueryClient();
  const postMain = useMutation({
    mutationFn: async (formData) => {
      return await instance.post("/post", formData);
    },
    onSuccess: () => {
      alert("게시글 작성 완료");
      navigate("/postlist");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  //미리보기 삭제 함수
  const onDeletePreviewImg = (id) => {
    const newPreviewList = Array.from(postImages).filter(
      (_, index) => index !== id
    );
    setPostImages(newPreviewList);
  };

  //중복등록 방지를 위한 state
  const [preventSubmitDuplication, setPreventSubmitDuplication] =
    useState(false);

  const postHandler = (e) => {
    e.preventDefault();
    postMain.mutate(formData);
    setPreventSubmitDuplication(!preventSubmitDuplication);
  };

  return (
    <div>
      <SnsCreateAppBar />
      <StCreateContainer>
        <StImageBox>
          <StImageLabel>사진 선택 (최대 5장)</StImageLabel>
          <StImageFileBox>
            <div>
              <StImageLabelButton htmlFor="input-file">
                <img alt="사진추가 아이콘" src={photoAddIcon} />
              </StImageLabelButton>
              <input
                type="file"
                id="input-file"
                accept="image/jpeg, image/jpg, image/png"
                style={{ display: "none" }}
                onChange={onChangeImages}
                multiple
              />
            </div>
            <StPreviewImgContainer>
              {Array.from(postImages).map((item, id) => {
                return (
                  <div key={`${item.lastModified}-${item.name}`}>
                    <StImgPreviewContainer>
                      <StImgPreview
                        alt="미리보기이미지"
                        src={item ? URL.createObjectURL(item) : null}
                      />
                      <StImgPreviewDeleteButton
                        alt=""
                        src={deletePhotoButton}
                        onClick={() => {
                          onDeletePreviewImg(id);
                        }}
                      />
                    </StImgPreviewContainer>
                  </div>
                );
              })}
            </StPreviewImgContainer>
          </StImageFileBox>
        </StImageBox>
        <StContentInputBox>
          <StContentInput
            type="text"
            maxLength="150"
            name="content"
            value={input.content}
            onChange={onChangeTextHandler}
            placeholder=" 내용을 작성해주세요.(최대 150자)"
          />
        </StContentInputBox>
        <StFishNameBox>
          <StFishNameLabel>조황정보</StFishNameLabel>
          <StFishNameInput
            type="text"
            maxLength="20"
            name="fishName"
            value={input.fishName}
            onChange={onChangeTextHandler}
            placeholder=" 어종을 작성해주세요.(ex. 한치)"
          />
        </StFishNameBox>
        <StButtonBox>
          <StButton
            type="submit"
            onClick={postHandler}
            disabled={
              !(
                preventSubmitDuplication === false &&
                input.fishName &&
                input.content &&
                !(postImages.length === 0)
              )
            }
          >
            작성하기
          </StButton>
        </StButtonBox>
      </StCreateContainer>
    </div>
  );
};

export default SnsCreate;

const StCreateContainer = styled.form`
  height: 88vh;
`;

const StPreviewImgContainer = styled.div`
  width: 250px;
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  height: 118px;
  gap: 16px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    /* display: none; */
  }
`;

const StImageBox = styled.div`
  margin: 0 16px 10px 16px;
  padding: 16px 0 0 0;
`;

const StImgPreviewContainer = styled.div`
  position: relative;
`;

const StImgPreview = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 8px;
`;

const StImgPreviewDeleteButton = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 28px;
  top: -8px;
  right: -8px;
`;

const StImageLabel = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #1f1f1f;
`;

const StImageFileBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 0 4px 0;
  height: 126px;
`;

const StImageLabelButton = styled.label`
  transform: translateY(10px);
  display: flex;
  margin-right: 16px;
  cursor: pointer;
`;

const StContentInputBox = styled.div`
  margin: 0 16px 0 16px;
  padding: 16px 0 16px 0;
  height: 272px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  text-align: start;
`;

const StContentInput = styled.textarea`
  border: none;
  width: 340px;
  height: 236px;
  vertical-align: top;
  text-align: left;
  resize: none;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;
  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #c2c2c2;
  }
  &:focus {
    outline: none;
  }
`;

const StFishNameBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
  height: 111px;
  gap: 12px;
`;

const StFishNameLabel = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #1f1f1f;
`;

const StFishNameInput = styled.input`
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding-left: 10px;
  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #c2c2c2;
  }
  &:focus {
    outline: 2px solid #006981;
  }
`;

const StButtonBox = styled.div`
  box-sizing: border-box;
  margin-top: 100px;
  padding: 8px 16px 27px 16px;
  width: 375px;
  height: 83px;
`;

const StButton = styled.button`
  width: 343px;
  height: 48px;
  color: white;
  border: none;
  background-color: ${(props) => (props.disabled ? "#A6CAD3" : "#006981")};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  border-radius: 8px;
  cursor: pointer;
  :disabled {
    cursor: default;
  }
`;
