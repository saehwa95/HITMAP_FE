import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";
import StatusBar from "./StatusBar";
import DetailMoreButtonModal from "../../sns/detail/DetailMoreButtonModal";
import backButton from "../../../asset/button/backButton.svg";
import moreButton from "../../../asset/button/moreButton.svg";

const SnsDetailAppBar = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [moreButtonModal, setMoreButtonModal] = useState(false);

  const authJudge = getCookie("auth");

  const userInfoAPI = () => {
    return authJudge ? instance.get("/me") : null;
  };
  const { data } = useQuery(["userInfo"], userInfoAPI);
  const userInformation = data?.data.user_id;

  // 게시글 작성자 정보 가져오는 쿼리
  const detailAPI = () => {
    return instance.get(`/post/${postId}`);
  };

  const detailPostResponse = useQuery(["detailPost"], detailAPI);
  const writerInformation = detailPostResponse.data?.data.post.user_id;

  return (
    <StSnsDetailAppBarContainer>
      <StatusBar />
      <StBackIconBackGround>
        <StBackIconImg
          src={backButton}
          alt="뒤로가기 아이콘"
          onClick={() => {
            navigate("/postlist");
          }}
        />
        {userInformation === writerInformation ? (
          <StMoreIconImg
            src={moreButton}
            alt="추가기능 아이콘"
            onClick={() => {
              setMoreButtonModal(!moreButtonModal);
            }}
          />
        ) : null}
      </StBackIconBackGround>
      {moreButtonModal && (
        <DetailMoreButtonModal
          postId={postId}
          setMoreButtonModal={setMoreButtonModal}
        />
      )}
    </StSnsDetailAppBarContainer>
  );
};

export default SnsDetailAppBar;

const StSnsDetailAppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StBackIconBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const StBackIconImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const StMoreIconImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
