import React from "react";
// import styled from "styled-components";
import SnsCreateAppBar from "../../layout/appBar/SnsCreateAppBar";

//얘는 모달일까 바텀시트일까
const SnsCreate = () => {
  return (
    <div>
      <SnsCreateAppBar />
      <div>사진선택 들어갈 자리</div>
      <div>
        작성내용 들어갈 자리
        <input />
      </div>
      <div>
        <label>조황정보</label>
        <input />
      </div>
    </div>
  );
};

export default SnsCreate;
