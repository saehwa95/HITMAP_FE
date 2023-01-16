import React from "react";
import PlaceName from "../../components/main/PlaceName";
import WeatherDetail from "../../components/main/WeatherDetail";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Weather = () => {
  /* useQuery 적용 */
  const WeatherfetchAPI = async () => {
    const WeatherData = await axios.get(
      `https://koyunhyeok.shop/weather?lat=${new URLSearchParams(
        window.location.search
      ).get("lat")}&lon=${new URLSearchParams(window.location.search).get(
        "lon"
      )}&place_name=${new URLSearchParams(window.location.search).get(
        "place_name"
      )}
        `
    );
    return WeatherData;
  };

  const weatherInfo = useQuery(["weatherdata"], WeatherfetchAPI);

  return (
    <>
      <PlaceName weatherInfo={weatherInfo} />
      <WeatherDetail weatherInfo={weatherInfo} />
    </>
  );
};

export default Weather;
