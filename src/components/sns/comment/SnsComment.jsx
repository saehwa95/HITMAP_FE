import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import CommentMoreButtonModal from "./CommentMoreButtonModal";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";
import moreIcon from "../../../asset/icon/moreIcon.svg";

//댓글 하나 컴포넌트
const SnsComment = ({ list }) => {
  const [moreButtonModal, setMoreButtonModal] = useState(false);
  const timeForComment = list.created_at.slice(0, 16).replace(/-/gi, ".");
  const authJudge = getCookie("auth");

  //유저 정보 불러오는 userInfoAPI와 data
  const userInfoAPI = () => {
    return authJudge ? instance.get("/me") : null;
  };
  const { data } = useQuery(["userInfo"], userInfoAPI, {
    isError: () => {
      return null;
    },
  });

  //사용자 닉네임
  const userInformation = data?.data.nickname;
  //작성자 닉네임
  const writerInformation = list.nickname;

  return (
    <StSnsCommentContainer>
      <StSnsCommentWriterInfo>
        <StSnsCommentUserImg
          alt="댓글 작성자 프로필 이미지"
          src={list.user_image}
        />
        <StSnsCommentWriterNameTimeBox>
          <StSnsCommentWriterNickName>
            {list.nickname}
          </StSnsCommentWriterNickName>
          <StSnsCommentCreateTime>{timeForComment}</StSnsCommentCreateTime>
        </StSnsCommentWriterNameTimeBox>
        <StMoreIconImgBox>
          {userInformation === writerInformation ? (
            <StMoreIconImg
              src={moreIcon}
              alt="댓글추가기능 아이콘"
              onClick={() => {
                setMoreButtonModal(!moreButtonModal);
              }}
            />
          ) : null}
        </StMoreIconImgBox>
        {moreButtonModal && (
          <CommentMoreButtonModal
            setMoreButtonModal={setMoreButtonModal}
            list={list}
          />
        )}
      </StSnsCommentWriterInfo>
      <StSnsCommentBody>{list.comment}</StSnsCommentBody>
    </StSnsCommentContainer>
  );
};

export default SnsComment;

const StSnsCommentContainer = styled.div`
  border-bottom: 1px solid #dfdfdf;
  position: relative;
  margin: 0 16px;
  padding: 16px 0 0 0;
`;

const StSnsCommentWriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StSnsCommentUserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StSnsCommentWriterNameTimeBox = styled.div`
  width: 245px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const StSnsCommentCreateTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #c2c2c2;
`;

const StSnsCommentWriterNickName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3f3f;
`;

const StSnsCommentBody = styled.div`
  color: #3f3f3f;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 10px 0 12px 52px;
`;

const StMoreIconImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StMoreIconImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
