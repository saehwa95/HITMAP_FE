import React from "react";
import WeatherDetailInfo from "../../elements/WeatherDetailInfo";
import TideGraph from "./TideGraph";
import WeatherDetailTitle from "./WeatherDetailTitle";

const WeatherDetail = ({ weatherInfo }) => {
  return (
    <>
      <WeatherDetailTitle />
      <WeatherDetailInfo weatherInfo={weatherInfo} />
      <TideGraph weatherInfo={weatherInfo} />
    </>
  );
};

export default WeatherDetail;
