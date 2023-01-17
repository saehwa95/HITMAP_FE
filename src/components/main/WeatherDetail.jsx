import React from "react";
import styled from "styled-components";
import WeatherDetailInfo from "../../elements/WeatherDetailInfo";
import TideGraph from "./TideGraph";
import WeatherDetailTitle from "./WeatherDetailTitle";

const WeatherDetail = ({ weatherInfo }) => {
  return (
    <WeatherContainer>
      <WeatherDetailTitle />
      <WeatherDetailInfo weatherInfo={weatherInfo} />
      <TideGraph weatherInfo={weatherInfo} />
    </WeatherContainer>
  );
};

export default WeatherDetail;

const WeatherContainer = styled.div`
display:flex;
`;
