import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import SnsUpdateAppBar from "../../layout/appBar/SnsUpdateAppBar";

//sns 상세카드 한 장 컴포넌트
const SnsUpdateModal = ({ setUpdateModal, setMoreButtonModal }) => {
  const { postId } = useParams();

  const [input, setInput] = useState({ content: "", fishName: "" });
  const onChangeTextHandler = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  //해당 게시글 정보 가져오는 useQuery
  const detailPostAPI = async () => {
    return await instance.get(`/post/${postId}`);
  };
  const { data } = useQuery(["detailPost"], detailPostAPI);
  const dataForUpdate = data?.data.post;

  const queryClient = useQueryClient();
  const updateMain = useMutation({
    mutationFn: async ({ content, fishName }) => {
      return await instance.patch(`/post/${postId}`, {
        content,
        fishName,
      });
    },
    onSuccess: () => {
      alert("게시글 수정 완료");
      setUpdateModal(false);
      setMoreButtonModal(false);
      queryClient.invalidateQueries({ queryKey: ["detailPost"] });
    },
  });

  return (
    <StDeleteConfirmAll>
      <SnsUpdateAppBar
        setUpdateModal={setUpdateModal}
        setMoreButtonModal={setMoreButtonModal}
      />
      <StUpdateBody>
        <StImageBoxScrollDiv>
          <StUpdateImageBox>
            {dataForUpdate?.PostImage.map((item) => {
              return (
                <StUpdateImage
                  alt="작성글 이미지"
                  src={item.src}
                  key={item.src}
                />
              );
            })}
          </StUpdateImageBox>
        </StImageBoxScrollDiv>
        <StUpdateContent
          name="content"
          maxLength="150"
          defaultValue={dataForUpdate.content}
          onChange={onChangeTextHandler}
          placeholder="내용을 입력해주세요.(최대 150자)"
        ></StUpdateContent>
        <StUpdateFishNameBox>
          <StUpdateFishNameLabel>조황정보</StUpdateFishNameLabel>
          <StUpdateFishName
            name="fishName"
            maxLength="20"
            defaultValue={dataForUpdate.fishName}
            onChange={onChangeTextHandler}
            placeholder="조황 정보를 입력해주세요.(최대 20자)"
          ></StUpdateFishName>
        </StUpdateFishNameBox>
      </StUpdateBody>
      <StButtonBox>
        <StButton
          onClick={(e) => {
            e.preventDefault();
            updateMain.mutate({
              content: input.content,
              fishName: input.fishName,
            });
          }}
          disabled={!(input.fishName && input.content)}
        >
          등록하기
        </StButton>
      </StButtonBox>
    </StDeleteConfirmAll>
  );
};

export default SnsUpdateModal;

const StDeleteConfirmAll = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 99.8vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const StUpdateBody = styled.div`
  background-color: #ffffff;
  padding-top: 8px;
  width: 375px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StImageBoxScrollDiv = styled.div`
  width: 343px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    /* display: none; */
  }
`;

const StUpdateImageBox = styled.div`
  padding: 24px 0 24px 0;
  border-bottom: 1px solid #dfdfdf;
  gap: 16px;
  width: 343px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StUpdateImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 8px;
`;

const StUpdateContent = styled.textarea`
  border: none;
  padding: 16px 0;
  width: 343px;
  height: 272px;
  background: #ffffff;
  border-bottom: 1px solid #dfdfdf;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const StUpdateFishNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 343px;
  background: #ffffff;
`;

const StUpdateFishNameLabel = styled.label`
  width: 343px;
  margin-top: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #1f1f1f;
`;

const StUpdateFishName = styled.textarea`
  width: 343px;
  height: 48px;
  resize: none;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 2.5;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    vertical-align: middle;
  }
`;

const StButtonBox = styled.div`
  padding: 8px 16px 27px 16px;
  width: 375px;
  height: 83px;
  background-color: #ffffff;
`;

const StButton = styled.button`
  width: 343px;
  height: 48px;
  color: white;
  border: none;
  background-color: ${(props) => (props.disabled ? "#A6CAD3" : "#006981")};
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  border-radius: 8px;
`;
