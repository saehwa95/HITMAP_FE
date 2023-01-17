import React from "react";
import styled from "styled-components";

const WeatherDetailInfo = () => {
  return (
    <WeatherDetailTitleWrapper>
      <div className="time">
        <span>시간</span>
      </div>
      <div>
        <div className="temp same_height">
          <span>기온</span>
        </div>
        <div className="wind_deg same_height">
          <span>풍향</span>
          <span>(m/s)</span>
        </div>
        <div className="wind_speed same_height">
          <span>풍속</span>
          <span>(m)</span>
        </div>
        <div className="wave_info same_height">
          <span>
            <span>파고</span>
          </span>
        </div>
        <div className="tide_info">
          <span>조석</span>
        </div>
      </div>
    </WeatherDetailTitleWrapper>
  );
};

export default WeatherDetailInfo;

const WeatherDetailTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  float: left;
  position: absolute;
  width: 64px;
  height: 688px;
  background-color: #f6f6f6;
  border-right: 1px solid #ececec;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #979797;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 64px;
    gap: 12px;
  }
  .time {
    height: 48px;
    background: #003b49;
    span {
      color: #ffffff;
    }
  }
  .same_height {
    height: 80px;
  }
  .wind_deg {
    gap: 2px;
  }
  .wind_speed {
    gap: 2px;
  }
  .tide_info {
    height: 272px;
  }
`;
