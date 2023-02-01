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
        <div className="rain_info same_height">
          <span>강수</span>
        </div>
        <div className="wind_deg same_height">
          <span>풍향</span>
        </div>
        <div className="wind_speed same_height">
          <span>풍속</span>
        </div>
        <div className="tide_info">
          <span>조석</span>
        </div>
      </div>
    </WeatherDetailTitleWrapper>
  );
};

export default React.memo(WeatherDetailInfo);

const WeatherDetailTitleWrapper = styled.div`
  width: 64px;
  height: 688px;
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
    height: 320px;
  }
`;
