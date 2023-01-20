import styled from "styled-components";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { instance } from "../../redux/api/instance";
import { useDispatch } from "react-redux";

import { __logOut } from "../../redux/modules/userSlice";

import ModalBasic from "../../components/myPage/ModalBasic";
import moreIcon from "../../asset/icon/moreIcon.svg";

import commentIcon from "../../asset/icon/commentIcon.svg";
// import { useParams } from "react-router-dom";

const MyPage = () => {
  // const { userId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const myInf = () => {
    return instance.get(`/me`);
  };
  const { data, isLoading, isError, error } = useQuery(["myPage"], myInf);

  const myData = data?.data;

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  // const myPost = () => {
  //   return instance.get(`/me/${userId}`);
  // };
  // console.log(userId);
  // const postData = result;
  // console.log(postData);

  const showModal = () => {
    setModalOpen(true);
  };

  const logoutOnclickHandler = (e) => {
    e.preventDefault();

    dispatch(__logOut());
  };

  return (
    <>
      <StLogoutBtn onClick={(e) => logoutOnclickHandler(e)}>
        로그아웃
      </StLogoutBtn>
      <StTitle>마이페이지</StTitle>
      <StMyContainer>
        <StMyPost>
          <StProfile>
            <StProfileImg alt="프로필이미지" src={myData?.profile_image} />
            <StPostProfile>
              {myData.nickname}
              <StPostProfileBtn>내정보 수정 {">"}</StPostProfileBtn>
            </StPostProfile>
          </StProfile>
          <StStimate>
            <StPostCount>
              2<StPostSpan>게시물</StPostSpan>
            </StPostCount>
            <StPostLike>
              24
              <StLikeSpan>좋아요</StLikeSpan>
            </StPostLike>
          </StStimate>
        </StMyPost>
        <StPostList>
          <StListInf>
            <StListTopInf>
              <StTopTime>
                <StDate>2023.01.11</StDate>
                <StTimeSpan>오후 04:43</StTimeSpan>
                <StMore src={moreIcon} onClick={showModal}></StMore>
                {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
              </StTopTime>
            </StListTopInf>
          </StListInf>
          <StPostview>
            <StPostImg></StPostImg>
            <StPostTitle>
              <StPostTitleSpan>이름이 뭐뭐 들어가지요</StPostTitleSpan>
            </StPostTitle>
          </StPostview>
          <StLikeComment>
            <StPostListLike>
              <StLikeIcon />0
            </StPostListLike>
            <StPostListComment>
              <StCommentIcon src={commentIcon} />0
            </StPostListComment>
          </StLikeComment>
        </StPostList>
      </StMyContainer>
    </>
  );
};

export default MyPage;

const StTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 343px;
  height: 64px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Black */

  color: #1f1f1f;
`;

const StMyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  position: absolute;
  width: 100%;
  height: 1454px;
`;

const StMyPost = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 32px;

  width: 343px;
  height: 333px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 1px solid #ececec; /* 0px 4px 16px 0px rgba(0, 0, 0, 12%)

Medium
*/
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;

const StProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 126px;
  height: 173px;

  margin-top: 40px;
`;

const StProfileImg = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  border: 1px solid yellow;
`;

const StPostProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 126px;
  height: 77px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Black */

  color: #1f1f1f;
`;

const StPostProfileBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;

  width: 126px;
  height: 32px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;

  /* Primary/Primary */

  color: #006981;
  /* Gray/White */

  background: #ffffff;
  /* Primary/Primary */

  border: 1px solid #006981; /* 2px 4px 16px 0px rgba(0, 0, 0, 4%)

Small
*/
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  cursor: pointer;
`;

const StStimate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 311px;
  height: 56px;
`;

const StPostCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;

  width: 155.5px;
  height: 56px;

  /* Gray/Gray_400 */

  border-right: 1px solid #c2c2c2;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Gray_600 */

  color: #3f3f3f;
`;

const StPostLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;

  width: 155.5px;
  height: 56px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Gray_600 */

  color: #3f3f3f;
`;

const StPostSpan = styled.span`
  width: 42px;
  height: 21px;

  /* Body/Medium/14 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Gray/Gray_500 */

  color: #979797;
`;

const StLikeSpan = styled.span`
  width: 42px;
  height: 21px;

  /* Body/Medium/14 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Gray/Gray_500 */

  color: #979797;
`;

const StPostList = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 343px;
  height: 495px;
  margin: 0 auto;
  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_200 */

  border: 1px solid #ececec; /* 0px 4px 16px 0px rgba(0, 0, 0, 12%)

Medium
*/
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;

const StListInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 100%;
  height: 459px;
  left: 0px;
  top: 16px;
`;

const StListTopInf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 19px;

  width: 100%;
  height: 36px;
`;

const StTopTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  left: 16px;
  width: 204px;
  height: 36px;
  position: absolute;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Gray_600 */

  color: #3f3f3f;
`;

const StTimeSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  position: absolute;
  width: 67px;
  height: 21px;
  left: 0px;
  top: 20px;

  display: flex;
  align-items: center;

  /* Gray/Gray_400 */

  color: #c2c2c2;
`;

const StDate = styled.span`
  position: absolute;
  width: 80px;
  height: 19px;
  left: -1px;
  top: 0px;

  /* Subtitle/Bold/16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray/Gray_600 */

  color: #3f3f3f;
`;

const StMore = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 285px;
  cursor: pointer;
`;

const StPostview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  position: absolute;
  top: 68px;

  width: 100%;
  height: 359px;
`;

const StPostImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 0px 16px;
  gap: 8px;

  width: 100%;
  height: 311px;

  background-color: #cac8c8;
`;

const StPostTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 24px;

  width: 343px;
  height: 40px;
`;

const StPostTitleSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  width: 300px;
  height: 24px;

  top: 330px;

  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;

  color: #1f1f1f;
`;

const StLikeComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;
  gap: 16px;

  width: 148px;
  height: 32px;

  position: absolute;
  top: 435px;
`;

const StPostListLike = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px 4px 8px;
  gap: 4px;

  width: 58px;
  height: 32px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_300 */
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  /* Gray/Gray_500 */

  color: #979797;

  border: 1px solid #dfdfdf;
  border-radius: 100px;
`;

const StLikeIcon = styled.img``;

const StPostListComment = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px 4px 8px;
  gap: 4px;

  width: 58px;
  height: 32px;

  /* Gray/White */

  background: #ffffff;
  /* Gray/Gray_300 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  /* Gray/Gray_500 */

  color: #979797;

  border: 1px solid #dfdfdf;
  border-radius: 100px;
`;

const StCommentIcon = styled.img``;

const StLogoutBtn = styled.button`
  width: 90px;
  height: 50px;
  display: flex;

  float: right;
`;
