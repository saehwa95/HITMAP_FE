import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { instance } from "../../../redux/api/instance";

const WriteChatBar = () => {
  const [message, setMessage] = useState("");

  const onChangeMessageHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  };

  //유저 정보 불러오는 fetchAPI와 data
  const userInfoAPI = () => {
    return instance.get("/me");
  };
  const { data } = useQuery(["userInfo"], userInfoAPI);

  return (
    <StWriteChatBarContainer>
      <StWriteChatBarBox>
        <StUserProfileImg
          alt="유저 프로필이미지"
          src={data?.data.profile_image}
        />
        <StTextBar>
          <StTextInput onChange={onChangeMessageHandler} value={message} />
          <StSendButton
            onClick={() => {
              setMessage("");
            }}
          >
            전송
          </StSendButton>
        </StTextBar>
      </StWriteChatBarBox>
    </StWriteChatBarContainer>
  );
};

export default WriteChatBar;

const StWriteChatBarContainer = styled.div`
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  background-color: white;
  bottom: 0px;
  width: 375px;
  z-index: 100;
  position: absolute;
`;

const StWriteChatBarBox = styled.div`
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
  border: 1px solid brown;
  border-radius: 16px;
`;

const StSendButton = styled.button`
  width: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #979797;
  border: none;
  background-color: transparent;
`;
