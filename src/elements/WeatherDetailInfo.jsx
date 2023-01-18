import React from "react";
import styled from "styled-components";
import TideGraph from "../components/main/TideGraph";

const WeatherDetailInfo = ({ weatherData }) => {
  const weatherList = weatherData?.weather;

  return (
    /* 풍향, 풍속 기온, 3시간 간격 시간 */
    <>
      {weatherList?.map((value, index) => {
        return (
          <WeatherDetailInfoWrapper key={`weather-info-${index}`}>
            <div className="time">
              <span>{value?.date}</span>
            </div>
            <div>
              <div className="temp same_height">
                <span className="icon_relative">
                  {value?.temp}
                  <span className="icon">º</span>
                </span>
              </div>
              <div className="wind_deg same_height">
                <span>{value?.wind_deg}</span>
              </div>
              <div className="wind_speed same_height">
                <span>{value?.wind_speed}</span>
              </div>
              <div className="wave_info same_height">
                <span>
                  <span>파고</span>
                </span>
              </div>
              <div className="tide_info">
                <TideGraph weatherData={weatherData} />
              </div>
            </div>
          </WeatherDetailInfoWrapper>
        );
      })}
    </>
  );
};

export default React.memo(WeatherDetailInfo);

const WeatherDetailInfoWrapper = styled.div`
  width: 64px;
  height: 688px;
  background-color: #f6f6f6;
  border-right: 1px solid #ececec;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    color: #1f1f1f;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 64px;
    gap: 12px;
  }
  .icon_relative {
    position: relative;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: -10px;
    margin-left: 30px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1f1f1f;
  }
  .time {
    height: 48px;
    background: #006981;

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
  .wind_deg,
  .wind_speed {
    span {
      color: #5e67de;
    }
  }
`;
