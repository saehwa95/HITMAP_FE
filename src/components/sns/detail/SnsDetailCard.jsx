import React from "react";
import SnsCommentList from "./SnsCommentList";
//sns 상세카드 한 장 컴포넌트
const SnsDetailCard = () => {
  return (
    <div>
      <div>프로필아이콘, 닉네임, 생성시간</div>
      <div>작성내용 들어갈 자리</div>
      <div>작성사진 들어갈 자리</div>
      <div>조황정보 들어갈 자리</div>
      <div>좋아요, 댓글 status</div>
      <SnsCommentList />
    </div>
  );
};

export default SnsDetailCard;
