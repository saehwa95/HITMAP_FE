import React from "react";
import styled from "styled-components";

const WeatherDetailInfo = ({ weatherData }) => {
  const weatherList = weatherData?.weather;

  return (
    <Wrapper>
      {weatherList?.map((value, index) => {
        const wind = value.wind_deg;
        const windDeg = () => {
          if (wind === 0) {
            return "북";
          } else if (wind > 0 && wind < 90) {
            return "북동";
          } else if (wind === 90) {
            return "동";
          } else if (wind > 90 && wind < 180) {
            return "남동";
          } else if (wind === 180) {
            return "남";
          } else if (wind > 180 && wind < 270) {
            return "남서";
          } else if (wind === 270) {
            return "서";
          } else if (wind > 270 && wind < 360) {
            return "북서";
          } else if (wind === 360) {
            return "북";
          }
        };
        return (
          <WeatherDetailInfoWrapper key={`weather-info-${index}`}>
            <div className="time">
              <span>{value?.time}</span>
            </div>
            <div>
              <div className="temp same_height">
                <span className="icon_relative">
                  {value?.temp}
                  <span className="icon">º</span>
                </span>
              </div>
              <div className="rain_info same_height">
                <span>{value?.rain}</span>
                <span className="meter">mm</span>
              </div>
              <div className="wind_deg same_height">
                <span>{windDeg()}</span>
              </div>
              <div className="wind_speed same_height">
                <span>{value?.wind_speed}</span>
                <span className="meter">m/s</span>
              </div>
            </div>
          </WeatherDetailInfoWrapper>
        );
      })}
    </Wrapper>
  );
};

export default React.memo(WeatherDetailInfo);

const Wrapper = styled.div`
  display: flex;
`;

const WeatherDetailInfoWrapper = styled.div`
  width: 64px;
  height: 368px;
  background-color: #f6f6f6;
  border-right: 1px solid #ececec;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #1f1f1f;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 64px;
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
  .wind_speed,
  .rain_info {
    gap: 2px;
  }
  .wind_deg,
  .wind_speed {
    span {
      color: #5e67de;
    }
  }
  .meter {
    font-size: 14px;
  }
`;
