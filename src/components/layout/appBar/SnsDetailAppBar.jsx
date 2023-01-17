import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import backButton from "../../../asset/button/backButton.svg";
import moreButton from "../../../asset/button/moreButton.svg";
import DetailMoreButtonModal from "../../sns/detail/DetailMoreButtonModal";
import { instance } from "../../../redux/api/instance";
import { useQuery } from "@tanstack/react-query";

const SnsDetailAppBar = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [moreButtonModal, setMoreButtonModal] = useState(false);

  const fetchAPI = () => {
    return instance.get("/me");
  };
  const { data } = useQuery(["userInfo"], fetchAPI);
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
`;

const StMoreIconImg = styled.img`
  width: 48px;
  height: 48px;
`;
