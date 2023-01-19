import React, { useState } from "react";
import styled from "styled-components";
import KakaoMap from "./KakaoMap";
import searchIcon from "../../asset/icon/searchIcon.svg";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  return (
    <>
      <SearchBar>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            placeholder="낚시 포인트를 검색해보세요."
            onChange={onChange}
            value={inputText}
          />
          <button type="submit">
            <img src={searchIcon} alt="" />
          </button>
        </form>
      </SearchBar>
      <KakaoMap searchPlace={place} />
    </>
  );
};

export default Search;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;
  position: absolute;
  width: 375px;
  top: 44px;
  padding: 8px 16px;
  z-index: 100;
  form {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    width: 343px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #ffffff;
    :focus-within {
      border: 2px solid #006981;
    }
  }
  input {
    width: 250px;
    height: 40px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #1f1f1f;
    border: none;
    caret-color: #3e74ff;
    :focus {
      outline: none;
    }
  }
  button {
    width: 24px;
    height: 24px;
    order: 1;
    flex-grow: 0;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
  }
  img {
    width: 20px;
    height: 20px;
    filter: invert(72%) sepia(1%) saturate(0%) hue-rotate(160deg)
      brightness(85%) contrast(80%);
    :hover {
      filter: invert(24%) sepia(80%) saturate(1332%) hue-rotate(161deg)
        brightness(100%) contrast(101%);
    }
  }
`;
