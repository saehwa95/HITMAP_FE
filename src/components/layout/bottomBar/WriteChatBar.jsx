import React, { useState } from "react";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import io from "socket.io-client";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";
import { getCookie } from "../../../shared/cookie";
const WriteCommentBar = () => {
  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie("auth");

  const socket = io.connect("소켓서버들어갈자리(express에 설정된 url)");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
  const onChangeMessageHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("키값", { message, room });
  };

  //메시지를 수신할 때 마다 호출되므로 소켓io 서버에서 이벤트가 발생할 때마다 실행되는 함수
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageRecived(data.message);
  //   });
  // }, [socket]);

  //유저 정보 불러오는 fetchAPI와 data
  const userInfoAPI = () => {
    return authJudge ? instance.get("/me") : null;
  };
  const { data } = useQuery(["userInfo"], userInfoAPI);
  return authJudge ? (
    <StWriteCommentBarContainer>
      <StWriteCommentBarBox>
        <StUserProfileImg
          alt="유저 프로필이미지"
          src={data?.data.profile_image}
        />
        <StTextBar>
          <StTextInput
            maxLength="50"
            onChange={onChangeMessageHandler}
            placeholder="메시지 보내기(최대 50자)"
            value={message}
          />
          <StSendButton
            //채팅방 삭제 onClick 함수 들어갈 자리
            onClick={sendMessage}
          >
            등록
          </StSendButton>
        </StTextBar>
      </StWriteCommentBarBox>
    </StWriteCommentBarContainer>
  ) : null;
};

export default WriteCommentBar;

const StWriteCommentBarContainer = styled.div`
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  bottom: 0px;
  width: 375px;

  z-index: 100;
  position: absolute;
`;

const StWriteCommentBarBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px 39px 16px;
`;

const StUserProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 15px;
`;

const StTextBar = styled.div`
  width: 300px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`;

const StTextInput = styled.input`
  width: 240px;
  border: none;
  border-radius: 16px;
  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #c2c2c2;
    text-indent: 16px;
  }
  &:focus {
    outline: none;
  }
`;

const StSendButton = styled.button`
  width: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #979797;
  border: none;
  background-color: transparent;
`;
