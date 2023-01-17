import React from "react";
import styled from "styled-components";
import StatusBar from "../layout/appBar/StatusBar";
import smallBackButton from "../../asset/button/smallBackButton.svg";
import { Link } from "react-router-dom";

const PlaceName = ({ placeName }) => {
  return (
    <>
      <StatusBar />
      <Name>
        <div>
          <Link to={"/"}>
            <button>
              <img src={smallBackButton} alt="" />
            </button>
          </Link>
          <span>{placeName}</span>
        </div>
      </Name>
    </>
  );
};

export default React.memo(PlaceName);

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 64px;
  justify-content: center;
  padding: 8px 16px;
  background-color: #ffffff;
  margin-bottom: 16px;
  div {
    display: flex;
    align-items: center;
    width: 343px;
    height: 48px;
    background-color: #ffffff;
  }
  button {
    width: 48px;
    height: 48px;
    background-color: #ececec;
    border-radius: 16px;
    border: none;
    cursor: pointer;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #1f1f1f;
    margin-left: 71px;
  }
`;
