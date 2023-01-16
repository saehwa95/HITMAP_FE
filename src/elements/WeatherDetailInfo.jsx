import React from "react";
import styled from "styled-components";

const WeatherDetailInfo = ({ weatherInfo }) => {
  const weatherData = weatherInfo?.data?.data;
  console.log(weatherData);
  return (
    <Wrapper>
      <div>시간 : </div>
      <div>{weatherData?.temp}</div>
      <div>{weatherData?.wind_speed}</div>
      <div>{weatherData?.wind_deg}</div>
      <div>{weatherData?.wave_info[0].wave_height}</div>
    </Wrapper>
  );
};

export default WeatherDetailInfo;

const Wrapper = styled.div`
  width: 100px;
  background-color: yellow;
`;
