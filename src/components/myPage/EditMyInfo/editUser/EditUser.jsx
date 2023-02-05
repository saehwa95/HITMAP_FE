import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../../redux/api/instance";
import LogoutWithdraw from "../LogoutWithdraw/LogoutWithdraw";
import { ReactComponent as ClickIdIcon } from "../../../../asset/icon/ClickIdIcon.svg";
import imgdeleteButton from "../../../../asset/button/imgdeleteButton.svg";

const EditUser = () => {
  const imgRef = useRef();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //유저 정보 가져오는 리액트쿼리함수
  const userInfoAPI = () => {
    return instance.get("/me");
  };
  const { data } = useQuery(["userInfo"], userInfoAPI);
  const userInformation = data?.data;
  const socialUser = parseInt(userInformation?.social);

  //닉네임 유효성 검사
  const regNickname = /^[A-Z|a-z|가-힣|0-9]{2,10}$/;

  const [nickname, setNickname] = useState("");
  const [nicknameValid, setNicknameValid] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [nicknameAlert, setNicknameAlert] = useState("");
  const [nickValidForCss, setNickValidForCss] = useState(false);

  const onChangeNicknameHandler = (e) => {
    e.preventDefault();

    setNickname(e.target.value);
    if (!regNickname.test(nickname)) {
      setNicknameValid(nicknameValid);
      setIsNickname(false);
    } else {
      setNicknameValid(!nicknameValid);
      setIsNickname(true);
    }
  };

  //닉네임 중복검사 mutation
  const nicknameValidation = useMutation({
    mutationFn: async (nickname) => {
      return await instance.post("/me/myNickname", nickname);
    },
    onSuccess: () => {
      setNicknameAlert(nicknameValidation.data?.data?.message);
      setNickValidForCss(true);
    },
    onError: (error) => {
      setNicknameAlert(error.response.data.errorMessage);
      setNickValidForCss(false);
    },
  });
  //댓글 input창에 내용 없으면 등록 안되게 if문 처리
  const nicknameValidationHandler = () => {
    if (nickname) {
      nicknameValidation.mutate({ nickname: nickname });
    }
  };

  // 사진수정 이미지 확인
  const [fileImage, setFileImage] = useState();

  const saveFileImage = (e) => {
    setFileImage(e.target.files[0]);
    e.target.value = "";
  };

  // 프리뷰 이미지 삭제
  const deleteFileImage = () => {
    setFileImage();
  };

  // 프리뷰 이미지
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
    setFileImage();
  };

  const formData = new FormData();
  formData.append("image", fileImage);
  formData.append("nickname", nickname);

  const submitEditedUserInfoMutation = useMutation({
    mutationFn: async (formData) => {
      return await instance.patch("/me", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      alert("회원 정보가 수정되었습니다.");
      navigate("/mypage");
    },
  });

  const submitEditedUserInfoHandler = (e) => {
    e.preventDefault();
    submitEditedUserInfoMutation.mutate(formData);
  };

  return (
    <>
      <EditMyInfo>
        <StProfileContainer>
          <div>
            <StImgContainer>
              {fileImage ? (
                <StPreviewContainer>
                  <Stimage src={URL.createObjectURL(fileImage)}></Stimage>
                  <StImgdelete
                    onClick={deleteFileImage}
                    src={imgdeleteButton}
                    alt="미리보기 삭제 버튼"
                  />
                </StPreviewContainer>
              ) : (
                <div>
                  <Stimage src={userInformation?.profile_image}></Stimage>
                </div>
              )}
            </StImgContainer>
          </div>
          <StPostProfileBtn
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            onChange={saveFileImage}
            ref={imageInput}
          />
          <EditImageBtn onClick={onClickImageUpload}>
            <span>사진변경</span>
            <ClickIdIcon />
          </EditImageBtn>
        </StProfileContainer>
        <TextBox>
          <NicknameBox>
            <span>닉네임</span>
            <InputDivBox>
              <StInput
                type="text"
                defaultValue={userInformation?.nickname}
                onChange={onChangeNicknameHandler}
                minLength="2"
                maxLength="10"
                nickValidForCss={nickValidForCss}
              />
              <StNickValidationBtn
                onClick={nicknameValidationHandler}
                disabled={!isNickname && nickname.trim() === ""}
              >
                중복확인
              </StNickValidationBtn>
            </InputDivBox>
            <StNickValidAlert nickValidForCss={nickValidForCss}>
              {nicknameAlert}
            </StNickValidAlert>
            <StNickValidDesc>
              닉네임은 한글, 영문, 숫자만 가능하며 2자 이상 10자 이하로
              입력해주세요.
            </StNickValidDesc>
          </NicknameBox>
          {socialUser !== "0" ? (
            <PasswordBox>
              <StSpan>비밀번호</StSpan>
              <PasswordLink to={"/editPassword"}>
                <button>비밀번호 변경</button>
              </PasswordLink>
            </PasswordBox>
          ) : null}
        </TextBox>
      </EditMyInfo>
      <MarginBar />
      <LogoutWithdraw socialUser={socialUser} />
      <EditButtonWrapper>
        <EditButton
          onClick={submitEditedUserInfoHandler}
          disabled={fileImage === undefined && nickname.length < 2}
        >
          수정 완료
        </EditButton>
      </EditButtonWrapper>
    </>
  );
};

export default EditUser;

const EditMyInfo = styled.div`
  width: 375px;
  height: 456px;
`;

const EditImageBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 105px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #006981;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #006981;
    margin: 0 11px;
  }
`;

const StProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
  width: 343px;
  height: 177px;
`;

const StPreviewContainer = styled.div`
  position: relative;
`;

const StImgContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const Stimage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StImgdelete = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 28px;
  top: -1px;
  right: -1px;
  cursor: pointer;
`;

const StPostProfileBtn = styled.input`
  display: none;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 276px;
`;

const InputDivBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  width: 343px;
  height: 48px;
  margin: 12px 0;
`;

const StInput = styled.input`
  box-sizing: border-box;
  padding: 4px 16px;
  width: 243px;
  height: 48px;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;
  :focus {
    outline: none;
    border: 2px solid
      ${({ nickValidForCss }) =>
        nickValidForCss === false ? "#e5294a" : "#5E67DE"};
  }
  border: 1px solid #dfdfdf;
`;

const StNickValidationBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 48px;
  background-color: ${(props) => (props.disabled ? "#A6CAD3" : "#006981")};
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
`;

const StNickValidAlert = styled.div`
  padding: 0 8px;
  margin-bottom: 4px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* color: #e5294a; */
  color: ${({ nickValidForCss }) =>
    nickValidForCss === false ? "#e5294a" : "#5E67DE"};
`;

const StNickValidDesc = styled.div`
  padding: 0 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #3f3f3f;
`;

const StSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const NicknameBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 375px;
  height: 165px;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
`;

const PasswordBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 375px;
  height: 111px;
  gap: 12px;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 343px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #006981;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #006981;
    cursor: pointer;
  }
`;

const PasswordLink = styled(Link)`
  text-decoration: none;
`;

const MarginBar = styled.div`
  width: 374px;
  height: 16px;
  background-color: #ececec;
`;

const EditButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 83px;
  padding: 8px 16px 27px 16px;
`;

const EditButton = styled.button`
  width: 343px;
  height: 48px;
  background-color: ${(props) => (props.disabled ? "#A6CAD3" : "#006981")};
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
